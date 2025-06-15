<template>
    <nav class="modern-navbar">
        <div class="navbar-container">
            <!-- Brand Section -->
            <div class="brand-section">
                <div class="brand-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
                            stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="brand-text">
                    <span class="brand-name">Techtack</span>
                    <span class="brand-sub">Technologies</span>
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="nav-links">
                <NuxtLink to="/" class="nav-link">
                    <span class="nav-text">Home</span>
                    <div class="nav-underline"></div>
                </NuxtLink>
                <NuxtLink to="/about" class="nav-link">
                    <span class="nav-text">About</span>
                    <div class="nav-underline"></div>
                </NuxtLink>
                <NuxtLink to="/securityguidelines" class="nav-link security-link">
                    <span class="nav-text">Security</span>
                    <div class="nav-badge">Pro</div>
                    <div class="nav-underline"></div>
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* Modern Navbar */
.modern-navbar {
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #161616 100%);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.navbar-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
}

/* Brand Section */
.brand-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
}

.brand-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
}

.brand-icon:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

.brand-text {
    display: flex;
    flex-direction: column;
}

.brand-name {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

.brand-sub {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

/* Navigation Links */
.nav-links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-link {
    position: relative;
    padding: 0.75rem 1.25rem;
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 12px;
}

.nav-link:hover::before {
    opacity: 1;
}

.nav-text {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    transition: color 0.3s ease;
    z-index: 1;
    position: relative;
}

.nav-link:hover .nav-text {
    color: #ffffff;
}

.nav-underline {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 1px;
    transform: translateX(-50%);
}

.nav-link:hover .nav-underline {
    width: calc(100% - 1.5rem);
}

.nav-link.router-link-active .nav-underline {
    width: calc(100% - 1.5rem);
}

.nav-link.router-link-active .nav-text {
    color: #ffffff;
    font-weight: 600;
}

/* Security Link Special Styling */
.security-link {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    border: 1px solid rgba(102, 126, 234, 0.2);
}

.nav-badge {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    font-size: 0.65rem;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 6px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .navbar-container {
        padding: 1rem 1.5rem;
    }

    .nav-links {
        gap: 0.25rem;
    }

    .nav-link {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
    }
}

@media (max-width: 768px) {
    .navbar-container {
        padding: 1rem;
        min-height: 70px;
    }

    .nav-links {
        gap: 0.1rem;
    }

    .nav-link {
        padding: 0.5rem 0.8rem;
        font-size: 0.85rem;
    }

    .brand-icon {
        width: 40px;
        height: 40px;
    }

    .brand-name {
        font-size: 1.25rem;
    }
}

@media (max-width: 480px) {
    .navbar-container {
        padding: 0.75rem;
    }

    .nav-links {
        gap: 0;
    }

    .nav-link {
        padding: 0.4rem 0.6rem;
        font-size: 0.8rem;
    }

    .brand-name {
        font-size: 1.1rem;
    }

    .brand-sub {
        font-size: 0.65rem;
    }
}

/* Smooth animations */
* {
    scroll-behavior: smooth;
}

/* Focus states for accessibility */
.nav-link:focus {
    outline: 2px solid rgba(102, 126, 234, 0.8);
    outline-offset: 2px;
}
</style>