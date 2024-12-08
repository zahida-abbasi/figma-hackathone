import React from 'react';
import './page.css';

const ShopexOffers = () => {
    const offers = [
      {
        icon: "/delivery.png", 
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      },
      {
        icon: "/cashback.png",
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      },
      {
        icon: "quality.png",
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      },
      {
        icon: "support.png",
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      },
    ];
  
    return (
      <div className="text-center bg-white py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Faetures </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <img src={offer.icon} alt={offer.title} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-semibold text-blue-900">{offer.title}</h3>
              <p className="text-gray-500 text-sm text-center mt-2">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
const ClientTestimonials = () => {
  return (
    <div className="testimonials-container mb-32">
      <div className="images">
        <img src="/test1.png" alt="Client 1" width="80" height="80" />
        <img src="/test2.png" alt="Client 2" width="80" height="80" />
        <img src="/test3.png" alt="Client 3" width="80" height="80" />
      </div>
      <div className="testimonial-text">
        <h2>Selina Gomez</h2>
        <h4>Ceo At Webecy Digital</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
        </p>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="app">
        <div className='mb-10 mt-0  bg-blue-50 w-full p-10'>
        <h1 className='text-4xl font-bold ml-32 text-blue-900'>About Us</h1>
        <p className='mt-2 ml-32'>Home . Pages . <span className='text-pink-500'>About Us</span></p>
        </div>
      <div className="about-section">
        <div className="about-content">
          <img src="/about.png" alt="About Us" width="400" height="300" />
          <div className="about-text">
            <h1 className='text-4xl font-bold text-blue-900'>Know About Our Ecommerce Business, History</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <button className="contact-button">Contact us</button>
          </div>
        </div>
      </div>
      <ShopexOffers />
      <ClientTestimonials />
    </div>
  );
};

export default App;

