/* ==========================================================================
   Apex Skills Institute - Master JavaScript Application Logic
   Includes: Course Data Store, Modal Controllers, Lead Capture Form,
   WhatsApp Integration, FAQ Accordion, Mobile Menu & Toast System.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. Detailed Course Database
     ------------------------------------------------------------------------ */
  const coursesDatabase = {
    'digital-marketing': {
      id: 'digital-marketing',
      title: 'Digital Marketing Master Course',
      duration: '5 Months',
      schedule: 'Regular & Weekend Batches Available',
      badge: 'Practical + Certification',
      badgeClass: 'badge-emerald',
      target: 'Students, Job Seekers, Business Owners',
      overview: 'Master search engine optimization, performance marketing, social media algorithms, and content strategies with 100% practical agency-level live projects.',
      modules: [
        {
          number: 'Module 1',
          title: 'Website Basics, SEO & Frontend Setup',
          price: '₹11,000',
          topics: [
            'Website structure & landing page basics',
            'On-page SEO, meta tags & heading optimization',
            'Schema & structured data basics',
            'WordPress setup & easy publishing',
            'Domain purchase & live hosting essentials'
          ]
        },
        {
          number: 'Module 2',
          title: 'Local SEO & Local Targeting',
          price: '₹11,000',
          topics: [
            'Google Business Profile setup & optimization',
            'Google Maps optimization for local visibility',
            'NAP consistency & local listings',
            'Local social media optimization',
            'Locally optimized landing pages for indexing'
          ]
        },
        {
          number: 'Module 3',
          title: 'SMM & SEM Strategy',
          price: '₹15,000',
          topics: [
            'Platform selection & audience targeting',
            'Content strategy & posting planning',
            'Organic engagement vs paid ads',
            'Campaign structure for Meta, LinkedIn & Google',
            'Retargeting concepts & audience segmentation'
          ]
        },
        {
          number: 'Module 4',
          title: 'Web Analytics, GA4 & Search Console',
          price: '₹11,000',
          topics: [
            'GA4 setup & reporting',
            'Acquisition, engagement & user behavior reports',
            'Event tracking & custom audience creation',
            'Search Console insights & indexing',
            'SEO performance tracking & optimization'
          ]
        },
        {
          number: 'Module 5',
          title: 'Retargeting, Email & WhatsApp Marketing',
          price: '₹7,000',
          topics: [
            'Email automation & welcome flows',
            'List building & lead management',
            'WhatsApp broadcast strategy & compliance',
            'WhatsApp Business catalog optimization',
            'Cross-platform retargeting with email & WhatsApp'
          ]
        },
        {
          number: 'Module 6',
          title: 'Content Creation & Canva Studio',
          price: '₹7,000',
          topics: [
            'Social media ad banners & infographic design',
            'Brand consistency through theme continuation',
            'Canva apps & design enhancements',
            'AI + manual content writing practice',
            'Canva video editing with audio & animation'
          ]
        }
      ],
      tools: ['Google Ads', 'GA4', 'Meta Ads Manager', 'SEMrush', 'Canva Pro', 'WordPress', 'Google Tag Manager'],
      careers: ['Digital Marketing Manager', 'SEO Specialist', 'PPC Campaign Strategist', 'Social Media Manager', 'Growth Marketer'],
      timings: 'Weekdays: 10:00 AM - 12:30 PM OR 5:00 PM - 7:30 PM | Weekend: Saturday & Sunday Batches'
    },

    'cloud-computing': {
      id: 'cloud-computing',
      title: 'Cloud Computing Professional Course',
      duration: '5 Months',
      schedule: 'SUNDAY SPECIAL BATCH (Exclusively Sundays)',
      badge: 'Sunday Special Batch',
      badgeClass: 'badge-purple',
      target: 'IT Aspirants, Working Professionals, Tech Students',
      overview: 'Comprehensive hands-on training covering Amazon Web Services (AWS) and Microsoft Azure with real-world infrastructure deployment, Docker containerization, and DevOps workflows.',
      modules: [
        {
          number: 'Module 1',
          title: 'Cloud Fundamentals & Linux Systems',
          topics: ['Cloud Computing Architectures (IaaS, PaaS, SaaS)', 'Linux System Administration & Shell Scripting', 'Virtualization & Networking Basics (VPC, Subnets, Security Groups)']
        },
        {
          number: 'Module 2',
          title: 'AWS Core Services Mastery',
          topics: ['EC2 Compute & Auto Scaling Groups', 'S3 Object Storage & IAM Security Policies', 'RDS Database Architecture & DynamoDB', 'Route 53 & CloudFront CDN']
        },
        {
          number: 'Module 3',
          title: 'Microsoft Azure Infrastructure',
          topics: ['Azure Virtual Machines & Virtual Networks', 'Azure Blob Storage & Azure AD Integration', 'Resource Groups & Cost Management']
        },
        {
          number: 'Module 4',
          title: 'Containers, Terraform & DevOps Basics',
          topics: ['Docker Containerization & Multi-stage Builds', 'Kubernetes Deployment Fundamentals', 'Infrastructure as Code with Terraform', 'CI/CD Pipelines with GitHub Actions']
        }
      ],
      tools: ['AWS Console', 'Azure Portal', 'Docker', 'Kubernetes', 'Terraform', 'Linux Bash', 'Git & GitHub'],
      careers: ['Cloud Solutions Architect', 'DevOps Infrastructure Engineer', 'AWS SysOps Administrator', 'Cloud Security Analyst', 'Site Reliability Engineer'],
      timings: 'Exclusively Sundays: 9:30 AM - 2:30 PM (Includes Live Lab Hands-On Sessions)'
    },

    'advance-excel': {
      id: 'advance-excel',
      title: 'Advance Excel & Data Analysis',
      duration: '3 Months',
      schedule: 'SATURDAY SPECIAL BATCH (Exclusively Saturdays)',
      badge: 'Saturday Special Batch',
      badgeClass: 'badge-amber',
      target: 'Working Professionals, Accountants, Students',
      overview: 'Transform raw datasets into actionable executive insights. Master advanced dynamic formulas, Power Query data transformation, Power Pivot data models, and automated VBA dashboards.',
      modules: [
        {
          number: 'Module 1',
          title: 'Excel Foundations & Advanced Formulas',
          price: '₹5,000',
          topics: [
            'Sorting, filtering & multi-level subtotal reports',
            'Logical formulas with IF, IFS, AND & OR',
            'COUNTIF, SUMIF, VLOOKUP, HLOOKUP & XLOOKUP',
            'INDEX + MATCH for advanced lookups',
            'Data validation & structured workbook design'
          ]
        },
        {
          number: 'Module 2',
          title: 'Data Cleaning & Automation',
          price: '₹5,000',
          topics: [
            'Importing & consolidating Excel and CSV files',
            'Cleaning messy data with Power Query',
            'Merging & appending datasets without VLOOKUP',
            'Automation ideas for recurring business reports',
            'Practical transformation workflows'
          ]
        },
        {
          number: 'Module 3',
          title: 'Pivot Tables, Charts & What-If Analysis',
          price: '₹5,000',
          topics: [
            'Pivot tables for business reporting',
            'Pivot charts for quick visual summaries',
            'What-if analysis & scenario planning',
            'Named ranges for cleaner formulas',
            'Reporting structure for MIS work'
          ]
        },
        {
          number: 'Module 4',
          title: 'Advanced Formatting & VBA Basics',
          price: '₹5,000',
          topics: [
            'Advanced conditional formatting',
            'Macros for repetitive tasks',
            'VBA introduction for Excel automation',
            'AI-assisted VBA coding practice',
            'Simple automation projects for real work'
          ]
        },
        {
          number: 'Module 5',
          title: 'MIS Dashboards & Capstone Projects',
          price: '₹5,000',
          topics: [
            'MIS dashboard creation',
            'Executive reporting layouts',
            'Hands-on project assistance',
            'Final business scenario practice',
            'Portfolio-ready Excel outputs'
          ]
        }
      ],
      tools: ['Microsoft Excel 365', 'Power Query', 'Power Pivot', 'DAX', 'VBA Editor', 'Power BI Desktop'],
      careers: ['Data Analyst', 'Financial & MIS Analyst', 'Business Intelligence Executive', 'Reporting Operations Manager', 'Audit & Accounts Specialist'],
      timings: 'Exclusively Saturdays: 10:00 AM - 3:00 PM (Practical Lab Focus)'
    },

    'python': {
      id: 'python',
      title: 'Python for Data Analytics & Automation',
      duration: '2.5 Months',
      schedule: 'Weekend & Evening Batches Available',
      badge: 'Data & Automation',
      badgeClass: 'badge-cyan',
      target: 'Software Aspirants, Data Enthusiasts, Working Professionals',
      overview: 'Master Python fundamentals, NumPy, Pandas for data wrangling, Matplotlib & Seaborn for data visualization, and real-world task automation scripts.',
      modules: [
        {
          number: 'Module 1',
          title: 'Python Core & Data Structures',
          topics: ['Python syntax, variables & data types', 'Lists, tuples, dictionaries & sets', 'Conditionals, loops & list comprehensions', 'Functions, lambdas & error handling']
        },
        {
          number: 'Module 2',
          title: 'Data Wrangling with NumPy & Pandas',
          topics: ['NumPy arrays, mathematical operations & indexing', 'Pandas Series & DataFrames', 'Importing CSV, Excel & JSON datasets', 'Data cleaning, missing values & transformations']
        },
        {
          number: 'Module 3',
          title: 'Data Visualization & Storytelling',
          topics: ['Plotting with Matplotlib & Seaborn', 'Customizing charts, heatmaps & scatter plots', 'Exploratory Data Analysis (EDA) workflows', 'Statistical insights from datasets']
        },
        {
          number: 'Module 4',
          title: 'Task Automation & Capstone Project',
          topics: ['File system automation & Excel file manipulation with openpyxl', 'API consumption & JSON parsing', 'Web scraping basics with BeautifulSoup', 'End-to-end data analytics portfolio project']
        }
      ],
      tools: ['Python 3', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'VS Code'],
      careers: ['Python Developer', 'Data Analyst', 'Automation Specialist', 'Analytics Consultant'],
      timings: 'Weekends: 10:00 AM - 1:00 PM | Weekdays: 7:00 PM - 9:00 PM'
    },

    'sql': {
      id: 'sql',
      title: 'SQL & Database Management for Analytics',
      duration: '2 Months',
      schedule: 'Weekend & Evening Batches Available',
      badge: 'Relational DB Mastery',
      badgeClass: 'badge-emerald',
      target: 'Aspiring Analysts, Developers, Business Professionals',
      overview: 'Master relational database querying, complex joins, subqueries, common table expressions (CTEs), window functions, and query optimization for real enterprise datasets.',
      modules: [
        {
          number: 'Module 1',
          title: 'RDBMS Fundamentals & Basic Querying',
          topics: ['Relational database concepts & tables', 'SELECT, WHERE, DISTINCT, ORDER BY', 'Filtering with AND, OR, IN, BETWEEN, LIKE', 'Data aggregation with COUNT, SUM, AVG, GROUP BY, HAVING']
        },
        {
          number: 'Module 2',
          title: 'Joins & Relational Data Modeling',
          topics: ['INNER, LEFT, RIGHT, FULL OUTER & CROSS JOIN', 'Multi-table joins & alias techniques', 'Primary & Foreign keys relationships', 'Union vs Union All operations']
        },
        {
          number: 'Module 3',
          title: 'Advanced SQL: Subqueries & CTEs',
          topics: ['Correlated & nested subqueries', 'Common Table Expressions (WITH clause)', 'String manipulation & Date-Time functions', 'Conditional CASE WHEN logic']
        },
        {
          number: 'Module 4',
          title: 'Window Functions & Performance Optimization',
          topics: ['ROW_NUMBER, RANK, DENSE_RANK', 'LEAD, LAG & rolling aggregations', 'Indexing strategies & query execution plans', 'Live database analysis capstone project']
        }
      ],
      tools: ['PostgreSQL', 'MySQL', 'SQL Server', 'DBeaver', 'pgAdmin'],
      careers: ['SQL Developer', 'Database Analyst', 'BI Engineer', 'Data Operations Specialist'],
      timings: 'Weekends: 2:00 PM - 5:00 PM | Weekdays: 8:00 PM - 10:00 PM'
    },

    'tableau': {
      id: 'tableau',
      title: 'Tableau & Business Intelligence Visualizations',
      duration: '2 Months',
      schedule: 'Weekend Special Batch',
      badge: 'Visual Analytics',
      badgeClass: 'badge-amber',
      target: 'Data Analysts, Managers, Marketing & Financial Analysts',
      overview: 'Master data storytelling, interactive KPI dashboards, Level of Detail (LOD) calculations, parameters, and enterprise reporting with Tableau Desktop.',
      modules: [
        {
          number: 'Module 1',
          title: 'Tableau Interface & Connecting Data',
          topics: ['Connecting to Excel, CSV, and live SQL databases', 'Data preparation, blending & relationships', 'Dimensions vs Measures, continuous vs discrete fields', 'Building basic charts: Bar, Line, Pie & Area']
        },
        {
          number: 'Module 2',
          title: 'Advanced Visual Analytics & Formatting',
          topics: ['Heat maps, Treemaps, Gantt charts & Dual-axis charts', 'Geographic mapping & custom spatial layers', 'Calculated fields & logical functions', 'Quick Table Calculations (MoM, YoY, Running Total)']
        },
        {
          number: 'Module 3',
          title: 'Parameters & Level of Detail (LOD)',
          topics: ['Dynamic parameter controls & sets', 'FIXED, INCLUDE & EXCLUDE LOD expressions', 'Interactive filters, actions & URL drilldowns', 'Dashboard design principles & layout containers']
        },
        {
          number: 'Module 4',
          title: 'Executive Dashboards & Storyboarding',
          topics: ['Building responsive C-level executive KPI dashboards', 'Interactive storyboards for business presentations', 'Publishing to Tableau Public & Tableau Server', 'Portfolio building with real-world case studies']
        }
      ],
      tools: ['Tableau Desktop', 'Tableau Public', 'Tableau Prep', 'Excel Datasets', 'SQL Connectors'],
      careers: ['Tableau Developer', 'Business Intelligence Analyst', 'Data Visualization Specialist', 'Reporting Manager'],
      timings: 'Exclusively Saturdays: 3:30 PM - 6:30 PM'
    }
  };

  /* ------------------------------------------------------------------------
     2. Course Modal Controller
     ------------------------------------------------------------------------ */
  const modalBackdrop = document.getElementById('courseModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalTabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Function to Open Modal with Specific Course Data
  window.openCourseModal = function(courseId) {
    const data = coursesDatabase[courseId];
    if (!data) return;

    modalTitle.textContent = data.title;
    
    // Overview Tab Content
    document.getElementById('modalOverviewText').textContent = data.overview;
    document.getElementById('modalTargetText').textContent = data.target;
    document.getElementById('modalTimingText').textContent = data.timings;
    document.getElementById('modalScheduleBadge').textContent = data.schedule;

    // Syllabus Tab Content
    const syllabusContainer = document.getElementById('modalSyllabusList');
    syllabusContainer.innerHTML = '';

    data.modules.forEach(mod => {
      const modEl = document.createElement('div');
      modEl.className = 'syllabus-module';
      
      // Override default primary border-left dynamically based on courseId
      if (courseId === 'advance-excel') {
        modEl.style.borderLeft = '4px solid var(--clr-accent-amber)';
      } else if (courseId === 'cloud-computing') {
        modEl.style.borderLeft = '4px solid var(--clr-accent-purple)';
      } else {
        modEl.style.borderLeft = '4px solid var(--clr-primary)';
      }

      // Add border transitions & hover micro-animations
      modEl.style.transition = 'transform var(--transition-normal), box-shadow var(--transition-normal)';
      modEl.addEventListener('mouseenter', () => {
        modEl.style.transform = 'translateX(4px)';
        modEl.style.boxShadow = 'var(--shadow-sm)';
      });
      modEl.addEventListener('mouseleave', () => {
        modEl.style.transform = 'translateX(0)';
        modEl.style.boxShadow = 'none';
      });

      // Price badge styling based on courseId
      let badgeStyle = '';
      if (mod.price) {
        if (courseId === 'advance-excel') {
          badgeStyle = 'background: var(--clr-accent-amber-light); color: var(--clr-accent-amber); border: 1px solid rgba(217, 119, 6, 0.15);';
        } else {
          badgeStyle = 'background: var(--clr-primary-light); color: var(--clr-primary); border: 1px solid rgba(2, 132, 199, 0.15);';
        }
      }

      modEl.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 0.5rem;">
          <h5 style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--clr-navy-900);">${mod.number}: ${mod.title}</h5>
          ${mod.price ? `<span style="${badgeStyle} font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); font-size: 0.8rem; white-space: nowrap;">${mod.price}</span>` : ''}
        </div>
        <ul style="margin: 0; padding-left: 1.25rem; color: var(--clr-slate-600); font-size: 0.9rem;">
          ${mod.topics.map(t => `<li>${t}</li>`).join('')}
        </ul>
      `;
      syllabusContainer.appendChild(modEl);
    });

    // Tools & Careers Tab Content
    const toolsContainer = document.getElementById('modalToolsList');
    toolsContainer.innerHTML = data.tools.map(t => `<span class="badge badge-cyan">${t}</span>`).join(' ');

    const careersContainer = document.getElementById('modalCareersList');
    careersContainer.innerHTML = data.careers.map(c => `<li><svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ${c}</li>`).join('');

    // Pre-select course in enrollment CTA button
    const modalEnrollBtn = document.getElementById('modalEnrollBtn');
    modalEnrollBtn.onclick = () => {
      closeCourseModal();
      selectCourseInForm(courseId);
      scrollToSection('lead-capture');
    };

    // Activate default first tab
    switchTab('overview');

    // Show Modal
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeCourseModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCourseModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeCourseModal();
      }
    });
  }

  // Tab Switcher inside Modal
  function switchTab(tabId) {
    modalTabBtns.forEach(btn => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabContents.forEach(content => {
      if (content.id === `tab-${tabId}`) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

  modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  /* ------------------------------------------------------------------------
     3. Lead Capture Forms Logic (Hero & Main Section)
     ------------------------------------------------------------------------ */
  // Bind submission logic to ALL forms on the page dynamically
  const allForms = document.querySelectorAll('form');
  allForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      let formType = 'Website Form';
      if (form.id === 'heroLeadForm') formType = 'Hero Form';
      else if (form.id === 'mainLeadForm') formType = 'Main Form';
      else if (form.id) formType = form.id;
      handleFormSubmission(e, formType);
    });
  });

  function handleFormSubmission(e, formType) {
    e.preventDefault();

    const form = e.target;
    const nameInput = form.querySelector('[name="name"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const courseInput = form.querySelector('[name="course"]');
    
    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const course = courseInput ? courseInput.value.trim() : '';
    const preferredTime = form.querySelector('[name="time"]') ? form.querySelector('[name="time"]').value : 'Anytime';

    // Simple Phone Number Validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      showToast('Please enter a valid 10-digit mobile number.', 'error');
      return;
    }

    if (!name || !course) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    // Disable button and show spinner
    const submitBtn = form.querySelector('[type="submit"]');
    let originalBtnContent = '';
    if (submitBtn) {
      originalBtnContent = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner" style="margin-right: 0.5rem;"></span> Submitting...`;
    }

    // Map course ID to human-readable title for lead records & Formspree
    const courseNameMap = {
      'digital-marketing': 'Digital Marketing Master Course',
      'cloud-computing': 'Cloud Computing Professional Course (Sunday Batch)',
      'advance-excel': 'Advance Excel & Data Analysis (Saturday Batch)'
    };
    const selectedCourseLabel = courseNameMap[course] || course;

    // Construct Formspree payload
    const formData = new FormData(form);
    formData.set('course', selectedCourseLabel);
    formData.append('form_source', formType);

    // Formspree Submission URL
    const formspreeUrl = 'https://formspree.io/f/xlgqwjdw';

    fetch(formspreeUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Save lead into local storage for demonstration / admin dashboard retrieval
        const existingLeads = JSON.parse(localStorage.getItem('apex_institute_leads') || '[]');
        const newLead = {
          id: Date.now(),
          name,
          phone,
          course: selectedCourseLabel,
          preferredTime,
          submittedAt: new Date().toISOString(),
          source: formType
        };
        existingLeads.push(newLead);
        localStorage.setItem('apex_institute_leads', JSON.stringify(existingLeads));

        // Save to sessionStorage for personalized greetings on the Thank You page
        sessionStorage.setItem('last_lead_name', name);
        sessionStorage.setItem('last_lead_course', selectedCourseLabel);

        // Reset form
        form.reset();

        // Redirect to appropriate Thank You page based on course
        let redirectUrl;
        const courseName = selectedCourseLabel;
        const targetPage = (course === 'cloud-computing') ? 'thankyouCC.html' : 'thank-you.html';
        const isInsidePagesDir = window.location.pathname.toLowerCase().includes('/pages/') || window.location.pathname.toLowerCase().includes('\\pages\\');
        const prefix = isInsidePagesDir ? '' : 'pages/';
        
        redirectUrl = prefix + targetPage + '?name=' + encodeURIComponent(name) + '&course=' + encodeURIComponent(courseName);
        
        console.log('Redirecting to:', redirectUrl);
        window.location.href = redirectUrl;
      } else {
        return response.json().then(data => {
          throw new Error(data.error || 'Server error during submission');
        });
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      showToast('Oops! Something went wrong. Please try again or connect on WhatsApp.', 'error');
      
      // Restore submit button state
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    });
  }

  // Function to pre-select course in forms when clicked from course cards
  window.selectCourseInForm = function(courseId) {
    const courseSelects = document.querySelectorAll('select[name="course"]');
    courseSelects.forEach(sel => {
      sel.value = courseId;
    });
  };

  /* ------------------------------------------------------------------------
     4. FAQ Accordion Toggle Logic
     ------------------------------------------------------------------------ */
  const faqHeaders = document.querySelectorAll('.faq-header');

  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all other active items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* ------------------------------------------------------------------------
     5. Mobile Menu Toggle
     ------------------------------------------------------------------------ */
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. Smooth Scroll Helper
     ------------------------------------------------------------------------ */
  window.scrollToSection = function(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ------------------------------------------------------------------------
     7. Toast Notification System
     ------------------------------------------------------------------------ */
  function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <svg width="24" height="24" fill="none" stroke="${type === 'success' ? '#059669' : '#dc2626'}" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${type === 'success' ? 'M5 13l4 4L19 7' : 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}"></path>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

});
