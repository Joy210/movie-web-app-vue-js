<template>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: #292d3e !important;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

#app {
  color: #ffffff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-bottom: 0 !important;
}

p {
  opacity: 0.5;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
a {
  color: #42b983;
  text-decoration: none !important;
}

::placeholder {
  font-size: 14px;
}

.card {
  background-color: #1b1e2b !important;
}
</style>
