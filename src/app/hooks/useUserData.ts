import { NewTeamList, TeamList } from '@/context/StateContext'
import { useEffect, useState } from 'react'

const useUserData = () => {
  const [teamList, setTeamList] = useState<TeamList[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      try {
        const storedUser = localStorage.getItem('userList')
        if (storedUser && storedUser.length > 0) {
          const parsedData: TeamList[] = JSON.parse(storedUser)
          setTeamList(parsedData)
          setLoading(false)
          return
        }
        const response = await fetch(
          'https://randomuser.me/api/?page=1&results=6&seed=abc'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch user data.')
        }
        const data = await response.json()
        localStorage.setItem('userList', JSON.stringify(data.results))
        setTeamList(data.results)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching user data:', error)
        setLoading(false)
      }
    }
    fetchUserData()
  }, [])

  return { teamList, loading }
}

export default useUserData
