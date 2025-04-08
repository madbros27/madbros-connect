
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Abhishek Pruthvi V M",
    role: "Software Engineer",
    company: "Stellapps Technologies Pvt Ltd, Bengaluru",
    experience: "6+ Years",
    image: "/lovable-uploads/96c2e5a8-9362-49b9-be6c-0810b264a165.png",
  },
  {
    id: 2,
    name: "Harshith D",
    role: "Product Development Engineer",
    company: "Unisys India Pvt Ltd, Bengaluru",
    experience: "4+ Years",
    image: "/lovable-uploads/8925b475-388e-41b4-b00a-4e9b20b8fcc2.png",
  },
  {
    id: 3,
    name: "Shrinidhi V",
    role: "Software Engineer",
    company: "Ansira, Bengaluru",
    experience: "4+ Years",
    image: "/lovable-uploads/50e65dbf-e4ed-4270-b819-1c237a9e0d64.png",
  },
  {
    id: 4,
    name: "Kushal S J",
    role: "Software Manual Tester",
    company: "Celestial Systems Inc, Bengaluru",
    experience: "3+ Years",
    image: "/lovable-uploads/ce6d0a7e-0290-4040-ac7b-b6a1bfba23aa.png",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-madbros-navy mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-madbros-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Meet the passionate professionals behind MAD BROS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMember {
  id: number;
  name: string;
  role: string;
  company: string;
  experience: string;
  image: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative overflow-hidden h-72 bg-gradient-to-b from-transparent to-madbros-navy/40">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-madbros-navy via-madbros-navy/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
          <a
            href={`mailto:madbrostech27@gmail.com?subject=Contact ${member.name}`}
            className="bg-white p-3 rounded-full text-madbros-navy hover:bg-madbros-red hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/madbros-tech-148754242/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full text-madbros-navy hover:bg-madbros-red hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-madbros-navy mb-1">{member.name}</h3>
        <p className="text-madbros-red font-medium">{member.role}</p>
        <p className="text-sm text-gray-600 mt-1">{member.company}</p>
        <div className="mt-2 inline-block bg-madbros-navy/10 text-madbros-navy text-sm py-1 px-2 rounded-full">
          {member.experience} Experience
        </div>
      </CardContent>
    </Card>
  );
};

export default Team;
