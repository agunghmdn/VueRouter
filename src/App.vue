<template>
  <div id="app">
      <router-link to="/siswa">Data Siswa</router-link> | 
      <router-link to="/kelas">Data Kelas</router-link>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  min-width: 50%;
  max-width: 95%;
  margin: 20px auto;
}
td, th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
td:first-child, th {
  text-align: center;
}
th {
  background-color: #e57b02;
  color: #fff;
}
img { 
  border-radius: 50% 
}
input {
  margin: 5px;
  padding: 5px;
  border: transparent;
  border-bottom: 1px solid #e57b02;
}
button {
  margin-top: 15px;
  background-color:transparent;
  border: 1px solid #e57b02;
  border-radius: 5px;
  padding: 5px;
}
</style>