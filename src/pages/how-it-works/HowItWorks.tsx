export const HowItWorks = () => {
  return (
    <div className="py-24 container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        How PhishFinder Works
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
          
          {/* Steps */}
          {[
            {
              title: "Enter URL",
              description: "Simply paste the suspicious URL into our analyzer.",
            },
            {
              title: "Cloudflare Scanning",
              description: "Our Cloudflare integration performs a deep scan on the URL.",
            },
            {
              title: "Azure ML Services",
              description: "The scan results are fed into Azure ML models, to perform further analysis.",
              
            },
            {
              title: "Results & Recommendation",
              description: "We make a judgement on the link and display critical information to allow you to make an informed decision.",
            }
          ].map((step, index) => (
            <div
              key={index}
              className="relative pl-12 md:pl-0 mb-12 last:mb-0 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 md:px-12">
                  <div className={`bg-white p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white" />
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};