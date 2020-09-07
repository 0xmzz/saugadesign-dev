<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Saugadesign - Custom Home Address signs</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn to="/" text>
          Home
        </v-btn>
        <v-btn to="aboutus" text>
          About us!
        </v-btn>
        <v-btn href="#cart" text>
          Cart
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
