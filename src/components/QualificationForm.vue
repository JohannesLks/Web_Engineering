<!-- src/components/QualificationForm.vue -->
<template>
  <div>
    <h2>Qualifikationsformular</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="skills" placeholder="Besondere Skills" />
      <!-- Weitere Felder hinzufügen nach Bedarf -->
      <button type="submit">Senden</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "QualificationForm",
  data() {
    return {
      skills: ''
      // Weitere Daten
    };
  },
  methods: {
    onSubmit() {
      // Logik zum Senden der Daten
      console.log(this.skills);
    }
  }
};
</script>
