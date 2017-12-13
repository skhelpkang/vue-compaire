<template>
    <h2>{{title}}</h2>
</template>

<script>
export default {
  name: 'Sample',
  data () {
    return {
      title: '타이틀',
    }
  },
}
</script>

<style scoped>
h2 {
  font-weight: normal;
  color: #42b983;
}
</style>
