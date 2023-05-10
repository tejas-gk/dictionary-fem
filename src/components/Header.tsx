import { useState, useEffect } from 'react';
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
            className='mx-10 flex h-20 w-full items-center justify-between bg-white dark:bg-black lg:-mx-2 lg:justify-center
    '
        >
            <img
                src='/assets/dictionary/assets/images/logo.svg'
                alt='dictionary logo'
            />
            <div
                className='mr-12 flex items-center  justify-end gap-2  lg:mr-0 lg:w-1/2
      '
            >
                <SelectFonts />

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
