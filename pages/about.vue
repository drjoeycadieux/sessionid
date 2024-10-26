<script setup></script>

<template>
    <div>
        <Navbar />
        <br>
        <div class="content-container">
            <h1>
                Our Company
            </h1>
            <br>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem sit facere eligendi! Enim a ab
                dolorem repellendus nam quaerat, nemo fugit ipsum nulla, laborum aut vel illum nisi praesentium.
            </p>
            <div class="button-container">
                <button class="button" type="button">Get Started</button>
            </div>
        </div>
        <br />
        <div class="glass">
            <h1>Event :: Universe</h1>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem corrupti voluptatibus vitae magnam ad
                facere, aperiam dolorum corporis, beatae consequuntur neque, voluptate dolore ea commodi illum explicabo
                a! Asperiores, magni.</p>
                <button class="outline-button" type="button">Event</button>
        </div>
        <br>
        <AppFooter />
    </div>
</template>



<style scoped>
.content-container {
    background-color: white;
    padding: 125px;
    width: 600px;
    margin: auto;
    border-radius: 15px;
}

.button-container {
    display: flex;
    gap: 10px;
}

.content-container p {
    color: black;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 26px;
    text-align: center;
}

.content-container h1 {
    text-align: center;
    font-family: sans-serif;
}

.button {
    display: inline-block;
    padding: 15px 30px;
    font-size: 20px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #0056b3;
}

.outline-button {
    display: inline-block;
    padding: 15px 30px;
    font-size: 20px;
    color: #007bff;
    background-color: transparent;
    border: 2px solid #007bff;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;
}

.outline-button:hover {
    background-color: #007bff;
    color: white;
}

.glass {
    padding: 125px;
    width: 600px;
    margin: auto;
    border-radius: 15px;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 58, 121, 1) 45%, rgba(0, 212, 255, 1) 100%);
}

.glass h1 {
    text-align: center;
    color: white;
    font-family: sans-serif;
}

.glass p {
    text-align: center;
    color: white;
    font-family: sans-serif;
    font-size: 25px;
    font-weight: 500;
}
</style>