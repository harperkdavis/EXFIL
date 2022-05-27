<script>
	import Content from './components/Content.svelte';
</script>

<main>
	<div class="container">
		<div class="blur">
			<Content />
		</div>
	</div>

</main>

<style>
	.container {

		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		background-image: url('./assets/background.jpg');
		background-position: 0px -40px;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.blur {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
</style>