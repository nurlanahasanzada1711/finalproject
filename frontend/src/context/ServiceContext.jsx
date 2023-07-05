import { createContext, useContext, useEffect, useState } from "react";

const ServiceContext = createContext();

// eslint-disable-next-line react/prop-types
export const ServiceContextProvider = ({children}) => {
   const [service, setService] = useState(null);
   useEffect(()=>{
    if (localStorage.getItem('service')) {
        setService(localStorage.getItem('service'));
    }
   },[])
    const values = [
        service,setService
    ]
    return (
        <ServiceContext.Provider value={values}>
            {children}
        </ServiceContext.Provider>
    )
}

export const useServiceContext = ()=> useContext(ServiceContext);