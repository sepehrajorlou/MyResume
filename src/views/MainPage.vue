<template>
  <v-app>
    <v-container class="border border-4">
      <v-row>
        <v-col cols="12" class="text-center">
          <span class="h1 font-weight-bold teal--text">Profile</span>

          <span class="d-block mt-5 h6 teal--dark"
            >I'm a junior front end developer</span
          >
          <v-divider class="my-10"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="" cols="12" sm="4">
          <v-card elevation="0">
            <v-card-title
              ><span class="h3 teal--text">About</span></v-card-title
            >
            <v-card-text class="mt-n2">
              <p>
                I am a junior front end developer, I am learning, I always try
                to make learning as my first priority. I am interested in new
                areas and participating in challenging projects. I always try to
                keep myself up to date and this is a very important point for
                any programmer around the world. I am also very interested in
                teamwork and meeting new people. I always try to dedicate myself
                to circumstances. However, sometimes it is better to change the
                situation according to the needs of the environment and myself
                for proper performance.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="text-center" cols="12" sm="4">
          <v-avatar size="210">
            <v-img
              :src="require('@/assets/photo_2022-04-03_16-08-03.jpg')"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card elevation="0">
            <v-card-title>
              <span class="h3 teal--text">Detail</span>
            </v-card-title>
            <v-card-text>
              <div>
                <span class="h6 font-weight-bold">Name:</span>
                <span class="d-block">Sepehr Ajorlou</span>
              </div>
              <div class="mt-2">
                <span class="h6 font-weight-bold mt-6">Age:</span>
                <span class="d-block">22</span>
              </div>
              <div class="mt-2">
                <span class="h6 font-weight-bold">Location:</span>
                <span class="d-block">Karaj - 7 Tir</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="amber lighten-5">
        <v-col cols="12" class="text-center">
          <span class="h1 font-weight-bold teal--text">Experiences</span>
          <v-divider class="my-10"> </v-divider>
        </v-col>
        <v-col cols="12">
          <span class="h3 teal--text">Education</span>
          <div class="mt-5 d-block">
            <span class="d-block font-weight-bold">Karaj Azad University</span>
            <span class="d-inline-block ml-10 mt-1"
              >Bachelor of Computer Engineering</span
            >
          </div>
          <div class="mt-5">
            <span class="d-block font-weight-bold">Arman Noo High School</span>
            <span class="d-inline-block ml-10 mt-1"
              >Field of Experimental Sciences</span
            >
          </div>
          <v-divider class="mt-10"></v-divider>
          <span class="h4 teal--text">Career</span>
          <div class="mt-5">
            <span class="d-block font-weight-bold"
              >Roshan no , Security System
            </span>
            <span class="d-inline-block ml-10 mt-1">Workder:</span>
            <span class="d-inline-block ml-4 mt-1"
              >December 21 , 2020 - March 8 , 2020
            </span>
          </div>
          <div class="mt-5">
            <span class="d-block font-weight-bold"
              >Institute of Mindology
            </span>
            <span class="d-inline-block ml-10 mt-1">InternShip:</span>
            <span class="d-inline-block ml-4 mt-1"
              >22 December,2021 - Present
            </span>
            <span class="d-block ml-10">(Front End Web Developer)</span>
          </div>
        </v-col>
      </v-row>
      <v-row class="amber lighten-5 py-8">
        <v-col cols="12" class="text-center mt-10">
          <span class="h1 font-weight-bold teal--text"> Abilities </span>
          <span class="d-block mt-5 h6 teal--dark">
            “Life without knowledge is death in disguise.” <br />- Talib Kweli
          </span>
          <v-divider class="mt-5 mb-10"></v-divider>
        </v-col>
        <div>
          <span class="h3 teal--text">Skills</span>
          <div class="mt-5">
            <span class="font-weight-bold">HTML</span>
            <v-progress-linear
              v-model="HTML"
              color="teal"
              height="20"
              class="mt-2"
            ></v-progress-linear>
          </div>
          <div class="mt-5">
            <span class="font-weight-bold">CSS</span>
            <v-progress-linear
              v-model="CSS"
              color="teal"
              height="20"
              class="mt-2"
            ></v-progress-linear>
          </div>
          <div class="mt-5">
            <span class="font-weight-bold">Java Script</span>
            <v-progress-linear
              v-model="JS"
              color="teal"
              height="20"
              class="mt-2"
            ></v-progress-linear>
          </div>
          <div class="mt-5">
            <span class="font-weight-bold">Vue Js</span>
            <v-progress-linear
              v-model="VUEJS"
              color="teal"
              height="20"
              class="mt-2"
            ></v-progress-linear>
          </div>
          <div class="mt-5">
            <span class="font-weight-bold">Bootstrap</span>
            <v-progress-linear
              v-model="Bootstrap"
              color="teal"
              height="20"
              class="mt-2"
            ></v-progress-linear>
          </div>
          <div class="mt-5">
            <span class="font-weight-bold">Vuetify</span>
            <v-progress-linear
              v-model="VUETIFY"
              color="teal"
              height="20"
              class="mt-2"
            ></v-progress-linear>
          </div>
          <div class="mt-5">
            <span class="font-weight-bold">Git</span>
            <v-progress-linear
              v-model="GIT"
              color="teal"
              height="20"
              class="mt-2"
            ></v-progress-linear>
          </div>
          <!-- <div class="mt-5">
            <span class="font-weight-bold">Sass</span>
            <v-progress-linear
              v-model="SASS"
              color="teal"
              height="20"
              class="mt-2"
            ></v-progress-linear>
          </div> -->
          <div class="mt-5">
            <span class="font-weight-bold"
              >English (Undrestand , Not Speak)</span
            >
            <v-progress-linear
              v-model="ENGLISH"
              color="teal"
              height="20"
              class="mt-2"
            ></v-progress-linear>
          </div>
        </div>
      </v-row>
      <!-- -----------------------------Projects Section -->
      <!-- <v-row>
        <v-col class="text-center" cols="12">
          <span class="h1 font-weight-bold teal--text d-block mt-10"
            >Projects</span
          >
          <v-divider class="my-10"></v-divider>
        </v-col>
        <v-col class="text-center">
          <router-link to="" style="text-decoration: none" class="d-block">
            <v-btn color="teal" x-large> www.amazon.com </v-btn>
          </router-link>
          <router-link to="" style="text-decoration: none" class="mt-5 d-block">
            <v-btn color="amber lighten-3" x-large> www.vuetifyjs.com </v-btn>
          </router-link>

          <router-link to="" style="text-decoration: none" class="mt-5 d-block">
            <v-btn color="teal" x-large> www.facebook.com </v-btn>
          </router-link>
          <router-link to="" style="text-decoration: none" class="mt-5 d-block">
            <v-btn color="amber lighten-3" x-large> www.bootstrap.com </v-btn>
          </router-link>
        </v-col>
      </v-row> -->
      <!-- ------------------------------------------------------------------------- -->
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="320">
          <v-card>
            <v-card-title class="text-h6">
              {{ Info[Counter] }}
            </v-card-title>
            <!-- <v-card-text>
              <v-btn @click="Copy()"
                ><i class="fas fa-copy"></i>
                <span class="ml-1">{{ btnMsg }}</span></v-btn
              >
            </v-card-text> -->
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="Exit()"> Ok </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
    <v-footer color="bg-dark mt-0" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          class="mx-4"
          dark
          icon
          @click.stop="dialog = true"
          v-on:click="Counter = 0"
        >
          <i class="fas fa-envelope" style="font-size: 25px"></i>
        </v-btn>
        <v-btn
          class="mx-3"
          dark
          icon
          @click.stop="dialog = true"
          v-on:click="Counter = 2"
        >
          <i class="fab fa-instagram" style="font-size: 25px"></i>
        </v-btn>
        <v-btn
          dark
          icon
          class="mx-3"
          @click.stop="dialog = true"
          v-on:click="Counter = 3"
        >
          <i class="fab fa-linkedin-in" style="font-size: 25px"></i>
        </v-btn>
        <v-btn
          dark
          icon
          class="mx-3"
          @click.stop="dialog = true"
          v-on:click="Counter = 1"
        >
          <i class="fas fa-phone" style="font-size: 22px"></i>
        </v-btn>
        <v-btn
          dark
          icon
          class="mx-3"
          @click.stop="dialog = true"
          v-on:click="Counter = 2"
        >
          <i class="fab fa-telegram-plane" style="font-size: 25px"></i>
        </v-btn>
        <v-col class="teal py-4 text-center white--text" cols="12">
          {{
            `   
             ${new Date().getFullYear()}
              / ${new Date().getMonth() + 1} / ${new Date().getDate()}`
          }}
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>



<script>
export default {
  data() {
    return {
      dialog: false,
      HTML: 85,
      CSS: 70,
      JS: 60,
      VUEJS: 50,
      VUETIFY: 60,
      Bootstrap: 65,
      GIT: 25,
      SASS: 5,
      ENGLISH: 38,
      Info: [
        "sajerloo96@gmail.com",
        "+9809358890213",
        "@sepehr__ajorlou ",
        "Sepehr Ajorlou",
      ],
      Counter: null,
      btnMsg: "Copy",
    };
  },
  methods: {
    Exit() {
      this.dialog = false;
      this.btnMsg = "Copy";
    },
  },
};
</script>




