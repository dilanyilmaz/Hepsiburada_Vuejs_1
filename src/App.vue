<template>
  <div id="app">
  <div><Baslik/></div>
  
    <router-view/>
  </div>
</template>

<script>

import Baslik from './components/baslık';

export default {
  components:{
 
    Baslik
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #22476b;
  
}
</style>>


