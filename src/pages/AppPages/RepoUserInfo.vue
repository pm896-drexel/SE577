<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white">
      <h6>GitHub Repo User Details</h6>
    </q-banner>
    <div class="row">
      <q-table
        title="GitHub Repo User Details"
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
    name: 'GitHubRepoUserDetails',
  };
  </script>
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { username } from 'src/githubRepos';

  type rowType = {
    id: string;
    name: string;
    url: string;
    numberOfRepos: string;
    numberOfGists: string;
    updated: string;
  };
  const columns = [
    { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
    { name: 'name', label: 'name', align: 'left', field: 'name', sortable: true },
    { name: 'url', label: 'URL', align: 'left', field: 'url', sortable: true },
    { name: 'numberOfRepos', label: 'Number Of Public Repos', align: 'left', field: 'numberOfRepos' },
    { name: 'numberOfGists', label: 'Number Of Public Gists', align: 'left', field: 'numberOfGists' },
    { name: 'updated', label: 'Updated', align: 'left', field: 'updated' },
  ];

  let rows = ref([] as rowType[]);
  onMounted(async () => {
    const res = await axios.get(
      `https://api.github.com/users/${username}`
    );
    rows.value = [];
    const rList = [res.data] as rowType[];
    const resList = rList.map((row) => {
      const mappedRow: rowType = {
        id: row.id,
        name: row.login,
        url: row.url,
        numberOfRepos: row.public_repos,
        numberOfGists: row.public_gists,
        updated: row.updated_at,
      };
      return mappedRow;
    });
    console.log('ERROR', resList);
    rows.value = resList;
  });
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>
