<template>
	<div class="navbar">
		<h3>Vue 3 - тестовое задание</h3>
		<div class="navbar__btns-container">
			<button class="nav__btn" @click="$router.push('/')">На главную</button>
			<button class="nav__btn" @click="$router.push('/tasks')">Задачи</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavbarComponent",
};
</script>

<style scoped>
.navbar {
	height: 50px;
	background-color: lightgray;
	box-shadow: 2px 2px 4px gray;
	display: flex;
	align-items: center;
	padding: 0 15px;
}
.navbar__btns-container {
	margin-left: auto;
}

.nav__btn {
	margin-left: 10px;
	padding: 10px;
	background: none;
	color: gray;
	border: 1px solid gray;
	color: rgb(0, 0, 0);
	cursor: pointer;
}
</style>
