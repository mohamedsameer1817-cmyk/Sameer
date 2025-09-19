// Create animated particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate skill progress bars
                    if (entry.target.classList.contains('skills')) {
                        const progressBars = entry.target.querySelectorAll('.skill-progress');
                        progressBars.forEach(bar => {
                            setTimeout(() => {
                                bar.style.width = bar.getAttribute('data-width');
                            }, 500);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe all sections for scroll animations
        document.querySelectorAll('.fade-in').forEach(section => {
            observer.observe(section);
        });

        // Navigation background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(0, 0, 0, 0.8)';
            } else {
                nav.style.background = 'rgba(0, 0, 0, 0.1)';
            }
        });

        // Parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        });

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // Add typing effect to hero text
            const heroTitle = document.querySelector('.hero h1');
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 2000);
        });

        // Mouse movement parallax effect
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const xOffset = (x - 0.5) * speed * 50;
                const yOffset = (y - 0.5) * speed * 50;
                shape.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${xOffset}deg)`;
            });
        });

        // Add hover effect to skill cards
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(255, 255, 255, 0.2)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
                this.style.boxShadow = 'none';
            });
        });

        // Add click effect to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                }, 150);
            });
        });

        // Random color changes for particles
        setInterval(() => {
            const particles = document.querySelectorAll('.particle');
            particles.forEach(particle => {
                const colors = ['rgba(255, 107, 107, 0.5)', 'rgba(78, 205, 196, 0.5)', 'rgba(69, 183, 209, 0.5)'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            });
        }, 3000);

        // Add pulse animation to CTA button
        const ctaButton = document.querySelector('.cta-button');
        setInterval(() => {
            ctaButton.style.boxShadow = '0 15px 40px rgba(255, 107, 107, 0.6)';
            setTimeout(() => {
                ctaButton.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            }, 1000);
        }, 3000);

        // Loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
