'use client';
import React, { useState, useRef, ChangeEvent} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';


const Page = () => {
  // useStates for our data
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState<string[]>([]); // For displaying locally
  const [imageFiles, setImageFiles] = useState<File[]>([]); // For sending to the supabase storage
  const [isImageSelected, setisImageSelected] = useState(false)

  // Use router for changes pages
  const router = useRouter()

  // useRef so we can use the button istead of normal file upload ui
  const imageInputRef = useRef<HTMLInputElement>(null);
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

};

  // Handling the upload of mutliple files
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImageFiles = Array.from(e.target.files)
      const newImageUrls = newImageFiles.map((file) => URL.createObjectURL(file))
      
      setImageUrls([...imageUrls, ...newImageUrls])
      setImageFiles([...imageFiles, ...newImageFiles])
      setisImageSelected(true)
    }
  } 

  return (
    <div className='flex justify-center'>
      <div className='bg-white mt-5 p-5 mb-5 rounded border-2 border-black  w-3/4 sm:w-140 '>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <h2 className='text-3xl text-black'>New Post</h2>
          <input 
            hidden
            ref = {imageInputRef}
            type="file" 
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
            multiple
            onChange={handleUpload}
          />

          <Button variant="outlined" onClick={() => {imageInputRef.current?.click()}}>{isImageSelected ? "Select Another Image" : "Select Image"}</Button>
          
          <div className='flex gap-4'>
            
            {imageUrls.map((url, index) => (
            
              <Image
                key={url}
                src={url}
                width={50}
                height={50}
                alt={`img-${index}`}
              />
            ))}
          </div>

          <TextField
            type="text"
            variant='outlined'
            color='primary'
            label="Post Title"
            onChange={(e) => {setTitle(e.target.value)}} // Capture title input
            fullWidth
            required
          />
          
          <TextField
            type="text"
            variant='outlined'
            color='primary'
            label="Tag"
            onChange={(e) => {setTag(e.target.value)}} // Capture tag input
            required
            fullWidth
          />
          
          <TextField
            variant='outlined'
            color='primary'
            label="Content"
            onChange={(e) => {setContent(e.target.value)}} // Capture content input
            fullWidth
            required
            multiline
          />

          <Button variant="contained" color="primary" type="submit">
            Post
          </Button>
        </form>
        <br></br>
        <Link href="/">
              <Image
                src="/back.png"
                alt="back-button"
                width={30}
                height={30}
              />
        </Link>
      </div>
    </div>
  );
};

export default Page;