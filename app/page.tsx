import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral min-h-screen">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Image src={"/logo_full.svg"} width={160} height={60} alt="The Logo" className="ml-2" />
        </div>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold">Discover Offshore Wind Sites</h1>
            <p className="py-6">Advanced Seabed Analysis for Sustainable Energy Development</p>
            <Link href="/" className="btn btn-primary btn-lg">Get Started</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
