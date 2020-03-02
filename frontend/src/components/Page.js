import React, { useEffect, useState} from 'react' 
import SetlistrContext, { SetlistrProvider } from './SetlistrContext'

//Custom hook
function useSetlists() {
  const [setlists, setSetlists] = useState({});

  useEffect(() => {
    console.log('Mounting or updating')
    async function fetchData() {
      const data = await fetch('http://localhost:4000/bands/umphreys', {
        mode: 'cors'
      })
      console.log(data, data.body)
      let content = data.body.getReader().read()
      console.log(content)
      return content
    }
    let setlistData = fetchData()
    setSetlists(setlistData)
  }, [])
  return setlists
}

export default function Page({children}){
  const setlists = useSetlists();

  return (
    <SetlistrContext.Provider
      value={{
        setlists
      }}
    >
        <div className="page">{children}</div>
    </SetlistrContext.Provider>
  )
}