/**
 * KTU Smart Portal - Prototype Dataset
 * Realistic sample data clearly tagged for competition prototype demonstration.
 * Official university URLs point to verified public KTU domains (ktu.edu.in / app.ktu.edu.in).
 */

const KTU_DATA = {
  // Sample Examination Notifications
  exams: [
    {
      id: "EX-2026-081",
      title: "B.Tech S6 (R&S) Exam May 2026 - Registration Schedule & Fee Details",
      semester: 6,
      academicYear: "2025-26",
      examType: "Regular",
      branch: "All Engineering Branches",
      date: "04 Oct 2026",
      notificationNo: "KTU/EX-I/4421/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Student registration through KTU portal for B.Tech Semester 6 Regular (2019 scheme) and Supplementary examinations."
    },
    {
      id: "EX-2026-080",
      title: "B.Tech S8 (Regular) Final Semester Examination Schedule June 2026",
      semester: 8,
      academicYear: "2025-26",
      examType: "Regular",
      branch: "All Engineering Branches",
      date: "02 Oct 2026",
      notificationNo: "KTU/EX-I/4410/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Detailed timetable published for B.Tech Semester 8 Comprehensive Viva, Project Evaluation, and theory exams."
    },
    {
      id: "EX-2026-079",
      title: "B.Tech S4 (Regular & Supplementary) Examination Time Table April 2026",
      semester: 4,
      academicYear: "2025-26",
      examType: "Regular",
      branch: "All Engineering Branches",
      date: "28 Sep 2026",
      notificationNo: "KTU/EX-II/3890/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Slot-wise exam timetable published for S4 B.Tech 2019 Scheme & 2024 Scheme examinations."
    },
    {
      id: "EX-2026-078",
      title: "B.Tech S2 Supplementary Examination - Hall Ticket Generation",
      semester: 2,
      academicYear: "2025-26",
      examType: "Supplementary",
      branch: "Circuit & Non-Circuit Branches",
      date: "24 Sep 2026",
      notificationNo: "KTU/EX-II/3802/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Eligible candidates may download their hall tickets from college login or e-Gov portal for S2 supplementary sessions."
    },
    {
      id: "EX-2026-077",
      title: "B.Tech S5 Supplementary Examination - Registration Window Extended",
      semester: 5,
      academicYear: "2025-26",
      examType: "Supplementary",
      branch: "All Engineering Branches",
      date: "19 Sep 2026",
      notificationNo: "KTU/EX-III/3512/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Last date for supplementary exam registration for Semester 5 students without fine extended by three days."
    },
    {
      id: "EX-2026-076",
      title: "B.Tech S3 Revaluation Result Notification & Answer Script Scrutiny",
      semester: 3,
      academicYear: "2025-26",
      examType: "Revaluation",
      branch: "All Engineering Branches",
      date: "15 Sep 2026",
      notificationNo: "KTU/EX-REV/2911/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Revaluation results of B.Tech S3 December 2025 examinations have been published on the e-Governance portal."
    },
    {
      id: "EX-2026-075",
      title: "B.Tech S1 Induction & First Semester Regular Examination Instructions",
      semester: 1,
      academicYear: "2025-26",
      examType: "Regular",
      branch: "First Year B.Tech",
      date: "10 Sep 2026",
      notificationNo: "KTU/EX-I/3100/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Advisory and code of conduct for Semester 1 (2024 Scheme) students appearing for university theory examinations."
    },
    {
      id: "EX-2026-074",
      title: "B.Tech S7 Supplementary Examination Schedule - Phase II",
      semester: 7,
      academicYear: "2025-26",
      examType: "Supplementary",
      branch: "All Engineering Branches",
      date: "05 Sep 2026",
      notificationNo: "KTU/EX-II/2810/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Phase II timetable notification for final year supplementary exams across Kerala examination centers."
    },
    {
      id: "EX-2025-055",
      title: "B.Tech S6 Supplementary Examination Timetable Winter 2025",
      semester: 6,
      academicYear: "2024-25",
      examType: "Supplementary",
      branch: "All Engineering Branches",
      date: "18 Dec 2025",
      notificationNo: "KTU/EX-I/2199/2025",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Winter supplementary timetable for 2019 scheme semester 6 candidates."
    },
    {
      id: "EX-2026-083",
      title: "B.Tech S6 Honors Degree Examination - Advanced Theory & Evaluation Schedule",
      semester: 6,
      academicYear: "2025-26",
      examType: "Honors",
      branch: "All Engineering Branches",
      date: "06 Oct 2026",
      notificationNo: "KTU/EX-HN/4502/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Timetable and registration schedule for candidates enrolled in B.Tech Honors degree advanced courses."
    },
    {
      id: "EX-2026-082",
      title: "B.Tech S5 Minors Degree Examination - Inter-Disciplinary Basket Timetable",
      semester: 5,
      academicYear: "2025-26",
      examType: "Minors",
      branch: "Inter-Disciplinary Tracks",
      date: "05 Oct 2026",
      notificationNo: "KTU/EX-MN/4491/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Exam schedule for candidates appearing for Minor specialization theory courses across affiliated institutions."
    },
    {
      id: "EX-2026-084",
      title: "B.Tech S3 & S4 Honors Degree Course Registration & Examination Guidelines",
      semester: 3,
      academicYear: "2025-26",
      examType: "Honors",
      branch: "Circuit & Non-Circuit Branches",
      date: "27 Sep 2026",
      notificationNo: "KTU/EX-HN/3910/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Registration schedule for scholars maintaining >= 8.5 CGPA appearing for departmental Honors papers."
    },
    {
      id: "EX-2026-085",
      title: "B.Tech S3 Minors Degree Theory Examination Notification",
      semester: 3,
      academicYear: "2025-26",
      examType: "Minors",
      branch: "All Engineering Branches",
      date: "26 Sep 2026",
      notificationNo: "KTU/EX-MN/3895/2026",
      officialUrl: "https://ktu.edu.in",
      isSample: true,
      description: "Official slot notification for S3 students taking minor basket examinations."
    }
  ],

  // 4 Result Categories
  results: {
    gradeCard: [
      {
        id: "RES-GC-01",
        programme: "B.Tech (Bachelor of Technology)",
        semester: "Semester 6 (2019 Scheme)",
        regulation: "2019 Regulation",
        publishDate: "01 Oct 2026",
        status: "Published Officially",
        isSample: true,
        summary: "Digital Semester Grade Cards for S6 Regular/Supplementary examinations published.",
        instructions: "Students can log in to their student portal profile on the official e-Gov system (app.ktu.edu.in) to download verified digital grade sheets with QR authentication.",
        portalUrl: "https://app.ktu.edu.in"
      },
      {
        id: "RES-GC-02",
        programme: "B.Tech (Bachelor of Technology)",
        semester: "Semester 4 (2019 & 2024 Scheme)",
        regulation: "2019 / 2024 Regulation",
        publishDate: "20 Sep 2026",
        status: "Published Officially",
        isSample: true,
        summary: "Grade sheets and SGPA calculation completed for Semester 4 examinations.",
        instructions: "Check provisional grades on the college nodal dashboard or student account. Revaluation registration window opens within 7 days of publication.",
        portalUrl: "https://app.ktu.edu.in"
      },
      {
        id: "RES-GC-03",
        programme: "B.Tech (Bachelor of Technology)",
        semester: "Semester 2 (2024 Scheme)",
        regulation: "2024 Regulation",
        publishDate: "10 Sep 2026",
        status: "Published Officially",
        isSample: true,
        summary: "Results of First Year Semester 2 examinations published across all engineering disciplines.",
        instructions: "Digital grade cards are available for download under student logins. Contact institutional exam cell for discrepancies.",
        portalUrl: "https://app.ktu.edu.in"
      }
    ],

    minor: [
      {
        id: "RES-MN-01",
        programme: "B.Tech Minor Programme",
        semester: "Semester 5 & 6 Track",
        regulation: "2019 Scheme",
        publishDate: "27 Sep 2026",
        status: "Track Results Published",
        isSample: true,
        summary: "Minor specialization evaluation completed for Artificial Intelligence, Data Science, and Robotics tracks.",
        instructions: "Students pursuing Minor degrees must secure an additional 20 credits with minimum required CGPA of 3.0 or equivalent. Verify your basket completion on the e-Gov portal.",
        portalUrl: "https://app.ktu.edu.in"
      },
      {
        id: "RES-MN-02",
        programme: "B.Tech Minor Programme",
        semester: "Semester 7 Track Evaluation",
        regulation: "2019 Scheme",
        publishDate: "14 Sep 2026",
        status: "Credits Verification Open",
        isSample: true,
        summary: "Inter-disciplinary Minor degree basket clearance status updated.",
        instructions: "Review the published eligibility list of candidates completing 20 credits in allied departments.",
        portalUrl: "https://app.ktu.edu.in"
      }
    ],

    honours: [
      {
        id: "RES-HN-01",
        programme: "B.Tech Honours Degree",
        semester: "Semester 6 & 8 Evaluation",
        regulation: "2019 Regulation",
        publishDate: "25 Sep 2026",
        status: "Eligibility Verified",
        isSample: true,
        summary: "B.Tech Honours candidate evaluation for advanced departmental electives and research projects.",
        instructions: "To graduate with an Honours degree, students must maintain a CGPA of 8.5 or higher with no history of backlogs and earn 20 additional credits in advanced core subjects.",
        portalUrl: "https://app.ktu.edu.in"
      },
      {
        id: "RES-HN-02",
        programme: "B.Tech Honours Degree",
        semester: "Semester 4 Entry Review",
        regulation: "2024 Regulation",
        publishDate: "08 Sep 2026",
        status: "List of Registered Scholars",
        isSample: true,
        summary: "Semester 4 candidates meeting the 8.5 CGPA benchmark for Honours enrollment.",
        instructions: "Official enrollment list approved by the Academic Council. Candidates can verify course mapping under the academic tab.",
        portalUrl: "https://app.ktu.edu.in"
      }
    ],

    supplementary: [
      {
        id: "RES-SUP-01",
        programme: "B.Tech Supplementary Examination",
        semester: "Semester 1, 2 & 3 Combined",
        regulation: "2019 & 2015 Schemes",
        publishDate: "03 Oct 2026",
        status: "Results Declared",
        isSample: true,
        summary: "Supplementary evaluation concluded for lower semesters; updated grade sheets generated.",
        instructions: "Students can review updated credit accumulation on their portal transcript. Revaluation applications open from 06 Oct 2026 via institutional login.",
        portalUrl: "https://app.ktu.edu.in"
      },
      {
        id: "RES-SUP-02",
        programme: "B.Tech Supplementary Examination",
        semester: "Semester 5 Supplementary",
        regulation: "2019 Scheme",
        publishDate: "18 Sep 2026",
        status: "Results Declared",
        isSample: true,
        summary: "Semester 5 supplementary results and scrutiny guidelines published.",
        instructions: "Answer book copy request and scrutiny fee payment instructions available on the KTU official examination portal.",
        portalUrl: "https://app.ktu.edu.in"
      }
    ]
  },

  // News and University Updates
  news: [
    {
      id: "NEWS-2026-01",
      title: "KTU Academic Calendar for 2026-2027 Odd & Even Semesters Released",
      category: "Academic",
      date: "03 Oct 2026",
      summary: "The Academic Council of APJ Abdul Kalam Technological University has released the official calendar including commencement of classes, internal evaluations, and semester breaks.",
      isSample: true,
      officialUrl: "https://ktu.edu.in"
    },
    {
      id: "NEWS-2026-02",
      title: "Notification for B.Tech 2024 Scheme Curriculum Revision & Lab Modernization",
      category: "Academic",
      date: "29 Sep 2026",
      summary: "Updated syllabus frameworks covering emerging technologies, industry-led micro-credentials, and ethical AI components for all affiliated colleges.",
      isSample: true,
      officialUrl: "https://ktu.edu.in"
    },
    {
      id: "NEWS-2026-03",
      title: "Standard Operating Procedure (SOP) for Online Exam Registration & Grievance Redressal",
      category: "Examination",
      date: "25 Sep 2026",
      summary: "KTU Examination Wing issues streamlined guidelines to address payment gateways failures, subject code mismatches, and photo upload discrepancies.",
      isSample: true,
      officialUrl: "https://ktu.edu.in"
    },
    {
      id: "NEWS-2026-04",
      title: "University Level Innovation Challenge 2026 - Registration Open for Affiliated Colleges",
      category: "University Notice",
      date: "21 Sep 2026",
      summary: "Industry Institute Interaction Cell (IIIC) invites student engineering prototypes for incubation funding up to Rs. 2 Lakhs.",
      isSample: true,
      officialUrl: "https://ktu.edu.in"
    },
    {
      id: "NEWS-2026-05",
      title: "Guidelines for Inter-College Sports Meet and Cultural Festival 2026-27",
      category: "University Notice",
      date: "16 Sep 2026",
      summary: "Schedule, zonal clusters, and student eligibility rules for upcoming university athletics and arts competitions.",
      isSample: true,
      officialUrl: "https://ktu.edu.in"
    },
    {
      id: "NEWS-2026-06",
      title: "Advisory on Revaluation, Answer Script Copying, and Result Scrutiny Timelines",
      category: "Examination",
      date: "11 Sep 2026",
      summary: "Detailed advisory clarifying strictly enforced turnaround windows for student revaluation requests post result announcement.",
      isSample: true,
      officialUrl: "https://ktu.edu.in"
    }
  ],

  // Verified Official Contact Information
  contact: {
    university: "APJ Abdul Kalam Technological University",
    campus: "CET Campus, MBA Block",
    city: "Thiruvananthapuram, Kerala - 695016",
    officialWebsite: "https://ktu.edu.in",
    egovPortal: "https://app.ktu.edu.in",
    examEnquiryEmail: "support@ktu.edu.in",
    examWingPhone: "0471 2785699 / 2598122",
    helplineHours: "Monday to Saturday, 9:30 AM to 5:00 PM (IST)",
    disclaimer: "This is a student portal prototype. Live personal student records and grade transactions require authentication on the official e-Gov portal."
  },

  // Knowledge base for AI Help Chatbot
  chatbotKnowledge: [
    {
      triggers: ["semester exam", "exam notification", "find exam", "timetable", "schedule", "when is exam", "hall ticket", "exam date"],
      reply: "To find your examination notifications and timetables:\n1. Open the **Exams** section in the top menu.\n2. Filter by your specific semester (e.g., S1 to S8).\n3. Choose your exam type (Regular, Supplementary, or Revaluation).\n4. View matching notifications and download official schedule PDFs from the linked official KTU portal.",
      actionLink: "#exams",
      actionText: "Go to Exams"
    },
    {
      triggers: ["supplementary result", "supple", "supplementary", "backlog", "supply result"],
      reply: "To check Supplementary examination results:\n1. Click the **Results** tab in the navigation.\n2. Select the **Supplementary** category card.\n3. Browse published result notifications by scheme (2019/2024).\n4. For individual student marks and scorecards, follow the link to the official KTU e-Governance portal (app.ktu.edu.in).",
      actionLink: "#results",
      actionText: "View Supplementary Results"
    },
    {
      triggers: ["grade card", "sgpa", "cgpa", "semester grade", "marks", "marksheet"],
      reply: "In this portal, navigate to the **Results** section and select **Semester Grade Card**.\n\n*Important:* Individual confidential marks, SGPA/CGPA, and student transcripts require logging in to the official KTU student e-Governance portal (app.ktu.edu.in) using your registered university credentials.",
      actionLink: "#results",
      actionText: "Open Results Section"
    },
    {
      triggers: ["minor", "minor degree", "minor program", "minor credits"],
      reply: "For B.Tech Minor results and regulations:\n- Go to **Results** > **Minor** tab.\n- A Minor degree requires completing 20 additional credits in a specified allied branch.\n- Minimum prerequisite CGPA is typically 3.0 at enrollment without active backlogs.\n- Category-specific notifications and credit status are listed there.",
      actionLink: "#results",
      actionText: "View Minor Results"
    },
    {
      triggers: ["honours", "honors", "honours degree", "honours criteria"],
      reply: "For B.Tech Honours degree information:\n- Open **Results** > **Honours** tab.\n- Students require maintaining a minimum CGPA of 8.5 with no history of backlogs and must earn 20 additional credits in advanced core subjects.\n- Check publication notices for enrolled scholars in the Honours category.",
      actionLink: "#results",
      actionText: "View Honours Results"
    },
    {
      triggers: ["academic calendar", "calendar", "class start", "semester schedule", "internal test date", "last working day"],
      reply: "The KTU Academic Calendar 2024–2025 has been released!\n- Even Semesters (S2, S4, S6, S8): Classes commenced 15 Jan 2025, Internal Test 2 from 21 Apr 2025, University End Semester Exams commence 19 May 2025.\n- You can view the full schedule directly from the **Academic Calendar** link in the Administration panel on your Home page.",
      actionLink: "#home",
      actionText: "Open Academic Calendar"
    },
    {
      triggers: ["announcement", "news", "updates", "circular", "notification"],
      reply: "You can find all official KTU announcements, circulars, and academic calendars in the **News & Updates** section.\n- Filter by Academic, Examination, or University Notice.\n- Each card links directly to the official KTU notification source at ktu.edu.in.",
      actionLink: "#news",
      actionText: "View News & Updates"
    },
    {
      triggers: ["contact", "phone", "email", "helpline", "helpdesk", "address", "grievance", "support"],
      reply: "To contact the university or exam support:\n- Visit our **Contact Us** page.\n- APJ Abdul Kalam Technological University, CET Campus, Thiruvananthapuram 695016.\n- Exam helpline: 0471 2785699 / 2598122 (Mon-Sat, 9:30 AM - 5:00 PM).\n- Official websites: ktu.edu.in & app.ktu.edu.in.",
      actionLink: "#contact",
      actionText: "Open Contact Us"
    },
    {
      triggers: ["revaluation", "scrutiny", "recheck", "copy of answer"],
      reply: "For revaluation and answer script scrutiny:\n1. Revaluation opens typically within 5-7 days after provisional result declaration.\n2. Applications must be submitted through your student login on app.ktu.edu.in.\n3. The prescribed fee per paper must be paid online.\n4. Check the **Exams** tab for the latest revaluation deadline circulars.",
      actionLink: "#exams",
      actionText: "Check Exam Notices"
    },
    {
      triggers: ["what is this portal", "about", "prototype", "who are you", "hello", "hi", "hey"],
      reply: "Hello! I am the KTU Smart Assistant. This redesigned student portal prototype helps you easily find semester exam schedules, four distinct result categories (Grade Card, Minor, Honours, Supplementary), latest university news, and verified contact points. How can I help you today?",
      actionLink: "#dashboard",
      actionText: "Explore Dashboard"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = KTU_DATA;
}
