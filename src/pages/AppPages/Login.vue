<template>
  <div class="q-pa-md row items-start">
    <q-card flat class="my-card bg-primary text-white">
      <q-card-section>
        <div class="text-h6">Login</div>
        {{ text }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InfoComponent',
  setup() {
    return {
      text: 'This is the login page to login contents',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
