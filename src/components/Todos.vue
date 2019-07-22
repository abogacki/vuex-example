<template>
  <div>
    <h2>Todos</h2>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        class="todo"
        :class="{'is-complete': todo.completed}"
        v-for="todo in allTodos"
        :key="todo.id"
      >
        {{ todo.title }}
        <span class="icons">
          <font-awesome-icon icon="trash-alt" @click="deleteTodo(todo.id)" />
          <router-link :to="{path: `details/${todo.id}`}">
            <font-awesome-icon icon="directions" />
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onDblClick(todo) {
      const updatedTodo = {
        ...todo,
        completed: !todo.completed,
      }

      this.updateTodo(updatedTodo)
    },
  },
  created() {
    this.fetchTodos()
  },
  computed: mapGetters(['allTodos']),
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.is-complete {
  background: darkslateblue;
}

.icons {
  position: absolute;
  display: flex;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  justify-content: flex-end;
  color: #fff;
}

.icons > svg {
  margin: 3px;
}

.icons > a {
  color: inherit;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
