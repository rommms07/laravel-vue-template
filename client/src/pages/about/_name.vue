<template>
  <div class="about-content">
    <v-btn type="button" @click="attemptUserLogout" color="primary">Logout</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({


  async created() {
    await this.$axios.get('/api/auth/user')
      .then(({ data }) => this.$data.user = data)
      .catch(err => console.log(err));
  }

})
export default class extends Vue {
  // eslint-disable-next-line
  public user: any | null = null;

  public async attemptUserLogout(e: UIEvent): void {
    this.$store.dispatch('toggleProgressBar');

    await this.$axios.put('/api/auth/logout')
      .then(({ data }) => {
        this.$store.dispatch('toggleProgressBar');
        this.$router.push('/guest/login');
      })
      .catch(err => console.log(err));
  }
}
</script>

<style scoped>

</style>