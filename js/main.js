// Main JavaScript

// DOM Elements
const preloader = document.querySelector('.preloader');
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelectorAll('.navbar-link');
const sections = document.querySelectorAll('.section');
const experienceDetailBtns = document.querySelectorAll('.experience-details-btn');
const projectDetailBtns = document.querySelectorAll('.project-details-btn');
const experienceModal = document.querySelector('.experience-modal');
const projectModal = document.querySelector('.project-modal');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const modalOverlays = document.querySelectorAll('.modal-overlay');
// Moved to DOMContentLoaded event listener

// Experience Data
const experienceData = {
    cygnet: {
        title: 'Data Science & Software Engineering Intern',
        company: 'Cygnet.One',
        duration: 'June 2025 - July 2025',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Role Overview</h4>
                <p>Led front-end migration and dashboard development initiatives, working with ASP.NET MVC and SQL.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Achievements</h4>
                <ul class="modal-list">
                    <li>Migrated complex legacy ASPX modules to modern ASP.NET MVC architecture, implementing Razor views, controllers, and data models</li>
                    <li>Developed interactive delivery status dashboards with real-time updates, dramatically improving visibility for stakeholders</li>
                    <li>Created KPI visualization dashboards with role-based permissions that improved decision-making for HR and management teams</li>
                    <li>Integrated C# controllers with complex SQL stored procedures, implementing robust validation and conflict detection</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Environment</h4>
                <p>ASP.NET MVC, C#, SQL Server, HTML/CSS/JavaScript, CI/CD Pipeline</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Impact</h4>
                <p>Improved system maintainability, enhanced user experience, and strengthened team's data visualization capabilities.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Skills Applied</h4>
                <p>Full-stack development, database integration, UI/UX design, system architecture, data visualization</p>
            </div>
        `
    },
    datamine: {
        title: 'Project Assistant',
        company: 'The Data Mine, Purdue University',
        duration: 'August 2024 - May 2025',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Project Overview</h4>
                <p>Collaborated with AgReliant Genetics on customer segmentation and predictive behavior modeling project.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Achievements</h4>
                <ul class="modal-list">
                    <li>Applied feature engineering to streamline 80+ data attributes to ~20 significant features</li>
                    <li>Implemented multiple clustering algorithms including K-means, DBSCAN, and hierarchical clustering</li>
                    <li>Delivered an 88% accurate model for predicting customer purchasing patterns</li>
                    <li>Created interactive dashboards in Tableau that translated complex data into actionable business insights</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Approach</h4>
                <p>Leveraged Python scikit-learn for preprocessing, R for statistical analysis, Snowflake for data warehousing, and Tableau for visualization</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Impact</h4>
                <p>Enabled more targeted marketing strategies, resulting in improved conversion rates for AgReliant Genetics</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Skills Applied</h4>
                <p>Machine learning, feature engineering, statistical modeling, data visualization, business analytics</p>
            </div>
        `
    },
    teaching: {
        title: 'Teaching Assistant - ECON 252: Macroeconomics',
        company: 'Purdue University',
        duration: 'August 2025 - Present',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Role Overview</h4>
                <p>Supporting course instruction in ECON 252: Macroeconomics for undergraduate students.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Responsibilities</h4>
                <ul class="modal-list">
                    <li>Hold weekly office hours to help students with challenging economic concepts</li>
                    <li>Provide one-on-one support to help students master challenging economic concepts</li>
                    <li>Develop and grade assignments, providing detailed feedback to improve student understanding</li>
                    <li>Support the professor with lecture materials and classroom activities</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Topics Covered</h4>
                <p>Aggregate demand and supply, inflation measurement, unemployment metrics, monetary policy, fiscal policy, and international trade</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Impact</h4>
                <p>Helped maintain a high course success rate by providing accessible support and clear explanations</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Skills Applied</h4>
                <p>Economic analysis, teaching methodologies, communication skills, assessment design</p>
            </div>
        `
    },
    f1purdue: {
        title: 'Treasurer',
        company: 'F1@Purdue',
        duration: 'May 2025 - Present',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Role Overview</h4>
                <p>Managing financial operations for F1@Purdue, a student organization dedicated to Formula 1 racing and motorsport culture.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Responsibilities</h4>
                <ul class="modal-list">
                    <li>Developed and maintained comprehensive budget planning for club activities and events</li>
                    <li>Implemented efficient expense tracking systems to ensure financial transparency</li>
                    <li>Led successful fundraising campaigns and grant applications, increasing available funds by 35%</li>
                    <li>Collaborated with the executive board to allocate resources strategically for maximum impact</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Initiatives</h4>
                <p>Secured funding for team field trips to racing events, speaker series with industry professionals, and F1 simulation competitions</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Impact</h4>
                <p>Established sustainable financial practices that allowed for expanded club programming and increased membership</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Skills Applied</h4>
                <p>Financial planning, budget management, fundraising strategy, stakeholder communication</p>
            </div>
        `
    },
    fedreserve: {
        title: 'Federal Reserve Challenge Team Member',
        company: 'Purdue University',
        duration: '2025',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Competition Overview</h4>
                <p>Represented Purdue University in the Federal Reserve Challenge, a prestigious academic competition focused on monetary policy analysis.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Team Accomplishments</h4>
                <ul class="modal-list">
                    <li>Developed comprehensive analysis of current economic conditions across various demographics and regions</li>
                    <li>Created detailed forecasts of near-term economic and financial conditions</li>
                    <li>Formulated monetary policy recommendations with supporting rationales</li>
                    <li>Prepared for and excelled in rigorous Q&A sessions with Federal Reserve economists</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Research Focus</h4>
                <p>Analyzed effects of monetary policy on different socioeconomic groups, with particular attention to housing markets and labor force participation</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Skills Applied</h4>
                <p>Economic data analysis, forecasting, monetary theory, policy formulation, presentation skills</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Impact</h4>
                <p>Strengthened understanding of macroeconomic policy implementation and central banking operations</p>
            </div>
        `
    },
    tutor: {
        title: 'Tutor',
        company: 'Shyam Sir Classes, Ahmedabad, India',
        duration: 'June 2023 - July 2023',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Role Overview</h4>
                <p>Java programming instructor for a diverse class of 30 students during an intensive summer course.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Responsibilities</h4>
                <ul class="modal-list">
                    <li>Delivered comprehensive Java programming curriculum from basics to advanced concepts</li>
                    <li>Designed personalized learning plans based on individual student learning styles</li>
                    <li>Created and assessed programming assignments and practical exams</li>
                    <li>Provided additional support through one-on-one tutoring sessions</li>
                    <li>Developed simplified explanations for complex programming concepts</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Teaching Approach</h4>
                <ul class="modal-list">
                    <li>Implemented a hands-on learning methodology with immediate feedback</li>
                    <li>Created real-world programming exercises that reinforced theoretical concepts</li>
                    <li>Used visual aids and practical demonstrations to explain abstract programming principles</li>
                    <li>Established a collaborative and supportive classroom environment</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Impact</h4>
                <ul class="modal-list">
                    <li>Achieved 100% pass rate on final Java programming assessments</li>
                    <li>Improved student proficiency by 95% based on pre/post course evaluations</li>
                    <li>Received recognition from institution for exceptional teaching effectiveness</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Skills Applied</h4>
                <p>Java programming expertise, educational psychology, curriculum design, assessment development, personalized instruction</p>
            </div>
        `
    },
    imc: {
        title: 'IMC Prosperity 3 Global Trading Challenge',
        company: 'Global Competition',
        duration: 'April 2023',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Competition Overview</h4>
                <p>A prestigious 15-day global trading simulation challenge hosted by IMC Trading, designed to test participants' ability to develop algorithmic trading strategies in competitive market conditions.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Team Accomplishments</h4>
                <ul class="modal-list">
                    <li>Achieved top 200 ranking among 600+ teams worldwide (12,000+ total participants)</li>
                    <li>Developed and implemented profitable trading algorithms under time pressure</li>
                    <li>Successfully adapted strategies to respond to changing market conditions</li>
                    <li>Outperformed majority of competing teams in portfolio growth and risk management</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Implementation</h4>
                <ul class="modal-list">
                    <li>Created Python-based algorithmic trading strategies for multiple asset classes</li>
                    <li>Implemented statistical analysis to identify trading opportunities</li>
                    <li>Developed risk management protocols to minimize downside exposure</li>
                    <li>Utilized backtesting to validate and refine trading approaches</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Skills Applied</h4>
                <p>Algorithmic trading, Python programming, financial market analysis, statistical modeling, risk management, collaborative problem-solving, decision-making under pressure</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Impact</h4>
                <ul class="modal-list">
                    <li>Gained practical experience in quantitative trading and financial markets</li>
                    <li>Demonstrated exceptional strategic thinking and technical implementation</li>
                    <li>Developed valuable industry-relevant skills in financial technology and quantitative analysis</li>
                </ul>
            </div>
        `
    }
};

// Project Data
const projectData = {
    'macro-regime': {
        title: 'Macro Regime Dashboard',
        category: 'Data Science / Finance',
        tags: ['Python', 'GMM', 'scikit-learn', 'FRED API', 'yfinance', 'pandas', 'matplotlib', 'seaborn'],
        github: 'https://github.com/Nityaj22/AI_ML_Projects/tree/main/Macro_Regime',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Project Overview</h4>
                <p>Built a full macroeconomic regime classification pipeline that identifies which of four economic environments — Expansion, Slowdown, Stagflation, or Recession — the economy is in at any given time. Uses real Federal Reserve data (FRED API) across 352 months from 1996 to 2026, with a live dashboard showing the current regime and probability breakdown.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Features</h4>
                <ul class="modal-list">
                    <li>Automated data pipeline pulling 5 macro indicators from FRED API and 10 equity ETFs from yfinance</li>
                    <li>Feature engineering: CPI and INDPRO transformed to YoY growth rates, unemployment to MoM change, all standardized</li>
                    <li>BIC score analysis to determine optimal number of regimes (tested 2–7 components)</li>
                    <li>GMM with full covariance matrices assigns soft probabilities to each month rather than hard labels</li>
                    <li>Regime timeline chart spanning 30 years with color-coded regime periods</li>
                    <li>Feature heatmap showing what makes each regime economically distinct</li>
                    <li>Sector rotation analysis: average monthly returns per ETF broken down by regime</li>
                    <li>Live dashboard: current regime, probability breakdown, and all 5 macro indicators</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Regime Timeline 1996–2026</h4>
                <img src="https://raw.githubusercontent.com/Nityaj22/AI_ML_Projects/main/Macro_Regime/outputs/charts/regime_timeline.png" alt="Regime Timeline" style="width:100%;border-radius:8px;margin:8px 0;">
                <p style="font-size:0.82rem;color:var(--text-muted);margin-top:4px;">Green = expansion, orange = slowdown, purple = stagflation, red = recession</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Implementation</h4>
                <ul class="modal-list">
                    <li>Gaussian Mixture Model (<code>sklearn.mixture.GaussianMixture</code>) with full covariance, n_init=10 for stability</li>
                    <li>5 features: yield curve spread (T10Y2Y), CPI YoY, unemployment MoM change, INDPRO YoY, high yield credit spread</li>
                    <li>4 regimes identified: Expansion (43%), Slowdown (44%), Stagflation (7%), Recession (6%)</li>
                    <li>StandardScaler normalization before modeling, unscaled values retained for interpretability</li>
                    <li>Data: FRED API + yfinance, 1996–2026, monthly frequency</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Feature Heatmap</h4>
                <img src="https://raw.githubusercontent.com/Nityaj22/AI_ML_Projects/main/Macro_Regime/outputs/charts/regime_heatmap.png" alt="Feature Heatmap" style="width:100%;border-radius:8px;margin:8px 0;">
                <p style="font-size:0.82rem;color:var(--text-muted);margin-top:4px;">Average macro indicator values per regime — color = relative intensity</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Sector Rotation Analysis</h4>
                <img src="https://raw.githubusercontent.com/Nityaj22/AI_ML_Projects/main/Macro_Regime/outputs/charts/sector_returns.png" alt="Sector Returns by Regime" style="width:100%;border-radius:8px;margin:8px 0;">
                <p style="font-size:0.82rem;color:var(--text-muted);margin-top:4px;">Average monthly sector returns by regime — XLE dominates stagflation, XLF/XLE crushed in recession</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Results & Impact</h4>
                <ul class="modal-list">
                    <li>Model correctly identifies 2008 financial crisis, 2020 COVID crash, and 2022 stagflation period</li>
                    <li>Stagflation regime: XLE (energy) returns +2.1%/month, XLF and XLY negative — matches economic theory</li>
                    <li>Current regime (March 2026): Slowdown at 98.8% confidence</li>
                    <li>Designed for Phase 2 extension: Hidden Markov Models + FOMC NLP sentiment analysis</li>
                </ul>
            </div>
        `
    },
    'f1-undercut': {
        title: 'F1 Undercut Strategy Analysis',
        category: 'Data Science',
        tags: ['Python', 'FastF1 API', 'pandas', 'matplotlib', 'scikit-learn'],
        github: 'https://github.com/Nityaj22/AI_ML_Projects/tree/main/f1_undercut',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Project Overview</h4>
                <p>A comprehensive data science project that analyzes Formula 1 racing strategy, specifically the "undercut" maneuver where drivers pit early to gain position. Using the FastF1 API, this project extracts real race data to identify undercut attempts and their success rates across different tracks, conditions, and tire compounds.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Deliverables - Visualization Suite</h4>
                <p>The project delivers a comprehensive suite of publication-quality visualizations for undercut analysis:</p>
                <ul class="modal-list">
                    <li><strong>Lap Time Distribution:</strong> Violin/box hybrid plot showing lap-time spread grouped by tyre compound, highlighting consistency vs variance of compounds</li>
                    <li><strong>Gap to Ahead:</strong> Line chart of gap (or position) over laps, optionally per driver, narrating race flow and identifying when undercut windows open</li>
                    <li><strong>Pit Timeline:</strong> Strip plot of pit-stop laps per driver, colored by compound, making it easy to see overlapping strategies and sequences</li>
                    <li><strong>Stint Degradation:</strong> Median lap time with IQR shading per compound vs stint lap - core deliverable for tyre degradation and optimal stint length discussion</li>
                    <li><strong>Undercut Success Breakdown:</strong> Pie chart summarizing successful vs failed undercut attempts - quick headline metric for stakeholders</li>
                    <li><strong>Undercut Timeline:</strong> Scatter plot of pit lap vs position-before-pit, colored by outcome, showing when in the race undercuts worked and from what track positions</li>
                    <li><strong>Undercut by Compound:</strong> Bar chart of success rate segmented by compound change (e.g., Medium→Soft), with attempt counts annotated, supporting tyre-choice recommendations</li>
                    <li><strong>Undercut Scatter:</strong> 2D scatter of pre-pit gap vs tyre age, marking success/failure - visual diagnostic for the decision boundary</li>
                    <li><strong>Undercut Heatmap:</strong> Binned heatmap of success probability across gap and tyre-age bins, effectively a playbook for triggering an undercut</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Implementation</h4>
                <ul class="modal-list">
                    <li>Integrates with FastF1 API for current season data</li>
                    <li>Uses pandas for data manipulation and advanced feature engineering</li>
                    <li>Implements statistical modeling to quantify strategy effectiveness</li>
                    <li>Creates publication-quality visualizations with matplotlib and seaborn</li>
                    <li>Custom plotting utilities in src/plots.py for reproducible analysis</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Analysis Capabilities</h4>
                <p>Together these visuals provide comprehensive insights:</p>
                <ul class="modal-list">
                    <li>Lap pace profiling by compound and race conditions</li>
                    <li>Race-gap context and position evolution over time</li>
                    <li>Pit chronology and strategy sequencing</li>
                    <li>Compound wear insight and optimal stint length determination</li>
                    <li>Multiple angles on undercut viability - both descriptive (timeline, breakdown) and analytical (scatter, heatmap)</li>
                    <li>Decision boundary visualization for strategic pit-stop timing</li>
                </ul>
            </div>
        `
    },
    'monte-carlo': {
        title: 'Monte Carlo Portfolio Simulation',
        category: 'Finance',
        tags: ['Python', 'numpy', 'matplotlib', 'yfinance', 'Financial Modeling'],
        github: 'https://github.com/Nityaj22/AI_ML_Projects/tree/main/Monte_Carlo_Models',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Project Overview</h4>
                <p>A sophisticated financial modeling tool that simulates thousands of potential portfolio outcomes using Geometric Brownian Motion (GBM). This project helps investors understand risk, evaluate return probabilities, and make data-driven decisions about asset allocation.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Components</h4>
                <ul class="modal-list">
                    <li><strong>Basic Portfolio Simulation</strong>: Simulates 1,000 portfolio paths over 252 trading days using normal returns</li>
                    <li><strong>GBM Portfolio Simulation</strong>: Uses GBM to model portfolio evolution with drift and volatility</li>
                    <li><strong>Real Stock GBM Analysis</strong>: Applies GBM to NVDA stock using historical returns and volatility</li>
                    <li><strong>Multi-Asset Probability Analysis</strong>: Compares multiple ETFs (SPY, QQQ, DIA) using 10,000 simulations</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Features</h4>
                <ul class="modal-list">
                    <li>Simulates 1,000+ portfolio paths over customizable time horizons</li>
                    <li>Models real-world market behavior with accurate volatility and drift parameters</li>
                    <li>Evaluates multiple ETFs and stocks simultaneously</li>
                    <li>Calculates key risk metrics including Value at Risk (VaR) and maximum drawdown</li>
                    <li>Provides probability analysis of hitting price targets or avoiding losses</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Implementation</h4>
                <ul class="modal-list">
                    <li>Pulls real market data through yfinance API for accurate parameter estimation</li>
                    <li>Implements GBM from first principles using statistical modeling</li>
                    <li>Handles multi-asset correlation in portfolio simulations</li>
                    <li>Generates interactive visualizations of probability distributions</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Applications & Impact</h4>
                <p>This simulation suite provides investors with a robust framework for risk assessment, portfolio optimization, and strategic decision-making. It combines theoretical financial models with real-world data to deliver actionable insights.</p>
            </div>
        `
    },
    'unix-shell': {
        title: 'Custom Unix Shell',
        category: 'Systems',
        tags: ['C/C++', 'Systems Programming', 'Process Management'],
        github: '',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Project Overview</h4>
                <p>A fully-functional Unix shell built from scratch that replicates and extends the capabilities of bash/csh. This systems programming project demonstrates low-level operating system interactions, process management, and signal handling.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Features</h4>
                <ul class="modal-list">
                    <li><strong>Command Execution</strong>: Support for foreground and background processes</li>
                    <li><strong>Pipeline Implementation</strong>: Command chaining (e.g., ls | grep txt | wc -l)</li>
                    <li><strong>I/O Redirection</strong>: Comprehensive support for stdin, stdout, and stderr</li>
                    <li><strong>Built-in Commands</strong>: exit, cd, setenv, unsetenv, printenv</li>
                    <li><strong>Advanced Parsing</strong>: Support for environment variables, wildcards, and subshells</li>
                    <li><strong>Interactive Line Editor</strong>: History, tab completion, and cursor movement</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Implementation</h4>
                <ul class="modal-list">
                    <li>Uses fork-exec model for process creation and management</li>
                    <li>Implements proper signal handling (SIGINT, SIGCHLD) to prevent zombie processes</li>
                    <li>Creates lexical analyzer and parser for command interpretation</li>
                    <li>Manages file descriptors for redirection and pipes</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Challenges & Solutions</h4>
                <p>Building a shell from scratch presented several challenges, including:</p>
                <ul class="modal-list">
                    <li>Implementing proper signal handling to prevent zombies and handle interrupts</li>
                    <li>Managing complex pipeline structures with multiple commands</li>
                    <li>Creating a robust parser for shell syntax with proper quoting and escaping</li>
                    <li>Building an interactive line editor with history and completion</li>
                </ul>
                <p>These challenges were overcome through careful system design, extensive testing, and deep understanding of Unix process mechanics.</p>
            </div>
        `
    },
    'kra-kpi-platform': {
        title: 'KRA-KPI Management Platform',
        category: 'Systems',
        tags: ['HTML', 'CSS', 'JavaScript', 'MVC', 'Web Development'],
        github: '',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Project Overview</h4>
                <p>Developed a comprehensive KRA (Key Result Areas) and KPI (Key Performance Indicators) management platform using HTML and MVC (Model-View-Controller) architecture. The platform provides separate interfaces for HR, managers, and employees to effectively track, manage, and evaluate performance metrics.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Features</h4>
                <ul class="modal-list">
                    <li><strong>Multi-role Interface:</strong> Separate dashboards for HR, managers, and employees with role-specific functionalities</li>
                    <li><strong>KRA Management:</strong> Create, assign, and track Key Result Areas for employees</li>
                    <li><strong>KPI Tracking:</strong> Monitor Key Performance Indicators with real-time updates and progress visualization</li>
                    <li><strong>Performance Evaluation:</strong> Comprehensive performance review system with scoring and feedback mechanisms</li>
                    <li><strong>Goal Setting:</strong> Set and manage performance goals with deadline tracking</li>
                    <li><strong>Reporting & Analytics:</strong> Generate performance reports and analytics for data-driven decision making</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Implementation</h4>
                <ul class="modal-list">
                    <li>Built using HTML5 for structure and semantic markup</li>
                    <li>Implemented MVC architecture pattern for clean code organization and separation of concerns</li>
                    <li>CSS3 for responsive design and modern UI/UX</li>
                    <li>JavaScript for interactive functionality and dynamic content management</li>
                    <li>Role-based access control for different user types (HR, Manager, Employee)</li>
                    <li>Data persistence and state management within the MVC framework</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Architecture & Design</h4>
                <p>The platform follows MVC architecture principles:</p>
                <ul class="modal-list">
                    <li><strong>Model:</strong> Manages data logic, KRA/KPI definitions, and performance metrics</li>
                    <li><strong>View:</strong> Handles presentation layer with separate interfaces for each role</li>
                    <li><strong>Controller:</strong> Processes user interactions and coordinates between Model and View</li>
                    <li>Modular design allows for easy maintenance and scalability</li>
                    <li>Separation of concerns ensures clean, maintainable codebase</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">User Roles & Functionality</h4>
                <ul class="modal-list">
                    <li><strong>HR Interface:</strong> System administration, user management, KRA/KPI template creation, organization-wide analytics</li>
                    <li><strong>Manager Interface:</strong> Team performance monitoring, KRA/KPI assignment, employee evaluation, progress tracking</li>
                    <li><strong>Employee Interface:</strong> Personal KRA/KPI dashboard, goal tracking, self-assessment, performance review submission</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Impact</h4>
                <p>The KRA-KPI Management Platform provides:</p>
                <ul class="modal-list">
                    <li>Streamlined performance management process</li>
                    <li>Clear visibility into employee performance metrics</li>
                    <li>Data-driven performance evaluation and decision-making</li>
                    <li>Improved alignment between individual goals and organizational objectives</li>
                    <li>Enhanced communication between HR, managers, and employees</li>
                </ul>
            </div>
        `
    },
    'agreliant-dashboard': {
        title: 'AgReliant Genetics Customer Segmentation',
        category: 'Data Science',
        tags: ['Python', 'K-means', 'Clustering', 'scikit-learn', 'Silhouette Score'],
        github: '',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">Project Overview</h4>
                <p>Developed customer segmentation models for AgReliant Genetics during The Data Mine project. The project focused on using unsupervised machine learning techniques, specifically K-means clustering and other clustering algorithms, to identify distinct customer groups based on purchasing patterns and behavior.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Features</h4>
                <ul class="modal-list">
                    <li>Implemented K-means clustering algorithm to segment customers into distinct groups</li>
                    <li>Applied multiple clustering algorithms (K-means, DBSCAN, Hierarchical) for comparison</li>
                    <li>Utilized silhouette score and other evaluation metrics to assess clustering quality</li>
                    <li>Analyzed patterns within clusters to identify key customer characteristics</li>
                    <li>Optimized clustering parameters to improve segmentation accuracy</li>
                    <li>Streamlined 80+ features to ~20 significant features through feature engineering</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Implementation</h4>
                <ul class="modal-list">
                    <li>Data preprocessing and feature engineering using Python (pandas, scikit-learn)</li>
                    <li>Implemented K-means clustering with optimal k-value selection using elbow method</li>
                    <li>Evaluated clustering performance using silhouette score, Davies-Bouldin index, and within-cluster sum of squares</li>
                    <li>Applied dimensionality reduction techniques (PCA) for visualization and analysis</li>
                    <li>Used Python for statistical analysis and R for additional validation</li>
                    <li>Created visualizations in Tableau to present segmentation results</li>
                    <li>Data warehousing and integration using Snowflake</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Methodology & Results</h4>
                <p>The project involved a systematic approach to customer segmentation:</p>
                <ul class="modal-list">
                    <li>Conducted exploratory data analysis to understand customer behavior patterns</li>
                    <li>Performed feature engineering to reduce dimensionality from 80+ to ~20 key features</li>
                    <li>Tested multiple clustering algorithms to find the best approach for the dataset</li>
                    <li>Used silhouette score to determine optimal number of clusters and validate cluster quality</li>
                    <li>Identified distinct customer segments with unique purchasing behaviors and preferences</li>
                    <li>Delivered actionable insights for targeted marketing and customer engagement strategies</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Impact</h4>
                <p>The customer segmentation model provided AgReliant Genetics with:</p>
                <ul class="modal-list">
                    <li>Clear understanding of distinct customer groups and their characteristics</li>
                    <li>Data-driven foundation for personalized marketing campaigns</li>
                    <li>Improved targeting efficiency through better customer insights</li>
                    <li>Enhanced ability to predict customer behavior and preferences</li>
                </ul>
            </div>
        `
    },
    'f1-race-replay': {
        title: 'F1 Race Replay Visualization',
        category: 'Data Science',
        tags: ['Python', 'FastF1 API', 'Arcade', 'NumPy', 'Multiprocessing'],
        github: '',
        content: `
            <div class="modal-section">
                <h4 class="modal-subtitle">What It Does</h4>
                <p>Transforms raw F1 telemetry into interactive race replays where you can pause, rewind, and analyze every strategic decision. Click any driver to see their speed, gear, DRS status, and tire compound in real-time. The qualifying mode provides deep-dive lap analysis with throttle input, braking zones, and speed profiles mapped against circuit layout.</p>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Highlights</h4>
                <ul class="modal-list">
                    <li><strong>Multi-threaded Data Pipeline:</strong> Implemented Python multiprocessing to process 20+ drivers simultaneously, reducing computation time by 80%. Smart caching with pickle serialization enables instant replay loading.</li>
                    <li><strong>Frame-by-Frame Reconstruction:</strong> Built resampling engine interpolating irregular telemetry data onto unified 25 FPS timeline, handling pit stops, retirements, and data gaps for smooth playback.</li>
                    <li><strong>Dynamic Visualization:</strong> Created scalable rendering system using Arcade that adapts track layout to any window size. Circuit auto-rotates to optimal viewing angles with responsive UI repositioning.</li>
                    <li><strong>Qualifying Telemetry Charts:</strong> Developed synchronized multi-chart system showing speed traces, gear progression, and throttle/brake application—all linked to track position with background threading for seamless driver switching.</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Key Features</h4>
                <ul class="modal-list">
                    <li>Live leaderboard with position tracking via along-track distance projection</li>
                    <li>Track status visualization (green flag, yellow, safety car, VSC, red flag)</li>
                    <li>Weather integration: track temp, humidity, wind direction, rainfall</li>
                    <li>Interactive controls: pause, rewind, fast-forward, adjustable speed (0.5x–4x)</li>
                    <li>Qualifying analysis: session-by-session lap times with detailed telemetry breakdowns</li>
                    <li>Automatic data caching and support for Sprint races and qualifying sessions</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Technical Implementation</h4>
                <ul class="modal-list">
                    <li>Leverages FastF1 API for real-time telemetry data extraction</li>
                    <li>Python multiprocessing for parallel data processing across multiple drivers</li>
                    <li>NumPy for efficient numerical operations and data interpolation</li>
                    <li>Arcade game engine for smooth, interactive visualization rendering</li>
                    <li>Pickle serialization for intelligent data caching and instant replay loading</li>
                    <li>Advanced resampling algorithms to handle irregular telemetry timestamps</li>
                </ul>
            </div>
            <div class="modal-section">
                <h4 class="modal-subtitle">Performance & Impact</h4>
                <p>This system provides Formula 1 enthusiasts and analysts with an unprecedented level of race analysis capability. The multi-threaded architecture ensures smooth performance even when processing complex race data, while the interactive controls make it easy to analyze specific moments in detail. The qualifying mode offers deep insights into driver performance and car setup through synchronized telemetry visualization.</p>
            </div>
        `
    }
};

// Scroll-based Animation System using Intersection Observer
function initScrollAnimations() {
    // Only animate non-header elements (about-detail, achievement-card, etc.)
    // Headers are now always visible, no animation needed
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Once animated, we can unobserve to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Function to check and animate elements already in view
    function animateVisibleElements() {
        // Only observe non-header elements
        const animateElements = document.querySelectorAll('.about-detail, .achievement-card');
        animateElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
            
            if (isVisible && !el.classList.contains('animate-in')) {
                // Element is already visible, animate immediately
                el.classList.add('animate-in');
                observer.unobserve(el);
            } else if (!isVisible) {
                // Element is not visible yet, observe it for scroll animation
                observer.observe(el);
            }
        });
    }
    
    // Check immediately for elements already in view
    requestAnimationFrame(() => {
        animateVisibleElements();
    });
    
    // Also check after a small delay to catch any elements that might have been missed
    setTimeout(animateVisibleElements, 100);
}

// Navbar animation - simple and reliable
function initNavbarAnimation() {
    const navbarEl = document.querySelector('.navbar');
    if (navbarEl) {
        // Simple fade-in on load
        requestAnimationFrame(() => {
            navbarEl.classList.add('visible');
        });
    }
}

// Document Load Event
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navbar animation
    initNavbarAnimation();
    
    // Headers are now always visible in CSS, no JavaScript needed
    // Force headers to be visible immediately
    const sectionTitles = document.querySelectorAll('.section-title, .section-subtitle');
    sectionTitles.forEach(title => {
        title.style.opacity = '1';
        title.style.visibility = 'visible';
        title.style.transform = 'translateY(0)';
        title.style.display = title.classList.contains('section-title') ? 'inline-block' : 'block';
    });
    
    // Initialize scroll-based animations (only for non-header elements)
    setTimeout(() => {
        initScrollAnimations();
    }, 50);
    
    // Get filter buttons and project cards inside DOMContentLoaded
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Remove preloader after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('hidden');
            }
            document.body.classList.remove('loading');
            
            // Re-initialize scroll animations after content loads
            initScrollAnimations();
            
            // Fallback: Ensure all section titles in viewport are visible
            setTimeout(() => {
                const sectionTitles = document.querySelectorAll('.section-title, .section-subtitle');
                sectionTitles.forEach(title => {
                    const rect = title.getBoundingClientRect();
                    if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
                        title.classList.add('animate-in');
                    }
                });
            }, 200);
        }, 500);
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Highlight active section in navbar
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile nav toggle
    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
    
    // Experience details modal functionality
    experienceDetailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const experienceId = btn.closest('.experience-card').dataset.experience;
            const experienceDetails = experienceData[experienceId];
            
            const modalTitle = experienceModal.querySelector('.modal-title');
            const modalContent = experienceModal.querySelector('.modal-content');
            
            modalTitle.textContent = `${experienceDetails.title} - ${experienceDetails.company}`;
            modalContent.innerHTML = experienceDetails.content;
            
            experienceModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Project details modal functionality
    projectDetailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectTitle = btn.closest('.project-card').querySelector('.project-title').textContent;
            let projectId = '';
            
            // Find project ID based on title or data-project attribute
            const projectCard = btn.closest('.project-card');
            if (projectCard.hasAttribute('data-project')) {
                projectId = projectCard.getAttribute('data-project');
            } else if (projectTitle.includes('Macro Regime')) {
                projectId = 'macro-regime';
            } else if (projectTitle.includes('F1 Undercut')) {
                projectId = 'f1-undercut';
            } else if (projectTitle.includes('F1 Race Replay')) {
                projectId = 'f1-race-replay';
            } else if (projectTitle.includes('Monte Carlo')) {
                projectId = 'monte-carlo';
            } else if (projectTitle.includes('Unix Shell')) {
                projectId = 'unix-shell';
            } else if (projectTitle.includes('KRA-KPI')) {
                projectId = 'kra-kpi-platform';
            } else if (projectTitle.includes('AgReliant')) {
                projectId = 'agreliant-dashboard';
            }
            
            const projectDetails = projectData[projectId];
            
            const modalTitle = projectModal.querySelector('.modal-title');
            const modalContent = projectModal.querySelector('.modal-content');
            
            modalTitle.textContent = projectDetails.title;
            
            let tagsHTML = projectDetails.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');
            let githubButton = projectDetails.github 
                ? `<a href="${projectDetails.github}" target="_blank" class="btn btn-sm btn-outline"><i class="fab fa-github"></i> View on GitHub</a>` 
                : '';
            
            modalContent.innerHTML = `
                <div class="modal-tags">${tagsHTML}</div>
                <div class="modal-actions">${githubButton}</div>
                ${projectDetails.content}
            `;
            
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking close button or overlay
    modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            experienceModal.classList.remove('active');
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            experienceModal.classList.remove('active');
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Project filtering
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.dataset.filter;
            
            projectCards.forEach(card => {
                // Reset animation for smoother filtering
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                
                const cardCategories = card.dataset.category.split(' ');
                
                if (filterValue === 'all' || card.dataset.category === filterValue || cardCategories.includes(filterValue)) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Contact form submission is handled by EmailJS script in index.html
    
    // Expandable achievement cards
    const expandableAchievements = document.querySelectorAll('.expandable-achievement');
    expandableAchievements.forEach(card => {
        const expandBtn = card.querySelector('.achievement-expand-btn');
        if (expandBtn) {
            expandBtn.addEventListener('click', () => {
                card.classList.toggle('expanded');
            });
        }
    });
});

// Modify this part in main.js
function initAnimations() {
    // Add animation classes to elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    const scaleInElements = document.querySelectorAll('.scale-in');
    const staggerItems = document.querySelectorAll('.stagger-item');
    
    // Add observer for scroll-triggered animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Add 'visible' class when element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Remove 'visible' class when element is out of view
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe elements
    fadeInElements.forEach(el => observer.observe(el));
    slideLeftElements.forEach(el => observer.observe(el));
    slideRightElements.forEach(el => observer.observe(el));
    scaleInElements.forEach(el => observer.observe(el));
    
    // Handle staggered animations
    staggerItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Initialize skill progress bars
    const skillProgress = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                entry.target.style.width = width;
            } else {
                // Reset width when out of view
                entry.target.style.width = '0';
            }
        });
    }, { threshold: 0.1 });
    
    skillProgress.forEach(el => skillObserver.observe(el));
}