import React from 'react'

export default function Footer({
    word
}: any) {
  return (
      
          <footer className="mb-6 w-full flex">
              <a
              
                  target="_blank"
                  className="text-gray-800  dark:text-gray-100"
              >
                  Source
          </a>
          
              <div className="flex flex-col ml-4">
              {
                  word.map((w: any, i: number) => (
                      <div key={i} className="flex flex-col">
                          <a
                              href={w.sourceUrls}
                              className='underline'
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
