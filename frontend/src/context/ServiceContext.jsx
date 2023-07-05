import { createContext, useContext, useEffect, useState } from "react";

const TeamContext = createContext();

// eslint-disable-next-line react/prop-types
export const TeamContextProvider = ({children}) => {
   const [team, setTeam] = useState(null);
   useEffect(()=>{
    if (localStorage.getItem('team')) {
        setTeam(localStorage.getItem('team'));
    }
   },[])
    const values = [
        team,setTeam
    ]
    return (
        <TeamContext.Provider value={values}>
            {children}
        </TeamContext.Provider>
    )
}

export const useTeamContext = ()=> useContext(TeamContext);