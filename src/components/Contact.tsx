
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, MessageCircle, Instagram, Twitter, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    
    // Create mailto link
    const mailtoLink = `mailto:madbrostech27@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-madbros-navy text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-madbros-red mx-auto mb-6"></div>
          <p className="text-lg opacity-90">
            Have questions or want to work with us? Reach out and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white text-madbros-navy">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send Us A Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-madbros-red"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-madbros-red"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-madbros-red"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-madbros-red"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-madbros-red hover:bg-red-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
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
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <SocialLink 
                      href="https://instagram.com/madbros27?igshid=YmMyMTA2M2Y=" 
                      icon={<Instagram size={20} />} 
                      label="Instagram"
                    />
                    <SocialLink 
                      href="https://twitter.com/MadbrosT?t=huu1kIGr3eCvrKqFkuv7wQ&s=08" 
                      icon={<Twitter size={20} />} 
                      label="Twitter"
                    />
                    <SocialLink 
                      href="https://www.linkedin.com/in/madbros-tech-148754242/" 
                      icon={<Linkedin size={20} />} 
                      label="LinkedIn"
                    />
                    <SocialLink 
                      href="https://discord.gg/4cvJvSYYFP" 
                      icon={<Globe size={20} />} 
                      label="Discord"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  details,
  link
}: { 
  icon: React.ReactNode; 
  title: string; 
  details: string[];
  link?: string;
}) => (
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

const SocialLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-madbros-lightGray p-2 rounded-full text-madbros-navy hover:bg-madbros-red hover:text-white transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Contact;
