<template>
  <div class="hello">
    <ul>
      <li v-for="user in users" :key="user.id">
        {{user.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '../store'

export default {
  name: 'Sample',
  store,
  beforeMount(){
    this.findAllUsers()
  },

  computed:{
    users(){
      return store.state.user.users
    }
  },

   methods: {
    ...mapActions([
      'findAllUsers'
    ]),
   }
}
</script>

<style scoped>
</style>
