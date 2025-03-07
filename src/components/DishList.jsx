import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const DishList = () => {
  const [area, setArea] = useState('');
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAreaChange = async (e) => {
    setArea(e.target.value);
    if (e.target.value) {
      await fetchDishesByArea(e.target.value);
    }
  };

  const fetchDishesByArea = async (area) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      setDishes(response.data.meals);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!area) {
      fetchDishesByArea('Canada');  
    }
  }, []);

  return (
    <div className="dish-list">
      <div className="area-select-container">
        <label htmlFor="area">Select Area (Country):</label>
        <select id="area" value={area} onChange={handleAreaChange}>
          <option value="">--Choose an Area--</option>
          <option value="Canada">Canada</option>
          <option value="American">American</option>
          <option value="Mexico">Mexico</option>
          <option value="USA">USA</option>
          <option value="Indian">India</option>
          <option value="China">China</option>
        </select>
      </div>

      <div className="dishes-container">
        {loading ? (
          <p className='loader'></p>
        ) : (
          <div className="category-list">
            {dishes && dishes.length > 0 ? (
              dishes.map((dish) => (
                <div key={dish.idMeal} className="dish-card">
                  <img src={dish.strMealThumb} alt={dish.strMeal} className="dish-image" />
                  <h4>{dish.strMeal}</h4>
                  <Link to={`/recipie/${dish.idMeal}`} className="dish-link">
                    View Recipe
                  </Link>
                </div>
              ))
            ) : (
              <p>No dishes found for this area.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DishList;
