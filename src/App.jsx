import Header from './components/Header'
import Players from './components/Player/Players'
import Leaderboard from './components/Leaderboard'
import Shuffle from './components/Shuffle/Shuffle'
import GameModes from './components/GameModes/GameModes'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'

function App() {
  return (
    <>
    {/* Header */}
    <Header />
    {/* Outlet */}
    <Outlet />
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
          element: <Players />
        }
    ],
    errorElement: <Error />
  },

])

export default App
