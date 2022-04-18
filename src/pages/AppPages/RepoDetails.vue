<template>
  <div class="q-pa-md row items-start">
    <q-card flat class="my-card bg-primary text-white">
      <q-card-section>
        <div class="text-h6">Repo Details</div>
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
      text: 'This contains the repo details',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
