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
  const { ref: fourthCardRef, inView: fourthCardInView } = useInView({ triggerOnce: true });
  const { ref: fifthCardRef, inView: fifthCardInView } = useInView({ triggerOnce: true });
  const { ref: sixthCardRef, inView: sixthCardInView } = useInView({ triggerOnce: true });

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
            className={`experience-card ${firstCardInView ? 'slide-in-from-left scroll-active' : ''}`}
          >
          
            <h3>Data Analyst Intern</h3>
            <h4>Better Futures Institute</h4>
            <p className="date">May 2024 - Aug 2024</p>
            <ul>
              <li>Developed targeted community outreach strategies through geographic analysis of 311 service requests, enhancing community 
              engagement by 30%.</li>
              <li>Built a predictive model that forecasted 311 service requests with 65% accuracy, streamlining maintenance workflows and optimizing 
              street repair schedules.</li>
              <li>Designed interactive dashboards and comprehensive reports using Tableau and Power BI, providing actionable insights that improved 
resource allocation efficiency by 25%.</li>
              <li>Conducted advanced statistical and geographic analysis using Python and R, identifying patterns in service requests that led to a 20% 
              increase in proactive repairs.</li>
              
            </ul>
          </div>
          <div
            ref={secondCardRef}
            className={`experience-card ${secondCardInView ?  'slide-in-from-left scroll-active' : ''}`}
          >
            <h3>Senior Analyst</h3>
            <h4>Lowes India</h4>
            <p className="date">Jul 2020 - Sep 2022</p>
            <ul>
              <li>Developed and trained 6 associates, enhancing team knowledge, resulting in a 20% increase in overall team productivity.</li>
              <li>Designed and delivered data-driven insights via weekly and monthly Power BI dashboards, informing strategic decision-making with 
a 30% improvement in reporting speed.</li>
              <li>Created standardized operating procedures (SOPs) and Visio flowcharts, streamlining the ARM process and ensuring scalability, which 
              reduced onboarding time by 25%.</li>
              <li>Spearheaded the pilot launch of the Asset Resolution and Maintenance (ARM) process, driving efficiency that led to a 15% increase 
              in productivity and a 20% reduction in resolution times.</li>
              <li>Led the asset maintenance team, ensuring timely resolution of seller issues and achieving a 95% satisfaction rate in high-quality asset 
              delivery (images, videos, 360 Spin).</li>
            </ul>
          </div>

          {/* Second Experience Card */}
          <div
            ref={thirdCardRef}
            className={`experience-card ${thirdCardInView ?  'slide-in-from-left scroll-active' : ''}`}
          >
            <h3>Senior Product Compliance Associate</h3>
            <h4>Amazon.in</h4>
            <p className="date">Dec 2018 - Aug 2020</p>
            <ul>
              <li>Oversaw team prioritization, productivity, reporting, and training needs, resulting in a 25% improvement in operational efficiency</li>
              <li>Applied SQL to fetch and transform data, designing interactive dashboards in Tableau and Power BI that boosted data accessibility by 40% and aided strategic decision-making.</li>
<li>Formulated operational strategies as a Subject Matter Expert (SME), accelerating team efficiency and productivity by 20%.</li>
<li>Conducted detailed analysis and generated 4 weekly and 1 monthly business reviews for the Food Safety Investigation team, facilitating strategic decisions that led to a 15% improvement in operational processes in the Indian market.</li>
            </ul>
          </div>

          {/* Third Experience Card */}
          <div
            ref={fourthCardRef}
            className={`experience-card ${fourthCardInView ? 'slide-in-from-left scroll-active' : ''}`}
          >
          
            <h3>Lead Item Data Specialist</h3>
            <h4>Target Corporation</h4>
            <p className="date">Jan 2017 - Nov 2018</p>
            <ul>
            
              <li>Managed item data, including vendor information, ensuring a 95% on-time launch of items on Target.com. Led the analysis and reporting of key business metrics, enabling the team to derive actionable insights that increased sales by 20%.</li>
              <li>Attained certification through a 'Train the Trainer' program, enhancing training capabilities for over 30 team members.</li>
              <li>Pioneered testing of the Pipeline application upon initial release, ensuring 100% compliance with defined regulations and reducing testing time by 25%.</li>
              <li>Initiated and managed over 2,000 guest reviews, resolving potential issues promptly to enhance guest satisfaction scores by 15%.</li>
            </ul>
          </div>
          <div
            ref={fifthCardRef}
            className={`experience-card ${fifthCardInView ? 'slide-in-from-left scroll-active' : ''}`}
          >
            <h3>Data Analyst</h3>
            <h4>Technosoft Global Corporation – Target Corporation</h4>
            <p className="date">July 2015 - Dec 2016</p>
            <ul>
            
              <li>Strategically mapped Target.com product offerings against key competitors, identifying 15 strategic opportunities for market 
              positioning that improved market share by 10%. </li>
              <li>Successfully led critical transition projects such as reverse mapping and price variance analysis, contributing to a 20% increase in 
              operational efficiency and project success rates.</li>
              
            </ul>
          </div>
          <div
            ref={sixthCardRef}
            className={`experience-card ${sixthCardInView ? 'slide-in-from-left scroll-active' : ''}`}
          >
            <h3>Business Development Manager</h3>
            <h4>MyDeals247 Pvt. ltd</h4>
            <p className="date">Sep 2014 - Mar 2015</p>
            <ul>
            
              <li>Engaged clients to ensure ongoing updates on our products and market trends, resulting in increased client satisfaction and retention.  </li>
              <li>Contributed to the expansion of product lines and the conceptualization of new products, driving growth and market diversification.</li>
              <li>Conducted extensive research on global markets, identifying emerging trends and implementing innovative strategies to enhance
market penetration and competitiveness.
</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
