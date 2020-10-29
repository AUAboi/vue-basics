<template>
	<form
		class="user-profile__create-twoot"
		:class="{
			'--exceeded':
				newTwootCharacterCount > 180 || state.invalidContent !== true,
		}"
		@submit.prevent="createNewTwoot"
	>
		<label for="newTwoot"
			><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)</label
		>
		<textarea
			id="newTwoot"
			@keyup="checkContent"
			v-model="state.newTwootContent"
		></textarea>
		<p v-if="!state.invalidContent">Jojo Reference Required</p>

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
			<button
				v-if="state.invalidContent"
				class="user-profile__submit"
				type="submit"
			>
				Twoot
			</button>
			<button v-else class="user-profile__submit -invalid" disabled>
				Twoot
			</button>
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
			invalidContent: true,
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

		function checkContent() {
			let string = state.newTwootContent.toLowerCase();
			let keywords = [
				"jojo",
				"refrence",
				"muda",
				"ora",
				"arrivederci",
				"wry",
				"yare",
				"daze",
				"menacing",
				"omg",
				"yes!",
				"no!",
				"i am!",
				"i am",
				"great",
				"stand",
				"powa",
				"requiem",
			];
			for (var keyword of keywords) {
				let str_pos = string.indexOf(keyword);
				if (str_pos > -1) {
					state.invalidContent = true;
					break;
				} else {
					state.invalidContent = false;
				}
			}
		}

		return {
			state,
			newTwootCharacterCount,
			checkContent,
			createNewTwoot,
		};
	},
};
</script>

<style lang="scss" scoped>
.user-profile__submit {
	padding: 0.3rem;
	margin: 0.4rem;

	&.-invalid {
		opacity: 0.4;
	}
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