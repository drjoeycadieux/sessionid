<template>
    <div class="contact-form">
        <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" v-model="name" placeholder="Enter your name" required>
            </div>
            <div class="form-group">
                <label for="email">Your Email</label>
                <input type="text" id="email" v-model="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="message">Your Message</label>
                <textarea id="message" v-model="message" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" class="btn-submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Form submitted successfully');
                        // Optionally, reset form fields
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    } else {
                        console.error('Error submitting form');
                    }
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                });
        }
    }
};
</script>

<style scoped>
.contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
}

textarea {
    height: 150px;
    /* Adjust as needed */
}

.btn-submit {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.btn-submit:hover {
    background-color: #0056b3;
}
</style>