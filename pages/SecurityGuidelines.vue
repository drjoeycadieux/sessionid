<template>
    <div>
        <Navbar/>
        <AppHeader />
        <div class="header-guidelines">
            <p>
                Security Guidelines
            </p>
            <h3>
                Documentation & Reporting
            </h3>
        </div>
        <AppFooter/>
    </div>
</template>


<script>
import AppFooter from '../components/AppFooter.vue';
import Navbar from  '../components/Navbar.vue';
import AppHeader from '../components/AppHeader.vue';
</script>


<style>
.header-guidelines {
    padding: 125px;
    background-color: white;
}

.header-guidelines h3 {
    text-align: center;
    padding: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header-guidelines p {
    color: black;
    font-family: sans-serif;
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


@media only screen and (min-width: 1024px) {
    .header-guidelines p {
        font-size: 4rem;
    }

    .header-guidelines h3 {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .header-guidelines {
        padding: 125px;
        position: relative;
        z-index: 5;
        border-bottom-left-radius: 15% 39px;
        border-bottom-right-radius: 15% 39px;
    }
}

@media (max-width: 768px) {
    .header-guidelines p {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .header-guidelines h3 {
        font-size: 16px;
    }
}
</style>