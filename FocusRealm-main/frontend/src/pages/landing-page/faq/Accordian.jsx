
import React,{ useState } from 'react'

function Accordian({ question, answer }) {
    const [accordianOpen, setAccordianOpen] = useState(false);
    return (
        <div className='flex pb-4 flex-col border border-[#A6A6A6] border-solid rounded-3xl px-4' data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <div className="flex justify-between w-full" onClick={() => setAccordianOpen(!accordianOpen)}>
                <div className='w-full h-16 flex items-center justify-between pt-4'>
                    <p className='text-xl font-poppins font-semibold text-[#122C5A]'>{question}</p>
                    {accordianOpen ?
                        <div className='-rotate-180 duration-700 flex items-center'>
                            <svg width="49" height="46" viewBox="0 0 49 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.4537 30.0025C23.9864 30.0034 23.5335 29.8407 23.1737 29.5425L11.1737 19.5425C10.7652 19.203 10.5084 18.7152 10.4596 18.1864C10.4109 17.6575 10.5742 17.1309 10.9137 16.7225C11.2532 16.3141 11.741 16.0572 12.2698 16.0085C12.7987 15.9597 13.3252 16.123 13.7337 16.4625L24.4537 25.4225L35.1737 16.7825C35.3783 16.6164 35.6136 16.4923 35.8663 16.4174C36.119 16.3426 36.384 16.3184 36.646 16.3463C36.9081 16.3742 37.1621 16.4535 37.3933 16.5799C37.6246 16.7062 37.8286 16.8771 37.9937 17.0825C38.1768 17.2881 38.3156 17.5294 38.4011 17.7911C38.4867 18.0529 38.5173 18.3295 38.491 18.6036C38.4648 18.8777 38.3821 19.1435 38.2484 19.3842C38.1146 19.6249 37.9326 19.8354 37.7137 20.0025L25.7137 29.6625C25.3435 29.9135 24.8999 30.0332 24.4537 30.0025Z" fill="#122C5A" />
                            </svg>
                        </div>
                        :
                        <div className='rotate-0 duration-700 flex items-center'>
                            <svg width="49" height="46" viewBox="0 0 49 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.4537 30.0025C23.9864 30.0034 23.5335 29.8407 23.1737 29.5425L11.1737 19.5425C10.7652 19.203 10.5084 18.7152 10.4596 18.1864C10.4109 17.6575 10.5742 17.1309 10.9137 16.7225C11.2532 16.3141 11.741 16.0572 12.2698 16.0085C12.7987 15.9597 13.3252 16.123 13.7337 16.4625L24.4537 25.4225L35.1737 16.7825C35.3783 16.6164 35.6136 16.4923 35.8663 16.4174C36.119 16.3426 36.384 16.3184 36.646 16.3463C36.9081 16.3742 37.1621 16.4535 37.3933 16.5799C37.6246 16.7062 37.8286 16.8771 37.9937 17.0825C38.1768 17.2881 38.3156 17.5294 38.4011 17.7911C38.4867 18.0529 38.5173 18.3295 38.491 18.6036C38.4648 18.8777 38.3821 19.1435 38.2484 19.3842C38.1146 19.6249 37.9326 19.8354 37.7137 20.0025L25.7137 29.6625C25.3435 29.9135 24.8999 30.0332 24.4537 30.0025Z" fill="#122C5A" />
                            </svg>
                        </div>
                    }

                </div>
                {/* <span><i class="fa fa-chevron-down" aria-hidden="true"></i></span> */}
            </div>

            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm  ${accordianOpen ?
                `grid-rows-[1fr] opacity-100`
                : `grid-rows-[0fr] opacity-0`
                } `}>

                <div className='w-full overflow-hidden font-poppins text-[18px]'>
                    {answer}
                </div>
            </div>

        </div >
    )
}

export default Accordian