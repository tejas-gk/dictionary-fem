export default function NounOrVerb({ word }: any) {
    return (
        <div className='mx-4 lg:mx-0'>
            {word?.meanings.map((meaning: any, i: number) => (
                <div
                    key={i}
                    className='mt-8 
                    '
                >
                    <div className='flex items-center'>
                        <h1 className={`text-2xl font-bold`}>
                            {meaning.partOfSpeech}
                        </h1>
                        <div className='ml-5 h-[1px] flex-1 bg-gray-300 dark:bg-gray-100'></div>
                    </div>
                    <h2 className='mt-10 text-2xl font-bold text-gray-400'>
                        Meaning
                    </h2>
                    {meaning.definitions.map((definition: any, j: number) => (
                        <ul
                            key={j}
                            className='list-inside list-disc marker:text-primary

                                '
                        >
                            <li className='mb-4'>{definition.definition}</li>
                        </ul>
                    ))}

                    {meaning?.synonyms ? (
                        <>
                            <h2 className='mt-10 text-2xl font-bold text-gray-400'>
                                Synonyms
                            </h2>
                            <ul className='list-inside list-disc font-bold text-[#ad76cd]'>
                                {meaning?.synonyms.map(
                                    (synonym: any, k: number) => (
                                        <li key={k}>{synonym}</li>
                                    )
                                )}
                            </ul>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            ))}
        </div>
    );
}
