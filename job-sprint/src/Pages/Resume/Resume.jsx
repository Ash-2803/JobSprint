import React from 'react'
import Advertisement from '../../components/Advertisement/Advertisement'

const Resume = () => {
    return (
        <div className='px-4 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
            <div className='w-full py-5 sm:w-[74%]'>
                <img src="https://imgs.search.brave.com/ksGGMxtKK-N47czHyPlWG6sYWL1VzBTpNUxPlfQyMws/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kMm84/bTE3bXVmcjExci5j/bG91ZGZyb250Lm5l/dC9wdWRkbGUvc21h/bGwucG5n" alt="Resume Example" className='w-full h-full rounded-lg shadow-md' />
            </div>
            <div className='w-[26%] py-5 hidden md:block'>
                <div className='sticky top-19'>
                <Advertisement />
                </div>
            </div>
        </div>
    )
}

export default Resume
