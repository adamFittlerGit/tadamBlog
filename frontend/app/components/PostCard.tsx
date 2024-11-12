import Image from "next/image"
import Tilt from "react-parallax-tilt"

const PostCard = () => {
  return (
    <Tilt>
      <div className='bg-white rounded-lg border-2 border-black'>
          <Image
              src="/login.png"
              width="40"
              height="40"
              alt="login image" 
              className='bg-white rounded-full border-black border-2 m-2 absolute z-50'
          />
          <div className="flex justify-center">
            <div className="text-center text-black">
                <Image src="/blue-heart.png" width={100} height={100} alt="example" className="p-2"/>
                <h1 className="text-xl font-bold">Title</h1>
                <p className="italic opacity-70">Date</p>
            </div>
          </div>
      </div>
    </Tilt>
  )
}

export default PostCard