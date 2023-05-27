import React from 'react';
import { Container } from 'react-bootstrap';
import './courses.css';

export default function courses() {
  return (
    <div  className='cntnr' >
      <Container>
        <div className="wrapper">

          <h1>Courses</h1>

          <div className="row-one">

            <section className="one-1">
              <div class="card-border">
                <div class="card-bg">
                  <div class="container-logo">
                    <div class="logo"></div>
                    <div class="logo-inside">
                      <div class="first"></div>
                      <div class="second"></div>
                    </div>
                  </div>
                  <div id="blur-area"></div>
                  <div class="marquee">
                    <div class="marquee__inner" aria-hidden="true">
                      <span class="viper"> HTML HTML HTML HTML</span>
                      <span class="viper"> HTML HTML HTML HTML</span>
                      <span class="viper"> HTML HTML HTML HTML</span>
                    </div>
                  </div>
                </div>
                <div class="mist-container">
                  <div class="mist"></div>
                </div>
                <strong id="text-ext">HTML</strong>
              </div>
            </section>

            <section className="two-1">
              <div class="card-border">
                <div class="card-bg">
                  <div class="container-logo">
                    <div class="logo"></div>
                    <div class="logo-inside">
                      <div class="first"></div>
                      <div class="second"></div>
                    </div>
                  </div>
                  <div id="blur-area"></div>
                  <div class="marquee">
                    <div class="marquee__inner" aria-hidden="true">
                      <span class="viper"> HTML HTML HTML HTML</span>
                      <span class="viper"> HTML HTML HTML HTML</span>
                      <span class="viper"> HTML HTML HTML HTML</span>
                    </div>
                  </div>
                </div>
                <div class="mist-container">
                  <div class="mist"></div>
                </div>
                <strong id="text-ext">HTML</strong>
              </div>
            </section>
          </div>
          <div className="row-two">
            <section className="three-1">
              <div class="card-border">
                <div class="card-bg">
                  <div class="container-logo">
                    <div class="logo"></div>
                    <div class="logo-inside">
                      <div class="first"></div>
                      <div class="second"></div>
                    </div>
                  </div>
                  <div id="blur-area"></div>
                  <div class="marquee">
                    <div class="marquee__inner" aria-hidden="true">
                      <span class="viper"> HTML HTML HTML HTML</span>
                      <span class="viper"> HTML HTML HTML HTML</span>
                      <span class="viper"> HTML HTML HTML HTML</span>
                    </div>
                  </div>
                </div>
                <div class="mist-container">
                  <div class="mist"></div>
                </div>
                <strong id="text-ext">HTML</strong>
              </div>
            </section>

            <section className="four-1">
              <div class="card-border">
                <div class="card-bg">
                  <div class="container-logo">
                    <div class="logo"></div>
                    <div class="logo-inside">
                      <div class="first"></div>
                      <div class="second"></div>
                    </div>
                  </div>
                  <div id="blur-area"></div>
                  <div class="marquee">
                    <div class="marquee__inner" aria-hidden="true">
                      <span class="viper"> HTML HTML HTML HTML</span>
                      <span class="viper"> HTML HTML HTML HTML</span>
                      <span class="viper"> HTML HTML HTML HTML</span>
                    </div>
                  </div>
                </div>
                <div class="mist-container">
                  <div class="mist"></div>
                </div>
                <strong id="text-ext">HTML</strong>
              </div>
            </section>
          </div>
        </div>
        
      </Container>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './courses.css';

// export default function Courses() {
//   const navigate = useNavigate();
//   const [activeLevel, setActiveLevel] = useState(0);

//   const handleNextLevel = () => {
//     if (activeLevel < 3) {
//       setActiveLevel(prevLevel => prevLevel + 1);
//     }
//   };

//   const handleCourseClick = () => {
//     if (activeLevel < 3) {
//       navigate(`/course/${activeLevel + 1}`);
//     } else {
//       // You have completed all the courses
//     }
//   };

//   return (
//     <div>
//       <Container>
//         <div className="wrapper">
//         <div
//           className={`levels ${activeLevel === 0 ? 'active' : ''}`}
//           onClick={handleCourseClick}
//         >
//           <h1>Scratch</h1>
//         </div>
//         <div
//           className={`levels ${activeLevel === 1 ? 'active' : ''}`}

//           onClick={handleCourseClick}
//         >
//           <h1>HTML</h1>
//         </div>
//         <div
//           className={`levels ${activeLevel === 2 ? 'active' : ''}`}
//           onClick={handleCourseClick}
//         >
//           <h1>CSS</h1>
//         </div>
//         <div
//           className={`levels ${activeLevel === 3 ? 'active' : ''}`}
//           onClick={handleCourseClick}
//         >
//           <h1>JavaScript</h1>
//         </div>
//         <button onClick={handleNextLevel}>Next Level</button>
//         </div>
//       </Container>
//     </div>
//   );
// }
