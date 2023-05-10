import { useContext } from 'react';
import { FontContext } from '../contexts/FontContext';

export default function NoResults() {
    const [font] = useContext(FontContext);

    return (
        <div className={`${font.font}`}>
            <h1 className='mt-9 flex items-center justify-center text-xl font-extrabold lg:text-7xl'>
                No results found
            </h1>
        </div>
    );
}
