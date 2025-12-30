import React from 'react'

const EditmessageModel = () => {
    return (
        <div className='my-5'>
            <div className='w-full mb-4'>
                <label>Send Message</label>
                <br />
                <textarea cols={10} rows={10} className='p-2 mt-1 w-full border rounded-md'
                    placeholder='Enter Message here' ></textarea>
            </div>
            <div>
                <div className='bg-orange-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl'>Send</div>
            </div>
        </div>
    )
}

export default EditmessageModel
