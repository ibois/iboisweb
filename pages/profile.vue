<template>
  <div>
    <p>Logged in: {{ loggedInUser.username }}</p>
    <a @click="logout">Logout</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>
