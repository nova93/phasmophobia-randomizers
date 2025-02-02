import { Card, CardFooter } from "@heroui/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Phasmophobia Randomizers</title>
        <meta
          name="description"
          content="Randomize your Phasmophobia experience"
        />
      </Head>
      <div className="flex justify-center py-12 gap-10 px-8 flex-wrap">
        <Card
          isFooterBlurred={true}
          className="border-none"
          radius="lg"
          isHoverable={true}
          isPressable={true}
          onPress={() => router.push("/ghost")}
        >
          <Image
            alt="Ghost"
            className="object-cover"
            height={400}
            src="/ghost.jpg"
            width={400}
          />
          <CardFooter>
            <p>Randomize ghosts</p>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred={true}
          className="border-none"
          radius="lg"
          isHoverable={true}
          isPressable={true}
          onPress={() => router.push("/location")}
        >
          <Image
            alt="Location"
            className="object-cover"
            height={400}
            src="/location.jpg"
            width={400}
          />
          <CardFooter>
            <p>Randomize locations</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
