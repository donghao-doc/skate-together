<script setup>
import { ref, onMounted } from 'vue';
import { getPosts, createPost } from '../services/api';

const posts = ref([]);
const form = ref({ author: '', content: '' });

async function fetchPosts() {
  const res = await getPosts();
  posts.value = res.data;
}

async function submitPost() {
  if (!form.value.author || !form.value.content) return;
  await createPost(form.value);
  form.value.author = '';
  form.value.content = '';
  fetchPosts();
}

onMounted(fetchPosts);
</script>

<template>
  <div>
    <h2>帖子</h2>
    <form @submit.prevent="submitPost">
      <input v-model="form.author" placeholder="昵称" />
      <textarea v-model="form.content" placeholder="写下您的分享..."></textarea>
      <button type="submit">发布</button>
    </form>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.author }}</strong>：{{ post.content }} <br />
        <small>{{ new Date(post.created_at).toLocaleString() }}</small>
      </li>
    </ul>
  </div>
</template>
