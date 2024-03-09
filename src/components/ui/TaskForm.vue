<template>
	<section class="create-task">
		<h3>Create a task</h3>
		<form id="new-task-form">
			<input
				id="task-title"
				v-model="taskTitle"
				class="create-task-field"
				type="text"
				name="task-title"
				placeholder="Task title"
			/>
			<input
				id="task-content"
				v-model="taskContent"
				class="create-task-field"
				type="text"
				name="task-content"
				placeholder="Task content"
			/>
			<button class="create-task-btn" @click.prevent="$emit('addTask', { taskTitle, taskContent })">Add task</button>
		</form>
	</section>
</template>

<script>
export default {
	name: "TaskForm",
	emits: ["addTask"],
	data() {
		return {
			taskTitle: "",
			taskContent: "",
		};
	},
};
</script>

<style lang="scss" scoped>
.create-task-field {
	margin-top: 15px;
	width: 100%;
	padding: 15px;
	border: none;
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.create-task-btn {
	margin-top: 15px;
	width: 120px;
	padding: 5px;
	border: none;
	background-color: green;
	color: #fff;
	border-radius: 5px;
	cursor: pointer;
}
</style>
