import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="flex items-center justify-center content-center h-screen">
      <Link to={"./loans/overview"}>LOANS</Link>
    </main>
  );
}
