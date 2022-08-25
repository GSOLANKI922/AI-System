<template>
  <Header/>
  <FormGenerator/>  
</template>

<script>

import Header from "./components/Header.vue";
import FormGenerator from './views/FormGenerator.vue';

export default {
  name: "App",
  components: {
    Header,
    FormGenerator
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0px 0px;
  margin: 0px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


</style>
