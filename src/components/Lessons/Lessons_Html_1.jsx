import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';

const Lessons_Html_1 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">Introduction to HTML</h1>
        <h3 className="Description">How to create your first website/page.</h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/31adOLTlS00"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
        
              <button className="btn-moove-1" disabled>previous</button>
            
            <Link to='/Quiz' >
            <button className="btn-moove">Next</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Html_1;
