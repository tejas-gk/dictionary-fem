import Footer from "./Footer";
import NoResults from "./NoResults";
import NounOrVerb from "./NounOrVerb";
import { FontContext } from "./SelectFonts"
import { useContext ,useEffect} from 'react'
export default function Results({
    results
}: any) {
    console.log('from results', results[0]?.meanings[0]?.definitions[0].definition)
    // const { font } = useContext(FontContext);



    if (!results[0]?.meanings[0]?.definitions[0].definition) return (
        <div>
           <NoResults/>
        </div>
    )

    const getAudio = () => {
        const audio = new Audio(results[0]?.phonetics?.find((p:any) => p.audio)?.audio);
        if (audio) {
            audio.play();
        }
        
    };

    return (
        <div>
            <div className='flex flex-col'>
                <div className='
            flex justify-between items-center
            '>
                    <h1
                        
                        className='text-5xl font-extrabold'>
                        {results[0]?.word}
                    </h1>
                    <button
                        onClick={getAudio}
                        className='audio-btn'
                    >
                        <img src='/assets/dictionary/assets/images/icon-play.svg' alt='volume icon' />
                    </button>
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
