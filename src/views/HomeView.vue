<script setup></script>

<template>
	<main>
		<header class="header">
			<h3>КВИК ДИЛ ТЕСТОВОЕ ЗАДАНИЕ</h3>
		</header>
		<div style="margin-top: 20px">
			<span>Чтобы перейти на страницу со списком задач нажмите сюда -></span>
			<RouterLink to="/task">
				<a class="navigate-link"> Task list </a>
			</RouterLink>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.header {
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #bebebe;

	h3 {
		margin: auto;
		font-size: 20px;
	}
}

.navigate-link {
	margin: 0 20px;
	color: #007963;
	font-size: 20px;
	letter-spacing: 1px;
	text-decoration: none;
}

.navigate-link:link {
	color: #265301;
}

.navigate-link:visited {
	color: #437a16;
}

.navigate-link:focus {
	border-bottom: 1px solid;
	background: #bae498;
}

.navigate-link:hover {
	border-bottom: 1px solid;
	background: #cdfeaa;
}

.navigate-link:active {
	background: #265301;
	color: #cdfeaa;
}
</style>
