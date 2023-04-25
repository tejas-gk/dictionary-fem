import  { useState } from 'react'
import Header from './components/Header'
import axios from 'axios';
import { Search } from 'react-feather';
import Results from './components/Results';
function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    console.log(dictionaryUrl);
    axios.get(dictionaryUrl).then((res) => {
      console.log(res);
      setResults(res.data);
      console.log('rrr', results);
    });
  };
  return (
    <>
      <Header />
      <div className='w-[50rem]  mx-auto mt-5 mb-5'>
        <div className='w-full'>
          <form
            className='flex justify-between items-center w-full py-2 px-10 rounded-md bg-[#f4f4f4]'
            onSubmit={handleSearch}
          >
            <input
              placeholder='Search for any word...'
              type='text'
              className='text-xl w-full bg-transparent border-none outline-none leading-8 font-bold'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              title='Search'
              type='button'>
              <Search />
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
