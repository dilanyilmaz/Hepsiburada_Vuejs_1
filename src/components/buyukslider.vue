<template>
<div style="width:570px">
<vueper-slides :dragging-distance="50" fixed-height="600px" :slide-ratio="0.3" style="width:570px;">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
   
    :content="slide.content"
    :link="slide.link" ></vueper-slide>
</vueper-slides>
</div>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides'


import 'vueperslides/dist/vueperslides.css'

export default {
     components: { VueperSlides, VueperSlide },
    data: () => ({
  slides: [
    { image:'https://productimages.hepsiburada.net/s/32/551/10352469311538.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/551/10352469344306.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/551/10352469409842.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/551/10352469442610.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/551/10352469278770.jpg' },
    { image:'https://productimages.hepsiburada.net/s/32/551/10352469311538.jpg' },
    
  ]
})
}
</script>