import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Logo } from './components/Logo';
import { Event } from './pages/Event';
import './styles/global.css'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);


  return (
    <>
      <Event />
    </>
  )
}

export default App
