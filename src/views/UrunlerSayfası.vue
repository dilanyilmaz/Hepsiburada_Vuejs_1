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
      <div><img  style="margin-top:15px;" width="200px" src='https://images.hepsiburada.net/assets/storefront/banners/24-03-2016_1513942271694_1.png'>
      <img  style="margin-top:15px;" width="200px" src='https://images.hepsiburada.net/assets/storefront/banners/26-06-2019_1569912118118_1.png'>
      <img  style="margin-top:15px;" width="200px" src='https://images.hepsiburada.net/assets/storefront/banners/18-06-2018_1529318569601_1.png'>
      <img  style="margin-top:15px;" width="200px" src='https://images.hepsiburada.net/assets/storefront/banners/21-01-2019_1548079307971_1.png'>
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
  background-color: white;
  
}
</style>>


