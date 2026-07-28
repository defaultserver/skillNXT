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
          title: 'SEO & Search Engine Optimization',
          topics: ['Keyword Research & Intent Analysis', 'On-Page & Technical SEO Audits', 'Link Building & Authority Strategies', 'Local SEO & Google Business Profile']
        },
        {
          number: 'Module 2',
          title: 'Google Ads & Performance Marketing',
          topics: ['Search, Display & Video Ad Campaigns', 'Smart Bidding & Conversion Tracking', 'Google Shopping Ads & Remarketing', 'PPC Budget Optimization']
        },
        {
          number: 'Module 3',
          title: 'Social Media Marketing (Meta, LinkedIn & Instagram)',
          topics: ['Organic Content Strategy & Reels', 'Meta Ads Manager & Audience Targeting', 'LinkedIn B2B Lead Generation', 'Influencer Marketing Campaign Execution']
        },
        {
          number: 'Module 4',
          title: 'Web Analytics & Conversion Rate Optimization (CRO)',
          topics: ['Google Analytics 4 (GA4) Implementation', 'Google Tag Manager Setup', 'Landing Page Optimization & A/B Testing', 'ROI & Executive Reporting Dashboards']
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
          title: 'Advanced Excel Formulas & Logic',
          topics: ['XLOOKUP, INDEX/MATCH & Nested Conditions', 'Dynamic Array Formulas (UNIQUE, FILTER, SORT)', 'Financial & Statistical Functions', 'Data Validation & Multi-Condition Formatting']
        },
        {
          number: 'Module 2',
          title: 'Power Query & Data Cleaning Automation',
          topics: ['Connecting Multi-Source Files & Folders', 'Unpivoting & Cleaning Dirty Data', 'Automating Monthly Data Import Workflows', 'Custom M-Code Functions']
        },
        {
          number: 'Module 3',
          title: 'Power Pivot & Data Modeling',
          topics: ['Building Data Models & Relationships', 'DAX Measures (CALCULATE, RELATED, Time Intelligence)', 'KPI Indicators & Executive Scorecards']
        },
        {
          number: 'Module 4',
          title: 'Interactive Dashboards & VBA Macros',
          topics: ['Designing Sleek Interactive Dashboards with Slicers', 'Recording & Modifying VBA Macros', 'Automating Excel Tasks & One-Click PDF/Email Reports', 'Introduction to Power BI']
        }
      ],
      tools: ['Microsoft Excel 365', 'Power Query', 'Power Pivot', 'DAX', 'VBA Editor', 'Power BI Desktop'],
      careers: ['Data Analyst', 'Financial & MIS Analyst', 'Business Intelligence Executive', 'Reporting Operations Manager', 'Audit & Accounts Specialist'],
      timings: 'Exclusively Saturdays: 10:00 AM - 3:00 PM (Practical Lab Focus)'
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
      modEl.innerHTML = `
        <h5>${mod.number}: ${mod.title}</h5>
        <ul>
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

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeCourseModal();
    }
  });

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
  const heroForm = document.getElementById('heroLeadForm');
  const mainForm = document.getElementById('mainLeadForm');

  function handleFormSubmission(e, formType) {
    e.preventDefault();

    const form = e.target;
    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const course = form.querySelector('[name="course"]').value;
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

    // Save lead into local storage for demonstration / admin dashboard retrieval
    const existingLeads = JSON.parse(localStorage.getItem('apex_institute_leads') || '[]');
    const newLead = {
      id: Date.now(),
      name,
      phone,
      course,
      preferredTime,
      submittedAt: new Date().toISOString(),
      source: formType
    };
    existingLeads.push(newLead);
    localStorage.setItem('apex_institute_leads', JSON.stringify(existingLeads));

    // Reset Form
    form.reset();

    // Show Success Toast
    showToast(`Thank you, ${name}! Your demo class slot request is received. Our academic team will call you shortly.`, 'success');

    // Prompt user to open WhatsApp to talk directly to admissions
    const courseNameMap = {
      'digital-marketing': 'Digital Marketing Master Course',
      'cloud-computing': 'Cloud Computing Professional Course (Sunday Batch)',
      'advance-excel': 'Advance Excel & Data Analysis (Saturday Batch)'
    };
    const selectedCourseLabel = courseNameMap[course] || course;
    const waText = encodeURIComponent(`Hello Apex Skills Institute! I just submitted an inquiry for *${selectedCourseLabel}*.\nName: ${name}\nPhone: ${phone}\nPreferred Time: ${preferredTime}. Please share fee details and demo class slot.`);
    
    setTimeout(() => {
      if (confirm('Would you like to connect directly with our Counselor on WhatsApp for instant confirmation?')) {
        window.open(`https://wa.me/919004547746?text=${waText}`, '_blank');
      }
    }, 1200);
  }

  if (heroForm) heroForm.addEventListener('submit', (e) => handleFormSubmission(e, 'Hero Form'));
  if (mainForm) mainForm.addEventListener('submit', (e) => handleFormSubmission(e, 'Main Form'));

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
