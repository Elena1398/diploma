<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import CardDessert from './CardDessert.vue';

const prop = defineProps({
  id: String // Получаем bookCode как пропс
});
console.log(prop.id)

const cardDes = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8080/apis/desert/' + prop.id);
        cardDes.value = response.data; // Сохраняем полученные данные
    } catch (error) {
        console.error('Ошибка при загрузке книги:', error);
    }
});
</script>

<template>
    <CardDessert
      v-if="cardDes"
      :code="cardDes.des_id"
      :imageUrl="cardDes.photo"
      :title="cardDes.des_name"
      :description="cardDes.description"
      :structure="cardDes.ingredients"
      :weight="cardDes.weight"
      :protein="cardDes.protein"
      :fast="cardDes.fast"
      :carbohydrates="cardDes.carbohydrates"
      :calories="cardDes.calories"
      :price="isNaN(parseFloat(cardDes.price)) ? 0 : parseFloat(cardDes.price)" 
    />
</template>
