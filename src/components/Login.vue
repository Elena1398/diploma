<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // Логика для обработки входа
      console.log('Имя пользователя:', this.username)
      console.log('Пароль:', this.password)
      // Здесь можно добавить логику для аутентификации
    }
  }
}
</script>

<template>
  <div class="max-w-lg m-auto p-20 ">
      <h1 class="font-mono text-center font-bold uppercase m-10 text-xl">Вход</h1>
      <form @submit.prevent="handleLogin">
        <div class="mt-6">
          <label class="font-mono" for="username">Имя пользователя:</label>
          <input class=" border border-slate-300 rounded-lg p-2" type="text" id="username" v-model="username" required />
        </div>
        <div class="mt-6">
          <label class="font-mono text-center" for="password">Пароль:</label>
          <input  class="border border-slate-300 rounded-lg p-2" type="password" id="password" v-model="password" required />
        </div>
        <button class="border border-slate-300 rounded-lg p-1 mt-8 font-mono" type="submit"><router-link to="/catalog">Войти</router-link></button>
        <div class="flex justify-self-center items-center mt-6">
           <router-link class="font-mono text-center font-bold uppercase m-8 text-xl" to="/registration">Регистрация</router-link>
            <img src="../../svg\arrow_forward.svg" alt="" />
        </div>
      </form>
    </div>
</template>

<style scoped>

input[type="text"],
input[type="password"] {
  width: 100%; /* Полная ширина полей ввода */
  transition: border-color 0.3s; /* Плавный переход для рамки */
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #c091d0; /* Цвет рамки при фокусе */
  outline: none; /* Убираем стандартный фокусный контур */
}

button {
  width: 100%; /* Полная ширина кнопки */
  padding: 10px; /* Внутренние отступы */
  background-color: #a69dab; /* Цвет фона кнопки */
  color: white; /* Цвет текста кнопки */
  cursor: pointer; /* Курсор при наведении на кнопку */
  transition: background-color 0.3s; /* Плавный переход для фона кнопки */
}

button:hover {
  background-color: #979598; /* Темнее при наведении */
}
</style>

