import { BoltBadge } from "@/components/ui/bolt-badge";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Widget App. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <BoltBadge />
          <Separator orientation="vertical" className="h-4" />
          <p className="text-sm text-muted-foreground">
            Powered by Next.js 14
          </p>
        </div>
      </div>
    </footer>
  );
}