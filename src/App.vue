<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/qualify">Qualifikationsformular</router-link> |
      <router-link to="/contact">Kontakt</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
nav a {
  padding: 10px;
  text-decoration: none;
  color: black;
}
nav a.router-link-active {
  color: blue;
  text-decoration: underline;
}
</style>
