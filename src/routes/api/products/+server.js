export const GET = async () => {
	const data = {
		title: 'T-shirt',
		price: 15
	};

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};
