import { Widget } from "@/components/widget/widget";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Widget Demo
        </h1>
        
        <div className="bg-card rounded-lg border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <p className="mb-4">
            This demo page showcases our AI-powered widget in action. Click the floating button in the bottom right corner to open the widget.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Use the Voice tab to speak with the AI assistant</li>
            <li>The Video tab demonstrates our real-time lip-sync technology (premium feature)</li>
            <li>Try asking questions or having a conversation</li>
          </ul>
          <p>
            The widget can be easily integrated into any website with just a few lines of code, providing your users with an interactive AI assistant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Integration Example</h2>
            <pre className="bg-muted p-4 rounded overflow-x-auto text-sm">
              <code>{`// Add this to your website
<script src="https://widget-app.com/embed.js"></script>
<script>
  WidgetApp.init({
    apiKey: "your-api-key",
    theme: "light"
  });
</script>`}</code>
            </pre>
          </div>
          
          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Customization</h2>
            <p className="mb-4">
              The widget can be customized to match your brand:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Brand colors and theme</li>
              <li>Custom responses and personality</li>
              <li>RTL language support</li>
              <li>Mobile and desktop optimized</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Widget />
    </div>
  );
}