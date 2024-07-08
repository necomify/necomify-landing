import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[88vh] w-full">
      <div className="h-full max-w-7xl w-full mx-auto px-4 flex flex-col items-center justify-center gap-4">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">Oops!</h2>
          <p className="text-muted-foreground">
            Looks like someone stole the page you were looking for.
          </p>
        </div>

        <Link href="/" className={buttonVariants({})}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
