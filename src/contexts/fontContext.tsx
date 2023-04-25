import { createContext, useEffect, useState } from "react";

export const FontContext = createContext('');

export default function Provider(props:any) {
    const [font, setFont] = useState('Sans-serif');

    useEffect(() => {
        const selectFont = () => {
            setFont('Sans-serif')
        }
    },[])
    return (
        <FontContext.Provider
            value={{
                font,
                setFont,
            }}
        >
            {props.children}
        </FontContext.Provider>
    )
}