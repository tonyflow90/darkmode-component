<script>
	import { page } from "$app/stores";
	import { routes } from "$lib/routes.js";
</script>

<nav>
	<ul>
		{#each routes as route}
			<li class:active={$page.url.pathname === route.path}>
				<a sveltekit:prefetch href={route.path}>{route.name}</a>
			</li>
		{/each}
	</ul>
</nav>


<style>
	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active a {
		color: var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 1.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
		border: var(--size) solid transparent;
		border-bottom: 6px solid var(--accent-color);
	}
</style> 

