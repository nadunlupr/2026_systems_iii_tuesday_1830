import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'
import GroupCard from './groups/group-card'
import Layout from './nav-bar/Layout'
import { UserProvider } from './context-demo/UserProvider'

function App() {

  const initialState = {
    searchText: '',
    pressedId: undefined
  }
  const groups = [
    { id: 1, name: 'best group' },
    { id: 2, name: 'smart group' },
    { id: 3, name: 'average group' },
    { id: 4, name: 'other group' }];
  const [state, setState] = useState(initialState);

  const onSearchChange = (text) => {
    setState({
      ...state,
      searchText: text
    })
  }

  const user = {
    name: 'Marko Vranješ'
  }

  return (
    <>
      <UserProvider user={user}>
        <Layout />
        {/* <OtherChildren/> */}
      </UserProvider>
      <Link to='/store-demo'>Go to Store Counter Demo</Link>
      <br />
      <Link to='/counter'>Go to Counter</Link>
      <br />
      <Link to='/promise-demo'>Go to promise demo</Link>
      <br />
      <input type='text'
        onChange={({ target: { value } }) => onSearchChange(value)} />
      {
        groups.map(({ id: groupId, name }) => {
          return name.includes(state.searchText) &&
            <GroupCard
              key={groupId}
              name={name}
              isSelected={state.pressedId === groupId}
              id={groupId}
              onCardClick={(id) => setState({ ...state, pressedId: id })} />
        })
      }
    </>
  )
}

export default App
