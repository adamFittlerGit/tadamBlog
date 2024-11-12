import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const DateCard = () => {
  return (
    <div className='bg-white rounded-lg border-2 border-black'>
        <Image
            src="/login.png"
            width="50"
            height="50"
            alt="login image" 
            className='bg-white rounded-full border-black border-4 m-2 absolute z-50'
        />
        <div className="text-center text-black p-10">
            <div className='flex justify-center'>
                <Image src="/blue-heart.png" width={100} height={100} alt="example" className="p-2"/>
            </div>
            <h1 className="text-xl font-bold">Title</h1>
            <p className="italic opacity-70">Date</p>
            <br></br>
            <p className='text-left'>Retrieval-Augmented Generation (RAG) is a powerful approach in natural language processing that enhances traditional generative AI models by integrating them with retrieval systems. By embedding documents, blog posts, or any other text data into vector space, RAG allows for efficient search and retrieval of contextually relevant information. When a user queries the system, the model quickly retrieves related content based on vector similarity, boosting the quality of AI-generated answers. RAG is especially useful for applications requiring precise and context-aware responses, such as customer support, knowledge bases, or personal blog sites. This method effectively bridges the gap between static, pre-trained knowledge and dynamic, up-to-date content.</p>
            <br></br>
            <Link href="/">
                <Image
                    src="/back.png" 
                    width={30}
                    height={30}
                    alt="back button"
                />
            </Link>
        </div>
    </div>
  )
}

export default DateCard