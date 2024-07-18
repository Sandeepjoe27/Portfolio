import Aboutimg from '../assets/about.svg';

export default function About()
{
    const config =
    {
        line1:'Hi, My name is Sandeep Joe. Im  a dedicated Full Stack web Developer with a passion for creating seamless and dynamic web applications. I deliver robust and innovative solutions tailored to client needs.',
        line2:'Im proficient in Frontend skills like React.js, HTML, CSS, TailwindCSS and JavaScript',
        line3:'In backend I know Mongodb, SQL, NodeJS'
    }
    
    
    
    return <section className='flex flex-col md:flex-row bg-secondary px-20'id='about'>
        <div className='py-5 md:w-1/2 '>
            <img src={Aboutimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center ml-12'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl text-white border-b-4 border-[#78ff5a] mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='text-white pb-5'>{config.line1}</p>
        <p className='text-white pb-5'>{config.line2}</p>
        <p className='text-white pb-5'>{config.line3}</p>
        </div>
            
        </div>
    </section>
}