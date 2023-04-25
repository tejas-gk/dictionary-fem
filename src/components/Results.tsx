export default function Results({
    results
}: any) {
    console.log('from results', results[0]?.meanings[0]?.definitions[0].definition)
    return (
        <div>
            
            <div className='flex flex-col'>

                <div className='
            flex justify-between items-center
            '>
                    <h1 className='text-5xl font-extrabold'>
                        {results[0]?.word}
                    </h1>
                    <img src='/assets/dictionary/assets/images/icon-play.svg' alt='volume icon' />
                </div>

                <p className='text-[#ad76cd]'>
                    {results[0]?.phonetic}
                </p>
            </div>
            <div className="mt-10">
                <h2 className='text-2xl font-bold'>
                    {results[0]?.meanings[0]?.partOfSpeech}
                </h2>

                <h2 className='text-2xl font-bold text-gray-400 mt-10'>
                    Meaning
                </h2>
                <ul className='list-disc list-inside line-clamp-3 mt-5 gap-3 flex flex-col
                '>
                    {
                        results[0]?.meanings[0]?.definitions[0].definition
                    }
                    {
                        results[0]?.meanings[0]?.definitions?.map((def, i) => {
                            <li key={i}>
                                {def?.definition}
                            </li>
                        })
                    }
                </ul>
                
                <div>
                    <h2 className='text-2xl font-bold text-gray-400 mt-10'>
                        Synonyms
                    </h2>
                    <p className="text-[]">
                        {results[0]?.meanings[0]?.synonyms}
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <h2 className='text-2xl font-bold'>
                    {results[0]?.meanings[1]?.partOfSpeech}
                </h2>

                <h2 className='text-2xl font-bold text-gray-400 mt-10'>
                    Meaning
                </h2>
                <ul className='list-disc list-inside line-clamp-3 mt-5 gap-3 flex flex-col
                '>
                    <li className='text-md'>
                        a set of keys that are used to operate a computer or typewriter.
                    </li>
                    <li className='text-md'>
                        a set of keys that are used to operate a computer or typewriter.
                    </li>
                    <li className='text-md'>
                        a set of keys that are used to operate a computer or typewriter.
                    </li>
                </ul>
            </div>
            <p>
                <span>
                    Source
                </span>
                <span>
                    Oxford Dictionary
                </span>
           </p>

        </div>
    )
}
