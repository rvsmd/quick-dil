<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const tasks = computed(function () {
	return store.state.tasks;
});

const taskTitle = ref("");
const taskContent = ref("");

const tasksSort = computed(() =>
	tasks.value.slice().sort((a, b) => {
		return a.dateCreated - b.dateCreated;
	}),
);

const addTask = () => {
	if (taskTitle.value.trim() === "" || taskContent.value.trim() === "") return;
	store.commit("addTask", {
		title: taskTitle.value,
		content: taskContent.value,
		done: false,
		dateCreated: new Date().getTime(),
	});
};

const removeTask = (task) => {
	store.commit("removeTask", task);
};

watch(
	tasks,
	(newValue) => {
		localStorage.setItem("tasks", JSON.stringify(newValue));
	},
	{
		deep: true,
	},
);
</script>

<template>
	<main>
		<RouterLink class="navigate-link" to="/">Home</RouterLink>
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
				<button class="create-task-btn" @click.prevent="addTask">Add task</button>
			</form>
		</section>

		<section class="task-list">
			<h3>Task list</h3>
			<div id="task-list" class="list">
				<div v-for="task in tasksSort" :key="'task-' + task.dateCreated" class="task-item">
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
					<button class="task-delete" @click="removeTask(task)">Delete</button>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped>
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
}

.task-done {
	margin-top: 5px;
	width: 20px;
	height: 20px;
}

.list {
	margin: 5px;
}

.done {
	text-decoration: line-through;
}

.task-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	padding: 1rem;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
}

.task-item label {
	display: block;
	margin-right: 1rem;
	cursor: pointer;
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

.task-item {
	display: flex;
	align-items: center;
}

.task-delete {
	width: 100px;
	padding: 5px;
	border: none;
	background-color: red;
	color: #fff;
	border-radius: 5px;
}
</style>
