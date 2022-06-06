<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white">
      <h6>GitHub Repo Gists for pm896</h6>
    </q-banner>
    <div class="row">
      <q-table
        title="GitHub User Gists"
        dense
        :rows="rows"
        :columns="columns"
        row-key="id"
      />
    </div>
  </div>
 <div>
          <div><strong>REPO LIST - {{ label }}</strong> </div>
          <div class="text-left">
            {{ repos }} <br>
            {{ reposAuth }}
          </div>
        </div>
        <q-form @submit="onSubmit" @reset="onReset"  class="q-gutter-md">
  <div class="q-pa-sm q-gutter-sm">
           <q-btn label="GH UnAuthenticated" type="submit" color="primary" />
           <q-btn label="GH Authenticated" @click="onAuth()" color="secondary" />
           <q-btn
             label="Reset"
             type="reset"
             color="primary"
             flat
             class="q-ml-sm"
           />
         </div>
         </q-form>
</template>

<script lang="ts">
export default {
  name: 'GitHubGists',
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { username, token } from 'src/githubRepos';

type rowType = {
  id: string;
  user: string;
  url: string;
  gistFileDetails: string;
  updated: string;
  description: string;
};

const columns = [
  { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
  { name: 'user', label: 'user', align: 'left', field: 'user', sortable: true },
  { name: 'url', label: 'URL', align: 'left', field: 'url', sortable: true },
  { name: 'gistFileNames', label: 'Gist File Names', align: 'left', field: 'gistFileNames' },
  { name: 'updated', label: 'Updated', align: 'left', field: 'updated' },
  { name: 'description', label: 'Description', align: 'left', field: 'description' },
];

let rows = ref([] as rowType[]);

onMounted(async () => {
  const res = await axios.get(
    `https://api.github.com/users/${username}/gists`
  );
  rows.value = [];
  const rList = res.data as rowType[];
  const resList = rList.map((row) => {
    const mappedRow: rowType = {
      id: row.id,
      user: row.owner.login,
      url: row.url,
      gistFileNames: String(Object.keys(row.files)),
      updated: row.updated_at,
      description: row.description,
    };
    return mappedRow;
  });
  console.log('ERROR', resList);
  rows.value = resList;
});

let repos = ref({});
let reposAuth = ref({});
let label = ref('NONE');

const onReset = () => {
  repos.value = {};
  reposAuth.value = {};
  label.value = 'NONE';
};
const onSubmit = async () => {
 repos.value = {};
 reposAuth.value = {};
await axios.get(
    `https://api.github.com/users/${username}`
  ).then((res_unauth) => {repos.value = res_unauth.data;
     label.value = 'UNAUTHENTICATED'});
     console.log('INFO', 'unauthenticated called');
};
const onAuth = async () => {
 reposAuth.value = {};
 repos.value = {};
 await axios.get(
    `https://api.github.com/users/${username}`,
    {
      headers: {
          'Accept': 'application/vnd.GitHub.v3+json',
         'Authorization': `token ${token}`
       }}
  ).then((res) => {reposAuth.value = res.data;
  label.value = 'AUTHENTICATED';});
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
