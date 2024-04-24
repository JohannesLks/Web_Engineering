<!-- src/components/Home.vue -->
<template>
  <div>
    <h1>Willkommen bei TechInnovate Solutions</h1>

    <section id="about-us">
    <h2>Über TechInnovate Solution</h2>
    <p>Wir stehen an der Spitze der technologischen Innovation und sind verpflichtet, bahnbrechende Lösungen zu entwickeln, die unsere Kunden und Mitarbeiter stärken.</p>
    </section>
    <!-- Hier können Bilder oder Videos hinzugefügt werden -->
  </div>

  
  <div id="hero">
    <img src="/hero-banner.jpg" alt="Hero Banner" />
    <h1>Kommen Sie in unser Team als Systemadministrator</h1>
  </div>

  <div class="slideshow-container">
    <div class="slides" :style="{ 'transform': 'translateX(' + (-currentSlide * 100) + '%)' }">
      <div class="slide" v-for="(image, index) in images" :key="index" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
    </div>
    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>
  </div>



  <section id="our-values">
    <h2>Unsere Werte</h2>
    <ul>
    <li>Innovation und Kreativität</li>
    <li>Integrität und Transparenz</li>
    <li>Engagement für Exzellenz</li>
    </ul>
  </section>

  <section id="benefits">
  <h2>Warum bei uns arbeiten?</h2>
  <p>Teil von TechInnovate Solution zu werden bedeutet, Teil eines unterstützenden und dynamischen Teams zu sein. Hier ist, was wir bieten:</p>
  <ul>
    <li>Wettbewerbsfähige Gehälter</li>
    <li>Flexible Arbeitszeiten</li>
    <li>Gesundheits- und Wellnessprogramme</li>
    <li>Fortlaufende Lern- und Entwicklungsmöglichkeiten</li>
  </ul>
</section>
  

</template>

<script>
export default {
  name: "Home",
  
  data() {
    return {
      images: [
      '/Konferenzraum.png', // Pfad zum ersten Bild
      '/Serverraum1.png',   // Pfad zum zweiten Bild
      '/Unternehmen1.png',  // Pfad zum dritten Bild
    ],
    currentSlide: 0,
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.nextSlide();
      }, 6000); // Wechselt die Slides alle 3 Sekunden
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide + this.images.length - 1) % this.images.length;
    }
  }
};
</script>

<style scoped> /*Für das obere Hero-banner*/
#hero {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#hero img {
  max-width: 100%; /* Stellen Sie sicher, dass das Bild innerhalb des Containers bleibt */
  height: auto; /* Dies stellt sicher, dass das Seitenverhältnis des Bildes erhalten bleibt */
}
</style>

<style scoped> /*Für den Slideshow Container*/
.slideshow-container {
  position: relative;
  max-width: 100%;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 100%;
  height: 500px; /* Höhe Ihrer Wahl */
  background-size: cover;
  background-position: center;
}

button.prev,
button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

button.prev { left: 10px; }
button.next { right: 10px; }
</style>