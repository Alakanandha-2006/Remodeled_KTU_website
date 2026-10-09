/**
 * KTU Student Portal - Interactive Controller
 * Coordinates exact UI/UX states, Examination filters, Results, Grievance submissions, and AI Assistant.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
   * 0. AUTHENTICATION & LOGIN CONTROLLER
   * Credentials: Username 'LBT24CS091' | Password '12345'
   * ------------------------------------------------------------------------ */
  const loginScreen = document.getElementById('login-screen');
  const loginForm = document.getElementById('ktu-login-form');
  const loginUserInput = document.getElementById('login-username');
  const loginPassInput = document.getElementById('login-password');
  const loginTogglePwBtn = document.getElementById('login-toggle-pw-btn');
  const eyeIcon = document.getElementById('eye-icon');
  const loginErrorMsg = document.getElementById('login-error-msg');
  const demoPill = document.getElementById('demo-credentials-pill');
  const loginSupportLink = document.getElementById('login-support-link');
  const loginForgotPwLink = document.getElementById('login-forgot-pw-link');

  // Check initial session
  const isAuthenticated = sessionStorage.getItem('ktu_auth') === 'true';
  if (isAuthenticated && loginScreen) {
    loginScreen.classList.add('hidden');
  }

  // Handle Login Form Submit
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = loginUserInput ? loginUserInput.value.trim().toUpperCase() : '';
      const pass = loginPassInput ? loginPassInput.value.trim() : '';

      if (user === 'LBT24CS091' && pass === '12345') {
        if (loginErrorMsg) loginErrorMsg.style.display = 'none';
        sessionStorage.setItem('ktu_auth', 'true');
        if (loginScreen) loginScreen.classList.add('hidden');
        showToast('Login Successful! Welcome Hasniya Hamsa (LBT24CS091).');
        switchTab('home');
      } else {
        if (loginErrorMsg) {
          loginErrorMsg.style.display = 'block';
          loginErrorMsg.innerHTML = 'Invalid username or password. Please use credentials: <strong>LBT24CS091</strong> / <strong>12345</strong>';
        }
        showToast('Authentication failed: Please check username and password.');
      }
    });
  }

  // Toggle Password Visibility
  if (loginTogglePwBtn && loginPassInput) {
    loginTogglePwBtn.addEventListener('click', () => {
      const isPassword = loginPassInput.type === 'password';
      loginPassInput.type = isPassword ? 'text' : 'password';
      if (eyeIcon) {
        eyeIcon.innerHTML = isPassword ?
          `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>` :
          `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
      }
    });
  }

  // Demo Credentials Autofill Pill
  if (demoPill) {
    demoPill.addEventListener('click', () => {
      if (loginUserInput) loginUserInput.value = 'LBT24CS091';
      if (loginPassInput) loginPassInput.value = '12345';
      showToast('Credentials filled: LBT24CS091 / 12345');
    });
  }

  if (loginSupportLink) {
    loginSupportLink.addEventListener('click', () => {
      showToast('IT Support Helpline: 91889922754 | Email: support@ktu.edu.in');
    });
  }

  if (loginForgotPwLink) {
    loginForgotPwLink.addEventListener('click', () => {
      showToast('Password reset link has been dispatched to your institutional student email.');
    });
  }

  /* ------------------------------------------------------------------------
   * 1. ROUTING & TAB NAVIGATION
   * ------------------------------------------------------------------------ */
  const navTabLinks = document.querySelectorAll('.nav-tab-link');
  const viewContainers = document.querySelectorAll('.portal-view-container');
  const sidebarAdmin = document.getElementById('sidebar-administration');
  const sidebarExam = document.getElementById('sidebar-exam-management');

  function switchTab(tabId) {
    // 1. Hide all main views
    viewContainers.forEach(view => {
      view.style.display = 'none';
      view.classList.remove('active');
    });

    // 2. Show target view
    const targetView = document.getElementById(`view-${tabId}`);
    if (targetView) {
      targetView.style.display = 'block';
      targetView.classList.add('active');
    }

    // 3. Update top horizontal tabs active styling
    navTabLinks.forEach(link => {
      const linkTab = link.getAttribute('data-tab');
      if (linkTab === tabId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 4. Update left sidebar based on active tab
    const sidebarResult = document.getElementById('sidebar-result-management');
    if (tabId === 'exam') {
      if (sidebarAdmin) sidebarAdmin.style.display = 'none';
      if (sidebarExam) sidebarExam.style.display = 'block';
      if (sidebarResult) sidebarResult.style.display = 'none';
    } else if (tabId === 'result') {
      if (sidebarAdmin) sidebarAdmin.style.display = 'none';
      if (sidebarExam) sidebarExam.style.display = 'none';
      if (sidebarResult) sidebarResult.style.display = 'block';
    } else {
      if (sidebarAdmin) sidebarAdmin.style.display = 'block';
      if (sidebarExam) sidebarExam.style.display = 'none';
      if (sidebarResult) sidebarResult.style.display = 'none';
    }

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Bind horizontal nav links
  navTabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const tab = link.getAttribute('data-tab');
      if (tab) {
        e.preventDefault();
        switchTab(tab);
        history.pushState(null, '', `#${tab}`);
      }
    });
  });

  // Handle in-page links with data-tab
  document.addEventListener('click', (e) => {
    const tabTrigger = e.target.closest('[data-tab]');
    if (tabTrigger && !tabTrigger.classList.contains('nav-tab-link')) {
      e.preventDefault();
      const tab = tabTrigger.getAttribute('data-tab');
      switchTab(tab);
      history.pushState(null, '', `#${tab}`);
    }
  });

  // Handle URL Hash navigation
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    if (document.getElementById(`view-${hash}`)) {
      switchTab(hash);
    }
  });

  // Initial load
  const initialHash = window.location.hash.replace('#', '') || 'home';
  if (document.getElementById(`view-${initialHash}`)) {
    switchTab(initialHash);
  } else {
    switchTab('home');
  }

  // Support Banner Dismiss
  const closeBannerBtn = document.getElementById('close-support-banner-btn');
  const supportBanner = document.getElementById('support-banner');
  if (closeBannerBtn && supportBanner) {
    closeBannerBtn.addEventListener('click', () => {
      supportBanner.style.display = 'none';
    });
  }

  // Top user actions
  const changePasswordBtn = document.getElementById('btn-change-password');
  if (changePasswordBtn) {
    changePasswordBtn.addEventListener('click', () => {
      showToast('Password change request modal initiated.');
    });
  }

  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('ktu_auth');
      if (loginScreen) loginScreen.classList.remove('hidden');
      showToast('You have been logged out of KTU Portal.');
    });
  }

  const userProfilePill = document.getElementById('user-profile-pill');
  if (userProfilePill) {
    userProfilePill.addEventListener('click', () => {
      switchTab('student');
    });
  }

  const bellBtn = document.getElementById('header-bell-btn');
  if (bellBtn) {
    bellBtn.addEventListener('click', () => {
      showToast('You have 3 unread university alerts.');
    });
  }


  /* ------------------------------------------------------------------------
   * 2. EXAMINATIONS PAGE FILTERING (SCREENSHOT 1 REPLICA)
   * ------------------------------------------------------------------------ */
  const semSelect = document.getElementById('exam-sem-select');
  const typeFilter = document.getElementById('exam-type-filter');
  const searchExamBtn = document.getElementById('btn-exam-search');
  const clearExamBtn = document.getElementById('btn-exam-clear');
  const examInfoBanner = document.getElementById('exam-info-banner');
  const examBannerText = document.getElementById('exam-banner-text');
  const examResultsList = document.getElementById('exam-results-list');

  function executeExamSearch() {
    const semVal = semSelect ? semSelect.value : '3';
    const typeVal = typeFilter ? typeFilter.value : 'Regular';

    // If Semester 3 and Regular with no definition (as seen in the screenshot)
    // We demonstrate matching or showing the screenshot's exact alert!
    const matches = KTU_DATA.exams.filter(item => {
      const matchSem = semVal === 'all' || item.semester.toString() === semVal;
      const matchType = typeVal === 'all' || 
        item.examType.toLowerCase() === typeVal.toLowerCase() ||
        (typeVal.toLowerCase().startsWith('honor') && item.examType.toLowerCase().startsWith('honor')) ||
        (typeVal.toLowerCase().startsWith('minor') && item.examType.toLowerCase().startsWith('minor'));
      return matchSem && matchType;
    });

    if (matches.length === 0) {
      if (examInfoBanner) {
        examInfoBanner.style.display = 'flex';
        if (examBannerText) {
          examBannerText.textContent = `No exam definition for selected academic year (Semester ${semVal}, ${typeVal}).`;
        }
      }
      if (examResultsList) {
        examResultsList.style.display = 'none';
        examResultsList.innerHTML = '';
      }
    } else {
      if (examInfoBanner) {
        examInfoBanner.style.display = 'none';
      }
      if (examResultsList) {
        examResultsList.style.display = 'flex';
        examResultsList.innerHTML = matches.map(item => `
          <article class="exam-notif-card">
            <div class="notif-top-row">
              <div class="notif-tags-cluster">
                <span class="badge-sem-tag">Semester ${item.semester}</span>
                <span class="badge-type-tag">${escapeHtml(item.examType)}</span>
              </div>
              <span class="notif-date-val">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                ${escapeHtml(item.date)}
              </span>
            </div>

            <h4 class="notif-title-h4">${escapeHtml(item.title)}</h4>
            <p class="notif-desc-p">${escapeHtml(item.description)}</p>

            <div class="notif-footer-row">
              <span class="notif-code-text">${escapeHtml(item.notificationNo)}</span>
              <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" style="font-size:0.775rem; font-weight:600; color:#1668c2;">View Official Circular &rarr;</a>
            </div>
          </article>
        `).join('');
      }
    }
  }

  function clearExamSearch() {
    if (semSelect) semSelect.value = '3';
    if (typeFilter) typeFilter.value = 'Regular';
    if (examInfoBanner) {
      examInfoBanner.style.display = 'flex';
      if (examBannerText) {
        examBannerText.textContent = 'No exam definition for selected academic year.';
      }
    }
    if (examResultsList) {
      examResultsList.style.display = 'none';
      examResultsList.innerHTML = '';
    }
    showToast('Examination filters cleared.');
  }

  if (searchExamBtn) searchExamBtn.addEventListener('click', executeExamSearch);
  if (clearExamBtn) clearExamBtn.addEventListener('click', clearExamSearch);


  /* ------------------------------------------------------------------------
   * 3. RESULTS & SEMESTER GRADE CARD (SCREENSHOT REPLICA)
   * ------------------------------------------------------------------------ */
  const resultSemSelect = document.getElementById('result-sem-select');
  const resultTypeSelect = document.getElementById('result-type-select');
  const btnResultSearch = document.getElementById('btn-result-search');
  const btnResultClear = document.getElementById('btn-result-clear');
  const resultEmptyHint = document.getElementById('result-empty-hint');
  const resultDetailsContent = document.getElementById('result-details-content');

  // Sample authentic KTU course grades for student Hasniya Hamsa (LBT24CS091)
  const sampleGradeCards = {
    S1: {
      courses: [
        { code: "CY 100", name: "Engineering Chemistry", credits: 4, grade: "A", points: 8.5 },
        { code: "MA 101", name: "Calculus & Linear Algebra", credits: 4, grade: "A+", points: 9.0 },
        { code: "BE 100", name: "Engineering Mechanics", credits: 3, grade: "B+", points: 8.0 },
        { code: "BE 101-05", name: "Introduction to Computing & Problem Solving", credits: 3, grade: "O", points: 10.0 },
        { code: "CY 110", name: "Engineering Chemistry Lab", credits: 1, grade: "O", points: 10.0 },
        { code: "CS 110", name: "Computer Science Workshop", credits: 1, grade: "O", points: 10.0 }
      ],
      sgpa: "8.94",
      cgpa: "8.94",
      totCredits: 16
    },
    S2: {
      courses: [
        { code: "PH 100", name: "Engineering Physics", credits: 4, grade: "A", points: 8.5 },
        { code: "MA 102", name: "Differential Equations", credits: 4, grade: "A+", points: 9.0 },
        { code: "BE 102", name: "Design & Engineering", credits: 3, grade: "B+", points: 8.0 },
        { code: "CS 102", name: "Object Oriented Programming in C++", credits: 4, grade: "O", points: 10.0 },
        { code: "PH 110", name: "Physics Lab", credits: 1, grade: "O", points: 10.0 },
        { code: "CS 112", name: "Programming Lab", credits: 1, grade: "O", points: 10.0 }
      ],
      sgpa: "8.88",
      cgpa: "8.91",
      totCredits: 17
    },
    S3: {
      courses: [
        { code: "MAT 203", name: "Discrete Mathematical Structures", credits: 4, grade: "A+", points: 9.0 },
        { code: "CST 201", name: "Data Structures", credits: 4, grade: "O", points: 10.0 },
        { code: "CST 203", name: "Logic System Design", credits: 4, grade: "A", points: 8.5 },
        { code: "CST 205", name: "Object Oriented Programming Using Java", credits: 4, grade: "O", points: 10.0 },
        { code: "EST 200", name: "Design & Engineering", credits: 2, grade: "A", points: 8.5 },
        { code: "CSL 201", name: "Data Structures Lab", credits: 2, grade: "O", points: 10.0 },
        { code: "CSL 203", name: "Object Oriented Programming Lab (Java)", credits: 2, grade: "O", points: 10.0 }
      ],
      sgpa: "9.32",
      cgpa: "9.05",
      totCredits: 22
    },
    S4: {
      courses: [
        { code: "MAT 206", name: "Graph Theory & Combinatorics", credits: 4, grade: "A", points: 8.5 },
        { code: "CST 202", name: "Computer Organization & Architecture", credits: 4, grade: "B+", points: 8.0 },
        { code: "CST 204", name: "Database Management Systems", credits: 4, grade: "A+", points: 9.0 },
        { code: "CST 206", name: "Operating Systems", credits: 3, grade: "A", points: 8.5 },
        { code: "CSL 202", name: "Digital System Lab", credits: 2, grade: "O", points: 10.0 },
        { code: "CSL 204", name: "Database Management Systems Lab", credits: 2, grade: "O", points: 10.0 }
      ],
      sgpa: "8.78",
      cgpa: "8.98",
      totCredits: 19
    }
  };

  function executeResultSearch() {
    const sem = resultSemSelect ? resultSemSelect.value : 'Select';
    const type = resultTypeSelect ? resultTypeSelect.value : 'Select';

    if (sem === 'Select' || type === 'Select') {
      showToast('Please select both Semester and Exam Type to view Grade Card.');
      if (resultEmptyHint) resultEmptyHint.style.display = 'flex';
      if (resultDetailsContent) resultDetailsContent.style.display = 'none';
      return;
    }

    if (resultEmptyHint) resultEmptyHint.style.display = 'none';
    if (!resultDetailsContent) return;

    const data = sampleGradeCards[sem] || sampleGradeCards.S3;

    resultDetailsContent.style.display = 'block';
    resultDetailsContent.innerHTML = `
      <div style="background:#ffffff; border:1px solid #d0e4f7; border-radius:6px; padding:16px; margin-bottom:14px; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:1px solid #e2e8f0; padding-bottom:12px; margin-bottom:12px;">
          <div>
            <h3 style="font-size:1.05rem; font-weight:700; color:#0f2b48;">B.Tech ${escapeHtml(sem)} (${escapeHtml(type)}) Examination Grade Card</h3>
            <span style="font-size:0.75rem; color:#64748b;">APJ Abdul Kalam Technological University &bull; 2024 Regulation</span>
          </div>
          <span style="background:#dcfce7; color:#15803d; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:12px;">STATUS: PROVISIONAL PASS</span>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:10px; font-size:0.8rem; margin-bottom:14px; background:#f8fafc; padding:10px 14px; border-radius:6px;">
          <div><strong>Student Name:</strong> Hasniya Hamsa</div>
          <div><strong>Register No:</strong> LBT24CS091</div>
          <div><strong>Institution:</strong> LBSITW, Thiruvananthapuram</div>
          <div><strong>Programme:</strong> B.Tech Computer Science</div>
        </div>

        <!-- Grade Table -->
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:0.8rem;">
            <thead>
              <tr style="background:#f1f5f9; text-align:left; color:#334155;">
                <th style="padding:8px 10px; border-bottom:1px solid #cbd5e1;">Course Code</th>
                <th style="padding:8px 10px; border-bottom:1px solid #cbd5e1;">Course Title</th>
                <th style="padding:8px 10px; border-bottom:1px solid #cbd5e1; text-align:center;">Credits</th>
                <th style="padding:8px 10px; border-bottom:1px solid #cbd5e1; text-align:center;">Grade</th>
                <th style="padding:8px 10px; border-bottom:1px solid #cbd5e1; text-align:center;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${data.courses.map(c => `
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:8px 10px; font-family:monospace; font-weight:600;">${escapeHtml(c.code)}</td>
                  <td style="padding:8px 10px; color:#1e293b;">${escapeHtml(c.name)}</td>
                  <td style="padding:8px 10px; text-align:center;">${c.credits}</td>
                  <td style="padding:8px 10px; text-align:center; font-weight:700; color:#1668c2;">${escapeHtml(c.grade)}</td>
                  <td style="padding:8px 10px; text-align:center;"><span style="color:#16a34a; font-weight:600;">Pass</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Summary Row -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:14px; padding-top:12px; border-top:1px solid #e2e8f0; font-size:0.825rem;">
          <div style="display:flex; gap:18px;">
            <span><strong>Total Credits:</strong> ${data.totCredits}</span>
            <span><strong>Semester SGPA:</strong> <span style="color:#1668c2; font-weight:700;">${data.sgpa}</span></span>
            <span><strong>Cumulative CGPA:</strong> <span style="color:#0f766e; font-weight:700;">${data.cgpa}</span></span>
          </div>
          <div style="display:flex; gap:8px;">
            <a href="https://app.ktu.edu.in" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:4px; font-size:0.775rem; color:#1668c2; font-weight:600;">
              Verify on e-Gov Portal &rarr;
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function clearResultSearch() {
    if (resultSemSelect) resultSemSelect.value = 'Select';
    if (resultTypeSelect) resultTypeSelect.value = 'Select';
    if (resultEmptyHint) resultEmptyHint.style.display = 'flex';
    if (resultDetailsContent) {
      resultDetailsContent.style.display = 'none';
      resultDetailsContent.innerHTML = '';
    }
    showToast('Result filters cleared.');
  }

  if (btnResultSearch) btnResultSearch.addEventListener('click', executeResultSearch);
  if (btnResultClear) btnResultClear.addEventListener('click', clearResultSearch);

  // Result Sidebar Link Handlers
  const sideResGradeCard = document.getElementById('side-result-gradecard');
  const sideResPending = document.getElementById('side-result-pending');
  const sideResChangeReq = document.getElementById('side-result-change-req');
  const sideResLowPass = document.getElementById('side-result-low-pass');
  const sideResReports = document.getElementById('side-result-reports');

  if (sideResGradeCard) {
    sideResGradeCard.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('result');
    });
  }
  if (sideResPending) {
    sideResPending.addEventListener('click', () => {
      showToast('Pending Results: All published results for Hasniya Hamsa (LBT24CS091) are up to date.');
    });
  }
  if (sideResChangeReq) {
    sideResChangeReq.addEventListener('click', () => {
      showToast('Grade Change Request: Scrutiny and revaluation applications can be initiated on the official e-Gov portal.');
    });
  }
  if (sideResLowPass) {
    sideResLowPass.addEventListener('click', () => {
      showToast('Request Low Pass Grade: Concession rules apply to eligible candidate categories under university statutes.');
    });
  }
  if (sideResReports) {
    sideResReports.addEventListener('click', () => {
      showToast('Official consolidated grade transcripts can be generated via university institutional login.');
    });
  }


  /* ------------------------------------------------------------------------
   * 4. DASHBOARD SHORTCUTS & INTERACTION FEEDBACK
   * ------------------------------------------------------------------------ */
  const feeClick = document.getElementById('fee-click-here');
  if (feeClick) {
    feeClick.addEventListener('click', () => {
      showToast('Fee Details: All semester tuition and examination dues are cleared for 2024-2025.');
    });
  }

  const surakshaLink = document.getElementById('suraksha-profile-link');
  if (surakshaLink) {
    surakshaLink.addEventListener('click', () => {
      switchTab('suraksha');
    });
  }

  const viewAllAlerts = document.getElementById('view-all-alerts-btn');
  const sideAlertsLink = document.getElementById('side-alerts-link');
  if (viewAllAlerts) {
    viewAllAlerts.addEventListener('click', () => {
      showToast('Alert 1: S4 Exam Registration Open | Alert 2: Revaluation Deadline 12 Oct | Alert 3: Academic Calendar Updated.');
    });
  }
  if (sideAlertsLink) {
    sideAlertsLink.addEventListener('click', () => {
      showToast('Alert 1: S4 Exam Registration Open | Alert 2: Revaluation Deadline 12 Oct | Alert 3: Academic Calendar Updated.');
    });
  }

  const grievanceForm = document.getElementById('grievance-form');
  if (grievanceForm) {
    grievanceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ticketId = 'KTU-GRV-' + Math.floor(100000 + Math.random() * 900000);
      grievanceForm.reset();
      showToast(`Grievance submitted successfully! Ticket Reference ID: ${ticketId}`);
    });
  }

  // Academic Calendar Modal Controls
  const sideCalLink = document.getElementById('side-academic-calendar-link');
  const calModal = document.getElementById('academic-calendar-modal');
  const closeCalBtn = document.getElementById('close-cal-modal-btn');
  const closeCalFooterBtn = document.getElementById('close-cal-footer-btn');
  const calOverlay = document.getElementById('cal-modal-overlay');
  const calTabEven = document.getElementById('cal-tab-even');
  const calTabOdd = document.getElementById('cal-tab-odd');
  const calContentEven = document.getElementById('cal-content-even');
  const calContentOdd = document.getElementById('cal-content-odd');

  function openCalModal() {
    if (calModal) {
      calModal.style.display = 'flex';
    }
  }

  function closeCalModal() {
    if (calModal) {
      calModal.style.display = 'none';
    }
  }

  if (sideCalLink) sideCalLink.addEventListener('click', openCalModal);
  if (closeCalBtn) closeCalBtn.addEventListener('click', closeCalModal);
  if (closeCalFooterBtn) closeCalFooterBtn.addEventListener('click', closeCalModal);
  if (calOverlay) calOverlay.addEventListener('click', closeCalModal);

  if (calTabEven && calTabOdd) {
    calTabEven.addEventListener('click', () => {
      calTabEven.classList.add('active');
      calTabEven.style.background = '#1668c2';
      calTabEven.style.color = '#fff';
      calTabOdd.classList.remove('active');
      calTabOdd.style.background = '#f1f5f9';
      calTabOdd.style.color = '#475569';
      if (calContentEven) calContentEven.style.display = 'block';
      if (calContentOdd) calContentOdd.style.display = 'none';
    });

    calTabOdd.addEventListener('click', () => {
      calTabOdd.classList.add('active');
      calTabOdd.style.background = '#1668c2';
      calTabOdd.style.color = '#fff';
      calTabEven.classList.remove('active');
      calTabEven.style.background = '#f1f5f9';
      calTabEven.style.color = '#475569';
      if (calContentEven) calContentEven.style.display = 'none';
      if (calContentOdd) calContentOdd.style.display = 'block';
    });
  }


  /* ------------------------------------------------------------------------
   * 5. AI HELP CHATBOT
   * ------------------------------------------------------------------------ */
  const chatModal = document.getElementById('chatbot-modal');
  const chatTrigger = document.getElementById('floating-chat-trigger');
  const navAiTab = document.getElementById('nav-ai-assistant-tab');
  const chatCloseBtn = document.getElementById('chat-close-btn');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');

  function openChat() {
    if (chatModal) {
      chatModal.classList.add('open');
      if (chatInput) chatInput.focus();
    }
  }

  function closeChat() {
    if (chatModal) chatModal.classList.remove('open');
  }

  if (chatTrigger) chatTrigger.addEventListener('click', openChat);
  if (navAiTab) navAiTab.addEventListener('click', openChat);
  if (chatCloseBtn) chatCloseBtn.addEventListener('click', closeChat);

  // Suggested chips
  document.querySelectorAll('.suggestions-chips .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      handleChatQuery(query);
    });
  });

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = chatInput.value.trim();
      if (!query) return;
      chatInput.value = '';
      handleChatQuery(query);
    });
  }

  function handleChatQuery(query) {
    openChat();
    // User bubble
    appendChatMsg(query, 'user');

    // Assistant reply with typing delay
    setTimeout(() => {
      const match = findKnowledge(query);
      if (match) {
        appendChatMsg(match.reply, 'assistant', match.actionLink, match.actionText);
      } else {
        appendChatMsg(
          "For official student inquiries or record verification, please contact KTU support at 91889922754 or visit ktu.edu.in.",
          'assistant',
          '#grievance',
          'Open Grievance Desk'
        );
      }
    }, 380);
  }

  function appendChatMsg(text, sender, actionLink = null, actionText = null) {
    if (!chatMessages) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const row = document.createElement('div');
    row.className = `message-bubble-row ${sender}`;

    let actionBtn = '';
    if (actionLink && actionText) {
      actionBtn = `
        <div>
          <button class="msg-action-btn" data-chat-nav="${actionLink}">
            <span>${escapeHtml(actionText)}</span>
          </button>
        </div>
      `;
    }

    row.innerHTML = `
      <div class="message-bubble">
        ${escapeHtml(text).replace(/\n/g, '<br>')}
        ${actionBtn}
      </div>
      <span class="msg-time">${time}</span>
    `;

    chatMessages.appendChild(row);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const btn = row.querySelector('[data-chat-nav]');
    if (btn) {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-chat-nav').replace('#', '');
        if (target === 'exams') switchTab('exam');
        else if (target === 'results') switchTab('result');
        else if (target === 'contact') switchTab('grievance');
        else switchTab(target);
      });
    }
  }

  function findKnowledge(query) {
    const q = query.toLowerCase();
    for (const item of KTU_DATA.chatbotKnowledge) {
      for (const t of item.triggers) {
        if (q.includes(t.toLowerCase())) return item;
      }
    }
    return null;
  }

  /* ------------------------------------------------------------------------
   * 6. UTILITIES
   * ------------------------------------------------------------------------ */
  let toastTimeout = null;
  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(50px)';
    }, 3500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

});
