import React from 'react'

function Premium() {
  return (
    <main className='bg-white border-2 rounded border-secondary w-full h-56 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
        <div className='flex flex-col items-center justify-center w-11/12 mt-14 m-auto'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-semibold text-center'>Become Our premium member</h1>
                <h1 className='text-xl font-bold text-center'>Join Us!!</h1>
            </div>
            <button className='border-2 py-2 w-1/3 rounded-lg bg-foreground text-secondary my-2'>Join</button>
        </div>
    </main>
  )
}

export default Premium