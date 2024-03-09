export const taskModule = {
	state: () => ({
		tasks: JSON.parse(localStorage.getItem("tasks")) || [],
	}),
	getters: {
		sortedTasks(state) {
			return state.tasks.slice().sort((a, b) => {
				return a.dateCreated - b.dateCreated;
			});
		},
	},
	mutations: {
		addTask(state, item) {
			state.tasks.push(item);
		},
		updateTask(state, updatedItem) {
			state.tasks = state.task.map((item) => {
				if (item.dateCreated === updatedItem.dateCreated) return updatedItem;
				return item;
			});
		},
		removeTask(state, removeItem) {
			state.tasks = state.tasks.filter((item) => {
				return item.dateCreated !== removeItem.dateCreated;
			});
		},
	},
	actions: {},
	namespaced: true,
};
