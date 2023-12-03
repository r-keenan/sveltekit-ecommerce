<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Button from '../lib/components/Button.svelte';
</script>

<Header />
<h1 class="text-red-500 text-4xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button buttonText="Click me" logMessage="You clicked" />
<Footer />
