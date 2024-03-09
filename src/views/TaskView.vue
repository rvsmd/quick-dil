<template>
	<main>
		<task-form @addTask="addTask" />
		<section>
			<h3>Task list</h3>
			<div id="task-list" class="task-list">
				<transition-group name="transition-tasks">
					<Task
						v-for="task in tasksSort"
						:key="'task-' + task.dateCreated"
						:initial-task="task"
						@removeTask="removeTask"
					/>
				</transition-group>
			</div>
		</section>
	</main>
</template>

<script>
import Task from "@/components/ui/Task.vue";
import TaskForm from "@/components/ui/TaskForm.vue";
import { useTasks } from "@/hooks/useTasks";

export default {
	name: "TaskPage",
	components: {
		Task,
		TaskForm,
	},
	setup() {
		const { tasks, tasksSort, addTask, removeTask } = useTasks();

		return {
			tasks,
			tasksSort,
			addTask,
			removeTask,
		};
	},
};
</script>

<style lang="scss" scoped>
.task-list {
	margin: 5px;
}

.transition-tasks-enter-active,
.transition-tasks-leave-active {
	transition: all 0.4s ease;
}
.transition-tasks-enter-from,
.transition-tasks-leave-to {
	opacity: 0;
	transform: translateX(130px);
}
.transition-tasks-move {
	transition: transform 0.4s ease;
}
</style>
