import React from 'react'
import Notes from "../imgs/Notes.png"
import Education from "../imgs/education.png"
import Guessnum from "../imgs/guessnum.png"
import Parallax from "../imgs/parallax.png"
import Tictactoe from "../imgs/tictactoe.png"
import Quiz from "../imgs/quiz.png"
import Recipe from "../imgs/recipe.png"
import Weather from "../imgs/weather.png"
import Calculator from "../imgs/calculator.png"

const Projects = () => {

    const projects = [
        {
            id:1,
            src : Notes,
            demo : "https://endearing-heliotrope-5ef75e.netlify.app/",
            code : "https://github.com/Aboli56/Notes-App.git"
        },
        {
            id:2,
            src : Parallax,
            demo : "https://clever-otter-9e448c.netlify.app",
            code : "https://github.com/Aboli56/Parallax-Website.git"
        },
        {
            id:3,
            src : Education,
            demo : "https://unique-rabanadas-4448df.netlify.app/",
            code : "https://github.com/Aboli56/Education-Website.git"
        },
        {
            id:4,
            src : Quiz,
            demo : "https://melodic-pegasus-23d452.netlify.app/",
            code : "https://github.com/Aboli56/Quiz-App.git"
        },
        {
            id:5,
            src : Recipe,
            demo : "https://sparkling-smakager-4e2afd.netlify.app/",
            code : "https://github.com/Aboli56/Recipe-App.git"
        },
        {
            id:6,
            src : Calculator,
            demo : "https://frabjous-gecko-7188c5.netlify.app/",
            code : "https://github.com/Aboli56/Calculator_.git"
        },
        {
            id:7,
            src : Guessnum,
            demo : "https://splendid-biscochitos-4ddd5d.netlify.app/",
            code : "https://github.com/Aboli56/Random-num.git"
        },
        {
            id:8,
            src : Tictactoe,
            demo : "https://elaborate-sunshine-a8966e.netlify.app/",
            code : "https://github.com/Aboli56/Tic-Tac-Toe-JS-.git"
        },
        {
            id:9,
            src : Weather,
            demo : "https://rad-wisp-8fb8aa.netlify.app/",
            code : "https://github.com/Aboli56/Weather-App-React.git"
        }

    ]
  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white  md:h-auto'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {projects.map(({id, src,demo, code})=>(
  <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
  <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
 <div className='flex justify-center items-center'>
     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo} target='_blank' rel="noreferrer">Demo</a> </button>
     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code} target='_blank' rel="noreferrer">Code</a> </button>
 </div>
</div>
            ))}
           <br/>
        </div>
    </div>
    <br/>
    <br/>
    </div>
  )
}

export default Projects
