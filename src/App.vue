<script setup>
import { RouterView } from "vue-router";
</script>

<template>
	<div>
		<navbar />
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
	components: {
		Navbar,
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
