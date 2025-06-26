import React, { useState } from 'react';
import './bmi.css';

const BMICalculator = () => {
  const [activeTab, setActiveTab] = useState('metric');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setResult(null);
    setErrors({});
  };

  const validateInputs = (height, weight) => {
    const newErrors = {};
    if (!height) newErrors.height = "Height is required";
    else if (isNaN(height) || height <= 0) newErrors.height = "Enter a valid number > 0";

    if (!weight) newErrors.weight = "Weight is required";
    else if (isNaN(weight) || weight <= 0) newErrors.weight = "Enter a valid number > 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMetric = (e) => {
    e.preventDefault();
    const height = parseFloat(e.target.height.value);
    const weight = parseFloat(e.target.weight.value);

    if (!validateInputs(height, weight)) return;

    const bmi = (weight * 10000) / (height * height);
    displayResult(bmi);
  };

  const calculateImperial = (e) => {
    e.preventDefault();
    const height = parseFloat(e.target.I_height.value);
    const weight = parseFloat(e.target.I_weight.value);

    if (!validateInputs(height, weight)) return;

    const bmi = (weight * 703) / (height * height);
    displayResult(bmi);
  };

  const displayResult = (bmi) => {
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obesity';

    setResult(`BMI: ${Math.round(bmi)} - ${category}`);
  };

  return (
    <div className="container">
      <h1>Body Mass Index</h1>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'metric' ? 'active' : ''}`}
          onClick={() => handleTabClick('metric')}
        >
          Metric
        </div>
        <div
          className={`tab ${activeTab === 'imperial' ? 'active' : ''}`}
          onClick={() => handleTabClick('imperial')}
        >
          Imperial
        </div>
      </div>

      {activeTab === 'metric' && (
        <div className="tab-pannel active">
          <form onSubmit={calculateMetric}>
            <div>
              <label>Height (cm):</label>
              <input type="text" name="height" placeholder="Enter Height" />
              {errors.height && <p className="error">{errors.height}</p>}
            </div>
            <div>
              <label>Weight (kg):</label>
              <input type="text" name="weight" placeholder="Enter Weight" />
              {errors.weight && <p className="error">{errors.weight}</p>}
            </div>
            <button type="submit">Calculate</button>
          </form>
        </div>
      )}

      {activeTab === 'imperial' && (
        <div className="tab-pannel active">
          <form onSubmit={calculateImperial}>
            <div>
              <label>Height (in):</label>
              <input type="text" name="I_height" placeholder="Enter Height" />
              {errors.height && <p className="error">{errors.height}</p>}
            </div>
            <div>
              <label>Weight (lb):</label>
              <input type="text" name="I_weight" placeholder="Enter Weight" />
              {errors.weight && <p className="error">{errors.weight}</p>}
            </div>
            <button type="submit">Calculate</button>
          </form>
        </div>
      )}

      {result && (
        <div id="result">
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
