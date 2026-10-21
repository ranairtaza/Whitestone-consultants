/* ===================================================================
   WHITE STONE PTE & OVERSEAS CONSULTANTS - HAFIZABAD
   Interactive Engine: Countries, Courses, Calculator, Modals, Forms
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCountriesEngine();
  initCoachingTabs();
  initAccordion();
  initModals();
  initForms();
  initStickyHeader();
});

/* ===================================================================
   1. 8 COUNTRIES DATABASE & INTERACTIVE WHEEL ENGINE
=================================================================== */
const countriesData = {
  uk: {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    flagImg: "/assets/flags/gb.svg",
    badge: "Top Global Destination",
    title: "Study in the UK - 1 Year Masters & 2 Year Graduate Route PSW",
    description: "The UK is one of the world's premier higher education destinations. With 1-year master's degrees, world-renowned Russell Group universities, and the 2-Year Graduate Route Post-Study Work (PSW) visa, it provides unmatched career progression for Pakistani students.",
    intakes: "September/October & January/February",
    tuition: "£11,500 - £18,000 / year",
    testReq: "PTE Academic: 58-65 | IELTS: 6.0-6.5 (MOI accepted in select universities)",
    workRights: "20 hrs/week during term, 2 Years Post Study Work (PSW)",
    universities: ["University of Hertfordshire", "Coventry University", "University of East London", "Leeds Beckett University", "University of Greenwich", "Teesside University"],
    highlights: [
      "1-Year Fast Track Master's degrees saving cost and living expenses",
      "2-Year Post-Study Work (PSW) Graduate Route permit",
      "High visa success ratio with proper White Stone documentation",
      "Spouse allowed on Master's research and PhD programs",
      "Part-time work permitted up to 20 hours per week"
    ]
  },
  australia: {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    flagImg: "/assets/flags/au.svg",
    badge: "PR & Career Pathway",
    title: "Study in Australia - Subclass 500 Visa & High Earning Potential",
    description: "Australia is the #1 choice for students targeting career growth and long-term settlement. With world-class Group of Eight and progressive regional universities, Australia accepts PTE Academic wholeheartedly — which you can ace at White Stone's dedicated computer lab in Hafizabad.",
    intakes: "February/March & July/August (Nov minor)",
    tuition: "AUD $22,000 - $34,000 / year",
    testReq: "PTE Academic: 58-65 (WhiteStone PTE Specialization) | IELTS: 6.5 overall",
    workRights: "48 hrs/fortnight during semester, 2 to 4 Years Post-Study Work (subclass 485)",
    universities: ["Deakin University", "Monash University", "University of Wollongong", "Curtin University", "Swinburne University", "La Trobe University"],
    highlights: [
      "Subclass 500 Student Visa guidance with Genuine Student (GS) assessment",
      "PTE Academic is 100% accepted by Australian DHA and universities",
      "Regional university bonus points for Australian Permanent Residency (PR)",
      "High minimum wage rate ($24.10/hr) ensuring student self-reliance",
      "Spouse full-time work rights on Master's level programs"
    ]
  },
  cyprus: {
    id: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    flagImg: "/assets/flags/cy.svg",
    badge: "Budget Friendly Europe",
    title: "Study in Cyprus - Low Cost, High Visa Ratio & European Standards",
    description: "Cyprus provides an affordable gateway to European higher education with very high visa issuance rates and low financial requirements. Programs are taught in English, and admission is smooth with immediate offer letters.",
    intakes: "Fall (September/October) & Spring (February)",
    tuition: "€2,800 - €5,500 / year (Very Affordable)",
    testReq: "IELTS / PTE waiver available (English Proficiency Letter accepted)",
    workRights: "20 hrs/week during studies (European part-time permit)",
    universities: ["Near East University", "Eastern Mediterranean University", "European University Cyprus", "University of Nicosia", "Cyprus International University"],
    highlights: [
      "Extremely affordable tuition fees payable in easy installments",
      "No mandatory IELTS/PTE required (Internal test / MOI accepted)",
      "Low bank statement requirement compared to UK/Australia",
      "Up to 50% automatic international student scholarship grants",
      "Clean, safe Mediterranean environment with student-friendly lifestyle"
    ]
  },
  turkey: {
    id: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    flagImg: "/assets/flags/tr.svg",
    badge: "Gateway of East & West",
    title: "Study in Turkey - Top Ranked Universities & Government Scholarships",
    description: "Turkey bridges Europe and Asia, offering top-tier accredited degrees in Medicine, Engineering, IT, and Business. With the prestigious Türkiye Bursları full scholarships and low tuition fees at foundation universities, it is a favorite for Pakistani students.",
    intakes: "Fall (September) & Spring (February)",
    tuition: "$1,800 - $6,500 / year (Medicine/Dentistry varies)",
    testReq: "IELTS 5.5+ or PTE 50+ or University English Placement Test",
    workRights: "Part-time student permits in Istanbul, Ankara & Izmir",
    universities: ["Istanbul Aydin University", "Koc University", "Sabanci University", "Istanbul Medipol University", "Baskent University"],
    highlights: [
      "High recognition worldwide with Bologna European Higher Education Area (EHEA)",
      "Türkiye Bursları Scholarship assistance (Tuition + Stipend + Dormitory)",
      "Affordable living cost with culturally warm and welcoming Islamic culture",
      "Medical & Engineering degrees recognized by PMDC / PEC (subject to verification)",
      "Straightforward embassy visa processing in Islamabad/Lahore"
    ]
  },
  sweden: {
    id: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    flagImg: "/assets/flags/se.svg",
    badge: "Nordic Innovation Hub",
    title: "Study in Sweden - World Class Research, Innovation & Spouse Work Rights",
    description: "Home of the Nobel Prize, IKEA, Spotify, and Volvo, Sweden is Europe's tech innovation powerhouse. Sweden offers 100% English-taught master's degrees, full-time work rights for accompanying spouses, and 1 year job-seeker residence permit upon graduation.",
    intakes: "Autumn (August/September) & Spring (January)",
    tuition: "SEK 90,000 - 145,000 / year (~€8,000 - €13,000)",
    testReq: "PTE Academic: 62+ | IELTS: 6.5 (no band below 5.5)",
    workRights: "Unlimited hours during studies for students & spouse full-time work",
    universities: ["Lund University", "Uppsala University", "KTH Royal Institute of Technology", "Chalmers University", "Jonkoping University", "Linkoping University"],
    highlights: [
      "Accompanying spouse gets an unrestricted full-time Swedish work permit",
      "12-month post-study residence permit to search for high-paying jobs",
      "Children get free Scandinavian schooling and world-class healthcare",
      "PTE Academic test scores are accepted by Swedish University Admissions",
      "Direct pathway to European permanent residency after stable employment"
    ]
  },
  finland: {
    id: "finland",
    name: "Finland",
    flag: "🇫🇮",
    flagImg: "/assets/flags/fi.svg",
    badge: "#1 Happiest Country",
    title: "Study in Finland - 4-Year Fast Track to PR & Up to 100% Scholarships",
    description: "Ranked the happiest country in the world for 7 consecutive years, Finland offers the world's most progressive education system. Finnish immigration grants Type A continuous residence permits to students, making you eligible for Permanent Residency (PR) in just 4 years!",
    intakes: "Autumn (Joint Application in Jan, Start in Aug/Sept)",
    tuition: "€8,000 - €13,000 / year (Generous 20% - 100% scholarships)",
    testReq: "PTE Academic: 58-62 | IELTS: 6.0-6.5 | SAT accepted for Bachelors",
    workRights: "30 hrs/week during semesters (highest in Europe!) + 2-year job seeker visa",
    universities: ["University of Helsinki", "Aalto University", "Tampere University", "LUT University", "University of Oulu", "Haaga-Helia UAS"],
    highlights: [
      "Student Residence Permit (Type A) counts 100% towards 4-Year Finnish PR!",
      "30 hours/week working rights during semester (among the highest globally)",
      "Spouse receives open work permit with complete freedom to work",
      "Generous tuition scholarships awarded automatically on merit",
      "2-Year Post-Study Job Seeker visa after graduation"
    ]
  },
  china: {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    flagImg: "/assets/flags/cn.svg",
    badge: "CSC Full Scholarships",
    title: "Study in China - Fully Funded Government Scholarships & MBBS / Tech",
    description: "China is Pakistan's iron brother and the world's 2nd largest economy. With the Chinese Government Scholarship (CSC), Silk Road Scholarships, and Provincial Awards, students can study Bachelors, Masters, or PhD with 100% Free Tuition, Free Hostel, and monthly cash stipends up to 3500 RMB.",
    intakes: "September (Major Scholarship Intake) & March",
    tuition: "FREE (Under CSC Scholarship) or $2,200 - $4,000 / year (Self-finance)",
    testReq: "English Medium: No IELTS required (English Proficiency Letter valid)",
    workRights: "Campus internships and part-time jobs in tech special zones",
    universities: ["Tsinghua University", "Peking University", "Zhejiang University", "Nanjing University", "Wuhan University", "Harbin Institute of Technology"],
    highlights: [
      "Chinese Government Scholarship (CSC Type A & B) with full financial cover",
      "Monthly living stipend: Masters 3,000 RMB/month, PhD 3,500 RMB/month",
      "World-class MBBS programs taught in 100% English medium",
      "High visa approval rate with official JW201/JW202 government visa letters",
      "State of the art robotic, AI, and medical research infrastructure"
    ]
  },
  korea: {
    id: "korea",
    name: "South Korea",
    flag: "🇰🇷",
    flagImg: "/assets/flags/kr.svg",
    badge: "Tech & GKS Scholarship Hub",
    title: "Study in South Korea - GKS Full-Ride Scholarships & High Tech Giants",
    description: "South Korea is an Asian technological superpower (Samsung, Hyundai, LG). The Korean government provides the prestigious Global Korea Scholarship (GKS), and Korean universities offer 30% to 100% tuition scholarships for international applicants with pathways to the D-10 and E-7 work visas.",
    intakes: "Spring (March) & Fall (September)",
    tuition: "$2,800 - $6,000 / semester (30%-100% merit scholarships common)",
    testReq: "IELTS 6.0+ / PTE 55+ or TOPIK (Test of Proficiency in Korean)",
    workRights: "20-25 hrs/week during term, full-time during vacations, D-10 job search visa",
    universities: ["Seoul National University (SNU)", "KAIST", "Korea University", "Yonsei University", "Sungkyunkwan University (SKKU)", "Hanyang University"],
    highlights: [
      "Global Korea Scholarship (GKS) covering airfare, tuition, and living allowance",
      "Cutting-edge engineering, IT, business, and game development programs",
      "D-10 Post-Study Job Seeker visa leading to E-7 professional residency",
      "Extremely safe, technologically hyper-advanced society with rich culture",
      "Safe and affordable student dormitories on university campuses"
    ]
  }
};

function initCountriesEngine() {
  const flagButtons = document.querySelectorAll('.orbit-flag-btn');
  const tabButtons = document.querySelectorAll('.country-tab-btn');
  const panel = document.getElementById('countryDetailPanel');

  if (!panel) return;

  function renderCountry(countryId) {
    const data = countriesData[countryId];
    if (!data) return;

    // Update Flag Buttons
    flagButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.country === countryId);
    });

    // Update Tabs
    tabButtons.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.country === countryId);
    });

    // Animate and render Panel
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(8px)';

    setTimeout(() => {
      panel.innerHTML = `
        <div class="country-panel-header">
          <div class="country-header-left">
            <img src="${data.flagImg}" alt="${data.name} Flag" class="country-flag-img">
            <div>
              <span class="badge-pill badge-red" style="margin-bottom: 6px;">${data.badge}</span>
              <h3>${data.name}</h3>
              <p>${data.title}</p>
            </div>
          </div>
        </div>

        <div class="country-meta-grid">
          <div class="meta-item">
            <span>Intake Seasons</span>
            <strong>${data.intakes}</strong>
          </div>
          <div class="meta-item">
            <span>Average Tuition</span>
            <strong>${data.tuition}</strong>
          </div>
          <div class="meta-item">
            <span>Language Test (PTE / IELTS)</span>
            <strong>${data.testReq}</strong>
          </div>
          <div class="meta-item">
            <span>Work Rights & PSW</span>
            <strong>${data.workRights}</strong>
          </div>
        </div>

        <div class="country-body-text">
          <p>${data.description}</p>
        </div>

        <div style="margin-bottom: 22px;">
          <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: var(--primary-navy);">Popular Partner Universities:</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${data.universities.map(uni => `<span style="background: var(--accent-blue-soft); color: var(--primary-navy); padding: 5px 12px; border-radius: var(--radius-pill); font-size: 0.82rem; font-weight: 600; border: 1px solid var(--accent-blue-border);">${uni}</span>`).join('')}
          </div>
        </div>

        <div class="country-highlights-list">
          <h4 style="font-size: 1.05rem; margin-bottom: 12px; color: var(--primary-navy);">Key Advantages:</h4>
          <ul>
            ${data.highlights.map(item => `
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ${item}
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="country-panel-actions">
          <button class="btn btn-primary" onclick="openBookingModal('Study Visa - ${data.name}')">
            Apply for ${data.name} Visa
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <a href="https://wa.me/923017868078?text=Hello%20White%20Stone%20Consultant,%20I%20want%20complete%20details%20for%20study%20visa%20in%20${encodeURIComponent(data.name)}" target="_blank" class="btn btn-outline">
            WhatsApp Inquiry
          </a>
        </div>
      `;

      panel.style.opacity = '1';
      panel.style.transform = 'translateY(0)';
    }, 200);
  }

  // Bind Orbit Buttons
  flagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderCountry(btn.dataset.country);
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        renderCountry(btn.dataset.country);
      }
    });
  });

  // Bind Tab Buttons
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderCountry(btn.dataset.country);
    });
  });

  // Initial render
  renderCountry('uk');
}

/* ===================================================================
   2. COACHING & TRAINING TABS (PTE, IELTS, Spoken English, Office)
=================================================================== */
const coachingData = {
  pte: {
    title: "PTE Academic - Hafizabad's Premier Computer Testing Lab",
    desc: "Pearson Test of English (PTE) is widely accepted for study visas and immigration in Australia, UK, New Zealand, and Canada. At White Stone PTE Hafizabad, we provide real software simulated computer lab practice, AI score breakdown, and templates for 79+ guaranteed results.",
    badge: "Official Computer Practice Lab in Hafizabad",
    specs: [
      { label: "🕒 Duration", value: "3 to 5 Weeks (Fast-Track)" },
      { label: "💻 Lab Practice", value: "Daily 2-Hour Monitored Lab" },
      { label: "🎧 Headsets", value: "Pearson Standard Noise-Canceling" },
      { label: "🤖 AI Mock Tests", value: "10 Full Scored AI Practice Tests" },
      { label: "📅 Batch Times", value: "Morning (10 AM), Evening (4 PM, 6 PM)" },
      { label: "🎯 Target Score", value: "58, 65, 79+ Guaranteed Framework" }
    ],
    items: [
      "Dedicated Computer Lab with High-Quality Headsets",
      "Real Pearson Exam Software Interface & Mock Tests",
      "AI Scoring Algorithm Analysis & Immediate Result",
      "Special Speaking & Fluency Pronunciation Tricks",
      "Flexible Batches: Morning, Evening & Weekend",
      "Target Score 58, 65, and 79+ Guarantee Strategies"
    ],
    serviceName: "PTE Academic Coaching"
  },
  ielts: {
    title: "IELTS Masterclass (Academic & General Training)",
    desc: "Comprehensive preparation covering all four testing modules: Listening, Reading, Writing, and Speaking. Led by certified instructors with Cambridge practice exams, personalized essay assessments, and 1-on-1 speaking interview simulations.",
    badge: "Cambridge Certified Curriculum",
    specs: [
      { label: "🕒 Duration", value: "4 to 8 Weeks Complete" },
      { label: "🗣️ Speaking Practice", value: "Daily 1-on-1 Certified Teacher Interview" },
      { label: "📝 Essay Checking", value: "Daily Task 1 & 2 Band Feedback" },
      { label: "📊 Mock Exams", value: "Weekly Full-Length Cambridge Mocks" },
      { label: "📅 Batch Times", value: "Morning (11 AM), Evening (5 PM)" },
      { label: "🎯 Target Band", value: "Band 6.5, 7.0 & 7.5+ Strategies" }
    ],
    items: [
      "4-Module In-Depth Training (L, R, W, S)",
      "Daily 1-on-1 Speaking Mock Interviews",
      "Writing Task 1 & Task 2 Band 7+ Frameworks",
      "Weekly Full-Length Mock Exams with Band Scoring",
      "Free Diagnostic Assessment & Placement Test",
      "Special Focus on Grammar and Academic Vocabulary"
    ],
    serviceName: "IELTS Masterclass"
  },
  spoken: {
    title: "Spoken English & Professional Fluency Course",
    desc: "Overcome the fear and hesitation of speaking English. Our communicative methodology builds spoken confidence through real conversational drills, public speaking, group discussions, accent training, and embassy interview role-playing.",
    badge: "Confidence & Fluency Guaranteed",
    specs: [
      { label: "🕒 Duration", value: "4 Weeks Intensive Fluency" },
      { label: "🎙️ Practical Speaking", value: "Daily Discussions & Debates" },
      { label: "🌐 Accent Training", value: "Pronunciation & Rhythm Drills" },
      { label: "🛂 Visa Prep", value: "UK / Europe Embassy Interview Mocks" },
      { label: "📅 Batch Times", value: "Evening 5:00 PM - 6:30 PM" },
      { label: "📜 Certification", value: "Course Completion Certificate" }
    ],
    items: [
      "Hesitation Elimination & Stage Fear Removal",
      "Practical Daily Life Dialogue & Social Speaking",
      "Embassy Visa Interview Preparation Sessions",
      "Accent Neutralization & Pronunciation Drills",
      "Debates, Presentations & Group Discussions",
      "Basic to Advanced Grammar and Idiomatic Phrasing"
    ],
    serviceName: "Spoken English Course"
  },
  office: {
    title: "Office Management & Executive Professional Training",
    desc: "Equip yourself with practical office automation and executive management skills. Learn Microsoft Word, Advanced Excel with formulas & dashboards, PowerPoint, professional corporate email drafting, electronic filing, and office communication.",
    badge: "Job-Ready Career Skills",
    specs: [
      { label: "🕒 Duration", value: "6 Weeks Hands-on Lab Training" },
      { label: "📊 Excel Skills", value: "Formulas, VLOOKUP, Pivot & Charts" },
      { label: "📄 Documentation", value: "MS Word & Professional Letters" },
      { label: "⌨️ Typing Speed", value: "English & Urdu Keyboarding" },
      { label: "📅 Batch Times", value: "Morning & Afternoon Batches" },
      { label: "📜 Diploma", value: "Professional Skills Certificate" }
    ],
    items: [
      "Advanced Microsoft Excel (Formulas, Pivot, VLOOKUP)",
      "MS Word Executive Documentation & Letters",
      "PowerPoint Pitch Decks & Business Presentations",
      "Corporate Email Writing & Business Etiquette",
      "Typing Speed Enhancement (English / Urdu)",
      "Records Management, Cloud Storage & Office Tech"
    ],
    serviceName: "Office Management Course"
  }
};

function initCoachingTabs() {
  const tabs = document.querySelectorAll('.coaching-nav-btn');
  const contentArea = document.getElementById('coachingTabContent');

  if (!contentArea) return;

  function renderTab(key) {
    const data = coachingData[key];
    if (!data) return;

    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === key);
    });

    contentArea.innerHTML = `
      <div class="coaching-inner-grid">
        <div class="coaching-text">
          <span class="badge-pill badge-red" style="margin-bottom: 12px;">${data.badge}</span>
          <h3>${data.title}</h3>
          <p>${data.desc}</p>

          <div class="curriculum-list">
            ${data.items.map(item => `
              <div class="curriculum-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${item}</span>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="openBookingModal('${data.serviceName}')">
              Book Free Trial Class
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <a href="https://wa.me/923017868078?text=Hello%20White%20Stone%20Consultants,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(data.serviceName)}" target="_blank" class="btn btn-outline-white">
              Fee & Timing Inquiry
            </a>
          </div>
        </div>

        <div class="coaching-specs-card">
          <div class="specs-badge">
            <span style="color: var(--primary-red);">★</span> White Stone Academy &bull; Hafizabad
          </div>
          <h4 style="font-size: 1.25rem; color: #FFFFFF; margin-bottom: 16px;">Course Specifications & Facilities</h4>

          <div class="specs-grid">
            ${data.specs.map(s => `
              <div class="spec-row">
                <span class="spec-label">${s.label}:</span>
                <strong class="spec-value">${s.value}</strong>
              </div>
            `).join('')}
          </div>

          <div style="margin-top: 20px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
            <span style="font-size: 0.82rem; color: #94A3B8;">📍 Near Punjab College, Gujranwala Rd</span>
            <span style="font-size: 0.82rem; color: #38BDF8; font-weight: 600;">Free Demo Available</span>
          </div>
        </div>
      </div>
    `;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      renderTab(tab.dataset.tab);
    });
  });

  // Initial load
  renderTab('pte');
}



/* ===================================================================
   4. FAQ ACCORDION
=================================================================== */
function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = header.classList.contains('active');

      // Close all
      headers.forEach(h => {
        h.classList.remove('active');
        if (h.nextElementSibling) {
          h.nextElementSibling.style.maxHeight = null;
          h.nextElementSibling.classList.remove('open');
        }
      });

      // Toggle current
      if (!isOpen && body) {
        header.classList.add('active');
        body.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 40 + 'px';
      }
    });
  });
}

/* ===================================================================
   5. CONSULTATION MODALS & TOAST
=================================================================== */
let activeModal = null;

function initModals() {
  const modalOverlay = document.getElementById('consultationModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', () => {
      closeModal();
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }
}

window.openBookingModal = function(serviceOrCountry = '') {
  const modalOverlay = document.getElementById('consultationModal');
  const serviceInput = document.getElementById('modalServiceInput');

  if (modalOverlay) {
    if (serviceInput && serviceOrCountry) {
      serviceInput.value = serviceOrCountry;
    }
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    activeModal = modalOverlay;
  }
};

window.closeModal = function() {
  const modalOverlay = document.getElementById('consultationModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    activeModal = null;
  }
};

function showToast(message) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ===================================================================
   6. CONTACT & MODAL FORM SUBMISSIONS
=================================================================== */
function initForms() {
  // Consultation Modal Form
  const modalForm = document.getElementById('modalConsultationForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalName').value.trim();
      const phone = document.getElementById('modalPhone').value.trim();
      const service = document.getElementById('modalServiceInput').value;
      const message = document.getElementById('modalNotes').value.trim();

      if (!name || !phone) {
        alert("Please fill your full name and contact number.");
        return;
      }

      closeModal();
      showToast("Connecting you directly to White Stone on WhatsApp...");

      // Immediate WhatsApp dispatch
      const waText = 
        `🎓 *New Consultation Request (White Stone Hafizabad)*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone / WhatsApp:* ${phone}\n` +
        `🎯 *Interested In:* ${service}\n` +
        (message ? `📝 *Notes/Date:* ${message}\n` : '') +
        `\n_Sent from White Stone Consultants Website_`;

      const waUrl = `https://wa.me/923017868078?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');

      modalForm.reset();
    });
  }

  // Contact Page Form
  const contactForm = document.getElementById('mainContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const serviceEl = document.getElementById('contactService');
      const service = serviceEl ? serviceEl.value : '';
      const countryEl = document.getElementById('contactCountry');
      const country = countryEl ? countryEl.value : '';
      const notesEl = document.getElementById('contactMessage');
      const notes = notesEl ? notesEl.value.trim() : '';

      if (!name || !phone) {
        alert("Please provide your name and phone number.");
        return;
      }

      showToast("Connecting you directly to White Stone on WhatsApp...");

      // Immediate WhatsApp dispatch
      const waText = 
        `🎓 *New Website Inquiry (White Stone Hafizabad)*\n\n` +
        `👤 *Student Name:* ${name}\n` +
        `📞 *Phone / WhatsApp:* ${phone}\n` +
        `🌍 *Target Country:* ${country}\n` +
        `🎯 *Service Required:* ${service}\n` +
        (notes ? `💬 *Message/Questions:* ${notes}\n` : '') +
        `\n_Sent from White Stone Consultants Website_`;

      const waUrl = `https://wa.me/923017868078?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');

      contactForm.reset();
    });
  }
}

/* ===================================================================
   7. STICKY NAVBAR & MOBILE MENU
=================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = '0 6px 20px rgba(23, 32, 82, 0.12)';
    } else {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
    }
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('mainNavLinks');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('mobile-open');
    });

    // Mobile dropdown toggle handling
    const navItems = navMenu.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      const dropdown = item.querySelector('.nav-dropdown');

      if (link && dropdown) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            item.classList.toggle('open');
          }
        });
      } else if (link) {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            navMenu.classList.remove('mobile-open');
          }
        });
      }
    });

    // Close mobile menu when clicking any dropdown sublink
    navMenu.querySelectorAll('.dropdown-link').forEach(subLink => {
      subLink.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('mobile-open');
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && navMenu.classList.contains('mobile-open')) {
        if (!navMenu.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
          navMenu.classList.remove('mobile-open');
        }
      }
    });
  }
}

