<template>
  <h1>Jobs</h1>
  <div v-if="projects.length">
    <div v-for="project in projects" :key="project.id">
      <router-link :to="{name: 'ProjectDetails', params: { id: project.id }}">
        <h2>{{ project.title }}</h2>
      </router-link>
    </div>
  </div>

  <p v-else>loading projects...</p>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      //getting data from json and passing with response
      .then(res => res.json())
      //gets access to argument, data in json. populating projects: [] array with data
      .then(data => this.projects = data)
      //if there is an error
      .catch(err => console.log(err.message))
  }
}
</script>

<style>
  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style>