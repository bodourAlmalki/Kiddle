import React, { useState } from 'react';

const Quiz = ({ question, options, handleQuizSubmit }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleQuizSubmit(selectedOption);
  };

  return (
    <div>
      <h4>{question}</h4>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={option}
              name="quiz"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default Quiz;
