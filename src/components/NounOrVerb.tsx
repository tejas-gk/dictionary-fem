import React,{useContext} from 'react'
import { FontContext, FontAction } from '../contexts/FontContext';

export default function NounOrVerb({
    word
}: any) {
    const [font, dispatch] = useContext(FontContext);
    return (

        <div>
            {
                word?.meanings.map((meaning: any, i: number) => (
                    <div key={i}
                        className='mt-8 
                    '>
                        <div className='flex items-center'>
                            <h1 className={`text-2xl font-bold`}>
                                {meaning.partOfSpeech}
                            </h1>
                            <div className="ml-5 flex-1 h-[1px] bg-gray-300 dark:bg-gray-100"></div>
                        </div>
                        <h2 className='text-2xl font-bold text-gray-400 mt-10'>
                            Meaning
                        </h2>
                        {
                            meaning.definitions.map((definition: any, j: number) => (
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
                                    <ul className='list-disc list-inside text-[#ad76cd] font-bold'
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
