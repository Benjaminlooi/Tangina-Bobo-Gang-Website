<template>
  <div class="home">
    <div class="hero">
      <div class="hero-text-wrapper">
        <p class="text-xs uppercase">Diary</p>
        <h1 class="text-4xl font-bold uppercase">Tanginabobo Gang</h1>
      </div>
      <div class="hero-img-wrapper">
        <img src="../assets/hero.jpeg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 95vh;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
  letter-spacing: 0.12em;
}
.hero-text-wrapper {
  width: 50%;
  z-index: 1;
}
.hero-img-wrapper {
  width: 50%;
}
@media only screen and (max-width: 690px) {
  .hero-text-wrapper {
    width: 100%;
  }
  .hero-img-wrapper {
    width: 100%;
  }
}
</style>