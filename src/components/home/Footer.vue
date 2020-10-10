
<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="grey lighten-3 black--text text-center"
    >
     

      <v-card-text class="black--text pt-0">
        We understand that little upgrades can make a substantial difference and our home signs do just that. We hope you enjoy our products as much as we enjoy creating and offering them to you. Let us help you create pride of ownership in your home and put your best foot forward with Sauga Design.
       <li>Phone # 416-553-0850 or 647-408-4915</li>
    <li> Email : saugadesign@gmail.com</li>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="grey lighten-3 black--text" >
        {{ new Date().getFullYear() }} — <strong>SaugaDesign</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
   data: () => ({
      // icons: [
      //   'mdi-facebook',
      //   'mdi-twitter',
      //   'mdi-linkedin',
      //   'mdi-instagram',
      // ],
    }),
  components: {},
};
</script>
<style>

</style>
