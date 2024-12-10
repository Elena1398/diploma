<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  code: Number,
  imageUrl: String,
  title: String,
    // weight: Number,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClikFavorite: Function
})

const router = useRouter();


// Функция для перехода на страницу десерт
const goToDecertPage = () => {
  router.push({ name: 'DecertPage', params: { id: props.code } });
}


</script>

<template>
  <div class="relative bg-white border border-slate-300 rounded-3xl p-6 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
    <img
      class="absolute top-8 left-8"
      @click="onClikFavorite"
      :src="!isFavorite ? '../svg/lik.svg' : '../svg/hearts2.png'"
      alt="like"
    />
   <img @click="goToDecertPage" :src="imageUrl" alt="decert" class="rounded-xl mb-4" />
    <p  @click="goToDecertPage" class="mt-2 font-bold text-center flex-grow">{{ title }}</p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col m-5">
        <span class="text-slate-400">Цена:</span>
        <b>{{ price }}₽</b>
      </div>
       <!-- <div class="flex justify-between items-center">
          <a class="text-slate-400">{{ weight }} кг.</a>
        </div> -->
      <img
        class="pt-10"
        @click="onClickAdd"
        :src="!isAdded ? '../svg/plus.svg' : '../svg/check.svg'"
        alt="plus"
      />
    </div>
  </div>
</template>
