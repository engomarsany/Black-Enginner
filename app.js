/* ==========================================================================
   BLACK ENGINEERS - MASTER APPLICATION ENGINE (MARQUEES & OWNER TERMINAL)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. STATE MANAGEMENT (LOCAL PERSISTENCE)
    // ----------------------------------------------------------------------

    const defaultServices = [
        { id: 1, title: 'Travels & Tour Banner Design', desc: 'High-converting promotional banners and ad campaign setup for travel agencies.', stat: '✓ 45+ Campaigns', img: 'assets/travel_tour_banner_1785325297788.jpg' },
        { id: 2, title: 'Customize Software Development', desc: 'Tailor-made enterprise software solutions built specifically for your business.', stat: '✓ Full Stack Tech', img: 'assets/hero_brand_design_1785324740401.jpg' },
        { id: 3, title: 'High-Performance Web Apps', desc: 'Modern Next.js, React & Node.js web applications with lightning fast UX.', stat: '✓ 100% Guaranteed', img: 'assets/hero_code_course_1785324756684.jpg' },
        { id: 4, title: 'Personal 1-on-1 Training (Meet)', desc: 'Direct live 1-on-1 mentorship sessions on Google Meet for ads & coding.', stat: '✓ Live Google Meet', img: 'assets/service_social_media_1785324953806.jpg' },
        { id: 5, title: 'Corporate Team Training', desc: 'Up-skill your company team with advanced ads scaling & software engineering.', stat: '✓ Enterprise Teams', img: 'assets/service_video_editing_1785324974837.jpg' }
    ];

    const defaultProjects = [
        { id: 301, title: 'TechCorp Website Redesign', subtitle: 'TechCorp Bangladesh', category: 'PROJECT', img: 'assets/hero_brand_design_1785324740401.jpg' },
        { id: 302, title: 'FoodBD Brand Identity', subtitle: 'FoodBD Limited', category: 'PROJECT', img: 'assets/hero_code_course_1785324756684.jpg' },
        { id: 303, title: 'GreenEnergy Ad Campaign', subtitle: 'GreenEnergy Bangladesh', category: 'PROJECT', img: 'assets/service_social_media_1785324953806.jpg' },
        { id: 304, title: 'StyleHouse E-commerce', subtitle: 'StyleHouse BD', category: 'PROJECT', img: 'assets/service_video_editing_1785324974837.jpg' }
    ];

    const defaultTemplates = [
        { id: 101, title: 'Next.js SaaS Boilerplate v2.4', category: 'Full-stack Starter', downloadUrl: 'https://github.com/engomarsany/Black-Enginner', previewUrl: '#' },
        { id: 102, title: 'Flutter Multi-vendor E-commerce UI', category: 'Mobile UI Kit', downloadUrl: 'https://github.com/engomarsany/Black-Enginner', previewUrl: '#' },
        { id: 103, title: 'Cyberpunk Portfolio & Agency Theme', category: 'Vanilla HTML/CSS', downloadUrl: 'https://github.com/engomarsany/Black-Enginner', previewUrl: '#' },
        { id: 104, title: 'React Dashboard & Analytics UI', category: 'Admin Panel', downloadUrl: 'https://github.com/engomarsany/Black-Enginner', previewUrl: '#' }
    ];

    const defaultCourses = [
        {
            id: 201,
            title: 'এডভান্সড ফেসবুক ও গুগল এডস মাস্টারক্লাস',
            desc: 'স্কেলিং, পিক্সেল ট্র্যাকিং ও কম খরচে হাই-কনভার্টিং সেলস ফানেল তৈরি শিখুন।',
            lessons: [
                { id: 'v1', title: 'পাঠ ১: কোর্স ভূমিকা ও ফানেল স্ট্র্যাটেজি', isUnlocked: true, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
                { id: 'v2', title: 'পাঠ ২: পিনপয়েন্ট অডিয়েন্স রিসার্চ ও বিডিং', isUnlocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
                { id: 'v3', title: 'পাঠ ৩: হাই-কনভার্টিং ক্যাটালগ ও পিক্সেল সেটআপ', isUnlocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
                { id: 'v4', title: 'পাঠ ৪: স্কেলিং ও রিটার্গেটিং টেকনিক', isUnlocked: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylines.mp4' }
            ]
        }
    ];

    const defaultBookings = [
        {
            id: 'REQ-8841',
            name: 'তানজিল আহমেদ',
            phone: '01711223344',
            platform: 'Facebook & Instagram Ads',
            budget: '৳১৫,০০০ - ৳৫০,০০০',
            details: 'ক্লোথিং ব্র্যান্ডের জন্য সেলস ক্যাম্পেইন প্রয়োজন।',
            timestamp: new Date().toLocaleTimeString(),
            status: 'PENDING'
        }
    ];

    const defaultUsers = [
        { id: 'USR-101', name: 'Black Engineer Owner', email: 'admin@blackengineer.dev', role: 'ADMIN', hasAllAccess: true },
        { id: 'USR-102', name: 'Demo Customer', email: 'customer@gmail.com', role: 'CUSTOMER', hasAllAccess: false }
    ];

    // Load from LocalStorage or Fallback
    let services = JSON.parse(localStorage.getItem('be_services_v3')) || defaultServices;
    let projects = JSON.parse(localStorage.getItem('be_projects')) || defaultProjects;
    let templates = JSON.parse(localStorage.getItem('be_templates')) || defaultTemplates;
    let courses = JSON.parse(localStorage.getItem('be_courses')) || defaultCourses;
    let bookings = JSON.parse(localStorage.getItem('be_bookings')) || defaultBookings;
    let users = JSON.parse(localStorage.getItem('be_users')) || defaultUsers;

    let currentUser = JSON.parse(localStorage.getItem('be_current_user')) || null;

    function saveState() {
        localStorage.setItem('be_services_v3', JSON.stringify(services));
        localStorage.setItem('be_projects', JSON.stringify(projects));
        localStorage.setItem('be_templates', JSON.stringify(templates));
        localStorage.setItem('be_courses', JSON.stringify(courses));
        localStorage.setItem('be_bookings', JSON.stringify(bookings));
        localStorage.setItem('be_users', JSON.stringify(users));
        localStorage.setItem('be_current_user', JSON.stringify(currentUser));
    }

    // Audio Synth for Terminal Alert
    function playTerminalAlertSound() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.15);

            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } catch (e) {}
    }

    // ----------------------------------------------------------------------
    // 2. RENDER MARQUEE CAROUSELS (INFINITE SMOOTH LOOP)
    // ----------------------------------------------------------------------

    function renderServicesMarquee() {
        const track = document.getElementById('services-marquee-track');
        if (!track) return;

        // Create card HTML snippet
        const cardsHtml = services.map(s => `
            <div class="marquee-card" onclick="scrollToAdsBooking('${s.title}')">
                <div class="marquee-card-img" style="background-image: url('${s.img}');"></div>
                <div class="marquee-card-body">
                    <span class="pink-badge">SERVICE</span>
                    <h4>${s.title}</h4>
                    <p>${s.desc}</p>
                    <span class="marquee-card-meta">${s.stat}</span>
                </div>
            </div>
        `).join('');

        // Duplicate 3x to ensure flawless infinite marquee loop with zero gaps
        track.innerHTML = cardsHtml + cardsHtml + cardsHtml;
    }

    function renderProjectsMarquee() {
        const track = document.getElementById('projects-marquee-track');
        if (!track) return;

        const cardsHtml = projects.map(p => `
            <div class="marquee-card">
                <div class="marquee-card-img" style="background-image: url('${p.img}');"></div>
                <div class="marquee-card-body">
                    <span class="pink-badge">${p.category}</span>
                    <h4>${p.title}</h4>
                    <p>${p.subtitle}</p>
                </div>
            </div>
        `).join('');

        // Duplicate 3x for infinite loop
        track.innerHTML = cardsHtml + cardsHtml + cardsHtml;
    }

    function renderTemplates() {
        const container = document.getElementById('templates-container');
        if (!container) return;

        const hasPass = currentUser && (currentUser.hasAllAccess || currentUser.role === 'ADMIN');

        container.innerHTML = templates.map(t => `
            <div class="template-card">
                <div class="template-preview-area">
                    <span class="template-tag">${t.category}</span>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,0,127,0.3)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div class="template-card-body">
                    <h3>${t.title}</h3>
                    <p>সম্পূর্ণ সোর্স কোড ও ডকুমেন্টেশন সহ প্রডিউসড টেমপ্লেট।</p>
                    <button class="btn-download-tpl ${hasPass ? 'unlocked' : 'locked'}" onclick="handleTemplateDownload('${t.downloadUrl}', ${hasPass})">
                        ${hasPass ? 'ডাউনলোড সোর্স কোড' : 'লকড (প্যাকেজ কিনুন)'}
                    </button>
                </div>
            </div>
        `).join('');
    }

    function renderCourses() {
        const container = document.getElementById('courses-container');
        if (!container) return;

        container.innerHTML = courses.map(c => `
            <div class="course-card">
                <div class="course-thumb" style="height:170px; background:linear-gradient(135deg, #1e1b4b, #0f172a); display:flex; align-items:center; justify-content:center;">
                    <span class="pink-badge" style="position:absolute; top:1rem; right:1rem;">১ম পাঠ ফ্রি প্রিভিউ</span>
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,0,127,0.6)" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div class="course-body">
                    <h3>${c.title}</h3>
                    <p>${c.desc}</p>
                    <button class="btn-open-course" onclick="openCoursePlayer(${c.id})">
                        <span>কোর্স ও ফ্রি প্রিভিউ দেখুন</span>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // ----------------------------------------------------------------------
    // 3. ADS SETUP DIRECT BOOKING FORM (NO UPFRONT PAYMENT)
    // ----------------------------------------------------------------------
    const adsForm = document.getElementById('ads-booking-form');
    if (adsForm) {
        adsForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('ads-name').value;
            const phone = document.getElementById('ads-phone').value;
            const platform = document.getElementById('ads-platform').value;
            const budget = document.getElementById('ads-budget').value;
            const details = document.getElementById('ads-details').value;

            const newBooking = {
                id: 'REQ-' + Math.floor(1000 + Math.random() * 9000),
                name,
                phone,
                platform,
                budget,
                details: details || 'N/A',
                timestamp: new Date().toLocaleTimeString(),
                status: 'PENDING'
            };

            bookings.unshift(newBooking);
            saveState();

            playTerminalAlertSound();
            renderTerminalBookings();

            const modal = document.getElementById('booking-modal');
            const receiptBox = document.getElementById('booking-receipt');
            if (modal && receiptBox) {
                receiptBox.innerHTML = `
                    <strong>BOOKING ID:</strong> ${newBooking.id}<br>
                    <strong>CLIENT:</strong> ${name} (${phone})<br>
                    <strong>SERVICE:</strong> ${platform}<br>
                    <strong>STATUS:</strong> SUCCESSFUL (PENDING OWNER CONTACT)
                `;
                modal.classList.remove('hidden');
            }

            adsForm.reset();
        });
    }

    // Global helper for Web Dev Modal & Plan Selection
    window.openWebDevModal = function() {
        const modal = document.getElementById('web-dev-modal');
        if (modal) modal.classList.remove('hidden');
    };

    window.selectWebPlan = function(planTitle) {
        // Close modal
        const modal = document.getElementById('web-dev-modal');
        if (modal) modal.classList.add('hidden');

        // Scroll to booking form and set platform
        const adsSec = document.getElementById('ads-booking');
        const platformSelect = document.getElementById('ads-platform');
        if (adsSec) adsSec.scrollIntoView({ behavior: 'smooth' });

        if (platformSelect) {
            // Check if option exists, otherwise add dynamically
            let exists = Array.from(platformSelect.options).some(opt => opt.value === planTitle);
            if (!exists) {
                const newOpt = document.createElement('option');
                newOpt.value = planTitle;
                newOpt.textContent = planTitle;
                platformSelect.appendChild(newOpt);
            }
            platformSelect.value = planTitle;
        }
    };

    // Helper functions
    window.scrollToSec = function(secId) {
        const sec = document.getElementById(secId);
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    };

    window.scrollToAdsBooking = function(serviceTitle) {
        if (serviceTitle && (serviceTitle.includes('Web') || serviceTitle.includes('Software'))) {
            openWebDevModal();
            return;
        }

        const adsSec = document.getElementById('ads-booking');
        if (adsSec) {
            adsSec.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.handleTemplateDownload = function(url, isUnlocked) {
        if (isUnlocked) {
            alert('ডাউনলোড শুরু হচ্ছে: ' + url);
        } else {
            alert('টেমপ্লেট সোর্স কোড ডাউনলোড করার জন্য "অল-এক্সেস প্যাকেজ" কিনুন অথবা লগইন করুন।');
        }
    };

    const buyPackBtn = document.getElementById('buy-template-pack-btn');
    if (buyPackBtn) {
        buyPackBtn.addEventListener('click', () => {
            if (!currentUser) {
                openAuthModal();
                return;
            }
            currentUser.hasAllAccess = true;
            const userIdx = users.findIndex(u => u.id === currentUser.id);
            if (userIdx !== -1) users[userIdx].hasAllAccess = true;
            saveState();
            renderTemplates();
            alert('অভিনন্দন! আপনার অ্যাকাউন্টে "অল-ইন-ওয়ান টেমপ্লেট ভল্ট লাইফটাইম এক্সেস" আনলক হয়েছে।');
        });
    }

    // Course Video Player Engine
    let activeCourseId = null;

    window.openCoursePlayer = function(courseId) {
        activeCourseId = courseId;
        const course = courses.find(c => c.id === courseId);
        if (!course) return;

        const modal = document.getElementById('course-modal');
        if (modal) {
            renderPlaylist(course);
            if (course.lessons.length > 0) playLesson(course.lessons[0]);
            modal.classList.remove('hidden');
        }
    };

    function renderPlaylist(course) {
        const playlist = document.getElementById('playlist-container');
        if (!playlist) return;

        const hasCourseAccess = currentUser && (currentUser.hasAllAccess || currentUser.role === 'ADMIN');

        playlist.innerHTML = course.lessons.map((l, index) => {
            const isAccessible = l.isUnlocked || hasCourseAccess;
            return `
                <div class="playlist-item ${index === 0 ? 'active' : ''}" onclick="selectLesson('${l.id}')">
                    <span class="playlist-item-title">${l.title}</span>
                    <span class="playlist-item-status ${isAccessible ? 'unlocked' : 'locked'}">
                        ${isAccessible ? 'UNLOCKED' : 'LOCKED'}
                    </span>
                </div>
            `;
        }).join('');
    }

    window.selectLesson = function(lessonId) {
        const course = courses.find(c => c.id === activeCourseId);
        if (!course) return;

        const lesson = course.lessons.find(l => l.id === lessonId);
        if (!lesson) return;

        const hasCourseAccess = currentUser && (currentUser.hasAllAccess || currentUser.role === 'ADMIN');

        if (lesson.isUnlocked || hasCourseAccess) {
            playLesson(lesson);
        } else {
            alert('এই পাঠটি লক করা আছে! সম্পূর্ণ কোর্সের এক্সেস পেতে এনরোল করুন।');
        }
    };

    function playLesson(lesson) {
        const videoElem = document.getElementById('course-video-element');
        const titleElem = document.getElementById('current-video-title');
        const badgeElem = document.getElementById('current-video-badge');

        if (videoElem && titleElem && badgeElem) {
            videoElem.src = lesson.videoUrl;
            videoElem.play().catch(() => {});
            titleElem.textContent = lesson.title;
            badgeElem.textContent = lesson.isUnlocked ? 'UNLOCKED PREVIEW' : 'FULL COURSE LESSON';
        }
    }

    // ----------------------------------------------------------------------
    // 4. CYBER-HACKER OWNER TERMINAL ENGINE
    // ----------------------------------------------------------------------

    const terminalOverlay = document.getElementById('cyber-terminal');
    const secretAdminBtn = document.getElementById('secret-admin-btn');
    const closeTerminalBtn = document.getElementById('close-terminal-btn');

    if (secretAdminBtn) {
        secretAdminBtn.addEventListener('click', () => {
            terminalOverlay.classList.remove('hidden');
            renderTerminalBookings();
            renderTerminalTemplates();
            renderTerminalCourses();
            renderTerminalUsers();
            playTerminalAlertSound();
        });
    }

    if (closeTerminalBtn) {
        closeTerminalBtn.addEventListener('click', () => {
            terminalOverlay.classList.add('hidden');
        });
    }

    const termTabs = document.querySelectorAll('.term-tab');
    termTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            termTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetTab = tab.dataset.termtab;
            document.querySelectorAll('.term-content-section').forEach(sec => sec.classList.add('hidden'));
            const activeSec = document.getElementById(`termtab-${targetTab}`);
            if (activeSec) activeSec.classList.remove('hidden');
        });
    });

    function renderTerminalBookings() {
        const tbody = document.getElementById('term-bookings-tbody');
        const countBadge = document.getElementById('term-booking-count');
        if (countBadge) countBadge.textContent = `${bookings.length} REQ`;
        if (!tbody) return;

        tbody.innerHTML = bookings.map(b => `
            <tr>
                <td><strong>${b.id}</strong><br><small style="color:#64748b;">${b.timestamp}</small></td>
                <td>${b.name}</td>
                <td style="color:#00e5ff;">${b.phone}</td>
                <td>${b.platform}</td>
                <td>${b.budget}</td>
                <td>
                    <span class="term-status-pill ${b.status.toLowerCase()}">${b.status}</span>
                </td>
                <td>
                    ${b.status === 'PENDING' ? `
                        <button class="btn-term-action" onclick="toggleBookingStatus('${b.id}')">কন্টাক্ট সম্পন্ন</button>
                    ` : `
                        <span style="color:#00ff8c; font-size:0.75rem;">DONE</span>
                    `}
                </td>
            </tr>
        `).join('');
    }

    window.toggleBookingStatus = function(bookingId) {
        const booking = bookings.find(b => b.id === bookingId);
        if (booking) {
            booking.status = booking.status === 'PENDING' ? 'COMPLETED' : 'PENDING';
            saveState();
            renderTerminalBookings();
        }
    };

    function renderTerminalTemplates() {
        const list = document.getElementById('term-templates-list');
        if (!list) return;

        list.innerHTML = templates.map(t => `
            <div class="term-list-item">
                <div>
                    <strong style="color:#00ff8c;">${t.title}</strong>
                    <div style="color:#64748b; font-size:0.75rem;">Category: ${t.category}</div>
                </div>
                <button class="btn-term-action" onclick="deleteTemplate(${t.id})">DELETE</button>
            </div>
        `).join('');
    }

    const addTplForm = document.getElementById('term-add-template-form');
    if (addTplForm) {
        addTplForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('term-tpl-title').value;
            const category = document.getElementById('term-tpl-category').value;
            const downloadUrl = document.getElementById('term-tpl-url').value;

            templates.unshift({ id: Date.now(), title, category, downloadUrl, previewUrl: '#' });
            saveState();
            renderTemplates();
            renderTerminalTemplates();
            addTplForm.reset();
        });
    }

    window.deleteTemplate = function(id) {
        templates = templates.filter(t => t.id !== id);
        saveState();
        renderTemplates();
        renderTerminalTemplates();
    };

    function renderTerminalCourses() {
        const list = document.getElementById('term-courses-list');
        if (!list) return;

        list.innerHTML = courses.map(c => `
            <div style="background:#020409; border:1px solid rgba(0,255,140,0.2); padding:1rem; border-radius:8px; margin-bottom:1rem;">
                <h4 style="color:#00ff8c; margin-bottom:0.75rem;">${c.title}</h4>
                <div style="display:flex; flex-direction:column; gap:0.5rem;">
                    ${c.lessons.map(l => `
                        <div class="term-list-item">
                            <span>${l.title}</span>
                            <button class="btn-term-action" onclick="toggleLessonUnlock('${c.id}', '${l.id}')">
                                ${l.isUnlocked ? 'LOCK LESSON' : 'UNLOCK (FREE PREVIEW)'}
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    window.toggleLessonUnlock = function(courseId, lessonId) {
        const course = courses.find(c => c.id == courseId);
        if (course) {
            const lesson = course.lessons.find(l => l.id === lessonId);
            if (lesson) {
                lesson.isUnlocked = !lesson.isUnlocked;
                saveState();
                renderCourses();
                renderTerminalCourses();
            }
        }
    };

    function renderTerminalUsers() {
        const tbody = document.getElementById('term-users-tbody');
        if (!tbody) return;

        tbody.innerHTML = users.map(u => `
            <tr>
                <td>${u.id}</td>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td style="color:${u.role === 'ADMIN' ? '#00ff8c' : '#00e5ff'};">${u.role}</td>
                <td>${u.hasAllAccess ? '<span style="color:#00ff8c;">ACTIVE</span>' : '<span style="color:#94a3b8;">NO PASS</span>'}</td>
                <td>
                    <button class="btn-term-action" onclick="toggleUserAccess('${u.id}')">
                        ${u.hasAllAccess ? 'REVOKE PASS' : 'GRANT ALL-ACCESS PASS'}
                    </button>
                </td>
            </tr>
        `).join('');
    }

    window.toggleUserAccess = function(userId) {
        const u = users.find(user => user.id === userId);
        if (u) {
            u.hasAllAccess = !u.hasAllAccess;
            if (currentUser && currentUser.id === u.id) currentUser.hasAllAccess = u.hasAllAccess;
            saveState();
            renderTemplates();
            renderTerminalUsers();
        }
    };

    setInterval(() => {
        const clockElem = document.getElementById('term-live-clock');
        if (clockElem) clockElem.textContent = new Date().toLocaleTimeString();
    }, 1000);

    // Auth Handlers
    const authModal = document.getElementById('auth-modal');
    const openAuthBtn = document.getElementById('open-auth-btn');
    const closeBtns = document.querySelectorAll('.close-modal');

    function openAuthModal() { if (authModal) authModal.classList.remove('hidden'); }
    if (openAuthBtn) openAuthBtn.addEventListener('click', openAuthModal);

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
        });
    });

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;

            currentUser = users.find(u => u.email === email) || {
                id: 'USR-' + Math.floor(100 + Math.random() * 900),
                name: email.split('@')[0],
                email: email,
                role: email.includes('admin') ? 'ADMIN' : 'CUSTOMER',
                hasAllAccess: false
            };

            if (!users.some(u => u.email === currentUser.email)) users.push(currentUser);
            saveState();
            updateAuthUI();
            if (authModal) authModal.classList.add('hidden');
            renderTemplates();
        });
    }

    function updateAuthUI() {
        const container = document.getElementById('auth-status-container');
        if (!container) return;

        if (currentUser) {
            container.innerHTML = `
                <div style="display:flex; align-items:center; gap:0.6rem;">
                    <span style="font-size:0.85rem; color:#ff007f; font-weight:700;">${currentUser.name}</span>
                    <button id="logout-btn" class="btn-cyber-trigger" style="padding:0.3rem 0.7rem;">LOGOUT</button>
                </div>
            `;
            document.getElementById('logout-btn').addEventListener('click', () => {
                currentUser = null;
                saveState();
                updateAuthUI();
                renderTemplates();
            });
        } else {
            container.innerHTML = `<button id="open-auth-btn" class="btn-nav-login">Login</button>`;
            document.getElementById('open-auth-btn').addEventListener('click', openAuthModal);
        }
    }

    // ----------------------------------------------------------------------
    // INITIALIZE APP
    // ----------------------------------------------------------------------
    renderServicesMarquee();
    renderProjectsMarquee();
    renderTemplates();
    renderCourses();
    updateAuthUI();
});
