export default function Footer({ word }: any) {
    return (
        <footer className='mb-6 flex w-full  flex-col lg:flex-row'>
            <a
                target='_blank'
                className='ml-4  text-gray-800 dark:text-gray-100 lg:ml-0'
            >
                Source
            </a>

            <div className='ml-4 flex flex-col'>
                {word.map((w: any, i: number) => (
                    <div key={i} className='flex flex-col'>
                        <a href={w.sourceUrls} className='underline'>
                            {w.sourceUrls}
                        </a>
                    </div>
                ))}
            </div>
        </footer>
    );
}
