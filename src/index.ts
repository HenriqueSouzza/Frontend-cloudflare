/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
}

export default {
	async fetch(request: Request): Promise<Response> {
			const urlSplit = new URL(request.url)
	
			let domainAppPeople = `http://localhost:3000`;
			let domainAppCar = `http://localhost:3001`;

			let url = domainAppPeople
			
			if (urlSplit.pathname == '/car') {
				url = domainAppCar
			}
	
			request = new Request(url, request);
			request.headers.set('Origin', '*')

			let response = await fetch(request);
			response = new Response(response.body, response);
			
			response.headers.set('Access-Control-Allow-Origin', '*')

			return response
	}
};
