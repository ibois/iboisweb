<template>
  <div class="flex justify-center">
    <div class="w-full max-w-xs">
      <form
        method="post"
        class="bg-dark rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="login"
      >
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            id="username"
            v-model="username"
            class="input py-2 px-3 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            class="input py-2 px-3 focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="********"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            identifier: this.username,
            password: this.password
          }
        })

        this.$router.push('/profile')
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
