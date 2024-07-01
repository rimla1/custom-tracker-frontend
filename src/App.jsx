import Header from './components/Header'
import Players from './components/Player/Players'
import Leaderboard from './components/Leaderboard/Leaderboard'
import Shuffle from './components/Shuffle/Shuffle'
import GameModes from './components/GameModes/GameModes'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'
import MatchHistory from './components/MatchHistory/MatchHistory'
import CreateGame from './components/CreateGame/CreateGame'
import Authentication from './components/Authentication/Authentication'
import ProtectedRouteUser from './components/Authentication/ProtectedRouteUser'
import { useState } from 'react'
import ProtectedRouteAdmin from './components/Authentication/ProtectedRouteAdmin'

function App() {
  const [token, setToken] = useState("")
  return (
    <>
    {/* Header */}
    <Header token={token}/>
    {/* Outlet */}
    <Outlet context={{ setToken }}/>
    {/* Footer */}

    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/shuffle",
          element: <Shuffle />
        },
        {
          path: '/game-modes',
          element: <GameModes />
        },
        {
          path: '/players',
          element: <ProtectedRouteUser><Players /></ProtectedRouteUser>
        },
        {
          path: '/leaderboard',
          element: <ProtectedRouteUser><Leaderboard /> </ProtectedRouteUser>
        },
        {
          path: 'match-history',
          element: <MatchHistory />
        },
        {
          path: 'create-game',
          element: <ProtectedRouteAdmin> <CreateGame /> </ProtectedRouteAdmin>
        },
        {
          path: 'authentication',
          element: <Authentication />
        }
    ],
    errorElement: <Error />
  },

])

export default App
