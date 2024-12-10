<script setup>
defineProps({
  code: Number,
  imageUrl: String,
  title: String,
  description: String,
  structure: String,
  weight: Number,
  protein: Number,
  fast: Number,
  carbohydrates: Number,
  calories:Number,
  price: Number,

})

// Функция для форматирования веса
const formattedWeight = (weight) => {
  if (weight >= 1000) {
    return (weight / 1000).toFixed(1) + ' кг'; // Форматируем вес в кг
  }
  return weight + ' г'; // Форматируем вес в г
}
</script>

<template>
  <div class="flex bg-white shadow-lg rounded-lg overflow-hidden p-5 items-center">
    <img
      class="w-2/5 h-auto m-15 rounded-xl"
      :src="imageUrl"
      alt="Dessert Image"
    />
    <div class="w-1/2 p-4 flex flex-col justify-between ml-14">
      <div>
        <h2 class="text-xl mt-5">{{ title }}</h2>
        <div>
          <div class="mt-5">
            <span class="text-slate-400">Цена: </span>
            <b>{{ price }} ₽</b>
          </div>
          <div class="mt-4">
            <h3 class="text-md font-semibold">Описание:</h3>
            <p class="mt-1">
             {{ description }}
            </p>
            <h3 class="text-md font-semibold mt-2">Состав:</h3>
            <p class="mt-1">{{ structure }}</p>
            <p class="mt-2"><strong class="mt-2">Вес: </strong> {{ formattedWeight(weight) }}</p>
          </div>
          <h3 class="text-md font-semibold mt-5">Пищевая ценность:</h3>
          <div class="grid grid-cols-4 gap-1 mt-5">
            <div class="border border-slate-300 rounded-lg p-1 text-center">
              Белки:<br/>
              {{ protein }} г
            </div>
            <div class="border border-slate-300 rounded-lg p-1 text-center">
              Жиры:<br/>
              {{ fast }} г
            </div>
            <div class="border border-slate-300 rounded-lg p-1 text-center">
              Углеводы:<br/>
              {{ carbohydrates }} г
            </div>
            <div class="border border-slate-300 rounded-lg p-1 text-center">
              Калории:<br/>
              {{ calories }} ккал
            </div>
          </div>
        </div>
      </div>
      <button class="border border-slate-300 rounded-lg p-1 mt-8 font-mono text-center" type="submit">В корзину</button>
    </div>
  </div>
</template>

<style>
button {
  width: 50%; /* Полная ширина кнопки */
  background-color: #a69dab; /* Цвет фона кнопки */
  color: white; /* Цвет текста кнопки */
  cursor: pointer; /* Курсор при наведении на кнопку */
  transition: background-color 0.3s; /* Плавный переход для фона кнопки */
}

button:hover {
  background-color: #979598; /* Темнее при наведении */
}
</style>

