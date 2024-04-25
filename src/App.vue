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

nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 123, 255, 0.6); /* Blauer Hintergrund mit 60% Transparenz */
  padding: 3px 0; /* Weniger Padding oben und unten, um die Taskbar schmaler zu machen */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Leichter Schatten für die Taskbar */
  position: fixed; /* Macht die Navigation fest am oberen Bildschirmrand */
  top: 0;
  left: 0;
  width: 100%;
  height: 30px; /* Definiert eine feste Höhe für die Taskbar, um sie schmaler zu machen */
  z-index: 1000; /* Stellt sicher, dass die Taskbar über anderen Inhalten bleibt */
}

nav a {
  padding: 5px 10px; /* Angepasstes Padding innerhalb der Links */
  text-decoration: none;
  color: white;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;
}

nav a:not(:last-child) {
  margin-right: 5px; /* Kleinerer Abstand zwischen den Buttons */
}

nav a:hover,
nav a.router-link-active {
  background-color: rgba(0, 86, 179, 0.6); /* Dunklerer Blauer Hintergrund beim Hover mit Transparenz */
  border-color: rgba(0, 64, 128, 0.6); /* Blaue Umrandung beim Hover mit Transparenz */
  color: white;
  text-decoration: none;
}
</style>
