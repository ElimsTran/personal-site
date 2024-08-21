"use client";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <h2>Something went wrong! Global</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
