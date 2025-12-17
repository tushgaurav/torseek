import type { Metadata } from "next";
import { PageTitle, Paragraph, Subtitle } from "@/components/shared/page";
import { DocsLayout } from "../../_components/page";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RARBG - Tracker Documentation",
  description: "Information about RARBG, a beloved torrent tracker that served the community from 2008 to 2023."
};

export default function RARBGPage() {
  return (
    <DocsLayout
      title="RARBG"
      breadcrumbs={[
        { title: "Docs", href: "/docs" },
        { title: "Trackers", href: "/docs" },
        { title: "RARBG", href: "/docs/trackers/rarbg" },
      ]}
    >
      <div className="space-y-6">
        <div>
          <PageTitle>RARBG</PageTitle>
          <div className="flex gap-2 mt-4 flex-wrap">
            <Badge variant="destructive">Shutdown</Badge>
            <Badge variant="outline">2008-2023</Badge>
            <Badge variant="outline">General Purpose</Badge>
            <Badge variant="outline">High Quality</Badge>
          </div>
        </div>

        <Separator />

        <div>
          <Subtitle>Service Discontinued</Subtitle>
          <Paragraph>
            RARBG permanently shut down on May 31, 2023. The site's operators cited rising costs, legal 
            pressures, and personal health issues as reasons for closure. This page serves as historical 
            documentation of one of the most beloved torrent trackers.
          </Paragraph>
        </div>

        <div>
          <Subtitle>Overview</Subtitle>
          <Paragraph>
            RARBG was a Bulgarian-based torrent tracker that operated from 2008 to 2023. It earned a reputation 
            as one of the highest-quality and most reliable torrent sources, featuring carefully curated content 
            across movies, TV shows, games, software, and music.
          </Paragraph>
          <Paragraph>
            What set RARBG apart was its commitment to quality control. The site's team actively encoded and 
            released their own torrents (marked with the RARBG tag), ensuring consistent quality. They also 
            maintained strict standards for what content was allowed, keeping fake and low-quality files to a minimum.
          </Paragraph>
        </div>

        <div>
          <Subtitle>History & Timeline</Subtitle>
          <div className="space-y-3">
            <Paragraph>
              <strong>Foundation (2008):</strong> RARBG was established as a BitTorrent tracker and index, 
              based in Bulgaria. The name stood for "Rapid And Real Best Gaming," though the site quickly 
              expanded beyond games.
            </Paragraph>
            <Paragraph>
              <strong>Early Years (2008-2014):</strong> Built a reputation for quality releases, particularly 
              in gaming and movies. The site's distinctive green interface became recognizable across the 
              torrenting community.
            </Paragraph>
            <Paragraph>
              <strong>UK Block (2014):</strong> RARBG became one of the first torrent sites blocked by UK ISPs, 
              following a High Court order. This led to the creation of numerous proxy and mirror sites.
            </Paragraph>
            <Paragraph>
              <strong>Peak Years (2016-2021):</strong> Following the closure of KickassTorrents and other major 
              competitors, RARBG rose to become one of the top 3 most-visited torrent sites globally. The site 
              consistently ranked in the Alexa top 500 websites worldwide.
            </Paragraph>
            <Paragraph>
              <strong>Scene Recognition:</strong> RARBG's own release group (RARBG/RARBGx265) became highly 
              respected in the Scene for their quality encodes. Their x265/HEVC releases were particularly 
              praised for balancing quality and file size.
            </Paragraph>
            <Paragraph>
              <strong>COVID-19 Impact (2020-2022):</strong> During the pandemic, RARBG saw unprecedented traffic 
              as more people turned to torrenting. However, the operators also began facing increased costs and 
              legal pressures.
            </Paragraph>
            <Paragraph>
              <strong>Final Shutdown (May 31, 2023):</strong> RARBG closed without warning, leaving only a 
              farewell message citing "covid, war in Europe, inflation" and team members' health issues as reasons. 
              The closure shocked the torrenting community, as the site had shown no signs of trouble.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>What Made RARBG Special</Subtitle>
          <div className="space-y-3">
            <Paragraph>
              <strong>Quality Control:</strong> Unlike many public trackers that allowed anyone to upload, 
              RARBG maintained strict quality standards. The team verified most uploads and banned users who 
              uploaded poor-quality or fake content.
            </Paragraph>
            <Paragraph>
              <strong>Own Releases:</strong> RARBG's in-house encoding team produced high-quality releases that 
              were often better than those from other public sources. Their x265 encodes were particularly 
              efficient, offering excellent quality at reasonable file sizes.
            </Paragraph>
            <Paragraph>
              <strong>Top 10 Lists:</strong> The site featured curated "Top 10" lists for movies, TV shows, and 
              games, making it easy to discover popular content. These lists were updated daily and became a 
              trusted resource.
            </Paragraph>
            <Paragraph>
              <strong>Clean Design:</strong> While not the most modern interface, RARBG's design was functional, 
              ad-light (by torrent site standards), and easy to navigate.
            </Paragraph>
            <Paragraph>
              <strong>Active Community:</strong> Featured an engaged community that left helpful comments on 
              torrents, warning about quality issues or praising good releases.
            </Paragraph>
            <Paragraph>
              <strong>Fast Availability:</strong> New releases appeared on RARBG remarkably quickly, often within 
              hours of becoming available. The site had excellent Scene connections.
            </Paragraph>
            <Paragraph>
              <strong>Comprehensive Categories:</strong> While known for movies and TV, RARBG also had excellent 
              collections of games (especially PC and console), software, music, and adult content.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Technical Excellence</Subtitle>
          <Paragraph>
            <strong>x265/HEVC Pioneers:</strong> RARBG was an early adopter of x265/HEVC encoding, producing 
            releases that were 40-50% smaller than x264 equivalents while maintaining similar quality.
          </Paragraph>
          <Paragraph>
            <strong>Proper Naming:</strong> All RARBG releases followed proper Scene naming conventions, making 
            them easy to organize and manage in media libraries.
          </Paragraph>
          <Paragraph>
            <strong>NFO Files:</strong> Included detailed NFO files with technical specifications, allowing users 
            to know exactly what they were downloading.
          </Paragraph>
          <Paragraph>
            <strong>Verified Torrents:</strong> Most torrents were verified by RARBG staff or trusted uploaders, 
            significantly reducing the risk of malware or fake files.
          </Paragraph>
        </div>

        <div>
          <Subtitle>Legacy & Impact</Subtitle>
          <Paragraph>
            RARBG's closure left a significant void in the torrenting ecosystem. While other sites like 1337x 
            and ThePirateBay continue to operate, many users felt that RARBG's combination of quality, reliability, 
            and community was irreplaceable.
          </Paragraph>
          <Paragraph>
            Several sites attempted to fill the gap, including TorrentGalaxy and other indexers that began 
            hosting RARBG release group content. However, without the original team, the quality control and 
            curation that made RARBG special were lost.
          </Paragraph>
          <Paragraph>
            The site's farewell message resonated with millions of users worldwide, many of whom shared memories 
            and gratitude for the 15 years of service. RARBG's shutdown marked the end of an era in torrenting 
            history.
          </Paragraph>
        </div>

        <div>
          <Subtitle>External Resources</Subtitle>
          <div className="flex flex-col gap-2">
            <Link href="https://en.wikipedia.org/wiki/RARBG" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto justify-start">
                Wikipedia - RARBG
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Subtitle>Community Remembrance</Subtitle>
          <Paragraph>
            "RARBG was more than just a torrent site. It was a carefully curated library maintained by 
            people who genuinely cared about quality. The internet is a little less organized without it." 
            - Sentiment shared across the torrenting community after the shutdown
          </Paragraph>
        </div>
      </div>
    </DocsLayout>
  );
}
