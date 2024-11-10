import React from 'react'

const Skills = () => {
  return (
  <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
        <h2 className='text=5xl md:text-4xl'>Technologies I work with</h2>
        <p className='text=gray-500 pt-2'>
        

"I’m currently building a strong foundation in web development, learning essential skills like HTML and CSS for creating basic, responsive layouts. I’m also exploring TypeScript, JavaScript, and popular frameworks like React and Next.js, which help me understand how to build interactive interfaces. On the backend, I’m learning the basics of Node.js, which enables me to start working on simple server-side functionality. With each project, I’m growing my skills and gaining hands-on experience with the tools and technologies needed to develop modern web applications."
        </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-4xl sm:tsxt-6xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typesscript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Skills
