import { createContext, useEffect, useState } from 'react';


export const FontContext = createContext({});

export default function FontProvider(props:any) {
    const [font, setFont] = useState('sans-serif');

    useEffect(() => {
        const pickFont = () => {
            setFont(localStorage.getItem('font') || 'sans-serif');
        };
        window.addEventListener('storage', pickFont);
        return () => {
            window.removeEventListener('storage', pickFont);
        };
    }, []);

    return (
        <FontContext.Provider
            value={{
                font,
                setFont,
            }}
        >
            {props.children}
        </FontContext.Provider>
    );
}


