<template>
    <div class="dashboard">
        <header class="dashboard-header">
            <h1>Dashboard</h1>
        </header>
        <aside class="dashboard-sidebar">
            <nav>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/settings">Settings</nuxt-link></li>
                </ul>
            </nav>
        </aside>
        <main class="dashboard-main">
            <nuxt />
        </main>
    </div>
</template>

<style scoped>
.dashboard {
    display: flex;
    height: 100vh;
}

.dashboard-header {
    background-color: #4a90e2;
    color: white;
    padding: 1rem;
}

.dashboard-sidebar {
    background-color: #f4f4f4;
    width: 200px;
    padding: 1rem;
}

.dashboard-main {
    flex: 1;
    padding: 1rem;
}
</style>