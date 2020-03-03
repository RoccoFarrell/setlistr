import React, { useContext } from 'react'
import SetlistrContext from './SetlistrContext'
import { Pane, Text, Table } from 'evergreen-ui'

export default function Data() {
  const setlistData = useContext(SetlistrContext)
  console.log(setlistData)
  console.log(setlistData.setlistObj.setlist)
  let shows = setlistData.setlistObj.setlist

  return (
    <Pane>
      <Table>
        <Table.Head>
          <Table.SearchHeaderCell />
          <Table.TextHeaderCell>
            Date
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            # Sets
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {shows.map(show => (
            <Table.Row key={show.id} isSelectable onSelect={() => alert(show.id)}>
              <Table.TextCell>{show.venue.name}</Table.TextCell>
              <Table.TextCell>{show.eventDate}</Table.TextCell>
              <Table.TextCell isNumber>
                {show.sets.set.length}
              </Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Pane>
  )
}