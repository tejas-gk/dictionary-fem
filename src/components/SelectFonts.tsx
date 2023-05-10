import  { useState ,createContext,useRef ,useEffect,useCallback} from 'react'
const fonts = [
    {
        name: 'Sans-serif',
        fontFamily: 'sans-serif',
    },
    {
        name: 'Serif',
        fontFamily: 'serif',
    },
    {
        name: 'Monospace',
        fontFamily: 'monospace',
    }
]

export const FontContext = createContext(
    {}
);

export default function SelectFonts() {
    const [open, setOpen] = useState(false);
    const [font, setFont] = useState('sans-serif');

    const selectRef = useRef<HTMLSelectElement>(null);

    const handleClickOutside = useCallback((e:any) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
            setOpen(false);
        }
    }, [selectRef]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [handleClickOutside]);
    

  return (
      <div className='relative'
        ref={selectRef}
      >
        
          <div className='
                    flex flex-row  gap-3 items-center dark:text-white cursor-pointer
                    '
                  onClick={() => setOpen(!open)}
              >

              <h2>
                    {font}
              </h2>

              <img
                  src='/assets/dictionary/assets/images/icon-arrow-down.svg'
                  alt='arrow down'           
              />
          </div>
          {
              open && (
                  <div className='
                        flex flex-col gap-3 absolute top-10 left-0 bg-white dark:bg-black shadow-xl dark:shadow-xl dark:shadow-black rounded-md 
                        p-4 w-60 z-10 transition-all duration-500 
                        '
                  >
                      <p className='
                          mr-16 gap-3 items-center dark:text-white hover:bg-gray-300 cursor-pointer w-full px-2 py-1 rounded-md dark:hover:bg-gray-700
                            '
                            onClick={()=>setFont('serif')}
                      >
                          Serif
                        </p>
                      <p className='
                             mr-16 gap-3 items-center dark:text-white hover:bg-gray-300 cursor-pointer w-full px-2 py-1 rounded-md dark:hover:bg-gray-700
                              '
                                onClick={()=>setFont('sans-serif')}
                      >
                          Sans-serif
                        </p>
                      <p className='
                             mr-16 gap-3 items-center dark:text-white hover:bg-gray-300 cursor-pointer w-full px-2 py-1 rounded-md dark:hover:bg-gray-700
                            '
                                onClick={()=>setFont('monospace')}
                      >
                          MonoSpace
                        </p>
                  </div>
                )
              }
       
    </div>
  )
}
