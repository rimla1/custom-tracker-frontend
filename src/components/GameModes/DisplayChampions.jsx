const DisplayChampions = ({champions1, champions2}) => {

    return (
        <div className="flex flex-col md:flex-row justify-around p-4 space-y-4 md:space-y-0 md:space-x-4 items-stretch">
            <div className='blue-champs flex-1 bg-blue-100 p-4 rounded-md shadow-md'>
                <h1 className="text-blue-700 text-2xl mb-4">{champions1[0].placeOfOrigin}</h1>
                <div className="flex flex-wrap gap-2">
                    {champions1.map((champion) => (
                        <h1 key={champion.id} className="bg-blue-200 text-blue-800 px-2 py-1 rounded">{champion.name}</h1>
                    ))}
                </div>
            </div>
            <div className='red-champs flex-1 bg-red-100 p-4 rounded-md shadow-md'>
                <h1 className="text-red-700 text-2xl mb-4">{champions2[0].placeOfOrigin}</h1>
                <div className="flex flex-wrap gap-2">
                    {champions2.map((champion) => (
                        <h1 key={champion.id} className="bg-red-200 text-red-800 px-2 py-1 rounded">{champion.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DisplayChampions