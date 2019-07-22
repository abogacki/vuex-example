<template>
  <div id="app">
    <div class="container">
      <nav class="navbar">
        <router-link class="navbar__button" to="/">Home</router-link>
        <router-link class="navbar__button" to="/about">About</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  /* line-height: 1.6; */
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

.navbar {
  display: flex;
  justify-content: flex-start;
}

.navbar__button {
  padding: 5px 20px;
  margin: 10px;
  border-bottom: 2px solid transparent;
  display: block;
  text-decoration: none;
  color: darkslategray;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: 0.3s border-bottom cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.navbar__button:hover {
  border-bottom: 2px solid darkslategray;
}
</style>
