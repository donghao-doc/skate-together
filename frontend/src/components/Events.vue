<script setup>
import { ref, onMounted } from 'vue';
import { getEvents, createEvent } from '../services/api';

const events = ref([]);
const form = ref({ title: '', location: '', date: '' });

async function fetchEvents() {
  const res = await getEvents();
  events.value = res.data;
}

async function submitEvent() {
  if (!form.value.title || !form.value.location || !form.value.date) return;
  await createEvent(form.value);
  form.value.title = '';
  form.value.location = '';
  form.value.date = '';
  fetchEvents();
}

onMounted(fetchEvents);
</script>

<template>
  <div>
    <h2>活动</h2>
    <form @submit.prevent="submitEvent">
      <input v-model="form.title" placeholder="活动名称" />
      <input v-model="form.location" placeholder="地点" />
      <input type="date" v-model="form.date" />
      <button type="submit">创建活动</button>
    </form>
    <ul>
      <li v-for="event in events" :key="event.id">
        <strong>{{ event.title }}</strong> - {{ event.location }} - {{ event.date }}
      </li>
    </ul>
  </div>
</template>
