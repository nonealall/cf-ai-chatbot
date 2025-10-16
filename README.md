# cf_ai_chatbot

A simple chatbot I built using Cloudflare's AI platform. It uses Llama 3.3 to have conversations and remembers what you've talked about during your session.

## What's inside

I used a few different Cloudflare services to make this work:
- **The AI part**: Llama 3.3 running on Cloudflare's Workers AI - basically does all the thinking
- **Backend**: A Cloudflare Worker that handles the API requests and talks to the AI
- **Frontend**: Just a plain HTML page hosted on Cloudflare Pages - kept it simple
- **Memory**: Keeps track of your last 20 messages so the conversation actually makes sense

## Running it locally

It's pretty straightforward to get this running on your machine:
```bash
# First, grab the dependencies
npm install

# Start up the worker
npx wrangler dev

# Then just open public/index.html in your browser
```

The chat should connect to localhost:8787 automatically.

## Deploying it

If you want to put this live:
```bash
# Deploy the backend first
npx wrangler deploy

# Update the API_URL in public/index.html with whatever URL you got
# Then deploy the frontend
npx wrangler pages deploy public --project-name=cf-ai-chatbot
```

## Try it out
[I'll add the link once it's deployed]

## Built with
- Cloudflare Workers for the backend
- Workers AI running Llama 3.3
- Cloudflare Pages for hosting
- TypeScript (because types are nice)
- Just vanilla JavaScript on the frontend - no frameworks needed

---

Feel free to fork this and mess around with it. The AI model can be swapped out pretty easily if you want to try different ones.