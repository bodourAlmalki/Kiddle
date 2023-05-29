import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';

const Lessons_Html_7 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">HTML Pre-formatting sub and super</h1>
        <h3 className="Description">
          In this video you will learn pre-formatting ,subscript, and
          superscript
          <br /> (accidentally said sup in the video but its super)
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/W1JrPmP4dYw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="buttons">
            <a>
              <button className="btn-moove-1">previous</button>
            </a>
            <Link to="/Quiz">
              <button className="btn-moove">Next</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons_Html_7;
