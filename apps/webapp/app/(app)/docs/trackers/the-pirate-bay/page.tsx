import type { Metadata } from "next";
import { PageTitle, Paragraph, Subtitle } from "@/components/shared/page";
import { DocsLayout } from "../../_components/page";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Pirate Bay - Tracker Documentation",
  description: "Comprehensive information about The Pirate Bay torrent tracker, its history, mirrors, and usage."
};

export default function ThePirateBayPage() {
  return (
    <DocsLayout
      title="The Pirate Bay"
      breadcrumbs={[
        { title: "Docs", href: "/docs" },
        { title: "Trackers", href: "/docs" },
        { title: "The Pirate Bay", href: "/docs/trackers/the-pirate-bay" },
      ]}
    >
      <div className="space-y-6">
        <div>
          <PageTitle>The Pirate Bay</PageTitle>
          <div className="flex gap-2 mt-4 flex-wrap">
            <Badge variant="default">Active</Badge>
            <Badge variant="outline">General Purpose</Badge>
            <Badge variant="outline">Est. 2003</Badge>
          </div>
        </div>

        <Separator />

        <div>
          <Subtitle>Overview</Subtitle>
          <Paragraph>
            The Pirate Bay (often abbreviated as TPB) is one of the world's oldest and most resilient BitTorrent 
            indexing websites. Founded in 2003 by the Swedish think tank Piratbyrån (The Piracy Bureau), it has 
            become a symbol of the file-sharing movement and remains one of the most visited torrent sites globally.
          </Paragraph>
          <Paragraph>
            Despite numerous legal challenges, domain seizures, and attempts to shut it down by various governments 
            and organizations, The Pirate Bay continues to operate through mirrors and proxy sites. The site's 
            resilience has made it legendary in the torrenting community.
          </Paragraph>
        </div>

        <div>
          <Subtitle>History & Interesting Facts</Subtitle>
          <div className="space-y-3">
            <Paragraph>
              <strong>Founding Era (2003):</strong> Launched by Gottfrid Svartholm, Fredrik Neij, and Peter Sunde, 
              The Pirate Bay was created to promote free information sharing and challenge copyright laws.
            </Paragraph>
            <Paragraph>
              <strong>2006 Raid:</strong> Swedish police raided The Pirate Bay's server room in Stockholm, seizing 
              servers and equipment. The site was back online within three days, demonstrating its resilience.
            </Paragraph>
            <Paragraph>
              <strong>The Trial (2009):</strong> The founders were found guilty of assisting copyright infringement 
              and sentenced to jail time and fines. This trial brought international attention to the site.
            </Paragraph>
            <Paragraph>
              <strong>Hydra Strategy:</strong> TPB adopted a "hydra" approach - when one domain is taken down, 
              multiple mirrors appear in its place. This decentralized strategy has kept the site accessible.
            </Paragraph>
            <Paragraph>
              <strong>The Phoenix Logo:</strong> The site's logo features a phoenix-themed pirate ship, symbolizing 
              its ability to rise from the ashes after every takedown attempt.
            </Paragraph>
            <Paragraph>
              <strong>Legal Donations:</strong> At one point, TPB collected donations for their legal defense fund, 
              raising significant amounts from users worldwide who believed in their cause.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Official & Mirror Links</Subtitle>
          <Paragraph>
            <strong>Important:</strong> The Pirate Bay frequently changes domains due to legal pressure. 
            Always verify you're on the legitimate site. Be cautious of fake mirrors that may contain malware.
          </Paragraph>

          <div className="mt-4 space-y-2">
            <Paragraph className="font-semibold">Common Mirror Domains:</Paragraph>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>thepiratebay.org (Original, often blocked)</li>
              <li>thepiratebay.se (Sweden TLD)</li>
              <li>thepiratebay10.org</li>
              <li>pirateproxy.live</li>
              <li>tpb.party</li>
              <li>thepiratebay.zone</li>
            </ul>
            <Paragraph className="text-sm text-muted-foreground mt-4">
              Note: Mirror availability varies by region and time. Use a VPN for safer access.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Features & Community</Subtitle>
          <Paragraph>
            <strong>Magnet Links:</strong> TPB was one of the first major trackers to switch exclusively to 
            magnet links, eliminating the need for tracker servers and making the site harder to shut down.
          </Paragraph>
          <Paragraph>
            <strong>User System:</strong> Features trusted uploader badges (pink skull) and VIP status (green skull) 
            to help users identify reliable content sources.
          </Paragraph>
          <Paragraph>
            <strong>Comment System:</strong> Active community that comments on torrents, helping users avoid fake 
            files and malware.
          </Paragraph>
          <Paragraph>
            <strong>Broad Categories:</strong> Covers everything from software and games to movies, TV shows, music, 
            and books. One of the most comprehensive general-purpose trackers.
          </Paragraph>
        </div>

        <div>
          <Subtitle>External Resources</Subtitle>
          <div className="flex flex-col gap-2">
            <Link href="https://en.wikipedia.org/wiki/The_Pirate_Bay" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto justify-start">
                Wikipedia - The Pirate Bay
              </Button>
            </Link>
            <Link href="https://en.wikipedia.org/wiki/The_Pirate_Bay_trial" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto justify-start">
                Wikipedia - The Pirate Bay Trial
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Subtitle>Safety Reminder</Subtitle>
          <Paragraph>
            Always use a VPN when accessing The Pirate Bay. Read comments and check uploader reputation 
            before downloading. Be aware of your local laws regarding torrenting.
          </Paragraph>
        </div>
      </div>
    </DocsLayout>
  );
}
