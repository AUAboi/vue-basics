<template>
	<div id="app">
		<header id="nav">
			<router-link to="/">
				<h1 class="title">Twiter</h1>
			</router-link>
			<router-link to="user/1">
				<h3 id="username">{{ user.username }}</h3>
			</router-link>
		</header>
	</div>
	<router-view />
</template>

<script>
export default {
	name: "App",

	data() {
		return {
			user: {
				username: "_AhsanAUA",
			},
		};
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background: rgb(222, 215, 224);
}

#nav {
	padding: 30px;
	display: flex;
	justify-content: space-between;
	background: rgb(223, 98, 119);
	a {
		font-weight: bold;
		color: #2c3e50;
	}
}

.title {
	color: #2c3e50;
}
</style>
