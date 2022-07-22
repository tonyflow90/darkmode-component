<script>
	import { page } from "$app/stores";
	import { routes } from "$lib/routes.js";

	export let open = false;
</script>

<aside class:open>
	<nav>
		<ul>
			{#each routes as route}
				<li class:active={$page.url.pathname === route.path}>
					<a sveltekit:prefetch href={route.path}>{route.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	aside {
		position: absolute;
		left: -100%;
		/* width: 100vw; */
		/* height: 100%; */
		/* top:0; */
		background-color: aliceblue;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}

	nav {
		display: flex;
		justify-content: start;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		margin: .5rem 0;
		height: 100%;
	}

	li.active a {
		--size: 6px;
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
	}
</style> 