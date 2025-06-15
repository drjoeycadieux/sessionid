<template>
    <div class="security-page">
        <Navbar />
        <AppHeader />

        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-content">
                <div class="hero-icon">🔒</div>
                <h1 class="hero-title">Security Guidelines</h1>
                <p class="hero-subtitle">Comprehensive Documentation & Best Practices</p>
                <p class="hero-description">
                    Follow these essential security guidelines to protect your systems, data, and users.
                    Our comprehensive framework ensures robust security across all operational aspects.
                </p>
            </div>
        </section>

        <!-- Navigation Tabs -->
        <section class="tabs-section">
            <div class="tabs-container">
                <div class="tab-nav">
                    <button v-for="section in securitySections" :key="section.id" @click="setActiveSection(section.id)"
                        :class="['tab-btn', { active: activeSection === section.id }]">
                        <span class="tab-icon">{{ section.icon }}</span>
                        <span class="tab-text">{{ section.title }}</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Content Sections -->
        <section class="content-section">
            <div class="content-container">
                <div v-for="section in securitySections" :key="section.id" v-show="activeSection === section.id"
                    class="section-content">
                    <div class="section-header">
                        <div class="section-icon">{{ section.icon }}</div>
                        <h2 class="section-title">{{ section.title }}</h2>
                    </div>

                    <div class="guidelines-grid">
                        <div v-for="(guideline, index) in section.guidelines" :key="index" class="guideline-card"
                            :class="setPriorityClass(guideline.priority)">
                            <div class="guideline-header">
                                <h3 class="guideline-title">{{ guideline.title }}</h3>
                                <span class="priority-badge" :class="setPriorityClass(guideline.priority)">
                                    {{ guideline.priority.toUpperCase() }}
                                </span>
                            </div>
                            <p class="guideline-description">{{ guideline.description }}</p>
                            <div class="guideline-footer">
                                <div class="priority-indicator" :class="setPriorityClass(guideline.priority)"></div>
                                <span class="guideline-status">Required</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Emergency Contact Section -->
        <section class="emergency-section">
            <div class="emergency-container">
                <div class="emergency-content">
                    <div class="emergency-icon">⚠️</div>
                    <h2 class="emergency-title">Security Incident Reporting</h2>
                    <p class="emergency-description">
                        If you discover a security vulnerability or incident, report it immediately through our secure
                        channels.
                    </p>
                    <div class="emergency-actions">
                        <button class="emergency-btn primary">
                            <span>Report Incident</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button class="emergency-btn secondary">
                            <span>Emergency Contact</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22 16.92V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H6.08"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M15 7H22L19 4M19 4L22 1M19 4V11" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Compliance Footer -->
        <section class="compliance-section">
            <div class="compliance-container">
                <div class="compliance-grid">
                    <div class="compliance-item">
                        <div class="compliance-icon">📋</div>
                        <h3>ISO 27001</h3>
                        <p>Certified</p>
                    </div>
                    <div class="compliance-item">
                        <div class="compliance-icon">🔐</div>
                        <h3>SOC 2</h3>
                        <p>Type II</p>
                    </div>
                    <div class="compliance-item">
                        <div class="compliance-icon">🌐</div>
                        <h3>GDPR</h3>
                        <p>Compliant</p>
                    </div>
                    <div class="compliance-item">
                        <div class="compliance-icon">🛡️</div>
                        <h3>CCPA</h3>
                        <p>Compliant</p>
                    </div>
                </div>
            </div>
        </section>

        <AppFooter />
    </div>
</template>


<script setup>
import { ref } from 'vue'

useSeoMeta({
    title: 'Security Guidelines - SessionID | Techtack Technologies',
    description: 'Comprehensive security guidelines and best practices for authentication, data protection, and secure system access.'
})

const securitySections = ref([
    {
        id: 'authentication',
        title: 'Authentication & Access Control',
        icon: '🔐',
        guidelines: [
            {
                title: 'Strong Password Policy',
                description: 'Use passwords with minimum 12 characters, including uppercase, lowercase, numbers, and special characters.',
                priority: 'critical'
            },
            {
                title: 'Multi-Factor Authentication',
                description: 'Enable MFA for all accounts with access to sensitive systems and data.',
                priority: 'critical'
            },
            {
                title: 'Session Management',
                description: 'Implement secure session timeouts and proper session invalidation.',
                priority: 'high'
            },
            {
                title: 'Access Control',
                description: 'Follow principle of least privilege and regularly review user permissions.',
                priority: 'high'
            }
        ]
    },
    {
        id: 'data-protection',
        title: 'Data Protection & Privacy',
        icon: '🛡️',
        guidelines: [
            {
                title: 'Data Encryption',
                description: 'Encrypt data both in transit and at rest using industry-standard algorithms.',
                priority: 'critical'
            },
            {
                title: 'Data Classification',
                description: 'Classify data based on sensitivity and apply appropriate protection measures.',
                priority: 'high'
            },
            {
                title: 'Regular Backups',
                description: 'Maintain secure, tested backups with proper retention policies.',
                priority: 'medium'
            },
            {
                title: 'Privacy Compliance',
                description: 'Ensure compliance with GDPR, CCPA, and other relevant privacy regulations.',
                priority: 'critical'
            }
        ]
    },
    {
        id: 'incident-response',
        title: 'Incident Response & Monitoring',
        icon: '🚨',
        guidelines: [
            {
                title: 'Security Monitoring',
                description: 'Implement 24/7 security monitoring and alerting systems.',
                priority: 'critical'
            },
            {
                title: 'Incident Response Plan',
                description: 'Maintain and regularly test comprehensive incident response procedures.',
                priority: 'critical'
            },
            {
                title: 'Vulnerability Management',
                description: 'Regular security assessments and timely patching of vulnerabilities.',
                priority: 'high'
            },
            {
                title: 'Security Training',
                description: 'Provide regular security awareness training for all personnel.',
                priority: 'medium'
            }
        ]
    }
])

const activeSection = ref('authentication')

const setPriorityClass = (priority) => {
    return `priority-${priority}`
}

const setActiveSection = (sectionId) => {
    activeSection.value = sectionId
}
</script>


<style scoped>
.security-page {
    background-color: #161616;
    min-height: 100vh;
}

/* Hero Section */
.hero-section {
    padding: 4rem 2rem;
    background-color: #161616;
    text-align: center;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    animation: fadeInUp 0.8s ease-out;
}

.hero-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: #ffffff;
    font-family: sans-serif;
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-size: 1.5rem;
    color: #ffffff;
    opacity: 0.8;
    font-family: sans-serif;
    margin-bottom: 1.5rem;
}

.hero-description {
    font-size: 1.2rem;
    color: #ffffff;
    opacity: 0.9;
    line-height: 1.8;
    font-family: sans-serif;
    max-width: 600px;
    margin: 0 auto;
}

/* Tabs Section */
.tabs-section {
    background-color: #2d3748;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tabs-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.tab-nav {
    display: flex;
    overflow-x: auto;
    gap: 0;
}

.tab-btn {
    background: transparent;
    border: none;
    color: #ffffff;
    opacity: 0.7;
    padding: 1.5rem 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-bottom: 3px solid transparent;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: sans-serif;
    font-weight: 500;
    white-space: nowrap;
    min-width: fit-content;
}

.tab-btn:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.05);
}

.tab-btn.active {
    opacity: 1;
    border-bottom-color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
}

.tab-icon {
    font-size: 1.2rem;
}

.tab-text {
    font-size: 0.95rem;
    font-weight: 600;
}

/* Content Section */
.content-section {
    padding: 4rem 2rem;
    background-color: #161616;
}

.content-container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-content {
    animation: fadeInUp 0.6s ease-out;
}

.section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
    text-align: center;
    justify-content: center;
}

.section-icon {
    font-size: 3rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    font-family: sans-serif;
}

.guidelines-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.guideline-card {
    background-color: #2d3748;
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.guideline-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--priority-color), transparent);
}

.guideline-card.priority-critical::before {
    --priority-color: #ff4757;
}

.guideline-card.priority-high::before {
    --priority-color: #ffa502;
}

.guideline-card.priority-medium::before {
    --priority-color: #7bed9f;
}

.guideline-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
}

.guideline-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
}

.guideline-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
    font-family: sans-serif;
    line-height: 1.3;
}

.priority-badge {
    background-color: #161616;
    color: #ffffff;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    flex-shrink: 0;
}

.priority-badge.priority-critical {
    background-color: #ff4757;
}

.priority-badge.priority-high {
    background-color: #ffa502;
}

.priority-badge.priority-medium {
    background-color: #7bed9f;
    color: #161616;
}

.guideline-description {
    font-size: 1rem;
    color: #ffffff;
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-family: sans-serif;
}

.guideline-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.priority-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.priority-indicator.priority-critical {
    background-color: #ff4757;
}

.priority-indicator.priority-high {
    background-color: #ffa502;
}

.priority-indicator.priority-medium {
    background-color: #7bed9f;
}

.guideline-status {
    font-size: 0.85rem;
    color: #ffffff;
    opacity: 0.7;
    font-family: sans-serif;
    font-weight: 500;
}

/* Emergency Section */
.emergency-section {
    background-color: #2d3748;
    padding: 4rem 2rem;
}

.emergency-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.emergency-content {
    background-color: #161616;
    padding: 3rem 2rem;
    border-radius: 20px;
    border: 2px solid #ff4757;
}

.emergency-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
}

.emergency-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #ff4757;
    margin-bottom: 1rem;
    font-family: sans-serif;
}

.emergency-description {
    font-size: 1.1rem;
    color: #ffffff;
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    font-family: sans-serif;
}

.emergency-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.emergency-btn {
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.emergency-btn.primary {
    background-color: #ff4757;
    color: #ffffff;
    border: 2px solid #ff4757;
}

.emergency-btn.primary:hover {
    background-color: #ffffff;
    color: #ff4757;
    transform: translateY(-3px);
}

.emergency-btn.secondary {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
}

.emergency-btn.secondary:hover {
    background-color: #ffffff;
    color: #161616;
    transform: translateY(-3px);
}

/* Compliance Section */
.compliance-section {
    background-color: #161616;
    padding: 3rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.compliance-container {
    max-width: 800px;
    margin: 0 auto;
}

.compliance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
}

.compliance-item {
    text-align: center;
    padding: 1.5rem 1rem;
    background-color: #2d3748;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.compliance-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(45, 55, 72, 0.3);
}

.compliance-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.compliance-item h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-family: sans-serif;
}

.compliance-item p {
    font-size: 0.9rem;
    color: #ffffff;
    opacity: 0.8;
    font-family: sans-serif;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .tab-nav {
        padding: 0 1rem;
    }

    .tab-btn {
        padding: 1rem 1.5rem;
    }

    .guidelines-grid {
        grid-template-columns: 1fr;
    }

    .section-header {
        flex-direction: column;
        text-align: center;
    }

    .section-title {
        font-size: 2rem;
    }

    .emergency-actions {
        flex-direction: column;
        align-items: center;
    }

    .emergency-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }

    .compliance-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .section-title {
        font-size: 1.5rem;
    }

    .guideline-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .compliance-grid {
        grid-template-columns: 1fr;
    }

    .hero-section,
    .content-section,
    .emergency-section,
    .compliance-section {
        padding: 2rem 1rem;
    }
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.guideline-card {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
}

.guideline-card:nth-child(1) {
    animation-delay: 0.1s;
}

.guideline-card:nth-child(2) {
    animation-delay: 0.2s;
}

.guideline-card:nth-child(3) {
    animation-delay: 0.3s;
}

.guideline-card:nth-child(4) {
    animation-delay: 0.4s;
}

.compliance-item {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
}

.compliance-item:nth-child(1) {
    animation-delay: 0.1s;
}

.compliance-item:nth-child(2) {
    animation-delay: 0.2s;
}

.compliance-item:nth-child(3) {
    animation-delay: 0.3s;
}

.compliance-item:nth-child(4) {
    animation-delay: 0.4s;
}

/* Tab navigation scrollbar */
.tab-nav::-webkit-scrollbar {
    height: 3px;
}

.tab-nav::-webkit-scrollbar-track {
    background: #161616;
}

.tab-nav::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 3px;
}
</style>