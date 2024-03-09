<template>
	<div class="task-item">
		<div style="display: flex; flex: 1 1 0%; align-items: center">
			<label>
				<input v-model="task.done" class="task-done" type="checkbox" />
			</label>
			<div>
				<span>Title:</span>
				<input v-model="task.title" :class="`task-content ${task.done && 'done'}`" type="text" />
			</div>
			<div style="display: flex; flex: 1 1 0%; align-items: center">
				<span>Content:</span>
				<input v-model="task.content" :class="`task-content ${task.done && 'done'}`" type="text" />
			</div>
		</div>
		<button class="task-delete" @click.prevent="$emit('removeTask', task)">Delete</button>
	</div>
</template>

<script>
export default {
	name: "TaskComponent",
	props: {
		initialTask: {
			type: Object,
			required: true,
		},
	},
	emits: ["removeTask"],
	data() {
		return {
			task: this.initialTask,
		};
	},
};
</script>

<style lang="scss" scoped>
.done {
	text-decoration: line-through;
}

.task-done {
	margin-top: 5px;
	width: 20px;
	height: 20px;
}

.task-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	padding: 1rem;
	border-radius: 0.5rem;
	margin-bottom: 1rem;

	label {
		display: block;
		margin-right: 1rem;
		cursor: pointer;
	}
}

.task-content {
	flex: 1 1 0%;
	margin: 0 10px;
	padding: 5px;
	box-sizing: border-box;
	border: none;
	background-color: #fff;
	border-radius: 0.5rem;
	font-size: 16px;
}

.task-delete {
	width: 100px;
	padding: 5px;
	border: none;
	background-color: red;
	color: #fff;
	border-radius: 5px;
	cursor: pointer;
}
</style>
