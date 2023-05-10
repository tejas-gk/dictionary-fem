import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';

import { FontContext, FontAction } from '../contexts/FontContext';

const SelectFonts:React.FC = () => {
    const [open, setOpen] = useState(false);
    const [font, dispatch] = useContext(FontContext);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback((e:MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
            setOpen(false);
        }
    }, [selectRef]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [handleClickOutside]);


    const handleFontSelection = (selectedFont: string) => {
        const action: FontAction = {
            type: selectedFont,
        };
        dispatch(action);
        setOpen(false)
    };

    return (
        <div className='relative' ref={selectRef}>
            <div
                className='flex flex-row gap-3 items-center dark:text-white cursor-pointer'
                onClick={() => setOpen(!open)}
            >
                <h2>{font.font}</h2>
                <img src='/assets/dictionary/assets/images/icon-arrow-down.svg' alt='arrow down' />
            </div>
            {open && (
                <div className='flex flex-col gap-3 absolute top-10 left-0 bg-white dark:bg-black shadow-xl dark:shadow-xl dark:shadow-black rounded-md p-4 w-60 z-10 transition-all duration-500'>
                    <p
                        className='mr-16 gap-3 items-center dark:text-white hover:bg-gray-300 cursor-pointer w-full px-2 py-1 rounded-md dark:hover:bg-gray-700'
                        onClick={() => handleFontSelection('SELECT_FONT_SERIF')}
                    >
                        Serif
                    </p>
                    <p
                        className='mr-16 gap-3 items-center dark:text-white hover:bg-gray-300 cursor-pointer w-full px-2 py-1 rounded-md dark:hover:bg-gray-700'
                        onClick={() => handleFontSelection('SELECT_FONT_SANS_SERIF')}
                    >
                        Sans-serif
                    </p>
                    <p
                        className='mr-16 gap-3 items-center dark:text-white hover:bg-gray-300 cursor-pointer w-full px-2 py-1 rounded-md dark:hover:bg-gray-700'
                        onClick={() => handleFontSelection('SELECT_FONT_MONOSPACE')}
                    >
                        MonoSpace
                    </p>
                </div>
            )}
        </div>
    );
};

export default SelectFonts;
