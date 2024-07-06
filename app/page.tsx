import Link from "next/link";
import {NavBar} from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral min-h-screen">
      <NavBar />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Discover Offshore Wind Sites</h1>
            <p className="py-6">Advanced Seabed Analysis for Sustainable Energy Development</p>
            <Link href="/map" className="btn btn-primary btn-lg">Get Started</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
