"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mic, Square, Volume2 } from "lucide-react";

export function WidgetSpeechProcessor() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [progress, setProgress] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startRecording = async () => {
    try {
      setIsRecording(true);
      setTranscript("");
      setResponse("");
      
      // In a real implementation, this would:
      // 1. Start recording audio
      // 2. Stream to ElevenLabs ASR
      // 3. Update transcript in real-time
      
      // Simulating recording and transcription
      const simulateTranscription = () => {
        const messages = [
          "Hello",
          "Hello, how can you help me?",
          "Hello, how can you help me with my project?"
        ];
        
        let step = 0;
        const interval = setInterval(() => {
          if (step < messages.length) {
            setTranscript(messages[step]);
            step++;
          } else {
            clearInterval(interval);
          }
        }, 1000);
      };
      
      simulateTranscription();
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    setIsRecording(false);
    setIsProcessing(true);
    
    // Simulate processing with GPT-4
    let processingProgress = 0;
    const interval = setInterval(() => {
      processingProgress += 10;
      setProgress(processingProgress);
      
      if (processingProgress >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
        setResponse("I'd be happy to help with your project! What specific aspects are you working on right now?");
        
        // In a real implementation, this would:
        // 1. Send transcript to GPT-4
        // 2. Get response text
        // 3. Send to ElevenLabs TTS
        // 4. Play audio
      }
    }, 300);
  };

  const playResponse = () => {
    setIsPlaying(true);
    
    // In a real implementation, this would play the TTS audio
    // For now, we'll simulate audio playback
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <div className="space-y-4 flex-grow overflow-y-auto p-1">
      <Card className="p-4 min-h-[100px] bg-muted/50">
        <p className="font-medium mb-2">You said:</p>
        <p className="text-muted-foreground">
          {transcript || "Speak to start a conversation..."}
        </p>
      </Card>
      
      {isProcessing && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Processing your request...</p>
          <Progress value={progress} className="h-2" />
        </div>
      )}
      
      {response && (
        <Card className="p-4 min-h-[100px] bg-primary/10">
          <p className="font-medium mb-2">Response:</p>
          <p>{response}</p>
          
          {!isPlaying && (
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2"
              onClick={playResponse}
            >
              <Volume2 className="h-4 w-4 mr-2" />
              Play audio
            </Button>
          )}
        </Card>
      )}
      
      <div className="flex justify-center pt-4">
        {!isRecording ? (
          <Button 
            onClick={startRecording}
            className="rounded-full h-14 w-14"
            disabled={isProcessing}
          >
            <Mic className="h-6 w-6" />
          </Button>
        ) : (
          <Button 
            onClick={stopRecording}
            variant="destructive"
            className="rounded-full h-14 w-14"
          >
            <Square className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  );
}