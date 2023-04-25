import { createContext } from 'react';

const FontContext = createContext('');

export default function Header() {
    return (
        <div
            className='flex  justify-center items-center h-20 w-full 
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
                <div className='
                    flex flex-row mr-16 gap-3 items-center
                    '>

                    <h2>Sans-serif</h2>

                    <img
                        src='/assets/dictionary/assets/images/icon-arrow-down.svg'
                        alt='arrow down'
                        />
                </div>

                <span className='text-gray-400'>|</span>
                <div className='form-check form-switch'>
                    {/* <FontContext.Provider={value}> */}
                    <input
                        title='Switch to dark mode'
                        className='form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm'
                        type='checkbox'
                        role='switch'
                        id='flexSwitchCheckDefault'
                    />
                    {/* </FontContext.Provider/> */}
                </div>
                <img
                    src='/assets/dictionary/assets/images/icon-moon.svg'
                    alt='moon icon'
                />
            </div>
        </div>
    );
}
