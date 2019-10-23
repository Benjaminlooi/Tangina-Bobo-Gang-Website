<template>
  <div class="tgnbbtrip">
    <div class="mainContainer">
      <ThePhotoGrid />
    </div>
  </div>
</template>

<script>
import ThePhotoGrid from "@/components/ThePhotoGrid";

export default {
  components: {
    ThePhotoGrid
  }
};
</script>

<style lang="scss" scoped>
.mainContainer {
  padding-top: 210px;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  width: 100%;
}
</style>