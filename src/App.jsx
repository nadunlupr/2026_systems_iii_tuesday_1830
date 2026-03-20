import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'
import GroupCard from './groups/group-card'

function App() {

  const initialState = {
    searchText: ''
  }
  const groups = ['best group', 'smart group', 'average group', 'other group'];
  const [state, setState] = useState(initialState);

  const onSearchChange = (text) => {
    setState({
      ...state,
      searchText: text
    })
  }

  return (
    <>
      <Link to='/counter'>Go to Counter</Link>
      <input type='text'
        onChange={({ target: { value } }) => onSearchChange(value)} />
      {
        groups.map((group) => {
          return group.includes(state.searchText) ?
            <GroupCard name={group} /> :
            undefined
        })
      }
    </>
  )
}

export default App
