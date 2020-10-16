<template>
  <p><a v-bind:href="url" target="_blank">{{ footer }}</a></p>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      footer: '我的学习记录',
      url: 'https://blog.csdn.net/image_fzx',
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 10px;
}
p a {
  /*text-decoration: none;*/
  font-size: 16px;
  color: #000;
  font-weight: bold;
}
p a:hover {
  color: #42b983;
}
</style>
