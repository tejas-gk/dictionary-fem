import React from 'react'

export default function NounOrVerb({
    word
}) {
    return (
        <div>
            {
                word?.meanings.map((meaning: any,i:number) => (
                    <div key={i}
                        className='mt-8 
                    '>
                        <h1 className='text-2xl font-bold'>
                            {meaning.partOfSpeech}
                        </h1>
                        <h2 className='text-2xl font-bold text-gray-400 mt-20'>
                            Meaning
                        </h2>
                        {
                            meaning.definitions.map((definition: any,j:number) => (
                                <ul key={j} className='list-disc list-inside marker:text-[#ad76cd]'
                                >
                                    <li className='mb-4'>
                                        {definition.definition}
                                    </li>
                                    
                                </ul>
                            ))
                        }  
                        
                        {
                            meaning?.synonyms ? (
                                <>
                                    <h2 className='text-2xl font-bold text-gray-400 mt-10'>
                                        Synonyms
                                    </h2>
                                    <ul className='list-disc list-inside marker:text-[#ad76cd]'
                                    >
                                        {
                                            meaning?.synonyms.map((synonym: any, k: number) => (
                                                <li key={k}>
                                                    {synonym}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </>
                            ) : (
                                    <></>
                            
                            )
                                            
                        }
                        </div>
                ))

            }

        </div>
    )
}
