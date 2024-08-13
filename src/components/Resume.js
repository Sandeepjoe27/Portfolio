import resumeimg from '../assets/resume.svg';

export default function Resume()
{
const config=
{
    link:'https://github.com/Sandeepjoe27/Portfolio/blob/master/src/assets/Sandeep.pdf'
}

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-20'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end '>
            <img className="w-[300px]" src={resumeimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center ml-12'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl text-white border-b-4 border-[#78ff5a] mb-5 w-[140px] font-bold'>Resume</h1>
        <p className='text-white pb-5'>You can view my resume   <a className='btn' href={config.link}>Download</a></p>
       </div>
            
        </div>
    </section>
}
