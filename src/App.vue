<template>
  <b-container fluid id="app">
    <router-view />
  </b-container>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
body {
  background-color: transparent;
}
html {
  background: url("./assets/bg-movilick.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
