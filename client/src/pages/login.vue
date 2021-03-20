<template>
  <main class="root-page h-screen flex flex-col">
    <div class="mx-auto mt-24">
      <form @submit.prevent="attemptUserLogin" class="flex flex-col bg-white rounded-lg">
        <label>Laravel SPA Login Demo 🔒</label>
        <fieldset>
          <input name="email" type="text" placeholder="Username or Email">
        </fieldset>
        <fieldset>
          <input name="password" type="password" placeholder="Password">
        </fieldset>
        <input type="submit" value="Sign In">
      </form>

      <output class="error-output m-4" v-if="error">
        <p class="p-3 bg-red-500 text-white font-semibold rounded-lg text-center">
          {{ error.message }}
        </p>
      </output>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public error: { [key: string]: any } | null = null;
  public user: { [key: string]: any }  | null = null;

  public async attemptUserLogin(e: Event) {
    this.$data.error = null;

    this.$axios.get('/sanctum/csrf-cookie')
      .catch(error => this.$data.error = error);

    // User credentials
    const credentials = new FormData(e.target as HTMLFormElement);

    try {
      const { data } = await this.$axios.post('/api/guest/login', credentials);

      /** Store user's basic information into vuex. */
      console.log(data);
    } catch(error) {
      this.$data.error = error;
    }
    
  }
}
</script> 

<style lang="postcss" scoped>
form {
  @apply w-96 p-4 shadow-lg;
}

form > * {
  @apply my-1;
}

form label {
  @apply text-2xl font-semibold text-gray-800 mb-10;
}

form input {
  @apply p-2 outline-none border-2 rounded-md w-full focus:shadow-inner;
}

form input[type="submit"],
form input[type="button"] {
  @apply font-semibold bg-gray-200 text-gray-700;
}
</style>
