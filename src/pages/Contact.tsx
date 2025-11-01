import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  message: z.string()
    .trim()
    .min(1, 'Message is required')
    .max(2000, 'Message must be less than 2000 characters')
});

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse({
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message
      });
      
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
          form_type: 'contact'
        });

      if (error) {
        toast({
          title: "Error",
          description: "There was a problem submitting your message. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      setContactForm({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Us</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to join a community of visionary leaders? Get in touch or apply for membership to The Infinity Forum.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Have questions about The Infinity Forum? We'd love to hear from you. Reach out to learn more about our community and upcoming events.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-slate-300">ushan@infinityforum.club</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-slate-300">248-295-1770</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-slate-300">Private venues worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="mt-2"
                    maxLength={100}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="mt-2"
                    maxLength={255}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    rows={4}
                    className="mt-2"
                    placeholder="Tell us how we can help you..."
                    maxLength={2000}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
