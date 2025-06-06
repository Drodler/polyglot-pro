import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SupabaseProvider } from '@/lib/supabase-provider';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Widget App - Interactive AI Assistant',
  description: 'An interactive widget with speech processing and real-time lip-sync',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SupabaseProvider>
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}