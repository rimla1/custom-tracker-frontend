import { useEffect, useState } from 'react'
import { PLAYERSTATS_API } from '../../utils/constants'
import PlayerInfoDonut from './PlayerInfoDonut'
import PlayerInfoBar from './PlayerInfoBar'

const PlayerInfo = ({ info: { inGameName, tagline, id } }) => {
    const [playerInfo, setPlayerInfo] = useState(undefined)


    useEffect(() => {
        fetchPlayerStats()
    }, [inGameName])

    const fetchPlayerStats = async () => {
        const playerStats = await fetch(`${PLAYERSTATS_API}${id}`)
        const playerStatsJson = await playerStats.json()
        setPlayerInfo(playerStatsJson)
    }
   if(!playerInfo){
    return <> </>
   }

   const {kills, deaths, assists, wins, games} = playerInfo

    return (
        <div className='m-2 p-2 py-20 flex items-center justify-around'>
            <PlayerInfoDonut wins={wins} games={games}/>
            <h1 className='mx-4 px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg shadow-lg'>{`${inGameName}#${tagline}`}</h1>
            <PlayerInfoBar kills={kills} deaths={deaths} assists={assists}/>
        </div>
    )
}

export default PlayerInfo