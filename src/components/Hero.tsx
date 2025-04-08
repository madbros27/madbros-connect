
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-16 relative bg-gradient-to-br from-madbros-navy via-blue-800 to-madbros-navy text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">We Are</span>
              <span className="text-madbros-red">MAD BROS</span>
            </h1>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">FREELANCERS</span>
            </h3>
            <p className="text-xl md:text-2xl mb-6 opacity-90 max-w-lg mx-auto md:mx-0">
              Connecting people with technology solutions. Learn, share, and grow with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-madbros-red hover:bg-red-700 text-red"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <img 
                src="/lovable-uploads/c4b21b3a-8481-4003-afb9-2d1449343c25.png" 
                alt="MAD BROS Logo" 
                className="w-full h-full object-contain animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white h-10 md:h-16 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,158.36,74.03,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

