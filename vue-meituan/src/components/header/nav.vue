<template>   <!-- 头部导航栏的右边部分 -->
   <div class="m-nav">
        <ul class="nav">
            <li class="list my">
                <router-link>我的美团</router-link>
                <dl>
                    <dd>我的订单</dd>
                    <dd>我的收藏</dd>
                    <dd>抵用券</dd>
                    <dd>账户设置</dd>
                </dl>
            </li>
            <li>
                <router-link>手机app</router-link> 
            </li>
            <li>
                <router-link>商家中心</router-link>
                <dl>
                    <dd>登录商家中心</dd>
                    <dd>美团只能收银</dd>
                    <dd>我想合作</dd>
                    <dd>账户设置</dd>
                </dl>
            </li>
            <li>
                <router-link>网站导航</router-link>
                <div>
                    <dl>
                        <dt>酒店旅游</dt>
                        <dd><router-link ></router-link></dd>
                        <dd><router-link></router-link></dd>
                    </dl>
                    <dl>
                        <dt>吃美食</dt>
                         <dd><router-link></router-link></dd>
                        <dd><router-link></router-link></dd>
                         <dd><router-link></router-link></dd>
                        <dd><router-link></router-link></dd>
                    </dl>
                    <dl>
                        <dt>看电影</dt>
                         <dd><router-link></router-link></dd>
                        <dd><router-link></router-link></dd>
                         <dd><router-link></router-link></dd>
                        <dd><router-link></router-link></dd>
                    </dl>
                    <dl>
                        <dt>手机应用</dt>
                        <dd><router-link></router-link></dd>
                        <dd><router-link></router-link></dd>
                         <dd><router-link></router-link></dd>
                        <dd><router-link></router-link></dd>
                    </dl>
                    
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
