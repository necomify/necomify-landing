import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getMarkdownForSlug } from "@/lib/markdown";
import { PropsWithChildren, cache } from "react";

type PageProps = {
  params: { slug: string[] };
};

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-12 ">
      <div className="flex-[3] py-10 ">
        <DocsBreadcrumb paths={slug} />
        <Markdown>
          <h1>{res.frontmatter.title}</h1>
          <p className="-mt-5 text-muted-foreground text-lg mb-3">
            {res.frontmatter.description}
          </p>
          {res.content}
          <Pagination pathname={pathName} />
        </Markdown>
      </div>
      <Toc path={pathName} />
    </div>
  );
}

function Markdown({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-neutral dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border">
      {children}
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    metadataBase: new URL("https://necomify.com"),
    title: "NECOMIFY - " + frontmatter.title,
    description: frontmatter.description,
    keywords:
      "E-commerce, Next.js, online store, dropshipping, SaaS, web development, Necomify",
    authors: [{ name: "Necomify Team" }],
    creator: "Necomify Team",
    openGraph: {
      title: "NECOMIFY - Create your own E-Commerce store in minutes",
      description:
        "Necomify is a modern, fast, and easy-to-use E-Commerce template that helps you build your online store in minutes.",
      url: "https://necomify.com",
      siteName: "NECOMIFY",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "NECOMIFY E-Commerce Boilerplate",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@necomify_com",
      creator: "@necomify_com",
      title: "NECOMIFY - Create your own E-Commerce store in minutes",
      description:
        "Necomify is a modern, fast, and easy-to-use E-Commerce platform that helps you build your online store in minutes.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "NECOMIFY E-Commerce Boilerplate",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/"),
  }));
}
