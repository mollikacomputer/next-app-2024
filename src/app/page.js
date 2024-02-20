import Counter from "@/components/counter/counter";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-3xl">Home Page</h2>
      <Counter />
    </main>
  );
}
