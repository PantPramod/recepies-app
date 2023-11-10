'use client'

import React, { useEffect, useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '@/firebase/config';
import instance from '@/axios/axios';


const Page = () => {
    const [file, setFile] = useState<any>()
    const [progress, setProgress] = useState(10)
    const [userId, setUserId] = useState('')
    const [images, setImages] = useState<any>([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUserId(localStorage.getItem("_id") ?? "");
        }
    }, [])
    console.log(file)
    const uploadFile = () => {
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress)
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {

                switch (error.code) {
                    case 'storage/unauthorized':

                        break;
                    case 'storage/canceled':

                        break;

                    // ...

                    case 'storage/unknown':

                        break;
                }
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    console.log('File available at', downloadURL);

                    const { data } = await instance.post(`/images`, {
                        userId,
                        url: downloadURL
                    })
                    console.log(data)
                });
            }
        );
    }

    const getUsersImages = async () => {
        try {
            const { data } = await instance.get(`/images/${userId}`)
            setImages([...data])
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <div>
            <input
                type="file"
                onChange={(e: any) => setFile(e.target.files[0])}
            />
            <div className='w-[350px] border h-2.5  border-black'>
                <div style={{ width: `${progress}%` }} className='bg-green-600 h-2 transition-all ease-in-out duration-300'></div>
            </div>

            <button onClick={uploadFile}>Save</button>

            <p onClick={getUsersImages}>User's Image</p>
            {images.map((image: any) => <img src={image.url} alt="" />)}
        </div>
    )
}

export default Page
