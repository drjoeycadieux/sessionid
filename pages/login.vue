<template>
    <div class="container">
        <div class="login-container">
            <h1>Login</h1>
            <form @submit.prevent="handleLogin">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" required />
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" required />
                </div>
                <button type="submit">Login</button>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
        </div>
    </div>
</template>

<script>
import { auth } from "@/firebase"; // Import Firebase auth from the firebase.js file
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        };
    },
    methods: {
        // Login handler with async/await and error handling
        async handleLogin() {
            this.errorMessage = ''; // Clear any existing error message

            try {
                await signInWithEmailAndPassword(auth, this.email, this.password);
                console.log('Login successful');
                // Add your redirect logic here, e.g., this.$router.push('/dashboard')
            } catch (error) {
                this.errorMessage = error.message; // Show the error message to the user
            }
        },
    },
};
</script>



<style scoped>
.container {
    padding-top: 125px;
}

.login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    font-family: sans-serif;
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-family: sans-serif;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input:focus {
    border-color: #007bff;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.error {
    color: red;
    text-align: center;
}
</style>