import React, { useEffect, useState} from 'react' 
import { SetlistrProvider } from './SetlistrContext'

//Custom hook
function useSetlists() {
  const [setlists, setSetlists] = useState({});

  useEffect(() => {
    console.log('Mounting or updating')
    async function fetchData() {
      const res = await fetch('http://api.setlist.fm/rest/1.0/search/setlists?artistMbid=3826a6e0-9ea5-4007-941c-25b9dd943981&p=1',
        {
          credentials: 'include',
          mode: 'no-cors',
          cache: 'no-cache',
          headers: {
            'x-api-key':'lgCvBILGc-08m37G8JHbjKlQbOjb46pvD8NU',
            'User-Agent':'Setlistr.io',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Host': 'api.setlist.fm',
            'Connection': 'keep-alive'
          }
        }
      );
      console.log(res)
      //console.log(data)
      //setSetlists(data)
    }
    fetchData()
  }, [])
}

export default function Page({children}){
  const setlists = useSetlists();

  return (
    <SetlistrProvider
      value={{
        setlists
      }}
    >
        <div className="page">{children}</div>
    </SetlistrProvider>
  )
}