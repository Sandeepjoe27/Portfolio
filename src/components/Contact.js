import resumeimg from '../assets/resume.svg';

export default function Contact()
{
    const config=
    {
        email:'joemind27@gmail.com',
        phone:'+91-9025256353'
    }



    return <section className='flex flex-col bg-primary px-5 py-32 text-white'id='contact'>
       
        <div className='flex flex-col  items-center ml-12'>
        <h1 className='text-4xl text-white border-b-4 border-[#4f4f4f] mb-5 w-[140px] font-bold'>Contact</h1>
        <p className='text-white pb-5'>If you want to discuss more in detail, please contact me </p>
        <p className='py-2'><span className='font-bold'>Email :</span>{config.email}</p>
        <p className='py-2'><span className='font-bold'>Phone :</span>{config.phone}</p>

       </div>
            
    </section>
}