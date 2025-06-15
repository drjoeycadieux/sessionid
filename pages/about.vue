<script setup>
import { ref } from 'vue'

useSeoMeta({
    title: 'About - SessionID | Techtack Technologies',
    description: 'Learn about Techtack Technologies and our innovative approach to security and authentication solutions.'
})

const aboutData = ref({
    company: {
        title: "About Techtack Technologies",
        description: "We are pioneers in advanced technology and innovation, focusing on artificial intelligence, virtual reality, and the transformative impact of technology on society. Our mission is to create secure, cutting-edge solutions that shape the future of digital interaction.",
        features: [
            {
                icon: "🛡️",
                title: "Security First",
                description: "Advanced security protocols and authentication systems"
            },
            {
                icon: "🚀",
                title: "Innovation",
                description: "Cutting-edge technology solutions for modern challenges"
            },
            {
                icon: "🌐",
                title: "Global Impact",
                description: "Transforming digital landscapes worldwide"
            }
        ]
    },
    universe: {
        title: "Event :: Universe",
        description: "Explore our fictional universe centered around advanced technology and innovation. Discover futuristic cities, cutting-edge gadgets, and the ethical dilemmas faced by characters navigating a rapidly evolving digital landscape.",
        stats: [
            { number: "100+", label: "Technologies" },
            { number: "50+", label: "Innovations" },
            { number: "25+", label: "Events" }
        ]
    }
})
</script>

<template>
    <div class="about-page">
        <Navbar />
        <AppHeader />

        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-content">
                <h1 class="hero-title">{{ aboutData.company.title }}</h1>
                <p class="hero-description">{{ aboutData.company.description }}</p>
                <div class="hero-actions">
                    <button class="primary-btn">
                        <span>Get Started</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button class="secondary-btn">Learn More</button>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features-section">
            <div class="features-container">
                <h2 class="section-title">Why Choose Us</h2>
                <div class="features-grid">
                    <div v-for="feature in aboutData.company.features" :key="feature.title" class="feature-card">
                        <div class="feature-icon">{{ feature.icon }}</div>
                        <h3 class="feature-title">{{ feature.title }}</h3>
                        <p class="feature-description">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Universe Section -->
        <section class="universe-section">
            <div class="universe-content">
                <div class="universe-text">
                    <h2 class="universe-title">{{ aboutData.universe.title }}</h2>
                    <p class="universe-description">{{ aboutData.universe.description }}</p>

                    <div class="stats-grid">
                        <div v-for="stat in aboutData.universe.stats" :key="stat.label" class="stat-item">
                            <div class="stat-number">{{ stat.number }}</div>
                            <div class="stat-label">{{ stat.label }}</div>
                        </div>
                    </div>

                    <button class="universe-btn">
                        <span>Explore Universe</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 3H21V9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <AppFooter />
    </div>
</template>



<style scoped>
.about-page {
    background-color: #161616;
    min-height: 100vh;
}

/* Hero Section */
.hero-section {
    padding: 4rem 2rem;
    background-color: #161616;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
}

.hero-content {
    max-width: 900px;
    text-align: center;
    animation: fadeInUp 0.8s ease-out;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: #ffffff;
    font-family: sans-serif;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-description {
    font-size: 1.25rem;
    color: #ffffff;
    opacity: 0.9;
    font-family: sans-serif;
    line-height: 1.8;
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.hero-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.primary-btn {
    background-color: #2d3748;
    color: #ffffff;
    border: 2px solid #2d3748;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
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

.primary-btn:hover {
    background-color: #ffffff;
    color: #2d3748;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

.secondary-btn {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.secondary-btn:hover {
    background-color: #ffffff;
    color: #161616;
    transform: translateY(-3px);
}

/* Features Section */
.features-section {
    padding: 5rem 2rem;
    background-color: #2d3748;
}

.features-container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    margin-bottom: 3rem;
    font-family: sans-serif;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background-color: #161616;
    padding: 2.5rem 2rem;
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.feature-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
    font-family: sans-serif;
}

.feature-description {
    font-size: 1rem;
    color: #ffffff;
    opacity: 0.8;
    line-height: 1.6;
    font-family: sans-serif;
}

/* Universe Section */
.universe-section {
    padding: 5rem 2rem;
    background-color: #161616;
}

.universe-content {
    max-width: 1000px;
    margin: 0 auto;
}

.universe-text {
    text-align: center;
}

.universe-title {
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 2rem;
    font-family: sans-serif;
}

.universe-description {
    font-size: 1.2rem;
    color: #ffffff;
    opacity: 0.9;
    line-height: 1.8;
    margin-bottom: 3rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    font-family: sans-serif;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.stat-item {
    text-align: center;
    padding: 1.5rem;
    background-color: #2d3748;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(45, 55, 72, 0.3);
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    font-family: sans-serif;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 1rem;
    color: #ffffff;
    opacity: 0.8;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.universe-btn {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.universe-btn:hover {
    background-color: #ffffff;
    color: #161616;
    transform: translateY(-3px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-description {
        font-size: 1.1rem;
    }

    .hero-actions {
        flex-direction: column;
        align-items: center;
    }

    .primary-btn,
    .secondary-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .universe-title {
        font-size: 2.2rem;
    }

    .stats-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .hero-section,
    .features-section,
    .universe-section {
        padding: 3rem 1rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .universe-title {
        font-size: 1.8rem;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .stat-number {
        font-size: 2rem;
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

.feature-card {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
}

.feature-card:nth-child(1) {
    animation-delay: 0.1s;
}

.feature-card:nth-child(2) {
    animation-delay: 0.2s;
}

.feature-card:nth-child(3) {
    animation-delay: 0.3s;
}

.stat-item {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
}

.stat-item:nth-child(1) {
    animation-delay: 0.1s;
}

.stat-item:nth-child(2) {
    animation-delay: 0.2s;
}

.stat-item:nth-child(3) {
    animation-delay: 0.3s;
}
</style>