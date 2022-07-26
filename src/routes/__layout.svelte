<script>
	import { onMount } from "svelte";

	import Header from "$lib/Header.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import Sidebar from "$lib/Sidebar.svelte";
	import SidebarButton from "$lib/SidebarButton.svelte";

	import { page } from "$app/stores";
	
	import "../app.css";

	// Show mobile icon and display menu
	let showMobileMenu = false;
	let open = false;

	// Media match query handler
	const mediaQueryHandler = (e) => {
		// Reset mobile state
		if (e.matches) {
			showMobileMenu = true;
		} else {
			open = true;
		}
	};

	// Attach media query listener on mount hook
	onMount(async () => {
		import("darkmode-component");

		const mediaListener = window.matchMedia("(max-width: 767px)");
		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<Header>
	<div slot="left">
		<div class={showMobileMenu ? "hidden" : ""}>
			<SidebarButton bind:open />
		</div>
	</div>

	<div slot="right" class="headerRight">
		<darkmode-component />
	</div>
</Header>

<Sidebar bind:open />
<main>
	<slot />
</main>

<style>
	darkmode-component {
		--darkmode-switch-size: 30px;
        --darkmode-switch-text-color: var(--text-color);
        --darkmode-switch-slider-color: var(--pure-white);
        --darkmode-switch-background-color: var(--accent-color);
        --darkmode-switch-accent-color: var(--accent-color);
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.headerRight {
		display: flex;
		flex-direction: row;

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

	.hidden {
		display: none;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
