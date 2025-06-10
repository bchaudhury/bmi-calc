import React from 'react'
import './App.css';
import Logo from './Assets/Bhaskar.jpeg';

const App = () => {

  const calculateBMI = (event) => {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('error-message').innerText = 'Please enter valid weight and height.';
      return;
    } else {
      document.getElementById('error-message').innerText = '';
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi').innerText = bmi;

    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
    
    document.getElementById('category-text').innerText = category;
  }
  return (
    <div className='App'>

      <div className='container'>
        <img src={Logo} alt='Logo' className='logo' />
        <form>
          <div className='input-group'>
            <label htmlFor='weight'>Weight (kg): </label>
            <input className='input_field' type='number' id='weight' name='weight' placeholder='0'  required />
          </div>

          <div className='input-group'>
            <label htmlFor='height'>Height (cm): </label>
            <input className='input_field' type='number' id='height' name='height' placeholder='0' required />
          </div>

          <button type='submit' onClick={calculateBMI} className='submit_button'>Calculate BMI</button> 
          <div className='result'>
            <h3>Your BMI: <span id='bmi'>0</span></h3>
            <p id='category'>Category: <span id='category-text'>Unknown</span></p>
          </div>
          <div className='error' id='error-message'></div>
        </form>  
      </div>
    </div>
  )
}

export default App