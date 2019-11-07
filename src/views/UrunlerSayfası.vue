<template>
  <div id="app">
  
    <div style="float:left;margin-left:10%; margin-top:5px;">
      <Slider/>
    </div>
    <div style="float:left;margin-left:2%;margin-top:5px;">
      <!--slider buraya ikş tane-->
      <div>
      <div style="float:left;"><Slider1/></div>
      <div style="float:left;"><Slider2/></div>
      </div>
      <div style="margin-top:10px">
        <Urunler/>
      </div>
      
    </div>
    <router-view/>
  </div>
</template>

<script>
import Slider from '../components/slider';
import Slider1 from '../components/slider1';
import Slider2 from '../components/slider2';
import Urunler from '../components/urunler';

export default {
  components:{
    Slider,
    Slider1,
    Urunler,
    Slider2,
  
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


