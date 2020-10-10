<template>
  <v-container>
    <v-card class="container">
      <v-img src="@/assets/house.jpg" aspect-ratio="3">
        <h1 class="vue-typer">Welcome to Sauga Design!</h1>

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
            :text="['123 Your Street']"
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
          <v-img
            class="warrenty"
            max-width="65"
            max-height="75"
            src="../../assets/30-years-warranty.png"
          />
        </v-row>
      </v-img>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div>
          <v-row>
            <v-col>
              <v-divider></v-divider>
              <v-card>
                <div>
                  <div class="container">
                    <v-text-field
                      label="Enter your Address Sign!"
                      class="input"
                      v-model.trim="overlay"
                      hide-details="auto"
                      :rules="Rules"
                      ref="Address"
                      required
                    ></v-text-field>
                  </div>

                  <div class="brick">
                    <div class="main2">
                      <v-card class="bb" :class="font"> {{ overlay }}</v-card>
                    </div>
                    <v-card>
                      <div><b>Approximate Width: </b> {{ Compensate }}</div>
                      <div><b>Height:</b> {{ isHeight }}</div></v-card
                    >
                  </div>
                </div>

                <v-card>
                  <h3>Font offerings</h3>

                  <v-radio-group
                    text-align:center
                    class="radio"
                    v-model="radio.value"
                    :mandatory="true"
                  >
                    <v-row class="container" dense>
                      <v-radio
                        class="radio-1"
                        label="Edward"
                        value="1"
                        id="one"
                      />

                      <v-radio
                        class="radio-2"
                        label="Birds of Paradise"
                        value="2"
                      />

                      <v-radio class="radio-6" label="Aerolite" value="6" />
                      <v-radio class="radio-7" label="Script" value="7" />
                    </v-row>

                    <v-row class="container" dense>
                      <v-radio class="radio-4" label="Slimlines" value="4" />

                      <v-radio class="radio-5" label="COPASETIC" value="5" />
                      <v-radio class="radio-3" label="Kavo" value="3" />
                      <v-radio class="radio-9" label="Dancing" value="9" />
                    </v-row>

                    <v-row class="container" dense>
                      <v-radio class="radio-8" label="Custom Font" value="8" />
                      <div class="container">
                        <v-text-field
                          v-model="isInstructions"
                          label="Enter the font name (Preview will not be availaible)"
                          v-if="radio.value == '8'"
                          :rules="Rules"
                          required
                        ></v-text-field>
                      </div>
                    </v-row>
                  </v-radio-group>
                </v-card>

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
                      <div class="red">
                        We offer installation service only within the GTHA and
                        Wellington county (Kitchener, Waterloo, Cambridge,
                        Guelph). If you have any questions click on the chat
                        bubble on the bottom right and leave a message. You can
                        also email us at saugadesign@gmail.com.
                      </div>
                      <v-img
                        aspect-ratio="2"
                        src="https://github.com/zubairzia0/SaugaDesign-Site/blob/master/assets/GTA.png?raw=true"
                      ></v-img>
                    </template>

                    <template v-if="isInstall === 'No'"></template>
                    <v-row>
                      <v-col>
                        <v-text-field
                          id="price"
                          class="input"
                          label="Quoted: CAD"
                          v-model="calculateCost"
                          hide-details="auto"
                          readonly
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <div class="container" v-if="this.valid == false">
                      <p class="red">Please fill all required fields above</p>
                    </div>
                  </div>
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
                    data-item-image="https://github.com/zubairzia0/SaugaDesign-Site/blob/master/assets/SaugaSignslogo.PNG?raw=true"
                    data-item-name="Custom Sign"
                    data-item-custom1-name="Address Sign Text (do not change in cart)"
                    data-item-custom1-type="textarea"
                    data-item-custom1-required="true"
                    :data-item-custom1-value="overlay"
                    data-item-custom10-name="Number of digits + letters in Order (do not change this field)"
                    :data-item-custom10-value="isNumber"
                    data-item-custom10-options="1[+7.65]|2[+15.3]|3[+22.95]|4[+30.6]|5[+38.25]|6[+45.9]|7[+53.55]
                      |8[+61.2]|9[+68.85]|10[+76.5]|11[+84.15]|12[+91.8]|13[+99.45]|14[+107.1]|15[+114.75]|16[+122.4]|17[+130.05]|18[+137.7]|19[+145.35]|20[+153]|21[+160.65]
                      |22[+168.3]|23[+175.9]|24[+183.6]|25[+191.25]|26[+198.9]|27[+206.55]|28[+214.2]|29[+221.85]|30[+229.5]"
                    data-item-custom2-name="Acrylic Colour"
                    data-item-custom2-options="Black Glossy|Black Matte +$10[+10]|Red Glossy|White Glossy|Grey Glossy"
                    data-item-custom2-required="true"
                    :data-item-custom2-value="items.isColor.color"
                    data-item-custom4-name="Font Choice"
                    data-item-custom4-options="Edward|Script|Birds|Kavo|Slimlines|Copasetic|Aerolite|Dancing|Custom"
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
                    data-item-custom7-options="N/A|Halton +$90[+90]|Peel +$90[+90]|City of Toronto +$110[+110]|York +$110[+110]|Durham +$130[+130]|Hamilton +$110[+110]|Kitchener/Waterloo/Guelph/Cambridge/Other +$130[+130]"
                    :data-item-custom7-value="isLocation"
                    data-item-custom8-name="Phone Number"
                    data-item-custom8-required="true"
                    data-item-custom13-name="Any Special Instructions/Requests?"
                    data-item-custom13-type="textarea"
                    :data-item-custom13-value="isInstructions"
                    data-item-has-taxes-included="true"
                    >*Add to cart</v-btn
                  >

                  <div>
                    <p>*Installation kit included</p>
                    <p>
                      Note: It will take 2-4 business days to prepare your sign
                      for delivery/pickup, for installations we message you to
                      book a date/time after your order is prepared.
                    </p>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <v-divider></v-divider>
        <v-card class="mx-auto" max-width="600">
          <h2>Client Photos</h2>
          <Lingallery
            :iid.sync="currentId"
            :width="600"
            :height="200"
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
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide17.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide17.JPG?raw=true',
              },

              {
                id: 'someid4',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide18.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide18.JPG?raw=true',
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
              },
              {
                id: 'someid12',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide12.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide12.JPG?raw=true',
              },
              {
                id: 'someid13',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide13.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide13.JPG?raw=true',
              },
              {
                id: 'someid14',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide14.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide14.JPG?raw=true',
              },
              {
                id: 'someid15',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide15.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide15.JPG?raw=true',
              },
              {
                id: 'someid16',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide16.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide16.JPG?raw=true',
              },
              {
                id: 'someid17',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide3.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide3.JPG?raw=true',
              },
              {
                id: 'someid18',
                src:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide4.JPG?raw=true',
                thumbnail:
                  'https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide4.JPG?raw=true',
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

// import textMetrics from "text-metrics";

export default {
  name: "App2",

  components: { VueTyper, Lingallery },

  data: () => ({
    items: {
      colours: [
        { color: "Black Glossy", id: 1 },
        { color: "Black Matte +$10", id: 2 },
        { color: "Red Glossy", id: 3 },
        { color: "White Glossy", id: 4 },
        { color: "Grey Glossy", id: 5 },
      ],
      images: ["../../assets/Crosscurrent.jpeg", "../../assets/faris.jpeg"],
      isColor: {
        color: "",
      },
      //   selectedOptionId: 0,

      matte: false,
      // surface: ["Brick", "Stucco", "Stone", "Other"],

      height: ["8.5 Inch", "9.5 Inch +$10", "10.5 Inch +$20"],
      install: ["Yes", "No"],
      location: [
        "Halton +$90",
        "Hamilton +$110",
        "Peel +$90",
        "City of Toronto +$110",
        "York +$110",
        "Durham +$130",
        "Kitchener/Waterloo/Guelph/Cambridge/Other +$130",
      ],
      pickup: "",
      payNow: ["Yes", "No"],
      Delivery: ["Yes", "No"],
    },
    Rules: [(v) => !!v || "required"],
    valid: false,
    currentId: "someid1",
    // isSurface: "",

    isHeight: "8.5 Inch",
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
    LetterHeight: function () {
      if (this.isHeight == "9.5 Inch +$10") {
        return 10;
      } else if (this.isHeight == "10.5 Inch +$20") {
        return 20;
      }
      return 0;
    },

    LocationPrice: function () {
      if (this.items.isColor.color == "Black Matte +$10") {
        if (
          (this.isInstall == "Yes" && this.isLocation == "Halton +$90") ||
          (this.isInstall == "Yes" && this.isLocation == "Peel +$90")
        ) {
          return 100;
        } else if (
          (this.isInstall == "Yes" &&
            this.isLocation == "City of Toronto +$110") ||
          (this.isInstall == "Yes" && this.isLocation == "York +$110") ||
          (this.isInstall == "Yes" && this.isLocation == "Hamilton +$110")
        ) {
          return 120;
        } else if (
          (this.isInstall == "Yes" && this.isLocation == "Durham +$130") ||
          (this.isInstall == "Yes" &&
            this.isLocation == "Kitchener/Waterloo/Guelph/Cambridge +$130")
        ) {
          return 140;
        } else {
          return 10;
        }
      } else {
        if (
          (this.isInstall == "Yes" && this.isLocation == "Halton +$90") ||
          (this.isInstall == "Yes" && this.isLocation == "Peel +$90")
        ) {
          return 90;
        } else if (
          (this.isInstall == "Yes" &&
            this.isLocation == "City of Toronto +$110") ||
          (this.isInstall == "Yes" && this.isLocation == "York +$110") ||
          (this.isInstall == "Yes" && this.isLocation == "Hamilton +$110")
        ) {
          return 110;
        } else if (
          (this.isInstall == "Yes" && this.isLocation == "Durham +$130") ||
          (this.isInstall == "Yes" &&
            this.isLocation ==
              "Kitchener/Waterloo/Guelph/Cambridge/Other +$130")
        ) {
          return 130;
        }
        return 0;
      }
    },

    letters: function () {
      return this.overlay.length;
    },

    colorIs: function () {
      return this.isColor.color;
    },

    calculateCost: function () {
      var overlayText = this.overlay;
      var rmSpace = overlayText.split(" ").join("");

      var costDec =
        this.cost +
        this.LetterHeight +
        this.LocationPrice +
        rmSpace.length * 7.65;
      return "$" + costDec.toFixed(2);
    },
    isNumber: function () {
      var overlayText = this.overlay;
      var rmSpace = overlayText.split(" ").join("");
      return rmSpace.length;
    },

    font: function () {
      if (this.radio.value == 1) {
        return "Edward";
      } else if (this.radio.value == 7) {
        return "Script";
      } else if (this.radio.value == 2) {
        return "Birds";
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
    getTextWidth: function () {
      // if given, use cached canvas for better performance
      // else, create new canvas
      var isFont = "";
      if (this.font == "Edward") {
        if (this.isHeight == "9.5 Inch +$10") {
          isFont = "15px" + " " + "Edward";
        } else if (this.isHeight == "10.5 Inch +$20") {
          isFont = "16.5px" + " " + "Edward";
        } else isFont = "13.5px" + " " + "Edward";
      } else if (this.font == "Script") {
        if (this.isHeight == "9.5 Inch +$10") {
          isFont = "13.42px" + " " + "Script";
        } else if (this.isHeight == "10.5 Inch +$20") {
          isFont = "14.83px" + " " + "Script";
        } else isFont = "12px" + " " + "Script";
      } else if (this.font == "Birds") {
        if (this.isHeight == "9.5 Inch +$10") {
          isFont = "12.4px" + " " + "Birds";
        } else if (this.isHeight == "10.5 Inch +$20") {
          isFont = "13.9px" + " " + "Birds";
        } else isFont = "11.4px" + " " + "Birds";
      } else if (this.font == "Kavo") {
        if (this.isHeight == "9.5 Inch +$10") {
          isFont = "13.6px" + " " + "Kavo";
        } else if (this.isHeight == "10.5 Inch +$20") {
          isFont = "15.1px" + " " + "Kavo";
        } else isFont = "12.2px" + " " + "Kavo";
      } else if (this.font == "Slimlines") {
        if (this.isHeight == "9.5 Inch +$10") {
          isFont = "8.9px" + " " + "Slimlines";
        } else if (this.isHeight == "10.5 Inch +$20") {
          isFont = "9.8px" + " " + "Slimlines";
        } else isFont = "7.99px" + " " + "Slimlines";
      } else if (this.font == "Copasetic") {
        if (this.isHeight == "9.5 Inch +$10") {
          isFont = "12.7px" + " " + "Copasetic";
        } else if (this.isHeight == "10.5 Inch +$20") {
          isFont = "14px" + " " + "Copasetic";
        } else isFont = "11.3px" + " " + "Copasetic";
      } else if (this.font == "Aerolite") {
        if (this.isHeight == "9.5 Inch +$10") {
          isFont = "14.8px" + " " + "Aerolite";
        } else if (this.isHeight == "10.5 Inch +$20") {
          isFont = "16px" + " " + "Aerolite";
        } else isFont = "13.2px" + " " + "Aerolite";
      } else if (this.font == "Dancing") {
        if (this.isHeight == "9.5 Inch +$10") {
          isFont = "11.4px" + " " + "Dancing";
        } else if (this.isHeight == "10.5 Inch +$20") {
          isFont = "12.8px" + " " + "Dancing";
        } else isFont = "10.2px" + " " + "Dancing";
      }

      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      context.font = isFont;
      var metrics = context.measureText(this.overlay);
      return metrics.width;
    },

    Compensate: function () {
      var finalWidth;
      if (
        (this.font == "Edward" && this.overlay.includes("y")) ||
        (this.font == "Edward" && this.overlay.includes("g")) ||
        (this.font == "Edward" && this.overlay.includes("z")) ||
        (this.font == "Edward" && this.overlay.includes("p")) ||
        (this.font == "Edward" && this.overlay.includes("q")) ||
        (this.font == "Edward" && this.overlay.includes("f")) ||
        (this.font == "Edward" && this.overlay.includes("j"))
      ) {
        this.getTextWidth * 0.72;
        finalWidth = this.getTextWidth;
        return finalWidth.toFixed(2) + " Inch";
      } else if (
        (this.font == "Script" && this.overlay.includes("y")) ||
        (this.font == "Script" && this.overlay.includes("g")) ||
        (this.font == "Script" && this.overlay.includes("z")) ||
        (this.font == "Script" && this.overlay.includes("p")) ||
        (this.font == "Script" && this.overlay.includes("q")) ||
        (this.font == "Script" && this.overlay.includes("f")) ||
        (this.font == "Script" && this.overlay.includes("j"))
      ) {
        this.getTextWidth * 0.78;
        finalWidth = this.getTextWidth;
        return finalWidth.toFixed(2) + " Inch";
      } else if (
        (this.font == "Birds" && this.overlay.includes("y")) ||
        (this.font == "Birds" && this.overlay.includes("g")) ||
        (this.font == "Birds" && this.overlay.includes("z")) ||
        (this.font == "Birds" && this.overlay.includes("p")) ||
        (this.font == "Birds" && this.overlay.includes("q")) ||
        (this.font == "Birds" && this.overlay.includes("f")) ||
        (this.font == "Birds" && this.overlay.includes("j"))
      ) {
        this.getTextWidth * 0.75;
        finalWidth = this.getTextWidth;
        return finalWidth.toFixed(2) + " Inch";
      } else if (
        (this.font == "Aerolite" && this.overlay.includes("y")) ||
        (this.font == "Aerolite" && this.overlay.includes("g")) ||
        (this.font == "Aerolite" && this.overlay.includes("z")) ||
        (this.font == "Aerolite" && this.overlay.includes("p")) ||
        (this.font == "Aerolite" && this.overlay.includes("q")) ||
        (this.font == "Aerolite" && this.overlay.includes("f")) ||
        (this.font == "Aerolite" && this.overlay.includes("j"))
      ) {
        this.getTextWidth * 0.78;
        finalWidth = this.getTextWidth;
        return finalWidth.toFixed(2) + " Inch";
      } else if (this.font == "Custom") {
        return "Unknown";
      }

      finalWidth = this.getTextWidth;

      return finalWidth.toFixed(2) + " Inch";
      // eslint-disable-next-line vue/return-in-computed-property
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    validater() {
      if (
        this.letters == "" ||
        this.items.isColor.color == "" ||
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
.warrenty {
  top: 60%;
  left: 3%;
}
.main2 {
  font-size: 8.5vw;
  position: relative;
  top: 150%;
  left: 0%;
  border: 1px solid green;
  border-radius: 4px;
}
.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;

  font-size: 3.2vw;
  top: 9%;
  right: 21%;
  color: #000000;
}

.vue-typer2 {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;
  font-size: 2vw;
  top: 22%;
  right: 17%;
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
  font-family: "Edward";
}
@font-face {
  src: url(../../fonts/birds.ttf) format("truetype");
  font-family: "Birds";
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
  font-family: "Edward", Arial, sans-serif;
  font-weight: bolder;
}
.radio-2 >>> label {
  font-size: 3vw;
  font-family: "Birds", Arial, sans-serif;
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
  font-family: "Edward";

  font-weight: bolder;
  text-align: center;
}

.Script {
  font-family: "Script";
  font-weight: bolder;
  text-align: center;
}
.Birds {
  font-family: "Birds";
  font-weight: bold;
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
  font-weight: Bolder;
}
/* .bb {
  background: url(https://github.com/zubairzia0/saugadesign-dev/blob/master/img/whitegloss.jpg?raw=true);
  background-size: cover;

  color: #fff;
  -webkit-text-fill-color: transparent;

  -webkit-background-clip: text;

  -moz-background-clip: text;

  background-clip: text;
}
.brick {
  background: url(https://github.com/zubairzia0/saugadesign-dev/blob/master/img/yellobrick.jpeg?raw=true);
  
} */
</style>
