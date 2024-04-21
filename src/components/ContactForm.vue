<!-- src/components/ContactForm.vue -->
<template>
  <div>
    <h2>Kontaktformular</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="name" placeholder="Name" />
      <input type="email" v-model="email" placeholder="E-Mail" />
      <!-- Weitere Felder nach Bedarf -->
      <button type="submit">Senden</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: '',
      email: ''
      // Weitere Daten
    };
  },
  methods: {
    onSubmit() {
      // Logik zum Senden der Daten
      console.log(this.name, this.email);
    }
  }
};
</script>
