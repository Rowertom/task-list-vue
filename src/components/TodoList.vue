<template>
    <div class="list">
            <todoItem v-for="(todoItem, index) in todo" :key="index" :todo="todoItem" />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    components: {
        TodoItem
    },
    computed: {
    todo(){
        return this.$store.getters.TODOS;
    }
}
}
</script>

<style>
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 15px;
}
</style>