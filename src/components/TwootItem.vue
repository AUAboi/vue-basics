<template>
	<div class="twoot" @click="favouriteTwoot(twoot.id)">
		<div class="twoot-wrapper">
			<p class="twoot-wrapper__username">@_{{ username }}</p>
			<p class="twoot-wrapper__content">
				{{ twoot.body }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "TwootItem",
	props: {
		username: {
			required: true,
		},
		twoot: {
			required: false,
		},
	},
	methods: {
		favouriteTwoot(id) {
			this.$emit("favourite", id);
		},
	},
};
</script>

<style lang="scss" scoped>
.twoot {
	padding: 1em;
	margin: 1.4rem 3.4rem;
	background-color: rgb(247, 241, 241);
	transition: all 0.25s ease-out;

	&:hover {
		cursor: pointer;
		transform: scale(1.1, 1.1);
	}

	.twoot-wrapper__username {
		color: rebeccapurple;
		font-style: italic;
		font-size: 1.4rem;
	}

	.twoot-wrapper__content {
		color: gray;
	}
}
</style>