import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const UrlScanner = () => {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<"safe" | "dangerous" | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter a URL to scan");
      return;
    }

    setIsScanning(true);
    setResult(null);

    // Simulate API call with timeout
    setTimeout(() => {
      // For demo purposes, we'll consider URLs with "phish" as dangerous
      const isSafe = !url.toLowerCase().includes("phish");
      setResult(isSafe ? "safe" : "dangerous");
      setIsScanning(false);
      toast.success("Scan completed!");
    }, 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleScan} className="space-y-6">
        <div className="relative">
          <Input
            type="url"
            placeholder="Enter URL to scan..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full h-12 pr-32"
          />
          <Button
            type="submit"
            disabled={isScanning}
            className="absolute right-1 top-1 h-10"
          >
            {isScanning ? "Scanning..." : "Scan Now"}
          </Button>
        </div>
      </form>

      {isScanning && (
        <div className="mt-8 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-primary animate-scanning" />
        </div>
      )}

      {result && (
        <div className={`mt-8 p-6 rounded-lg border ${
          result === "safe" ? "bg-success/10 border-success" : "bg-destructive/10 border-destructive"
        }`}>
          <h3 className={`text-xl font-semibold ${
            result === "safe" ? "text-success" : "text-destructive"
          }`}>
            {result === "safe" ? "URL is Safe" : "Potential Phishing Detected"}
          </h3>
          <p className="mt-2 text-gray-600">
            {result === "safe" 
              ? "This URL appears to be legitimate and safe to visit." 
              : "This URL shows characteristics commonly associated with phishing attempts."}
          </p>
        </div>
      )}
    </div>
  );
};