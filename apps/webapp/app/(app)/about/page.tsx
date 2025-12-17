import type { Metadata } from "next";
import { Page, Paragraph, Subtitle } from "@/components/shared/page";
import ReactPlayer from 'react-player'

export const metadata: Metadata = {
  title: "About - torseek",
  description: "Learn about torseek and how it works",
}

export default function AboutPage() {
  return (
    <Page>
      <Subtitle className="mb-4">The front page of the decentralized web</Subtitle>
      <ReactPlayer 
        src='https://www.youtube.com/watch?v=U51MSK6nSQE' 
        width={600}
        height={300}
        controls={true}
      />
      <Paragraph className="mt-6">
        TorSeek is a search engine that scans the biggest torrent sites on the web and puts all the results in one place.
        Instead of navigating through blocked websites, slow connections, and clutter, you get a clean, fast list of exactly what you are looking for.
      </Paragraph>

      <Subtitle>How it works</Subtitle>
      <Paragraph>
        TorSeek is a meta-search engine. When you type a query into our search bar, we don't just look in one place. 
        We utilize powerful indexing technology to query dozens of the world's most popular public trackers simultaneously.
        <br />
        We aggregate these results, filter out the noise, and present them to you in a unified, modern interface. 
        We don't host any files; we simply help you find where they live.
      </Paragraph>
    </Page>
  );
}