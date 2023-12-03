<script>
	import Button from '../lib/components/Button.svelte';
	export let data;
</script>

<div>
	<p class="white">
		{JSON.stringify(data)}
	</p>
</div>
