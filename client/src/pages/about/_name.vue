<template>
  <v-container class="about-page-content" v-if="user">
    <v-row>
      <v-col class="mt-10" cols="9">
        <h2 class="text-center font-weight-regular">
          Welcome back, <span class="font-weight-medium">{{ user.name }}</span>!
        </h2>

        <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vero saepe maxime molestiae blanditiis fugiat, aliquam quis earum, sed, dolorem commodi reiciendis dolore. Magni a in accusantium nobis ut sunt?</p>
        <p>For more components visit <a target="_blank" href="https://vuetifyjs.com/en/components/lists">https://vuetifyjs.com/en/components/lists</a></p>
      </v-col>
      <v-col class="d-flex align-center justify-center" cols="3">
        <v-btn color="primary" @click="attemptUserLogout">Logout</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col lg="6" md="7" sm="8" cols="12">
        <h1 class="text-center font-weight-light">Random images from the internet 📷</h1>
        <v-list v-for="(n, i) of new Array(5)" :key="n">
          <v-list-item>
            <v-img :src="`https://picsum.photos/500/500?${i}`" width="100"></v-img>
          </v-list-item>
        </v-list>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({

  async created(): Promise<void> {
    await this.$axios.get('/api/auth/user')
      .then(({ data }) => this.$data.user = data)
      .catch(err => {
        switch(err.status) {
        case 401:
          this.$router.push('/error/401');
          break;
        }
      });
  }

})
export default class extends Vue {
  // eslint-disable-next-line
  public user: any | null = null;

  public async attemptUserLogout(): Promise<void> {
    this.$store.dispatch('toggleProgressBar');

    await this.$axios.put('/api/auth/logout')
      .then(() => {
        this.$store.dispatch('toggleProgressBar');
        this.$router.push('/guest/login');
      })
      .catch(err => console.log(err));
  }
}
</script>
