import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Hero = () => {
  const [url, setUrl] = useState('');
  const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const regex = new RegExp(URL_REGEX)



  const handleAnalyze = () => {

    if (!url || !regex.test(url)) {
      toast.error("Please enter a valid URL to analyze");
      return;
    }

    toast.success("Analysis started! This is just a demo.");
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
        Detect Phishing URLs
        <br /> Before They Strike
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-12">
        PhishFinder uses advanced AI to analyze URLs in real-time, protecting you from sophisticated phishing attacks and malicious websites.
      </p>
      <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4">
        <Input
          type="url"
          placeholder="Enter URL to analyze..."
          className="flex-1"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button 
          onClick={handleAnalyze}
          className="bg-primary hover:bg-primary-dark text-white px-8"
        >
          Analyze Now
        </Button>
      </div>
    </div>
  );
};