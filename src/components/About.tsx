
import { Rocket, Share2, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-madbros-navy mb-4">About MAD BROS</h2>
          <div className="w-20 h-1 bg-madbros-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            We connect with people to reach out their requirements. You can connect with us anytime to meet your requirements and we will provide the best service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard 
            icon={<Share2 className="h-12 w-12 text-madbros-red" />}
            title="Learn & Share"
            description="We believe in continuous learning and sharing knowledge with our clients and community."
          />
          
          <ValueCard 
            icon={<Rocket className="h-12 w-12 text-madbros-red" />}
            title="Proactive Approach"
            description="We take initiative to understand and address your needs before they become challenges."
          />
          
          <ValueCard 
            icon={<Users className="h-12 w-12 text-madbros-red" />}
            title="User Support"
            description="Our team provides continuous support to ensure your success with our solutions."
          />
          
          <ValueCard 
            icon={<Shield className="h-12 w-12 text-madbros-red" />}
            title="Security Focus"
            description="We prioritize the security and privacy of your data and solutions."
          />
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-semibold text-madbros-navy mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default About;
