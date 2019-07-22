<template>
  <div>
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo'
import FilterTodos from '@/components/FilterTodos'
import Todos from '@/components/Todos'

export default {
  components: {
    AddTodo,
    FilterTodos,
    Todos,
  },
}
</script>

<style>
</style>
