<template>
  <v-container>
    <v-card class="container">
      <v-img src="@/assets/house.jpg" aspect-ratio="3">
        <h1 class="vue-typer">Welcome to Sauga Design!</h1>
        <!-- <vue-typer
          :text="['Welcome to Sauga Design!']"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="2000"
          :type-delay="50"
          :pre-erase-delay="166"
          :erase-delay="60"
          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="expand"
          class="vue-typer"
        ></vue-typer>-->
        <vue-typer
          :text="['Get a quote and place an order below']"
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
        <v-row align="end" :class="font">
          <vue-typer
            :text="['123 Address Sign']"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="5200"
            :type-delay="100"
            :pre-erase-delay="1500"
            :erase-delay="200"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="expand"
            class="Banner1"
          ></vue-typer>
        </v-row>
      </v-img>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div>
          <v-row>
            <v-col>
              <v-card>
                <h2>Font Options</h2>

                <v-radio-group
                  text-align:center
                  class="radio"
                  v-model="radio.value"
                  :mandatory="true"
                >
                  <div class="overline mb-3">Classic</div>
                  <v-row class="container" dense>
                    <v-radio
                      class="radio-1"
                      label="Edward"
                      value="1"
                      id="one"
                    />

                    <v-radio class="radio-2" label="ALS" value="2" />

                    <v-radio class="radio-6" label="Aerolite" value="6" />
                    <v-radio class="radio-7" label="Script" value="7" />
                  </v-row>

                  <div class="overline mb-3">Modern</div>
                  <v-row class="container" dense>
                    <v-radio class="radio-4" label="Slimlines" value="4" />

                    <v-radio class="radio-5" label="COPASETIC" value="5" />
                    <v-radio class="radio-3" label="Kavo" value="3" />
                    <v-radio class="radio-9" label="Dancing" value="9" />
                  </v-row>
                  <div class="overline mb-3">Custom</div>
                  <v-row class="container" dense>
                    <v-radio class="radio-8" label="Custom Font" value="8" />
                    <div class="container">
                      <v-text-field
                        v-model="isInstructions"
                        label="Enter font name (Preview will not be availaible, we will contact you before finalizing)"
                        v-if="radio.value == '8'"
                        :rules="Rules"
                        required
                      >
                      </v-text-field>
                    </div>
                  </v-row>
                </v-radio-group>
              </v-card>
              <v-divider></v-divider>
              <v-card>
                <div>
                  <h3 class="container">Sign Preview:</h3>

                  <div class="main2">
                    <v-card :class="font">{{ overlay }}</v-card>
                  </div>
                </div>

                <div class="container">
                  <v-text-field
                    label="Enter Address Sign here!"
                    class="input"
                    v-model.trim="overlay"
                    hide-details="auto"
                    :rules="Rules"
                    ref="Address"
                    required
                  ></v-text-field>
                </div>

                <div class="container">
                  <div class="selection">
                    <v-row sm="2">
                      <v-select
                        id="colour"
                        v-model="items.isColor.color"
                        :items="items.colours"
                        :item-value="items.colours.color"
                        item-text="color"
                        label="Sign Colour (Acrylic)"
                        dense
                        :rules="Rules"
                        required
                      ></v-select>
                    </v-row>

                    <v-row>
                      <v-select
                        v-model="isHeight"
                        :items="items.height"
                        :item-value="items.height"
                        label="Letter Height (Capital Letter height)"
                        dense
                        :rules="Rules"
                        required
                      ></v-select>
                    </v-row>
                    <v-row>
                      <v-select
                        v-model="isInstall"
                        :items="items.install"
                        :item-value="items.install"
                        label="Do you require installation?"
                        dense
                        :rules="Rules"
                        required
                      ></v-select>
                    </v-row>
                    <template v-if="isInstall === 'Yes'">
                      <v-select
                        v-model="isLocation"
                        :items="items.location"
                        :item-value="items.location"
                        label="Installation Quote by Region"
                        dense
                        :rules="Rules"
                        required
                      ></v-select>
                      <div class="blue">
                        Please note that we do not install signs beyond 12 feet
                        of height
                      </div>
                      <v-img
                        aspect-ratio="2"
                        src="https://github.com/zubairzia0/SaugaDesign-Site/blob/master/assets/GTA.png?raw=true"
                      ></v-img>
                    </template>
                    <template
                      v-if="isLocation === 'Other' && isInstall === 'Yes'"
                    >
                      <div class="red">
                        We only provide quotes for installations within the GTA
                        region. If other is selected we can discuss your
                        installation options when we reach out to you. if you
                        have any questions click on the chat bubble on the
                        bottom right and leave a message. You can also email us
                        at saugadesign@gmail.com.
                      </div>
                    </template>

                    <template v-if="isInstall === 'No'"> </template>
                    <v-row>
                      <v-col>
                        <v-text-field
                          id="price"
                          class="input"
                          label="Quoted: $"
                          v-model="calculateCost"
                          hide-details="auto"
                          readonly
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-btn
                      :disabled="!valid"
                      color="success"
                      @click="validate"
                      id="custom-sign"
                      :class="validater()"
                      data-item-id="custom-sign"
                      data-item-price="0.00"
                      data-item-url="https://saugadesign.com"
                      data-item-description="Custom made house address sign"
                      data-item-image="/assets/SaugaSignslogo.PNG"
                      data-item-name="Custom Sign"
                      data-item-custom1-name="Address Sign Text (do not change in cart)"
                      data-item-custom1-type="textarea"
                      data-item-custom1-required="true"
                      :data-item-custom1-value="overlay"
                      data-item-custom10-name="Number of digits + letters in Order (do not change this field)"
                      :data-item-custom10-value="isNumber"
                      data-item-custom10-options="1[+6.78]|2[+13.56]|3[+20.34]|4[+27.12]|5[+33.9]|6[+40.68]|7[+47.46]
                      |8[+54.24]|9[+54.24]|10[+61.02]|11[+74.58]|12[+81.36]|13[+88.14]|14[+94.92]|15[+101.7]|16[+108.48]|17[+115.26]|18[+122.04]|19[+128.82]|20[+135.6]|21[+142.38]
                      |22[+149.16]|23[+155.94]|24[+162.72]|25[+169.5]|26[+176.28]|27[+183.06]|28[+189.84]|29[+196.62]|30[+203.4]"
                      data-item-custom2-name="Acrylic Colour"
                      data-item-custom2-options="Black|Black Matte +$10[+10]|Red|White|Grey"
                      data-item-custom2-required="true"
                      :data-item-custom2-value="items.isColor.color"
                      data-item-custom4-name="Font Choice"
                      data-item-custom4-options="Edward|Script|ALS|Kavo|Slimlines|Copasetic|Aerolite|Dancing|Custom"
                      data-item-custom4-required="true"
                      :data-item-custom4-value="font"
                      data-item-custom9-name="Letter Height"
                      data-item-custom9-options="8.5 Inch|9.5 Inch +$10[+10]|10.5 Inch +$20[+20]|Custom"
                      data-item-custom9-required="true"
                      :data-item-custom9-value="isHeight"
                      data-item-custom6-name="Installation"
                      data-item-custom6-options="No|Yes"
                      data-item-custom6-required="true"
                      :data-item-custom6-value="isInstall"
                      data-item-custom7-name="Installation Quote by Region"
                      data-item-custom7-options="N/A|Halton +$80[+80]|Peel +$80[+80]|City of Toronto +$100[+100]|York +$100[+100]|Durham +$120[+120]|Hamilton +$100[+100]|Kitchner/Waterloo/Guelph/Cambridge +$120[+120]|Other"
                      :data-item-custom7-value="isLocation"
                      data-item-custom8-name="Phone Number"
                      data-item-custom8-required="true"
                      data-item-custom13-name="Any Special Instructions/Requests?"
                      data-item-custom13-type="textarea"
                      :data-item-custom13-value="isInstructions"
                      >*Add to cart</v-btn
                    >
                    <div class="container" v-if="this.valid == false">
                      <p class="red">Please fill all required fields above</p>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <div>
          <!-- <p class="yellow">
            *We require a $25 down-payment to start work on your order. The
            remainder can be payed upon delivery/pickup. Out of region orders
            will need to be fully payed before shipping. We take 1 - 2 business
            days to process your order.
          </p> -->
        </div>
        <v-divider></v-divider>
        <v-card class="mx-auto" max-width="600">
          <h2>Client Photos</h2>
          <Lingallery
            :iid.sync="currentId"
            :width="600"
            :height="400"
            :items="[
              {
                id: 'someid1',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide1.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide1.JPG?raw=true',
              },
              {
                id: 'someid2',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide2.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide2.JPG?raw=true',
              },
              {
                id: 'someid3',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide3.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide3.JPG?raw=true',
              },

              {
                id: 'someid4',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide4.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide4.JPG?raw=true',
              },
              {
                id: 'someid5',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide5.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide5.JPG?raw=true',
              },
              {
                id: 'someid6',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide6.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide6.JPG?raw=true',
              },
              {
                id: 'someid7',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide7.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide7.JPG?raw=true',
              },

              {
                id: 'someid8',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide8.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide8.JPG?raw=true',
              },
              {
                id: 'someid9',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide9.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide9.JPG?raw=true',
              },
              {
                id: 'someid10',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide10.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide10.JPG?raw=true',
              },
              {
                id: 'someid11',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide11.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide11.JPG?raw=true',
              },{
                id: 'someid12',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide12.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide12.JPG?raw=true',
              },{
                id: 'someid13',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide13.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide13.JPG?raw=true',
              },
            ]"
          />
        </v-card>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { VueTyper } from "vue-typer";
import Lingallery from "lingallery";

export default {
  name: "App2",

  components: { VueTyper, Lingallery },

  data: () => ({
    items: {
      colours: [
        { color: "Black", id: 1 },
        { color: "Black Matte +$10", id: 2 },
        { color: "Red", id: 3 },
        { color: "White", id: 4 },
        { color: "Grey", id: 5 },
      ],
      isColor: {
        color: "",
      },
      //   selectedOptionId: 0,

      matte: false,
      surface: ["Brick", "Stucco", "Stone", "Other"],

      height: ["8.5 Inch", "9.5 Inch +$10", "10.5 Inch +$20"],
      install: ["Yes", "No"],
      location: [
        "Halton +$80",
        "Hamilton +$100",
        "Peel +$80",
        "City of Toronto +$100",
        "York +$100",
        "Durham +$120",
        "Kitchner/Waterloo/Guelph/Cambridge +$120",
        "Other",
      ],
      pickup: "",
      payNow: ["Yes", "No"],
      Delivery: ["Yes", "No"],
    },
    Rules: [(v) => !!v || "required"],
    valid: false,
    currentId: "someid1",
    isSurface: "",

    isHeight: "",
    isDeliver: "",

    isInstall: "",
    isLocation: "",

    isInstructions: "",
    overlay: "",

    cost: 0,

    radio: {
      value: "",
    },
  }),

  computed: {
    LetterHeight: function() {
      if (this.isHeight == "9.5 Inch +$10") {
        return 10;
      } else if (this.isHeight == "10.5 Inch +$20") {
        return 20;
      }
      return 0;
    },

    LocationPrice: function() {
      if (this.items.isColor.color == "Black Matte +$10") {
        if (
          (this.isInstall == "Yes" && this.isLocation == "Halton +$80") ||
          (this.isInstall == "Yes" && this.isLocation == "Peel +$80")
        ) {
          return 90;
        } else if (
          (this.isInstall == "Yes" &&
            this.isLocation == "City of Toronto +$100") ||
          (this.isInstall == "Yes" && this.isLocation == "York +$100") ||
          (this.isInstall == "Yes" && this.isLocation == "Hamilton +$100")
        ) {
          return 110;
        } else if (
          (this.isInstall == "Yes" && this.isLocation == "Durham +$120") ||
          (this.isInstall == "Yes" &&
            this.isLocation == "Kitchner/Waterloo/Guelph/Cambridge +$120")
        ) {
          return 130;
        } else {
          return 10;
        }
      } else {
        if (
          (this.isInstall == "Yes" && this.isLocation == "Halton +$80") ||
          (this.isInstall == "Yes" && this.isLocation == "Peel +$80")
        ) {
          return 80;
        } else if (
          (this.isInstall == "Yes" &&
            this.isLocation == "City of Toronto +$100") ||
          (this.isInstall == "Yes" && this.isLocation == "York +$100") ||
          (this.isInstall == "Yes" && this.isLocation == "Hamilton +$100")
        ) {
          return 100;
        } else if (
          (this.isInstall == "Yes" && this.isLocation == "Durham +$120") ||
          (this.isInstall == "Yes" &&
            this.isLocation == "Kitchner/Waterloo/Guelph/Cambridge +$120")
        ) {
          return 120;
        }
        return 0;
      }
    },

    letters: function() {
      return this.overlay.length;
    },

    colorIs: function() {
      return this.isColor.color;
    },

    calculateCost: function() {
      var overlayText = this.overlay;
      var rmSpace = overlayText.split(" ").join("");

      var costDec =
        this.cost +
        this.LetterHeight +
        this.LocationPrice +
        rmSpace.length * 6.78;
      return costDec.toFixed(2);
    },
    isNumber: function() {
      var overlayText = this.overlay;
      var rmSpace = overlayText.split(" ").join("");
      return rmSpace.length;
    },

    font: function() {
      if (this.radio.value == 1) {
        return "Edward";
      } else if (this.radio.value == 7) {
        return "Script";
      } else if (this.radio.value == 2) {
        return "ALS";
      } else if (this.radio.value == 3) {
        return "Kavo";
      } else if (this.radio.value == 4) {
        return "Slimlines";
      } else if (this.radio.value == 5) {
        return "Copasetic";
      } else if (this.radio.value == 6) {
        return "Aerolite";
      } else if (this.radio.value == 8) {
        return "Custom";
      } else if (this.radio.value == 9) {
        return "Dancing";
      } else {
        return "";
      }
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    validater() {
      if (
        this.letters == "" ||
        this.isColor == "" ||
        this.isHeight == "" ||
        this.isInstall == "" ||
        (this.isInstall == "Yes" && this.isLocation === "")
      ) {
        return "";
      } else if (this.isInstall == "No" && this.isLocation !== "") {
        this.isLocation = "";
      } else return "snipcart-add-item";
    },
  },
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.main2 {
  font-size: 6vw;
  position: relative;
  top: 150%;
  left: 0%;
  border: 1px solid green;
  border-radius: 5px;
}
.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;

  font-size: 3.2vw;
  top: 8%;
  right: 22%;
  color: #000000;
}

.vue-typer2 {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;
  font-size: 2vw;
  top: 22%;
  right: 21%;
  font-weight: bold;
}
.Banner1 {
  font-family: "Slimlines";
  position: absolute;
  color: black;
  top: 52%;
  right: 56%;

  font-size: 2.3vw;

  font-weight: bolder;
}

.radio >>> label {
  margin: 0 10px 0px;
  padding: 5;
}
.radio {
  margin: 0 10px 0px;
  padding: 5;
}

.selection {
  margin: 0 5px 0px;
}

@font-face {
  src: url(../../fonts/Edwardian-Script.ttf) format("truetype");
  font-family: "edwardian_alternatebold";
}
@font-face {
  src: url(../../fonts/alsscrp.ttf) format("truetype");
  font-family: "ALS";
}
@font-face {
  src: url(../../fonts/Script.ttf) format("truetype");
  font-family: "Script";
}
@font-face {
  src: url(../../fonts/Kavo.otf);
  font-family: "Kavo";
}
@font-face {
  src: url(../../fonts/Slimlines.ttf) format("truetype");
  font-family: "Slimlines";
}
@font-face {
  src: url(../../fonts/Copasetic.woff) format("woff");
  font-family: "Copasetic";
}
@font-face {
  src: url(../../fonts/AeroliteScriptCP.woff) format("woff2");
  font-family: "Aerolite";
}
@font-face {
  src: url(../../fonts/DancingScript-Bold.ttf) format("truetype");
  font-family: "Dancing";
}

.radio-1 >>> label {
  font-size: 4vw;
  font-family: "edwardian_alternatebold", Arial, sans-serif;
  font-weight: bolder;
}
.radio-2 >>> label {
  font-size: 3vw;
  font-family: "ALS", Arial, sans-serif;
  font-weight: bolder;
}
.radio-3 >>> label {
  font-size: 4vw;
  font-family: "Kavo", Helvetica, sans-serif;
}
.radio-4 >>> label {
  font-size: 3vw;
  font-family: "Slimlines", Helvetica, sans-serif;
}
.radio-5 >>> label {
  font-size: 3vw;
  font-family: "Copasetic", Helvetica, sans-serif;
  text-transform: capitalize;
  font-weight: bolder;
}
.radio-6 >>> label {
  font-size: 4vw;
  font-family: "Aerolite", Helvetica, sans-serif;
  font-weight: bolder;
}
.radio-7 >>> label {
  font-size: 3vw;
  font-family: "Script", Arial, sans-serif;
  font-weight: bolder;
}
.radio-8 >>> label {
  font-size: 1.8vw;
  font-family: sans-serif;
  font-weight: bolder;
}
.radio-9 >>> label {
  font-size: 3.5vw;
  font-family: "Dancing";
  font-weight: bolder;
}
/* Fonts for reactive sign  */

.Edward {
  font-family: "edwardian_alternatebold";

  font-weight: bolder;
  text-align: center;
}

.Script {
  font-family: "Script";
  font-weight: bolder;
  text-align: center;
}
.ALS {
  font-family: "ALS";
  font-weight: bolder;
  text-align: center;
}
.Kavo {
  font-family: "Kavo";
  font-weight: bold;

  text-align: center;
}
.Slimlines {
  font-family: "Slimlines";

  text-align: center;
}
.Copasetic {
  font-family: "Copasetic";

  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
}

.Aerolite {
  font-family: "Aerolite";
  font-weight: bolder;
  text-align: center;
}

.Dancing {
  font-family: "Dancing";
  font-weight: bolder;
  text-align: center;
}

.input {
  position: relative;
  border: 2px solid green;
  font-weight: bold;
}
</style>
