<template>
    <div>
        <div v-bind:class='[todo.completed ? "border_red task_item" : "border_green task_item" ]'>
            <div>
                <input type="checkbox" :checked="todo.completed" @change="toggleTodoStat(todo)">
                <span v-if="!editing" v-bind:class='[ todo.completed ? "completed" : "not_completed" ]' @click="toggleTodoStat(todo)">
                    {{ todo.title }}
                </span>
                <div v-else >
                    <input class="item_change" v-bind:value='todoText' @change="todoTextChange" type="text">
                </div>
            </div>
            <div>
                <button class="btn_delete" @click="deleteTodo(todo)">Удалить</button>
                <button class="btn_update" @click="updateTodoI(todo)">{{ editing ? 'Подтвердить' : 'Редактировать' }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ["todo"],
    data() {
        return {
            todoText: "",
            editing: false,
        }
    },
    methods: {
        ...mapActions(['deleteTodo', 'toggleTodoStat', 'updateTodo']),
        todoTextChange(e) {
            this.todoText = e.target.value;
        },
        updateTodoI(todo) {
            this.editing = this.editing == true ? false : true;
            if (this.editing) {
                this.todoText = todo.title;
                this.updateTodo(todo);
            } else {
                todo.title = this.todoText;
            }
        }
    }
};
</script>

<style scoped>
.task_item{
    display: flex;
    width: 700px;
    padding: 20px;
    border: 1px solid;
    border-radius: 30px;
    justify-content: space-between;
    font-size: 1.5rem;
}
.completed {
    text-decoration: line-through;
    color: red;
}
.not_completed{
    color: green;
}
.border_red{
    border: 2px solid red;
    box-shadow: 5px 5px 8px red;
}

.border_green{
    border: 2px solid green;
    box-shadow: 5px 5px 8px green;
}
.item_change{
    font-size: 1rem;
    padding: 5px 10px;
    border-radius: 20px;
}

.btn_delete{
    font-size: 1rem;
    border: none;
    background-color: red;
    padding: 5px 10px;
    cursor: pointer;
}

.btn_delete:hover{
    color: white;
}

.btn_update{
    font-size: 1rem;
    border: none;
    background-color: inherit;
    padding: 5px 10px;
}

.btn_update:hover{
    color: white;
    background-color: blue;
}
</style>