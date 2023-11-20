import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-indigo-500 text-white p-4 flex justify-between">
      <div>App</div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </header>
  );
};
