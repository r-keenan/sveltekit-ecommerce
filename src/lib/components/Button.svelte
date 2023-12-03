<script>
	export let buttonText;
	export let logMessage;
</script>

<button on:click={() => console.log(`${logMessage} ${buttonText}!`)}> {buttonText} </button>
