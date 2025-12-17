import type { Metadata } from "next";
import { PageTitle, Paragraph, Subtitle } from "@/components/shared/page";
import { DocsLayout } from "../../_components/page";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Best Practices - Torrent Guide",
  description: "Essential best practices for safe and responsible torrenting, including VPN usage, privacy protection, and community guidelines."
};

export default function BestPracticesPage() {
  return (
    <DocsLayout
      title="Best Practices"
      breadcrumbs={[
        { title: "Docs", href: "/docs" },
        { title: "Guides", href: "/docs" },
        { title: "Best Practices", href: "/docs/guides/best-practices" },
      ]}
    >
      <div className="space-y-6">
        <div>
          <PageTitle>Torrenting Best Practices</PageTitle>
          <Paragraph className="text-lg text-muted-foreground">
            Follow these essential guidelines to torrent safely, responsibly, and efficiently while protecting 
            your privacy and supporting the community.
          </Paragraph>
        </div>

        <Separator />

        <div>
          <Subtitle>#1 Critical Rule: Always Use a VPN</Subtitle>
          <Paragraph>
            This is non-negotiable. Torrenting without a VPN exposes your IP address to everyone in the swarm, 
            making you vulnerable to monitoring by your ISP, copyright trolls, and legal actions. Never torrent 
            without VPN protection enabled.
          </Paragraph>
        </div>

        <div>
          <Subtitle>Privacy & Security Essentials</Subtitle>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Use a Reputable VPN</h3>
              <Paragraph>
                <strong>Why it's critical:</strong> Your ISP can see all your torrent activity without a VPN. 
                Many ISPs throttle torrent traffic, send warning letters, or even terminate service for repeated 
                copyright infringement notices.
              </Paragraph>
              <Paragraph>
                <strong>What to look for in a VPN:</strong>
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>No-logs policy:</strong> Verified by third-party audits</li>
                <li><strong>Kill switch:</strong> Blocks internet if VPN disconnects</li>
                <li><strong>P2P/torrent support:</strong> Many VPNs explicitly allow torrenting on specific servers</li>
                <li><strong>Strong encryption:</strong> At least AES-256</li>
                <li><strong>Fast speeds:</strong> Torrenting requires good bandwidth</li>
                <li><strong>Port forwarding:</strong> Optional but improves connectivity and speeds</li>
              </ul>
              <Paragraph className="mt-3">
                <strong>Recommended VPNs for torrenting:</strong> Mullvad, ProtonVPN, Private Internet Access (PIA), 
                NordVPN, ExpressVPN. Avoid free VPNs - they often log data and have poor security.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Configure Your Torrent Client Properly</h3>
              <Paragraph>
                <strong>Bind to VPN interface:</strong> In qBittorrent, Transmission, or Deluge, you can bind 
                the client to your VPN's network interface. This ensures torrents stop if your VPN disconnects.
              </Paragraph>
              <Paragraph>
                <strong>Enable encryption:</strong> Most clients support protocol encryption (PE/MSE). Enable 
                "Require encryption" to hide torrent traffic from basic ISP detection.
              </Paragraph>
              <Paragraph>
                <strong>Disable DHT/PEX/LPD on public trackers:</strong> These protocols can leak your real IP. 
                Keep them enabled only if you fully trust your VPN's leak protection.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Test for IP Leaks</h3>
              <Paragraph>
                Regularly verify your VPN isn't leaking your real IP:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use websites like ipleak.net while connected to VPN</li>
                <li>Download a test torrent from ipmagnet.services.cbcdn.com to check what IP appears in the swarm</li>
                <li>Check for DNS leaks using dnsleaktest.com</li>
                <li>Verify WebRTC isn't leaking your IP (use browserleaks.com/webrtc)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Subtitle>Selecting Safe Torrents</Subtitle>

          <div className="space-y-4 mt-4">
            <div>
              <h3 className="font-semibold mb-2">Check Seeder/Leecher Ratios</h3>
              <Paragraph>
                <strong>Good sign:</strong> Many seeders (100+) indicate a popular, legitimate torrent. 
                <strong> Red flag:</strong> Very few seeders or unusually high leecher-to-seeder ratio on new content.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Verify Uploader Reputation</h3>
              <Paragraph>
                Trusted uploaders on sites like The Pirate Bay have colored skulls (pink or green). On other sites, 
                look for verified badges, trusted status, or high upload counts. Stick with known uploaders whenever possible.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Read Comments First</h3>
              <Paragraph>
                The community often warns about fake files, malware, or quality issues in comments. If a torrent 
                has no comments but thousands of downloads, be suspicious.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Check File Sizes & Types</h3>
              <Paragraph>
                <strong>Suspicious signs:</strong>
              </Paragraph>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm mt-2">
                <li>A 4K movie that's only 500MB (way too small)</li>
                <li>Movies with .exe file extensions (always malware)</li>
                <li>Software cracks that require you to disable antivirus (usually malware)</li>
                <li>Archives (.rar, .zip) with password requirements mentioned in sketchy comments</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Verify File Contents Before Opening</h3>
              <Paragraph>
                After downloading, scan with antivirus software. Check video file metadata. If something seems 
                off, delete it immediately. Never run executables from untrusted sources.
              </Paragraph>
            </div>
          </div>
        </div>

        <div>
          <Subtitle>Being a Good Community Member</Subtitle>

          <div className="space-y-4 mt-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Seed After Downloading</h3>
              <Paragraph>
                <strong>The Golden Rule:</strong> Torrenting is peer-to-peer. If everyone downloads and leaves, 
                the system dies. Seed back at least to a 1.0 ratio (upload as much as you downloaded).
              </Paragraph>
              <Paragraph>
                <strong>Better practice:</strong> Seed popular content for a few days, rare content for weeks or 
                permanently. Many private trackers require minimum seeding ratios.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Set Reasonable Upload Limits</h3>
              <Paragraph>
                Don't set upload to zero - that makes you a leech. But if you have limited bandwidth, setting 
                a reasonable cap (like 50-80% of your upload speed) ensures you can browse/stream while seeding.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Leave Helpful Comments</h3>
              <Paragraph>
                If you download something, leave a brief comment about quality, accuracy, or any issues. This 
                helps the next person. Warn others about fakes or malware.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Support Good Uploaders</h3>
              <Paragraph>
                Quality uploaders spend time encoding, organizing, and sharing content. Thank them in comments, 
                seed their torrents longer, and if the site allows, donate or give reputation points.
              </Paragraph>
            </div>
          </div>
        </div>

        <div>
          <Subtitle>Storage & Organization</Subtitle>

          <div className="space-y-3 mt-4">
            <Paragraph>
              <strong>Separate drive for torrents:</strong> Use a dedicated drive or partition for torrent 
              downloads and seeding. This prevents your system drive from getting cluttered and makes managing 
              storage easier.
            </Paragraph>
            <Paragraph>
              <strong>Organize by category:</strong> Create folders like Movies, TV Shows, Software, Music, 
              etc. Most torrent clients can auto-organize downloads by category.
            </Paragraph>
            <Paragraph>
              <strong>Regular cleanup:</strong> Delete old torrents you're no longer seeding. Keep rare content 
              seeding indefinitely, but popular movies from public trackers can be safely removed after reaching 
              1.0 ratio.
            </Paragraph>
            <Paragraph>
              <strong>Backup important files:</strong> Don't rely solely on seeding for permanent storage. 
              Back up anything irreplaceable.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Network Management</Subtitle>

          <div className="space-y-3 mt-4">
            <Paragraph>
              <strong>Manage bandwidth:</strong> Set global upload/download limits in your torrent client to 
              prevent saturating your connection and making other internet activities unusable.
            </Paragraph>
            <Paragraph>
              <strong>Schedule seeding:</strong> Use your client's scheduler to seed heavily during off-peak 
              hours (like overnight) and limit speeds during the day when you need bandwidth for other activities.
            </Paragraph>
            <Paragraph>
              <strong>Port forwarding:</strong> If possible, forward a port through your router and VPN. This 
              helps you connect to more peers and improves speeds, especially on private trackers.
            </Paragraph>
            <Paragraph>
              <strong>Connection limits:</strong> Don't set global connections too high. 200-300 global connections 
              and 50-100 per torrent are reasonable starting points. Adjust based on your system's performance.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Legal Considerations</Subtitle>

          <div className="space-y-3 mt-4">
            <Paragraph>
              <strong>Know your local laws:</strong> Copyright laws vary dramatically by country. Research 
              what's legal in your jurisdiction. Some countries actively prosecute, others don't care at all.
            </Paragraph>
            <Paragraph>
              <strong>Copyright notices:</strong> If you receive a DMCA notice or copyright infringement warning 
              from your ISP, take it seriously. These can escalate to legal action in some regions.
            </Paragraph>
            <Paragraph>
              <strong>Public domain & legal torrents:</strong> Not all torrents are illegal. Linux distributions, 
              public domain movies, Creative Commons content, and free software are all legally available via 
              torrents.
            </Paragraph>
            <Paragraph>
              <strong>Be aware of copyright trolls:</strong> Some law firms specialize in monitoring torrent 
              swarms and sending settlement letters. A VPN protects you from this.
            </Paragraph>
          </div>
        </div>

        <div>
          <Subtitle>Quick Tips Summary</Subtitle>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <ul className="space-y-2 list-disc list-inside">
              <li>Always use a VPN - no exceptions</li>
              <li>Bind torrent client to VPN interface</li>
              <li>Enable protocol encryption</li>
              <li>Test for IP leaks regularly</li>
              <li>Read comments before downloading</li>
              <li>Check uploader reputation</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Seed to at least 1.0 ratio</li>
              <li>Scan downloads with antivirus</li>
              <li>Verify file sizes match expectations</li>
              <li>Leave helpful comments for community</li>
              <li>Manage bandwidth appropriately</li>
              <li>Know your local laws</li>
            </ul>
          </div>
        </div>

        <div>
          <Subtitle>Remember</Subtitle>
          <Paragraph>
            Torrenting is built on community and trust. By following these best practices, you protect 
            yourself, respect others, and help keep the ecosystem healthy. The more responsible users are, 
            the more sustainable torrenting becomes for everyone.
          </Paragraph>
        </div>
      </div>
    </DocsLayout>
  );
}
