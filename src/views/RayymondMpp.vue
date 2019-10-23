<template>
  <div class="rayymondmpp">
    <div class="mainContainer">
      <ThePhotoGrid gallery="rayymondmpp" />
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
@media (max-width: 768px){
  .mainContainer {
    padding-top: 85px;
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>