import  { useState,useContext } from 'react'
import Header from './components/Header'
import axios from 'axios';
import { Search as SearchIcon } from 'react-feather';
import Results from './components/Results';
import { FontContext } from './contexts/FontContext';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const [font] = useContext(FontContext);


  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    axios.get(dictionaryUrl).then((res) => {
      setResults(res.data);
    });
  };

  return (
    <>
        <Header />
        
      <div className={`w-[50rem]  mx-auto mt-5 mb-5 ${font.font}`}>
          <div className='w-full'>
          <form
            className='flex justify-between items-center w-full py-2 px-10 rounded-md bg-[#f4f4f4] '
            onSubmit={handleSearch}
          >
            <input
              placeholder='Search for any word...'
              type='text'
              className='text-xl w-full bg-transparent border-none outline-none leading-8 font-bold  dark:placeholder-gray-400
              dark:text-black focus:border-[#f4f4f4]
              '
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              title='Search'
              type='button'>
              <SearchIcon
                className='text-2xl text-gray-400 dark:text-black'
              />
            </button>
          </form>
        </div>
      </div>

      <section className='w-[50rem]  mx-auto mt-5 mb-5'>
        {
          results && (
            <Results
              results={results}
            />
          )
        }
        </section>
    </>
  )
}

export default App
