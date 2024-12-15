<template>
  <div class="container mx-auto p-10">
    <!-- Заголовок страницы -->
    <h1 class="text-4xl font-mono font-bold text-center mb-8 p-4">Доставка и Оплата</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Левая колонка: Доставка -->
      <div class="bg-white rounded-lg shadow-xl flex flex-col">
        <h2 class="text-2xl font-mono text-gray-800 mb-4">Способы доставки</h2>
        <ul class="space-y-4 text-lg text-gray-600 flex-grow">
          <li class="grid grid-cols-2">
            <span class="font-bold mr-2 mt-10">Самовывоз</span>
            <p>Вы можете забрать ваш заказ самостоятельно с нашего пункта выдачи.</p>
          </li>
          <li class="grid grid-cols-2">
            <span class="font-bold mr-2">Доставка</span>
            <p>
              Мы доставим ваш заказ прямо к двери. Сроки и стоимость доставки зависят от вашего
              местоположения.
            </p>
          </li>
        </ul>
      </div>

      <!-- Правая колонка: Оплата -->
      <div class="bg-white rounded-lg shadow-xl flex flex-col">
        <h2 class="text-2xl font-mono text-gray-800 mb-4">Способы оплаты</h2>
        <ul class="space-y-4 text-lg text-gray-600 flex-grow">
          <li class="grid grid-cols-2">
            <span class="font-bold mr-2">Наличные:</span>
            <p>Вы можете оплатить заказ наличными курьеру при получении.</p>
          </li>
          <li class="grid grid-cols-2">
            <span class="font-bold mr-2">Перевод на карту:</span>
            <p>Вы можете оплатить заказ банковским переводом на нашу карту.</p>
          </li>
          <li class="grid grid-cols-2">
            <span class="font-bold mr-2">СПБ (Система Прямого Безопасного Перевода):</span>
            <p>Оплата через систему СПБ для безопасных и быстрых транзакций.</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Инструкция как заказать десерт -->
    <div class="mt-12 text-center mt-26">
      <h2 class="text-4xl font-mono font-bold text-center mb-8 p-4" for="username">Как заказать десерт?</h2>
      <p class="text-2xl text-gray-600 mb-28">
        Чтобы заказать десерт, выберите понравившееся блюдо на нашем сайте, добавьте его в корзину и
        выберите удобный способ доставки и оплаты. Мы быстро обработаем ваш заказ и доставим его в
        удобное для вас время.
      </p>
    </div>
  </div>
</template>
