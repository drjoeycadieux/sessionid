<template>
    <div>
        <Navbar/>
        <AppHeader/>
        <br/>
        <div class="event-page">
            <h1 class="event-title">{{ event.title }}</h1>
            <p class="event-date">{{ event.date }}</p>
            <p class="event-location">{{ event.location }}</p>
            <p class="event-description">{{ event.description }}</p>
            <!-- <button @click="register">Register Now</button> -->
            <p class="register-not-open">Not open yet for register.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            event: {
                title: "Techtack-Technologies - Universe",
                date: "December 15, 2024",
                location: "Online & Montreal, QC",
                description: "Join Us. Techtack Technologies is a fictional universe focused on advanced tech and innovation. It explores themes like AI, virtual reality, and the societal impact of technology, featuring diverse characters who navigate the benefits and challenges of a rapidly evolving digital landscape."
            }
        };
    },
    methods: {
        register() {
            alert('Thank you for registering!');
        }
    }
};
</script>

<style scoped>
.event-page {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    font-family: sans-serif;
}
.register-not-open {
    color: firebrick;
    font-family: sans-serif;
    font-weight: 500;
}

.event-title {
    font-size: 2em;
    color: #333;
}

.event-date,
.event-location {
    font-size: 1.2em;
    color: #666;
}

.event-description {
    margin: 20px 0;
    font-size: 1em;
    color: #444;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>