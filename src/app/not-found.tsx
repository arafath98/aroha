import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center select-none">
      <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
      <p className="mt-4 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Return Home
      </Link>
    </div>
  );
}
