<template>
	<div class="home">
		<h1>Home</h1>
		<div class="userlist">
			<router-link
				class="users"
				v-for="user in users"
				:to="{ name: 'UserProfile', params: { userId: user.id } }"
				:key="user.id"
			>
				{{ user.username }}
			</router-link>
		</div>
	</div>
</template>

<script>
import { users } from "../assets/users";

export default {
	name: "Home",
	data() {
		return {
			users,
		};
	},
};
</script>

<style lang="scss">
.userlist {
	display: flex;
	flex-direction: column;

	.users {
		padding: 0.8rem;
	}
}
</style>