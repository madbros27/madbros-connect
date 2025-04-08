
import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  CodeIcon, 
  PenTool, 
  GraduationCap, 
  Users,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("software");

  return (
    <section id="services" className="py-16 md:py-24 bg-madbros-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-madbros-navy mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-madbros-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We provide comprehensive solutions to meet your professional and educational needs.
          </p>
        </div>

        <Tabs defaultValue="software" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              <ServiceTab value="software" icon={<CodeIcon />} onClick={() => setActiveTab("software")}>
                Software Development
              </ServiceTab>
              <ServiceTab value="design" icon={<PenTool />} onClick={() => setActiveTab("design")}>
                Logo Design
              </ServiceTab>
              <ServiceTab value="techTraining" icon={<GraduationCap />} onClick={() => setActiveTab("techTraining")}>
                Technical Training
              </ServiceTab>
              <ServiceTab value="nonTechTraining" icon={<Users />} onClick={() => setActiveTab("nonTechTraining")}>
                Non-Technical Training
              </ServiceTab>
            </TabsList>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <TabsContent value="software" className="space-y-4">
              <h3 className="text-2xl font-bold text-madbros-navy">Software Project Development</h3>
              <p className="text-gray-700 mb-6">We develop high-quality software tailored to your specific needs and requirements.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceListItem>Web applications development</ServiceListItem>
                <ServiceListItem>Mobile app development</ServiceListItem>
                <ServiceListItem>Custom software solutions</ServiceListItem>
                <ServiceListItem>API integration</ServiceListItem>
                <ServiceListItem>Database design and development</ServiceListItem>
                <ServiceListItem>Ongoing maintenance and support</ServiceListItem>
              </ul>
            </TabsContent>

            <TabsContent value="design" className="space-y-4">
              <h3 className="text-2xl font-bold text-madbros-navy">Logo Design</h3>
              <p className="text-gray-700 mb-6">We create unique, professional logos that represent your brand identity.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceListItem>Brand identity design</ServiceListItem>
                <ServiceListItem>Logo conceptualization</ServiceListItem>
                <ServiceListItem>Typography and color palette selection</ServiceListItem>
                <ServiceListItem>Vector graphics creation</ServiceListItem>
                <ServiceListItem>Logo variations for different platforms</ServiceListItem>
                <ServiceListItem>Brand guidelines documentation</ServiceListItem>
              </ul>
            </TabsContent>

            <TabsContent value="techTraining" className="space-y-4">
              <h3 className="text-2xl font-bold text-madbros-navy">Technical Training</h3>
              <p className="text-gray-700 mb-6">Comprehensive technical courses to boost your skills from basics to advanced levels.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-madbros-red mb-2">Basics</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ServiceListItem>Web Fundamentals (HTML, CSS, JS)</ServiceListItem>
                    <ServiceListItem>Python Fundamentals</ServiceListItem>
                    <ServiceListItem>Java Fundamentals</ServiceListItem>
                    <ServiceListItem>Git and Command Line</ServiceListItem>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-madbros-red mb-2">Intermediate</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ServiceListItem>Web Framework</ServiceListItem>
                    <ServiceListItem>Python Framework</ServiceListItem>
                    <ServiceListItem>Java Framework</ServiceListItem>
                    <ServiceListItem>API's</ServiceListItem>
                    <ServiceListItem>AI/ML</ServiceListItem>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-madbros-red mb-2">Advanced</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ServiceListItem>Web framework with backend connectivity</ServiceListItem>
                    <ServiceListItem>Project development using Python framework</ServiceListItem>
                    <ServiceListItem>Project development using Java framework</ServiceListItem>
                    <ServiceListItem>Projects using AI/ML, LLM models</ServiceListItem>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nonTechTraining" className="space-y-4">
              <h3 className="text-2xl font-bold text-madbros-navy">Non-Technical Training</h3>
              <p className="text-gray-700 mb-6">Enhance your career and professional skills with our non-technical training programs.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ServiceListItem>Resume Building</ServiceListItem>
                <ServiceListItem>Interview Preparation</ServiceListItem>
                <ServiceListItem>Soft Skills Training</ServiceListItem>
                <ServiceListItem>Entrepreneurship Program</ServiceListItem>
                <ServiceListItem>Technical/Non-Technical Talks</ServiceListItem>
                <ServiceListItem>Career Guidance</ServiceListItem>
              </ul>
            </TabsContent>
          </div>
        </Tabs>

        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-madbros-navy mb-4">
            Need a custom solution?
          </h3>
          <ContactSlider />
        </div>
      </div>
    </section>
  );
};

const ServiceTab = ({ 
  value, 
  icon, 
  children,
  onClick
}: { 
  value: string; 
  icon: React.ReactNode; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <TabsTrigger 
    value={value} 
    onClick={onClick}
    className="flex items-center justify-center gap-2 py-3 data-[state=active]:text-madbros-red"
  >
    {icon}
    <span className="hidden md:inline">{children}</span>
    <span className="md:hidden">{typeof children === 'string' ? children.split(' ')[0] : children}</span>
  </TabsTrigger>
);

const ServiceListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="h-5 w-5 text-madbros-red shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

const ContactSlider = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:madbrostech27@gmail.com?subject=Service Inquiry&body=${encodeURIComponent(message)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setMessage('');
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h4 className="text-lg font-medium mb-4">Mail your requirements here</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Your email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-madbros-red"
          />
        </div>
        <div>
          <textarea
            placeholder="Tell us about your requirements..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-madbros-red"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-madbros-navy hover:bg-blue-900 text-white py-3 rounded-md transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Services;
