<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" />
          <span v-if="formErrors.email">{{ formErrors.email }}</span>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="form.password" />
          <span v-if="formErrors.password">{{ formErrors.password }}</span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  
  export default {
    name: 'LoginComponent',
    setup(props, { emit }) {
      const form = ref({
        email: '',
        password: ''
      });
      const formErrors = ref({});
  
      const handleSubmit = async () => {
        try {
          const response = await axios.post('http://34.32.39.115/api/login.php', form.value);
          if (response.data.status === 'success') {
            localStorage.setItem('authToken', response.data.message.token);
            this.$router.push('/dashboard');
          } else {
            formErrors.value = { general: response.data.message };
          }
        } catch (error) {
          console.error('Login error:', error);
          formErrors.value.general = 'An error occurred during login.';
        }
      };
  
      return { form, formErrors, handleSubmit };
    }
  };
  </script>
  
  <style>
  .login-container {
    width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-group {
    margin-bottom: 10px;
  }
  label {
    display: block;
  }
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  