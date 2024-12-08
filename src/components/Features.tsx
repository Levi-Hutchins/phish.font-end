import { Shield, Zap, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Real-time Protection",
    description: "Instant URL analysis using advanced AI algorithms to detect sophisticated phishing attempts.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in milliseconds, ensuring your browsing experience stays smooth and uninterrupted.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your organization from evolving cyber threats.",
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-accent">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose PhishFinder?
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