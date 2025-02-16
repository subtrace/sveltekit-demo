let count = 0;

export function GET(): Response {
  count++;
  return new Response(
    JSON.stringify({
      message: `Called ${count} ${count === 1 ? "time" : "times"}.`,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
