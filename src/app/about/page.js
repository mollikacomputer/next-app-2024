import Image from 'next/image';
import React from 'react';
export const metadata = {
    title:"about page",
    description:"This is about meta data",
}
const aboutPage = () => {
    return (
        <div>
            <h1 className='text-3xl' >About Page / route</h1>
            <Image
      src="https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?t=st=1708535265~exp=1708538865~hmac=466e98fc66ef27cca93991e98cb17b9fa8f04e167f20c151bd5a457a44596b77&w=740"
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
    );
};

export default aboutPage;