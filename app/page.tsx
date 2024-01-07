'use client'

import './globals.css';
import Link from 'next/link';
// import WaitList from './components/WaitList';

export default function Home() {
  return (
    <main>
      <div className="layout">
        <p className='mini-title text-gradient'>Introducing ProfessorX</p>
        <h1 className="hero-title">AI-powered digital tutor</h1>
        <h1 className="hero-title">for computer science</h1>
        <p className='p-content'>
          Become a 10x software engineer with technical expertise of 5 years on job experience in just 16 weeks.
        </p>
        <p className='p-content'>
          Backed by research
        </p>
        {/* <p className='p-content content2'>
          Empirical studies have shown that it is possible to compress time required to develop expertise from years into months.
        </p>
        <p className='p-content content2'>
          Finch expands on these findings to develop a super intelligent tutor powered by Artificial Intelligence
        </p>
        <p className='p-content content2'>
          to train technical and innovative software engineers as good as 5 years on job experience.
        </p> */}
      </div>
      <div className="cont-1 w-full container">
        <div className="btn-title">
          <h1 className="text-gradient mb-3">ProfessorX is coming soon</h1>
          <h1 className="title-form">Be among the first to attend his class</h1>
        </div>

        <h1 className="text-white m-auto items-center text-center mt-5 border-solid gap-4">
          <Link href="/sign-up">
             <button
                type='submit'
                className='btn-1 w-30 m-auto items-center text-white bg-blue-600 hover:bg-blue-700 font-medium text-sm px-5 py-2.5 text-center'
              >
                Join the Beta list
              </button>
          </Link>
          <Link href="/about-us">
             <button
                type='submit'
                className='btn-2 w-30 m-auto items-center ml-3 text-white bg-light-600 hover:bg-blue-700 font-medium text-sm px-5 py-2.5 text-center'
              >
                Learn More
              </button>
          </Link>  
        </h1>
        {/* <WaitList /> */}
      {/* <form>
        <div className='btn'>
           
            <button
              type='submit'
              className='btn-2 w-30 m-auto items-center text-white bg-blue-600 hover:bg-blue-700 font-medium text-sm px-5 py-2.5 text-center'
              >
                Join the Beta list
              </button>
        </div>
      </form> */}
      </div>
    </main>
  )
}
