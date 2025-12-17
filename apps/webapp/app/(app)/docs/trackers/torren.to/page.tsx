import type { Metadata } from "next";
import { PageTitle, Paragraph, Subtitle } from "@/components/shared/page";
import { DocsLayout } from "../../_components/page";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Torren.to - Tracker Documentation",
  description: "Guide to Torren.to, a modern meta-search engine that aggregates results from multiple torrent sources."
};

export default function TorrenToPage() {
  return (
    <DocsLayout
      title="Torren.to"
      breadcrumbs={[
        { title: "Docs", href: "/docs" },
        { title: "Trackers", href: "/docs" },
        { title: "Torren.to", href: "/docs/trackers/torren.to" },
      ]}
    >
      <div className="space-y-6">
        <div>
          <PageTitle>Torren.to</PageTitle>
          <div className="flex gap-2 mt-4 flex-wrap">
            <Badge variant="default">Active</Badge>
            <Badge variant="outline">Meta-Search</Badge>
            <Badge variant="outline">Multi-Source</Badge>
            <Badge variant="outline">Fast Results</Badge>
          </div>
        </div>

        <Separator />

        <div>
          <Subtitle>Overview</Subtitle>
          <Paragraph>
            Torren.to is a torrent meta-search engine that aggregates results from multiple torrent sites 
            simultaneously. Rather than maintaining its own torrent database, it queries various public trackers 
            and presents unified results, making it an excellent one-stop solution for torrent searching.
          </Paragraph>
          <Paragraph>
            The service stands out for its speed, clean interface, and ability to search across dozens of sources 
            at once. This approach is particularly valuable given the frequent shutdowns and domain changes that 
            affect individual torrent sites.
          </Paragraph>
        </div>

        <div>
          <Subtitle>How It Works</Subtitle>
          <Paragraph>
            <strong>Meta-Search Technology:</strong> When you perform a search on Torren.to, the service 
            simultaneously queries multiple torrent indexers and trackers, then aggregates and deduplicates 
            the results. This means you get comprehensive results without visiting multiple sites.
          </Paragraph>
          <Paragraph>
            <strong>Real-Time Results:</strong> Unlike cached search engines, Torren.to performs live searches, 
            ensuring you get the most current torrents available across all indexed sources.
          </Paragraph>
          <Paragraph>
            <strong>No Database:</strong> Since Torren.to doesn't host or store torrent files or magnet links 
            itself, it operates in a legal gray area that's less risky than traditional torrent indexers. It 
            simply points you to where content exists.
          </Paragraph>
        </div>

        <div>
          <Subtitle>Key Features</Subtitle>
          <div className="space-y-3">
            <Paragraph>
              <strong>Multi-Source Aggregation:</strong> Searches across popular sites like The Pirate Bay, 
              1337x, TorrentGalaxy, LimeTorrents, and many others simultaneously.
            </Paragraph>
            <Paragraph>
              <strong>Clean Interface:</strong> Modern, minimalist design that's easy to navigate and free 
              from excessive advertising (though some ads are present to support the service).
            </Paragraph>
            <Paragraph>
              <strong>Fast Performance:</strong> Optimized search algorithms deliver results quickly, often 
              faster than manually searching individual sites.
            </Paragraph>
            <Paragraph>
              <strong>Filtering Options:</strong> Ability to filter by category (movies, TV, games, software, 
              music, etc.), sort by seeders, date, or size, and narrow results by source.
            </Paragraph>
            <Paragraph>
              <strong>Detailed Information:</strong> Shows important metadata including file size, number of 
              seeders and leechers, upload date, and source site for each result.
            </Paragraph>
            <Paragraph>
              <strong>Direct Magnet Links:</strong> Provides immediate access to magnet links without requiring 
              visits to individual tracker sites.
            </Paragraph>
            <Paragraph>
              <strong>Mobile-Friendly:</strong> Responsive design works well on smartphones and tablets.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Advantages Over Traditional Trackers</Subtitle>
          <div className="space-y-3">
            <Paragraph>
              <strong>Resilience:</strong> If one or more source sites go down, Torren.to continues working 
              by pulling from other sources. You're not dependent on a single tracker's uptime.
            </Paragraph>
            <Paragraph>
              <strong>Comprehensive Results:</strong> Different trackers often have different content. Meta-search 
              ensures you don't miss rare or niche torrents that might only exist on lesser-known sites.
            </Paragraph>
            <Paragraph>
              <strong>Time-Saving:</strong> No need to visit multiple sites and repeat searches. One query 
              returns results from everywhere.
            </Paragraph>
            <Paragraph>
              <strong>Lower Legal Risk:</strong> Since it doesn't host content or even maintain links, the 
              legal pressure on meta-search engines is generally lower than on traditional indexers.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Accessing Torren.to</Subtitle>
          <Paragraph>
            <strong>Important:</strong> Domain availability varies by region. Some ISPs may block access. 
            Use a VPN for reliable access and privacy protection.
          </Paragraph>

          <div className="mt-4 space-y-2">
            <Paragraph className="font-semibold">Common Domains:</Paragraph>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>torren.to (Primary)</li>
              <li>torrento.pro</li>
              <li>torrentz.to (Alternative)</li>
            </ul>
            <Paragraph className="text-sm text-muted-foreground mt-4">
              Note: Similar to other torrent services, domains may change. The service may also operate mirrors 
              for regions where the main domain is blocked.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Sources Indexed</Subtitle>
          <Paragraph>
            Torren.to typically searches the following trackers (subject to change):
          </Paragraph>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li>The Pirate Bay</li>
            <li>1337x</li>
            <li>TorrentGalaxy</li>
            <li>LimeTorrents</li>
            <li>TorrentDownloads</li>
            <li>Torlock</li>
            <li>YTS (for movies)</li>
            <li>EZTV (for TV shows)</li>
            <li>Zooqle</li>
            <li>Torrent9</li>
            <li>And many others</li>
          </ul>
        </div>

        <div>
          <Subtitle>Limitations & Considerations</Subtitle>
          <div className="space-y-3">
            <Paragraph>
              <strong>No Quality Verification:</strong> Since Torren.to aggregates from multiple sources, 
              there's no central quality control. You must rely on the source site's reputation and user comments.
            </Paragraph>
            <Paragraph>
              <strong>Duplicate Results:</strong> The same torrent may appear multiple times if it exists on 
              several indexed sites. The deduplication isn't always perfect.
            </Paragraph>
            <Paragraph>
              <strong>No Comments:</strong> Unlike individual tracker sites, you don't get access to user 
              comments that might warn about fake files or quality issues. You'll need to visit the source 
              site for that information.
            </Paragraph>
            <Paragraph>
              <strong>Dependent on Sources:</strong> The quality of results depends entirely on the quality 
              of the indexed sources. If major trackers go down or decline in quality, Torren.to's usefulness 
              decreases accordingly.
            </Paragraph>
            <Paragraph>
              <strong>Ads Present:</strong> Like most free torrent services, Torren.to relies on advertising 
              for revenue. Use an ad blocker for a better experience, but consider disabling it occasionally 
              to support the service.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Best Practices</Subtitle>
          <Paragraph>
            <strong>Check Multiple Results:</strong> If you find the same content from multiple sources, 
            compare seeder counts and choose the one with better availability.
          </Paragraph>
          <Paragraph>
            <strong>Verify Source Reputation:</strong> Pay attention to which site each result comes from. 
            Results from established sites like The Pirate Bay or 1337x are generally more trustworthy than 
            those from lesser-known trackers.
          </Paragraph>
          <Paragraph>
            <strong>Use Filters:</strong> Take advantage of the filtering options to narrow results by category 
            and sort by seeders to find the best versions quickly.
          </Paragraph>
          <Paragraph>
            <strong>VPN Always:</strong> Never use any torrent service, including meta-search engines, without 
            a VPN. Your searches and subsequent downloads can be monitored by your ISP.
          </Paragraph>
        </div>

        <div>
          <Subtitle>Similar Services</Subtitle>
          <Paragraph>
            If you like the meta-search approach, you might also want to explore:
          </Paragraph>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li><strong>Torrentz2:</strong> One of the oldest and most comprehensive meta-search engines</li>
            <li><strong>Snowfl:</strong> Modern meta-search with a clean interface</li>
            <li><strong>BTDigg:</strong> DHT search engine that indexes the BitTorrent DHT network</li>
          </ul>
        </div>

        <div>
          <Subtitle>Pro Tip</Subtitle>
          <Paragraph>
            Meta-search engines like Torren.to are excellent for finding rare or obscure content. Since they 
            search dozens of sites, they're often successful where searching individual trackers fails. Try 
            them when you're looking for older, less popular, or region-specific content.
          </Paragraph>
        </div>
      </div>
    </DocsLayout>
  );
}
