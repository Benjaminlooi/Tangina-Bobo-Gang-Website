<template>
  <div>
    <p class>Sabah Trip</p>
    <div class="grid" id="gallery">
      <div class="grid-item" v-for="(item, index) in items" :key="index">
        <div>
          <img
            v-if="index > 8"
            data-aos="fade-up"
            :src="require('@/assets/' + gallery + '/' + item)"
          />
          <img
            v-else
            data-aos="fade-up"
            data-aos-offset="50"
            :src="require('@/assets/' + gallery + '/' + item)"
          />
          <!-- <img data-aos="fade-up" :src="require('@/assets/tgnbbtrip/' + item)" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import AOS from "aos";
import { tgnbbtrip_min } from "@/misc/galleryLinks";

export default {
  name: "ThePhotoGrid",
  props: {
    gallery: String
  },
  data: () => ({
    msnry: null
  }),
  computed: {
    items: function() {
      switch (this.gallery) {
        case "tgnbbtrip":
          return [...tgnbbtrip_min];
        default:
          return null;
      }
    }
  },
  mounted() {
    // console.log(this.gallery);
    var container = document.querySelector("#gallery");

    imagesLoaded(container, function() {
      container.style.display = "block";
      this.msnry = new Masonry(container, {
        itemSelector: ".grid-item"
      });
      AOS.refresh();
    });
  }
  // updated() {
  //   this.msnry.reloadItems();
  //   this.msnry.layout();
  // }
};
</script>

<style lang="scss" scoped>
.grid#gallery {
  display: none;
}
p {
  font-size: 16px;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 1;
  margin: 0 auto 100px;
  font-weight: 500;
  position: relative;
}
.grid-item {
  max-width: 33%;
  width: 33%;
  padding: 0 10px 20px;
  box-sizing: border-box;
  div:hover {
    opacity: 0.7;
  }
  div {
    cursor: pointer;
  }
  img {
    max-width: 100%;
    height: auto;
    width: 100%;
    display: block;
  }
}
@media (max-width: 768px) {
  p {
    font-size: 12px;
    margin-bottom: 24px;
  }
  .grid-item {
    max-width: 50%;
    width: 50%;
    padding: 0 5px 10px;
  }
}
</style>