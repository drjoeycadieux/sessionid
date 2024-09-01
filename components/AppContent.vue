<template>
    <div class="apps">
        <div class="app-content">
            <p>
                A session ID, often referred to simply as sessionid, is a unique identifier assigned to a user during
                their visit to a website. It plays a crucial role in maintaining stateful interactions between the
                user's browser and the web server throughout a session.
            </p>
            <a href="https://secureaccessv2.onrender.com/index.html" target="_blank" rel="noopener noreferrer">
                <button class="button">
                    Open Web Application
                </button>
            </a>
        </div>
    </div>
</template>




<style>
.app-content {
    text-align: center;
    border-radius: 15px;
}

.app-content p {
    padding: 16px;
    color: #ffff;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
    margin: 0;
}

@media only screen and (min-width: 1024px) {
    .app-content p {
        width: 800px;
        margin: auto;
        padding: 25px;
    }
}

@media (max-width: 768px) {
    img {
        width: 85%;
        margin: auto;
    }
}

.button {
    background-color: #2d3748;
    color: #fff;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    font-weight: bold;
}
</style>