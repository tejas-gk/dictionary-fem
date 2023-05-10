import { useState, useEffect} from 'react';
import Modes from './Modes';
import SelectFonts from './SelectFonts';

export default function Header() {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

    
   
    useEffect(() => {
        if (mode === 'dark') {
            document.body.classList.add('dark');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('mode', 'light');
        }
    }, [mode]);
    

    return (
        <div
            className='flex  justify-center items-center h-20 w-full bg-white dark:bg-black
    '
        >
            <img
                src='/assets/dictionary/assets/images/logo.svg'
                alt='dictionary logo'
            />
            <div
                className='flex items-center w-1/2  justify-end gap-2
      '
            >
               <SelectFonts/>

                <span className='text-gray-400 mx-4'>|</span>
                <Modes
                    theme={mode}
                    onClick={() => {
                        setMode(mode === 'dark' ? 'light' : 'dark');
                    }}
                />
            </div>
        </div>
    );
}
