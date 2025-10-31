<script setup>
import { ref } from 'vue';
import { signup, login } from '../services/api';

const isSignup = ref(false);
const form = ref({ username: '', password: '' });
const message = ref('');

async function handleSubmit() {
  message.value = '';
  try {
    if (isSignup.value) {
      await signup(form.value);
      message.value = '注册成功，请登录';
      isSignup.value = false;
    } else {
      const res = await login(form.value);
      message.value = '登录成功';
      console.log(res.data.token);
    }
    form.value.username = '';
    form.value.password = '';
  } catch (err) {
    message.value = err.response?.data?.message || '发生错误';
  }
}
</script>

<template>
  <div>
    <h2>{{ isSignup ? '注册' : '登录' }}</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="form.username" placeholder="用户名" />
      <input type="password" v-model="form.password" placeholder="密码" />
      <button type="submit">{{ isSignup ? '注册' : '登录' }}</button>
    </form>
    <p>{{ message }}</p>
    <button @click="isSignup = !isSignup">
      {{ isSignup ? '已有账号？登录' : '没有账号？注册' }}
    </button>
  </div>
</template>
