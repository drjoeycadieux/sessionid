<template>
    <div class="contact-form-container">
        <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" v-model="formData.name" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="formData.email" class="form-control" required>
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" class="form-control" required></textarea>
            </div>

            <button type="submit" class="btn-submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js';

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        async submitForm() {
            const supabase = createClient('https://ocwwnpkmkmbunrnmpfiz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jd3ducGtta21idW5ybm1wZml6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MjkzODMsImV4cCI6MjAyNTMwNTM4M30.iOiVXYJhNZKBF1clbYPa14Bm3f5l4wyUye0dx60DV8g');
            const { data, error } = await supabase.from('contact_form').insert([this.formData]);

            if (error) {
                console.log('Error submitting form:', error.message);
            } else {
                console.log('Form submitted successfully:', data);
                this.formData = { name: '', email: '', message: '' };
            }
        }
    }
};
</script>

<style scoped>
.contact-form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
}

.form-group {
    margin-bottom: 15px;
}

.label {
    font-weight: bold;
}

.form-control {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
}

.btn-submit {
    background-color: #2d3748;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}
</style>