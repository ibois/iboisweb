<template>
  <div>
    <ul class="flex flex-col md:flex-row md:flex-wrap md:justify-center">
      <li
        v-for="member in members"
        :key="member.id"
        class="bg-dark flex flex-row md:flex-col rounded p-6 mb-5 mt-5 md:m-5 md:w-56"
      >
        <img
          class="h-16 w-16 md:h-24 md:w-24 rounded-full mr-6 md:mx-auto md:mb-4"
          :src="member.image.url"
        />
        <div class="text-left md:text-center">
          <h1 class="text-lg">{{ member.username }}</h1>
          <p class="text-gray-300">
            {{ member.description || 'No description provided' }}.
          </p>
          <router-link
            :to="{ name: 'member-name', params: { name: member.username } }"
            tag="a"
            class=""
          >
            Profile
          </router-link>
        </div>
      </li>
      <p v-show="!members.length">No members :(</p>
    </ul>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.STRAPI_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  computed: {
    members() {
      return this.$store.getters['members/list']
    }
  },
  async fetch({ store }) {
    store.commit('members/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
          users {
            id,
            username,
            description,
            image{
              url                
            }
          }
        }
        `
      }
    })
    response.data.users.forEach(member => {
      member.image.url = `${apiUrl}${member.image.url}`
      store.commit('members/add', {
        id: member.id,
        ...member
      })
    })
  }
}
</script>
