import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function ImageUploader() {

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/images", {
            method: "POST",
            body
        });
        let ress = await response.json();
        setLoading(true)
    };

    // get all images from server

    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const response = await fetch("/api/images");
            let ress = await response.json();
            setImages(ress.images);
        };
        getImages();
    }, [loading]);

    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (text, e) => {
        navigator.clipboard.writeText(text);
    };


    return (
        <div>
            <div>
                <div className='flex content-center my-4'>
                    <input name="myImage" onChange={uploadToClient} className="text-md bg-blue-100 file:uppercase file:font-semibold rounded-l-3xl text-grey-500 file:mr-5 file:py-4 file:px-6 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 w-full" type="file" accept="image/*" />
                    <button
                        className="w-[150px] border-0 rounded-r-3xl uppercase text-md bg-blue-700 text-white font-semibold cursor-pointer"
                        type="submit"
                        onClick={uploadToServer}
                    >Upload Image</button>
                </div>
                <div className='grid grid-cols-4 gap-4 '>
                    {
                        images.map((image, _id) => (
                            <div key={_id} className=''>
                                <img src={image.Location} alt={image.Name} width={'100%'} />
                                <div>
                                    <button className='w-full cursor-pointer border-0 p-1 bg-blue-500 text-lg uppercase text-white rounded-lg text-semibold hover:bg-green-800' onClick={() => { copyToClipboard(image.Location) }}><span>{isCopied ? 'Copied!' : 'Copy'}</span></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageUploader