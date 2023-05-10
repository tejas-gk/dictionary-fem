import { useState, useContext } from 'react';
import Header from './components/Header';
import axios from 'axios';
import { Search as SearchIcon } from 'react-feather';
import Results from './components/Results';
import { FontContext } from './contexts/FontContext';

function App() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const [font] = useContext(FontContext);

    const handleSearch = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
        axios.get(dictionaryUrl).then((res) => {
            setResults(res.data);
        });
    };

    return (
        <>
            <Header />

            <div
                className={`mx-auto mb-5 mt-5 w-full sm:w-80 md:w-96 lg:w-[50rem] ${font.font}`}
            >
                <div className='w-full'>
                    <form
                        className='mx-5 flex items-center justify-between rounded-md bg-[#f4f4f4] px-4 py-2 sm:px-10'
                        onSubmit={handleSearch}
                    >
                        <input
                            placeholder='Search for any word...'
                            type='text'
                            className='w-full border-none bg-transparent text-xl font-bold leading-8 outline-none focus:border-[#f4f4f4] dark:text-black dark:placeholder-gray-400 sm:w-auto'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            title='Search'
                            type='submit'
                            className='mt-3 sm:ml-2 sm:mt-0 sm:flex-shrink-0'
                        >
                            <SearchIcon className='-mt-3 text-2xl text-gray-400 dark:text-black lg:mt-0' />
                        </button>
                    </form>
                </div>
            </div>

            <section className='mx-auto  mb-5 mt-5 lg:w-[50rem]'>
                {results && <Results results={results} />}
            </section>
        </>
    );
}

export default App;
