import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios';
import Recipie from '../pages/Recipie'

const MealList = ({ idd }) => { 
  const [meals, setMeals] = useState([]);
  const [subComp, setsubComp] = useState(false);
  const navigate = useNavigate()
  const fetchMeals = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idd}`);
      setMeals(response.data.meals);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [idd]);  



  return (
    <div className="continer">
      { !subComp &&
    <div className="meal-list">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="meal-thumbnail"
            />
            <h3 className="meal-name">{meal.strMeal}</h3>          
             <a onClick={()=>{navigate(`/recipie/${meal.idMeal}`)}}>View Recipe</a> 
          </div>
        ))
      ) : (
        <p className='loader'></p>
      )}
    </div>
}
    </div>
  );
};

export default MealList;
