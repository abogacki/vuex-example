<template>
  <div>
    <h3>
      <span :style="{marginRight: '10px', cursor: 'pointer'}">
        <font-awesome-icon icon="arrow-left" @click="$router.back()" />
      </span>
      <span>Todo details</span>
    </h3>

    <div v-if="todo" class="todo">
      <h4>{{todo.title}}</h4>
      <!-- <p>{{todo.id}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todo: function() {
      const id = this.$route.params.id
      const todo = this.$store.getters.getTodoById(id)
      return todo
    },
  },
}
</script>

<style>
.todo {
  display: flex;
  max-width: 200px;
  justify-content: center;
  background: darkcyan;
  border-radius: 10px;
  padding: 2em;
  color: whitesmoke;
}
</style>
