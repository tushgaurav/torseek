import type { Metadata } from "next";
import { PageTitle, Paragraph, Subtitle } from "@/components/shared/page";
import { DocsLayout } from "../../_components/page";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YTS - Tracker Documentation",
  description: "Complete guide to YTS (YIFY Torrents), the premier destination for high-quality movie torrents."
};

export default function YTSPage() {
  return (
    <DocsLayout
      title="YTS"
      breadcrumbs={[
        { title: "Docs", href: "/docs" },
        { title: "Trackers", href: "/docs" },
        { title: "YTS", href: "/docs/trackers/yts" },
      ]}
    >
      <div className="space-y-6">
        <div>
          <PageTitle>YTS / YIFY Torrents</PageTitle>
          <div className="flex gap-2 mt-4 flex-wrap">
            <Badge variant="default">Active</Badge>
            <Badge variant="outline">Movies Only</Badge>
            <Badge variant="outline">High Quality</Badge>
            <Badge variant="outline">Small File Sizes</Badge>
          </div>
        </div>

        <Separator />

        <div>
          <Subtitle>Overview</Subtitle>
          <Paragraph>
            YTS, formerly known as YIFY Torrents, is the successor to one of the most popular movie torrent 
            release groups in history. Specializing exclusively in movies, YTS has become the go-to source 
            for users who want high-quality video with remarkably small file sizes.
          </Paragraph>
          <Paragraph>
            The site is known for its clean, Netflix-like interface and its focus on providing movies in 720p 
            and 1080p quality with optimal compression. This makes it ideal for users with limited bandwidth 
            or storage space while still maintaining excellent visual quality.
          </Paragraph>
        </div>

        <div>
          <Subtitle>History & Interesting Facts</Subtitle>
          <div className="space-y-3">
            <Paragraph>
              <strong>YIFY Origins (2010):</strong> YIFY was founded by a mysterious figure known only as "Yify" 
              or "YIFY," whose real identity was Gilberto Sanchez from New Zealand. The group quickly became 
              famous for their efficient encoding that produced small file sizes without significant quality loss.
            </Paragraph>
            <Paragraph>
              <strong>Peak Popularity (2011-2015):</strong> At its height, YIFY releases accounted for an 
              estimated 20-30% of all movie torrents downloaded worldwide. Their releases were instantly 
              recognizable by the [YIFY] tag.
            </Paragraph>
            <Paragraph>
              <strong>Shutdown (2015):</strong> The original YIFY group shut down in October 2015 following a 
              lawsuit from the MPAA (Motion Picture Association of America). The settlement reportedly included 
              a significant financial penalty and a permanent injunction.
            </Paragraph>
            <Paragraph>
              <strong>YTS Revival (2015):</strong> Shortly after YIFY's closure, YTS.ag appeared, claiming to be 
              an official continuation by former YIFY members. While controversial, it adopted the same encoding 
              standards and interface design philosophy.
            </Paragraph>
            <Paragraph>
              <strong>Quality vs. Size Debate:</strong> YIFY/YTS releases sparked ongoing debates among video 
              enthusiasts. While praised for their small sizes, some criticized the audio quality and compression 
              artifacts, especially in action-heavy scenes.
            </Paragraph>
            <Paragraph>
              <strong>Cultural Impact:</strong> The [YIFY] tag became so iconic that it's still used as a quality 
              marker in torrenting communities, similar to how "Xerox" became synonymous with photocopying.
            </Paragraph>
            <Paragraph>
              <strong>Clean Interface Pioneer:</strong> YTS revolutionized torrent site design by introducing a 
              modern, streaming-service-like interface with movie posters, ratings, and trailers - a stark 
              contrast to the text-heavy layouts of traditional torrent sites.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Key Features</Subtitle>
          <div className="space-y-3">
            <Paragraph>
              <strong>Exceptional Compression:</strong> Movies typically range from 700MB (720p) to 2GB (1080p), 
              making them ideal for slow connections or limited storage.
            </Paragraph>
            <Paragraph>
              <strong>Beautiful Interface:</strong> Netflix-style layout with high-quality movie posters, 
              IMDb ratings, trailers, and detailed information for each release.
            </Paragraph>
            <Paragraph>
              <strong>Consistent Quality:</strong> All releases follow strict encoding standards, ensuring 
              predictable quality and file sizes.
            </Paragraph>
            <Paragraph>
              <strong>Multiple Resolution Options:</strong> Most movies are available in both 720p and 1080p, 
              with 4K options for select titles.
            </Paragraph>
            <Paragraph>
              <strong>Subtitle Support:</strong> Integrated subtitle downloads in multiple languages for most movies.
            </Paragraph>
            <Paragraph>
              <strong>Movie Information:</strong> Comprehensive details including plot summaries, cast, crew, 
              genre tags, and user ratings.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Official & Mirror Links</Subtitle>
          <Paragraph>
            <strong>Warning:</strong> Many fake YTS sites exist that may contain malware or crypto-mining scripts. 
            Only use verified mirrors and always have ad-blocking and anti-malware protection enabled.
          </Paragraph>

          <div className="mt-4 space-y-2">
            <Paragraph className="font-semibold">Common Mirror Domains:</Paragraph>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>yts.mx (Primary domain)</li>
              <li>yts.ag (Historical domain)</li>
              <li>yts.am</li>
              <li>yts.lt</li>
              <li>yts.unblockit.onl (Proxy)</li>
              <li>yts.proxyninja.org (Proxy)</li>
            </ul>
            <Paragraph className="text-sm text-muted-foreground mt-4">
              Note: Always verify SSL certificates and domain authenticity. Use a VPN for safer access.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Best Use Cases</Subtitle>
          <Paragraph>
            <strong>Limited Bandwidth:</strong> Perfect for users with slow internet connections or data caps.
          </Paragraph>
          <Paragraph>
            <strong>Mobile Viewing:</strong> Small file sizes are ideal for watching on phones and tablets.
          </Paragraph>
          <Paragraph>
            <strong>Storage Constraints:</strong> Great for building a large movie collection without consuming 
            massive amounts of disk space.
          </Paragraph>
          <Paragraph>
            <strong>Casual Viewing:</strong> Excellent quality for casual movie watching, though videophiles 
            may prefer higher-bitrate releases from other sources.
          </Paragraph>
        </div>

        <div>
          <Subtitle>Limitations</Subtitle>
          <Paragraph>
            <strong>Audio Quality:</strong> To achieve small file sizes, audio is often compressed more 
            aggressively than video, which may disappoint audiophiles.
          </Paragraph>
          <Paragraph>
            <strong>Limited Content:</strong> Only movies are available - no TV shows, music, software, or other content.
          </Paragraph>
          <Paragraph>
            <strong>Not for Large Screens:</strong> While great for laptops and smaller TVs, the compression 
            artifacts may be more noticeable on large 4K displays.
          </Paragraph>
        </div>

        <div>
          <Subtitle>External Resources</Subtitle>
          <div className="flex flex-col gap-2">
            <Link href="https://en.wikipedia.org/wiki/YTS.mx" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto justify-start">
                Wikipedia - YTS
              </Button>
            </Link>
            <Link href="https://en.wikipedia.org/wiki/YIFY" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto justify-start">
                Wikipedia - YIFY (Original Group)
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Subtitle>Pro Tip</Subtitle>
          <Paragraph>
            YTS releases are perfect for building a personal movie server on devices like Raspberry Pi or 
            low-powered NAS systems. The small file sizes mean you can store thousands of movies without 
            breaking the bank on storage.
          </Paragraph>
        </div>
      </div>
    </DocsLayout>
  );
}
