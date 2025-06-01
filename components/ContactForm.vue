<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const successMessage = ref('');

const submitForm = async () => {
  successMessage.value = '';
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      successMessage.value = 'Form submitted successfully!';
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      successMessage.value = 'Submission failed!';
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    successMessage.value = 'An error occurred.';
  }
};
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <p v-if="successMessage">{{ successMessage }}</p>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
}
.form-container p {
  color: white;
  font-family: sans-serif;
}
input, textarea {
  width: 100%;
  margin: 5px 0;
  padding: 8px;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
