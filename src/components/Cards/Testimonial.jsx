import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user from '../Assets/user/3.webp'
import user1 from '../Assets/user/1.webp'
import user2 from '../Assets/user/10.webp'
import user3 from '../Assets/user/5.webp'
import user4 from '../Assets/user/6.webp'

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((activeTestimonial + 1) % testimonials.length);
    }, 8500);
    
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  const testimonials = [
    {image:user, name: 'EMILIANO AQUILANI', content: 'Exceptional service! Highly recommended.', stars: 5 },
    {image:user1, name: 'ANNA ITURBE', content: 'Great experience with this company. Will definitely use again!', stars: 4 },
    {image:user2,name: 'LARA ATKINSON', content: 'Professional and efficient. 10/10 would hire again.', stars: 5 },
    {image:user3, name: 'IAN OWEN', content: 'Outstanding work. Exceeded my expectations.', stars: 5 },
    {image:user4, name: 'MICHAEL TEDDY', content: 'Very satisfied with the results. Thank you!', stars: 4 }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3
        }
      }
    ],
    afterChange: (current) => setActiveTestimonial(current)
  };

  return (
    <section className="testimonials">
      <div className="container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className={`item ${index === activeTestimonial ? 'middle-card' : ''}`} key={index}>
              <div className="shadow-effect">
                <img className="img-circle" src={testimonial.image} alt="" />
                <p>{testimonial.content}</p>
                <div className="stars">
                  {[...Array(testimonial.stars)].map((star, i) => (
                    <span key={i} className="star">&#9733;</span>
                  ))}
                </div>
              </div>
              <div className="testimonial-name">{testimonial.name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
