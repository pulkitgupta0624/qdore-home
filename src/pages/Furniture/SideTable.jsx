import React from 'react';
import { FaArrowRight, FaTag, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../../components/Navbar/Navbar.jsx'; // Adjust the path as needed
import Footer from '../../components/Footer/Footer.jsx'; // Adjust the path as needed
import image1 from '../../assets/sideTables/side2.jpg';
import image2 from '../../assets/sideTables/side5.jpg';
import image3 from '../../assets/sideTables/side1.jpg';
import image4 from '../../assets/sideTables/side3.jpg';
import image5 from '../../assets/sideTables/side4.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const Product = ({ product }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = () => {
    navigate(`/furniture/side-table/${product.id}`); // Navigate to the product page
  };

  return (
    <div className="product-container bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <div className="product-heading bg-gray-800 text-white text-center py-2">
        {product.heading}
      </div>
      <div className="product-content flex flex-col md:flex-row p-4">
        <div className="product-image flex-shrink-0 w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.heading}
            className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="product-details flex flex-col justify-between md:w-1/2 md:pl-4">
          <div className="product-description text-gray-700 mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-gray-500" />
            <ul>
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
          <div className="product-price text-gray-900 text-xl font-bold mb-4 flex items-center">
            <FaTag className="mr-2 text-gray-500" />
            ${product.price}
          </div>
          <button
            onClick={handleNavigation}
            className="product-button flex items-center text-blue-600 hover:text-blue-800"
          >
            <span className="mr-2">See Product</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const SideTable = () => {
  const products = [
    {
      id: 'virgo-side-table',
      heading: 'VIRGO SIDE TABLE',
      image: image1,
      description: [
        'White Marble Accent Table with textured black metal base',
        'Luxurious design enhances home aesthetics',
        'Dimensions: 14" diameter, 22" height',
        'Elegant and functional',
        'Rust proof and outdoor friendly',
        'Ideal for gardens and open terraces'
      ],
      price: '99.99',
    },
    {
      id: 'orbit-side-table',
      heading: 'ORBIT SIDE TABLE',
      image: image2,
      description: [
        'Enhances both garden spaces and living rooms',
        'Ideal for outdoor settings and elegant beside the sofa',
        'Crafted from durable mild steel with cement-like textured finish',
        'Features a sustainable jute rope handle',
        'Stylish and built to last'
      ],
      price: '89.99',
    },
    {
      id: 'pluto-side-table',
      heading: 'PLUTO SIDE TABLE',
      image: image3,
      description: [
        'Made from durable iron with rust-free, copper-tinted coating',
        'Suitable for both indoor and outdoor settings',
        'Minimalist design for maximum functionality',
        'Perfect for flower pots, planters, and decorative items',
        'The Pluto Side Table is built to last with a timeless design',
        'Adds sophistication to any space'
      ],
      price: '79.99',
    },
    {
      id: 'vega-side-table',
      heading: 'VEGA SIDE TABLE',
      image: image4,
      description: [
        'Luxurious marble top with a natural solid wood base',
        'Blend of sustainable materials and Indian craftsmanship',
        'The Vega Side Table features strong structure and high-end aesthetics',
        'Ideal statement piece for the living room',
        'Elevates decor and adds elegance',
        'Combines style and durability',
        'Celebrates the artistry and sophistication of Indian design'
      ],
      price: '119.99',
    },
    {
      id: 'acacia-wood-side-table',
      heading: 'ACACIA WOOD SIDE TABLE',
      image: image5,
      description: [
        'Perfect for a showpiece, holding a coffee mug, or stacking books',
        'Crafted from sustainably sourced, eco-friendly wood',
        'Handmade with a stunning natural finish and beautiful wood grains',
        'Showcases Indian craftsmanship',
        'Adds elegance and sustainability to your space'
      ],
      price: '69.99',
    },
  ];

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SideTable;
