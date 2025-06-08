import { revalidatePath } from "next/cache";

let lastFact: string | null = null;
export default function HomePage() {
  // Server Action to fetch the cat fact
  const getCatFact = async () => {
    "use server";
    const res = await fetch("https://catfact.ninja/fact", {
      cache: "no-store",
    });
    const data = (await res.json()) as { fact: string };
    lastFact = data.fact;
    revalidatePath("/"); // Re-render the page to show updated fact
  };

  return (
    <form
      action={getCatFact}
      className="flex flex-col gap-y-6 items-center justify-center min-h-screen bg-gray-600 p-4"
    >
      <h1 className="text-2xl font-bold text-white">Random Cat Fact</h1>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Get Cat Fact
      </button>
      <p className="mt-6 max-w-md text-center text-lg text-white">
        {lastFact || "Click the button to get a cat fact!"}
      </p>
    </form>
  );
}
