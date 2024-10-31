<template>
  <v-container fluid class="teal darken-2 pa-4" style="padding: 0px;">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="series in seriesList" v-bind:key="series.img"
        ><nuxt-link :to="series.to"><img :src="series.img" /></nuxt-link
      ></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <v-col class="text-center">
      <v-btn
        class="mt-3 font-weight-bold"
        block
        dark
        x-large
        color="teal darken-4"
        to="/series"
      >
        巻号一覧へ
      </v-btn>
    </v-col>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1440: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      },
      seriesList: [
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife12.jpg",
          to: "/series/12",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife11.jpg",
          to: "/series/11",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife10.jpg",
          to: "/series/10",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife9.jpg",
          to: "/series/9",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife8.jpg",
          to: "/series/8",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife7.jpg",
          to: "/series/7",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife6.jpg",
          to: "/series/6",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife5.jpg",
          to: "/series/5",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife4.jpg",
          to: "/series/4",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife3.jpg",
          to: "/series/3",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife2.jpg",
          to: "/series/2",
        },
        {
          img: "https://media.niche-life.com/thumbnail/NicheLife1.jpg",
          to: "/series/1",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
