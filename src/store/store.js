import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    todo: [
      {
        title: 'todo item a',
        completed: false
      },
      {
        title: 'todo item b',
        completed: false
      }
    ]

  },
  getters: {
    TODOS: state => {
      return state.todo;
    }
  },
  mutations: {
    NEW_TODO(state, todoItem){
      state.todo.push({
        title: todoItem,
        completed: false
      });
    },

    DELETE_TODO(state, todoItem){
      let index = state.todo.indexOf(todoItem);
      state.todo.splice(index,1);
    },

    TOGGLE_STATUS(state, todoItem){
      todoItem.completed = !todoItem.completed;
    },

    UPDATE_TODO(state, todoItem){
      let index = state.todo.indexOf(todoItem);
      state.todo[index] = todoItem;
    }
  },
  actions: {
    addNewTodo({commit}, todoItem){
      commit('NEW_TODO', todoItem)
    },
    deleteTodo({commit}, todoItem){
      commit('DELETE_TODO', todoItem);
    },
    toggleTodoStat({commit}, todoItem) {
      commit('TOGGLE_STATUS', todoItem);
    },
    updateTodo({commit}, todoItem){
      commit('UPDATE_TODO', todoItem);
    }
  }
})
