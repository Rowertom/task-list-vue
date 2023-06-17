<template>
  <div class="todoApp">
      <h1 class="todoApp__title">Todos</h1>
      <todo-form/>
      <todo-list/>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import TodoForm from '../components/TodoForm.vue';

export default {
  name: 'TodoApp',
  components: {
    TodoList,
    TodoForm
  }
}
</script>

<style>
.todoApp{
  width: 100vw;
  height: 100%;
}
.todoApp__title{
  color: #7e9289;
  font-size: 60px;
  font-weight: 100;
}
</style>