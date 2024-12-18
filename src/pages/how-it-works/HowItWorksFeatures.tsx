import { BrainCircuit } from 'lucide-react';
import { SiCloudflare } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";


const features = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description: "Instant URL analysis using advanced AI algorithms to detect sophisticated phishing attempts.",
  },
  {
    icon: VscAzure,
    title: "Azure",
    description: "Get results in seconds, ensuring your browsing experience stays smooth and uninterrupted.",
  },
  {
    icon: SiCloudflare,
    title: "Cloudflare",
    description: "Integrations with Cloudflare and Azure to ensure a high level of pediction accuracy",
  },
];

export const HowItWorksFeatures = () => {
  return (
    <div className="py-24 bg-accent">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Integrations
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};