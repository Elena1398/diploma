<script>
export default {}
</script>
<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <div class="flex items-center gap-4">
      <router-link to="/des"><a class="text-xl uppercase"
        >Valentina Oplachko
        <p class="text-sm text-slate-400">Кондитерские изделия</p>
      </a></router-link>
    </div>

    <nav class="flex items-center">
      <ul class="flex items-center gap-10 gap-15">
        <li class="hover:text-slate-500 cursor-pointer">
          <router-link to="/des">Каталог</router-link>
        </li>
        <li class="hover:text-slate-500 cursor-pointer">
          <router-link to="/">О кондитере</router-link>
        </li>
        <li class="hover:text-slate-500 cursor-pointer">
          <router-link to="/">Доставка и Оплата</router-link>
        </li>
        <!-- <li class="hover:text-slate-500 cursor-pointer">
          <router-link to="/">Торты на заказ</router-link>
        </li> -->

        <li class="flex items-center hover:text-slate-500 gap-3 cursor-pointer">
          <img src="../../svg/lik.svg" alt="" />
          <router-link to="/favourites">Избранное</router-link>
        </li>
        <li class="flex items-center hover:text-slate-500 gap-3 cursor-pointer">
          <img src="../../svg/person.svg" alt="" />
          <router-link to="/login">Вход</router-link>
        </li>
        <li class="flex items-center hover:text-slate-500 gap-3 cursor-pointer">
          <img src="../../svg/shopping_basket.svg" alt="" />
          <router-link to="/">Корзина</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
