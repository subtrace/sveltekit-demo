# SvelteKit + Subtrace

This repo shows how to add [Subtrace](https://subtrace.dev) to a sample SvelteKit app.
Subtrace connects your server to Chrome DevTools so that you can inspect the status,
headers, payload, and latency of each request.

Download Subtrace on your machine:

```bash
curl -fSLO "https://subtrace.dev/download/$(uname -s)/$(uname -m)/subtrace" && chmod +x ./subtrace
```

Clone this repo, and start the SvelteKit app with Subtrace.

```bash
npm install
npm run build
./subtrace run -- npm run dev
```

Open the `subt.link` URL that shows up in your terminal to go to the Subtrace dashboard:

![image](https://github.com/user-attachments/assets/3922fad9-74a4-4575-a9df-f6424f54072b)

That's it! You can now visit [localhost:5173](localhost:5173) and make requests
to the app that show up on the Subtrace dashboard in realtime.
