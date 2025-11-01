
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  company: z.string()
    .trim()
    .max(200, 'Company name must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  message: z.string()
    .trim()
    .min(1, 'Message is required')
    .max(2000, 'Message must be less than 2000 characters')
});

const ContactForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);
      
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || null,
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
      
      // Show success message
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Conversation</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ready to engage with a community of visionary leaders? Share your interest in joining 
              The Infinity Forum and we'll connect with you about membership opportunities.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-slate-300">unandigala@gmail.com</p>
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

            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-amber-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply for Membership
            </button>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  maxLength={100}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  maxLength={255}
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  maxLength={200}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your interest in joining The Infinity Forum..."
                  maxLength={2000}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
