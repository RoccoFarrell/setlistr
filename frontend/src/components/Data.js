import React, { useContext } from 'react'
import SetlistrContext from './SetlistrContext'
import { Pane, Text } from 'evergreen-ui'

export default function Data() {
  const setlistData = useContext(SetlistrContext)

  return (
    <Pane>
      {Object.keys(setlistData.setlists)}
      {/* {setlistData.forEach(item => {
        return (
          <Pane>
            {item}
          </Pane>
        )
      })} */}
    </Pane>
  )
}