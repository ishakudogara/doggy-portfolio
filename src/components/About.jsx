import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Fuga distinctio in harum excepturi tempora aperiam voluptates. 
            Assumenda omnis qui saepe quas quod sequi esse, eos pariatur. 
            Quasi porro id deserunt ex quisquam ipsam tempora veritatis 
            libero illo perferendis molestias vel, explicabo inventore. 
            Amet officiis saepe consectetur aliquam impedit totam molestiae.
        </p>

        <br />
        
        <p className='text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Alias unde voluptas temporibus quis incidunt dolor, nisi quisquam 
            totam tenetur quibusdam quod debitis aperiam quae consequuntur at. 
            Exercitationem facilis cum consequuntur, id molestiae non officiis 
            veritatis eum unde fugiat porro animi iure quos inventore voluptatem. 
            Delectus doloremque quas commodi dolorum esse!
        </p>

      </div>
    </div>
  )
}

export default About
