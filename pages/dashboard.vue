<template>
    <div class="dashboard-container">
        <h1>Welcome to Your Dashboard</h1>
        <p>This is a protected page, only accessible to authenticated users.</p>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default {
    name: "dashboard",
    methods: {
        async logout() {
            try {
                await signOut(auth);
                this.$router.push("/login");
            } catch (error) {
                console.error("Logout failed:", error);
            }
        },
    },
};
</script>

<style scoped>
.dashboard-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}
</style>
