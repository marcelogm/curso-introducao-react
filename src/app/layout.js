"use client";
import Head from "next/head";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { url: "/learn-state", text: "1. States e Props" },
  { url: "/learn-hooks", text: "2. Outros hooks" },
  { url: "/learn-iteration", text: "3. Listas" },
  { url: "/learn-fetch", text: "4. Busca de dados" },
  { url: "/learn-custom-hooks", text: "5. Hooks customizados" },
];

export default function RootLayout({ children }) {
  // Tem um monte de coisa legal acontecendo aqui
  // Inclusive routing utilizando next
  const pathname = usePathname();
  const items = menu.map((it) => {
    const active = pathname == it.url ? "text-blue-900" : "text-blue-500";
    return (
      <li key={it.url}>
        <Link
          href={it.url}
          className={"font-bold p-2 pb-1 pt-1 mr-2 rounded " + active}
        >
          {it.text}
        </Link>
      </li>
    );
  });

  return (
    <html lang="en">
      <Head>
        <title>Introducao ao React</title>
      </Head>
      <body>
        <ul className="flex justify-center p-4 bg-gray-50">{items}</ul>
        {children}
      </body>
    </html>
  );
}
