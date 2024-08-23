
import { FaFacebookF } from "react-icons/fa6";
// import './TestimonialsCards.css'
const TestimonialsCards = ({ image, name, role, testimonial, date }) => {

    
    return (
        <div className=" bg-white rounded-lg w-96 h-80 shadow-gray-950   relative">
            <div className="w-10 h-10 bg-white border-sm absolute bottom-[-10px] left-[45px] rotate-[56deg]"></div>
 
            <div className="flex gap-4 p-4 items-center">
            <div>
                
                <img className="rounded-full w-[70px] h-[70px]"  src={image}
            alt={name} />
                
            </div>
            <div>
                <h2 className="text-lg text-black font-bold">{name}</h2>
                <p className="text-sm text-blue-300">{role}</p>
            </div>
            </div>
            
            
            <div className='border-b-2'></div>
            
        
            <div className="p-4 ">
            <p className="text-gray-500">{testimonial}</p>
            
            
            <div className="flex pt-4 gap-4 items-center">
                <p className="pl-2 text-blue-400 text-2xl"><FaFacebookF /></p>
                <p className="text-lg text-gray-700">{date}</p>
            </div>
            </div>
        </div>

    );
};

export default TestimonialsCards;