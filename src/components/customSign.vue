<template>
  <v-app>
    <div class="main">
      <v-row>
        <div>
          <h2>
            Enter house #:
            <input class="input" v-model.trim="overlay" />
            Price: $
            <input class="input" v-model="calcuateCost" readonly />
          </h2>
        </div>
      </v-row>

      <v-checkbox v-model="items.matte" label="Matt Finish (+$10)" dense></v-checkbox>

      <div class="main2">
        <h2>Font offerings:</h2>

        <v-radio-group row class="radio" v-model="radio.value" :mandatory="true">
          <v-radio class="radio-1" label="Edward" value="1" id="one"></v-radio>

          <br />

          <v-card class="Edward"></v-card>

          <br />

          <v-radio class="radio-2" label="Script MT Bold" value="2"></v-radio>
          <br />

          <v-card class="Script"></v-card>

          <br />
          <v-radio class="radio-3" label="Gessele" value="3"></v-radio>
          <br />
          <v-card class="Gessele"></v-card>
          <br />

          <v-radio class="radio-4" label="Slimlines" value="4"></v-radio>
          <br />
          <v-card class="Slim"></v-card>

          <br />
          <v-radio class="radio-5" label="COPASETIC" value="5"></v-radio>
          <v-card class="Copa"></v-card>
          <br />
          <v-radio class="radio-6" label="Aerolite" value="6"></v-radio>
          <v-card class="Aero"></v-card>
        </v-radio-group>
      </div>
      <div>
        <v-col sm="6">
          <v-select :items="items.colours" item-value="id" item-text="color" label="Colour" dense></v-select>
        </v-col>

        <v-col sm="6">
          <v-select :items="items.surface" label="House Surface applied on" dense></v-select>
        </v-col>
      </div>

      <div class="main4">
        <h2>Rendering:</h2>
        <div class="main3">
          <v-card :class="font">{{overlay}}</v-card>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App2",

  components: {},

  data: () => ({
    items: {
      colours: [
        { color: "Black", id: 1 },
        { color: "Red", id: 2 },
        { color: "White", id: 3 },
        { color: "Gold", id: 4 },
      ],
      //   selectedOptionId: 0,

      matte: false,
      surface: ["Brick", "Stucco", "Stone", "Other"],
    },
    Red: false,

    overlay: "",

    cost: 0,

    radio: {
      value: "",
    },
  }),

  computed: {
    calcuateCost: function () {
      if (this.items.matte == true) {
        return this.cost + this.overlay.length * 6 + 10;
      } else {
        return this.cost + this.overlay.length * 6;
      }
    },
    font: function () {
      if (this.radio.value == 1) {
        return "Edward";
      } else if (this.radio.value == 2) {
        return "Script";
      } else if (this.radio.value == 3) {
        return "Gessele";
      } else if (this.radio.value == 4) {
        return "Slim";
      } else if (this.radio.value == 5) {
        return "Copa";
      } else if (this.radio.value == 6) {
        return "Aero";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.main {
  position: relative;
  top: 2%;
  left: 1%;
  margin: 2%;
}
.main2 {
  position: absolute;
  top: 100%;
  left: 0%;
}
.main3 {
  font-size: 2cm;
  position: relative;
  top: 150%;
  left: -0%;
  border: 2px solid green;
  border-radius: 5px;
}
.main4 {
  position: absolute;
  top: 150%;
  left: 0%;
}

@font-face {
  font-family: "edwardian_alternatebold";
  src: url(../fonts/Edwardian-Script.ttf);
}
@font-face {
  src: url(../fonts/ScriptMTBold.ttf);
  font-family: "ScriptMTBold";
}
@font-face {
  src: url(../fonts/Gessele.woff);
  font-family: "Gessele";
}
@font-face {
  src: url(../fonts/Slimlines.ttf);
  font-family: "Slimlines";
}
@font-face {
  src: url(../fonts/Copasetic.woff);
  font-family: "Copasetic";
}
@font-face {
  src: url(../fonts/AeroliteScriptCP.woff);
  font-family: "Aerolite";
}

.radio-1 >>> label {
  font-size: 3vw;
  font-family: "edwardian_alternatebold", Arial, sans-serif;
}
.radio-2 >>> label {
  font-size: 2vw;
  font-family: "ScriptMTBold", Arial, sans-serif;
}
.radio-3 >>> label {
  font-size: 3vw;
  font-family: "Gessele", Helvetica, sans-serif;
}
.radio-4 >>> label {
  font-size: 2vw;
  font-family: "Slimlines", Helvetica, sans-serif;
}
.radio-5 >>> label {
  font-size: 2vw;
  font-family: "Copasetic", Helvetica, sans-serif;
  text-transform: capitalize;
}
.radio-6 >>> label {
  font-size: 2vw;
  font-family: "Aerolite", Helvetica, sans-serif;
}
/* Fonts for reactive sign  */

.Edward {
  font-family: "edwardian_alternatebold";

  font-weight: 1000;
  text-align: center;
}

.Script {
  font-family: "ScriptMTBold";

  text-align: center;
}
.Gessele {
  font-family: "Gessele";

  font-weight: 1000;
  text-align: center;
}
.Slim {
  font-family: "Slimlines";

  text-align: center;
}
.Copa {
  font-family: "Copasetic";

  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}

.Aero {
  font-family: "Aerolite";
  font-weight: 900;
  text-align: center;
}

.title {
  position: relative;
  top: 60%;
  left: 35%;
}
.text-append {
  position: relative;
  top: 60%;
  left: 35%;
  font-size: 2vw;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.input {
  position: relative;
  border: 2px solid green;
}
.card1 {
  border: 10px;
  height: 10vh;
  width: 100vh;
}

.img1 {
  position: relative;
  top: 60%;
  left: 35%;
  height: 60vh;
  width: 120vh;
}
</style>
