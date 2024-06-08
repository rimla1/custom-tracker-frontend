import Header from './components/Header'
import Players from './components/Players'
import Leaderboard from './components/Leaderboard'
import Shuffle from './components/Shuffle/Shuffle'
import GameModes from './components/GameModes/GameModes'

function App() {
  return (
    <>
    {/* Header */}
    <Header />
    {/* Outlet */}
    <GameModes />
    {/* Footer */}

    </>
  )
}

export default App
