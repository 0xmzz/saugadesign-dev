<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Saugadesign</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn to="/" text>
          Home
        </v-btn>
        <v-btn to="contactus" text>
          Contact us
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
