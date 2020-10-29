<template>
	<div id="app">
		<header id="nav">
			<router-link to="/">
				<h1 class="title">Twiter</h1>
			</router-link>
			<div>
				<h3 id="username" v-if="user">{{ user.username }}</h3>
			</div>
		</header>
	</div>
	<router-view />
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
	name: "App",
	setup() {
		const store = useStore();
		const user = computed(() => store.state.User.user);
		return {
			user,
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
