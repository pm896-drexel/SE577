<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white">
      <h6>GitHub Repo Details</h6>
    </q-banner>
    <div class="row">
      <q-table
        title="GitHub Repos"
        dense
        :rows="rows"
        :columns="columns"
        row-key="id"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GitHubPage',
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
type rowType = {
  id: string;
  name: string;
  url: string;
  language: string;
  updated: string;
};
const columns = [
  { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
  { name: 'name', label: 'name', align: 'left', field: 'name', sortable: true },
  { name: 'url', label: 'URL', align: 'left', field: 'url', sortable: true },
  { name: 'language', label: 'Language', align: 'left', field: 'language' },
  { name: 'updated', label: 'Updated', align: 'left', field: 'updated' },
];

let rows = ref([] as rowType[]);
onMounted(async () => {
  const res = await axios.get(
    'http://localhost/yaml_repo/'
  );
  rows.value = [];
  const rList = res.data as rowType[];
  const resList = rList.map((row) => {
    const mappedRow: rowType = {
      id: row.id,
      name: row.name,
      url: row.url,
      language: row.language,
      updated: row.updated,
    };
    return mappedRow;
  });
  console.log('ERROR', resList);
  rows.value = resList;
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
