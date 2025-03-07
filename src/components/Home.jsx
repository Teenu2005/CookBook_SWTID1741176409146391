import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/img1s.jpg';
import img3 from '../assets/img3s.jpg';
import img4 from '../assets/img4s.jpg';
import img5 from '../assets/img5s.jpg';

function Home() {
  const navigate = useNavigate();
  const [rand, setRand] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      setRand(response.data.meals); 
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  const fetchs = () => {
    fetch(); 

    
    if (rand.length > 0) {
      const meal = rand[0]; 
      navigate(`/recipie/${meal.idMeal}`); 
    }
  };

  return (
    <>
      <div className="cont">
        <div className="txt">
          Welcome to <span className="name"> VTS</span> Your Ultimate Cooking Companion
          <span className="rand" onClick={fetchs}>No Idea?! we'll give you a dish</span>
        </div>
        <div className="imgs">
          <img className="img" src={img1} alt="" />
          <img className="img" src={img3} alt="" />
          <img className="img" src={img4} alt="" />
          <img className="img" src={img5} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
