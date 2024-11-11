import Image from "next/image"

const Card = () => {
  return (
    <div className='bg-white rounded-lg border-2 border-black flex justify-center'>
        <div className="text-center text-black">
            <Image src="/blue-heart.png" width={100} height={100} alt="example" className="p-2"/>
            <h1 className="text-xl font-bold">Title</h1>
            <p className="italic opacity-70">Date</p>
        </div>
    </div>
  )
}

export default Card