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
        
      <div className="w-full mx-auto mt-5 mb-5 sm:w-80 md:w-96 lg:w-[50rem]">
        <div className="w-full">
          <form
            className="flex justify-between items-center mx-5 py-2 px-4 sm:px-10 rounded-md bg-[#f4f4f4]"
            onSubmit={handleSearch}
          >
            <input
              placeholder="Search for any word..."
              type="text"
              className="text-xl w-full sm:w-auto bg-transparent border-none outline-none leading-8 font-bold dark:placeholder-gray-400 dark:text-black focus:border-[#f4f4f4]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              title="Search"
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-2 sm:flex-shrink-0"
            >
              <SearchIcon className="text-2xl text-gray-400 dark:text-black -mt-3 lg:mt-0" />
            </button>
          </form>
        </div>
      </div>


      <section className='lg:w-[50rem]  mx-auto mt-5 mb-5'>
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
