import axios from 'axios'

const state = {
  todos: [],
}

const getters = {
  allTodos: state => state.todos,
}

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )

    commit('setTodos', response.data)
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    )

    commit('newTodo', response.data)
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

    commit('removeTodo', id)
  },
  async filterTodos({ commit }, event) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${parseInt(
        event.target.value
      )}`
    )
    commit('setTodos', response.data)
  },
  async updateTodo({ commit }, updatedTodo) {
    await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
      updatedTodo
    )

    commit('updateTodo', updatedTodo)
  },
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updatedTodo) => {
    const updatedState = state.todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    )
    return (state.todos = updatedState)
  },
}

export default { state, getters, actions, mutations }
