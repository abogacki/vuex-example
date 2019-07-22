<template>
  <div>
    <h3>Filter Todos:</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = complete
      </span>
    </div>
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'FilterTodos',
  methods: mapActions(['filterTodos']),
}
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}

.legend {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.incomplete-box {
  display: inline-block;
  height: 10px;
  width: 10px;
  background: #41b883;
}

.complete-box {
  display: inline-block;
  height: 10px;
  width: 10px;
  background: darkslateblue;
}
</style>
