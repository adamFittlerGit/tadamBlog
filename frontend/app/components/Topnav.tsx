import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Topnav = () => {
  return (
    <div className='flex justify-center bg-lime-300 p-5'>
        <div className='flex w-3/4 items-center'>
            <div className='flex items-center'>
                <Image 
                    src="/blue-heart.png"
                    width="50"
                    height="50"
                    alt="logo image" 
                    className='mx-3'
                />
                <p className='text-black text-3xl font-bold'>Tadam Blog</p>
            </div>
            <div className='ml-auto'>
                {/* I will update this later to change to that of the currently logged in user that being Tayla or I */}
                <Link href="/login">
                    <Image
                        src="/login.png"
                        width="50"
                        height="50"
                        alt="login image" 
                        className='bg-white rounded-full border-black border-4'
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Topnav