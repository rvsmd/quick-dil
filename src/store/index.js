import { createStore } from "vuex";

export default createStore({
	state: {
		tasks: JSON.parse(localStorage.getItem("tasks")) || [],
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
});
