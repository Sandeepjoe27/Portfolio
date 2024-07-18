import music from '../assets/music.png'
import blood from '../assets/blood.png'
import dept from '../assets/dept.png'
import land from '../assets/land.png'
import book from '../assets/book.png'

export default function Projects()
{


    
    return <section id='project' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className='text-4xl text-white border-b-4 border-[#4f4f4f] mb-5 w-[150px] font-bold '>Projects</h1>
        <p>These are my projects which I build during the Intern and College times to show my experience,Please check them out.</p>
        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
                 <img className='h-[200px] w-[500px]' src={music}/>
                 <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Music application.
                    Languages Used: HTML, CSS, JavaScript, JQuery, AngularJS, NodeJs, MongoDB</p>
                    <div className='flex justify-center'>
                        <a className='btn' target='_blank' href="https://github.com/Sandeepjoe27/Music-Application">View Project</a>
                    </div>
                 </div>
            </div>
            <div className='relative'>
                <img className='h-[200px] w-[500px]' src={blood}/>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Blood Bank System.
                        LanguageUsed:Html,Css,Javascript</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href="https://github.com/Sandeepjoe27/bloodbank.io">View Project</a>
                        </div>
                </div>
                
            </div>
            <div className='relative'>
                <img className='h-[200px] w-[500px]' src={dept}/>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'>Department Website.
                        Language Used:Html,Css</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href="https://github.com/Sandeepjoe27/deptpro.io">View Project</a>
                        </div>
                </div>
                
            </div>
            <div className='relative'>
                <img className='h-[200px] w-[500px]' src={land}/>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'> Landing Project.
                        Language Used:Html,Tailwind Css</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href="https://github.com/Sandeepjoe27/LandingProject">View Project</a>
                        </div>
                </div>
            </div>
            <div className='relative'>
                <img className='h-[200px] w-[500px]' src={book}/>
                <div className='project-desc'>
                    <p className='text-center px-5 py-5'> BookSky.
                        Language Used:Html,Css,JavaScript</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href="https://github.com/Sandeepjoe27/Booksky">View Project</a>
                        </div>
                </div>
            </div>
        </div>
           
        </div>
    </section>
}