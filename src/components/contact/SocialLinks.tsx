
import { Instagram, Twitter, Linkedin, Globe } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
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

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
export { SocialLink };
