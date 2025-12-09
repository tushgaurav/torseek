import Search from "./_components/search";
import Doodle from "./_components/doodle";
import { Page } from "@/components/shared/page";
import { Metadata } from "next";
import { siteContent } from "@/content/content";

import Image from "next/image";
import background from "./_images/bg.png";

export const metadata: Metadata = {
  title: `${siteContent.structuredData.name} - ${siteContent.metadata.description}`,
  description: siteContent.metadata.description,
};


export default function Home() {
  return (
    <Page className="flex flex-col items-center justify-center flex-grow w-full">
      <Image src={background} alt="background" fill className="absolute inset-0 object-cover -z-10" />
      <Doodle />
      <Search />
    </Page>
  );
}
