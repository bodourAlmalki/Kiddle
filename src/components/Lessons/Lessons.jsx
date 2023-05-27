import React from 'react';
import './Lessons.css';

const Lesson = () => {
  return (
    <div className="card-container">
      <div className="card">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xNRJwmlRBNU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          
        ></iframe>
      </div>
      <div className="card">
        <iframe src="" title="Card 2" className="card-iframe"></iframe>
      </div>
      <div className="card">
        <iframe
          src="https://www.example.com"
          title="Card 3"
          className="card-iframe"
        ></iframe>
      </div>
      <div className="card">
        <iframe
          src="https://www.example.com"
          title="Card 4"
          className="card-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Lesson;
