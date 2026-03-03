document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor ---
    const cursorDot = document.getElementById('cursor-dot');
    const cursorHalo = document.getElementById('cursor-halo');
    const hoverTargets = document.querySelectorAll('.hover-target, a, button');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorHalo.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 400, fill: "forwards" });
    });

    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursorHalo.classList.add('active');
            cursorDot.style.transform = "translate(-50%, -50%) scale(0.5)";
        });

        target.addEventListener('mouseleave', () => {
            cursorHalo.classList.remove('active');
            cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
        });
    });

    // --- Hero Message Looper ---
    const heroMessages = [
        {
            title: 'Empowering Teams. <span class="text-gradient">Scaling Impact.</span>',
            subtitle: "AI shouldn't replace people; it should give them their time back. I build intelligent solutions that handle the heavy lifting, so you and your team can focus on the work that truly matters."
        },
        {
            title: 'Scaling Intelligence. <span class="text-gradient">Accelerating Growth.</span>',
            subtitle: "I help businesses outpace the competition by integrating custom AI solutions that turn manual bottlenecks into automated scale."
        },
        {
            title: 'Helping People <span class="text-gradient">with AI</span>',
            subtitle: "AI can be intimidating, but it doesn't have to be. I help people and businesses harness the power of automation to grow faster, work smarter, and scale without the stress."
        },
        {
            title: 'AI Built for People, <span class="text-gradient">Not Just Platforms.</span>',
            subtitle: "I help founders and teams reclaim their time by turning complex AI into simple, scalable tools that do the heavy lifting for you."
        }
    ];

    let currentMessageIndex = 0;
    const heroContainer = document.getElementById('hero-message-container');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    if (heroContainer) {
        heroContainer.addEventListener('click', () => {
            // Fade out
            heroContainer.style.opacity = '0';
            heroContainer.style.transform = 'translateY(10px)';

            setTimeout(() => {
                // Update text
                currentMessageIndex = (currentMessageIndex + 1) % heroMessages.length;
                heroTitle.innerHTML = heroMessages[currentMessageIndex].title;
                heroSubtitle.innerText = heroMessages[currentMessageIndex].subtitle;

                // Fade in
                heroContainer.style.opacity = '1';
                heroContainer.style.transform = 'translateY(0)';
            }, 300);
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // --- Portfolio Modal ---
    const portfolioProjects = [
        {
            icon: 'fa-solid fa-robot',
            title: 'AI Chatbot Platform',
            desc: 'Custom chatbot for a retail brand',
            tag: 'AI Automation',
            url: '#'
        },
        {
            icon: 'fa-solid fa-cart-shopping',
            title: 'E-commerce Store',
            desc: 'Full online store with payment integration',
            tag: 'Web + E-commerce',
            url: '#'
        },
        {
            icon: 'fa-solid fa-gauge-high',
            title: 'Business Dashboard',
            desc: 'Real-time analytics dashboard for a startup',
            tag: 'Web Development',
            url: '#'
        },
        {
            icon: 'fa-solid fa-gears',
            title: 'Workflow Automation',
            desc: 'Automated invoicing & scheduling system',
            tag: 'AI Automation',
            url: '#'
        },
        {
            icon: 'fa-solid fa-globe',
            title: 'Portfolio Website',
            desc: 'Modern portfolio for a creative agency',
            tag: 'Web Development',
            url: '#'
        },
        {
            icon: 'fa-solid fa-bullhorn',
            title: 'Marketing Landing Page',
            desc: 'High-conversion landing page for SaaS',
            tag: 'Growth Strategy',
            url: '#'
        }
    ];

    const portfolioOverlay = document.getElementById('portfolio-modal-overlay');
    const portfolioClose = document.getElementById('portfolio-modal-close');
    const portfolioGrid = document.getElementById('portfolio-grid');
    const viewWorkBtn = document.getElementById('view-work-btn');

    // Render portfolio cards
    portfolioGrid.innerHTML = portfolioProjects.map(p => `
        <a href="${p.url}" class="portfolio-card hover-target" target="_blank" rel="noopener">
            <div class="portfolio-card-icon"><i class="${p.icon}"></i></div>
            <h4>${p.title}</h4>
            <p>${p.desc}</p>
            <span class="portfolio-tag">${p.tag}</span>
        </a>
    `).join('');

    function openPortfolio() {
        portfolioOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePortfolio() {
        portfolioOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    viewWorkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openPortfolio();
    });

    portfolioClose.addEventListener('click', closePortfolio);
    portfolioOverlay.addEventListener('click', (e) => {
        if (e.target === portfolioOverlay) closePortfolio();
    });

    // Portfolio close button (was inline onclick)
    const portfolioCloseBtn = document.getElementById('portfolio-close-btn');
    if (portfolioCloseBtn) {
        portfolioCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closePortfolio();
        });
    }

    // --- Contact Form Overlay ---
    const contactSection = document.getElementById('contact');
    const contactClose = document.getElementById('contact-close');
    const contactLinks = document.querySelectorAll('a[href="#contact"]');

    function openContact() {
        contactSection.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeContact() {
        contactSection.classList.remove('active');
        document.body.style.overflow = '';
    }

    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Close service modal if open
            if (document.getElementById('service-modal-overlay').classList.contains('active')) {
                document.getElementById('service-modal-overlay').classList.remove('active');
            }
            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
            openContact();
        });
    });

    contactClose.addEventListener('click', closeContact);
    contactSection.addEventListener('click', (e) => {
        if (e.target === contactSection) closeContact();
    });

    // --- Contact Form Submission (Google Sheets) ---
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);

        const goals = formData.getAll('goals').join(', ');

        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            business: formData.get('business'),
            goals: goals,
            challenge: formData.get('challenge'),
            timeline: formData.get('timeline'),
            budget: formData.get('budget'),
            notes: formData.get('notes')
        };

        fetch('https://script.google.com/macros/s/AKfycbxF5V6vC4I9O3ZFw7Cwj26DVXyLTufuhzjOxXCn693z2LgnOe5p3dG8AoLvc2ZqWKbw/exec', {
            method: 'POST',
            body: JSON.stringify(payload)
        })
        .then(() => {
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
        })
        .catch(() => {
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
        });
    });

    // --- Service Card Modal ---
    const serviceData = [
        {
            icon: 'fa-solid fa-users-rays',
            title: 'AI Workflows & Micro SaaS',
            desc: 'I build custom AI solutions and micro SaaS products that integrate into your daily operations — from process automation to focused software tools that solve one problem really well. Whether it\'s a tailored AI co-pilot or a lean SaaS MVP, I design systems that save you hours every week.',
            features: ['Process Automation', 'Custom API Integrations', 'Micro SaaS Development', 'MVP to Launch Pipeline', 'Subscription & Billing Setup', 'Workflow Optimization'],
            rates: [
                { name: 'Starter', price: '₱25,000', desc: 'Single workflow automation with basic integrations', featured: false, discount: 'free' },
                { name: 'Growth', price: '₱45,000', desc: 'Multi-process automation, micro SaaS MVP, or custom AI co-pilot', featured: true, discount: 'half' },
                { name: 'Enterprise', price: '₱80,000+', desc: 'Full-scale intelligent system with ongoing support', featured: false }
            ]
        },
        {
            icon: 'fa-solid fa-store',
            title: 'Modern Web & E-commerce',
            desc: 'I build high-performance digital storefronts and websites that act as your 24/7 sales partner. With a focus on fast setup and seamless user experience, I help you get your business online and scaling without the technical stress.',
            features: ['Rapid Deployment & Setup', 'Custom Web Development', 'E-commerce Architecture', 'Payment & Inventory Automation', 'SEO Optimization', 'Mobile-First Design'],
            rates: [
                { name: 'Essential', price: '₱20,000', desc: 'Professional landing page or portfolio site', featured: false, discount: 'free' },
                { name: 'Business', price: '₱50,000', desc: 'Full website with e-commerce & payment integration', featured: true, discount: 'half' },
                { name: 'Flagship', price: '₱90,000+', desc: 'Custom-built platform with advanced features', featured: false }
            ]
        },
        {
            icon: 'fa-solid fa-chart-line',
            title: 'Growth & Strategy',
            desc: 'I work directly with you to identify bottlenecks in your current system and map out a safe, effective transition to automated workflows. Get expert guidance on tech stack decisions and implementation roadmaps.',
            features: ['1-on-1 Consultations', 'Tech Stack Audits', 'Implementation Roadmaps', 'Ongoing Technical Support', 'Performance Reviews', 'Scaling Strategy'],
            rates: [
                { name: 'Consult', price: '₱5,000', desc: 'Single 90-minute deep-dive session', featured: false, discount: 'free' },
                { name: 'Advisor', price: '₱15,000/mo', desc: 'Weekly sessions + async support & roadmap', featured: true, discount: 'half' },
                { name: 'Partner', price: '₱30,000/mo', desc: 'Dedicated strategic partner with hands-on support', featured: false }
            ]
        }
    ];

    const modalOverlay = document.getElementById('service-modal-overlay');
    const modalClose = document.getElementById('service-modal-close');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalRates = document.getElementById('modal-rates');
    const modalFeatures = document.getElementById('modal-features');
    const modalCta = document.getElementById('modal-cta');

    function openServiceModal(index) {
        const data = serviceData[index];
        modalIcon.innerHTML = `<i class="${data.icon}"></i>`;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;

        modalRates.innerHTML = data.rates.map(r => `
            <div class="rate-tier${r.featured ? ' featured' : ''}">
                <div class="rate-tier-name">${r.name}</div>
                <div class="rate-tier-price">${r.discount === 'free' ? `<span class="rate-original-price">${r.price}</span> <span class="rate-free-badge">FREE</span>` : r.discount === 'half' ? `<span class="rate-original-price">${r.price}</span> <span class="rate-half-badge">50% OFF</span>` : r.price}</div>
                <div class="rate-tier-desc">${r.desc}</div>
            </div>
        `).join('');

        modalFeatures.innerHTML = data.features.map(f =>
            `<li><i class="fa-solid fa-check"></i> ${f}</li>`
        ).join('');

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeServiceModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, i) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => openServiceModal(i));
    });

    modalClose.addEventListener('click', closeServiceModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeServiceModal();
    });
    modalCta.addEventListener('click', closeServiceModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (portfolioOverlay.classList.contains('active')) closePortfolio();
            if (modalOverlay.classList.contains('active')) closeServiceModal();
            if (contactSection.classList.contains('active')) closeContact();
        }
    });

    // --- Interactive Background (Particles + Connection Lines) - Updated for Light Theme ---
    const canvas = document.getElementById('interactive-bg');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    let mouse = {
        x: null,
        y: null,
        radius: 150
    }

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 3.5 + 1;
            this.density = (Math.random() * 40) + 5;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
        }

        draw() {
            // Brighter core with soft glow
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2.5);
            gradient.addColorStop(0, 'rgba(251, 191, 36, 0.6)');
            gradient.addColorStop(0.4, 'rgba(245, 158, 11, 0.3)');
            gradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Solid bright center dot
            ctx.fillStyle = 'rgba(251, 191, 36, 0.7)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < mouse.radius) {
                    this.x -= directionX * 0.8;
                    this.y -= directionY * 0.8;
                }
            }
        }
    }

    mouse.radius = 200;

    function initParticles() {
        particles = [];
        let numberOfParticles = (width * height) / 8000;
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);

        // Stronger mouse glow
        if (mouse.x != null && mouse.y != null) {
            let gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 350);
            gradient.addColorStop(0, 'rgba(251, 191, 36, 0.2)');
            gradient.addColorStop(0.4, 'rgba(245, 158, 11, 0.08)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let distance = dx * dx + dy * dy;
                let maxDist = (width / 8) * (height / 8);
                if (distance < maxDist) {
                    let opacity = 1 - (distance / maxDist);
                    ctx.strokeStyle = `rgba(251, 191, 36, ${opacity * 0.25})`;
                    ctx.lineWidth = opacity * 1.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    initParticles();
    animateParticles();

    // --- 3D Card Tilt Effect ---
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
});
