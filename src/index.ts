export interface Env {
	AI: any;
  }
  
  interface ChatRequest {
	message: string;
	history?: Array<{ role: string; content: string }>;
  }
  
  export default {
	async fetch(request: Request, env: Env): Promise<Response> {
	  if (request.method === 'OPTIONS') {
		return new Response(null, {
		  headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		  },
		});
	  }
  
	  if (request.method === 'POST') {
		const body = await request.json() as ChatRequest;
		const { message, history = [] } = body;
		
		const messages = [
		  { role: 'system', content: 'You are a helpful AI assistant.' },
		  ...history,
		  { role: 'user', content: message }
		];
  
		// Use Llama 3.3 on Workers AI
		const response = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
		  messages: messages,
		});
  
		return new Response(JSON.stringify({ response: response.response }), {
		  headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		  },
		});
	  }
  
	  return new Response('AI Chatbot API - Use POST to /api', {
		headers: { 'Content-Type': 'text/plain' },
	  });
	},
  };