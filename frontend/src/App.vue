<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
nav {
  display: flex;
  gap: 10px;
}
</style>
