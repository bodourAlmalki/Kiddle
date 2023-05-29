import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.scss';

const Lessons_Html_4 = () => {
  return (
    <div className="body-lesson">
      <section className="lesson">
        <h1 className="title">HTML Tags - underline, bold, italics</h1>
        <h3 className="Description">
          HTML Tags - underline, bold, italics. 3 tags about HTML. There is more
          than 3 tags.
        </h3>
        <div className="wrapper-iframe-lesson">
          <iframe
            src="https://www.youtube.com/embed/nHa9rsP90Hk"
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

export default Lessons_Html_4;
