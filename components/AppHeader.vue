<template>
    <div>
        <div class="header">
            <p>
                SessionID <i class="bi bi-fingerprint"></i>
            </p>
            <h3> <i class="bi bi-shield-fill-check"></i> Authentification & Identification</h3>
        </div>
    </div>
</template>




<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
.header {
    padding: 125px;
    background-color: #2d3748;
}

.header p {
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
    color: white;
    font-size: 16px;
    animation: fadeIn 1s ease-in-out;
}

.header h3 {
    color: white;
    font-family: sans-serif;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
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
    .header p {
        font-size: 4rem;
    }

    .header h3 {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .header {
        padding: 125px;
        position: relative;
        z-index: 5;
        border-bottom-left-radius: 15% 39px;
        border-bottom-right-radius: 15% 39px;
    }
}

@media (max-width: 768px) {
    .header p {
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    .header h3 {
        font-size: 16px;
    }
}
</style>