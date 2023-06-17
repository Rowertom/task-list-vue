<template>
    <div class="form">
        <form class="task" @submit.prevent="addNewTodoItem()">
            <input class="task__content" type="text" v-model="newTodoItem" placeholder="Введите задачу" />
            <button class="task__btn" type="submit">Записать</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addNewTodoItem() {
            this.$store.dispatch('addNewTodo', this.newTodoItem);
            this.newTodoItem = '';
        }
    }
};
</script>

<style>
.form {
    display: flex;
    justify-content: center;
}

.task {
    width: 80%;
    padding: 20px 10px;
    border: 1px solid grey;
    box-shadow: 5px 5px 10px grey;
    border-radius: 40px;
    display: flex;
    justify-content: space-around;
}

.task__content{
    padding: 5px;
    width: 80%;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    border: 0.5px solid gray;
}

.task__btn{
    border: 0.5px solid gray;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 5px 5px 10px gray;
    cursor: pointer;
}

.task__btn:hover{
    background-color: gray;
    color: whitesmoke;
}

</style>