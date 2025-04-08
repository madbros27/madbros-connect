
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, MessageCircle } from "lucide-react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  link?: string;
}

const ContactItem = ({ icon, title, details, link }: ContactItemProps) => (
  <div className="flex">
    <div className="mr-3 text-madbros-red">{icon}</div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <div className="mt-1 text-gray-600">
        {details.map((detail, index) => (
          <p key={index}>
            {link ? (
              <a href={link} className="hover:text-madbros-red transition-colors">
                {detail}
              </a>
            ) : (
              detail
            )}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <Card className="bg-white text-madbros-navy h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
        
        <div className="space-y-6 flex-grow">
          <ContactItem 
            icon={<MapPin />} 
            title="Locations"
            details={[
              "Genuis PU & First Grade College, Mysuru",
              "DailyDose Cafe, MG Road, Hassan"
            ]}
          />
          
          <ContactItem 
            icon={<Mail />} 
            title="Email"
            details={["madbrostech27@gmail.com"]}
            link="mailto:madbrostech27@gmail.com"
          />
          
          <ContactItem 
            icon={<MessageCircle />} 
            title="Discord"
            details={["madbros tech"]}
            link="https://discord.gg/4cvJvSYYFP"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
export { ContactItem };
