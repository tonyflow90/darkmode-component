<script>
	import { enhance } from "$lib/form";
	import { scale } from "svelte/transition";
	import { flip } from "svelte/animate";

	import Workout from "$lib/data/Workout.js";

	import workouts from "$lib/stores/workouts.js";

	let addWorkout = () => {
		$workouts = [...$workouts, new Workout()];
	};
</script>

<svelte:head>
	<title>Workouts</title>
	<meta name="description" content="A workout list app" />
</svelte:head>

<button on:click={addWorkout}>add +</button>

<div class="workouts">
	<h1>workouts</h1>

	{#each $workouts as w}
		<li>
			<a sveltekit:prefetch href="workouts/{w.uid}">{w.name}</a>
		</li>
	{/each}
</div>

<style>
</style>
