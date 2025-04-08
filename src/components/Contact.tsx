
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";

const Contact = () => {
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
            <ContactForm />
          </div>

          <div>
            <div className="h-full flex flex-col">
              <ContactInfo />
              <div className="bg-white text-madbros-navy p-6 mt-4 rounded-lg shadow-sm">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
