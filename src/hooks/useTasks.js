import { computed, watch } from "vue";
import { useStore } from "vuex";

export function useTasks() {
	const store = useStore();
	const tasks = computed(() => store.state.task.tasks);
	const tasksSort = computed(() => store.getters["task/sortedTasks"]);
	const addTask = ({ taskTitle, taskContent }) => {
		if (taskTitle.trim() === "" || taskContent.trim() === "") return;
		store.commit(
			"task/addTask",
			{
				title: taskTitle,
				content: taskContent,
				done: false,
				dateCreated: new Date().getTime(),
			},
			{ root: true },
		);
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

	return {
		tasks,
		tasksSort,
		addTask,
		removeTask: (item) => store.commit("task/removeTask", item),
	};
}
