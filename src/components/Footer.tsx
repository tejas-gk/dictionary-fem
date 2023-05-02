import React from 'react'

export default function Footer({
    word
}) {
    console.log(word.sourceUrls)
  return (
      
          <footer className="mb-6 w-full">
              <a
              
                  target="_blank"
                  className="text-customGray-800 underline"
              >
                  Source
          </a>
          
              <div className="">
              {
                  word.map((w: any, i: number) => (
                      <div key={i} className="flex flex-col">
                          <a
                            href={w.sourceUrls}
                          >
                              {w.sourceUrls}
                          </a>
                      </div>
                  ))
                  
                }
              </div>
          </footer>
  )
}
