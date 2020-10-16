<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: 'AppTitle',
  data () {
    return {
      title: '我的备忘录'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
  color: #42b983;
  margin-bottom: 10px;
}
</style>
