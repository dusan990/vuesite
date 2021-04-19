<template>
	<header>
		<router-link to="/">Logo</router-link>

		<nav>
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/about">About</router-link></li>
				<li><a @click="toggleOpen" href="">Dropdown</a></li>
			</ul>
		</nav>
	</header>

	<button @click="redirect">Back to home</button>
	<button @click="back">Back</button>
	<button @click="forward">Forward</button>
	
	<router-view/>
</template>

<script>
export default {
	methods: {
		redirect() {
			this.$router.push({ name: 'Home' })
		},
		back() {
			this.$router.go(-1)
		},
		forward() {
			this.$router.go(1)
		}
	}
}
</script>

<style lang="scss">
@import "./styles/styles.scss";

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

header {
	display: flex;

	nav {
		margin-left: auto;
		ul {
			display: flex;

			li {
				margin-left: 16px;
			}
		}
	}
}
</style>
