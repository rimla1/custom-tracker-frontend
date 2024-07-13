const StatsAdditionalInfo = ({totalDamage, totalGold, totalFarm, totalLength, games}) => {

    const farmPerMinute = (totalFarm / totalLength).toFixed(2);
    const farmPerGame = (totalFarm / games).toFixed()

    const goldPerGame = (totalGold / games).toFixed(2);
    const goldPerMinut = (totalGold / totalLength).toFixed(2)

    const dps = (totalDamage / (totalLength * 60)).toFixed(2);  
    const damagePerGame = (totalDamage / games).toFixed();

    return (
        <div className="p-4 bg-gray-700 text-white rounded-lg shadow-lg w-64">
            <div className="mb-2">
                <p className="font-bold">Total Damage: <span className="text-green-400">{totalDamage}</span></p>
                <p className="font-bold">Damage per Game: <span className="text-green-400">{damagePerGame}</span></p>
                <p className="font-bold">DPS: <span className="text-green-400">{dps}</span></p>
            </div>
            <div className="mb-2">
                <p className="font-bold">Total Gold: <span className="text-yellow-400">{totalGold}</span></p>
                <p className="font-bold">Gold per Game: <span className="text-yellow-400">{goldPerGame}</span></p>
                <p className="font-bold">Gold per Minute: <span className="text-yellow-400">{goldPerMinut}</span></p>
            </div>
            <div className="mb-2">
                <p className="font-bold">Total Farm: <span className="text-purple-400">{totalFarm}</span></p>
                <p className="font-bold">Farm per Game: <span className="text-purple-400">{farmPerGame}</span></p>
                <p className="font-bold">Farm per Minute: <span className="text-purple-400">{farmPerMinute}</span></p>
            </div>
            <div className="mb-2">
                <p className="font-bold">Total time: <span className="text-cyan-400">{totalLength}</span> minutes</p>
            </div>
        </div>
    );
};

export default StatsAdditionalInfo;
