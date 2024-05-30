const PlayerInfo = ({ info: { inGameName, tagline } }) => {
    return (
        <div className='m-2 p-2 border-b border-solid border-blue-500'>
            <h1>{`${inGameName}#${tagline}`}</h1>
        </div>
    )
}

export default PlayerInfo