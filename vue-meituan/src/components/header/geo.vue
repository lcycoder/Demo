<template>
  <div class="m-geo">
      <div class="position">
          <i class="el-icon-location"/>
          <a href="">切换城市</a>
      </div>
       <div class="m-user" >
            <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
            <router-link class="register" :to="{name: 'register'}">注册</router-link>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>