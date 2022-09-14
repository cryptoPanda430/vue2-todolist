<template>
  <div>
    <div class="bg-success">
    <b-container>
      <p class="title py-5">ToDo List</p>
    </b-container>
      
    </div>

      <b-container class="mt-5">
        <p class="text-left font-weight-bold">Add Items</p>
        <b-form @submit="onSubmit" inline class="mb-3">
          <div v-show="!isEditing" class="form-group">    
              <b-form-input
                type="text"
                class="mr-3"
                v-model="todo"
                v-validate.immediate="'required'"
              ></b-form-input>
              <b-button v-on:click="storeTodo" variant="dark" :disabled="errors.any()">Submit</b-button>
          </div>

          <div v-show="isEditing" class="form-group">
              <b-form-input
                type="text"
                class="mr-3"
                v-model="todo"
                v-validate="'required'"
              ></b-form-input>
              <b-button v-on:click="updateTodo" variant="dark" :disabled="errors.any()">EDIT</b-button>
          </div>
        </b-form>
        <p class="text-left font-weight-bold">Tasks</p>
        <b-list-group>
          <b-list-group-item v-for="(item, index) in todos" :key="index" class="d-flex justify-content-between"> 
            {{ item }} 
            <div>
              <b-button
              v-on:click="edit(index, item)"
              variant="success"
              class="mx-3"
              >Edit</b-button
            >
            <b-button
              v-on:click="del(index)"
              variant="danger"
              >Delete</b-button
            >
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-container>

  </div>
</template>
<script>
export default {
  name: "todo",
  data() {
    return {
      isEditing: false,
      selectedIndex: null,
      todo: "",
      todos: [],
    };
  },
  watch:{
    todos: {
      handler() {
        localStorage.setItem('todos',JSON.stringify(this.todos))
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("todos")){
      this.todos = JSON.parse(localStorage.getItem("todos"))
    }
  },
  methods: {
    onSubmit() {
    },
    storeTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    edit(index, item) {
      this.todo = item;
      this.selectedIndex = index;
      this.isEditing = true;
    },
    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo);
      this.isEditing = false;
      this.todo = "";
    },
    del(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.form-group {
  display: flex;
}
.title{
  text-align : left;
  font-weight: bold;
  font-size: 30px;
  color: black;
  font-family: Comic Sans MS;
}
</style>