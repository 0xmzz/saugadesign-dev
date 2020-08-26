<template>
  <v-container>
    <v-card outlined class="mx-auto" color="white">
      <v-img src="@/assets/house.jpg">
        <vue-typer
          :text="['Welcome to Sauga Design!']"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="100"
          :type-delay="50"
          :pre-erase-delay="166"
          :erase-delay="60"
          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="expand"
          class="vue-typer"
        ></vue-typer>
        <vue-typer
          :text="['Get a quote and place an order below']"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="2300"
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
            :text="['1234 your Address']"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="5300"
            :type-delay="100"
            :pre-erase-delay="166"
            :erase-delay="60"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="expand"
            class="Banner1"
          ></vue-typer>
        </v-row>
      </v-img>

      <div>
        <h3>Sign Preview:</h3>

        <div class="main2">
          <v-card :class="font">{{ overlay }}</v-card>
        </div>
      </div>
      <div>
        <v-row>
          <v-col>
            <v-text-field
              label="Enter Address Sign"
              class="input"
              v-model.trim="overlay"
              hide-details="auto"
            ></v-text-field>

            <h4>Font offerings</h4>

            <v-radio-group
              text-align:center
              class="radio"
              v-model="radio.value"
              :mandatory="true"
            >
              <div class="overline mb-3">Classic</div>
              <v-row>
                <v-radio class="radio-1" label="Edward" value="1" id="one" />

                <v-radio class="radio-2" label="Script MT Bold" value="2" />

                <v-radio class="radio-6" label="Aerolite" value="6" />
              </v-row>

              <div class="overline mb-3">Modern</div>
              <v-row>
                <v-radio class="radio-4" label="Slimlines" value="4" />

                <v-radio class="radio-5" label="COPASETIC" value="5" />
                <v-radio class="radio-3" label="Gessele" value="3" />
              </v-row>
            </v-radio-group>

            <div class="selection">
              <v-row sm="2">
                <v-select
                  id="colour"
                  v-model="items.isColor.color"
                  :items="items.colours"
                  :item-value="items.colours.color"
                  item-text="color"
                  label="Acrylic Colour"
                  dense
                ></v-select>
              </v-row>
              <v-row>
                <v-select
                  v-model="isFinish"
                  :items="items.finish"
                  :item-value="items.finish"
                  label="Acrylic Finish"
                  dense
                ></v-select>
              </v-row>
              <v-row>
                <v-select
                  v-model="isSurface"
                  :items="items.surface"
                  :item-value="items.surface"
                  label="Surface applied on"
                  dense
                ></v-select>
              </v-row>

              <v-row>
                <v-select
                  v-model="isHeight"
                  :items="items.height"
                  :item-value="items.height"
                  label="Letter Height (Capital Letter)"
                  dense
                ></v-select>
              </v-row>
              <v-row>
                <v-select
                  v-model="isInstall"
                  :items="items.install"
                  :item-value="items.install"
                  label="Installation Required?"
                  dense
                ></v-select>
              </v-row>
              <template v-if="isInstall === 'Yes'">
                <v-select
                  v-model="isLocation"
                  :items="items.location"
                  :item-value="items.location"
                  label="Installation Quote by Region"
                  dense
                ></v-select>
                <div class="blue">
                  Please note that we do not install signs beyond 12 feet of
                  height
                </div>
              </template>
              <template v-if="isLocation === 'Other' && isInstall === 'Yes'">
                <div class="red">
                  We only provide quotes for installations within the GTA
                  region. If other is selected we can discuss your installation
                  options when we reach out or
                  <a href="/store"> contact us</a>.
                </div>
              </template>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>

      <v-row>
        <v-col>
          <v-text-field
            id="price"
            class="input"
            label="**Quote: $"
            v-model="calcuateCost"
            hide-details="auto"
            readonly
          ></v-text-field>
        </v-col>
        <v-card-actions>
          <v-btn
            id="custom-sign"
            class="snipcart-add-item"
            data-item-id="custom-sign"
            data-item-price="25.00"
            data-item-url="https://saugadesign.com"
            data-item-description="Custom made house address sign"
            data-item-image="/assets/SaugaSignslogo.PNG"
            data-item-name="Custom Sign"
            data-item-custom1-name="Font Choice"
            data-item-custom1-options="Edward|Script|Gessele|Slimlines|Copasetic|Aerolite"
            data-item-custom1-required="true"
            :data-item-custom1-value="font"
            data-item-custom2-name="Acrylic Colour"
            data-item-custom2-options="Black|Red|White|Grey"
            data-item-custom2-required="true"
            :data-item-custom2-value="items.isColor.color"
            data-item-custom3-name="Address Sign Text"
            data-item-custom3-type="textarea"
            data-item-custom3-required="true"
            :data-item-custom3-value="overlay"
            data-item-custom5-name="Surface Applied on"
            data-item-custom5-options="Brick| Stucco| Stone|Other"
            :data-item-custom5-value="isSurface"
            data-item-custom6-name="Installation"
            data-item-custom6-options="Yes|No"
            data-item-custom6-required="true"
            :data-item-custom6-value="isInstall"
            data-item-custom7-name="Installation Quote by Region"
            data-item-custom7-options="Halton +$80|Peel+$80|City of Toronto +$90|York +$90|Durham +$100|Other"
            data-item-custom7-required="true"
            :data-item-custom7-value="isLocation"
          >
            *Add to Cart</v-btn
          >
          <!-- <v-btn color="success" outlined>Add to Cart</v-btn> -->
        </v-card-actions>
      </v-row>
      <div>
        <p>
          *We charge a $25 downpayment to prepare you order, you can either pay
          it now or defer it during checkout if you are paying via email money
          transfer. The remaining amount can be settled upon delivery, pickup or
          at installation time.
        </p>
        <p>
          **The quote will be qualified once we confirm your order and
          installation requirements with you in 1 to 2 business days.
        </p>
      </div>
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
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/Crosscurrent2.jpeg?raw=true',
              thumbnail:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/Crosscurrent2.jpeg?raw=true',
            },
            {
              id: 'someid2',
              src:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/cactus.jpeg?raw=true',
              thumbnail:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/cactus.jpeg?raw=true',
            },
            {
              id: 'someid3',
              src:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/faris.jpeg?raw=true',
              thumbnail:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/faris.jpeg?raw=true',
            },
            {
              id: 'someid4',
              src:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/hollypoint.jpeg?raw=true',
              thumbnail:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/hollypoint.jpeg?raw=true',
            },
            {
              id: 'someid5',
              src:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/horsham.jpeg?raw=true',
              thumbnail:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/horsham.jpeg?raw=true',
            },
            {
              id: 'someid6',
              src:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/Rattlesnake.jpeg?raw=true',
              thumbnail:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/Rattlesnake.jpeg?raw=true',
            },
            {
              id: 'someid7',
              src:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/wendron.jpeg?raw=true',
              thumbnail:
                'https://github.com/zubairzia0/saugasigns/blob/master/assets/wendron.jpeg?raw=true',
            },
          ]"
        />
      </v-card>
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
        { color: "Red", id: 2 },
        { color: "White", id: 3 },
        { color: "Grey", id: 4 },
      ],
      isColor: {
        color: "",
      },
      //   selectedOptionId: 0,

      matte: false,
      surface: ["Brick", "Stucco", "Stone", "Other"],
      finish: ["Glossy", "Matte +$10"],
      height: ["7 Inch", "8 Inch", "8.5 Inch"],
      install: ["Yes", "No"],
      location: [
        "Halton +$80",
        "Peel+$80",
        "City of Toronto +$90",
        "York +$90",
        "Durham +$100",
        "Other",
      ],
      pickup: "",
    },
    currentId: "someid1",
    isSurface: "",
    isFinish: "",
    isHeight: "",
    isInstall: "",
    isLocation: "",
    overlay: "",

    cost: 0,

    radio: {
      value: "",
    },
  }),

  computed: {
    letters: function() {
      return this.overlay.length;
    },

    colorIs: function() {
      return this.isColor.color;
    },

    calcuateCost: function() {
      if (this.isFinish == "Matte +$10") {
        if (
          (this.isInstall == "Yes" && this.isLocation == "Halton +$80") ||
          (this.isInstall == "Yes" && this.isLocation == "Peel+$80")
        ) {
          return this.cost + this.overlay.length * 7 + 10 + 80;
        } else if (
          (this.isInstall == "Yes" &&
            this.isLocation == "City of Toronto +$90") ||
          (this.isInstall == "Yes" && this.isLocation == "York +$90")
        ) {
          return this.cost + this.overlay.length * 7 + 10 + 90;
        } else if (
          this.isInstall == "Yes" &&
          this.isLocation == "Durham +$100"
        ) {
          return this.cost + this.overlay.length * 7 + 10 + 100;
        } else {
          return this.cost + this.overlay.length * 7 + 10;
        }
      } else {
        if (
          (this.isInstall == "Yes" && this.isLocation == "Halton +$80") ||
          (this.isInstall == "Yes" && this.isLocation == "Peel+$80")
        ) {
          return this.cost + this.overlay.length * 7 + 80;
        } else if (
          (this.isInstall == "Yes" &&
            this.isLocation == "City of Toronto +$90") ||
          (this.isInstall == "Yes" && this.isLocation == "York +$90")
        ) {
          return this.cost + this.overlay.length * 7 + 90;
        } else if (
          this.isInstall == "Yes" &&
          this.isLocation == "Durham +$100"
        ) {
          return this.cost + this.overlay.length * 7 + 100;
        } else {
          return this.cost + this.overlay.length * 7;
        }
      }
    },
    font: function() {
      if (this.radio.value == 1) {
        return "Edward";
      } else if (this.radio.value == 2) {
        return "Script";
      } else if (this.radio.value == 3) {
        return "Gessele";
      } else if (this.radio.value == 4) {
        return "Slimlines";
      } else if (this.radio.value == 5) {
        return "Copasetic";
      } else if (this.radio.value == 6) {
        return "Aerolite";
      } else {
        return "";
      }
    },
    // methods: {

    //   },
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
  font-size: 2cm;
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
  top: 0%;
  right: 20%;
  color: #607d8b;
}

.vue-typer2 {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  position: absolute;

  text-transform: capitalize;
  font-size: 2.5vw;
  top: 8%;
  right: 17%;
}
.Banner1 {
  font-family: "Slimlines";
  position: absolute;
  color: black;
  top: 52%;
  right: 56%;

  font-size: 2.2vw;

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
  src: url(../../fonts/ScriptMTBold.ttf) format("truetype");
  font-family: "ScriptMTBold";
}
@font-face {
  src: url(../../fonts/Gessele.woff) format("woff");
  font-family: "Gessele";
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

.radio-1 >>> label {
  font-size: 4vw;
  font-family: "edwardian_alternatebold", Arial, sans-serif;
}
.radio-2 >>> label {
  font-size: 3vw;
  font-family: "ScriptMTBold", Arial, sans-serif;
}
.radio-3 >>> label {
  font-size: 4vw;
  font-family: "Gessele", Helvetica, sans-serif;
}
.radio-4 >>> label {
  font-size: 3vw;
  font-family: "Slimlines", Helvetica, sans-serif;
}
.radio-5 >>> label {
  font-size: 3vw;
  font-family: "Copasetic", Helvetica, sans-serif;
  text-transform: capitalize;
}
.radio-6 >>> label {
  font-size: 4vw;
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
.Slimlines {
  font-family: "Slimlines";

  text-align: center;
}
.Copasetic {
  font-family: "Copasetic";

  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}

.Aerolite {
  font-family: "Aerolite";
  font-weight: 900;
  text-align: center;
}

.input {
  position: relative;
  border: 2px solid green;
  font-weight: bold;
}
</style>
