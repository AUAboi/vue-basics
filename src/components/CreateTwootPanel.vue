<template>
	<form
		class="user-profile__create-twoot"
		:class="{ '--exceeded': newTwootCharacterCount > 180 }"
		@submit.prevent="createNewTwoot"
	>
		<label for="newTwoot"
			><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)</label
		>
		<textarea id="newTwoot" v-model="state.newTwootContent"></textarea>

		<div class="user-profile__create-twoot-type">
			<label for="newTwootType"><strong>Type</strong></label>
			<select id="newTwootType" v-model="state.selectedTwootType">
				<option
					:value="option.value"
					v-for="(option, index) in state.twootTypes"
					:key="index"
				>
					{{ option.name }}
				</option>
			</select>
			<br />
			<button class="user-profile__submit" type="submit">Twoot</button>
		</div>
	</form>
</template>

<script>
import { reactive, computed } from "vue";

export default {
	name: "CreateTwootPanel",
	setup(props, ctx) {
		const state = reactive({
			newTwootContent: "",
			selectedTwootType: "instant",
			twootTypes: [
				{
					value: "draft",
					name: "Draft",
				},
				{
					value: "instant",
					name: "Instant Twoot",
				},
			],
		});

		const newTwootCharacterCount = computed(() => state.newTwootContent.length);

		function createNewTwoot() {
			if (state.newTwootContent && state.selectedTwootType !== "draft") {
				ctx.emit("add-twoot", state.newTwootContent);
			} else if (state.newTwootContent && state.selectedTwootType == "draft") {
				alert("One twoot Added to draft \n" + state.newTwootContent);
			}
			state.newTwootContent = "";
		}

		return {
			state,
			newTwootCharacterCount,
			createNewTwoot,
		};
	},
};
</script>

<style lang="scss" scoped>
.user-profile__submit {
	padding: 0.3rem;
	margin: 0.4rem;
}

.user-profile__twoots-wrapper {
	display: flex;
	flex-direction: column;
}

.user-profile__create-twoot {
	padding: 1rem;
	display: flex;
	flex-direction: column;
}

.user-profile__create-twoot textarea {
	margin: 0.5rem;
}

.user-profile__create-twoot textarea:focus {
	outline: rgb(255, 0, 247);
}

.user-profile__create-twoot-type {
	padding: 1rem;
	margin: 0.6rem;
}

.--exceeded {
	color: red;
	border: red;
}
</style>