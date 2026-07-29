/* ==========================================================================
   NEXUS PLATFORM & CYBER HACKER TERMINAL - MASTER APPLICATION ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. STATE MANAGEMENT (LOCAL PERSISTENCE)
    // ----------------------------------------------------------------------

    const defaultServices = [
        { id: 1, title: 'কাস্টম ওয়েব অ্যাপ্লিকেশন', desc: 'Next.js, React ও Node.js দিয়ে তৈরি আধুনিক ও ফাস্ট ওয়েব প্ল্যাটফর্ম।', price: '৳১৫,০০০+', category: 'Web Development' },
        { id: 2, title: 'মোবাইল অ্যাপ ডেভেলপমেন্ট', desc: 'Flutter দিয়ে iOS ও Android এর জন্য সিঙ্গেল কোডবেস নেটিভ পারফরম্যান্স অ্যাপ।', price: '৳২৫,০০০+', category: 'Mobile App' },
        { id: 3, title: 'UI/UX ও ব্র্যান্ড ডিজাইন', desc: 'গ্লাসমর্ফিজম, অ্যানিমেশন এবং কনভার্সন ফ্রেন্ডলি মোবাইল-ফার্স্ট ডিজাইন।', price: '৳১০,০০০+', category: 'Design System' },
        { id: 4, title: 'ই-কমার্স ও পেমেন্ট সেটআপ', desc: 'বিকাশ, নগদ, কার্ড পেমেন্ট ও ইনভেন্টরি ম্যানেজমেন্ট সহ ই-কমার্স শপ।', price: '৳২০,০০০+', category: 'E-Commerce' }
    ];

    const defaultTemplates = [
        { id: 101, title: 'Next.js SaaS Boilerplate v2.4', category: 'Full-stack Starter', downloadUrl: 'https://github.com/nexus/saas-starter', previewUrl: '#' },
        { id: 102, title: 'Flutter Multi-vendor E-commerce UI', category: 'Mobile UI Kit', downloadUrl: 'https://github.com/nexus/flutter-ecommerce', previewUrl: '#' },
        { id: 103, title: 'Cyberpunk Portfolio & Agency Theme', category: 'Vanilla HTML/CSS', downloadUrl: 'https://github.com/nexus/cyber-portfolio', previewUrl: '#' },
        { id: 104, title: 'React Dashboard & Analytics UI', category: 'Admin Panel', downloadUrl: 'https://github.com/nexus/react-admin-ui', previewUrl: '#' }
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
        { id: 'USR-101', name: 'Admin Owner', email: 'owner@nexus.dev', role: 'ADMIN', hasAllAccess: true },
        { id: 'USR-102', name: 'Demo Customer', email: 'customer@gmail.com', role: 'CUSTOMER', hasAllAccess: false }
    ];

    // Load from LocalStorage or Fallback
    let services = JSON.parse(localStorage.getItem('nexus_services')) || defaultServices;
    let templates = JSON.parse(localStorage.getItem('nexus_templates')) || defaultTemplates;
    let courses = JSON.parse(localStorage.getItem('nexus_courses')) || defaultCourses;
    let bookings = JSON.parse(localStorage.getItem('nexus_bookings')) || defaultBookings;
    let users = JSON.parse(localStorage.getItem('nexus_users')) || defaultUsers;

    let currentUser = JSON.parse(localStorage.getItem('nexus_current_user')) || null;

    function saveState() {
        localStorage.setItem('nexus_services', JSON.stringify(services));
        localStorage.setItem('nexus_templates', JSON.stringify(templates));
        localStorage.setItem('nexus_courses', JSON.stringify(courses));
        localStorage.setItem('nexus_bookings', JSON.stringify(bookings));
        localStorage.setItem('nexus_users', JSON.stringify(users));
        localStorage.setItem('nexus_current_user', JSON.stringify(currentUser));
    }

    // ----------------------------------------------------------------------
    // 2. AUDIO SYNTHESIZER FOR HACKER TERMINAL ALERTS
    // ----------------------------------------------------------------------
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
        } catch (e) {
            console.log('Audio Context Not Triggered');
        }
    }

    // ----------------------------------------------------------------------
    // 3. RENDERERS
    // ----------------------------------------------------------------------

    // Render Services Grid
    function renderServices() {
        const container = document.getElementById('services-container');
        if (!container) return;

        container.innerHTML = services.map(s => `
            <div class="service-card">
                <div class="service-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                <div class="service-card-footer">
                    <span class="service-price">${s.price}</span>
                    <button class="btn-service-action" onclick="scrollToAdsBooking('${s.title}')">বুকিং দিন</button>
                </div>
            </div>
        `).join('');
    }

    // Render Templates Vault
    function renderTemplates() {
        const container = document.getElementById('templates-container');
        if (!container) return;

        const hasPass = currentUser && (currentUser.hasAllAccess || currentUser.role === 'ADMIN');

        container.innerHTML = templates.map(t => `
            <div class="template-card">
                <div class="template-preview-area">
                    <span class="template-tag">${t.category}</span>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div class="template-card-body">
                    <h3>${t.title}</h3>
                    <p>সম্পূর্ণ সোর্স কোড ও ডকুমেন্টেশন সহ প্রডিউসড টেমপ্লেট।</p>
                    <button class="btn-download-tpl ${hasPass ? 'unlocked' : 'locked'}" onclick="handleTemplateDownload('${t.downloadUrl}', ${hasPass})">
                        ${hasPass ? `
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            <span>ডাউনলোড সোর্স কোড</span>
                        ` : `
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            <span>লকড (প্যাকেজ কিনুন)</span>
                        `}
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Render Courses Grid
    function renderCourses() {
        const container = document.getElementById('courses-container');
        if (!container) return;

        container.innerHTML = courses.map(c => `
            <div class="course-card">
                <div class="course-thumb">
                    <span class="course-badge-free">১ম পাঠ ফ্রি প্রিভিউ</span>
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,0.5)" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <div class="course-body">
                    <h3>${c.title}</h3>
                    <p>${c.desc}</p>
                    <button class="btn-open-course" onclick="openCoursePlayer(${c.id})">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        <span>কোর্স ও ফ্রি প্রিভিউ দেখুন</span>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // ----------------------------------------------------------------------
    // 4. ADS SETUP DIRECT BOOKING SUBMISSION (NO UPFRONT PAYMENT)
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

            // Trigger Cyber Terminal Sound & Notification Update
            playTerminalAlertSound();
            renderTerminalBookings();

            // Open Confirmation Modal for Customer
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

    // Global helper for Service Booking scroll
    window.scrollToAdsBooking = function(serviceTitle) {
        const adsSec = document.getElementById('ads-booking');
        if (adsSec) {
            adsSec.scrollIntoView({ behavior: 'smooth' });
            const platformSelect = document.getElementById('ads-platform');
            if (platformSelect) {
                platformSelect.value = 'Complete All-in-One Sales Funnel';
            }
        }
    };

    // Global helper for Template Download
    window.handleTemplateDownload = function(url, isUnlocked) {
        if (isUnlocked) {
            alert('ডাউনলোড শুরু হচ্ছে: ' + url);
        } else {
            alert('টেমপ্লেট সোর্স কোড ডাউনলোড করার জন্য "অল-এক্সেস প্যাকেজ" কিনুন অথবা লগইন করুন।');
        }
    };

    // Buy Template Package Button
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

    // ----------------------------------------------------------------------
    // 5. COURSE PLAYER ENGINE (FREE PREVIEW VIDEO 1 VS LOCKED VIDEOS)
    // ----------------------------------------------------------------------
    let activeCourseId = null;

    window.openCoursePlayer = function(courseId) {
        activeCourseId = courseId;
        const course = courses.find(c => c.id === courseId);
        if (!course) return;

        const modal = document.getElementById('course-modal');
        const playlist = document.getElementById('playlist-container');

        if (modal && playlist) {
            renderPlaylist(course);
            // Play Video 1 by default
            if (course.lessons.length > 0) {
                playLesson(course.lessons[0]);
            }
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
    // 6. CYBER-HACKER OWNER TERMINAL ENGINE
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

    // Terminal Tabs Switching
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

    // Render Terminal Bookings Feed
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

    // Render Terminal Templates
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

            const newTpl = {
                id: Date.now(),
                title,
                category,
                downloadUrl,
                previewUrl: '#'
            };

            templates.unshift(newTpl);
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

    // Render Terminal Courses (Toggle Lock/Unlock)
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

    // Render Terminal Users Matrix
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

    // Terminal Clock Ticker
    setInterval(() => {
        const clockElem = document.getElementById('term-live-clock');
        if (clockElem) {
            clockElem.textContent = new Date().toLocaleTimeString();
        }
    }, 1000);

    // ----------------------------------------------------------------------
    // 7. AUTHENTICATION & MODAL HANDLERS
    // ----------------------------------------------------------------------

    const authModal = document.getElementById('auth-modal');
    const openAuthBtn = document.getElementById('open-auth-btn');
    const closeBtns = document.querySelectorAll('.close-modal');

    function openAuthModal() {
        if (authModal) authModal.classList.remove('hidden');
    }

    if (openAuthBtn) openAuthBtn.addEventListener('click', openAuthModal);

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
        });
    });

    const authTabs = document.querySelectorAll('.auth-tab');
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabType = tab.dataset.tab;
            if (tabType === 'login') {
                document.getElementById('login-form').classList.remove('hidden');
                document.getElementById('register-form').classList.add('hidden');
            } else {
                document.getElementById('login-form').classList.add('hidden');
                document.getElementById('register-form').classList.remove('hidden');
            }
        });
    });

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;

            // Simple Auth simulation
            currentUser = users.find(u => u.email === email) || {
                id: 'USR-' + Math.floor(100 + Math.random() * 900),
                name: email.split('@')[0],
                email: email,
                role: email.includes('admin') ? 'ADMIN' : 'CUSTOMER',
                hasAllAccess: false
            };

            if (!users.some(u => u.email === currentUser.email)) {
                users.push(currentUser);
            }

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
                <div style="display:flex; align-items:center; gap:0.75rem;">
                    <span style="font-size:0.85rem; color:#00e5ff; font-weight:600;">${currentUser.name} (${currentUser.role})</span>
                    <button id="logout-btn" class="btn-service-action" style="padding:0.4rem 0.8rem;">লগআউট</button>
                </div>
            `;
            document.getElementById('logout-btn').addEventListener('click', () => {
                currentUser = null;
                saveState();
                updateAuthUI();
                renderTemplates();
            });
        } else {
            container.innerHTML = `
                <button id="open-auth-btn" class="btn-primary-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13 12H3"/></svg>
                    <span>লগইন / সাইনআপ</span>
                </button>
            `;
            document.getElementById('open-auth-btn').addEventListener('click', openAuthModal);
        }
    }

    // ----------------------------------------------------------------------
    // 8. INITIALIZE APP
    // ----------------------------------------------------------------------
    renderServices();
    renderTemplates();
    renderCourses();
    updateAuthUI();
});
