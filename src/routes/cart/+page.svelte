<div class="text-white px-96 py-12">
	<div class="flex justify-between items-center">
		<h1 class="text-4xl font-bold">Cart</h1>
		<a href="/categories" class="text-netural-400 underline hover:text-blue-500 duration-300"
			>Continue shopping</a
		>
	</div>
	<div class="py-12 flex flex-col space-y-4">
		{#if false}
			<p>Cart items...</p>
		{:else}
			<p class="text-center text-neutral-400 text-2xl mt-12">You cart is empty</p>
		{/if}
	</div>
	<div>
		{#if false}
			<div class="flex flex-col item-end space-y-4">
				<h2 class="text-xl font-bold">Total: $0 USD</h2>
				<button class="bg-blue-500 rounded-full px-4 py-2 font-bold hover:bg-blue-600 duration-300"
					>Proceed to checkout</button
				>
			</div>
		{/if}
	</div>
</div>
