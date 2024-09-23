// import React from 'react';

// const Experience = () => {
//   return (
//     <section id="experience" className="section">
//       <h2 className="animatedHeading">Experience</h2>
      
//       <div className="experience-item">
//         <h3>Senior Analyst</h3>
//         <p>Lowes India | Jan 2017 - Nov 2018</p>
//         <ul>
//           <li>Piloted Asset Resolution and Maintenance (ARM) process.</li>
//           <li>Maintained assets like images, videos, and 360 spins for Lowes.com, resolving seller issues.</li>
//           <li>Trained associates and analysts, created Power BI dashboards for reporting.</li>
//           <li>Promoted to Senior Analyst for process improvement and expertise.</li>
//         </ul>
//       </div>
      
//       <div className="experience-item">
//         <h3>Senior Product Compliance Associate</h3>
//         <p>Amazon.in | Dec 2018 - Aug 2020</p>
//         <ul>
//           <li>Led operations strategy as SME for the team, provided coaching and analysis for the Food Safety Investigation team.</li>
//           <li>Piloted investigations for food safety concerns across Indian, US, and CA marketplaces.</li>
//         </ul>
//       </div>

//       <div className="experience-item">
//         <h3>Data Analyst</h3>
//         <p>Technosoft Global Corporation - Target Corporation | Aug 2020 - Sep 2022</p>
//         <ul>
//           <li>Worked on competitive intelligence and global pricing.</li>
//           <li>Trained and mentored new team members, worked on transition projects like reverse mapping and price variance.</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Experience;
// import React from 'react';
// import '../index.css';  // Assuming the CSS above is in this file

// const Experience = () => {
//   return (
//     <section id="experience" className="experience-container">
      
//       {/* First Experience */}
//       <div className="experience-card">
//         <div className="company-logo">
//           {/* Replace with company logo image */}
//           <img src="" alt="Lowes Logo" />
//         </div>
//         <h3>Lowes India</h3>
//         <h4>Senior Analyst</h4>
//         <p className="date">Jan 2017 - Nov 2018</p>
//         <p>• Piloted Asset Resolution and Maintenance (ARM) process.</p>
//         <p>• Managed assets like images, videos, and 360 spins for Lowes.com.</p>
//         <p>• Trained associates and analysts, created Power BI dashboards.</p>
//       </div>

//       {/* Second Experience */}
//       <div className="experience-card">
//         <div className="company-logo">
//           {/* Replace with company logo image */}
//           <img src="" alt="Amazon Logo" />
//         </div>
//         <h3>Amazon.in</h3>
//         <h4>Senior Product Compliance Associate</h4>
//         <p className="date">Dec 2018 - Aug 2020</p>
//         <p>• Led operations strategy and provided coaching for the Food Safety Investigation team.</p>
//         <p>• Piloted investigations for food safety concerns in Indian, US, and CA marketplaces.</p>
//       </div>

//       {/* Third Experience */}
//       <div className="experience-card">
//         <div className="company-logo">
//           {/* Replace with company logo image */}
//           <img src="" alt="Technosoft Logo" />
//         </div>
//         <h3>Technosoft Global Corp</h3>
//         <h4>Data Analyst</h4>
//         <p className="date">Aug 2020 - Sep 2022</p>
//         <p>• Worked on competitive intelligence and global pricing.</p>
//         <p>• Trained and mentored new team members, handled reverse mapping and price variance projects.</p>
//       </div>
      
//     </section>
//   );
// };

// export default Experience;
import React from 'react';
import { useInView } from 'react-intersection-observer';


const Experience = () => {
  // InView hook to track when elements come into view
  const { ref: experienceHeadingRef, inView: headingInView } = useInView({ triggerOnce: true });
  const { ref: firstCardRef, inView: firstCardInView } = useInView({ triggerOnce: true });
  const { ref: secondCardRef, inView: secondCardInView } = useInView({ triggerOnce: true });
  const { ref: thirdCardRef, inView: thirdCardInView } = useInView({ triggerOnce: true });

  return (
    <section id="experience">
      <div className="experience-section">
        {/* Heading with animation */}
        <h2
          ref={experienceHeadingRef}
          className={`experience-heading ${headingInView ? 'slide-in-from-left' : ''}`}
        >
          EXPERIENCE
        </h2>

        <div className="experience-container">

          {/* First Experience Card */}
          <div
            ref={firstCardRef}
            className={`experience-card ${firstCardInView ? 'slide-in-from-left' : ''}`}
          >
            <h3>Senior Analyst</h3>
            <h4>Lowes India</h4>
            <p className="date">Jan 2017 - Nov 2018</p>
            <ul>
              <li>Piloted Asset Resolution and Maintenance (ARM) process.</li>
              <li>Managed assets like images, videos, and 360 spins for Lowes.com.</li>
              <li>Trained associates and analysts, created Power BI dashboards.</li>
            </ul>
          </div>

          {/* Second Experience Card */}
          <div
            ref={secondCardRef}
            className={`experience-card ${secondCardInView ? 'slide-in-from-left' : ''}`}
          >
            <h3>Senior Product Compliance Associate</h3>
            <h4>Amazon.in</h4>
            <p className="date">Dec 2018 - Aug 2020</p>
            <ul>
              <li>Led operations strategy and provided coaching for the Food Safety team.</li>
              <li>Piloted investigations for food safety concerns across Indian, US, and CA marketplaces.</li>
            </ul>
          </div>

          {/* Third Experience Card */}
          <div
            ref={thirdCardRef}
            className={`experience-card ${thirdCardInView ? 'slide-in-from-left' : ''}`}
          >
            <h3>Data Analyst</h3>
            <h4>Technosoft Global Corporation</h4>
            <p className="date">Aug 2020 - Sep 2022</p>
            <ul>
              <li>Worked on competitive intelligence and global pricing.</li>
              <li>Trained and mentored new team members.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
