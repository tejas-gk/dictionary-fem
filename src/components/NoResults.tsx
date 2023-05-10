import React,{useContext} from 'react'
import { FontContext, FontAction } from '../contexts/FontContext';

export default function NoResults() {
  const [font, dispatch] = useContext(FontContext);

  return (
    <div className={`${font.font}`}>
      <h1 className='text-5xl font-extrabold flex items-center justify-center mt-9'>
        No results found 
      </h1>
    </div>
  )
}
