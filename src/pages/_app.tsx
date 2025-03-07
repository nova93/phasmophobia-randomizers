import Header from "@/components/Header";
import "@/styles/globals.css";
import { HeroUIProvider } from "@heroui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <HeroUIProvider>
        <div className="dark text-foreground bg-background min-h-full">
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </HeroUIProvider>
    </>
  );
}
