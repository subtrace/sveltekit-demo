<script>
  let message = "";

  async function getMessage() {
    const res = await fetch("/api/hello");
    const data = await res.json();
    message = data.message;
  }
</script>

<main>
  <h1>Trigger a GET request with the button.</h1>
  <button on:click={getMessage}>Make API call</button>
  <h2>{message}</h2>
</main>
