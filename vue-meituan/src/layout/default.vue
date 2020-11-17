<template>
    <el-container class="layout-default">
        <el-header height="">
            <my-header />
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
       
    </el-container>

</template>
<script>
import myHeader from '@/components/header/index.vue';

export default {
    components: {
        myHeader,
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>
