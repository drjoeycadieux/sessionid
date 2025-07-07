<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const successMessage = ref('');
const isLoading = ref(false);

const submitForm = async () => {
  successMessage.value = '';
  isLoading.value = true;
  
  try {
    const response = await fetch('../api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      successMessage.value = 'Thank you! Your message has been sent successfully.';
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      successMessage.value = result.error || 'Submission failed. Please try again.';
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    successMessage.value = 'An error occurred while submitting the form. Please try again later.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="contact-section">
    <div class="form-container">
      <div class="form-header">
        <h2 class="form-title">Get In Touch</h2>
        <p class="form-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name" class="form-label">Full Name</label>
          <input type="text" id="name" v-model="name" required class="form-input" placeholder="Enter your full name" />
        </div>

        <div class="form-group">
          <label for="email" class="form-label">Email Address</label>
          <input type="email" id="email" v-model="email" required class="form-input"
            placeholder="Enter your email address" />
        </div>

        <div class="form-group">
          <label for="message" class="form-label">Message</label>
          <textarea id="message" v-model="message" required class="form-textarea"
            placeholder="Tell us about your project or inquiry..." rows="6"></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="isLoading">
          <span class="btn-text">{{ isLoading ? 'Sending...' : 'Send Message' }}</span>
          <svg v-if="!isLoading" class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <svg v-else class="btn-icon animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M12 18V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M2 12H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M18 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>
      </form>

      <div v-if="successMessage" class="alert"
        :class="successMessage.includes('Thank you') ? 'alert-success' : 'alert-error'">
        <div class="alert-icon">
          <svg v-if="successMessage.includes('Thank you')" width="20" height="20" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2" />
            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>
        <span>{{ successMessage }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  padding: 3rem 1rem;
  background-color: #161616;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container {
  max-width: 600px;
  width: 100%;
  background: #2d3748;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.form-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  font-size: 1.1rem;
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
}

.contact-form {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid #161616;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  background: #161616;
  color: #ffffff;
  transition: all 0.3s ease;
  resize: none;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #ffffff;
  background: #161616;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #a0aec0;
}

.form-textarea {
  min-height: 120px;
  line-height: 1.6;
}

.submit-btn {
  width: 100%;
  background: #161616;
  color: white;
  border: 2px solid #ffffff;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submit-btn:hover:not(:disabled) {
  background: #ffffff;
  color: #161616;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-text {
  display: inline-block;
}

.btn-icon {
  transition: transform 0.3s ease;
}

.submit-btn:hover:not(:disabled) .btn-icon:not(.animate-spin) {
  transform: translateX(4px);
}

.alert {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  font-weight: 500;
  margin-top: 1rem;
}

.alert-success {
  background: rgba(72, 187, 120, 0.1);
  color: #48bb78;
  border: 1px solid rgba(72, 187, 120, 0.2);
}

.alert-error {
  background: rgba(245, 101, 101, 0.1);
  color: #f56565;
  border: 1px solid rgba(245, 101, 101, 0.2);
}

.alert-icon {
  flex-shrink: 0;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.form-container {
  animation: fadeInUp 0.6s ease-out;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Responsive design */
@media (max-width: 768px) {
  .contact-section {
    padding: 2rem 1rem;
  }

  .form-container {
    padding: 2rem 1.5rem;
  }

  .form-title {
    font-size: 2rem;
  }

  .form-subtitle {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 1.5rem 1rem;
  border-radius: 12px;
  }

  .form-title {
    font-size: 1.75rem;
  margin-bottom: 0.75rem;
  }
  
  .form-subtitle {
    font-size: 0.95rem;
  }
  
  .form-input,
  .form-textarea {
    padding: 0.75rem 1rem;
  }
  
  .submit-btn {
    padding: 0.75rem 1.5rem;
  }
}
</style>