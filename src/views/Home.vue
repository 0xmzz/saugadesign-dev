<template>
  <v-app>
    <div><Header />
      <PopularProducts class="body" />
      <Footer class="footer" />
    </div>
  </v-app>
</template>

<script>

const PopularProducts = require("../components/home/PopularProducts").default;
const Footer = require("../components/home/Footer").default;


module.exports = {
  components: {
   
    PopularProducts,
    Footer,
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
