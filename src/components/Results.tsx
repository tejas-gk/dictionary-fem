import Footer from './Footer';
import NoResults from './NoResults';
import NounOrVerb from './NounOrVerb';
import { FontContext } from '../contexts/FontContext';
import { useContext } from 'react';
export default function Results({ results }: any) {
    const [font] = useContext(FontContext);

    if (!results[0]?.meanings[0]?.definitions[0].definition)
        return (
            <div>
                <NoResults />
            </div>
        );

    const getAudio = () => {
        const audio = new Audio(
            results[0]?.phonetics?.find((p: any) => p.audio)?.audio
        );
        if (audio) {
            audio.play();
        }
    };

    return (
        <div className={`${font.font}`}>
            <div className='mx-5 flex flex-col'>
                <div
                    className='
            flex items-center justify-between 
            '
                >
                    <h1 className='text-5xl  font-extrabold'>
                        {results[0]?.word}
                    </h1>
                    <button onClick={getAudio} className='audio-btn'>
                        <img
                            src='/assets/dictionary/assets/images/icon-play.svg'
                            alt='volume icon'
                            className='lg:h-none lg:w-none h-16 w-16'
                        />
                    </button>
                </div>

                <p className='text-primary'>{results[0]?.phonetic}</p>
            </div>
            <div className='
                lg:mx-5 mx-1 
            '
            
            >
                <NounOrVerb word={results[0]} />
            </div>

            <Footer word={results} />
        </div>
    );
}
