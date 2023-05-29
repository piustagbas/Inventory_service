import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            Xcene Research adheres to strict criteria regarding clinical
            procedure, reporting practice and data publishing. Our team 
            believes integrity is fundamental to success, and that 
            accomplishment should come second only to morality.
            </p>

            <br />

            <p className='text-xl'>
            Xcene Research knows that advancement cannot 
            come without change. That is why we are constantly 
            seeking ways to revolutionise the industries we take part in.
            </p>

            <br />

            <p className='text-xl'>
            Xcene Research guarantees superior results. Our team is 
            comprised of seasoned professionals who are equipped with 
            years of experience and knowledge regarding industry trends, 
            clinical development and state-of-the-art technology.
            </p>
        </div>
    </div>
  )
}

export default About