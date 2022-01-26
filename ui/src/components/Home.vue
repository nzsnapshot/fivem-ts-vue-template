<template>
  <div>
    <h1>{{ pog }}</h1>
  </div>
</template>
<script setup lang="ts">

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
defineProps<{ msg: string }>();
const store = useStore();
const router = useRouter();

const pog = computed(() => store.getters["module/getPog"]);
const action = () => store.dispatch("module/action");
const mutation = () => store.commit("module/mutation");
const goToRoute = () => router.go("/home");
const count = ref(0);

</script>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
