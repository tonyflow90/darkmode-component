<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    import workouts from "$lib/stores/workouts.js";

    import Workout from "$lib/data/Workout.js";
    import Exercise from "$lib/data/Exercise.js";

    onMount(async () => {
        let id = $page.params.id;
        workoutIndex = $workouts.findIndex((w) => w.uid == id);
    });

    let addExercise = () => {
        $workouts[workoutIndex].exercises = [
            ...$workouts[workoutIndex].exercises,
            new Exercise(),
        ];
    };

    let workoutIndex = undefined;
</script>

<svelte:head>
    <!-- <title>{$workouts[workoutIndex].name}</title> -->
</svelte:head>

{#if workoutIndex != undefined}
    <button on:click={addExercise}>add +</button>

    <div class="workouts">
        <h1>{$workouts[workoutIndex].name}</h1>

        <form on:submit={addExercise}>
            {#each $workouts[workoutIndex].exercises as e}
                <label for="idExerciseName">name</label>
                <input id="idExerciseName" type="text" bind:value={e.name} />
                <label for="idExerciseTimeRange">time</label>
                <div class="time-slider">
                    <input
                        id="idExerciseTimeRange"
                        type="range"
                        min="0"
                        max="300000"
                        bind:value={e.time}
                    />
                    <input
                        id="idExerciseTimeInput"
                        type="tel"
                        disabled
                        min="0"
                        max="300000"
                        step="1"
                        bind:value={e.time}
                    />
                    <span>s</span>
                </div>

                <label for="idExerciseDescription">description</label>
                <textarea
                    id="idExerciseDescription"
                    rows="4"
                    bind:value={e.description}
                />
            {/each}
            <input type="submit" value="Submit" />
        </form>
    </div>
{/if}

<style>
    .time-slider {
        display: flex;
        width: 100%;
    }
    .time-slider input[type="range"] {
        width: 100%;
    }
    .time-slider input[type="tel"] {
        width: 10vw;
    }
    input[type="text"] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }

    textarea {
        width: 100%;
    }
</style>
