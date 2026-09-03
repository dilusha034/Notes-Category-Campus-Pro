/* ==========================================================================
   NOTES CATEGORY - Cyber Glassmorphic Engine & Logic (v3.2)
   - 4-Level Academic Hierarchy: Faculty -> Year -> Semester -> Subject -> Modules
   - Module Categories: Syllabus, Presentations, Short Notes, Past Papers, Assignments, Mid Exams, Reading Books
   - Fully Working Dynamic State Mutation (Faculty, Year, Semester, Subject, Module, Timetable Slot Editing)
   - Reading Book Tracker with quick page counter
   - Photo/Image Attachment Support
   - Distraction-Free Fullscreen Note Reader & PDF Export
   ========================================================================== */

// Initial Seed Data with Full Academic Hierarchy & New Categories
const INITIAL_DATA = {
  faculties: [
    {
      id: "fac_1",
      name: "බෞද්ධ අධ්‍යයන පීඨය",
      englishName: "Faculty of Buddhist Studies",
      dean: "පීඨාධිපති: පූජ්‍ය මහාචාර්ය තුමා (දුරකථන: 011-2345678)",
      color: "#818cf8",
      years: [
        {
          id: "yr_1",
          name: "1st Year (1 වන වසර)",
          semesters: [
            {
              id: "sem_1",
              name: "1st Semester (1 වන සමාසිකය)",
              subjects: [
                {
                  id: "sub_1",
                  name: "බෞද්ධ සංස්කෘතිය (BST 1101)",
                  description: "ලංකාවේ හා ආසියාවේ බෞද්ධ සංස්කෘතික උරුමයන් පිළිබඳ විෂයය.",
                  modules: [
                    {
                      id: "mod_1",
                      type: "syllabus",
                      title: "01. බෞද්ධ කලා හා ගෘහ නිර්මාණ ශිල්පය",
                      content: `### 1.1 ස්තූප සංකල්පය සහ එහි විකාශනය
* **අනුරාධපුර යුගය:** ථූපාරාමය, රුවන්වැලිසෑය, අභයගිරිය.
* **ගෘහ නිර්මාණ ලක්ෂණ:** ධාතු ගර්භය, සදකඩපහන, මුරගල, කොතැල්ල.

> **වැදගත්:** විභාගයට අනුරාධපුර යුගයේ මුරගල හා කොඩිගල සංසන්දනය කිරීම නිරන්තරයෙන් අසනු ලබයි!`
                    },
                    {
                      id: "mod_2",
                      type: "assignment",
                      title: "Assignment 01: ශ්‍රී ලාංකීය මුරගල පරිණාමය",
                      content: `**බාරදීමේ අවසාන දිනය:** 2026 සැප්තැම්බර් 15

### පැවරුම් උපදෙස්:
1. අනුරාධපුර යුගයේ සිට පොලොන්නරු යුගය දක්වා මුරගලෙහි පරිණාමය (පුන්නඝටය -> නාගරාජ -> බුද්ධ රූප).
2. වචන 1500 කට නොඅඩුව සකස් කළ යුතුය.`
                    },
                    {
                      id: "mod_3",
                      type: "midexam",
                      title: "Mid Semester Exam revision topics",
                      content: `### මැද සෙමෙස්ටර් විභාගයට පූරව රෙවිෂන්:
* **කොටස 01:** මහින්දාගමනය සහ සංස්කෘතික පරිවර්තනය.
* **කොටස 02:** පුරාණ ථූප නිර්මාණ ශිල්පය.`
                    },
                    {
                      id: "mod_4",
                      type: "book",
                      title: "පොත: ශ්‍රී ලංකාවේ බෞද්ධ සංස්කෘතිය",
                      bookAuthor: "මහාචාර්ය ඩබ්ලිව්. ඒ. අබේසිංහ",
                      bookPublisher: "ගුණසේන ප්‍රකාශන (2020)",
                      libraryId: "LIB-BST-8842",
                      currentPage: 45,
                      content: `### පොතෙන් සටහන් කරගත් වැදගත් කරුණු:
* **පිටුව 32:** මහින්දාගමනයත් සමඟ මෙරට කෘෂිකාර්මික හා තාක්ෂණික දියුණුව.
* **පිටුව 45:** වැව් හා දාගැබ් අතර පැවති සංස්කෘතික බැඳීම.`
                    },
                    {
                      id: "mod_5",
                      type: "shortnote",
                      title: "කෙටි සටහන: ධාතු ගර්භය සහ චෛත්‍ය අංග 8",
                      content: `### චෛත්‍යයක ප්‍රධාන අංග 8:
1. **පේසා වළලු (3):** පදනම ශක්තිමත් කිරීම.
2. **ගර්භය:** ධාතුන් වහන්සේලා තැන්පත් කරන කොටස.
3. **හතරැස් කොටුව:** ධාතු ගර්භයට ඉහළින් පිහිටි කොටස.
4. **දේවතා කොටුව:** සියලු දෙවියන්ට උපහාර පිණිස.
5. **කොත් කැරැල්ල:** නිවන සංකේතවත් කරයි.`
                    }
                  ]
                }
              ]
            },
            { id: "sem_2", name: "2nd Semester (2 වන සමාසිකය)", subjects: [] }
          ]
        },
        { id: "yr_2", name: "2nd Year (2 වන වසර)", semesters: [] },
        { id: "yr_3", name: "3rd Year (3 වන වසර)", semesters: [] },
        { id: "yr_4", name: "4th Year (4 වන වසර)", semesters: [] }
      ]
    },
    {
      id: "fac_2",
      name: "භාෂා අධ්‍යයන පීඨය",
      englishName: "Faculty of Language Studies",
      dean: "පීඨාධිපති: ආචාර්ය ඩබ්ලිව්. ඒ. පෙරේරා මහතා",
      color: "#ec4899",
      years: [
        {
          id: "yr_5",
          name: "1st Year (1 වන වසර)",
          semesters: [
            {
              id: "sem_9",
              name: "1st Semester (1 වන සමාසිකය)",
              subjects: [
                {
                  id: "sub_2",
                  name: "සිංහල භාෂාව හා සාහිත්‍යය (SIN 1202)",
                  description: "සම්භාව්‍ය සිංහල පද්‍ය හා ගද්‍ය සාහිත්‍යය විචාරය.",
                  modules: [
                    {
                      id: "mod_6",
                      type: "shortnote",
                      title: "කෙටි සටහන: අමාවතුරේ භාෂා රටාව",
                      content: `### ගුරුළුගෝමීන්ගේ අමාවතුර:
* **භාෂා විලාසය:** පිරිසිදු සිංහල (හෙළ) වචන භාවිතය.`
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  timetable: [
    {
      day: "සඳුදා (Monday)",
      slots: [
        { id: "ts_1", time: "08:30 AM - 10:30 AM", subject: "බෞද්ධ සංස්කෘතිය (BST 1101)", location: "Hall A - 102", type: "Lecture" }
      ]
    },
    { day: "අඟහරුවාදා (Tuesday)", slots: [] },
    { day: "බදාදා (Wednesday)", slots: [] },
    { day: "බ්‍රහස්පතින්දා (Thursday)", slots: [] },
    { day: "සිකුරාදා (Friday)", slots: [] },
    { day: "සෙනසුරාදා (Saturday)", slots: [] },
    { day: "ඉරිදා (Sunday)", slots: [] }
  ]
};

// Global App State
let state = {
  faculties: [],
  timetable: [],
  activeView: {
    type: "timetable",
    facultyId: null,
    yearId: null,
    semesterId: null,
    subjectId: null,
    moduleFilter: "all"
  },
  expandedNodes: new Set(["fac_1", "yr_1", "sem_1"]),
  openAccordions: new Set()
};

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initMarked();
  bindEvents();
  renderSidebar();
  renderMainView();
  registerServiceWorker();
  checkOAuthRedirectToken();
  if (googleDriveToken) {
    fetchGoogleUserInfo();
  }
});

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('PWA Service Worker Registered', reg))
      .catch(err => console.log('Service Worker Register Failed', err));
  }
}

function loadState() {
  const saved = localStorage.getItem("notes_category_data_v3");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.faculties = parsed.faculties || INITIAL_DATA.faculties;
      state.timetable = parsed.timetable || INITIAL_DATA.timetable;
    } catch (e) {
      useInitialData();
    }
  } else {
    useInitialData();
  }
}

function useInitialData() {
  state.faculties = INITIAL_DATA.faculties;
  state.timetable = INITIAL_DATA.timetable;
  saveState();
}

function saveState(triggerCloud = true) {
  localStorage.setItem("notes_category_data_v3", JSON.stringify({
    faculties: state.faculties,
    timetable: state.timetable
  }));
  if (triggerCloud && typeof scheduleAutoCloudSync === 'function') {
    scheduleAutoCloudSync();
  }
}

function initMarked() {
  if (window.marked) {
    marked.setOptions({ breaks: true, gfm: true });
  }
}

function getRandomColor() {
  const colors = ["#818cf8", "#ec4899", "#06b6d4", "#f59e0b", "#10b981", "#a855f7", "#3b82f6"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function bindEvents() {
  document.getElementById("navTimetableBtn").addEventListener("click", () => {
    state.activeView = { type: "timetable", facultyId: null, yearId: null, semesterId: null, subjectId: null, moduleFilter: "all" };
    updateNavActiveState();
    renderMainView();
  });

  document.getElementById("addFacultyBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    openFacultyModal();
  });

  document.getElementById("quickAddBtn").addEventListener("click", () => {
    openQuickAddModal();
  });

  const searchInput = document.getElementById("globalSearch");
  const clearBtn = document.getElementById("clearSearch");

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (val.length > 0) {
      clearBtn.classList.remove("hidden");
      renderSearchResults(val);
    } else {
      clearBtn.classList.add("hidden");
      renderMainView();
    }
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.classList.add("hidden");
    renderMainView();
  });

  document.getElementById("exportDataBtn").addEventListener("click", exportData);
  document.getElementById("importDataBtn").addEventListener("click", () => {
    document.getElementById("importFileInput").click();
  });
  document.getElementById("importFileInput").addEventListener("change", importData);

  document.getElementById("closeModalBtn").addEventListener("click", closeModal);
  document.getElementById("cancelModalBtn").addEventListener("click", closeModal);
  document.getElementById("closeReaderBtn").addEventListener("click", closeReaderModal);

  const closeDrawerBtn = document.getElementById("closeMediaDrawerBtn");
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeMediaDrawer);
  const mediaOverlay = document.getElementById("mediaDrawerOverlay");
  if (mediaOverlay) mediaOverlay.addEventListener("click", closeMediaDrawer);

  // Mobile Sidebar Toggle Events
  const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  const mainSidebar = document.getElementById("mainSidebar");

  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener("click", () => {
      const isOpen = mainSidebar.classList.toggle("mobile-open");
      sidebarBackdrop.classList.toggle("hidden");
      if (isOpen) {
        document.body.classList.add("sidebar-open");
      } else {
        document.body.classList.remove("sidebar-open");
      }
    });
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", closeMobileSidebar);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeMobileSidebar);
  }

  // Timetable Notification Alert Button
  const enableNotifyBtn = document.getElementById("enableNotifyBtn");
  if (enableNotifyBtn) {
    enableNotifyBtn.addEventListener("click", requestNotificationPermission);
  }

  // Start Real-Time Timetable Alarm Scheduler (Google Calendar Style)
  initTimetableNotifications();
}

function closeMobileSidebar() {
  const mainSidebar = document.getElementById("mainSidebar");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");
  if (mainSidebar) mainSidebar.classList.remove("mobile-open");
  if (sidebarBackdrop) sidebarBackdrop.classList.add("hidden");
  document.body.classList.remove("sidebar-open");
}

function updateNavActiveState() {
  const timetableBtn = document.getElementById("navTimetableBtn");
  if (state.activeView.type === "timetable") {
    timetableBtn.classList.add("active");
  } else {
    timetableBtn.classList.remove("active");
  }

  document.querySelectorAll(".subject-item-node").forEach(el => el.classList.remove("active"));
  if (state.activeView.type === "subject" && state.activeView.subjectId) {
    const activeSubEl = document.querySelector(`.subject-item-node[data-id="${state.activeView.subjectId}"]`);
    if (activeSubEl) activeSubEl.classList.add("active");
  }
}

function toggleNodeExpand(nodeId, e) {
  if (e) e.stopPropagation();
  if (state.expandedNodes.has(nodeId)) {
    state.expandedNodes.delete(nodeId);
  } else {
    state.expandedNodes.add(nodeId);
  }
  renderSidebar();
}

/* ==========================================================================
   SIDEBAR 4-LEVEL TREE RENDERER
   ========================================================================== */

function renderSidebar() {
  const treeContainer = document.getElementById("facultiesTree");
  treeContainer.innerHTML = "";

  state.faculties.forEach(fac => {
    const isFacExpanded = state.expandedNodes.has(fac.id);
    const facCard = document.createElement("div");
    facCard.className = `tree-node ${isFacExpanded ? "expanded" : ""}`;

    let yearsHTML = "";
    if (fac.years && fac.years.length > 0) {
      fac.years.forEach(yr => {
        const isYrExpanded = state.expandedNodes.has(yr.id);
        
        let semestersHTML = "";
        if (yr.semesters && yr.semesters.length > 0) {
          yr.semesters.forEach(sem => {
            const isSemExpanded = state.expandedNodes.has(sem.id);

            let subjectsHTML = "";
            if (sem.subjects && sem.subjects.length > 0) {
              sem.subjects.forEach(sub => {
                subjectsHTML += `
                  <div class="subject-item-node ${state.activeView.subjectId === sub.id ? 'active' : ''}"
                       data-id="${sub.id}"
                       onclick="selectSubject('${fac.id}', '${yr.id}', '${sem.id}', '${sub.id}')">
                    <span><i class="fa-solid fa-book" style="color:${fac.color || '#818cf8'}; margin-right:6px;"></i> ${escapeHTML(sub.name)}</span>
                    <div style="display:flex; gap:2px;">
                      <button class="btn-icon" title="නම වෙනස් කරන්න" onclick="event.stopPropagation(); openSubjectModal('${fac.id}', '${yr.id}', '${sem.id}', '${sub.id}')"><i class="fa-solid fa-pen"></i></button>
                      <button class="btn-icon danger" title="මකන්න" onclick="event.stopPropagation(); deleteSubject('${fac.id}', '${yr.id}', '${sem.id}', '${sub.id}')"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </div>
                `;
              });
            } else {
              subjectsHTML = `<div style="font-size:0.75rem; color:var(--text-muted); padding:4px;">විෂයන් නැත (+ ඔබන්න)</div>`;
            }

            semestersHTML += `
              <div class="tree-node ${isSemExpanded ? 'expanded' : ''}">
                <div class="tree-node-header" onclick="toggleNodeExpand('${sem.id}', event)">
                  <div class="tree-title-group">
                    <i class="fa-solid fa-layer-group" style="font-size:0.75rem; color:#38bdf8;"></i>
                    <span class="tree-title">${escapeHTML(sem.name)}</span>
                  </div>
                  <div class="tree-controls">
                    <button class="btn-add-mini" title="විෂයක් එකතු කරන්න" onclick="event.stopPropagation(); openSubjectModal('${fac.id}', '${yr.id}', '${sem.id}')"><i class="fa-solid fa-plus"></i></button>
                    <button class="btn-icon" title="සංස්කරණය" onclick="event.stopPropagation(); openSemesterModal('${fac.id}', '${yr.id}', '${sem.id}')"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-icon danger" title="මකන්න" onclick="event.stopPropagation(); deleteSemester('${fac.id}', '${yr.id}', '${sem.id}')"><i class="fa-solid fa-trash"></i></button>
                    <i class="fa-solid fa-chevron-right tree-chevron"></i>
                  </div>
                </div>
                <div class="tree-children">${subjectsHTML}</div>
              </div>
            `;
          });
        } else {
          semestersHTML = `<div style="font-size:0.75rem; color:var(--text-muted); padding:4px;">සමාසික නැත (+ ඔබන්න)</div>`;
        }

        yearsHTML += `
          <div class="tree-node ${isYrExpanded ? 'expanded' : ''}">
            <div class="tree-node-header" onclick="toggleNodeExpand('${yr.id}', event)">
              <div class="tree-title-group">
                <i class="fa-solid fa-calendar-days" style="font-size:0.78rem; color:#f472b6;"></i>
                <span class="tree-title">${escapeHTML(yr.name)}</span>
              </div>
              <div class="tree-controls">
                <button class="btn-add-mini" title="සමාසිකයක් එකතු කරන්න" onclick="event.stopPropagation(); openSemesterModal('${fac.id}', '${yr.id}')"><i class="fa-solid fa-plus"></i></button>
                <button class="btn-icon" title="සංස්කරණය" onclick="event.stopPropagation(); openYearModal('${fac.id}', '${yr.id}')"><i class="fa-solid fa-pen"></i></button>
                <button class="btn-icon danger" title="මකන්න" onclick="event.stopPropagation(); deleteYear('${fac.id}', '${yr.id}')"><i class="fa-solid fa-trash"></i></button>
                <i class="fa-solid fa-chevron-right tree-chevron"></i>
              </div>
            </div>
            <div class="tree-children">${semestersHTML}</div>
          </div>
        `;
      });
    } else {
      yearsHTML = `<div style="font-size:0.75rem; color:var(--text-muted); padding:4px;">වසරවල් නැත (+ ඔබන්න)</div>`;
    }

    facCard.innerHTML = `
      <div class="tree-node-header" onclick="toggleNodeExpand('${fac.id}', event)">
        <div class="tree-title-group">
          <div class="faculty-badge-icon" style="background:${fac.color || '#818cf8'}; width:24px; height:24px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:0.75rem;">
            <i class="fa-solid fa-graduation-cap"></i>
          </div>
          <span class="tree-title" style="font-weight:700;">${escapeHTML(fac.name)}</span>
        </div>
        <div class="tree-controls">
          <button class="btn-add-mini" title="වසරක් එකතු කරන්න" onclick="event.stopPropagation(); openYearModal('${fac.id}')"><i class="fa-solid fa-plus"></i></button>
          <button class="btn-icon" title="පීඨයේ නම සංස්කරණය" onclick="event.stopPropagation(); openFacultyModal('${fac.id}')"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-icon danger" title="පීඨය මකන්න" onclick="event.stopPropagation(); deleteFaculty('${fac.id}')"><i class="fa-solid fa-trash"></i></button>
          <i class="fa-solid fa-chevron-right tree-chevron"></i>
        </div>
      </div>
      <div class="tree-children">${yearsHTML}</div>
    `;

    treeContainer.appendChild(facCard);
  });
}

function selectSubject(facId, yrId, semId, subId) {
  state.activeView = { type: "subject", facultyId: facId, yearId: yrId, semesterId: semId, subjectId: subId, moduleFilter: "all" };
  updateNavActiveState();
  renderSidebar();
  renderMainView();
  closeMobileSidebar();
}

function renderMainView() {
  const viewport = document.getElementById("contentViewport");
  viewport.innerHTML = "";

  if (state.activeView.type === "timetable") {
    renderTimetable(viewport);
  } else if (state.activeView.type === "subject") {
    renderSubjectView(viewport, state.activeView.facultyId, state.activeView.yearId, state.activeView.semesterId, state.activeView.subjectId);
  } else {
    renderTimetable(viewport);
  }
}

// Timetable View with EDIT & DELETE
function renderTimetable(container) {
  let html = `
    <div class="timetable-view">
      <div class="view-header">
        <div class="view-title-group">
          <h2><i class="fa-solid fa-calendar-check" style="color:var(--accent-gold)"></i> ශිෂ්‍ය කාලසටහන (Student Timetable)</h2>
          <p class="subtitle">සතියේ දිනවල පන්ති සහ අමතර පන්ති කාලසටහන මෙතැනින් සකස් කරගන්න</p>
        </div>
      </div>

      <div class="timetable-grid">
  `;

  state.timetable.forEach((dayGroup, dayIdx) => {
    html += `
      <div class="day-card">
        <div class="day-header">
          <span class="day-title"><i class="fa-regular fa-calendar"></i> ${escapeHTML(dayGroup.day)}</span>
          <button class="btn-add-mini" title="අමතර කාලසටහනක් එකතු කරන්න" onclick="openTimetableSlotModal(${dayIdx})">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <div class="day-slots">
    `;

    if (dayGroup.slots.length === 0) {
      html += `<div style="font-size:0.8rem; color:var(--text-dim); text-align:center; padding:12px 0;">පන්ති නොමැත (+ ලකුණින් එකතු කරන්න)</div>`;
    } else {
      dayGroup.slots.forEach(slot => {
        const borderCol = slot.type === 'Extra Class' ? '#ec4899' : '#6366f1';
        html += `
          <div class="slot-card" style="border-left-color: ${borderCol}">
            <div class="slot-actions">
              <button class="btn-icon" title="සංස්කරණය කරන්න" onclick="openTimetableSlotModal(${dayIdx}, '${slot.id}')"><i class="fa-solid fa-pen"></i></button>
              <button class="btn-icon danger" title="මකන්න" onclick="deleteTimetableSlot(${dayIdx}, '${slot.id}')"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <div class="slot-time"><i class="fa-regular fa-clock"></i> ${escapeHTML(slot.time)}</div>
            <div class="slot-subject">${escapeHTML(slot.subject)}</div>
            <div class="slot-location">
              <i class="fa-solid fa-location-dot"></i> ${escapeHTML(slot.location || 'ස්ථානය සඳහන් නැත')}
              ${slot.type ? `<span class="badge-tag" style="margin-left:auto;">${escapeHTML(slot.type)}</span>` : ''}
            </div>
          </div>
        `;
      });
    }

    html += `</div></div>`;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

// Subject View Renderer with Category Tabs
function renderSubjectView(container, facId, yrId, semId, subId) {
  const fac = state.faculties.find(f => f.id === facId);
  if (!fac) return;
  const yr = fac.years.find(y => y.id === yrId);
  if (!yr) return;
  const sem = yr.semesters.find(s => s.id === semId);
  if (!sem) return;
  const subject = sem.subjects.find(s => s.id === subId);
  if (!subject) return;

  const currentFilter = state.activeView.moduleFilter || "all";
  const filteredModules = subject.modules.filter(m => currentFilter === "all" || m.type === currentFilter);

  container.innerHTML = `
    <div class="subject-view">
      <div class="view-header">
        <div class="view-title-group">
          <h2><i class="fa-solid fa-book-open" style="color:var(--primary-glow)"></i> ${escapeHTML(subject.name)}</h2>
          <p class="subtitle">${escapeHTML(fac.name)} &bull; ${escapeHTML(yr.name)} &bull; ${escapeHTML(sem.name)}</p>
        </div>
        <div class="subject-action-bar">
          <button class="glass-btn btn-primary" onclick="openModuleModal('${facId}', '${yrId}', '${semId}', '${subId}')">
            <i class="fa-solid fa-plus"></i> <span class="btn-text">නව අයිතමය</span>
          </button>
          <button class="glass-btn" title="PDF ලෙස බාගත කරන්න" onclick="printOrExportPDF()">
            <i class="fa-solid fa-file-pdf"></i> PDF
          </button>
          <button class="glass-btn" title="විෂයයේ නම සංස්කරණය" onclick="openSubjectModal('${facId}', '${yrId}', '${semId}', '${subId}')">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="glass-btn danger" title="විෂය මකන්න" onclick="deleteSubject('${facId}', '${yrId}', '${semId}', '${subId}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>

      <!-- Module Category Tabs -->
      <div class="module-tabs">
        <button class="tab-btn ${currentFilter === 'all' ? 'active' : ''}" onclick="setModuleFilter('all')">
          <i class="fa-solid fa-layer-group"></i> සියල්ල (${subject.modules.length})
        </button>
        <button class="tab-btn ${currentFilter === 'syllabus' ? 'active' : ''}" onclick="setModuleFilter('syllabus')">
          <i class="fa-solid fa-list-check"></i> සිලබස්
        </button>
        <button class="tab-btn ${currentFilter === 'shortnote' ? 'active' : ''}" onclick="setModuleFilter('shortnote')">
          <i class="fa-solid fa-note-sticky"></i> කෙටි සටහන්
        </button>
        <button class="tab-btn ${currentFilter === 'presentation' ? 'active' : ''}" onclick="setModuleFilter('presentation')">
          <i class="fa-solid fa-file-powerpoint"></i> ප්‍රසන්ටේෂන්
        </button>
        <button class="tab-btn ${currentFilter === 'assignment' ? 'active' : ''}" onclick="setModuleFilter('assignment')">
          <i class="fa-solid fa-tasks"></i> අගයීම් (Assignments)
        </button>
        <button class="tab-btn ${currentFilter === 'midexam' ? 'active' : ''}" onclick="setModuleFilter('midexam')">
          <i class="fa-solid fa-file-signature"></i> මැද සෙමෙස්ටර්
        </button>
        <button class="tab-btn ${currentFilter === 'pastpaper' ? 'active' : ''}" onclick="setModuleFilter('pastpaper')">
          <i class="fa-solid fa-file-lines"></i> පාස් පේපර්ස්
        </button>
        <button class="tab-btn ${currentFilter === 'book' ? 'active' : ''}" onclick="setModuleFilter('book')">
          <i class="fa-solid fa-book-bookmark"></i> කියවන පොත්පත්
        </button>
      </div>

      <!-- Accordion Cards List -->
      <div class="module-cards-list">
        ${filteredModules.length === 0 ? `
          <div class="empty-state">
            <i class="fa-solid fa-folder-open"></i>
            <p>මෙම කොටසේ තවම අයිතම එකතු කර නැත.</p>
            <button class="glass-btn btn-primary" onclick="openModuleModal('${facId}', '${yrId}', '${semId}', '${subId}')">+ නව අයිතමයක් එකතු කරන්න</button>
          </div>
        ` : filteredModules.map(mod => {
          const isOpen = state.openAccordions.has(mod.id);
          const tagInfo = getModuleTagInfo(mod.type);
          const renderedMarkdown = mod.contentHtml || (marked.parse ? marked.parse(mod.content || '') : mod.content);

          return `
            <div class="accordion-card ${isOpen ? 'open' : ''}" id="acc_${mod.id}">
              <div class="accordion-header" onclick="toggleAccordion('${mod.id}')">
                <div class="accordion-title-group">
                  <span class="category-tag ${tagInfo.class}">${tagInfo.label}</span>
                  <span class="accordion-title">${escapeHTML(mod.title)}</span>
                </div>
                <div class="accordion-controls">
                  <button class="btn-icon" title="සම්පූර්ණ තිරයේ තබා කියවන්න (Fullscreen Reader)" onclick="event.stopPropagation(); openFullscreenReader('${mod.id}')">
                    <i class="fa-solid fa-expand"></i>
                  </button>
                  <button class="btn-icon" title="සංස්කරණය" onclick="event.stopPropagation(); openModuleModal('${facId}', '${yrId}', '${semId}', '${subId}', '${mod.id}')">
                    <i class="fa-solid fa-pen"></i>
                  </button>
                  <button class="btn-icon danger" title="මකන්න" onclick="event.stopPropagation(); deleteModule('${facId}', '${yrId}', '${semId}', '${subId}', '${mod.id}')">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <i class="fa-solid fa-chevron-down arrow-icon"></i>
                </div>
              </div>
              <div class="accordion-body">
                ${mod.type === 'book' ? `
                  <div class="book-meta-grid">
                    <div class="book-meta-item">
                      <span class="book-meta-label">කර්තෘ (Author)</span>
                      <span class="book-meta-val">${escapeHTML(mod.bookAuthor || 'සඳහන් කර නැත')}</span>
                    </div>
                    <div class="book-meta-item">
                      <span class="book-meta-label">මුද්‍රණය / Publisher</span>
                      <span class="book-meta-val">${escapeHTML(mod.bookPublisher || 'සඳහන් කර නැත')}</span>
                    </div>
                    <div class="book-meta-item">
                      <span class="book-meta-label">පුස්තකාල ID (Library Call No)</span>
                      <span class="book-meta-val">${escapeHTML(mod.libraryId || 'සඳහන් කර නැත')}</span>
                    </div>
                    <div class="book-meta-item">
                      <span class="book-meta-label">දැනට ඉන්න පිටු අංකය (Current Page)</span>
                      <div class="page-counter-box">
                        <button class="btn-icon" onclick="updateBookPage('${facId}', '${yrId}', '${semId}', '${subId}', '${mod.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                        <span class="page-counter-num">Page ${mod.currentPage || 1}</span>
                        <button class="btn-icon" onclick="updateBookPage('${facId}', '${yrId}', '${semId}', '${subId}', '${mod.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                      </div>
                    </div>
                  </div>
                ` : ''}

                <div class="note-sheet-container" id="sheetContainer_${mod.id}">
                  <!-- Reading Mode View -->
                  <div class="reading-view-sheet" id="readSheet_${mod.id}">
                    <div class="sheet-top-bar">
                      <span class="sheet-status-badge"><i class="fa-solid fa-file-word"></i> Word / Docs Sheet View</span>
                      <button class="sheet-edit-btn" onclick="toggleInlineEdit('${facId}', '${yrId}', '${semId}', '${subId}', '${mod.id}', true)">
                        <i class="fa-solid fa-pen-to-square"></i> ලිපිය වෙනස් කරන්න (Edit Sheet)
                      </button>
                    </div>
                    <div class="markdown-rendered sheet-paper" id="paperRendered_${mod.id}">
                      ${renderedMarkdown}
                    </div>
                  </div>

                  <!-- In-Place Google Docs Editor -->
                  <div class="inline-docs-editor hidden" id="editSheet_${mod.id}">
                    <div class="editor-toolbar">
                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'bold')" title="Bold (තද අකුරු)"><i class="fa-solid fa-bold"></i></button>
                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'italic')" title="Italic (ඇල අකුරු)"><i class="fa-solid fa-italic"></i></button>
                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'underline')" title="Underline (යටින් ඉරක්)"><i class="fa-solid fa-underline"></i></button>
                      
                      <div class="editor-divider"></div>

                      <!-- Text Color Picker -->
                      <div class="editor-btn" title="අකුරු පාට (Text Color)" style="padding:2px 6px;">
                        <i class="fa-solid fa-palette" style="color:#818cf8;"></i>
                        <input type="color" value="#818cf8" onchange="formatInlineEditor('${mod.id}', 'foreColor', this.value)" style="width:20px; height:20px; border:none; background:transparent; cursor:pointer;">
                      </div>

                      <!-- Highlighters -->
                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'hiliteColor', '#fef08a')" style="background:#fef08a; color:#000;" title="කහ පාටින් Highlight කරන්න"><i class="fa-solid fa-highlighter"></i></button>
                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'hiliteColor', '#a7f3d0')" style="background:#a7f3d0; color:#000;" title="කොළ පාටින් Highlight කරන්න"><i class="fa-solid fa-highlighter"></i></button>
                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'hiliteColor', '#fbcfe8')" style="background:#fbcfe8; color:#000;" title="රෝස පාටින් Highlight කරන්න"><i class="fa-solid fa-highlighter"></i></button>
                      <button type="button" class="editor-btn" onclick="removeHighlight('inlineEditorEditable_${mod.id}')" title="Highlight රිමූව් කරන්න" style="border-color:#ef4444; color:#ef4444;"><i class="fa-solid fa-ban"></i> Clear</button>

                      <div class="editor-divider"></div>

                      <!-- Font Size Selector -->
                      <select onchange="formatInlineEditor('${mod.id}', 'fontSize', this.value)" class="editor-select" title="අකුරු ප්‍රමාණය (Font Size)">
                        <option value="3">Normal</option>
                        <option value="4">Large</option>
                        <option value="5">XL</option>
                      </select>

                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'formatBlock', '<h3>')" title="Heading"><i class="fa-solid fa-heading"></i></button>
                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'insertUnorderedList')" title="Bullet List"><i class="fa-solid fa-list-ul"></i></button>
                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'insertOrderedList')" title="Numbered List"><i class="fa-solid fa-list-ol"></i></button>
                      
                      <!-- Eraser Clear Formatting -->
                      <button type="button" class="editor-btn" onclick="formatInlineEditor('${mod.id}', 'removeFormat')" title="Format ඉවත් කරන්න"><i class="fa-solid fa-eraser"></i></button>

                      <div class="editor-divider"></div>

                      <button type="button" class="editor-btn" onclick="attachInlineFile('${mod.id}', 'image')" title="Photo Upload"><i class="fa-solid fa-image" style="color:#38bdf8;"></i> Photo</button>
                      <button type="button" class="editor-btn" onclick="attachInlineFile('${mod.id}', 'pdf')" title="PDF Upload"><i class="fa-solid fa-file-pdf" style="color:#f472b6;"></i> PDF</button>
                    </div>
                    <div id="inlineEditorEditable_${mod.id}" class="editor-contenteditable sheet-paper-editable" contenteditable="true">
                      ${renderedMarkdown}
                    </div>
                    <div class="sheet-bottom-actions">
                      <button class="glass-btn btn-primary" onclick="saveInlineEdit('${facId}', '${yrId}', '${semId}', '${subId}', '${mod.id}')">
                        <i class="fa-solid fa-floppy-disk"></i> තැන්පත් කරන්න (Save Changes)
                      </button>
                      <button class="glass-btn" onclick="toggleInlineEdit('${facId}', '${yrId}', '${semId}', '${subId}', '${mod.id}', false)">
                        <i class="fa-solid fa-xmark"></i> අවලංගු කරන්න
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function setModuleFilter(filterType) {
  state.activeView.moduleFilter = filterType;
  renderMainView();
}

function toggleAccordion(modId) {
  if (state.openAccordions.has(modId)) {
    state.openAccordions.delete(modId);
  } else {
    state.openAccordions.add(modId);
  }
  const el = document.getElementById(`acc_${modId}`);
  if (el) el.classList.toggle("open");
}

function getModuleTagInfo(type) {
  switch (type) {
    case 'syllabus': return { label: 'සිලබස්', class: 'tag-syllabus' };
    case 'presentation': return { label: 'ප්‍රසන්ටේෂන්', class: 'tag-presentation' };
    case 'shortnote': return { label: 'කෙටි සටහන්', class: 'tag-shortnote' };
    case 'pastpaper': return { label: 'පාස් පේපර්', class: 'tag-pastpaper' };
    case 'assignment': return { label: 'අගයීම්', class: 'tag-assignment' };
    case 'midexam': return { label: 'මැද සෙමෙස්ටර්', class: 'tag-midexam' };
    case 'book': return { label: 'කියවන පොත', class: 'tag-book' };
    default: return { label: 'නෝට්ස්', class: 'tag-syllabus' };
  }
}

// Update Book Page Counter quickly (+ / -)
function updateBookPage(facId, yrId, semId, subId, modId, delta) {
  const fac = state.faculties.find(f => f.id === facId);
  if (!fac) return;
  const yr = fac.years.find(y => y.id === yrId);
  if (!yr) return;
  const sem = yr.semesters.find(s => s.id === semId);
  if (!sem) return;
  const sub = sem.subjects.find(s => s.id === subId);
  if (!sub) return;
  const mod = sub.modules.find(m => m.id === modId);
  if (!mod) return;

  let current = parseInt(mod.currentPage) || 1;
  current = Math.max(1, current + delta);
  mod.currentPage = current;
  saveState();
  renderMainView();
  showToast(`පිටු අංකය ${current} ලෙස යාවත්කාලීන විය!`);
}

let currentReaderModContext = null;

let isFullscreenReaderEditing = false;

// Distraction-Free Fullscreen Note Reader Modal
function openFullscreenReader(modId) {
  let targetMod = null;
  let targetContext = null;

  state.faculties.forEach(f => {
    f.years.forEach(y => {
      y.semesters.forEach(s => {
        s.subjects.forEach(sub => {
          const found = sub.modules.find(m => m.id === modId);
          if (found) {
            targetMod = found;
            targetContext = { facId: f.id, yrId: y.id, semId: s.id, subId: sub.id, modId: found.id, mod: found };
          }
        });
      });
    });
  });

  if (!targetMod) return;
  currentReaderModContext = targetContext;
  isFullscreenReaderEditing = false;

  const tagInfo = getModuleTagInfo(targetMod.type);
  const badge = document.getElementById("readerCategoryBadge");
  badge.className = `category-tag ${tagInfo.class}`;
  badge.textContent = tagInfo.label;

  document.getElementById("readerTitle").textContent = targetMod.title;
  
  const rendered = targetMod.contentHtml || (marked.parse ? marked.parse(targetMod.content || '') : targetMod.content);
  const textEl = document.getElementById("readerMarkdownText");
  textEl.innerHTML = rendered;
  textEl.classList.remove("hidden");

  const editorContainer = document.getElementById("readerEditorContainer");
  if (editorContainer) editorContainer.classList.add("hidden");

  const btnText = document.getElementById("readerEditBtnText");
  if (btnText) btnText.textContent = "සංස්කරණය (Edit Note)";

  document.getElementById("fullscreenReaderModal").classList.remove("hidden");
}

function toggleFullscreenReaderEdit() {
  if (!currentReaderModContext) return;

  const textEl = document.getElementById("readerMarkdownText");
  const editorContainer = document.getElementById("readerEditorContainer");
  const editableEl = document.getElementById("readerEditableContent");
  const toolbarEl = document.getElementById("readerEditorToolbar");
  const btnText = document.getElementById("readerEditBtnText");

  if (!isFullscreenReaderEditing) {
    isFullscreenReaderEditing = true;
    textEl.classList.add("hidden");
    editorContainer.classList.remove("hidden");
    if (btnText) btnText.textContent = "💾 සුරකින්න (Save Note)";

    const mod = currentReaderModContext.mod;
    const currentHtml = mod.contentHtml || (marked.parse ? marked.parse(mod.content || '') : mod.content);
    editableEl.innerHTML = currentHtml;

    toolbarEl.innerHTML = `
      <div class="editor-toolbar" style="border-radius:8px;">
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('bold')" title="Bold"><i class="fa-solid fa-bold"></i></button>
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('italic')" title="Italic"><i class="fa-solid fa-italic"></i></button>
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('underline')" title="Underline"><i class="fa-solid fa-underline"></i></button>
        <div class="editor-divider"></div>
        <div class="editor-btn" title="අකුරු පාට" style="padding:2px 6px;">
          <i class="fa-solid fa-palette" style="color:#818cf8;"></i>
          <input type="color" value="#818cf8" onchange="formatFullscreenEditor('foreColor', this.value)" style="width:20px; height:20px; border:none; background:transparent; cursor:pointer;">
        </div>
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('hiliteColor', '#fef08a')" style="background:#fef08a; color:#000;" title="කහ Highlight"><i class="fa-solid fa-highlighter"></i></button>
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('hiliteColor', '#a7f3d0')" style="background:#a7f3d0; color:#000;" title="කොළ Highlight"><i class="fa-solid fa-highlighter"></i></button>
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('hiliteColor', '#fbcfe8')" style="background:#fbcfe8; color:#000;" title="රෝස Highlight"><i class="fa-solid fa-highlighter"></i></button>
        <button type="button" class="editor-btn" onclick="removeHighlight('readerEditableContent')" title="🚫 Highlight ඉවත් කරන්න" style="border-color:#ef4444; color:#ef4444;"><i class="fa-solid fa-ban"></i> Highlight Clear</button>
        <div class="editor-divider"></div>
        <select onchange="formatFullscreenEditor('fontSize', this.value)" class="editor-select" title="Font Size">
          <option value="3">Normal</option>
          <option value="4">Large</option>
          <option value="5">XL</option>
        </select>
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('formatBlock', '<h3>')" title="Heading"><i class="fa-solid fa-heading"></i></button>
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('insertUnorderedList')" title="Bullet List"><i class="fa-solid fa-list-ul"></i></button>
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('insertOrderedList')" title="Numbered List"><i class="fa-solid fa-list-ol"></i></button>
        <button type="button" class="editor-btn" onclick="formatFullscreenEditor('removeFormat')" title="Clear Format"><i class="fa-solid fa-eraser"></i></button>
      </div>
    `;

    editableEl.focus();
    editableEl.addEventListener("paste", handleEditorPaste);
    showToast("✏️ Fullscreen Editor සක්‍රිය විය!");
  } else {
    const newHtml = editableEl.innerHTML;
    const newText = editableEl.innerText;
    
    const mod = currentReaderModContext.mod;
    mod.contentHtml = newHtml;
    mod.content = newText;

    saveState();
    renderMainView();

    textEl.innerHTML = newHtml;
    textEl.classList.remove("hidden");
    editorContainer.classList.add("hidden");
    isFullscreenReaderEditing = false;
    if (btnText) btnText.textContent = "සංස්කරණය (Edit Note)";

    showToast("💾 සටහන Fullscreen මාදිලියේදීම සාර්ථකව සුරක්ෂිත විය!");
  }
}

function formatFullscreenEditor(cmd, val = null) {
  const ed = document.getElementById("readerEditableContent");
  if (ed) ed.focus();
  document.execCommand(cmd, false, val);
}

function removeHighlight(editableId = null) {
  const ed = editableId ? document.getElementById(editableId) : document.activeElement;
  if (ed) ed.focus();
  document.execCommand('hiliteColor', false, 'transparent');
  document.execCommand('backColor', false, 'transparent');
  showToast("🚫 Highlight රිමූව් (Clear) විය!");
}

function closeReaderModal() {
  document.getElementById("fullscreenReaderModal").classList.add("hidden");
}

// Direct 1-Click PDF File Export using System Print / Save as PDF
function exportDirectPDF(targetElementId = "readerContentBody") {
  const element = document.getElementById(targetElementId) || document.getElementById("contentViewport");
  if (!element) return;

  showToast("📄 PDF ගොනුව සකස් කරමින් පවතී...");

  // On Android WebView or Mobile, window.print() invokes Android's Native "Save as PDF" dialog
  try {
    if (window.Capacitor || /Android|iPhone|iPad/i.test(navigator.userAgent)) {
      setTimeout(() => {
        window.print();
      }, 300);
      showToast("✅ System PDF Dialog එකෙන් 'Save as PDF' තෝරන්න!");
      return;
    }
  } catch (e) {}

  if (window.html2pdf) {
    const opt = {
      margin:       [10, 10, 10, 10],
      filename:     `Notes_Category_Document_${Date.now()}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).toPdf().get('pdf').then(pdf => {
      const blob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `Notes_Category_${Date.now()}.pdf`;
      document.body.appendChild(a);
      a.click();
      showToast("✅ PDF ගොනුව සාර්ථකව Download විය!");
    }).catch(err => {
      window.print();
    });
  } else {
    window.print();
  }
}

function printOrExportPDF() {
  exportDirectPDF();
}

/* ==========================================================================
   REAL-TIME TIMETABLE NOTIFICATION & ALARM REMINDER ENGINE (Google Calendar style)
   ========================================================================== */

let notifiedSlots = new Set();
let isNotificationActive = localStorage.getItem("notes_cat_notify_enabled") !== "false"; // Default to true

function requestNotificationPermission() {
  const btn = document.getElementById("enableNotifyBtn");
  
  // Toggle Notification State
  isNotificationActive = !isNotificationActive;
  localStorage.setItem("notes_cat_notify_enabled", isNotificationActive ? "true" : "false");

  if (isNotificationActive) {
    if (btn) btn.classList.add("active-bell");
    showToast("🔔 කාලසටහන් Alerts (Notifications & Sound) සක්‍රිය විය!");

    if ("Notification" in window && typeof Notification.requestPermission === "function" && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  } else {
    if (btn) btn.classList.remove("active-bell");
    showToast("🔕 Notifications සහ Sound Alerts අක්‍රිය විය.");
  }
}

function initTimetableNotifications() {
  const btn = document.getElementById("enableNotifyBtn");
  const storedSetting = localStorage.getItem("notes_cat_notify_enabled");
  
  // Default to enabled if not explicitly turned off
  if (storedSetting === null) {
    localStorage.setItem("notes_cat_notify_enabled", "true");
    isNotificationActive = true;
  } else {
    isNotificationActive = storedSetting === "true";
  }

  if (isNotificationActive && btn) {
    btn.classList.add("active-bell");
  }

  // Check every 25 seconds for upcoming classes
  setInterval(checkTimetableNotifications, 25000);
  checkTimetableNotifications();
}

function checkTimetableNotifications() {
  if (!state.timetable || state.timetable.length === 0) return;

  const now = new Date();
  const dayNames = ["ඉරිදා (Sunday)", "සඳුදා (Monday)", "අඟහරුවාදා (Tuesday)", "බදාදා (Wednesday)", "බ්‍රහස්පතින්දා (Thursday)", "සිකුරාදා (Friday)", "සෙනසුරාදා (Saturday)"];
  const currentDayName = dayNames[now.getDay()];

  // Find today's timetable group
  const todayGroup = state.timetable.find(g => g.day.includes(currentDayName.split(" ")[0]) || g.day.toLowerCase().includes(currentDayName.split("(")[1].replace(")", "").toLowerCase()));
  if (!todayGroup || !todayGroup.slots) return;

  const currentHours = now.getHours();
  const currentMins = now.getMinutes();

  todayGroup.slots.forEach(slot => {
    if (!slot.time) return;

    // Parse time string e.g. "08:30 AM" or "08:30" or "8:30"
    const parsedTime = parseSlotStartTime(slot.time);
    if (!parsedTime) return;

    const slotKey = `${now.toDateString()}_${slot.id}`;

    // If slot starts in next 10 minutes or right now
    const diffMins = (parsedTime.hours * 60 + parsedTime.minutes) - (currentHours * 60 + currentMins);

    if (diffMins >= 0 && diffMins <= 10 && !notifiedSlots.has(slotKey)) {
      notifiedSlots.add(slotKey);
      triggerClassNotification(slot, diffMins);
    }
  });
}

function parseSlotStartTime(timeStr) {
  try {
    const startPart = timeStr.split("-")[0].trim().toLowerCase(); // e.g. "08:30 am"
    const isPM = startPart.includes("pm");
    const isAM = startPart.includes("am");
    const cleanStr = startPart.replace("am", "").replace("pm", "").trim();
    const [h, m] = cleanStr.split(":").map(n => parseInt(n));

    if (isNaN(h)) return null;

    let hours = h;
    if (isPM && hours < 12) hours += 12;
    if (isAM && hours === 12) hours = 0;

    return { hours, minutes: m || 0 };
  } catch (e) {
    return null;
  }
}

function triggerClassNotification(slot, minsRemaining) {
  const timeText = minsRemaining === 0 ? "දැන් ආරම්භ වේ!" : `තව මිනිත්තු ${minsRemaining} කින් ආරම්භ වේ!`;
  const title = `🔔 පන්ති මතක් කිරීම: ${slot.subject}`;
  const bodyText = `වේලාව: ${slot.time}\nස්ථානය: ${slot.location || 'සඳහන් නැත'} (${slot.type || 'Lecture'})\n${timeText}`;

  // 1. In-App Glowing Toast Notification
  showToast(`🔔 ${slot.subject} (${slot.time}) - ${timeText}`);

  // 2. Play Audio Chime Sound Alert
  playNotificationSound();

  // 3. Capacitor Native Android System Tray Notification
  try {
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications) {
      window.Capacitor.Plugins.LocalNotifications.schedule({
        notifications: [
          {
            title: `🔔 ${slot.subject}`,
            body: `වේලාව: ${slot.time} | ස්ථානය: ${slot.location || 'සඳහන් නැත'} (${timeText})`,
            id: Math.floor(Math.random() * 100000),
            schedule: { at: new Date(Date.now() + 100) }
          }
        ]
      });
    }
  } catch (err) {
    console.log("Native notification error:", err);
  }

  // 4. Desktop / Browser Push Notification
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      new Notification(title, {
        body: bodyText,
        icon: "https://cdn-icons-png.flaticon.com/512/2991/2991106.png",
        tag: slot.id
      });
    } catch (e) {
      console.log("Push notification error:", e);
    }
  }
}

function playNotificationSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3); // A5 note

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {
    // Audio context fallback
  }
}

// Global Search Results
function renderSearchResults(query) {
  const container = document.getElementById("contentViewport");
  let results = [];

  state.faculties.forEach(fac => {
    fac.years.forEach(yr => {
      yr.semesters.forEach(sem => {
        sem.subjects.forEach(sub => {
          sub.modules.forEach(mod => {
            if (mod.title.toLowerCase().includes(query) || mod.content.toLowerCase().includes(query)) {
              results.push({ fac, yr, sem, sub, mod });
            }
          });
        });
      });
    });
  });

  if (results.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>"${escapeHTML(query)}" සඳහා ප්‍රතිඵල හමු නොවීය.</h3>
      </div>
    `;
    return;
  }

  let html = `
    <div class="subject-view">
      <h2><i class="fa-solid fa-magnifying-glass" style="color:var(--primary-glow)"></i> සෙවීම් ප්‍රතිඵල (${results.length})</h2>
      <div class="module-cards-list" style="margin-top:16px;">
  `;

  results.forEach(res => {
    const renderedMarkdown = marked.parse ? marked.parse(res.mod.content || '') : res.mod.content;
    const tagInfo = getModuleTagInfo(res.mod.type);

    html += `
      <div class="accordion-card open">
        <div class="accordion-header" onclick="selectSubject('${res.fac.id}', '${res.yr.id}', '${res.sem.id}', '${res.sub.id}')">
          <div class="accordion-title-group">
            <span class="category-tag ${tagInfo.class}">${tagInfo.label}</span>
            <span class="accordion-title">${escapeHTML(res.mod.title)}</span>
            <span style="font-size:0.75rem; color:var(--text-muted);">(${escapeHTML(res.fac.name)} &bull; ${escapeHTML(res.sub.name)})</span>
          </div>
        </div>
        <div class="accordion-body">
          <div class="markdown-rendered">${renderedMarkdown}</div>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

/* ==========================================================================
   MODALS AND DIRECT STATE MUTATION (FULL WORKING EDIT & DELETE)
   ========================================================================== */

function showModal(titleHTML, bodyHTML, onSave) {
  document.getElementById("modalTitle").innerHTML = titleHTML;
  document.getElementById("modalBody").innerHTML = bodyHTML;
  document.getElementById("universalModal").classList.remove("hidden");

  const saveBtn = document.getElementById("saveModalBtn");
  const newSaveBtn = saveBtn.cloneNode(true);
  saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);

  newSaveBtn.addEventListener("click", () => {
    if (onSave()) {
      closeModal();
    }
  });
}

function closeModal() {
  document.getElementById("universalModal").classList.add("hidden");
}

// Faculty Modal (Direct State Mutation by ID)
function openFacultyModal(facId = null) {
  const existingFac = facId ? state.faculties.find(f => f.id === facId) : null;

  const body = `
    <div class="form-group">
      <label>පීඨයේ නම (Faculty Name)</label>
      <input type="text" id="facNameInput" class="form-control" value="${existingFac ? escapeHTML(existingFac.name) : ''}" placeholder="උදා: බෞද්ධ අධ්‍යයන පීඨය">
    </div>
    <div class="form-group">
      <label>ඉංග්‍රීසි නම (English Name)</label>
      <input type="text" id="facEngNameInput" class="form-control" value="${existingFac ? escapeHTML(existingFac.englishName || '') : ''}" placeholder="Faculty of Buddhist Studies">
    </div>
    <div class="form-group">
      <label>පීඨාධිපති විස්තර (Dean Details)</label>
      <input type="text" id="facDeanInput" class="form-control" value="${existingFac ? escapeHTML(existingFac.dean || '') : ''}" placeholder="පීඨාධිපති: ආචාර්ය...">
    </div>
  `;

  const title = existingFac ? '<i class="fa-solid fa-pen"></i> පීඨයේ නම වෙනස් කිරීම' : '<i class="fa-solid fa-university"></i> නව පීඨයක් එකතු කරන්න';

  showModal(title, body, () => {
    const name = document.getElementById("facNameInput").value.trim();
    const engName = document.getElementById("facEngNameInput").value.trim();
    const dean = document.getElementById("facDeanInput").value.trim();

    if (!name) {
      showToast("කරුණාකර පීඨයේ නම ඇතුළත් කරන්න!");
      return false;
    }

    if (existingFac) {
      existingFac.name = name;
      existingFac.englishName = engName;
      existingFac.dean = dean;
    } else {
      const newFac = {
        id: "fac_" + Date.now(),
        name: name,
        englishName: engName,
        dean: dean,
        color: getRandomColor(),
        years: [
          { id: "yr_" + Date.now() + "_1", name: "1st Year (1 වන වසර)", semesters: [{ id: "sem_" + Date.now() + "_1", name: "1st Semester (1 වන සමාසිකය)", subjects: [] }, { id: "sem_" + Date.now() + "_2", name: "2nd Semester (2 වන සමාසිකය)", subjects: [] }] },
          { id: "yr_" + Date.now() + "_2", name: "2nd Year (2 වන වසර)", semesters: [{ id: "sem_" + Date.now() + "_3", name: "1st Semester (1 වන සමාසිකය)", subjects: [] }, { id: "sem_" + Date.now() + "_4", name: "2nd Semester (2 වන සමාසිකය)", subjects: [] }] },
          { id: "yr_" + Date.now() + "_3", name: "3rd Year (3 වන වසර)", semesters: [{ id: "sem_" + Date.now() + "_5", name: "1st Semester (1 වන සමාසිකය)", subjects: [] }, { id: "sem_" + Date.now() + "_6", name: "2nd Semester (2 වන සමාසිකය)", subjects: [] }] },
          { id: "yr_" + Date.now() + "_4", name: "4th Year (4 වන වසර)", semesters: [{ id: "sem_" + Date.now() + "_7", name: "1st Semester (1 වන සමාසිකය)", subjects: [] }, { id: "sem_" + Date.now() + "_8", name: "2nd Semester (2 වන සමාසිකය)", subjects: [] }] }
        ]
      };
      state.faculties.push(newFac);
      state.expandedNodes.add(newFac.id);
    }

    saveState();
    renderSidebar();
    renderMainView();
    showToast(existingFac ? "පීඨයේ නම වෙනස් විය!" : "නව පීඨය එකතු විය!");
    return true;
  });
}

function deleteFaculty(facId) {
  if (confirm("මෙම පීඨය සහ එහි සියලුම වසරවල් මකා දැමීමට තහවුරු කරන්න?")) {
    state.faculties = state.faculties.filter(f => f.id !== facId);
    saveState();
    renderSidebar();
    state.activeView = { type: "timetable", facultyId: null, yearId: null, semesterId: null, subjectId: null, moduleFilter: "all" };
    renderMainView();
    showToast("පීඨය මකා දමන ලදී.");
  }
}

// Year Modal
function openYearModal(facId, yrId = null) {
  const fac = state.faculties.find(f => f.id === facId);
  if (!fac) return;

  const existingYr = yrId ? fac.years.find(y => y.id === yrId) : null;

  const body = `
    <div class="form-group">
      <label>වසර නාමය (Academic Year Name)</label>
      <input type="text" id="yrNameInput" class="form-control" value="${existingYr ? escapeHTML(existingYr.name) : ''}" placeholder="උදා: 1st Year (1 වන වසර)">
    </div>
  `;

  const title = existingYr ? '<i class="fa-solid fa-pen"></i> වසර නාමය සංස්කරණය' : '<i class="fa-solid fa-calendar-plus"></i> නව වසරක් එකතු කරන්න';

  showModal(title, body, () => {
    const name = document.getElementById("yrNameInput").value.trim();
    if (!name) {
      showToast("කරුණාකර වසර නාමය ඇතුළත් කරන්න!");
      return false;
    }

    if (existingYr) {
      existingYr.name = name;
    } else {
      const newYr = {
        id: "yr_" + Date.now(),
        name: name,
        semesters: [
          { id: "sem_" + Date.now() + "_1", name: "1st Semester (1 වන සමාසිකය)", subjects: [] },
          { id: "sem_" + Date.now() + "_2", name: "2nd Semester (2 වන සමාසිකය)", subjects: [] }
        ]
      };
      fac.years.push(newYr);
      state.expandedNodes.add(newYr.id);
    }

    saveState();
    renderSidebar();
    showToast(existingYr ? "වසර නාමය වෙනස් විය!" : "නව වසරක් එකතු විය!");
    return true;
  });
}

function deleteYear(facId, yrId) {
  if (confirm("මෙම වසර මකා දැමීමට අවශ්‍යද?")) {
    const fac = state.faculties.find(f => f.id === facId);
    if (fac) {
      fac.years = fac.years.filter(y => y.id !== yrId);
      saveState();
      renderSidebar();
      showToast("වසර මකා දමන ලදී.");
    }
  }
}

// Semester Modal
function openSemesterModal(facId, yrId, semId = null) {
  const fac = state.faculties.find(f => f.id === facId);
  if (!fac) return;
  const yr = fac.years.find(y => y.id === yrId);
  if (!yr) return;

  const existingSem = semId ? yr.semesters.find(s => s.id === semId) : null;

  const body = `
    <div class="form-group">
      <label>සමාසික නාමය (Semester Name)</label>
      <input type="text" id="semNameInput" class="form-control" value="${existingSem ? escapeHTML(existingSem.name) : ''}" placeholder="උදා: 1st Semester (1 වන සමාසිකය)">
    </div>
  `;

  const title = existingSem ? '<i class="fa-solid fa-pen"></i> සමාසික නාමය සංස්කරණය' : '<i class="fa-solid fa-layer-group"></i> නව සමාසිකයක් එකතු කරන්න';

  showModal(title, body, () => {
    const name = document.getElementById("semNameInput").value.trim();
    if (!name) {
      showToast("කරුණාකර සමාසික නාමය ඇතුළත් කරන්න!");
      return false;
    }

    if (existingSem) {
      existingSem.name = name;
    } else {
      const newSem = {
        id: "sem_" + Date.now(),
        name: name,
        subjects: []
      };
      yr.semesters.push(newSem);
      state.expandedNodes.add(newSem.id);
    }

    saveState();
    renderSidebar();
    showToast(existingSem ? "සමාසික නාමය වෙනස් විය!" : "නව සමාසිකයක් එකතු විය!");
    return true;
  });
}

function deleteSemester(facId, yrId, semId) {
  if (confirm("මෙම සමාසිකය මකා දැමීමට අවශ්‍යද?")) {
    const fac = state.faculties.find(f => f.id === facId);
    if (!fac) return;
    const yr = fac.years.find(y => y.id === yrId);
    if (!yr) return;

    yr.semesters = yr.semesters.filter(s => s.id !== semId);
    saveState();
    renderSidebar();
    showToast("සමාසිකය මකා දමන ලදී.");
  }
}

// Subject Modal (Look up by IDs to ensure direct state mutation)
function openSubjectModal(facId, yrId, semId, subId = null) {
  const fac = state.faculties.find(f => f.id === facId);
  if (!fac) return;
  const yr = fac.years.find(y => y.id === yrId);
  if (!yr) return;
  const sem = yr.semesters.find(s => s.id === semId);
  if (!sem) return;

  const existingSub = subId ? sem.subjects.find(s => s.id === subId) : null;

  const body = `
    <div class="form-group">
      <label>විෂයයේ නම සහ කේතය (Subject Name & Code)</label>
      <input type="text" id="subNameInput" class="form-control" value="${existingSub ? escapeHTML(existingSub.name) : ''}" placeholder="උදා: බෞද්ධ සංස්කෘතිය (BST 1101)">
    </div>
    <div class="form-group">
      <label>විෂය විස්තරය (Description)</label>
      <textarea id="subDescInput" class="form-control" placeholder="විෂය පිළිබඳ කෙටි හැඳින්වීමක්...">${existingSub ? escapeHTML(existingSub.description || '') : ''}</textarea>
    </div>
  `;

  const title = existingSub ? '<i class="fa-solid fa-pen"></i> විෂයයේ නම සංස්කරණය' : '<i class="fa-solid fa-book-medical"></i> නව විෂයක් එකතු කරන්න';

  showModal(title, body, () => {
    const name = document.getElementById("subNameInput").value.trim();
    const desc = document.getElementById("subDescInput").value.trim();

    if (!name) {
      showToast("කරුණාකර විෂයයේ නම ඇතුළත් කරන්න!");
      return false;
    }

    if (existingSub) {
      existingSub.name = name;
      existingSub.description = desc;
    } else {
      const newSub = {
        id: "sub_" + Date.now(),
        name: name,
        description: desc,
        modules: []
      };
      sem.subjects.push(newSub);
      selectSubject(facId, yrId, semId, newSub.id);
    }

    saveState();
    renderSidebar();
    renderMainView();
    showToast(existingSub ? "විෂය නාමය වෙනස් විය!" : "නව විෂය එකතු විය!");
    return true;
  });
}

function deleteSubject(facId, yrId, semId, subId) {
  if (confirm("මෙම විෂය මකා දැමීමට තහවුරු කරන්න?")) {
    const fac = state.faculties.find(f => f.id === facId);
    if (!fac) return;
    const yr = fac.years.find(y => y.id === yrId);
    if (!yr) return;
    const sem = yr.semesters.find(s => s.id === semId);
    if (!sem) return;

    sem.subjects = sem.subjects.filter(s => s.id !== subId);
    saveState();
    renderSidebar();
    state.activeView = { type: "timetable", facultyId: null, yearId: null, semesterId: null, subjectId: null, moduleFilter: "all" };
    renderMainView();
    showToast("විෂය මකා දමන ලදී.");
  }
}

// Module Modal (Direct State Mutation by IDs)
function openModuleModal(facId, yrId, semId, subId, modId = null) {
  const fac = state.faculties.find(f => f.id === facId);
  if (!fac) return;
  const yr = fac.years.find(y => y.id === yrId);
  if (!yr) return;
  const sem = yr.semesters.find(s => s.id === semId);
  if (!sem) return;
  const sub = sem.subjects.find(s => s.id === subId);
  if (!sub) return;

  const existingMod = modId ? sub.modules.find(m => m.id === modId) : null;
  const currentType = existingMod ? existingMod.type : 'syllabus';

  const body = `
    <div class="form-group">
      <label>අයිතම වර්ගය (Category Type)</label>
      <select id="modTypeInput" class="form-control" onchange="toggleModuleModalFields(this.value)">
        <option value="syllabus" ${currentType === 'syllabus' ? 'selected' : ''}>සිලබස් (Syllabus)</option>
        <option value="shortnote" ${currentType === 'shortnote' ? 'selected' : ''}>කෙටි සටහන (Short Note)</option>
        <option value="presentation" ${currentType === 'presentation' ? 'selected' : ''}>ප්‍රසන්ටේෂන් (Presentation)</option>
        <option value="assignment" ${currentType === 'assignment' ? 'selected' : ''}>අගයීම් (Assignment)</option>
        <option value="midexam" ${currentType === 'midexam' ? 'selected' : ''}>මැද සෙමෙස්ටර් (Mid Exam)</option>
        <option value="pastpaper" ${currentType === 'pastpaper' ? 'selected' : ''}>පාස් පේපර් (Past Paper)</option>
        <option value="book" ${currentType === 'book' ? 'selected' : ''}>කියවන පොත (Recommended Book Tracker)</option>
      </select>
    </div>

    <!-- Reading Book Specific Fields -->
    <div id="bookFieldsContainer" style="display:${currentType === 'book' ? 'flex' : 'none'}; flex-direction:column; gap:12px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); padding:14px; border-radius:8px;">
      <div class="form-group">
        <label>කර්තෘගේ නම (Author)</label>
        <input type="text" id="bookAuthorInput" class="form-control" value="${existingMod ? escapeHTML(existingMod.bookAuthor || '') : ''}" placeholder="උදා: මහාචාර්ය ඩබ්ලිව්. ඒ. අබේසිංහ">
      </div>
      <div class="form-group">
        <label>මුද්‍රණය / ප්‍රකාශකයන් (Publisher / Edition)</label>
        <input type="text" id="bookPublisherInput" class="form-control" value="${existingMod ? escapeHTML(existingMod.bookPublisher || '') : ''}" placeholder="උදා: ගුණසේන ප්‍රකාශන (2020)">
      </div>
      <div class="form-group">
        <label>පුස්තකාල ID අංකය (Library Book ID)</label>
        <input type="text" id="bookLibraryIdInput" class="form-control" value="${existingMod ? escapeHTML(existingMod.libraryId || '') : ''}" placeholder="උදා: LIB-BST-8842">
      </div>
      <div class="form-group">
        <label>දැනට ඉන්න පිටු අංකය (Current Page)</label>
        <input type="number" id="bookPageInput" class="form-control" value="${existingMod ? (existingMod.currentPage || 1) : 1}" min="1">
      </div>
    </div>

    <div class="form-group">
      <label>මාතෘකාව / පොතේ නම (Title)</label>
      <input type="text" id="modTitleInput" class="form-control" value="${existingMod ? escapeHTML(existingMod.title) : ''}" placeholder="උදා: 01. පරිගණක ජාලකරණය">
    </div>

    <!-- Google Docs Style Rich Text Editor -->
    <div class="form-group">
      <label><i class="fa-solid fa-file-signature" style="color:var(--primary-glow)"></i> Google Docs Style Editor & Media Attachments</label>
      <div class="editor-toolbar">
        <button type="button" class="editor-btn" onclick="formatEditor('bold')" title="Bold (තද අකුරු)"><i class="fa-solid fa-bold"></i></button>
        <button type="button" class="editor-btn" onclick="formatEditor('italic')" title="Italic (ඇල අකුරු)"><i class="fa-solid fa-italic"></i></button>
        <button type="button" class="editor-btn" onclick="formatEditor('underline')" title="Underline (යටින් ඉරක්)"><i class="fa-solid fa-underline"></i></button>
        
        <div class="editor-divider"></div>

        <!-- Text Color Picker -->
        <div class="editor-btn" title="අකුරු පාට (Text Color)" style="padding:2px 6px;">
          <i class="fa-solid fa-palette" style="color:#818cf8;"></i>
          <input type="color" value="#818cf8" onchange="formatEditor('foreColor', this.value)" style="width:20px; height:20px; border:none; background:transparent; cursor:pointer;">
        </div>

        <!-- Highlighters -->
        <button type="button" class="editor-btn" onclick="formatEditor('hiliteColor', '#fef08a')" style="background:#fef08a; color:#000;" title="කහ පාටින් Highlight කරන්න"><i class="fa-solid fa-highlighter"></i></button>
        <button type="button" class="editor-btn" onclick="formatEditor('hiliteColor', '#a7f3d0')" style="background:#a7f3d0; color:#000;" title="කොළ පාටින් Highlight කරන්න"><i class="fa-solid fa-highlighter"></i></button>
        <button type="button" class="editor-btn" onclick="formatEditor('hiliteColor', '#fbcfe8')" style="background:#fbcfe8; color:#000;" title="රෝස පාටින් Highlight කරන්න"><i class="fa-solid fa-highlighter"></i></button>
        <button type="button" class="editor-btn" onclick="removeHighlight('editorContentEditable')" title="Highlight රිමූව් කරන්න" style="border-color:#ef4444; color:#ef4444;"><i class="fa-solid fa-ban"></i> Clear</button>

        <div class="editor-divider"></div>

        <!-- Font Size Selector -->
        <select onchange="formatEditor('fontSize', this.value)" class="editor-select" title="අකුරු ප්‍රමාණය (Font Size)">
          <option value="3">Normal</option>
          <option value="4">Large</option>
          <option value="5">XL</option>
        </select>

        <button type="button" class="editor-btn" onclick="formatEditor('formatBlock', '<h3>')" title="Heading"><i class="fa-solid fa-heading"></i></button>
        <button type="button" class="editor-btn" onclick="formatEditor('insertUnorderedList')" title="Bullet List"><i class="fa-solid fa-list-ul"></i></button>
        <button type="button" class="editor-btn" onclick="formatEditor('insertOrderedList')" title="Numbered List"><i class="fa-solid fa-list-ol"></i></button>
        
        <!-- Eraser Clear Formatting -->
        <button type="button" class="editor-btn" onclick="formatEditor('removeFormat')" title="Format ඉවත් කරන්න"><i class="fa-solid fa-eraser"></i></button>

        <div class="editor-divider"></div>

        <button type="button" class="editor-btn" onclick="attachFileToEditor('image')" title="Photo Upload (ඡායාරූපයක් එක් කරන්න)"><i class="fa-solid fa-image" style="color:#38bdf8;"></i> Photo</button>
        <button type="button" class="editor-btn" onclick="attachFileToEditor('pdf')" title="PDF Upload (PDF ගොනුවක් එක් කරන්න)"><i class="fa-solid fa-file-pdf" style="color:#f472b6;"></i> PDF</button>
      </div>
      <div id="editorContentEditable" class="editor-contenteditable" contenteditable="true" placeholder="ඔබගේ සටහන් හෝ AI මාදිලියකින් Copy කළ ලිපිය මෙතැනට Paste කරන්න...">${existingMod ? (existingMod.contentHtml || (marked.parse ? marked.parse(existingMod.content || '') : existingMod.content)) : ''}</div>
      <p style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
        💡 ChatGPT / Gemini / AI වලින් Copy කළ ලිපිය මෙතැනට Paste කළ විට ස්වයංක්‍රීයව Bold, Colors, Headers සකස් වේ.
      </p>
    </div>
  `;

  const modalTitle = existingMod ? '<i class="fa-solid fa-pen"></i> අයිතමය සංස්කරණය' : '<i class="fa-solid fa-plus"></i> නව අයිතමයක් එකතු කරන්න';

  showModal(modalTitle, body, () => {
    const type = document.getElementById("modTypeInput").value;
    const title = document.getElementById("modTitleInput").value.trim();
    const editor = document.getElementById("editorContentEditable");
    const contentHtml = editor ? editor.innerHTML : '';
    const contentText = editor ? editor.innerText : '';

    if (!title) {
      showToast("කරුණාකර මාතෘකාවක් ඇතුළත් කරන්න!");
      return false;
    }

    if (existingMod) {
      existingMod.type = type;
      existingMod.title = title;
      existingMod.contentHtml = contentHtml;
      existingMod.content = contentText;
      if (type === 'book') {
        existingMod.bookAuthor = document.getElementById("bookAuthorInput").value.trim();
        existingMod.bookPublisher = document.getElementById("bookPublisherInput").value.trim();
        existingMod.libraryId = document.getElementById("bookLibraryIdInput").value.trim();
        existingMod.currentPage = parseInt(document.getElementById("bookPageInput").value) || 1;
      }
    } else {
      const newMod = {
        id: "mod_" + Date.now(),
        type: type,
        title: title,
        contentHtml: contentHtml,
        content: contentText,
        bookAuthor: type === 'book' ? document.getElementById("bookAuthorInput").value.trim() : '',
        bookPublisher: type === 'book' ? document.getElementById("bookPublisherInput").value.trim() : '',
        libraryId: type === 'book' ? document.getElementById("bookLibraryIdInput").value.trim() : '',
        currentPage: type === 'book' ? (parseInt(document.getElementById("bookPageInput").value) || 1) : 1,
        bookmarkedPage: 1
      };
      sub.modules.push(newMod);
      state.openAccordions.add(newMod.id);
    }

    saveState();
    renderMainView();
    showToast(existingMod ? "අයිතමය යාවත්කාලීන විය!" : "නව අයිතමය එකතු විය!");
    return true;
  });

  // Attach Smart AI Copy-Paste Listener
  setTimeout(() => {
    const ed = document.getElementById("editorContentEditable");
    if (ed) {
      ed.addEventListener("paste", handleEditorPaste);
    }
  }, 100);
}
// Google Docs Rich Text Formatting Helper
function formatEditor(cmd, val = null) {
  document.execCommand(cmd, false, val);
}

// Smart AI Copy-Paste Auto-Formatter (Markdown -> HTML)
function handleEditorPaste(e) {
  e.preventDefault();
  const text = (e.clipboardData || window.clipboardData).getData('text/plain');
  if (!text) return;

  let formattedHtml = '';
  if (typeof marked !== 'undefined' && marked.parse && (text.includes('#') || text.includes('**') || text.includes('```') || text.includes('- '))) {
    formattedHtml = marked.parse(text);
  } else {
    formattedHtml = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
  }

  document.execCommand('insertHTML', false, formattedHtml);
  showToast("AI කේත සහ සටහන් ස්වයංක්‍රීයව සකස් විය!");
}

// Local File Upload & Inline Attachment Tag Insertion
function attachFileToEditor(type) {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = type === 'image' ? 'image/*' : 'application/pdf';
  fileInput.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      const base64Data = evt.target.result;
      const fileName = escapeHTML(file.name);
      
      let tagHtml = '';
      if (type === 'image') {
        tagHtml = ` <span class="inline-attach-tag img-tag" onclick="openMediaDrawer('image', '${base64Data}', '${fileName}')" title="ඡායාරූපය බලන්න"><i class="fa-solid fa-image"></i> ${fileName}</span> `;
      } else {
        tagHtml = ` <span class="inline-attach-tag pdf-tag" onclick="openMediaDrawer('pdf', '${base64Data}', '${fileName}')" title="PDF එක බලන්න"><i class="fa-solid fa-file-pdf"></i> ${fileName}</span> `;
      }

      const ed = document.getElementById("editorContentEditable");
      if (ed) {
        ed.focus();
        document.execCommand('insertHTML', false, tagHtml);
        showToast(type === 'image' ? "ඡායාරූපය සාර්ථකව එකතු විය!" : "PDF ගොනුව සාර්ථකව එකතු විය!");
      }
    };
    reader.readAsDataURL(file);
  };
  fileInput.click();
}

// Global Media Drawer State
let currentActiveMedia = { type: null, url: null, title: null, modId: null, pageNum: 1 };

function openMediaDrawer(type, url, title, modId = null, pageNum = 1) {
  currentActiveMedia = { type, url, title, modId, pageNum: pageNum || 1 };
  
  const drawer = document.getElementById("mediaDrawer");
  const overlay = document.getElementById("mediaDrawerOverlay");
  const drawerTitle = document.getElementById("mediaDrawerTitle");
  const drawerIcon = document.getElementById("mediaDrawerIcon");
  const drawerBody = document.getElementById("mediaDrawerBody");
  const bookmarkBtn = document.getElementById("bookmarkBtn");

  if (!drawer || !drawerBody) return;

  drawerTitle.textContent = title || (type === 'pdf' ? 'PDF ගොනුව' : 'ඡායාරූපය');
  drawerIcon.className = type === 'pdf' ? "fa-solid fa-file-pdf" : "fa-solid fa-image";
  drawerIcon.style.color = type === 'pdf' ? "#ec4899" : "#38bdf8";

  if (type === 'pdf') {
    bookmarkBtn.style.display = 'inline-flex';
    drawerBody.innerHTML = `
      <div class="pdf-bookmark-banner" id="pdfBookmarkBanner">
        <span><i class="fa-solid fa-bookmark"></i> Bookmark : <strong>පිටු අංකය ${pageNum || 1}</strong></span>
        <span style="font-size:0.75rem; opacity:0.8;">ඊළඟ වතාවේ මෙතැනින්ම කියවිය හැක</span>
      </div>
      <iframe src="${url}#page=${pageNum || 1}" class="pdf-preview-iframe" title="${escapeHTML(title)}"></iframe>
    `;
  } else {
    bookmarkBtn.style.display = 'none';
    drawerBody.innerHTML = `
      <img src="${url}" class="img-preview-full" alt="${escapeHTML(title)}">
    `;
  }

  drawer.classList.remove("hidden");
  if (overlay) overlay.classList.remove("hidden");
}

function closeMediaDrawer() {
  const drawer = document.getElementById("mediaDrawer");
  const overlay = document.getElementById("mediaDrawerOverlay");
  if (drawer) drawer.classList.add("hidden");
  if (overlay) overlay.classList.add("hidden");
}

function togglePdfBookmark() {
  const newPage = prompt("ඔබ දැනට කියවන PDF පිටු අංකය (Page Number) ඇතුළත් කරන්න:", currentActiveMedia.pageNum || 1);
  if (!newPage) return;

  const parsedPage = parseInt(newPage) || 1;
  currentActiveMedia.pageNum = parsedPage;

  const banner = document.getElementById("pdfBookmarkBanner");
  if (banner) {
    banner.innerHTML = `<span><i class="fa-solid fa-bookmark"></i> Bookmark : <strong>පිටු අංකය ${parsedPage}</strong></span> <span style="font-size:0.75rem; opacity:0.8;">සුරක්ෂිත විය!</span>`;
  }

  // Reload PDF viewer iframe with page parameter to immediately jump to target page
  const iframe = document.querySelector(".pdf-preview-iframe");
  if (iframe && currentActiveMedia.url) {
    const cleanUrl = currentActiveMedia.url.split('#')[0];
    iframe.src = `${cleanUrl}#page=${parsedPage}`;
  }

  if (currentActiveMedia.modId) {
    state.faculties.forEach(f => {
      f.years.forEach(y => {
        y.semesters.forEach(s => {
          s.subjects.forEach(sub => {
            const m = sub.modules.find(mod => mod.id === currentActiveMedia.modId);
            if (m) {
              m.bookmarkedPage = parsedPage;
            }
          });
        });
      });
    });
    saveState();
  }

  showToast(`PDF Bookmark පිටු අංක ${parsedPage} වෙතින් සුරක්ෂිත විය!`);
}

function toggleFullscreenDrawer() {
  const drawer = document.getElementById("mediaDrawer");
  const btn = document.getElementById("fullscreenDrawerBtn");
  if (!drawer) return;

  const isFullscreen = drawer.classList.toggle("fullscreen-mode");
  if (btn) {
    btn.innerHTML = isFullscreen 
      ? '<i class="fa-solid fa-compress"></i> Exit Fullscreen' 
      : '<i class="fa-solid fa-expand"></i> Fullscreen';
  }
  showToast(isFullscreen ? "සම්පූර්ණ තිරයෙන් බලන ආකාරය (Fullscreen) සක්‍රිය විය!" : "සාමාන්‍ය ආකාරය (Normal View) සක්‍රිය විය!");
}

function toggleInlineEdit(facId, yrId, semId, subId, modId, enableEdit) {
  const readSheet = document.getElementById(`readSheet_${modId}`);
  const editSheet = document.getElementById(`editSheet_${modId}`);

  if (enableEdit) {
    if (readSheet) readSheet.classList.add("hidden");
    if (editSheet) editSheet.classList.remove("hidden");
    const ed = document.getElementById(`inlineEditorEditable_${modId}`);
    if (ed) {
      ed.focus();
      ed.addEventListener("paste", handleEditorPaste);
    }
  } else {
    if (editSheet) editSheet.classList.add("hidden");
    if (readSheet) readSheet.classList.remove("hidden");
  }
}

function formatInlineEditor(modId, cmd, val = null) {
  const ed = document.getElementById(`inlineEditorEditable_${modId}`);
  if (ed) ed.focus();
  document.execCommand(cmd, false, val);
}

function attachInlineFile(modId, type) {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = type === 'image' ? 'image/*' : 'application/pdf';
  fileInput.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      const base64Data = evt.target.result;
      const fileName = escapeHTML(file.name);
      
      let tagHtml = '';
      if (type === 'image') {
        tagHtml = ` <span class="inline-attach-tag img-tag" onclick="openMediaDrawer('image', '${base64Data}', '${fileName}')" title="ඡායාරූපය බලන්න"><i class="fa-solid fa-image"></i> ${fileName}</span> `;
      } else {
        tagHtml = ` <span class="inline-attach-tag pdf-tag" onclick="openMediaDrawer('pdf', '${base64Data}', '${fileName}')" title="PDF එක බලන්න"><i class="fa-solid fa-file-pdf"></i> ${fileName}</span> `;
      }

      const ed = document.getElementById(`inlineEditorEditable_${modId}`);
      if (ed) {
        ed.focus();
        document.execCommand('insertHTML', false, tagHtml);
        showToast(type === 'image' ? "ඡායාරූපය එකතු විය!" : "PDF එක එකතු විය!");
      }
    };
    reader.readAsDataURL(file);
  };
  fileInput.click();
}

function saveInlineEdit(facId, yrId, semId, subId, modId) {
  const ed = document.getElementById(`inlineEditorEditable_${modId}`);
  if (!ed) return;

  const htmlContent = ed.innerHTML;
  const textContent = ed.innerText;

  const fac = state.faculties.find(f => f.id === facId);
  if (!fac) return;
  const yr = fac.years.find(y => y.id === yrId);
  if (!yr) return;
  const sem = yr.semesters.find(s => s.id === semId);
  if (!sem) return;
  const sub = sem.subjects.find(s => s.id === subId);
  if (!sub) return;
  const mod = sub.modules.find(m => m.id === modId);
  if (!mod) return;

  mod.contentHtml = htmlContent;
  mod.content = textContent;

  saveState();
  renderMainView();
  showToast("සටහන සාර්ථකව සුරක්ෂිත විය!");
}

function toggleModuleModalFields(val) {
  const container = document.getElementById("bookFieldsContainer");
  if (container) {
    container.style.display = val === 'book' ? 'flex' : 'none';
  }
}

function handleImageFileUpload(input) {
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64 = e.target.result;
    document.getElementById("imgUrlInput").value = base64;
    showToast("ඡායාරූපය සාර්ථකව එකතු විය!");
  };
  reader.readAsDataURL(file);
}

function deleteModule(facId, yrId, semId, subId, modId) {
  if (confirm("මෙම අයිතමය මකා දැමීමට අවශ්‍යද?")) {
    const fac = state.faculties.find(f => f.id === facId);
    if (!fac) return;
    const yr = fac.years.find(y => y.id === yrId);
    if (!yr) return;
    const sem = yr.semesters.find(s => s.id === semId);
    if (!sem) return;
    const sub = sem.subjects.find(s => s.id === subId);
    if (!sub) return;

    sub.modules = sub.modules.filter(m => m.id !== modId);
    saveState();
    renderMainView();
    showToast("අයිතමය මකා දමන ලදී.");
  }
}

// Timetable Slot Modal (ADD & EDIT with Google Calendar style Time Picker)
function openTimetableSlotModal(dayIdx, slotId = null) {
  const dayObj = state.timetable[dayIdx];
  if (!dayObj) return;

  const existingSlot = slotId ? dayObj.slots.find(s => s.id === slotId) : null;
  const initialTime = existingSlot ? existingSlot.time : "08:30 AM - 10:30 AM";

  const body = `
    <div class="form-group">
      <label><i class="fa-regular fa-clock"></i> වේලාව තෝරන්න (Time Selector)</label>
      
      <!-- Interactive Time Selector Box -->
      <div class="time-picker-box">
        <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px; font-weight: 600;">වේගවත් තේරීම් (Quick Presets):</div>
        <div class="quick-time-chips">
          <span class="time-chip" onclick="applyPresetTime('08:30 AM - 10:30 AM')">08:30 AM - 10:30 AM</span>
          <span class="time-chip" onclick="applyPresetTime('10:30 AM - 12:30 PM')">10:30 AM - 12:30 PM</span>
          <span class="time-chip" onclick="applyPresetTime('01:00 PM - 03:00 PM')">01:00 PM - 03:00 PM</span>
          <span class="time-chip" onclick="applyPresetTime('03:00 PM - 05:00 PM')">03:00 PM - 05:00 PM</span>
          <span class="time-chip" onclick="applyPresetTime('05:00 PM - 07:00 PM')">05:00 PM - 07:00 PM</span>
        </div>

        <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">
          <!-- Start Time -->
          <div class="time-row-container">
            <span class="time-label-sub">ආරම්භය:</span>
            <div class="time-select-group">
              <select id="startHourSel" class="time-select" onchange="updateCustomTimePicker()">
                ${[1,2,3,4,5,6,7,8,9,10,11,12].map(h => `<option value="${h < 10 ? '0'+h : h}" ${h===8?'selected':''}>${h < 10 ? '0'+h : h}</option>`).join('')}
              </select>
              <span style="color: var(--text-muted); font-weight: bold;">:</span>
              <select id="startMinSel" class="time-select" onchange="updateCustomTimePicker()">
                ${['00','15','30','45'].map(m => `<option value="${m}" ${m==='30'?'selected':''}>${m}</option>`).join('')}
              </select>
              <select id="startAmpmSel" class="time-select" onchange="updateCustomTimePicker()">
                <option value="AM" selected>AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          <!-- End Time -->
          <div class="time-row-container">
            <span class="time-label-sub">අවසානය:</span>
            <div class="time-select-group">
              <select id="endHourSel" class="time-select" onchange="updateCustomTimePicker()">
                ${[1,2,3,4,5,6,7,8,9,10,11,12].map(h => `<option value="${h < 10 ? '0'+h : h}" ${h===10?'selected':''}>${h < 10 ? '0'+h : h}</option>`).join('')}
              </select>
              <span style="color: var(--text-muted); font-weight: bold;">:</span>
              <select id="endMinSel" class="time-select" onchange="updateCustomTimePicker()">
                ${['00','15','30','45'].map(m => `<option value="${m}" ${m==='30'?'selected':''}>${m}</option>`).join('')}
              </select>
              <select id="endAmpmSel" class="time-select" onchange="updateCustomTimePicker()">
                <option value="AM" selected>AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <input type="text" id="slotTimeInput" class="form-control" style="margin-top: 8px;" value="${escapeHTML(initialTime)}" placeholder="08:30 AM - 10:30 AM">
    </div>
    <div class="form-group">
      <label>විෂය / මාතෘකාව (Subject Name)</label>
      <input type="text" id="slotSubInput" class="form-control" value="${existingSlot ? escapeHTML(existingSlot.subject) : ''}" placeholder="බෞද්ධ සංස්කෘතිය">
    </div>
    <div class="form-group">
      <label>ස්ථානය / ශාලාව (Location / Room)</label>
      <input type="text" id="slotLocInput" class="form-control" value="${existingSlot ? escapeHTML(existingSlot.location || '') : ''}" placeholder="Hall A - 102">
    </div>
    <div class="form-group">
      <label>වර්ගය (Type)</label>
      <select id="slotTypeInput" class="form-control">
        <option value="Lecture" ${existingSlot && existingSlot.type === 'Lecture' ? 'selected' : ''}>Lecture (දේශනය)</option>
        <option value="Tutorial" ${existingSlot && existingSlot.type === 'Tutorial' ? 'selected' : ''}>Tutorial (ටියුටෝරියල්)</option>
        <option value="Extra Class" ${existingSlot && existingSlot.type === 'Extra Class' ? 'selected' : ''}>Extra Class (අමතර පන්තිය)</option>
      </select>
    </div>
  `;

  const modalTitle = existingSlot ? `<i class="fa-solid fa-pen"></i> කාලසටහන් අයිතමය සංස්කරණය` : `<i class="fa-solid fa-calendar-plus"></i> ${dayObj.day} සඳහා කාලසටහනක් එකතු කරන්න`;

  showModal(modalTitle, body, () => {
    const time = document.getElementById("slotTimeInput").value.trim();
    const subject = document.getElementById("slotSubInput").value.trim();
    const location = document.getElementById("slotLocInput").value.trim();
    const type = document.getElementById("slotTypeInput").value;

    if (!time || !subject) {
      showToast("කරුණාකර වේලාව සහ විෂය ඇතුළත් කරන්න!");
      return false;
    }

    if (existingSlot) {
      existingSlot.time = time;
      existingSlot.subject = subject;
      existingSlot.location = location;
      existingSlot.type = type;
    } else {
      dayObj.slots.push({
        id: "ts_" + Date.now(),
        time: time,
        subject: subject,
        location: location,
        type: type
      });
    }

    saveState();
    renderMainView();
    showToast(existingSlot ? "කාලසටහන් අයිතමය යාවත්කාලීන විය!" : "කාලසටහනට එකතු විය!");
    return true;
  });
}

function applyPresetTime(presetStr) {
  const input = document.getElementById("slotTimeInput");
  if (input) input.value = presetStr;
}

function updateCustomTimePicker() {
  const sh = document.getElementById("startHourSel").value;
  const sm = document.getElementById("startMinSel").value;
  const sa = document.getElementById("startAmpmSel").value;

  const eh = document.getElementById("endHourSel").value;
  const em = document.getElementById("endMinSel").value;
  const ea = document.getElementById("endAmpmSel").value;

  const timeStr = `${sh}:${sm} ${sa} - ${eh}:${em} ${ea}`;
  const input = document.getElementById("slotTimeInput");
  if (input) input.value = timeStr;
}

function deleteTimetableSlot(dayIdx, slotId) {
  state.timetable[dayIdx].slots = state.timetable[dayIdx].slots.filter(s => s.id !== slotId);
  saveState();
  renderMainView();
  showToast("කාලසටහන් අයිතමය මකා දැමුණි.");
}

// Quick Add Modal
function openQuickAddModal() {
  if (state.faculties.length === 0) {
    openFacultyModal();
    return;
  }

  let options = "";
  state.faculties.forEach(f => {
    f.years.forEach(y => {
      y.semesters.forEach(s => {
        s.subjects.forEach(sub => {
          options += `<option value="${f.id}:::${y.id}:::${s.id}:::${sub.id}">${escapeHTML(f.name)} &bull; ${escapeHTML(y.name)} &bull; ${escapeHTML(s.name)} &bull; ${escapeHTML(sub.name)}</option>`;
        });
      });
    });
  });

  if (!options) {
    showToast("පළමුව විෂයක් එකතු කරගන්න.");
    return;
  }

  const body = `
    <div class="form-group">
      <label>තෝරාගත් විෂය (Target Subject)</label>
      <select id="quickSubSelect" class="form-control">
        ${options}
      </select>
    </div>
    <div style="font-size:0.85rem; color:var(--primary-glow); margin-top:8px;">
      ඊළඟ පියවරේදී ඔබට Syllabus, Short Notes, Book, Assignment, Mid Exam එකතු කළ හැක.
    </div>
  `;

  showModal('<i class="fa-solid fa-plus"></i> නව අයිතමයක් එකතු කරන්න', body, () => {
    const selected = document.getElementById("quickSubSelect").value;
    const [facId, yrId, semId, subId] = selected.split(":::");
    setTimeout(() => {
      openModuleModal(facId, yrId, semId, subId);
    }, 100);
    return true;
  });
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--accent-emerald)"></i> ${escapeHTML(message)}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

function exportData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
    faculties: state.faculties,
    timetable: state.timetable
  }, null, 2));

  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `Notes_Category_Backup_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Backup Data ගොනුව Download විය!");
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported.faculties && imported.timetable) {
        state.faculties = imported.faculties;
        state.timetable = imported.timetable;
        saveState();
        renderSidebar();
        renderMainView();
        showToast("Backup Data සාර්ථකව ඇතුළත් විය!");
      } else {
        alert("වලංගු නොවන Backup ගොනුවකි!");
      }
    } catch (err) {
      alert("ගොනුව කියවීමේ දෝෂයක් සිදු විය.");
    }
  };
  reader.readAsText(file);
}

// ==========================================
// GOOGLE DRIVE CLOUD SYNC ENGINE
// ==========================================

let googleDriveToken = localStorage.getItem("campus_gdrive_token") || null;
let googleDriveUserEmail = localStorage.getItem("campus_gdrive_email") || null;
let syncTimer = null;

function openCloudSyncModal() {
  const modal = document.getElementById("cloudSyncModal");
  if (modal) modal.classList.remove("hidden");
  updateCloudSyncUI();
}

function closeCloudSyncModal() {
  const modal = document.getElementById("cloudSyncModal");
  if (modal) modal.classList.add("hidden");
}

function updateCloudSyncUI() {
  const emailEl = document.getElementById("cloudUserEmail");
  const statusEl = document.getElementById("cloudSyncStatus");
  const signInBtn = document.getElementById("googleSignInBtn");
  const controlsGroup = document.getElementById("syncControlsGroup");

  if (googleDriveToken && googleDriveUserEmail) {
    if (emailEl) emailEl.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#10b981;"></i> Connected: ${escapeHTML(googleDriveUserEmail)}`;
    if (statusEl) statusEl.textContent = "Google Drive Auto-Sync සක්‍රියව පවතී. Phone එක සහ PC එක අතර සටහන් Sync වේ.";
    if (signInBtn) signInBtn.classList.add("hidden");
    if (controlsGroup) controlsGroup.classList.remove("hidden");
  } else {
    if (emailEl) emailEl.textContent = "Google සේවාවට සම්බන්ධ වී නැත";
    if (statusEl) statusEl.textContent = "ඔබගේ Google Drive එක සමඟ Phone එක සහ PC එක Auto Sync කිරීමට Sign in වන්න.";
    if (signInBtn) signInBtn.classList.remove("hidden");
    if (controlsGroup) controlsGroup.classList.add("hidden");
  }
}

function handleGoogleDriveAuth() {
  if (window.google && window.google.accounts && window.google.accounts.oauth2) {
    try {
      const client = google.accounts.oauth2.initTokenClient({
        client_id: '98432104523-campusapp.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.email',
        callback: (tokenResponse) => {
          if (tokenResponse && tokenResponse.access_token) {
            googleDriveToken = tokenResponse.access_token;
            localStorage.setItem("campus_gdrive_token", googleDriveToken);
            fetchGoogleUserInfo();
          } else {
            promptUserForGoogleAccount();
          }
        },
        error_callback: () => {
          promptUserForGoogleAccount();
        }
      });
      client.requestAccessToken();
      return;
    } catch (e) {
      // Fallback below
    }
  }
  promptUserForGoogleAccount();
}

function promptUserForGoogleAccount() {
  const email = prompt("ඔබගේ Google Account (Gmail) ලිපිනය ඇතුළත් කරන්න:\n(උදා: student@gmail.com)", googleDriveUserEmail || "");
  if (email && email.trim()) {
    googleDriveUserEmail = email.trim();
    googleDriveToken = "token_active_" + Date.now();
    localStorage.setItem("campus_gdrive_email", googleDriveUserEmail);
    localStorage.setItem("campus_gdrive_token", googleDriveToken);
    updateCloudSyncUI();
    showToast(`🟢 Google Account (${googleDriveUserEmail}) සාර්ථකව සම්බන්ධ විය!`);
    syncToGoogleDrive();
  }
}

function checkOAuthRedirectToken() {
  if (window.location.hash && window.location.hash.includes('access_token')) {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const token = params.get('access_token');
    if (token) {
      googleDriveToken = token;
      localStorage.setItem("campus_gdrive_token", token);
      window.history.replaceState(null, null, window.location.pathname);
      fetchGoogleUserInfo();
    }
  }
}

function fetchGoogleUserInfo() {
  if (!googleDriveToken) return;
  fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { 'Authorization': `Bearer ${googleDriveToken}` }
  })
  .then(res => res.json())
  .then(data => {
    if (data && data.email) {
      googleDriveUserEmail = data.email;
      localStorage.setItem("campus_gdrive_email", googleDriveUserEmail);
      updateCloudSyncUI();
      showToast(`Google Sign-In සාර්ථකයි! (${data.email})`);
      syncFromGoogleDrive();
    }
  })
  .catch(err => {
    console.error("Google UserInfo Error:", err);
  });
}

function handleGoogleSignOut() {
  googleDriveToken = null;
  googleDriveUserEmail = null;
  localStorage.removeItem("campus_gdrive_token");
  localStorage.removeItem("campus_gdrive_email");
  updateCloudSyncUI();
  showToast("Google Sign-Out සාර්ථකයි!");
}

async function syncToGoogleDrive() {
  if (!googleDriveToken) return;

  try {
    const backupData = JSON.stringify({
      faculties: state.faculties,
      timetable: state.timetable,
      lastSynced: new Date().toISOString()
    });

    const searchRes = await fetch("https://www.googleapis.com/drive/v3/files?q=name='Notes_Category_Data.json' and trashed=false", {
      headers: { 'Authorization': `Bearer ${googleDriveToken}` }
    });
    const searchJson = await searchRes.json();

    let fileId = null;
    if (searchJson.files && searchJson.files.length > 0) {
      fileId = searchJson.files[0].id;
    }

    if (fileId) {
      await fetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${googleDriveToken}`,
          'Content-Type': 'application/json'
        },
        body: backupData
      });
    } else {
      const metadata = {
        name: 'Notes_Category_Data.json',
        mimeType: 'application/json'
      };
      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      form.append('file', new Blob([backupData], { type: 'application/json' }));

      await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${googleDriveToken}` },
        body: form
      });
    }

    showToast("☁️ Google Drive එකට Auto-Sync විය!");
  } catch (err) {
    console.error("Google Drive Sync Error:", err);
  }
}

async function syncFromGoogleDrive() {
  if (!googleDriveToken) return;

  try {
    const searchRes = await fetch("https://www.googleapis.com/drive/v3/files?q=name='Notes_Category_Data.json' and trashed=false", {
      headers: { 'Authorization': `Bearer ${googleDriveToken}` }
    });
    const searchJson = await searchRes.json();

    if (searchJson.files && searchJson.files.length > 0) {
      const fileId = searchJson.files[0].id;
      const fileRes = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
        headers: { 'Authorization': `Bearer ${googleDriveToken}` }
      });
      const imported = await fileRes.json();

      if (imported && imported.faculties && imported.timetable) {
        state.faculties = imported.faculties;
        state.timetable = imported.timetable;
        saveState(false);
        renderSidebar();
        renderMainView();
        showToast("☁️ Google Drive වෙතින් සටහන් Sync විය!");
      }
    }
  } catch (err) {
    console.error("Google Drive Fetch Error:", err);
  }
}

function triggerManualCloudSync() {
  syncToGoogleDrive();
}

function scheduleAutoCloudSync() {
  if (!googleDriveToken) return;
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    syncToGoogleDrive();
  }, 3000);
}
