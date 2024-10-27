<script>
export default {
    data() {
        return {
            aboutId: {
                title: "Our Company",
                heading: "Event :: Universe"
            }
        }
    }
}
</script>

<template>
    <div>
        <Navbar />
        <AppHeader />
        <br>
        <div class="content-container">
            <h1>
                {{ aboutId.title }}
            </h1>
            <br>
            <p>
                Techtack Technologies is a fictional universe centered around advanced technology and innovation. It
                often explores themes like artificial intelligence, virtual reality, and the impact of tech on society.
                The narrative may include futuristic cities, cutting-edge gadgets, and ethical dilemmas faced by
                characters as they navigate a rapidly evolving digital landscape. The universe emphasizes both the
                potential benefits and challenges of technology, showcasing a diverse range of characters—from visionary
                entrepreneurs to hackers—who shape the world around them.
            </p>
            <div class="button-container">
                <button class="button" type="button">Get Started</button>
            </div>
        </div>
        <br />
        <div class="glass">
            <h1>{{ aboutId.heading }}</h1>
            <br>
            <p>Techtack Technologies is a fictional universe focused on advanced tech and innovation. It explores themes
                like AI, virtual reality, and the societal impact of technology, featuring diverse characters who
                navigate the benefits and challenges of a rapidly evolving digital landscape.</p>
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