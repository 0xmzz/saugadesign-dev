<template>
  <vueper-slides>
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :title="slide.title"
      :content="slide.content"
      hide-overlay
    />

    <h1 class="vue-typer">Welcome to Sauga Design!</h1>

    <vue-typer
      :text="['Order a Custom sign below!']"
      :repeat="0"
      :shuffle="false"
      initial-action="typing"
      :pre-type-delay="2600"
      :type-delay="50"
      :pre-erase-delay="166"
      :erase-delay="60"
      erase-style="backspace"
      :erase-on-complete="false"
      caret-animation="expand"
      class="vue-typer2"
    ></vue-typer>
  </vueper-slides>
</template>

<script>
import { VueTyper } from "vue-typer";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  data: () => ({
    slides: [
      {
        id: "someid1",
        image: require("../../assets/zaksign2.png"),
      },
      {
        id: "someid2",
        content:"<h1 class=fix >From Classic Designs!</h1><br> <h1 class=fix1>with your choice of colour and size</h1>",
image: require("../../assets/classic.png"),
        },
       {
        id: "someid3",
        content:"<h1 class=fix2 >To Modern Designs!</h1>",
image: require("../../assets/modern.png"),
        },
 {
        id: "someid3",
        content:"<h1 class=fix2 >All signs are DIY ready!",
image: require("../../assets/install.png"),
        },
        

    ],
  }),
  components: { VueperSlides, VueperSlide, VueTyper },
};
</script>
<style>
.vueperslide--active:before {
  /* content: ""; */
  position: absolute;
  top: 28vw;
  right: 31vw;
  padding: 4px 25px;
  background: orange;
  color: #fff;
  font-size: 2vw;

  transform-origin: 0 0;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
}
.fix {
  position: absolute;

  text-transform: capitalize;

  font-size: 5vw;
  top: -4%;
  right: 15%;
  color: blanchedalmond;
}
.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;

  font-size: 5vw;
  top: -4%;
  right: 15%;
  color: blanchedalmond;
}
.vue-typer2 {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;
  font-weight: bolder;
  font-size: 3vw;
  top: 19%;
  right: 23%;
  color: black;
}

.fix {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;

  font-size: 5vw;
  top: 6%;
  right: 33%;
  color: blanchedalmond;
}
.fix2 {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;

  font-size: 5vw;
  top: 6%;
  right: 26%;
  color: blanchedalmond;
}
.fix1 {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;
  font-weight: bolder;
  font-size: 3vw;
  top: 24%;
  right: 14%;
  color: black;
}
</style>
