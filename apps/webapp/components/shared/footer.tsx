import Link from "next/link";
import { siteContent } from "@/content/content";
import { headers } from "next/headers";

async function getGeolocation() {
  const headersList = await headers()
  const countryCode = headersList.get('X-Vercel-IP-Country')
  const city = headersList.get('X-Vercel-IP-City')
  const ip = headersList.get('X-Real-IP')
  
  return { countryCode, city, ip }
}

export default async function Footer() {
  const geolocation = await getGeolocation()
  return (
    <footer className="mt-auto border-t-2 dark:border-accent border-secondary bg-background">
      <div className="px-6 border-b-1 dark:border-accent border-secondary">
        <div className="flex gap-4 px-6 justify-between max-w-screen-2xl mx-auto items-center py-4">
          <span className="text-sm text-muted-foreground font-bold">{geolocation.city}, {geolocation.countryCode}</span>
          <span className="text-sm text-muted-foreground font-bold">{geolocation.ip}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row px-6 items-center gap-4 max-w-screen-2xl mx-auto justify-between py-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteContent.structuredData.name}. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 text-sm text-muted-foreground">
          {siteContent.footer.links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
