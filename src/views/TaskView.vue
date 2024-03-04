<template>
	<main>
		<RouterLink class="navigate-link" to="/">Home</RouterLink>
		<TaskForm @addTask="addTask" />
		<section>
			<h3>Task list</h3>
			<div id="task-list" class="task-list">
				<Task v-for="task in tasksSort" :key="'task-' + task.dateCreated" :initial-task="task" @removeTask="removeTask" />
			</div>
		</section>
	</main>
</template>

<script setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import Task from "@/components/ui/Task.vue";
import TaskForm from "@/components/ui/TaskForm.vue";

const store = useStore();
const tasks = computed(() => store.state.tasks);

const tasksSort = computed(() =>
	tasks.value.slice().sort((a, b) => {
		return a.dateCreated - b.dateCreated;
	}),
);

const addTask = ({ taskTitle, taskContent }) => {
	if (taskTitle.trim() === "" || taskContent.trim() === "") return;
	store.commit("addTask", {
		title: taskTitle,
		content: taskContent,
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

<style scoped>
.task-list {
	margin: 5px;
}
</style>
