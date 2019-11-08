<template>
<div style="background-color:white; margin-left:400px;">
       <div style="background-color:white;margin-top:15px">
           <div style="float:left; ">
           <div><BSlider1/></div>
           <div style="width:250px ;margin-left:90px ; background-color:white;">
   
            <vueper-slides width="100px" fixed-height="50px" margin="5px" fixed-width="100px" class="no-shadow" :visible-slides="3" :slide-ratio="1/4" :dragging-distance="15">
            <vueper-slide style="width:50px; margin:5px" v-for="(slide, i) in slides" :key="i" :image="slide.image" :content="slide.content" :link="slide.link"></vueper-slide>
            </vueper-slides>

           </div>
         
           </div>
           <div style="float:left;background-color:	#E0E0E0; width:550px;height:850px;color:black;border-top-right-radius:5px">
               <div style="font-size:20px;padding-top:15px">Lenovo IdeaPad S145-15API AMD Ryzen 7 3700U 8GB 512GB SSD Freedos 15.6" FHD 
                   Taşınabilir Bilgisayar 81UT001ATX
               </div>
           <div style="font-size:20px;color:#0288D1;text-align:left;margin:17px">Lenovo</div>
            <div style="font-size:20px;color:green;text-align:left;margin:17px">Notebook alana Görüntülü Akademi hediye!</div>
           <div style="margin:17px;width:500px;">
               <div style="width:80px;height:80px;background-color:red;font-size:20px;padding-top:15px;color:white;float:left">%5 indirim</div>
               <div style="float:left;margin-left:25px">
                <div style="font-size:25px;margin-bottom:15px;margin-top:5px"><del>3.899,00 TL</del></div>
                <div  style="font-size:35px">3.698,99 TL</div>
                
               </div>
            <div style="padding-top:100px">
               <ul>
                   <li style="font-size:20px">336,45 TL x 12 ay’a varan <a href="/">Taksit Seçenekleri</a></li>
                   <li style="font-size:20px">12 ay’a varan vade ile Alışveriş Kredisi seçeneği</li>
               </ul>
           </div>
           <div style="background-color:white;border-radius:7px;width:250;height:100px;text-align:left;">
                <div style="margin-left:25px;font-size:20px;color:gray">ilk yorumu sen yaz</div>
                <div style="margin-left:25px;font-size:15px;">Bu ürünle ilgili fikirlerini diğer kullanıcılarla paylaş.</div>
                <div><button style="margin-left:25px;margin-top:15px;border-radius:5px;background-color:gray;color:white;width:120px;height:40px">Yorum Yap</button></div>
           </div>

           </div>
         
            </div>
         
       </div>
       <div style="width:800px;height:600px">
       <div style="font-size:15px ">Bu ürüne bakan bunlara da baktı</div>
       <div>
            <vueper-slides style="left:150px" fixed-height:380px class="no-shadow" :visible-slides="3" :slide-ratio="1/4" :dragging-distance="15">
            <vueper-slide style="width:250px;height:200px;" v-for="(slide1, i) in slides1" :key="i" :image="slide1.image" :content="slide1.content" :link="slide1.link"></vueper-slide>
            </vueper-slides>
       </div>
       </div>
    


 </div>
</template>
<style >
body { padding-top: 18px;
background-color: white; }
</style>

<script>

import BSlider1 from '../components/buyukslider';

//import tabmenu from '../components/tabmenu';

import { VueperSlides, VueperSlide } from 'vueperslides'

import 'vueperslides/dist/vueperslides.css'

export default {
  components:{
    VueperSlides, VueperSlide,
    BSlider1,
  //  tabmenu
  },
  data: () => ({
  slides: [
    { image:'https://productimages.hepsiburada.net/s/32/80/10352469114930.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/80/10352469114930.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/80/10352469147698.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/80/10352469180466.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/80/10352469213234.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/80/10352469246002.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/80/10352469278770.jpg' }
  ],slides1: [
    { image:'https://productimages.hepsiburada.net/s/32/180/10352820027442.jpg' },
    { image:'https://productimages.hepsiburada.net/s/27/180/10211583950898.jpg' },
    { image:'https://productimages.hepsiburada.net/s/30/180/10281550381106.jpg' },
    { image:'https://productimages.hepsiburada.net/s/30/180/10281550381106.jpg' },
    { image:'https://productimages.hepsiburada.net/s/31/180/10333345972274.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/180/10352483860530.jpg' },
   
  ]
})

}

</script>