import courseBi from "@/assets/course-bi.jpg";
import courseDataAnalytics from "@/assets/course-data-analytics.jpg";
import courseEtl from "@/assets/course-etl.jpg";
import coursePython from "@/assets/course-python.jpg";
import courseAiMl from "@/assets/course-ai-ml.jpg";
import courseGovernance from "@/assets/course-governance.jpg";

export const courses = [
    {
      id: 1,
      title: "Data Analytics and Business Intelligence with Advanced Excel and Power BI",
      level: "Foundation",
      thumbnail: courseBi,
      introduction: "This course equips participants to transform raw data into clear, actionable insights that drive smarter decisions across any organisation. Learn to clean, analyse, visualise, and model data using Excel’s advanced features and Power BI’s dynamic, real-time analytics. Through hands-on projects and real-world case studies, participants build insightful dashboards, apply core analytical techniques, and enable self-service analytics that boost efficiency and decision-making across the business.",
      whoShouldAttend: [
        "Professionals seeking to build or strengthen their skills in data analytics using Microsoft Excel and Power BI",
        "Business analysts, M&E officers, administrators, and managers",
        "Government officers, NGO staff, and corporate teams looking to enhance data-driven decision-making",
        "Anyone transitioning into data analytics or preparing for analytics-focused roles"
      ],
      objectives: [
        "Understand the importance and applications of data analytics in modern organisations",
        "Gain a solid understanding of data analytics concepts, practices, and workflows",
        "Clean, organize, and prepare data for analysis using Excel and Power BI",
        "Apply core analytical skills and functions for real-world problem-solving",
        "Use data modelling techniques to structure and analyse datasets effectively",
        "Perform calculations, create measures, and generate insights using Excel and Power BI",
        "Design, visualize, and communicate findings using dashboards, reports, and presentations",
        "Publish, share, and manage analytics solutions through Power BI Service"
      ],
      modules: [
        {
          title: "Module 1: Introduction to Data Analytics Using Excel",
          topics: ["Understanding data analytics concepts and workflow", "Data cleaning and transformation using Excel", "Essential Excel functions and formulas for analytics"]
        },
        {
          title: "Module 2: Intermediate Excel for Analytics",
          topics: ["Conditional formatting for insights", "PivotTables for data summarization", "PivotCharts for visual analysis"]
        },
        {
          title: "Module 3: Excel Dashboards & Introduction to Power BI",
          topics: ["Designing dashboards in Excel", "Introduction to Power BI and its ecosystem", "Getting and transforming data using Power BI"]
        },
        {
          title: "Module 4: Data Modeling & DAX in Power BI",
          topics: ["Understanding data modelling concepts", "Creating relationships between datasets", "Introduction to DAX (Data Analysis Expressions)", "Building measures and calculated columns"]
        },
        {
          title: "Module 5: Power BI Visualization & Reporting",
          topics: ["Designing impactful Power BI reports", "Editing interactions and applying filters", "Publishing to and navigating Power BI Service"]
        }
      ]
    },
    {
      id: 2,
      title: "Data Analysis & Trend Monitoring Training Course",
      level: "Foundation",
      thumbnail: courseDataAnalytics,
      introduction: "This intensive training programme equips professionals with the analytical skills needed to collect, interpret, and translate data into meaningful trends and insights. Participants gain hands-on experience with modern analytical tools, statistical methods, and visualization techniques that support evidence-based decision-making across sectors. By the end of the course, participants will be able to forecast outcomes, identify emerging patterns, and provide strategic recommendations grounded in data.",
      whoShouldAttend: [
        "Professionals working in monitoring & evaluation (M&E), research, planning, and strategy",
        "Government officers, NGO staff, and corporate teams responsible for reporting or performance monitoring",
        "Analysts, project managers, and decision-makers who rely on data-driven insights",
        "Individuals looking to build or advance their skills in trend analysis, forecasting, and data interpretation",
        "Anyone transitioning into data analytics or seeking to strengthen their analytical capability"
      ],
      organizationalImpact: [
        "Strengthened capacity to monitor market, operational, and program trends",
        "Improved strategic decision-making supported by clear data insights",
        "Greater efficiency in tracking project or organizational performance",
        "Enhanced forecasting and risk-management capabilities"
      ],
      personalImpact: [
        "Sharpened analytical and problem-solving skills",
        "Ability to interpret data and communicate insights with clarity",
        "Stronger competitiveness for data-driven roles",
        "Increased confidence in applying analytics for planning and reporting"
      ],
      objectives: [
        "Understand foundational concepts in data analysis and trend monitoring",
        "Apply statistical techniques to uncover insights and patterns",
        "Use visualization tools to design clear, compelling dashboards and charts",
        "Integrate analytical findings into organizational decision-making processes",
        "Work through practical, real-world case studies to reinforce learning"
      ],
      modules: [
        {
          title: "Module 1: Introduction to Data Analysis & Trend Monitoring",
          topics: ["Role of data in decision-making", "Key concepts: data types, sources, structures", "Understanding trends and patterns in datasets", "Limitations and challenges in trend monitoring", "Case Study: Using sales data to improve forecasting"]
        },
        {
          title: "Module 2: Data Collection & Preparation",
          topics: ["Effective data collection methods (surveys, digital tools, secondary data)", "Data cleaning, validation, and preparation techniques", "Handling missing or inconsistent data", "Organizing and structuring data for analysis", "Case Study: Preparing NGO project data for monitoring & evaluation"]
        },
        {
          title: "Module 3: Analytical Tools & Statistical Techniques",
          topics: ["Descriptive statistics and data summarization", "Introduction to inferential statistics", "Correlation, regression, and time-series analysis", "Using Excel, SPSS, or Python for statistical analysis", "Case Study: Regression analysis for forecasting energy consumption trends"]
        },
        {
          title: "Module 4: Data Visualization & Communication of Insights",
          topics: ["Principles of effective data visualization", "Designing dashboards and charts for trend monitoring", "Best practices for presenting insights to stakeholders", "Avoiding misleading visualizations", "Case Study: Creating a financial performance monitoring dashboard"]
        },
        {
          title: "Module 5: Applying Data Analysis for Strategic Decision-Making",
          topics: ["Translating data insights into actionable strategies", "Predictive analysis for planning and forecasting", "Risk assessment and scenario development", "Embedding analytics into performance monitoring frameworks", "Case Study: Leveraging data insights to improve program implementation outcomes"]
        }
      ]
    },
    {
      id: 3,
      title: "Data Collection, Analysis & Visualization Training",
      level: "Foundation to Intermediate",
      duration: "5 Days",
      thumbnail: courseEtl,
      introduction: "This intensive 5-day training provides participants with end-to-end skills in digital data collection, statistical analysis, and data visualization using industry-standard tools including KoboToolbox, SPSS, Excel, SQL, and Power BI. Participants learn to design digital surveys, manage and analyze data efficiently, and present insights through professional dashboards and reports. Through practical exercises and real-world case studies, the course builds strong analytical capability for monitoring, evaluation, research, and decision-making roles.",
      whoShouldAttend: [
        "Monitoring & Evaluation (M&E) officers",
        "Research and data collection teams",
        "NGO, government, and corporate professionals",
        "Data analysts, project managers, and field supervisors",
        "Anyone seeking practical expertise in digital data systems and analysis"
      ],
      objectives: [],
      modules: [
        {
          title: "DAY 1 — Monday",
          topics: [
            "Morning: Course Introduction & Foundations (Welcome, housekeeping, programme overview, Course objectives and expected outcomes)",
            "Introduction to KoboToolbox & mobile data collection systems",
            "Survey Authoring Basics (Kobo Form Builder overview, Designing simple questions)",
            "Afternoon: Intermediate to Advanced KoboToolbox (Single-select & multi-select questions, Group questions, Multimedia fields, Calculations, notes, decimals)",
            "Advanced Authoring Techniques (Skip logic, validation rules, repeat groups, dynamic choice filters, metadata)",
            "Deployment (Collecting data on mobile devices, Reviewing, editing, and deploying forms)"
          ]
        },
        {
          title: "DAY 2 — Tuesday",
          topics: [
            "Morning: Advanced Kobo & Data Management (Recap of Day 1, Editing & exporting Kobo data, Approving submissions, Real-world project case study)",
            "Introduction to SPSS (SPSS interface overview, Importing & exporting datasets)",
            "Afternoon: SPSS Data Management (Entering & organizing data, Defining and labeling variables, Handling missing values & outliers, Merging, splitting, sorting datasets, Using SPSS syntax)"
          ]
        },
        {
          title: "DAY 3 — Wednesday",
          topics: [
            "Morning: Descriptive Statistics & Exploration (Frequency tables & summary statistics, Measures of central tendency and variation, Cross-tabulations, Visual binning)",
            "Afternoon: Data Transformation & Visualization (Recoding variables, Creating computed fields, Data cleaning workflows, Data Visualization in SPSS, Best practices in data presentation)"
          ]
        },
        {
          title: "DAY 4 — Thursday",
          topics: [
            "Morning: Inferential Statistics & Hypothesis Testing (T-tests, ANOVA, Correlation analysis, Simple & multiple regression, Non-parametric tests)",
            "Afternoon: Advanced Modeling & Multivariate Analysis (Logistic & ordinal regression, Factor analysis & PCA, Cluster analysis, Reliability testing, Handling survey data, Time-series & longitudinal techniques, Automating analysis)"
          ]
        },
        {
          title: "DAY 5 — Friday",
          topics: [
            "Morning: Data Handling & Exploration (Excel for Data Analysis, SQL for Data Exploration)",
            "Afternoon: Data Visualization with Power BI (Introduction to the Power BI ecosystem, Importing data, Creating core visuals, Using filters, slicers, and interactions, Designing simple dashboards)"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Sales Analytics, Data Visualization & Dashboarding with Advanced Excel",
      level: "Intermediate",
      duration: "5 Days",
      thumbnail: courseDataAnalytics,
      introduction: "This intensive 5-day programme equips participants with the skills to transform raw sales data into meaningful, actionable insights using Advanced Excel. The course blends sales analytics foundations, hands-on data transformation, advanced Excel functions, and modern dashboard-building techniques to help professionals interpret trends, optimise performance, and support strategic decision-making. Participants will learn how to prepare, analyse, and visualise sales data using Excel’s advanced capabilities—pivot tables, lookup functions, dynamic arrays, automation (macros/VBA), and intuitive dashboard design.",
      whoShouldAttend: [
        "Sales Managers",
        "Business Analysts",
        "Data Analysts",
        "Sales Representatives",
        "Marketing and Commercial Professionals"
      ],
      personalImpact: [
        "Build confidence in handling complex data tasks in Excel",
        "Strengthen analytical thinking and data storytelling skills",
        "Learn to present insights visually and persuasively",
        "Gain practical dashboarding skills that deliver immediate value"
      ],
      organizationalImpact: [
        "Stronger sales insights and evidence-based decision-making",
        "Improved efficiency through automation and smarter workflows",
        "Standardised reporting tools across teams",
        "Enhanced ability to forecast, segment, and monitor performance"
      ],
      objectives: [
        "Understand the strategic role of sales analytics",
        "Collect, clean, and prepare sales datasets",
        "Apply advanced Excel formulas and functions to analyse sales data",
        "Create compelling charts, reports, and visualisations",
        "Build interactive Excel dashboards for real-time insights",
        "Analyse trends, identify opportunities, and forecast sales performance",
        "Use regression and time-series techniques within Excel",
        "Apply learning to real-world business scenarios"
      ],
      modules: [
        {
          title: "Module 1: Introduction to Sales Analytics & Data Visualization",
          topics: ["The role of analytics in driving business growth", "Types and sources of sales data", "Principles and best practices of effective data visualization"]
        },
        {
          title: "Module 2: Data Preparation & Cleaning",
          topics: ["Collecting, extracting, and structuring sales data", "Data cleaning workflows", "Managing missing data, outliers, and inconsistencies"]
        },
        {
          title: "Module 3: Advanced Excel for Sales Analytics",
          topics: ["Advanced formulas (LOOKUPs, logical functions, dynamic arrays)", "Sales metrics and dynamic calculations", "Automation using Macros and VBA"]
        },
        {
          title: "Module 4: Data Visualization & Dashboard Design",
          topics: ["Best-practice visual design principles", "Creating interactive dashboards (charts, slicers, pivot visuals)", "Enhancing usability with conditional formatting and data validation"]
        },
        {
          title: "Module 5: Sales Performance Analysis & Forecasting",
          topics: ["Performance analytics by region, product, or customer", "Forecasting methods for sales projections", "Regression and time-series analysis in Excel"]
        }
      ]
    },
    {
      id: 5,
      title: "GIS Mapping & Spatial Analysis Using QGIS, R, and Power BI",
      duration: "6 Days",
      level: "Intermediate to Advanced",
      thumbnail: courseGovernance, // Placeholder
      introduction: "This intensive, hands-on course equips professionals with the GIS, analytical, and visualization skills needed to support data-driven decision-making in humanitarian, development, and public-sector programs. The first half focuses on QGIS, where participants learn how to manage spatial datasets, conduct geospatial analysis, and produce professional-grade maps. The second half transitions to R and Power BI, enabling participants to analyze spatial and survey data, build interactive visualizations, and develop dashboards designed for monitoring, evaluation, and program reporting.",
      whoShouldAttend: [
        "GIS Officers and M&E Specialists",
        "Data Scientists and Analysts",
        "Development and Humanitarian Practitioners",
        "Researchers, Engineers, Environmental and Urban Planners",
        "Program Staff working with geospatial or survey data"
      ],
      personalImpact: [
        "Gain practical competence in handling, analysing, and visualizing spatial and survey data",
        "Build proficiency in QGIS, R, and Power BI for multi-platform workflows",
        "Strengthen their ability to interpret and communicate spatial trends",
        "Develop real-world outputs: maps, dashboards, and analytical reports"
      ],
      organizationalImpact: [
        "Stronger spatial decision-making and program planning",
        "Increased efficiency in producing maps, dashboards, and donor-ready reports",
        "Enhanced data literacy across teams",
        "Integrated reporting workflows that combine GIS, statistical analysis, and BI tools"
      ],
      objectives: [
        "Understand GIS concepts, spatial data types, and mapping workflows",
        "Produce professional maps and conduct spatial analytics in QGIS",
        "Analyse and visualize spatial and survey datasets in R",
        "Integrate R and QGIS for enhanced geospatial modelling",
        "Build interactive Power BI dashboards for program and geospatial reporting",
        "Apply spatial analytics to humanitarian, development, and public-sector use cases"
      ],
      modules: [
        {
          title: "Module 1: Foundations of GIS and Spatial Data (QGIS)",
          topics: ["GIS concepts, spatial data types, coordinate systems", "Navigating the QGIS interface and tools", "Importing and managing vector/raster datasets", "Classification and basic mapping", "Case Study: Mapping infrastructure coverage in rural communities"]
        },
        {
          title: "Module 2: Visualization & Thematic Mapping in QGIS",
          topics: ["Styling layers, symbology, labels, and custom map elements", "Working with attribute tables and joined datasets", "Creating publication-ready maps", "Hands-on: Thematic maps for WASH, health, and education services"]
        },
        {
          title: "Module 3: Spatial Analysis Techniques in QGIS",
          topics: ["Buffering, intersecting, and spatial joins", "Terrain analysis (DEM processing)", "Network and service area mapping", "Raster overlays and suitability analysis", "Exercise: Prioritizing intervention zones based on spatial indicators"]
        },
        {
          title: "Module 4: Advanced Data Analysis & Mapping in R",
          topics: ["Setting up R & RStudio", "Data structures, cleaning, transformation", "Survey data analysis (survey, srvyr)", "Spatial data in R (sf, sp, raster)", "Mapping with ggplot2, tmap, and leaflet", "Hands-on: Visualizing georeferenced household survey data"]
        },
        {
          title: "Module 5: Visualizing Spatial Indicators & KPIs in R",
          topics: ["Mapping spatially disaggregated program indicators", "Overlaying survey datasets on admin boundaries", "Interactive maps for public health, WASH, and social protection", "Working with HDX and OCHA datasets", "Project: Mapping M&E indicators from KOBO/ODK data"]
        },
        {
          title: "Module 6: Power BI for M&E Data Visualization & Integration",
          topics: ["Power BI architecture and data connectivity", "Data cleaning, merging, and transformation using Power Query", "Building dashboards: visuals, slicers, interactions", "Mapping tools (ArcGIS Maps, Shape Maps, custom layers)", "Visualizing KPIs by location, demographic group, or sector", "Hands-on: Designing a program dashboard showing reach, infrastructure, and outcomes"]
        }
      ]
    },
    {
      id: 6,
      title: "Applied Econometrics for Macroeconomics & Finance Training Course",
      level: "Foundation",
      thumbnail: courseDataAnalytics, // Placeholder
      introduction: "This practical, hands-on course provides participants with a robust understanding of applied econometrics in macroeconomic and financial contexts. Designed for professionals working with economic and financial data, the program teaches participants how to apply econometric methods to analyze trends, model relationships, test economic theories, and generate reliable forecasts. The course covers core econometric topics including regression modeling, time series analysis, panel data techniques, volatility modeling, and forecasting. Through real-world datasets and statistical software such as EViews and Stata, participants will conduct empirical research, interpret outputs, and make evidence-based decisions relevant to macroeconomic policy, financial markets, and economic strategy.",
      whoShouldAttend: [
        "Economists",
        "Financial Analysts",
        "Policy Analysts",
        "Researchers",
        "Data Scientists",
        "Professionals involved in economic forecasting or financial analysis"
      ],
      personalImpact: [
        "Develop strong skills in applied econometric analysis for macro and financial data",
        "Gain confidence conducting empirical research using statistical software",
        "Improve their ability to interpret econometric results for decision-making"
      ],
      organizationalImpact: [
        "Enhanced capacity for empirical economic analysis and modeling",
        "Improved economic forecasting for policy and financial planning",
        "Stronger analytical capabilities through rigorous econometric methods"
      ],
      objectives: [
        "Understand core concepts in applied econometrics for macroeconomics and finance",
        "Conduct regression analysis and interpret economic relationships",
        "Apply time series and panel data techniques to real-world datasets",
        "Develop and validate forecasting models",
        "Use statistical software to conduct empirical analysis and generate insights"
      ],
      modules: [
        { title: "Module 1: Introduction to Econometrics for Macroeconomics and Finance", topics: ["Overview of econometrics in macro and financial analysis", "Key econometric tools and concepts", "Introduction to EViews and Stata", "Practical: Importing and preparing macroeconomic data"] },
        { title: "Module 2: Time Series Econometrics", topics: ["Characteristics of macroeconomic and financial time series", "Testing for stationarity (ADF, KPSS)", "ARIMA and SARIMA modeling", "Case Study: Macroeconomic forecasting"] },
        { title: "Module 3: Cointegration & Error Correction Models", topics: ["Long-run economic relationships", "Estimating VECM models", "Practical: Cointegration testing with real macroeconomic data"] },
        { title: "Module 4: Vector Autoregression (VAR) & Impulse Response Analysis", topics: ["Building and estimating VAR models", "Impulse response and variance decomposition", "Applications in macroeconomic forecasting", "Case Study: Analyzing macroeconomic shocks"] },
        { title: "Module 5: Volatility Modeling – ARCH & GARCH Models", topics: ["Understanding volatility in financial markets", "Estimating ARCH/GARCH models", "Practical: Modeling and forecasting financial market volatility"] },
        { title: "Module 6: Panel Data Econometrics", topics: ["Introduction to panel datasets", "Fixed vs. random effects models", "Dynamic panel models", "Case Study: Analyzing macro indicators across countries"] },
        { title: "Module 7: Forecasting Economic & Financial Variables", topics: ["Forecasting techniques and evaluation", "Model validation and accuracy testing", "Practical: Building forecasting models for macroeconomic data"] },
        { title: "Module 8: Structural Models for Policy Analysis", topics: ["Structural econometric models for policy evaluation", "Measuring the effects of monetary and fiscal policy", "Case Study: Policy simulation using structural models"] },
        { title: "Module 9: Risk Analysis & Financial Econometrics", topics: ["Modeling financial returns and risk", "Forecasting financial risk indicators", "Practical: Real-world risk analysis using market data"] },
        { title: "Module 10: Real-World Applications & Project Work", topics: ["Review of key methodologies", "Hands-on project: Build an econometric model for macroeconomic or financial forecasting", "Group presentations and feedback", "Capstone Project: Econometric modeling for a real macro-financial challenge"] }
      ]
    },
    {
      id: 7,
      title: "Machine Learning for Managerial Decision Making Using TensorFlow",
      level: "Foundation to Intermediate",
      thumbnail: courseAiMl,
      introduction: "This course introduces machine learning (ML) techniques using TensorFlow to empower managers and business leaders to leverage AI for smarter, data-driven decisions. Through hands-on exercises and real-world case studies, participants will learn to build, interpret, and deploy ML models that enhance forecasting, resource allocation, and strategic planning.",
      whoShouldAttend: [
        "Business Executives & Managers",
        "Mid-level Managers & Team Leaders",
        "Data Analysts & Data Scientists",
        "Business Intelligence Professionals",
        "IT Managers",
        "Strategy & Operations Managers",
        "Project Managers",
        "Entrepreneurs & Startup Founders"
      ],
      personalImpact: [
        "Strengthen your leadership with practical AI and ML skills",
        "Build foundational TensorFlow competencies aligned with business challenges",
        "Lead innovation and digital transformation projects confidently"
      ],
      organizationalImpact: [
        "Accelerate decision-making with AI-enhanced insights",
        "Improve forecasting accuracy, customer segmentation, and process automation",
        "Foster collaboration between business and technical teams for AI initiatives"
      ],
      objectives: [
        "Understand how ML complements traditional analytics for management",
        "Build and deploy ML models tailored to complex business problems",
        "Optimize resource management with ML-driven insights",
        "Distinguish between supervised and unsupervised learning in practice",
        "Use TensorFlow to create models for predictive decision-making"
      ],
      modules: [
        { title: "Module 1: Foundations of Machine Learning in Business", topics: ["ML vs traditional analytics", "Supervised vs unsupervised learning", "Use cases: HR, finance, operations, customer engagement", "Hands-on: Identify ML opportunities in your organization"] },
        { title: "Module 2: Working with TensorFlow for Business Insights", topics: ["TensorFlow architecture and environment setup", "Building linear regression and classification models", "Preparing real-world business datasets", "Hands-on: Train a forecasting model using TensorFlow"] },
        { title: "Module 3: Advanced ML Techniques for Strategic Analysis", topics: ["Neural networks and deep learning basics", "Customer segmentation with clustering algorithms (K-Means, PCA)", "Decision trees and ensemble models via TensorFlow Decision Forests", "Hands-on: Implement segmentation and predictive scoring"] },
        { title: "Module 4: Interpreting, Visualizing, and Deploying ML Models", topics: ["Evaluating model accuracy and managing overfitting", "Confusion matrix and performance metrics", "Integration with Power BI and Excel for visualization", "Exporting and deploying TensorFlow models", "Hands-on: Present ML insights through dashboards"] },
        { title: "Module 5: Ethical AI, Governance & Capstone Project", topics: ["Addressing bias, fairness, and explainability in ML", "Managing risk in AI adoption", "Capstone: Solve a real managerial problem with ML", "Hands-on: End-to-end project presentation and peer feedback"] }
      ]
    },
    {
      id: 8,
      title: "Microsoft Excel for Agriculture Professionals Training Course",
      level: "Foundation to Intermediate",
      thumbnail: coursePython, // Placeholder
      introduction: "This course provides practical, hands-on experience using Excel’s advanced functions, pivot tables, and automation features tailored specifically for agriculture professionals. Participants will learn how to transform raw data into actionable insights that improve decision-making and reporting in agricultural operations, research, and extension services.",
      whoShouldAttend: [
        "Farm Managers",
        "Agricultural Economists",
        "Agronomists",
        "Extension Officers",
        "Agricultural Researchers",
        "Supply Chain Managers",
        "Farmers and Producers",
        "Agricultural Consultants"
      ],
      personalImpact: [
        "Gain confidence in managing and analyzing agricultural data using Excel",
        "Improve ability to create compelling visual reports and dashboards",
        "Develop automation skills to save time and increase efficiency",
        "Enhance problem-solving skills using Excel tools tailored to agriculture"
      ],
      organizationalImpact: [
        "Improved data-driven decision-making across agricultural operations",
        "Standardized reporting and dashboards for better monitoring and evaluation",
        "Increased efficiency through automation and data integration",
        "Strengthened data governance and security practices"
      ],
      objectives: [
        "Manage and organize agricultural datasets effectively",
        "Apply advanced Excel formulas and functions for agricultural applications",
        "Analyze and visualize data using pivot tables, charts, and array functions",
        "Automate repetitive tasks using macros and data validation techniques",
        "Integrate data from multiple sources into comprehensive reports",
        "Secure worksheets and protect critical data",
        "Apply best practices for agricultural data management and reporting"
      ],
      modules: [
        { title: "Module 1: Foundations of Excel for Agriculture Extension", topics: ["Structured tables and data validation", "Formula fundamentals and automatic application", "Using references and named ranges"] },
        { title: "Module 2: Advanced Functions for Agriculture Data", topics: ["Special text and logical functions for agricultural use cases"] },
        { title: "Module 3: Data Analysis and Visualization", topics: ["Creating and customizing pivot tables and charts", "Using array functions and conditional formatting", "Overview of the Analysis Toolpak and its applications"] },
        { title: "Module 4: Advanced Lookup Techniques", topics: ["Lookup functions for managing agricultural datasets"] },
        { title: "Module 5: Data Protection and Automation", topics: ["Data validation and worksheet protection", "Recording and using macros to automate tasks"] },
        { title: "Module 6: Integrating Data from Multiple Sources", topics: ["Linking worksheets and consolidating workbooks"] },
        { title: "Module 7: Worksheet Security and Review", topics: ["Securing worksheets, tracking changes, and protecting formulas"] },
        { title: "Module 8: Mini Project and Recap", topics: ["Applying learned skills in a practical mini project", "Recap of essential Excel techniques"] },
        { title: "Module 9: Practical Applications in Agriculture", topics: ["Case studies demonstrating Excel’s use in agriculture extension", "Hands-on exercises with real agricultural datasets"] },
        { title: "Module 10: Advanced Data Management", topics: ["Data cleaning and preparation best practices", "Advanced analysis methods in agricultural contexts"] }
      ]
    },
    {
      id: 9,
      title: "Intermediate Data Analysis, Visualization, and Reporting for Auditors Using Microsoft Excel and Power BI",
      level: "Intermediate",
      duration: "5 Days",
      thumbnail: courseBi,
      introduction: "This hands-on course equips auditors with essential skills in data analysis, visualization, and reporting using Microsoft Excel and Power BI. Participants will learn how to extract, transform, and load (ETL) data efficiently, apply intermediate Excel techniques for data manipulation, and create dynamic, interactive dashboards and reports in Power BI. Focusing on real-world audit scenarios, this course empowers auditors to handle large datasets, uncover actionable insights, and automate reporting processes—bridging the gap between raw data and informed decision-making.",
      whoShouldAttend: [
        "Auditors and Audit Teams",
        "Data Analysts in Financial and Operational Domains",
        "Mid-Level and Senior Managers",
        "Professionals in Public, Private, and NGO Sectors",
        "IT Professionals Supporting Audit Functions",
        "Professionals Transitioning to Data-Driven Roles",
        "Regulatory and Compliance Professionals"
      ],
      personalImpact: [
        "Develop expertise in data visualization and reporting tools",
        "Gain confidence in ETL processes using Power Query and Power BI",
        "Create visually engaging and insightful dashboards",
        "Enhance problem-solving skills through data-driven analysis",
        "Master automation techniques to improve reporting efficiency",
        "Strengthen professional value with advanced data analysis skills",
        "Become proficient in interpreting and presenting complex audit data",
        "Boost career prospects by showcasing advanced data handling capabilities"
      ],
      organizationalImpact: [
        "Improved efficiency in managing and analyzing large datasets",
        "Enhanced accuracy and reliability in financial and operational reports",
        "Reduced manual errors through automated ETL workflows",
        "Improved audit quality and consistency across teams",
        "Time savings by automating repetitive data tasks",
        "Better insights for strategic decision-making",
        "Increased capacity to meet compliance and regulatory requirements",
        "Elevated stakeholder confidence through professional, data-driven reports"
      ],
      objectives: [
        "Understand and apply ETL processes for data preparation and analysis",
        "Utilize Excel functions for efficient data manipulation and audit analysis",
        "Create dynamic dashboards and visualizations in Power BI",
        "Automate reporting workflows using Power Query",
        "Analyze and present audit findings effectively through visual reporting",
        "Integrate data from multiple sources to enhance audit insights",
        "Identify trends and anomalies using visual analytics",
        "Build a foundation for advanced data analytics techniques in auditing"
      ],
      modules: [
        { title: "Module 1: Fundamentals of Data Preparation and ETL", topics: ["Understanding ETL and its importance in auditing", "Extracting data from multiple sources (CSV, Excel, databases)", "Transforming data: cleaning, reshaping, removing inconsistencies", "Loading data into Excel and Power BI", "Best practices in data preparation", "Case Study: Preparing financial data for audit analysis"] },
        { title: "Module 2: Data Analysis Techniques in Microsoft Excel", topics: ["Excel functions: VLOOKUP, INDEX-MATCH, logical functions", "Pivot tables and pivot charts for data summarization", "Data analysis tools: What-If Analysis, Solver", "Conditional formatting for key findings", "Trend analysis and variance reporting", "Case Study: Expense report analysis and anomaly detection"] },
        { title: "Module 3: Introduction to Power BI and Data Connectivity", topics: ["Power BI interface and core features", "Connecting to Excel, databases, and other sources", "Using Power Query for seamless ETL", "Data preparation for Power BI analysis", "Navigating Power BI workspace", "Case Study: Importing and transforming operational data"] },
        { title: "Module 4: Building Dynamic Dashboards and Visualizations", topics: ["Designing clear and effective dashboards", "Using charts, KPIs, and visuals in Power BI", "Customizing with slicers and filters", "Real-time data integration and dynamic updates", "Storytelling with data visualizations", "Case Study: Financial performance dashboard creation"] },
        { title: "Module 5: Automating Reporting and Insights Generation", topics: ["Automating workflows with Power Query", "Publishing and sharing reports collaboratively", "Enhancing interactivity with drill-throughs and bookmarks", "Integrating insights into decision-making", "Maintaining and updating automated reports", "Case Study: Automating monthly audit reports"] }
      ]
    },
    {
      id: 10,
      title: "Epidemiology and Biostatistics with R Training Course",
      level: "Foundation to Intermediate",
      duration: "10 Days",
      thumbnail: courseAiMl, // Placeholder
      introduction: "In public health and medical research, the ability to analyze data and understand disease patterns is crucial. This course provides a solid foundation in epidemiological principles and biostatistical methods, utilizing the powerful R programming language for data manipulation, analysis, and visualization. Participants will gain practical skills to apply epidemiological and biostatistical techniques to real-world health data, empowering data-driven decision-making and research interpretation.",
      whoShouldAttend: [
        "Public Health Professionals",
        "Medical Researchers",
        "Data Analysts",
        "Individuals interested in health data analysis and statistical methods",
        "Beginners and practitioners seeking to enhance epidemiology and biostatistics skills"
      ],
      personalImpact: [
        "Develop foundational knowledge of epidemiology and biostatistics",
        "Gain proficiency in R for data analysis and visualization",
        "Acquire practical skills to manage and analyze health datasets",
        "Enhance ability to critically evaluate epidemiological research",
        "Improve confidence in interpreting and communicating statistical findings"
      ],
      organizationalImpact: [
        "Strengthened capacity for evidence-based public health and research analysis",
        "Improved data-driven decision-making in health programs and policies",
        "Enhanced reporting and visualization of epidemiological findings",
        "Increased ability to integrate statistical tools into health research workflows"
      ],
      objectives: [
        "Understand key epidemiological concepts, study designs, and biostatistical fundamentals",
        "Apply R programming for data management, analysis, and visualization in health research",
        "Perform descriptive and analytical epidemiology using real datasets",
        "Conduct advanced biostatistical modeling including survival and spatial analyses",
        "Critically interpret and present epidemiological and biostatistical results effectively"
      ],
      modules: [
        { title: "Module 1: Introduction to Epidemiology", topics: ["Definition, scope, and importance", "Key measures: incidence, prevalence, morbidity, mortality", "Epidemiological study types: descriptive, analytical, experimental", "Bias, confounding, and causality concepts"] },
        { title: "Module 2: Introduction to Biostatistics", topics: ["Populations, samples, and variables", "Descriptive statistics: central tendency and variability", "Probability distributions and statistical inference", "Hypothesis testing and confidence intervals"] },
        { title: "Module 3: Getting Started with R", topics: ["Introduction to R and RStudio", "Basic syntax and data structures", "Importing, cleaning, and managing datasets", "Data visualization with ggplot2"] },
        { title: "Module 4: Epidemiological Data Collection and Management", topics: ["Data sources and collection methods", "Designing data collection tools and surveys", "Data quality assurance and ethical considerations"] },
        { title: "Module 5: Descriptive Epidemiology with R", topics: ["Techniques for descriptive analysis", "Calculating rates and ratios", "Visualization of epidemiological data", "Case studies in descriptive epidemiology"] },
        { title: "Module 6: Analytical Epidemiology with R", topics: ["Analyzing cohort, case-control, cross-sectional studies", "Measures of association: risk ratios, odds ratios", "Adjusting for confounders", "Regression analysis in epidemiology"] },
        { title: "Module 7: Advanced Biostatistical Methods in R", topics: ["Multivariable analysis and model building", "Logistic regression applications", "Poisson regression and rate analysis", "Advanced topics: mixed models, GEEs"] },
        { title: "Module 8: Survival Analysis with R", topics: ["Survival analysis basics and time-to-event data", "Kaplan-Meier curves", "Cox proportional hazards modeling", "Interpretation of survival data"] },
        { title: "Module 9: Spatial Epidemiology and Mapping with R", topics: ["Introduction to spatial epidemiology and GIS", "Mapping disease patterns and trends", "Spatial data analysis using R", "Visualization with ggmap, leaflet"] },
        { title: "Module 10: Interpreting and Presenting Results", topics: ["Critical appraisal of epidemiological studies", "Interpreting statistical outputs", "Effective data visualization strategies", "Preparing and presenting research findings"] }
      ]
    }
  ];