<template>
  <div id="app">
    <nav>
      <router-link to="/">Starting page</router-link> |
      <router-link to="/todo">Todo</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  padding: 30px;
  width: 50%;
  font-weight: bold;
  color: #2c3e50;
  border: 1px solid grey;
  border-radius: 40px 40px 60px 60px;
  box-shadow: 5px 5px 5px grey;
  text-decoration: none;
}
nav a:hover{
  box-shadow: 10px 10px 15px gray;
}

nav a.router-link-exact-active {
  color: #7e9289;
  font-size: 30px;
}
</style>
