import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Widget } from '@/components/widget/widget';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Interactive AI Widget for Your Website
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Enhance user engagement with our AI-powered widget featuring speech processing and real-time lip-sync.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo">
                <Button size="lg">
                  Try Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/admin">
                <Button variant="outline" size="lg">
                  Admin Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Key Features
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our widget comes packed with powerful features to enhance your website.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Speech Processing</h3>
                <p className="text-muted-foreground text-center">
                  Advanced speech recognition and synthesis using ElevenLabs technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Real-time Lip-Sync</h3>
                <p className="text-muted-foreground text-center">
                  Tavus integration for realistic lip synchronization with audio.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Secure Payments</h3>
                <p className="text-muted-foreground text-center">
                  Integrated with RevenueCat and Algorand for secure transaction processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Widget demo floating button */}
      <Widget />
    </div>
  );
}