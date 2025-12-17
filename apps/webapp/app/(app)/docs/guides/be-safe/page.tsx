import type { Metadata } from "next";
import { PageTitle, Paragraph, Subtitle } from "@/components/shared/page";
import { DocsLayout } from "../../_components/page";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Be Safe - Security Guide",
  description: "Essential security guidelines for torrenting safely, avoiding malware, protecting your system, and recognizing threats."
};

export default function BeSafePage() {
  return (
    <DocsLayout
      title="Be Safe"
      breadcrumbs={[
        { title: "Docs", href: "/docs" },
        { title: "Guides", href: "/docs" },
        { title: "Be Safe", href: "/docs/guides/be-safe" },
      ]}
    >
      <div className="space-y-6">
        <div>
          <PageTitle>Stay Safe While Torrenting</PageTitle>
          <Paragraph className="text-lg text-muted-foreground">
            Protect yourself from malware, scams, privacy violations, and legal issues. Learn to identify 
            and avoid common threats in the torrenting ecosystem.
          </Paragraph>
        </div>

        <Separator />

        <div>
          <Subtitle>Golden Rule of Torrent Safety</Subtitle>
          <Paragraph>
            If something seems too good to be true, it probably is. The latest AAA game or expensive 
            software available immediately as a tiny download from an unknown uploader? Almost certainly 
            malware. Trust your instincts and always verify before downloading.
          </Paragraph>
        </div>

        <div>
          <Subtitle>Malware & Virus Threats</Subtitle>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Most Dangerous: Executable Files</h3>
              <Paragraph>
                <strong>NEVER trust .exe, .bat, .cmd, .msi, .scr files</strong> from 
                torrent downloads unless you're 100% certain of the source. Even then, scan them thoroughly.
              </Paragraph>
              <Paragraph>
                <strong>Common traps:</strong>
              </Paragraph>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                <li>Movies with .exe extensions (real movies are .mp4, .mkv, .avi)</li>
                <li>"Codec packs" or "players" required to view content (always malware)</li>
                <li>PDF files that are actually .pdf.exe (Windows hides extensions by default)</li>
                <li>Fake cracks/keygens bundled with legitimate software</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Software & Cracks</h3>
              <Paragraph>
                Cracked software is a minefield. If you must download it:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm">
                <li><strong>Stick to known scene groups:</strong> Groups like CODEX, SKIDROW, FLT have reputations to maintain</li>
                <li><strong>Use private trackers:</strong> Public sites are flooded with fake cracks</li>
                <li><strong>Never disable antivirus:</strong> If the installer demands it, that's a red flag</li>
                <li><strong>Check file hashes:</strong> Compare with official scene releases when possible</li>
                <li><strong>Run in sandbox first:</strong> Use Windows Sandbox or a VM to test suspicious files</li>
                <li><strong>Watch for crypto miners:</strong> Monitor CPU usage after installation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Document & Archive Dangers</h3>
              <Paragraph>
                Even seemingly safe files can be risky:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2 text-sm">
                <li><strong>Office documents:</strong> Can contain malicious macros. Disable macro execution</li>
                <li><strong>PDF files:</strong> Can execute JavaScript or exploit vulnerabilities. Use updated readers</li>
                <li><strong>Compressed archives:</strong> Check the actual files inside before extracting</li>
                <li><strong>Password-protected archives:</strong> Often used to bypass antivirus scanning</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Subtitle>Recognizing Fake Torrents</Subtitle>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-semibold mb-3">Red Flags - Avoid These</h3>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>Unknown uploader with no history</li>
                <li>File size doesn't match content type</li>
                <li>Thousands of seeders immediately on new release</li>
                <li>No comments or all positive comments from new accounts</li>
                <li>Description promises impossible things</li>
                <li>Multiple suspicious file types in one torrent</li>
                <li>Password in description but not in title</li>
                <li>Uploader's other torrents have warnings</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Green Flags - Generally Safe</h3>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>Verified/trusted uploader badge</li>
                <li>Long upload history with good feedback</li>
                <li>Many genuine comments praising quality</li>
                <li>Realistic file sizes for content type</li>
                <li>Known release group tag (YIFY, RARBG, etc.)</li>
                <li>Includes NFO file with details</li>
                <li>Proper file structure (not just loose files)</li>
                <li>Available on multiple reputable sites</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Subtitle>Privacy & Anonymity</Subtitle>

          <div className="space-y-4 mt-4">
            <div>
              <h3 className="font-semibold mb-2">VPN is Mandatory</h3>
              <Paragraph>
                This cannot be overstated. Without a VPN:
              </Paragraph>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                <li>Your ISP sees everything you download</li>
                <li>Copyright trolls can harvest your IP from the swarm</li>
                <li>You're visible to everyone in every torrent you join</li>
                <li>Your internet provider may throttle your speeds or send warnings</li>
                <li>In some countries, you risk legal action and fines</li>
              </ul>
              <Paragraph className="mt-3 text-sm">
                <strong>Free VPNs are not safe.</strong> They often log your data, inject ads, or sell your 
                information. Invest in a reputable paid VPN service.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Beyond VPN: Defense in Depth</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                <li><strong>Use Tor for browsing:</strong> (Not for downloading) Browse torrent sites via Tor Browser to hide your search patterns</li>
                <li><strong>Separate email:</strong> Use a dedicated, anonymous email for torrent site registrations</li>
                <li><strong>Burner devices:</strong> For maximum safety, use a separate device or VM for torrenting</li>
                <li><strong>Payment privacy:</strong> Pay for VPNs with crypto or prepaid cards, not your personal credit card</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Subtitle>Website Safety</Subtitle>

          <div className="space-y-4 mt-4">
            <Paragraph className="font-semibold">
              Fake Torrent Sites Are Everywhere
            </Paragraph>
            <Paragraph className="text-sm">
              Scammers create clone sites of popular trackers filled with malware. Always verify you're on 
              the legitimate domain.
            </Paragraph>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-semibold mb-2 text-sm">Safe Browsing Practices</h3>
                <ul className="space-y-1 text-sm ml-4 list-disc list-inside">
                  <li>Bookmark legitimate sites</li>
                  <li>Check HTTPS certificate</li>
                  <li>Use ad blockers (uBlock Origin)</li>
                  <li>Enable script blocking (NoScript, uMatrix)</li>
                  <li>Keep browser updated</li>
                  <li>Verify domain spelling carefully</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm">Dangerous Actions</h3>
                <ul className="space-y-1 text-sm ml-4 list-disc list-inside">
                  <li>Clicking pop-ups or redirects</li>
                  <li>Downloading "required plugins"</li>
                  <li>Running JavaScript from untrusted sites</li>
                  <li>Using sites without HTTPS</li>
                  <li>Trusting Google search results blindly</li>
                  <li>Ignoring browser security warnings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Subtitle>System Protection</Subtitle>

          <div className="space-y-4 mt-4">
            <div>
              <h3 className="font-semibold mb-1">Essential Security Tools</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li><strong>Antivirus:</strong> Windows Defender (built-in) is actually good now. Malwarebytes for extra protection</li>
                <li><strong>Firewall:</strong> Enable Windows Firewall or use third-party like GlassWire to monitor connections</li>
                <li><strong>Ad blocker:</strong> uBlock Origin prevents malicious ads and pop-ups</li>
                <li><strong>Script blocker:</strong> uMatrix or NoScript for advanced users</li>
                <li><strong>Host file:</strong> Block known malicious domains at the system level</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-1">System Hardening</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li><strong>Show file extensions:</strong> Prevent .exe files disguised as .pdf</li>
                <li><strong>Disable autorun:</strong> Prevent malware from auto-executing</li>
                <li><strong>User account control:</strong> Keep UAC enabled on Windows</li>
                <li><strong>Regular updates:</strong> Keep OS, browser, and all software updated</li>
                <li><strong>Limited user account:</strong> Don't browse/torrent as administrator</li>
                <li><strong>Backups:</strong> Regular backups protect against ransomware</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Scanning & Verification</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li><strong>Scan everything:</strong> Run antivirus on all downloads before opening</li>
                <li><strong>Online scanners:</strong> Use VirusTotal for suspicious files</li>
                <li><strong>Sandbox testing:</strong> Test executables in Windows Sandbox or VM first</li>
                <li><strong>Hash verification:</strong> Compare file hashes with official releases</li>
                <li><strong>Quarantine period:</strong> Let new downloads sit for a day while seeding, scan again</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Subtitle>Specific Threats to Know</Subtitle>

          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-sm mb-1">Crypto Miners</h4>
              <Paragraph className="text-sm">
                Hidden programs that use your CPU/GPU to mine cryptocurrency. Signs: high CPU usage, system 
                slowdown, increased electricity use. Check Task Manager regularly.
              </Paragraph>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-1">Ransomware</h4>
              <Paragraph className="text-sm">
                Encrypts your files and demands payment. Prevention: regular backups, don't run suspicious 
                executables, keep software updated. If infected, never pay - data recovery isn't guaranteed.
              </Paragraph>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-1">Trojans & RATs</h4>
              <Paragraph className="text-sm">
                Remote Access Trojans give attackers control of your computer. Signs: webcam light turning on, 
                cursor moving by itself, unknown processes. Very dangerous - wipe and reinstall if infected.
              </Paragraph>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-1">Info Stealers</h4>
              <Paragraph className="text-sm">
                Silently harvest passwords, credit cards, crypto wallets, and personal data. Often bundled with 
                cracked games. Use password manager, 2FA, and monitor for unauthorized logins.
              </Paragraph>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-1">Adware & PUPs</h4>
              <Paragraph className="text-sm">
                Potentially Unwanted Programs that spam ads, change homepage, or slow your system. Less dangerous 
                but annoying. Remove with Malwarebytes or AdwCleaner.
              </Paragraph>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-1">Browser Hijackers</h4>
              <Paragraph className="text-sm">
                Redirect searches, install unwanted extensions, and track browsing. Reset browser settings and 
                remove suspicious extensions.
              </Paragraph>
            </div>
          </div>
        </div>

        <div>
          <Subtitle>What To Do If Infected</Subtitle>

          <ol className="list-decimal list-inside space-y-2 text-sm mt-4">
            <li><strong>Disconnect from internet immediately</strong> - prevent data theft and spreading</li>
            <li><strong>Boot into Safe Mode</strong> - prevents most malware from loading</li>
            <li><strong>Run full antivirus scan</strong> - use Malwarebytes and Windows Defender</li>
            <li><strong>Check installed programs</strong> - uninstall anything suspicious or recent</li>
            <li><strong>Remove browser extensions</strong> - reset browser to defaults</li>
            <li><strong>Change passwords</strong> - from a clean device, change all important passwords</li>
            <li><strong>Monitor accounts</strong> - watch for unauthorized access to email, bank, crypto</li>
            <li><strong>Consider full reinstall</strong> - for serious infections, clean OS install is safest</li>
          </ol>
        </div>

        <div>
          <Subtitle>Final Words on Safety</Subtitle>
          <Paragraph>
            Torrenting can be safe if you're cautious and informed. The threats are real, but they're also 
            avoidable with proper precautions. Trust your instincts - if something feels wrong, it probably 
            is. When in doubt, don't download. No movie, game, or software is worth compromising your security 
            or privacy. Stay vigilant, stay protected, and torrent responsibly.
          </Paragraph>
        </div>
      </div>
    </DocsLayout>
  );
}
