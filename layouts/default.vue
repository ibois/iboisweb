<template>
  <div class="flex flex-col justify-between min-h-screen">
    <Header />
    <main class="mx-9">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
