<template>
<vueper-slides :dragging-distance="50" fixed-height="300px" :slide-ratio="0.3" style="width:570px;">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
   
    :content="slide.content"
    :link="slide.link" ></vueper-slide>
</vueper-slides>

</template>

<script>
// In your VueJS component.
import { VueperSlides, VueperSlide } from 'vueperslides'

// Since v. 1.6.0, you need to include Vueper Slides CSS file for default styles.
import 'vueperslides/dist/vueperslides.css'

export default {
     components: { VueperSlides, VueperSlide },
    data: () => ({
  slides: [
    { image:'https://images.hepsiburada.net/assets/storefront/banners/23-01-2019_1548248293587_1.png' },
    { image:'https://images.hepsiburada.net/assets/storefront/banners/06-11-2019_1573047794057_1.png' }
  ]
})
}
</script>
