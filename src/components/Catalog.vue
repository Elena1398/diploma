<script setup>
import { defineProps } from 'vue'
import Cart from '@/components/Card.vue'

const props = defineProps({
  items: Array,
  onChangeSearchInput: Function,
  isFavorites: Boolean
})

const emit = defineEmits(['addToFavorite'])

const onClickAdd = () => {
  alert('Добавить!')
}
</script>

<template>
  <div class="flex-1">
    <div v-auto-animate class="grid grid-cols-4 gap-5">
      <Cart
        v-for="item in props.items"
        :key="item.des_id"
        :code="item.des_id"
        :title="item.des_name"
        :weight="item.weight"
        :price="isNaN(parseFloat(item.price)) ? 0 : parseFloat(item.price)"
        :imageUrl="item.photo"
        :onClickAdd="onClickAdd"
        :onClikFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
        :isFavorite="item.isFavorite"
      />
    </div>
  </div>
</template>
