<template>
    <div class="registration-form">
        <h2>Register for the Event</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="formData.name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="formData.email" required />
            </div>
            <div>
                <label for="phone">Phone:</label>
                <input type="tel" v-model="formData.phone" />
            </div>
            <div>
                <label for="message">Message:</label>
                <textarea v-model="formData.message"></textarea>
            </div>
            <button type="submit">Register</button>
        </form>
        <div v-if="submitted">
            <p>Thank you for registering!</p>
        </div>
    </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            submitted: false
        };
    },
    methods: {
        async handleSubmit() {
            const { data, error } = await supabase
                .from('registrations')
                .insert([this.formData]);

            if (error) {
                console.error('Error inserting data:', error);
                alert('Registration failed. Please try again.');
            } else {
                this.submitted = true;
                this.resetForm();
            }
        },
        resetForm() {
            this.formData = {
                name: '',
                email: '',
                phone: '',
                message: ''
            };
        }
    }
};
</script>

<style scoped>
.registration-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>