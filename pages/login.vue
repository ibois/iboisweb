<template>
  <div>
    <form method="post" @submit.prevent="login">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input v-model="username" type="text" name="username" class="input" />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            v-model="password"
            type="password"
            name="password"
            class="input"
          />
        </div>
      </div>
      <div class="control">
        <button type="submit" class="button is-dark is-fullwidth">
          Log In
        </button>
      </div>
    </form>
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
            username: this.username,
            password: this.password
          }
        })

        this.$router.push('/profile')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    }
  }
}
</script>
