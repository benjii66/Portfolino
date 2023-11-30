import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-image.png" width={500} height={500}/>
        <div>
            <h2>About Myself</h2>
            <p>
                I am a front end develope with a passion for creating interactive and responsive web applications.
                I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize,
                HTML,CSS and Git. I am a quick learner and I am always looking to expand my knowledge and skill set.
                I am a team player and I am always looking to learn from others and share my knowledge with others.
            </p>
        </div>
        </div>
    </section>

    
  )
}

export default AboutSection