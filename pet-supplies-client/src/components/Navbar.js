import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dogIcon from '../assets/dogicon.png';
import catIcon from '../assets/caticon.png';
import birdIcon from '../assets/birdicon.png';
import fishIcon from '../assets/fishicon.png';
import reptileIcon from '../assets/reptileicon.png';
import smallPetIcon from '../assets/rodenticon.png';
import accessoriesIcon from '../assets/accessoriesicon.png';
import specialsIcon from '../assets/saleicon.png';
import cartIcon from '../assets/carticon.png';
import subcategories from '../data/subcategories';


const Navbar = ({ cartCount }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <nav className="navbar">
      <ul className="main-categories">
        <li><Link to="/">ראשי</Link></li>
        <li
          onMouseEnter={() => handleMouseEnter('dogs')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="category-icon">
            <img src={dogIcon} alt="Dogs" />
            כלבים
          </div>
          {activeCategory === 'dogs' && (
            <ul className="subcategories">
              {subcategories.dogs.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('cats')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="category-icon">
            <img src={catIcon} alt="Cats" />
            חתולים
          </div>
          {activeCategory === 'cats' && (
            <ul className="subcategories">
              {subcategories.cats.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('birds')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="category-icon">
            <img src={birdIcon} alt="Birds" />
            ציפורים
          </div>
          {activeCategory === 'birds' && (
            <ul className="subcategories">
              {subcategories.birds.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('fish')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="category-icon">
            <img src={fishIcon} alt="Fish" />
            דגי נוי
          </div>
          {activeCategory === 'fish' && (
            <ul className="subcategories">
              {subcategories.fish.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('reptiles')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="category-icon">
            <img src={reptileIcon} alt="Reptiles" />
            זוחלים
          </div>
          {activeCategory === 'reptiles' && (
            <ul className="subcategories">
              {subcategories.reptiles.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('small-pets')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="category-icon">
            <img src={smallPetIcon} alt="Small Pets" />
            מכרסמים
          </div>
          {activeCategory === 'small-pets' && (
            <ul className="subcategories">
              {subcategories['small-pets'].map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('accessories')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="category-icon">
            <img src={accessoriesIcon} alt="Accessories" />
            אביזרים
          </div>
          {activeCategory === 'accessories' && (
            <ul className="subcategories">
              {subcategories.accessories.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter('specials')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="category-icon">
            <img src={specialsIcon} alt="Specials" />
            מבצעים
          </div>
          {activeCategory === 'specials' && (
            <ul className="subcategories">
              {subcategories.specials.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link to="/cart">
            <div className="cart-icon">
              <img src={cartIcon} alt="Cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
            סל הקניות שלי
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
