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
            className='flex lg:justify-center justify-between items-center h-20 w-full bg-white dark:bg-black mx-10 lg:mx-0
    '
        >
            <img
                src='/assets/dictionary/assets/images/logo.svg'
                alt='dictionary logo'
            />
            <div
                className='flex items-center lg:w-1/2  justify-end gap-2  lg:mr-0 mr-12
      '
            >
               <SelectFonts/>

                <span className='text-gray-400 lg:mx-4'>|</span>
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
