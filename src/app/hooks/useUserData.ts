import { TeamList } from '@/context/StateContext'
import { useEffect, useState } from 'react'

const useUserData = () => {
  const [teamList, setTeamList] = useState<TeamList[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          'https://randomuser.me/api/?page=1&results=6&seed=abc'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch user data.')
        }
        const data = await response.json()
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
