import React, {createContext, useContext, useState}  from "react";

const nameContext = createContext();
 
export default function NameProvider({children}){
  const [name, setName] = useState('')
  return (

    <nameContext.Provider value={{name,setName}}>{children}</nameContext.Provider>
  )
}

export function useName(){
  const context = useContext(nameContext);
  if(!context) throw new Error('useName must be used within a NameProvider')
  const {name, setName} = context;
  return {name, setName};
}