// import React from 'react';

// const Education = () => {
//   return (
//     <section id="education" className="section">
//       <h2 className="animatedHeading">Education</h2>
//       <div className="education-item">
//         <h3>Master of Science: Data Analytics</h3>
//         <p>University of Texas at San Antonio</p>
//         <p>August 2023 - August 2024</p>
//       </div>
//       <div className="education-item">
//         <h3>Bachelor of Engineering: Information Science</h3>
//         <p>Vidya Vikas Institute of Engineering & Technology</p>
//         <p>August 2010 - May 2014</p>
//       </div>
//     </section>
//   );
// };

// export default Education;
// import React from 'react';
// import { useInView } from 'react-intersection-observer';

// const Education = () => {
    
//   // InView hooks to track when elements come into view
//   const { ref: educationHeadingRef, inView: headingInView } = useInView({ triggerOnce: true });
//   const { ref: firstCardRef, inView: firstCardInView } = useInView({ triggerOnce: true });
//   const { ref: secondCardRef, inView: secondCardInView } = useInView({ triggerOnce: true });

//   return (
//     <section id="education" >
//       <div className="education-section">
//         {/* Heading with animation */}
//         <h2
//           ref={educationHeadingRef}
//           className={`education-heading ${headingInView ? 'slide-in-from-left' : ''}`}
//         >
//           EDUCATION
//         </h2>

//         <div className="education-container">

//           {/* First Education Card */}
//           <div
//             ref={firstCardRef}
//             className={`education-card ${firstCardInView ? 'slide-in-from-left' : ''}`}
//           >
//             <h3>Master of Science: Data Analytics</h3>
//             <h4>University of Texas at San Antonio</h4>
//             <p className="date">August 2023 - August 2024</p>
//           </div>

//           {/* Second Education Card */}
//           <div
//             ref={secondCardRef}
//             className={`education-card ${secondCardInView ? 'slide-in-from-left' : ''}`}
//           >
//             <h3>Bachelor of Engineering: Information Science</h3>
//             <h4>Vidya Vikas Institute of Engineering & Technology</h4>
//             <p className="date">August 2010 - May 2014</p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

import React, { useRef } from 'react';  // Add useRef here
import { useInView } from 'react-intersection-observer';

const Education = () => {
  // InView hooks to track when elements come into view
  const { ref: educationHeadingRef, inView: headingInView } = useInView({ triggerOnce: true });
  const { ref: firstCardRef, inView: firstCardInView } = useInView({ triggerOnce: true });
  const { ref: secondCardRef, inView: secondCardInView } = useInView({ triggerOnce: true });

  return (
    <section id="education">
      <div className="education-section">
        {/* Heading with animation */}
        <h2
          ref={educationHeadingRef}
          className={`education-heading ${headingInView ? 'slide-in-from-left' : ''}`}
        >
          EDUCATION
        </h2>

        <div className="education-container">
          {/* First Education Card */}
      
          <div
            ref={firstCardRef}
            className={`education-card ${firstCardInView ? 'slide-in-from-left' : ''}`}
          >
            <h3>Master of Science: Data Analytics</h3>
            <h4>University of Texas at San Antonio</h4>
            <p className="date">August 2023 - August 2024</p>
          </div>
         
          {/* Second Education Card */}
          
          <div
            ref={secondCardRef}
            className={`education-card ${secondCardInView ? 'slide-in-from-left' : ''}`}
          >
            <h3>Bachelor of Engineering: Information Science</h3>
            <h4>Vidya Vikas Institute of Engineering & Technology</h4>
            <p className="date">August 2010 - May 2014</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
