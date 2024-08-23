// import TestimonialsCards from './TestimonialsCards';

import TestimonialsCards from "./TestimonialsCards";

// import TestimonialsCards from "./TestimonialsCards";

const TestimonialsList = () =>{
    const testimonialsData = [
      {
        image: 'https://i.ibb.co/jGqM2zM/13176-min.jpg',
        name: 'Jane Williams',
        role: 'Regular Client',
        testimonial: 'I found your service to be a 5-star experience. The driver was waiting at the arrivals hall for us. All the people we communicated with were pleasant and cheerful.',
        date: 'Mar 24, 2021'
      },
      {
        image: 'https://i.ibb.co/1rx881z/5677-min.jpg',
        name: 'John Smith',
        role: 'New Client',
        testimonial: 'The service was outstanding and I am very satisfied with the overall experience.',
        date: 'Apr 12, 2021'
      },
      {
        image: 'https://i.ibb.co/HBcjpwq/2149455861-min.jpg',
        name: 'Emily Brown',
        role: 'Long-time Client',
        testimonial: 'The service was excellent, thank you. My driver was waiting at Arrivals for me with a clear sign. He introduced himself, was very polite and friendly.',
        date: 'May 30, 2021'
      }
    ];
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Testimonials</h2>
          </div>
  
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonialsData?.map((testimonial, index) => (
              <TestimonialsCards
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                date={testimonial.date}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default TestimonialsList;
