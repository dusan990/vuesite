<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<Projects />
	</div>
</template>

<script>
import Projects from "../views/projects/Projects.vue";

export default {
	name: 'Home',
	components: {
		Projects
	}
}
</script>

