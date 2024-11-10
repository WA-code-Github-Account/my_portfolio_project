
import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
  {
    id: "0",
    title: "Static Resume Builder",
    desc: "A typescript-based static resume build with HTML and CSS,allowing user to showcase thier skills dynamically",
    img:"/project_1_2.jpg",
    tags:["HTML","Node","CSS","Typescript"],
    },
    {
      id: "1",
      title: "Dynamic Resume Builder",
      desc: "A typescript-based dynamic resume build with HTML and CSS,allowing user to showcase thier skills dynamically",
      img:"/project_3.jpg",
      tags:["HTML","Node","CSS","Typescript"],
      },
      {
        id: "2",
        title: "Editable Resume Builder",
        desc: "A typescript-based editable resume build with HTML and CSS,allowing user to showcase thier skills dynamically",
        img:"/project_4.jpg",
        tags:["HTML","Node","CSS","Typescript"],
        },
        {
          id: "3",
          title: "Shareable Resume Builder",
          desc: "A typescript-based shareable resume build with HTML and CSS,allowing user to showcase thier skills dynamically",
          img:"/project_5.jpg",
          tags:["HTML","Node","CSS","Typescript"],
          },
        ];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title= "My Projects" />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) =>(<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
      
    </div>
  )
}

export default Projects

