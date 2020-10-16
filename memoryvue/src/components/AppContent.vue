<template>
  <ul>
    <li v-for="(item,index) in items" :key=index>
      <span v-show="!item.isEditing" v-bind:class="{ done: item.isDone}">
        {{ index + 1 }}. {{ item.value }}
      </span>

      <span v-show="item.isEditing" class="editing">
        <input type="text" name="" v-model="item.value">
        <button v-on:click="editSubmit(item)">确定</button>
        <button v-on:click="clearEditing()">取消</button>
      </span>

      <button v-on:click="editIt(item)">编辑</button>

      <button v-on:click="doneIt(item)" v-bind:class="{ doneBtn:item.isDone }">
        <span v-show="item.isDone">恢复</span><span v-show="!item.isDone">完成</span>
      </button> 

      <!-- <button v-on:click="delete(todo)"> -->
      <button v-on:click="deleteIt(index)">删除</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppContent',
  props: ['items'],
  methods: {
    clearAdding: function () {
      this.$emit('clear-adding', false);
    },
    doneIt: function (obj) {
      obj.isEditing = false;
      obj.isDone = !obj.isDone;
      this.clearEditing();
      this.clearAdding();
    },
    deleteIt: function (index) {
      // this.$emit('clear-adding', false);
      this.items.splice(index, 1);
      this.clearEditing();
      this.clearAdding();
    },
    editIt: function (obj) {
      // this.$emit('clear-adding', false);
      this.clearEditing();   // 这句要放前面
      this.editingItem = obj;    // 保存当前编辑的todo对象，该对象是一个引用值
      this.editingValue = obj.value;   // 保存修改前的内容，该字符串是一个原始值
      obj.isEditing = true;
      this.clearAdding();
    },
    editSubmit: function (obj) {
      // 确认后，两个临时变量清空
      this.editingItem = null;
      this.editingValue = "";
      if (obj.value.trim()) {
        obj.isEditing = false;
      }
    },
    clearEditing: function () {
      // 如果取消了编辑，即没有正常保存，就不改变item值
      if (this.editingItem) {
        this.editingItem.isEditing = false;
        this.editingItem.value = this.editingValue;
        this.editingItem = null;
        this.editingValue = "";
      }
    },
  },

  data () {
    return {
      editingItem: null,
      editingValue: "",
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li>span:first-child {
  padding: 3px;
}
li>span:first-child:hover {
  background-color: #42b983;
  color: #fff;
}
ul li>button {
  /*width: 44px;*/
  float: right;
  border-radius: 2px;
  margin-left: 10px;
  padding: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
}
ul li>button {
  background-color: #42b983;
}
ul li>button:nth-child(3):hover {
  background-color: #f17c67;
  /*margin-right: 50px;*/
}
ul li>button.doneBtn {
  background-color: #bbb;
}
ul li>button:nth-child(4):hover {
  background-color: #495a80;
}
ul li>button:nth-child(5):hover {
  background-color: #e03636;
}


ul li {
  height: 2.5em;
  font-size: 18px;
}
ul li>span>span:last-child {
  padding: 4px;
}
ul li>span>span:last-child:hover {
  background-color: #42b983;
  color: #fff;
}
.done {
  text-decoration:line-through;
  color: #aaa;
}
span.editing input {
  border: 1px solid #42b983;
  outline: none;
  padding: 5px;
  font-size: 16px;
  border-radius: 2px;
  /*border: none;*/
  width: 400px;
}
span.editing button {
  border-radius: 2px;
  border: none;
  background-color: #42b983;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  
}

</style>
