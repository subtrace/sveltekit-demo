# SvelteKit + Subtrace

This repo shows how to add [Subtrace](https://subtrace.dev) to a sample SvelteKit app.
Subtrace connects your server to Chrome DevTools so that you can inspect the status,
headers, payload, and latency of each request.

Clone this repo, and download Subtrace on your machine:

```bash
curl -fSLO "https://subtrace.dev/download/$(uname -s)/$(uname -m)/subtrace" && chmod +x ./subtrace
```

Then get a `SUBTRACE_TOKEN` from the Subtrace [dashboard](https://subtrace.dev/dashboard)
for free and set it as an environment variable.

```bash
# get a tracer token for free at https://subtrace.dev/dashboard
export SUBTRACE_TOKEN=subt_...xxxxx
```

Start the SvelteKit app with Subtrace.

```bash
npm install
npm run build
./subtrace run -- npm run dev
```

That's it! You can now visit [localhost:5173](localhost:5173) and make requests
to the app that show up on the Subtrace dashboard in realtime:

https://github.com/user-attachments/assets/f4b7b3de-41e9-48ca-8707-cd6ac1868b3c
