import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>An enthusiastic fresher, seeking the role of a with a company, where I can contribute towards the organizational goals through 
my analytical skills and knowledge acquired by pursuing a degree in B.Sc. (CS). Proficient in Java, JavaScript and React JS. Build a 
multiple projects on Frontend, strong in design and integration with intuitive problem-solving skills. Also, have a good knowledge 
of Data Structure and Algorithms.
</p>

<br/>
<p className='text-xl'>Looking for job role, where I can utilize my skills and be productive to put my knowledge and abilities to good use, and continue to learn from other experienced team members.</p>

      </div>
    </div>
  )
}

export default About
