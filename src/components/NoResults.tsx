import {useContext} from 'react'
import { FontContext } from '../contexts/FontContext';

export default function NoResults() {
  const [font] = useContext(FontContext);

  return (
    <div className={`${font.font}`}>
      <h1 className='text-5xl font-extrabold flex items-center justify-center mt-9'>
        No results found 
      </h1>
    </div>
  )
}
