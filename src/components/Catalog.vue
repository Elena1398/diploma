<script setup>
import Cart from '@/components/Card.vue'
</script>

<template>
  <div class="p-10 flex">
    <div class="w-1/4 pr-4">
      <h2 class="text-3xl mb-8">Фильтры</h2>

      <div class="mb-4">
        <label for="filters" class="block mb-4">
          <a class="text-lg mb-8 p-1">Категория</a>
        </label>
        <select
          id="filters"
          class="border border-slate-300 rounded-md w-9/12 p-1 outline-none focus:border-gray-400"
        >
          <option value="">Все категории</option>
          <option value="desserts">Десерты</option>
          <option value="bakery">Выпечка</option>
          <option value="cakes">Торты</option>
          <option value="cookies">Печенье</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block mb-4">
          <a class="text-lg mb-8 p-1">Цена</a>
        </label>
        <div class="flex space-x-2">
          <input type="numder" placeholder=" От" class="border border-slate-300 rounded-md w-9/12 outline-none focus:border-gray-400" />
           <input type="numder" placeholder=" До" class="border border-slate-300 rounded-md w-9/12 outline-none focus:border-gray-400" />
        </div>
      </div>

      <div class="mb-4">
        <label class="block mb-2">
          <a class="text-lg mb-8 p-1">Коржи</a>
        </label>
         <label><input type="checkbox" /> Ванильный</label><br />
        <label><input type="checkbox" /> Шоколадный</label><br />
        <label><input type="checkbox" /> Ореховый</label><br />
      </div>

       <div class="mb-4">
        <label class="block mb-2">
          <a class="text-lg mb-8 p-1">Начинки</a>
        </label>
         <label><input type="checkbox" />Крем</label><br />
        <label><input type="checkbox" /> Фрукты</label><br />
        <label><input type="checkbox" /> Шоколад</label><br />
      </div>

       <div class="mb-4">
        <label class="block mb-2">
          <a class="text-lg mb-8 p-1">Декор</a>
        </label>
         <label><input class="border border-slate-300" type="checkbox" />Посыпка</label><br />
        <label><input class="border border-slate-300" type="checkbox" /> Фрукты</label><br />
        <label><input class="border border-slate-300"  type="checkbox" />Шоколадный соус</label><br />
      </div>
     <button class="border border-slate-300 rounded-lg p-1 mt-8 font-mono" type="submit">Применить</button>
    </div>

    <div class="flex-1">
      <div class="flex justify-between">
        <h2 class="text-3xl mb-8">Категория</h2>
        <div class="relative">
          <img class="absolute left-2 top-1.5" src="../../svg/search.svg" alt="" />
          <input
            class="border border-slate-300 rounded-md py-1 pl-12 pr-10 outline-none focus:border-gray-400"
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div class="grid grid-cols-4 gap-5">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  </div>
</template>
