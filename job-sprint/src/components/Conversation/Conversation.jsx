import React from 'react'

const Conversation = () => {
    return (
        <div className='flex items-center w-full cursor-pointer border-b border-gray-300 gap-3 p-4 hover:bg-gray-200'>
            <div className='shrink-0 '>
                <img src="https://thumbnail.imgbin.com/5/21/24/oggy-and-the-cockroaches-blue-cartoon-cat-on-skateboard-ZFQpMwy0_t.jpg" alt="Oggy" className='w-12 h-12 rounded-full cursor-pointer' />
            </div>
            <div>
                <div className='text-md'>Oggy</div>
                <div className='text-sm text-gray-500'>Software Engineer</div>
            </div>
        </div>
    )
}

export default Conversation
