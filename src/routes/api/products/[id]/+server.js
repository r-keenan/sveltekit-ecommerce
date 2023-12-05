import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async ({ params }) => {
	try {
		const { id } = params;
		const product = await prisma.product.findUnique({
			where: {
				id: +id
			}
		});

		return new Response(
			JSON.stringify({
				product: product
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: 'Something went wrong when trying to get a product by its id.',
				error: error
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
};
