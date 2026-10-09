# KTU Smart Portal — Redesign Prototype (Official UI/UX Replica)

A pixel-faithful, responsive replica and enhancement of the **APJ Abdul Kalam Technological University (KTU)** Student Portal matching the official layout:
* **Login Screen:** Full-screen replica with campus backdrop, centered card, KTU emblem, username & password inputs, password reveal toggle, remember me checkbox, and quick demo credentials pill. CREATED BY TEAM WEBEX .
  * **Login Credentials:**
    * **Username / Register Number:** `LBT24CS091`
    * **Password:** `12345`
  * **Session & Logout:** Successful authentication transitions smoothly into the student dashboard. Clicking **Logout** in the top header clears the session and returns to the login screen.
* **Top Header:** University emblem, "APJ Abdul Kalam Technological University", "Innovate | Educate | Empower", watermark building facade, notification bell with badge `3`, "Welcome Hasniya Hamsa ▾", "Change Password", and "Logout".
* **Support Banner:** "Your contact number for support from University is : 91889922754" with loudspeaker icon and dismiss button.
* **Navigation Tabs:** Home, Student, Exam, Result, Grievance, Forms, Suraksha, and AI Assistant.
* **Home Page:** Two-column Administration sidebar + Dashboard with Welcome Hasniya Hamsa card (LBT24CS091), Fee Details card, Suraksha insurance card, Alerts, and Academic Calendar modal.
* **Exam Page:** Exam Management sidebar + Examinations filter card (Semester dropdown S1–S8 ascending, Exam Type dropdown with Regular, Supplementary, Honors, Minors, Revaluation) with alert banner and notifications.
* **Result Page:** Result Management sidebar (Semester Grade Card, Pending Results, Exam Grade Change Request, Request Low Pass Grade, Reports) + Semester Grade Card filter card (`Select`, `S1`–`S8`, and `Exam Type` dropdown) with interactive course-wise grade sheet, SGPA/CGPA breakdown, and verification links.

---

## 🚀 Quick Start / How to Run

The development server is already active and running. If you ever need to start or restart it manually:

```powershell
# Navigate to the project directory
cd "C:\Users\ALAKANANDHA\.gemini\antigravity\scratch\ktu-smart-portal"

# Start the local development server
python -m http.server 8000
```

Open your browser at:
👉 **[http://localhost:8000](http://localhost:8000)** (or `http://127.0.0.1:8000`)

> **Recommended Workspace Setting:** Open `C:\Users\ALAKANANDHA\.gemini\antigravity\scratch\ktu-smart-portal` as your active workspace folder in the Antigravity IDE.

---

## 🌟 Key Features Implemented

### 1. Modern Dashboard & Visual Architecture
* **Academic Design System:** Deep navy palette (`#0b1f3a`, `#102a4e`), crisp white cards, slate grays, accessible contrast, and smooth transitions.
* **Top Navigation:** Instant access to Home, Exams, Results, News & Updates, Contact Us, and mobile collapsible drawer.
* **Hero Banner:** "Welcome to KTU Smart Portal — Your academic information, simplified" with live meta indicators.
* **Quick Access Cards:** 4 high-priority shortcuts directly to Examinations, Results, Announcements, and AI Assistant.
* **Recent University Announcements Feed:** Highlights top 3 circulars with one-click navigation to the full news feed.
* **Quick Actions Toolbar:** One-tap triggers to jump into Semester 6 timetables, supplementary results, or revaluation queries.

### 2. Semester-Based Examination Navigation
* **Semester Filter Pills:** Instant filtering from **Semester 1 (S1)** through **Semester 8 (S8)** plus an "All Semesters" view.
* **Multi-Criteria Filter Bar:**
  - Academic Year selector (`2025–26`, `2024–25`, All)
  - Examination Type selector (`Regular`, `Supplementary`, `Revaluation`, `Improvement`, All)
  - Real-time keyword search with instant debounced matching.
* **Sample Notification Cards:** Clean cards with semester tag, examination type badge, publish date, official notification number, and link to official KTU documents.
* **Empty State:** Friendly empty state illustration with a one-click "Reset Filters" button when no results match.

### 3. Four-Category Results System
* **4 Distinct Tabs:**
  1. **Semester Grade Card:** Regular SGPA/CGPA releases, digital grade sheets with QR verification.
  2. **Minor Degree:** 20-credit inter-disciplinary specialization status (min 3.0 CGPA prerequisite).
  3. **Honours Degree:** Advanced departmental research and honors track (>= 8.5 CGPA benchmark).
  4. **Supplementary:** Backlog clearance announcements, scrutiny windows, and answer book rechecking.
* **Direct Official Portal Access:** Prominent link to the verified official KTU e-Governance portal (`https://app.ktu.edu.in`).
* **Privacy & Security Boundaries:** Honest prototype demarcation — does not fabricate private student marks or fake roll numbers.

### 4. Interactive AI Help Chatbot ("KTU Smart Assistant")
* **Dual Access:** Accessible from the top header button, the dashboard card, and a floating launcher pill at bottom-right.
* **Verified Predefined Knowledge Base:** Context-aware responses with intelligent keyword matching for:
  - Finding exam timetables and hall tickets
  - Checking supplementary and revaluation results
  - Minor and Honours degree regulations
  - Accessing university news and academic calendars
  - Official helpline contacts
* **Clickable Suggested Questions:** One-tap inquiry chips that immediately prompt the assistant.
* **Interactive Section Navigation Buttons:** Chatbot responses include embedded buttons that immediately take the user to the corresponding portal section.
* **Natural UX:** Chat history, typing indicator animation (bouncing dots), message timestamps, and chat reset functionality.
* **Honest Fallbacks:** Explicitly guides students to `ktu.edu.in` and official helpdesks for confidential or unverified matters.

### 5. KTU News & Updates
* **Category Filtering:** Filter announcements by `All`, `Academic`, `Examination`, or `University Notice`.
* **Standardized Cards:** Category pill, publication date, title, summary, sample tag, and verified external links to `https://ktu.edu.in`.

### 6. Official Contact Us & Student Query Helpdesk
* **Verified University Directory:** APJ Abdul Kalam Technological University headquarters at CET Campus, Thiruvananthapuram, Kerala – 695016.
* **Helpline Details:** Phone helplines (`0471 2785699 / 2598122`), email (`support@ktu.edu.in`), and operational hours.
* **Demonstration Query Form:** Working query submission prototype that validates inputs and issues a confirmation toast with a simulated ticket reference ID (e.g. `KTU-TKT-XXXXXX`).

---

## 🛠️ Tech Stack & Philosophy
* **HTML5:** Semantic, accessible ARIA roles, clean structure.
* **CSS3:** Custom academic design system with CSS custom properties, responsive Flexbox and Grid layouts, zero external CSS dependencies.
* **Vanilla JavaScript:** Fast, modular, zero-dependency client architecture (`data.js` + `app.js`).
* **Python 3:** Lightweight HTTP server (`http.server`) for instant execution.
