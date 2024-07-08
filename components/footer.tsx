import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Github, HeartIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-14">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <p className="text-center">
          Build by{" "}
          <Link
            className="px-1 underline underline-offset-2"
            href="https://github.com/nisabmohd"
          >
            Necomify
          </Link>{" "}
          with love ❤{" "}
        </p>
        <div className="gap-4 items-center hidden sm:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://github.com/necomify/necomify"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Github className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        GitHub
      </Link>
    </>
  );
}
