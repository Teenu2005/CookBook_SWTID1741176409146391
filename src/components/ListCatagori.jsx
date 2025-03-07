import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MealList from './MealList';

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName); 
  };

  const handleBackClick = () => {
    setActiveCategory(null);
  };

  return (
    <div className="category-list">
      {activeCategory === null ? (
       
        categories.map((category) => (
          <div
            key={category.idCategory}
            className="category-card"
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="category-thumb"
            />
            <h3 className="category-title">{category.strCategory}</h3>
          </div>
        ))
      ) : (
        
        <div className="meal-list-fullscreen">
          {/* <button className="back-button" onClick={handleBackClick}>Back to Categories</button> */}
          <MealList idd={activeCategory} />
        </div>
      )}
    </div>
  );
};

export default CategoryList;
