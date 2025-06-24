import React from 'react'

const Pagenotfound = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-8xl mt-10 text-center text-red-400'>Page Not Found!</h1>
            <img className='mt-10 w-[400px] h-[300px] object-cover' src="https://images.unsplash.com/vector-1743473329244-f81d2c2a18f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFnZSUyMG5vdCUyMGZvdW5kfGVufDB8fDB8fHww" alt="" />
        </div>
    )
}

export default Pagenotfound