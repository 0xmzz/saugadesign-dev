<template>
  <v-app>
     <!-- <PopularProductsdown class="body" /> -->
    <div><Header />
<banner class="banner"/>
      <PopularProducts class="body" />
      <Footer class="footer" />
    </div>
  </v-app>
</template>

<script>

const PopularProducts = require("../components/home/PopularProducts").default;
const Footer = require("../components/home/Footer").default;
const banner = require("../components/home/banner").default;

// const PopularProductsdown = require("../components/home/PopularProductsdown").default;




module.exports = {
  components: {
    // PopularProductsdown,
     PopularProducts,
    Footer,
    banner
  },
};
</script>
<style>
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
