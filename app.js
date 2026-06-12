const SUPPORT_EMAIL = "info@oddly.work";

const accounts = [
  { id: "crew-alex", name: "Alex", role: "crew", roleLabel: "Oddly Crew", avatar: "A" },
  { id: "parent-emma", name: "Emma", role: "parent", roleLabel: "Parent", avatar: "E" },
  { id: "neighbour-maria", name: "Maria", role: "neighbour", roleLabel: "Neighbour", avatar: "M" },
  { id: "admin-operations", name: "Oddly Operations", role: "admin", roleLabel: "Private Admin", avatar: "O" }
];

const jobs = [
  { id: 1, icon: "🌿", title: "Lawn mowing", distance: "0.4 km", pay: "kr 200", time: "Saturday · 10:00", duration: "1.5 hours", neighbour: "Maria K.", status: "Parent approved", category: "garden", tools: "Mower provided", description: "Mow the front and back lawn and tidy the edges." },
  { id: 2, icon: "🐕", title: "Dog walking", distance: "0.7 km", pay: "kr 120", time: "Today · 16:30", duration: "45 minutes", neighbour: "Johan L.", status: "New neighbour", category: "pets", tools: "Lead provided", description: "Walk friendly Labrador around the nearby park." },
  { id: 3, icon: "🚗", title: "Car washing", distance: "1.1 km", pay: "kr 180", time: "Sunday · 12:00", duration: "1 hour", neighbour: "Sandra P.", status: "Parent approved", category: "cleaning", tools: "Everything provided", description: "Exterior wash and dry for one family car." },
  { id: 4, icon: "🍂", title: "Garden tidy", distance: "1.4 km", pay: "kr 160", time: "Monday · 15:30", duration: "1 hour", neighbour: "Anders N.", status: "Trusted neighbour", category: "garden", tools: "Gloves needed", description: "Rake leaves and collect small branches." }
];

const globalJobs = [
  { id: "OD-4819", title: "Dog walking", city: "Stockholm", country: "Sweden", crew: "Alex N.", value: "kr 120", status: "In progress", age: "18 min" },
  { id: "OD-4818", title: "Garden tidy", city: "London", country: "United Kingdom", crew: "Maya R.", value: "£24", status: "Awaiting proof", age: "41 min" },
  { id: "OD-4817", title: "Car washing", city: "Sydney", country: "Australia", crew: "Noah T.", value: "A$38", status: "In progress", age: "52 min" },
  { id: "OD-4816", title: "Lawn mowing", city: "Gothenburg", country: "Sweden", crew: "Ella S.", value: "kr 260", status: "Scheduled", age: "Today" },
  { id: "OD-4815", title: "Grocery help", city: "Manchester", country: "United Kingdom", crew: "Leo P.", value: "£18", status: "Completed", age: "12 min ago" }
];

const regions = [
  { name: "Sweden", flag: "SE", jobs: "1,284", active: 38, crew: "642", value: "kr 428,600", share: 82 },
  { name: "United Kingdom", flag: "GB", jobs: "846", active: 24, crew: "391", value: "£72,480", share: 61 },
  { name: "Australia", flag: "AU", jobs: "512", active: 17, crew: "228", value: "A$96,240", share: 44 },
  { name: "Other pilots", flag: "GL", jobs: "76", active: 3, crew: "51", value: "€8,940", share: 16 }
];

const copy = {
  en: {
    prototype: "Prototype", home: "Home", jobs: "Jobs", activity: "Activity", profile: "Profile", signOut: "Sign out",
    secureAccess: "Secure account access", signInTitle: "Sign in to your Oddly account", signInCopy: "Each account only has access to its own role and information.",
    prototypeAccess: "Prototype access", chooseDemo: "Choose a demo account to preview its private workspace.", enterAccount: "Enter account",
    crewWelcome: "Ready to earn, Alex?", crewSub: "Four parent-approved jobs are available near you.",
    parentWelcome: "Everything looks good, Emma.", parentSub: "Alex has one job awaiting your approval.",
    neighbourWelcome: "Need a hand, Maria?", neighbourSub: "Post a task or check the progress of your active jobs.",
    jobsNear: "Jobs near you", viewAll: "View all", today: "Today", quickActions: "Quick actions",
    browseJobs: "Browse jobs", viewCv: "View digital CV", needHelp: "Need help?", emailSupport: "Email support",
    pendingApproval: "Pending approval", approvedJobs: "Approved jobs", limits: "Limits & controls",
    postJob: "Post a job", activeJobs: "Active jobs", trustedCrew: "Trusted Crew",
    adminWelcome: "Global operations", adminSub: "Monitor jobs, Crew activity, safety, and the total value earned through Oddly.",
    supportCopy: `Questions, admin requests, and directory enquiries go to ${SUPPORT_EMAIL}.`
  },
  sv: {
    prototype: "Prototyp", home: "Hem", jobs: "Jobb", activity: "Aktivitet", profile: "Profil", signOut: "Logga ut",
    secureAccess: "Säker kontoåtkomst", signInTitle: "Logga in på ditt Oddly-konto", signInCopy: "Varje konto har endast åtkomst till sin egen roll och information.",
    prototypeAccess: "Prototypåtkomst", chooseDemo: "Välj ett demokonto för att förhandsvisa dess privata arbetsyta.", enterAccount: "Öppna konto",
    crewWelcome: "Redo att tjäna pengar, Alex?", crewSub: "Fyra föräldragodkända jobb finns nära dig.",
    parentWelcome: "Allt ser bra ut, Emma.", parentSub: "Alex har ett jobb som väntar på ditt godkännande.",
    neighbourWelcome: "Behöver du hjälp, Maria?", neighbourSub: "Lägg upp en uppgift eller följ dina aktiva jobb.",
    jobsNear: "Jobb nära dig", viewAll: "Visa alla", today: "Idag", quickActions: "Snabbval",
    browseJobs: "Bläddra bland jobb", viewCv: "Visa digitalt CV", needHelp: "Behöver hjälp?", emailSupport: "Mejla support",
    pendingApproval: "Väntar på godkännande", approvedJobs: "Godkända jobb", limits: "Gränser och kontroller",
    postJob: "Lägg upp jobb", activeJobs: "Aktiva jobb", trustedCrew: "Betrodd Crew",
    adminWelcome: "Global verksamhet", adminSub: "Följ jobb, Crew-aktivitet, säkerhet och det totala värdet som tjänats via Oddly.",
    supportCopy: `Frågor, adminärenden och katalogförfrågningar går till ${SUPPORT_EMAIL}.`
  }
};

const state = {
  accountId: localStorage.getItem("oddly-app-account") || null,
  role: null,
  language: localStorage.getItem("oddly-app-language") || "en",
  tab: "home",
  applied: JSON.parse(localStorage.getItem("oddly-app-applied") || "[]"),
  approved: JSON.parse(localStorage.getItem("oddly-app-approved") || "[1,3]")
};

const app = document.querySelector("#app");
const appShell = document.querySelector("#appShell");
const loginScreen = document.querySelector("#loginScreen");
const accountList = document.querySelector("#accountList");
const accountIdentity = document.querySelector("#accountIdentity");
const accountRole = document.querySelector("#accountRole");
const modalBackdrop = document.querySelector("#modalBackdrop");
const modalContent = document.querySelector("#modalContent");
const toast = document.querySelector("#toast");

function t(key) { return copy[state.language][key] || key; }
function currentAccount() { return accounts.find(account => account.id === state.accountId) || null; }
function save() {
  if (state.accountId) localStorage.setItem("oddly-app-account", state.accountId);
  else localStorage.removeItem("oddly-app-account");
  localStorage.setItem("oddly-app-language", state.language);
  localStorage.setItem("oddly-app-applied", JSON.stringify(state.applied));
  localStorage.setItem("oddly-app-approved", JSON.stringify(state.approved));
}

function renderLogin() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-language]").forEach(b => b.classList.toggle("active", b.dataset.language === state.language));
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  accountList.innerHTML = accounts.map(account => `<button class="account-option" data-account-id="${account.id}">
    <span class="avatar-button">${account.avatar}</span>
    <span><strong>${account.name}</strong><small>${account.roleLabel}</small></span>
    <b>${t("enterAccount")} →</b>
  </button>`).join("");
}

function signIn(accountId) {
  const account = accounts.find(item => item.id === accountId);
  if (!account) return;
  state.accountId = account.id;
  state.role = account.role;
  state.tab = "home";
  save();
  render();
}

function signOut() {
  state.accountId = null;
  state.role = null;
  state.tab = "home";
  modalBackdrop.hidden = true;
  save();
  render();
}

function jobCard(job, action = "view-job") {
  return `<button class="card job-card" data-action="${action}" data-id="${job.id}">
    <span class="job-icon">${job.icon}</span>
    <span><h3>${job.title}</h3><p>${job.time} · ${job.distance}</p><span class="badge ${job.status.includes("approved") || job.status.includes("Trusted") ? "green" : ""}">${job.status}</span></span>
    <span class="pay">${job.pay}</span>
  </button>`;
}

function supportCard() {
  return `<div class="card support-card"><div class="list-item"><span class="list-icon">?</span><div class="list-content"><h3>${t("needHelp")}</h3><p>${t("supportCopy")}</p><a class="contact-link" href="mailto:${SUPPORT_EMAIL}">${t("emailSupport")} · ${SUPPORT_EMAIL}</a></div></div></div>`;
}

function crewHome() {
  return `<section class="welcome"><div class="eyebrow">Oddly Crew · Level 3</div><h1>${t("crewWelcome")}</h1><p>${t("crewSub")}</p></section>
  <div class="dashboard-grid"><div>
    <section class="hero-panel"><div class="eyebrow">Senior Crew next</div><h2>680 XP</h2><p>320 XP to unlock team jobs and priority matching.</p><div class="xp-row"><span>Level progress</span><span>68%</span></div><div class="progress"><span style="width:68%"></span></div><div class="actions"><button class="button light" data-tab-link="jobs">${t("browseJobs")}</button><button class="button outline" data-action="profile">${t("viewCv")}</button></div></section>
    <div class="section-heading"><h2>${t("jobsNear")}</h2><a href="#" data-tab-link="jobs">${t("viewAll")}</a></div><div class="stack">${jobs.slice(0,3).map(j => jobCard(j)).join("")}</div>
  </div><aside><div class="section-heading"><h2>${t("today")}</h2></div><div class="notice"><span>✓</span><div><h3>Dog walk · 16:30</h3><p>Parent approved. Remember to check in when you arrive.</p></div></div><div class="section-heading"><h2>${t("quickActions")}</h2></div><div class="stack">${supportCard()}</div></aside></div>`;
}

function parentHome() {
  const pending = jobs.find(j => !state.approved.includes(j.id));
  return `<section class="welcome"><div class="eyebrow">Parent dashboard</div><h1>${t("parentWelcome")}</h1><p>${t("parentSub")}</p></section>
  <div class="dashboard-grid"><div><section class="hero-panel"><div class="eyebrow">${t("pendingApproval")}</div><h2>${pending ? pending.title : "All caught up"}</h2><p>${pending ? `${pending.neighbour} · ${pending.distance} · ${pending.pay}` : "No jobs need your attention."}</p>${pending ? `<div class="actions"><button class="button light" data-action="review-job" data-id="${pending.id}">Review job</button></div>` : ""}</section>
  <div class="stats"><div class="stat"><strong>2 km</strong><span>Approved radius</span></div><div class="stat"><strong>6 hrs</strong><span>Weekly limit</span></div><div class="stat"><strong>${state.approved.length}</strong><span>${t("approvedJobs")}</span></div></div>
  <div class="section-heading"><h2>${t("limits")}</h2></div><div class="stack"><div class="card list-item"><span class="list-icon">⌖</span><div class="list-content"><h3>Job radius</h3><p>Alex sees jobs within 2 km of home.</p></div><span class="badge">Edit</span></div><div class="card list-item"><span class="list-icon">◷</span><div class="list-content"><h3>Working hours</h3><p>Weekdays until 18:00 · maximum 6 hours/week.</p></div><span class="badge">Edit</span></div></div>
  </div><aside><div class="section-heading"><h2>${t("activity")}</h2></div><div class="stack"><div class="card list-item"><span class="list-icon">✓</span><div class="list-content"><h3>Car wash completed</h3><p>Completion photo received · kr 180</p></div></div>${supportCard()}</div></aside></div>`;
}

function neighbourHome() {
  return `<section class="welcome"><div class="eyebrow">Neighbour dashboard</div><h1>${t("neighbourWelcome")}</h1><p>${t("neighbourSub")}</p></section>
  <div class="dashboard-grid"><div><section class="hero-panel"><div class="eyebrow">${t("postJob")}</div><h2>Get local help and support a young person.</h2><p>Describe the task, agree a fair price, and match with parent-approved Crew.</p><div class="actions"><button class="button light" data-action="post-job">${t("postJob")}</button></div></section>
  <div class="section-heading"><h2>${t("activeJobs")}</h2></div><div class="stack"><div class="card list-item"><span class="list-icon">🌿</span><div class="list-content"><h3>Lawn mowing · Saturday</h3><p>Matched with Alex · parent approved</p><span class="badge green">Scheduled</span></div><div class="list-side"><strong class="pay">kr 200</strong></div></div><div class="card list-item"><span class="list-icon">🚗</span><div class="list-content"><h3>Car washing · complete</h3><p>Photo proof received · payment released</p><span class="badge green">Complete</span></div></div></div>
  </div><aside><div class="section-heading"><h2>${t("trustedCrew")}</h2></div><div class="stack"><div class="card list-item"><span class="avatar-button">A</span><div class="list-content"><h3>Alex · Senior Crew</h3><p>8 completed jobs · Garden ready</p><span class="badge yellow">Trusted</span></div></div>${supportCard()}</div></aside></div>`;
}

function metricCard(label, value, change, tone = "") {
  return `<div class="admin-metric ${tone}"><span>${label}</span><strong>${value}</strong><small>${change}</small></div>`;
}

function globalJobRow(job) {
  const statusClass = job.status === "Completed" ? "green" : job.status === "Awaiting proof" ? "yellow" : "";
  return `<button class="admin-job-row" data-action="admin-job" data-id="${job.id}">
    <span><strong>${job.title}</strong><small>${job.id} · ${job.city}, ${job.country}</small></span>
    <span><strong>${job.crew}</strong><small>Oddly Crew</small></span>
    <span><strong>${job.value}</strong><small>${job.age}</small></span>
    <span class="badge ${statusClass}">${job.status}</span>
  </button>`;
}

function adminHome() {
  return `<section class="welcome admin-welcome"><div><div class="eyebrow">Private Oddly Admin</div><h1>${t("adminWelcome")}</h1><p>${t("adminSub")}</p></div><div class="live-status"><span></span> Live prototype data</div></section>
  <div class="admin-metrics">
    ${metricCard("Total earned through Oddly", "SEK 1.84m", "+18.4% this month", "value")}
    ${metricCard("Jobs in progress", "82", "Across 7 countries", "active")}
    ${metricCard("Completed jobs", "2,718", "96.8% completion rate")}
    ${metricCard("Active Oddly Crew", "1,312", "+146 this month")}
  </div>
  <div class="admin-grid">
    <section class="card operations-panel"><div class="panel-title"><div><span class="eyebrow">Worldwide activity</span><h2>Jobs happening now</h2></div><button class="text-button" data-tab-link="jobs">View all jobs</button></div>
      <div class="world-activity" aria-label="Global job activity by region">
        <div class="world-summary"><strong>82</strong><span>jobs currently in progress</span></div>
        <div class="region-bars">${regions.map(region => `<div class="region-bar"><span>${region.flag}</span><div><strong>${region.name}</strong><div class="bar-track"><i style="width:${region.share}%"></i></div></div><b>${region.active}</b></div>`).join("")}</div>
      </div>
    </section>
    <aside class="stack">
      <div class="card attention-card"><div class="panel-title"><div><span class="eyebrow">Attention</span><h2>Needs review</h2></div><b class="alert-count">4</b></div>
        <button class="attention-row" data-action="admin-alert"><span class="status-dot danger-dot"></span><span><strong>Safety check overdue</strong><small>Job OD-4792 · London · 8 min</small></span></button>
        <button class="attention-row" data-action="admin-alert"><span class="status-dot warning-dot"></span><span><strong>Completion proof pending</strong><small>3 jobs waiting over 30 min</small></span></button>
        <a class="admin-email" href="mailto:${SUPPORT_EMAIL}">Escalations: ${SUPPORT_EMAIL}</a>
      </div>
      <div class="card"><div class="panel-title"><div><span class="eyebrow">Today</span><h2>Job value</h2></div></div><div class="value-today"><strong>SEK 74,820</strong><span>Gross job value, not Oddly fees</span></div><div class="spark-bars" aria-label="Job value trend"><i style="height:35%"></i><i style="height:48%"></i><i style="height:42%"></i><i style="height:64%"></i><i style="height:58%"></i><i style="height:77%"></i><i style="height:92%"></i></div></div>
    </aside>
  </div>
  <div class="section-heading"><h2>Latest jobs worldwide</h2><a href="#" data-tab-link="jobs">Open operations list</a></div>
  <div class="admin-job-list">${globalJobs.slice(0,4).map(globalJobRow).join("")}</div>`;
}

function adminJobsView() {
  return `<section class="welcome"><div class="eyebrow">Admin · Global jobs</div><h1>Jobs around the world</h1><p>Operational view of scheduled, active, and completed jobs. Prototype figures are illustrative.</p></section>
  <div class="filter-row"><button class="active">All jobs</button><button>In progress</button><button>Needs review</button><button>Completed</button><button>Country</button></div>
  <div class="admin-metrics compact">${metricCard("In progress", "82", "Live now", "active")}${metricCard("Scheduled today", "214", "Next 24 hours")}${metricCard("Awaiting proof", "11", "3 require review", "warning")}</div>
  <div class="section-heading"><h2>Global job operations</h2><span class="updated-label">Updated just now</span></div><div class="admin-job-list">${globalJobs.map(globalJobRow).join("")}</div>`;
}

function adminActivityView() {
  return `<section class="welcome"><div class="eyebrow">Admin · Markets</div><h1>Regional performance</h1><p>Jobs, active Crew, and total gross job value by market.</p></section>
  <div class="region-table"><div class="region-row region-head"><span>Market</span><span>Jobs</span><span>Active Crew</span><span>Total job value</span></div>
  ${regions.map(region => `<div class="region-row"><span><b>${region.flag}</b><strong>${region.name}</strong></span><span>${region.jobs}</span><span>${region.crew}</span><span>${region.value}</span></div>`).join("")}</div>
  <div class="section-heading"><h2>Operational health</h2></div><div class="admin-metrics compact">${metricCard("Parent approval", "94.2%", "+1.8%")}${metricCard("On-time check-in", "91.6%", "+0.7%")}${metricCard("Payment released", "98.9%", "Within target")}</div>`;
}

function jobsView() {
  if (state.role === "admin") return adminJobsView();
  return `<section class="welcome"><div class="eyebrow">${t("jobs")}</div><h1>${state.role === "neighbour" ? "Your posted jobs" : t("jobsNear")}</h1><p>${state.role === "crew" ? "Browse safe jobs inside your parent-approved area." : "Track each job from approval through completion."}</p></section>
  <div class="filter-row"><button class="active">All</button><button>Garden</button><button>Pets</button><button>Cleaning</button><button>Under 1 km</button></div>
  <div class="section-heading"><h2>Available now</h2></div><div class="stack">${jobs.map(j => jobCard(j, state.role === "parent" ? "review-job" : "view-job")).join("")}</div>`;
}

function activityView() {
  if (state.role === "admin") return adminActivityView();
  return `<section class="welcome"><div class="eyebrow">${t("activity")}</div><h1>Recent activity</h1><p>Updates from jobs, approvals, payments, and feedback.</p></section><div class="stack">
  <div class="card list-item"><span class="list-icon">✓</span><div class="list-content"><h3>Car wash confirmed</h3><p>Completion photo accepted and payment released.</p><span class="badge green">Today</span></div></div>
  <div class="card list-item"><span class="list-icon">+</span><div class="list-content"><h3>150 XP earned</h3><p>Challenge completed: On a roll.</p><span class="badge">Yesterday</span></div></div>
  <div class="card list-item"><span class="list-icon">★</span><div class="list-content"><h3>Outstanding feedback</h3><p>“Arrived on time and gave it everything.”</p></div></div>${supportCard()}</div>`;
}

function profileView() {
  const profileName = state.role === "crew" ? "Alex's Oddly CV" : state.role === "parent" ? "Emma's parent account" : state.role === "neighbour" ? "Maria's neighbour profile" : "Oddly Operations account";
  const accountDetails = state.role === "crew" ? "Age 15 · Senior Crew · parent linked" : state.role === "parent" ? "Linked to Alex · notifications enabled" : state.role === "neighbour" ? "Identity verified · Trusted Neighbour" : "Private admin · global operations access · audit logging required";
  return `<section class="welcome"><div class="eyebrow">${t("profile")}</div><h1>${profileName}</h1><p>Profile data in this prototype is stored only in this browser.</p></section>
  <div class="card"><div class="list-item"><span class="avatar-button">${currentAccount().avatar}</span><div class="list-content"><h3>Account details</h3><p>${accountDetails}</p></div></div></div>
  <div class="section-heading"><h2>Settings</h2></div><div class="stack"><div class="card list-item"><span class="list-icon">◎</span><div class="list-content"><h3>Language</h3><p>English and Swedish supported.</p></div></div><div class="card list-item"><span class="list-icon">@</span><div class="list-content"><h3>Admin and directory email</h3><p>All enquiries route to <a class="contact-link" href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>.</p></div></div><button class="button danger full" data-action="sign-out">${t("signOut")}</button></div>`;
}

function render() {
  const account = currentAccount();
  if (!account) {
    appShell.hidden = true;
    loginScreen.hidden = false;
    renderLogin();
    return;
  }
  state.role = account.role;
  loginScreen.hidden = true;
  appShell.hidden = false;
  accountIdentity.textContent = account.name;
  accountRole.textContent = account.roleLabel;
  document.querySelector(".avatar-button[data-action='profile']").textContent = account.avatar;
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-language]").forEach(b => b.classList.toggle("active", b.dataset.language === state.language));
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll(".bottom-nav button").forEach(b => b.classList.toggle("active", b.dataset.tab === state.tab));
  if (state.tab === "jobs") app.innerHTML = jobsView();
  else if (state.tab === "activity") app.innerHTML = activityView();
  else if (state.tab === "profile") app.innerHTML = profileView();
  else app.innerHTML = state.role === "crew" ? crewHome() : state.role === "parent" ? parentHome() : state.role === "neighbour" ? neighbourHome() : adminHome();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function openJob(id, review = false) {
  const job = jobs.find(j => j.id === Number(id));
  modalContent.innerHTML = `<div class="eyebrow">${review ? "Parent approval" : "Job details"}</div><h2 id="modalTitle">${job.icon} ${job.title}</h2><p>${job.description}</p>
  <div class="detail-grid"><div class="detail"><strong>${job.pay}</strong><span>Agreed price</span></div><div class="detail"><strong>${job.distance}</strong><span>From home</span></div><div class="detail"><strong>${job.time}</strong><span>Start time</span></div><div class="detail"><strong>${job.duration}</strong><span>Estimated duration</span></div></div>
  <div class="card"><h3>Neighbour</h3><p>${job.neighbour} · identity and address verified</p><span class="badge green">${job.status}</span></div>
  <div class="section-heading"><h2>Job preparation</h2></div><div class="card"><p>${job.tools}</p><p>Check in on arrival, submit a completion photo, and check out when leaving.</p></div>
  <div class="actions">${review ? `<button class="button primary full" data-action="approve-job" data-id="${job.id}">Approve job</button><button class="button danger full" data-action="decline-job" data-id="${job.id}">Decline</button>` : `<button class="button primary full" data-action="apply-job" data-id="${job.id}">${state.applied.includes(job.id) ? "Application sent" : "Apply for job"}</button>`}</div>`;
  modalBackdrop.hidden = false;
}

function openPostJob() {
  modalContent.innerHTML = `<div class="eyebrow">New job</div><h2 id="modalTitle">Post a local task</h2><form class="form" id="postJobForm">
  <div class="field"><label>Job type</label><select required><option value="">Choose a job type</option><option>Lawn mowing</option><option>Dog walking</option><option>Car washing</option><option>Garden tidy</option></select></div>
  <div class="field"><label>Description</label><textarea required placeholder="What needs doing?"></textarea></div>
  <div class="field"><label>Suggested price</label><input required placeholder="kr 200" /></div>
  <div class="field"><label>Date and time</label><input required type="datetime-local" /></div>
  <div class="notice"><span>i</span><p>This prototype does not transmit data. In production, job and admin notifications will route through the backend and ${SUPPORT_EMAIL}.</p></div>
  <button class="button primary full" type="submit">Preview and post</button></form>`;
  modalBackdrop.hidden = false;
}

document.addEventListener("click", event => {
  const target = event.target.closest("button, a");
  if (!target) return;
  if (target.dataset.accountId) signIn(target.dataset.accountId);
  if (target.dataset.language) { state.language = target.dataset.language; save(); render(); }
  if (target.dataset.tab) { state.tab = target.dataset.tab; render(); app.focus(); }
  if (target.dataset.tabLink) { event.preventDefault(); state.tab = target.dataset.tabLink; render(); app.focus(); }
  if (target.dataset.action === "home") { state.tab = "home"; render(); }
  if (target.dataset.action === "profile") { state.tab = "profile"; render(); }
  if (target.dataset.action === "notifications") showToast("3 notifications: one approval, one payment, one badge.");
  if (target.dataset.action === "admin-alert") showToast(`Admin review opened. Escalations route to ${SUPPORT_EMAIL}.`);
  if (target.dataset.action === "admin-job") showToast(`Job ${target.dataset.id} selected. Detailed audit view is the next backend stage.`);
  if (target.dataset.action === "sign-out") signOut();
  if (target.dataset.action === "view-job") openJob(target.dataset.id);
  if (target.dataset.action === "review-job") openJob(target.dataset.id, true);
  if (target.dataset.action === "close-modal") modalBackdrop.hidden = true;
  if (target.dataset.action === "post-job") openPostJob();
  if (target.dataset.action === "apply-job") {
    if (!state.applied.includes(Number(target.dataset.id))) state.applied.push(Number(target.dataset.id));
    save(); modalBackdrop.hidden = true; showToast("Application sent to your parent for approval.");
  }
  if (target.dataset.action === "approve-job") {
    if (!state.approved.includes(Number(target.dataset.id))) state.approved.push(Number(target.dataset.id));
    save(); modalBackdrop.hidden = true; render(); showToast("Job approved. Alex has been notified.");
  }
  if (target.dataset.action === "decline-job") { modalBackdrop.hidden = true; showToast(`Job declined. Support is available at ${SUPPORT_EMAIL}.`); }
});

modalBackdrop.addEventListener("click", event => { if (event.target === modalBackdrop) modalBackdrop.hidden = true; });
document.addEventListener("submit", event => {
  if (event.target.id === "postJobForm") { event.preventDefault(); modalBackdrop.hidden = true; showToast("Job draft created. No data was transmitted."); }
});

render();
