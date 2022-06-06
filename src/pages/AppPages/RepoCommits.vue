<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white">
      <h6>GitHub Repo Commits</h6>
    </q-banner>
    <div class="row">
      <q-table
        title="GitHub Repo commits from Github"
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
    name: 'GitHubRepoCommits',
  };
  </script>
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { username } from 'src/githubRepos';

  type rowType = {
    id: string;
    name: string;
    message: string;
    url: string;
    updated: string;
  };
  const columns = [
    { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
    { name: 'name', label: 'Author Name', align: 'left', field: 'name', sortable: true },
    { name: 'message', label: 'Commit Message', align: 'left', field: 'message', sortable: true },
    { name: 'url', label: 'URL', align: 'left', field: 'url' },
    { name: 'commitDate', label: 'Commit Date', align: 'left', field: 'updated' },
  ];

  let rows = ref([] as rowType[]);
  onMounted(async () => {
    const res = await axios.get(
      `https://api.github.com/repos/${username}/SE577/commits`
    );
    rows.value = [];
    const rList = res.data as rowType[];
    const resList = rList.map((row) => {
      const mappedRow: rowType = {
        id: row.sha,
        name: row.commit.author.name,
        message: row.commit.message,
        url: row.commit.url,
        updated: row.commit.author.date,
      };
      return mappedRow;
    });
    console.log('ERROR', resList);
    rows.value = resList;
  });
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>
