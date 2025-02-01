import locations, { Tags } from "@/config/locations";
import Head from "next/head";

export default () => {
  return (
    <>
      <Head>
        <title>Map - Phasmophobia Randomizers</title>
        <meta name="description" content="Randomize your Phasmophobia Maps" />
      </Head>
      <div>
        <h1>Randomize Map - WORK IN PROGRESS</h1>
        <p>Select all by tag: {Object.values(Tags).map((tag) => `${tag} `)}</p>
        {locations.map((location) => (
          <p key={location.name}>{location.name}</p>
        ))}
      </div>
    </>
  );
};
