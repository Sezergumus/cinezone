import React from 'react'
import Link from 'next/link'

export default function Page404() {
  return (
    <div className="not-found-container mx-auto flex-1 mt-24 w-full relative max-w-[90%]">
      <div className="not-found-inner my-auto flex items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full justify-between">
        <div className="not-found-text">
          <h1 className='text-xl font-bold mb-4'>We can&#39;t seem to find the page you’re looking for</h1>
          <p className='mb-2 text-md'>You might be interested in these pages:</p>
          <ul className='leading-16'>
            <li>
              <Link href="/" className='font-[600] underline text-lg transition hover:text-[red]'>Home</Link>
            </li>
            <li>
              <Link href="/movies" className='font-[600] underline text-lg transition hover:text-[red]'>Movies</Link>
            </li>
            <li>
              <Link href="/locator" className='font-[600] underline text-lg transition hover:text-[red]'>Cinemas</Link>
            </li>
          </ul>
        </div>
        
        <img src="/not-found.gif" alt="" />
      </div>
    </div>
  )
}
