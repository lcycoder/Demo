<template>
  <div id="app">
    <AppTitle/>

    <AppContent ref="content"
                v-bind:items="items"
                v-on:clear-adding="clearAdding">
    </AppContent>
    <AddItem ref="addItem" 
              v-bind:items="items"
              v-on:clear-editing="clearEditingContent">
    </AddItem>
    <AppFooter/>
  </div>
</template>

<script>
  import AppTitle from './components/AppTitle'
  import AddItem from  './components/AddItem'
  import AppFooter from './components/AppFooter'
  import AppContent from './components/AppContent'
  var items = [
    {
      value: "学习HTML",
      isDone: true,
      isEditing: false,
    },
    {
      value: "学习css",
      isDone: true,
      isEditing: false,
    } ,
    {
      value: "学习js",
      isDone: false,
      isEditing: true,
    } 
  ]
  export default {
    name: 'App',
    components: {
      AppFooter,
      AppTitle,
      AppContent,
      AddItem
      
    },
    methods: {
      clearEditingContent:function(){
        this.$refs.content.clearEditing();
      },
         clearAdding: function ($event) {
        this.$refs.addItem.isAdding = $event;   // 直接设定值
      }
      },
    
    data () {
      return{
        items:items,
      }
    }
  };
</script>

<style>
  #app {
    padding: 20px 20px 80px 20px;
    width: 750px;
    margin: 100px auto;
    background-color: #fff;
    /*color: #fff;*/
    border-radius: 3px;
    position: relative;
  }
</style>



