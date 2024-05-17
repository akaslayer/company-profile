'use client'
import useUserData from '@/app/hooks/useUserData'
import { TeamExtensionData } from '@/utils/TeamMemberData'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

type TeamPicture = {
  large: string
}
type Dob = {
  age: number
}
type TeamName = {
  title: string,
  first: string,
  last: string
}
export interface TeamList {
  gender: string
  name: TeamName
  city: string
  state: string,
  country: string,
  postcode: number,
  email: string,
  phone: string,
  picture: TeamPicture
  dob: Dob
}

export interface NewTeamList {
  gender: string
  name: TeamName
  city: string
  state: string,
  country: string,
  postcode: number,
  email: string,
  phone: string,
  picture: TeamPicture
  dob: Dob
  description: string,
  job: string
}
interface ContextProps {
  openSideBar: boolean
  setStateSideBar: Dispatch<SetStateAction<boolean>>
  teamData: NewTeamList[]
  loading: boolean,
}

const defaultValue = {
  openSideBar: false,
  setStateSideBar: () => { },
  teamData: [],
  loading: false,
}


export const StateContext = createContext<ContextProps>(defaultValue)

const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openSideBar, setStateSideBar] = useState<boolean>(false)
  const { teamList, loading } = useUserData()
  const [teamData, setTeamData] = useState<NewTeamList[]>([])



  useEffect(() => {
    const combineData = (teamList: TeamList[], additionalData: { description: string, job: string }[]) => {
      let index = -1;
      return teamList.map(teamMember => {
        index++;
        return { ...teamMember, ...additionalData[index] };
      });
    };

    const combinedData = combineData(teamList, TeamExtensionData);
    setTeamData(combinedData);
  }, [teamList]);




  return (
    <StateContext.Provider
      value={{ openSideBar, setStateSideBar, teamData, loading }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider

export const useStateValue = () => useContext(StateContext);

