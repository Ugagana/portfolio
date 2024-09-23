import project3 from "../assets/Projects/project 3.jpg"
import project4 from "../assets/Projects/project 4.jpg"
import project5 from "../assets/Projects/project 5.jpg"
import project6 from "../assets/Projects/project 6.jpg"
import project7 from "../assets/Projects/project 7.jpg"
import project1 from "../assets/Projects/Project 1.jpg"
import project2 from "../assets/Projects/project 2.jpg"




const projects = [
    {
        tileImg: project1,
        code: "https://github.com/Ugagana/Energy-Consumption-with-Population",
        description: "World Energy Consumption SAS Project",
        fullDetails: `<h1>Developing a Framework to Analyze World Energy Consumption Using SAS® Enterprise Guide</h1>
            <h2>Project Overview</h2>
            <p>In the award-winning the SAS Curiosity Cup project titled "Developing a Framework to Analyze World Energy Consumption Using SAS® Enterprise Guide," the focus was on examining the relationship between population growth and energy consumption across multiple countries. Utilizing datasets from the World Bank for population data and from Kaggle for world energy consumption, the project analyzed both renewable and non-renewable energy usage. The key objective was to determine if population growth was the sole driver behind a country’s energy consumption trends or if other factors were also influencing energy usage. This comprehensive analysis aimed to provide deeper insights into global energy consumption patterns and their relationship with population dynamics.</p>
            <h2>Process and Methodology</h2>
            <p>The project started with thorough data cleaning and preparation, including standardizing country names, handling missing values, and narrowing the scope to the top 20 most populous countries between 1995 and 2021. Using SAS® Enterprise Guide and PROC SQL, the team merged the population and energy datasets and categorized energy sources into renewable and non-renewable. The analysis utilized various visualizations, such as pie charts and dual-axis time series graphs, to depict trends in energy consumption and population growth. Notably, a strong correlation between the two variables was observed in 13 of the 17 countries. The team also faced challenges, such as handling large datasets and ensuring the focus remained on significant energy trends.</p>
            
            <h2>Results and Insights</h2>
            <p>The project revealed that 76.47% of the countries showed a positive correlation between population growth and energy consumption, with China and the U.S. leading in non-renewable energy consumption. A notable increase in renewable energy usage was observed globally, with some countries demonstrating a shift away from non-renewable sources. In 23.53% of the countries, non-renewable energy consumption decreased while renewable energy usage rose, highlighting a trend towards cleaner energy alternatives. The findings emphasized that while population growth is an important factor in energy consumption, it is not the sole driver, as other factors such as industrial reliance and economic growth also play significant roles. The project concluded with suggestions for expanding the analysis to more countries and incorporating additional variables for a more comprehensive understanding of global energy trends.</p>
            <h2>Visualizations and Insights</h2>
        <ol>

<li>
  <p style={{ textAlign: 'center' }}>
    A pie chart showing the increase in renewable and non-renewable energy consumption from 1995 to 2021.
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img src="/assets/Picture11.jpg" alt="Pie chart" />

        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture12.png"
            alt="Pie chart for 2021 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
      </tr>
    </tbody>
  </table>
</li>

<li>
  <p style={{ textAlign: 'center' }}>
   This dual-axis time series graph shows the correlation between population growth and energy consumption in China.
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture121.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>
<li>
  <p style={{ textAlign: 'center' }}>
   An illustration of the prompts created to select year ranges, demonstrating interactive query capabilities.
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture131.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
         <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture132.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>
             
               
            </ol>
        </>
            `,
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
            display: " hidden group-hover:flex"
        }
    },
    {
        tileImg: project2,
        code: "https://github.com/Ugagana/Market-segmentation-analysis-",
        description: "Predicting Advertisement Clicks",
        fullDetails: `<h1>Predicting Advertisement Clicks using R language</h1>
            <h2>Project Overview</h2>
            <p>This project focused on predicting advertisement clicks using a Kaggle dataset titled "Advertisement." The dataset included various user-related features such as daily time spent on the site, age, area income, and daily internet usage. These factors were used to build a predictive model to determine whether a user would click on an ad. The primary goal was to help businesses optimize their online advertising strategies by identifying potential ad-clickers, which in turn could improve engagement and return on investment (ROI).</p>
            <h2>Process and Methodology</h2>
            <p>The analysis started with data cleaning and exploratory analysis to identify key user behavior patterns. Variables were transformed, and new features were created from the timestamp data to enhance the dataset's quality. Correlation analysis, along with statistical tests like the Mann-Whitney U test, highlighted significant relationships, particularly between daily time spent on the site, area income, and user engagement with ads. The data insights allowed the team to understand which factors influenced the likelihood of a user clicking on an advertisement.</p>
            
            <h2>Results and Insights</h2>
            <p>Several machine learning models were employed, including Logistic Regression, Support Vector Machine (SVM), Decision Tree, and Random Forest. Logistic Regression emerged as the best-performing model with an impressive accuracy of 98%, followed closely by SVM and Random Forest. Key features identified by these models included daily internet usage, daily time spent on the site, and area income. This project demonstrated how predictive modeling could enhance ad targeting strategies, enabling businesses to engage users more effectively and improve ad click-through rates.</p>
      <h2>Visualizations and Insights</h2>
        <ol>

<li>
  <p style={{ textAlign: 'center' }}>
    	A bar chart showcasing the importance of the top features (like daily internet usage, daily time spent on the site, age) in predicting ad clicks. This provides a quick understanding of which factors influence user behavior the most.
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture21.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
    
      </tr>
    </tbody>
  </table>
</li>

<li>
  <p style={{ textAlign: 'center' }}>
   The bar chart comparing the accuracy, precision, and recall of different models (Logistic Regression, SVM, Decision Tree, Random Forest). 
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture22.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>
<li>
  <p style={{ textAlign: 'center' }}>
   The bar graph showing the distribution of ad clicks across different times of day or days of the week. This visual emphasizes the importance of timing in user engagement and supports the narrative of your findings.
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture23.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
         
        
      </tr>
    </tbody>
  </table>
</li>
             
               
            </ol>
        </>      
     `,
        
        
        style: {
            shadow: "shadow-[#5E4746]",
            cover: "from-[#5E4746]",
            display: " hidden group-hover:flex"
        }
    },
    {
        tileImg: project3,
        
        
        "code": "https://github.com/Ugagana/Analyzing-San-Antonio-s-Online-Behavior",
        "description": "Predictive Modeling for Direct-Mail Fundraising Campaigns",
        "fullDetails": `<h1>Predictive Modeling for Direct-Mail Fundraising Campaigns using Python</h1>
          <h2>Project Overview</h2>
          <p>In this project, I developed a predictive model to enhance the cost-effectiveness of direct-mail fundraising campaigns for a national veteran's organization. The organization, with over 13 million donors in its database, aimed to improve its ability to identify high-probability donors to maximize net profit. The dataset used for this analysis contained 3,000 records and 21 variables, including demographic, behavioral, and financial information. The goal was to create a model that would help the organization target potential donors more effectively and efficiently.</p>
          
          <h2>Process and Methodology</h2>
          <p>The data preparation process began with encoding categorical variables and removing highly correlated features to ensure a clean and accurate dataset. To address class imbalance between donors and non-donors, I applied weighted sampling, which helped avoid bias and improve the performance of the predictive models. Several machine learning algorithms were tested, including Logistic Regression, Random Forest, Gradient Boosting, and Naive Bayes. The models were evaluated based on their accuracy, ROC AUC scores, and confusion matrices to determine which would perform best in predicting donor behavior.</p>
          
          <h2>Results and Insights</h2>
          <p>The Random Forest model achieved the highest performance, with an accuracy of 79.7% and an ROC AUC score of 0.911, indicating its strength in predicting donor behavior. This model effectively classified donors and non-donors, with minimal false positives and negatives, making it a reliable tool for optimizing future mailing campaigns. By implementing this model, the organization can now focus its resources on higher-probability donors, reducing mailing costs while increasing donation revenue. Future improvements could involve exploring other modeling techniques or feature engineering to further enhance the model's accuracy and effectiveness.</p>
         <h2>Visualizations and Insights</h2>
        <ol>

<li>
  <p style={{ textAlign: 'center' }}>
    A comparison of the initial correlation matrix (with highly correlated variables) and the revised correlation matrix (after removing the highly correlated variables).
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td">
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture311.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '100px', border: '1px solid red' }}
          />
        </td>
     <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture31.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>

<li>
  <p style={{ textAlign: 'center' }}>
   A table comparing the accuracy and mean squared error (MSE) of different machine learning models (e.g., Logistic Regression, Random Forest, Gradient Boosting, Naive Bayes).  
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture32.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>

             
               
            </ol>
        </>  
          `,
              
        style: {
            shadow: "shadow-[#FB923C]",
            cover: "from-[#FB923C]",
            display: " hidden group-hover:flex"
        }
    },
    
        {
            tileImg: project4,
           
            "demo": "https://dev-news-793.vercel.app/",
            "code": "https://github.com/Ugagana/Analyzing-San-Antonio-s-Online-Behavior",
            "description": "H1B Insights: Visualizing US Applicant Trends & Salaries",
            "fullDetails": `<h1>H1B Insights: Visualizing US Applicant Trends & Salaries using Tableau</h1>
              <h2>Project Overview</h2>
              <p>In this Tableau project, I analyzed trends and patterns in H1B visa applications in the United States to gain insights into the demand for skilled foreign labor across various industries and regions. Using publicly available datasets, the project focused on key metrics such as visa application distribution by job titles, employers, locations, and approval/denial rates over time. The primary objective was to provide a comprehensive view of the H1B landscape to assist employers, employees, and policymakers in making data-driven decisions about hiring and immigration policies.</p>
              
              <h2>Process and Methodology</h2>
              <p>The data was sourced from publicly available H1B visa application datasets, which were cleaned and prepared for visualization. Key dimensions and measures, such as job categories, employers, and regions, were incorporated to facilitate meaningful analysis. The dashboard was designed with interactive filters that allow users to drill down into the data by year, state, and job category. Advanced features such as bar charts, heatmaps, and trend lines were used to display how different industries and employers approach H1B sponsorship, as well as the geographical distribution of visa applicants and their approval/denial rates.</p>
              
              <h2>Results and Insights</h2>
              <p>The final dashboard provides an interactive and flexible experience, enabling users to explore trends in H1B applications across multiple dimensions. Key insights include which industries and companies are most likely to sponsor foreign workers, how approval rates vary by region, and trends over time in both applications and outcomes. These insights are valuable for businesses looking to understand market demand and identify talent gaps, while also providing actionable data for policymakers. The project demonstrates my ability to work with large datasets, create intuitive visualizations, and deliver insights that can guide hiring strategies and immigration policies.</p>
              
              <h2>Visualizations and Insights</h2>
        <ol>

<li>
  <p style={{ textAlign: 'center' }}>
    Top Employers by H1B Applications 2022: This shows which companies file the most applications.
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td">
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture41.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '100px', border: '1px solid red' }}
          />
        </td>
     
        
      </tr>
    </tbody>
  </table>
</li>

<li>
  <p style={{ textAlign: 'center' }}>
  Application Outcome by Year: A trend graph that displays the approval and denial rates of H1B applications over time.  
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture42.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>
<li>
  <p style={{ textAlign: 'center' }}>
  H1B Applications by Job Title and Location: A bar chart or map showing which job titles and states see the highest application volumes.  
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture43.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>
   <li>
  <p style={{ textAlign: 'center' }}>
  Citywise Applicants  
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture44.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>          
               
            </ol>
        </>`
          ,
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#F8FAFC]",
            display: " hidden group-hover:flex"
        }
    },
    
        {
            tileImg: project5,
            
            "demo": "https://dev-news-793.vercel.app/",
            "code": "https://github.com/Ugagana/Analyzing-San-Antonio-s-Online-Behavior",
            "description": "Correspondence Analysis Young People Survey",
            "fullDetails": `<h1>Correspondence Analysis: Education and Internet Usage Patterns</h1>
              <h2>Project Overview</h2>
              <p>In this Correspondence Analysis project, I explored the relationship between education levels and internet usage using the "Young People Survey" dataset from Kaggle. The dataset contains information on students and their friends from FSEV UK, covering demographics, personal preferences, and internet habits. The focus of the analysis was on identifying whether there was a significant association between two categorical variables—education and internet usage. By applying correspondence analysis, the goal was to visualize and uncover any notable patterns in how people with different education levels use the internet.</p>
              
              <h2>Process and Methodology</h2>
              <p>The analysis began by selecting two key variables: education levels (ranging from secondary education to doctoral degrees) and reported internet usage habits. I constructed a contingency table to summarize the data, and then performed a correspondence analysis to visualize the association between these variables. The analysis was further supported by a chi-square test to validate the statistical significance of the results. By plotting the correspondence map, I was able to observe clusters and trends that indicated the relationship between education and internet usage patterns.</p>
              
              <h2>Results and Insights</h2>
              <p>The correspondence analysis revealed several key insights:</p>
              <ul>
                <li>People with secondary education typically spent a few hours online.</li>
                <li>Those with a bachelor's degree or college education spent most of their day on the internet.</li>
                <li>Individuals with higher education levels (such as master's or doctoral degrees) showed notably lower internet usage, often reporting spending less than an hour or no time online.</li>
              </ul>
              <p>The chi-square test confirmed a statistically significant relationship between education and internet usage, suggesting that educational attainment influences digital behavior. These findings emphasize the need for tailored policies aimed at ensuring equitable digital access and literacy across various education levels.</p>
              
              <h2>Visualizations and Insights</h2>
        <ol>

<li>
  <p style={{ textAlign: 'center' }}>
    Correspondence Analysis Plot: Showing how education levels (in blue) and internet usage (in red) are associated.
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td">
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture51.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '100px', border: '1px solid red' }}
          />
        </td>
     
        
      </tr>
    </tbody>
  </table>
</li>

<li>
  <p style={{ textAlign: 'center' }}>
  Contingency Table with Expected and Observed Values: To illustrate the relationship between education and internet usage.  
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture52.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>
<li>
  <p style={{ textAlign: 'center' }}>
  Chi-Square Contribution Plot: This will highlight the significant categories impacting the chi-square statistic, helping readers understand the associations better.  
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture53.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>
            
               
            </ol>
        </>`
          ,
        style: {
            shadow: "shadow-[#23CEEE]",
            cover: "from-[#23CEEE]",
            display: " hidden group-hover:flex"
        }
    },
    {
        tileImg: project6,
        
        "demo": "https://dev-news-793.vercel.app/",
        "code": "https://github.com/Ugagana/Analyzing-San-Antonio-s-Online-Behavior",
        "description": "Sentiment Analysis : Analyzing San Antonio's Online Behavior",
        "fullDetails": `<h1>Sentiment Analysis: Analyzing San Antonio's Online Behavior Using Python and Machine Learning</h1>
          <h2>Project Overview</h2>
          <p>In this machine learning project, I analyzed the online behavior of San Antonio residents, focusing on how they utilize technology for ride-share apps, food delivery services, and online shopping. Using data sourced from Reddit posts specific to San Antonio, I aimed to identify which technology services were most frequently mentioned and understand the behavioral trends associated with these technologies. The goal was to provide insights into the role of technology in residents' daily lives and determine which services were gaining the most attention in the community.</p>
          
          <h2>Process and Methodology</h2>
          <p>The dataset was manually annotated to categorize mentions of ride-share apps, food delivery, and online shopping. To ensure the reliability of the annotations, I used Cohen's kappa statistics to measure agreement between annotators. I then built two logistic regression models—one using CountVectorizer and another using TfidfVectorizer—to extract features from the text data. Detailed evaluations of the models were performed, using metrics such as precision, recall, and F1 scores to assess their ability to classify mentions of each service. I also incorporated lexicon-based classifiers to further refine predictions by analyzing features such as exclamation points and specific word counts related to technology services.</p>
          
          <h2>Results and Insights</h2>
          <p>The analysis revealed that food delivery apps were the most mentioned technology service among San Antonio residents, followed by ride-sharing and online shopping. The TfidfVectorizer-based logistic regression model performed the best in classifying mentions of these services, particularly for food delivery. The use of lexicon-based classifiers provided additional insights into user behavior, highlighting that discussions around food delivery services often involved emotional expressions, such as frequent use of exclamation points. This project demonstrated how technology plays a significant role in daily life, particularly with the prominence of food delivery services, and showcased the effectiveness of machine learning models in understanding online behavior.</p>
       <h2>Visualizations and Insights</h2>
        <ol>

<li>
  <p style={{ textAlign: 'center' }}>
    A table showcasing the Macro and Micro F1 scores
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td">
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture61.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '100px', border: '1px solid red' }}
          />
        </td>
     
        
      </tr>
    </tbody>
  </table>
</li>


            
               
            </ol>
        </>  
         `
      ,
        style: {
            shadow: "shadow-[#277AF8]",
            cover: "from-[#277AF8]",
            display: " hidden group-hover:flex"
        }
    },
    {
        tileImg: project7,
        
        "demo": "https://dev-news-793.vercel.app/",
        "code": "https://github.com/Ugagana/Analyzing-San-Antonio-s-Online-Behavior",
        "description": "Market Segmentation of Krispy Kreme Consumers",
        "fullDetails": `<h1>Market Segmentation of Krispy Kreme Consumers</h1>
          <h2>Project Overview</h2>
          <p>In this market segmentation project, I analyzed consumer preferences and behaviors related to Krispy Kreme products. The goal was to identify distinct customer segments to help Krispy Kreme tailor its marketing strategies and product offerings. By applying advanced statistical techniques such as Principal Component Analysis (PCA) and K-means clustering, I aimed to uncover meaningful patterns in consumer data that could inform business decisions.</p>
          
          <h2>Process and Methodology</h2>
          <p>The analysis began with a comprehensive dataset of Krispy Kreme customers, including demographic information, purchasing habits, and product preferences. I first applied PCA to reduce the dimensionality of the data and identify key factors influencing consumer behavior. Following this, K-means clustering was used to segment customers into distinct groups based on these factors. The optimal number of clusters was determined using the R-Square and Cubic Clustering Criterion (CCC) methods. To ensure the reliability of the segmentation, I validated the results using cross-validation techniques and profiled each segment based on its characteristics.</p>
          
          <h2>Visualizations and Insights</h2>
        <ol>

<li>
  <p style={{ textAlign: 'center' }}>
   Scree Plot of PCA – to show the extraction of key factors.
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture71.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '100px', border: '1px solid red' }}
          />
        </td>
     
        
      </tr>
    </tbody>
  </table>
</li>

<li>
  <p style={{ textAlign: 'center' }}>
  Cluster Means Table – highlighting the segmentation of consumer preferences.  
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td"></td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture72.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>
<li>
  <p style={{ textAlign: 'center' }}>
  K-means Clustering Results (R-Square and CCC Graphs) – to demonstrate the optimization process for selecting clusters.  
  </p>


  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tbody>
      <tr>
<td className="spacer-td">
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture731.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture732.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
         <td style={{ padding: '10px' }}>
          <img
            src="src/assets/Projects/Picture734.png"
            alt="Pie chart for 1995 energy consumption"
            style={{ width: '300px', border: '1px solid red' }}
          />
        </td>
        
      </tr>
    </tbody>
  </table>
</li>
            
               
            </ol>
        </>`
      ,
        style: {
            shadow: "shadow-[#FFD43B]",
            cover: "from-[#FFD43B]",
            display: " hidden group-hover:flex"
        }
    },
  
    // {
    //     img: "",
    //     name: "WordCloud Generator",
    //     demo: "https://github.com/dhawal-793/Wordcloud-maker",
    //     code: "https://github.com/dhawal-793/Wordcloud-maker",
    //     description: "This is a WordCloud Maker, Created using Python. User can create WordCloud by giving paragraph of text as Input.   ",
    //     style: {
    //         shadow: "shadow-emerald-500",
    //         cover: "from-emerald-500",
    // display:" hidden group-hover:flex"
    //     }
    // },
]
export default projects;