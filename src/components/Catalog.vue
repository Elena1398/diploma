<script setup>
import { defineProps } from 'vue';
import Cart from '@/components/Card.vue';

const props = defineProps({
  items: Array,
  onChangeSearchInput: Function,
});

const emit = defineEmits(['addToFavorite']);

const onClickAdd = () => {
  alert('Добавить!')
}

</script>

<template>
  <div class="flex-1">
    <div class="flex justify-between">
      <h2 class="text-3xl mb-8 font-mono" for="username">Категория</h2>
      <div class="relative">
        <img class="absolute left-2 top-1.5" src="../../svg/search.svg" alt="" />
        <input
          @input="onChangeSearchInput"
          class="border border-slate-300 rounded-md py-1 pl-12 pr-10 outline-none focus:border-gray-400"
          type="text"
          placeholder="Поиск..."
        />
      </div>
    </div>
    <div  v-auto-animate class="grid grid-cols-4 gap-5">
      <Cart
        v-for="item in props.items"
        :key="item.des_id"
        :code="item.des_id"
        :title="item.des_name"
        :weight="item.weight"
        :price="isNaN(parseFloat(item.price)) ? 0 : parseFloat(item.price)" 
        :imageUrl="item.photo"
        :onClickAdd="onClickAdd"
        :onClikFavorite="() => emit('addToFavorite', item)"
        :isFavorite="item.isFavorite"
      />
    </div>
  </div>
</template>
