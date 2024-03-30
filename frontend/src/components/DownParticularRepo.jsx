import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const DownParticularRepo = () => {
    const [repoUrl, setRepoUrl] = useState('');

    const handleDownload = () => {
        if (repoUrl.trim() !== '') {
            // Construct the URL to the download function, passing the repo URL as a query parameter
            const downloadUrl = `/api/download?repoUrl=${encodeURIComponent(repoUrl)}`;

            // Create a temporary anchor element to initiate the download
            const anchor = document.createElement('a');
            anchor.href = downloadUrl;
            anchor.download = 'repository.zip';
            anchor.style.display = 'none';
            document.body.appendChild(anchor);

            // Simulate a click event on the anchor element to initiate the download
            anchor.click();

            // Remove the anchor element from the DOM after the download is initiated
            document.body.removeChild(anchor);
        } else {
            console.error('Invalid repo URL.');
        }
    };

    const handleInputChange = (event) => {
        setRepoUrl(event.target.value);
    };

    return (
        <div className='w-full flex flex-col gap-2 lg:sticky md:top-10'>
            <div className='bg-glass rounded-lg p-4'>
                Down Particular Repo/folder from GitHub by passing the path/link of the repo. In Progress....

                <div className='relative'>
                    <div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none'>
                        <IoSearch className='w-5 h-5' />
                    </div>
                    <input
                        type='search'
                        id='default-search'
                        className='block w-full p-4 ps-10 text-sm rounded-lg bg-glass focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent '
                        placeholder='Link...'
                        value={repoUrl}
                        onChange={handleInputChange}
                        required
                    />
                    <button
                        type='button' // Change to type='button' to prevent form submission
                        className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300'
                        onClick={handleDownload}
                    >
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DownParticularRepo;
