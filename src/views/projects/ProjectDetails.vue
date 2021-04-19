<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.details }}</p>
    <p>The project id is {{ project.id }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      project: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects/' + this.id)
      //getting data from json and passing with response
      .then(res => res.json())
      //gets access to argument, data in json. populating projects: [] array with data
      .then(data => this.project = data)
      //if there is an error
      .catch(err => console.log(err.message))
  }
}
</script>

<style>
</style>