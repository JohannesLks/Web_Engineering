<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            @blur="v$.form.email.$touch"
          />
          <span v-if="v$.form.email.$error">Please enter a valid email.</span>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            @blur="v$.form.password.$touch"
          />
          <span v-if="v$.form.password.$error">Password is required.</span>
        </div>
        <button type="submit" :disabled="v$.$invalid">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import { required, email } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  import axios from 'axios';
  
  export default {
    name: 'LoginComponent',
    setup() {
      const form = reactive({
        email: '',
        password: ''
      });
  
      const rules = {
        form: {
          email: { required, email },
          password: { required }
        }
      };
  
      const v$ = useVuelidate(rules, form);
  
      async function handleSubmit() {
        v$.$validate();
        if (!v$.$invalid) {
          try {
            const response = await axios.post('http://34.32.39.115:3000/login', {
              email: form.email,
              password: form.password
            });
            localStorage.setItem('token', response.data.token); // Store the token in local storage
            this.$router.push('/dashboard'); // Redirect to dashboard
          } catch (error) {
            console.error('Login error:', error);
            alert('Login failed! Please check your credentials.');
          }
        }
      }
  
      return { form, v$, handleSubmit }
    }
  }
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
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  