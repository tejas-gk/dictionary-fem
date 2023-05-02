import Footer from "./Footer";
import NounOrVerb from "./NounOrVerb";
import { FontContext } from "./SelectFonts"
import { useContext ,useEffect} from 'react'
export default function Results({
    results
}: any) {
    console.log('from results', results[0]?.meanings[0]?.definitions[0].definition)
    const { font } = useContext(FontContext);



    useEffect(() => {
        alert(font)
    }, [font])

    if (!results[0]?.meanings[0]?.definitions[0].definition) return (
        <div>
            <h1 style={{
                fontFamily: font
            }}
            >
                No results found
            </h1>
        </div>
    )


    return (
        <div>
            <div className='flex flex-col'>
                <div className='
            flex justify-between items-center
            '>
                    <h1
                        style={{
                            fontFamily: font
                        }}
                        className='text-5xl font-extrabold'>
                        {results[0]?.word}
                    </h1>
                    <img src='/assets/dictionary/assets/images/icon-play.svg' alt='volume icon' />
                </div>

                <p className='text-primary'>
                    {results[0]?.phonetic}
                </p>
            </div>
            <div>
                <NounOrVerb
                    word={results[0]}
                />
            </div>

            
           <Footer word={results}/>
        </div>
    )
}
