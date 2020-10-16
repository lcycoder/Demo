<template>
<p>
  <span  v-show="!isAdding"  
         class="add-item"
         v-on:click="addIt" > {{ note }} 
  </span>
  <span v-show="isAdding"  
        class="adding-item editing"
  >
    <input type="" name="" value="" v-model="addingDraft">
    <button v-on:click="addSubmit()">确定</button>
    <button v-on:click="clearAdd()">取消</button>
  </span>
</p>
</template>

<script>
export default {
    name: 'AddItem',
    props: ['items','editingItem','editingValue'],
    methods:{
        addIt:function(){  // 添加新任务
          this.isAdding = true;
          this.$emit('clear-editing',{});   // ?
        },
        addSubmit:function(){
          if(this.addingDraft.trim()){    //trim去除首尾空格
          this.items.push({
            value:this.addingDraft,
            isDone:false,
            isEditing:false,
          });
          this.isAdding = false;
          this.addingDraft = "";
          }
        },
        clearAdd:function(){ this.isAdding = false; }
    },
    data(){
      return {
        note:"点击添加新计划!",
        isAdding: false,
        addingDraft:"",
      }
    },
};
</script>
<style scoped>
p>span {
  display: inline-block;
  font-size: 16px;
  color: #42b983;
  cursor: pointer;
  /*margin-left: 5px;*/
  /*margin: 20px 0;*/
  position: absolute;
  bottom: 60px;
  margin-left: 2px;
  /*border: 1px solid red;*/
}
p>span.add-item {
  text-decoration: underline;
}
p>span.add-item:hover {
  font-size: 16px;
  /*color: orange;*/
  margin-bottom: 0;
  font-weight: bold;
  text-decoration: none;
}

p span.editing input {
  border: 1px solid #42b983;
  outline: none;
  padding: 5px;
  font-size: 16px;
  border-radius: 2px;
  /*border: none;*/
  width: 400px;
}
p span.editing button {
  border-radius: 2px;
  border: none;
  background-color: #42b983;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  
}
p span.adding-item button {
  vertical-align: -1px;
}
p span.editing button:hover {
  color: #fff;
  /*background-color: orange;*/
}
</style>