<script>
</script>

<header>
	<div>
		<slot name="left" />
	</div>
	<div class="middle">
		<slot></slot>
	</div>
	<div>
		<slot name="right" />
	</div>
</header>

<style>
	header {
		display: flex;
		background-color: var(--primary-color);
	}
	header * {
		margin: 0 1rem;
	}
	header .middle {
		flex: 1;
	}
</style>
