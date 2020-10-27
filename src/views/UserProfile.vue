<template>
	<div class="user-profile">
		<div class="user-profile__main">
			<div class="user-profile__name">
				<h1>@{{ user.username }}</h1>
			</div>
			<div class="user-profile__admin">
				<p v-if="user.isAdmin">Admin</p>
			</div>
			<div class="user-profile__followers">
				<strong>Followers: </strong>{{ followers }}
			</div>
		</div>
		<div>
			<CreateTwootPanel @add-twoot="addTwoot" />
		</div>
		<div class="user-profile__twoots-wrapper">
			<TwootItem
				v-for="twoot in user.twoots"
				:key="twoot.id"
				:twoot="twoot"
				:username="user.username"
				@favourite="toggleFavourite"
			/>
		</div>
	</div>
</template>

<script>
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel";
import { users } from "../assets/users";
export default {
	name: "UserProfile",
	components: {
		TwootItem,
		CreateTwootPanel,
	},
	data() {
		return {
			followers: 0,
			user: users[this.$route.params.userId - 1],
		};
	},

	methods: {
		toggleFavourite(id) {
			console.log(`Favourited tweet with id ${id}`);
		},
		addTwoot(content) {
			this.user.twoots.unshift({
				id: this.user.twoots.length + 1,
				body: content,
			});
		},
	},
	computed: {
		newTwootCharacterCount() {
			return this.newTwootContent.length;
		},
	},
};
</script>

<style lang="scss" scoped>
.user-profile__main {
	margin: 1.5rem;
	width: fit-content;
	padding: 1rem;
	height: auto;
	background: #fff;
	-webkit-box-shadow: 2px 2px 9px 7px rgba(15, 15, 15, 0.1);
	-moz-box-shadow: 2px 2px 9px 7px rgba(15, 15, 15, 0.1);
	box-shadow: 2px 2px 9px 7px rgba(15, 15, 15, 0.1);

	.user-profile__followers {
		font-size: 0.8rem;
	}

	.user-profile__admin p {
		color: white;
		background: rebeccapurple;
		border-radius: 5px;
		margin-right: auto;
		padding: 0.2rem;
		width: fit-content;
	}
}
</style>