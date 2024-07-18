import heroimg from '../assets/hero.svg'
import {  AiOutlineLinkedin, } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import { LiaWhatsappSquare } from "react-icons/lia";

export default function Hero()
{
    const config={
        subtitle:'Im a Full-stack web developer',
        social: {
            github: 'https://github.com/Sandeepjoe27',
            whatsapp: 'https://Wa.me/+91-9025256353',
            linkedin: 'https://in.linkedin.com/company/sandeep-joe-5b8610239'
        }
    }



    return <section id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi , <br/> Im <span className='text-black'>Sandeep Joe</span>
            <p className='text-2xl '>{config.subtitle}</p> 
        </h1>
        <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-white'><FaSquareGithub size={40} /></a>
                <a href={config.social.whatsapp} className='pr-5 hover:text-white'><LiaWhatsappSquare size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
        <img className='md:w-1/3' src={heroimg}></img>
    </section>
}