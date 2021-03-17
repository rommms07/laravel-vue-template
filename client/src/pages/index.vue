<template>
  <main class="root-page h-screen grid place-items-center">
    <form @submit.prevent="attemptLogin" class="flex flex-col">
      <label>Laravel SPA Login Demo 🔒</label>
      <fieldset>
        <input name="email" type="text" placeholder="Username or Email">
      </fieldset>
      <fieldset>
        <input name="password" type="password" placeholder="Password">
      </fieldset>
      <input type="submit" value="Sign In">
    </form>
    <output v-if="user">
      Hello, {{ user }}
    </output>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  layout: 'default-layout'
})
export default class extends Vue {
  public user: any | null = null;

  public async attemptLogin(e: Event) {
    await this.$axios.get('/sanctum/csrf-cookie');

    const credentials = new FormData(e.target as HTMLFormElement);

    await this.$axios.post('/api/guest/login', credentials)
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err));
    
    this.$axios.get('/api/auth/user')
      .then(({ data }) => {
        this.$data.user = data;
      });
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
