"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { WidgetSpeechProcessor } from "./widget-speech-processor";
import { Mic, VideoIcon, X } from "lucide-react";

interface WidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WidgetModal({ isOpen, onClose }: WidgetModalProps) {
  const [activeTab, setActiveTab] = useState("video");
  const [isPremium, setIsPremium] = useState(false);

  // This would normally check for premium status from RevenueCat
  useEffect(() => {
    // Simulating a check for premium status
    const checkPremiumStatus = async () => {
      // In a real implementation, this would check RevenueCat
      // const isPremiumUser = await checkUserSubscription();
      setIsPremium(false);
    };
    
    checkPremiumStatus();
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>AI Assistant</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <Tabs 
          defaultValue="video" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="flex-grow flex flex-col overflow-hidden"
        >
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="video">
              <VideoIcon className="mr-2 h-4 w-4" />
              Video
            </TabsTrigger>
            <TabsTrigger value="voice">
              <Mic className="mr-2 h-4 w-4" />
              Voice
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="video" className="flex-grow flex flex-col">
            <div className="relative aspect-video bg-muted rounded-md overflow-hidden flex items-center justify-center">
              {isPremium ? (
                <iframe
                  src={process.env.NEXT_PUBLIC_TAVUS_IFRAME_URL || "about:blank"}
                  className="w-full h-full border-0"
                  allow="camera; microphone; fullscreen; display-capture; autoplay"
                />
              ) : (
                <div className="text-center p-4">
                  <p className="mb-4">Premium feature requires subscription</p>
                  <Button>Upgrade to Premium</Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="voice" className="flex-grow">
            <WidgetSpeechProcessor />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}