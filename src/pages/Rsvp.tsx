import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { z } from 'zod';

const rsvpSchema = z.object({
  name: z.string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z.string()
    .trim()
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  company: z.string()
    .trim()
    .max(200, 'Company name must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  message: z.string()
    .trim()
    .max(1000, 'Message must be less than 1000 characters')
    .optional()
    .or(z.literal(''))
});

const Rsvp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = rsvpSchema.parse(formData);
      
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone || null,
            company: validatedData.company || null,
            message: validatedData.message || null,
            form_type: 'rsvp'
          }
        ]);

      if (error) throw error;

      toast({
        title: "RSVP Confirmed!",
        description: "Thank you for registering. We'll send you event details soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

      // Navigate back to home after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);

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
          description: "There was an issue with your RSVP. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Event Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  RSVP for Our Event
                </h1>
                <p className="text-xl text-slate-300">
                  Reserve your spot at our exclusive insightful event
                </p>
              </div>

              {/* Event Info Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Wealth & Estate Planning Insightful Event
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-200">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold">September 27th, 2024</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-slate-200">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold">4:00 PM - 7:00 PM EST</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-slate-200">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span className="font-semibold">Michigan & Online via Zoom</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-slate-300 leading-relaxed">
                    Join fellow forum members for an intensive deep-dive into advanced wealth preservation strategies, 
                    estate planning techniques, and legacy building methodologies. This exclusive session features 
                    expert speakers and interactive discussions.
                  </p>
                </div>
              </div>
            </div>

            {/* RSVP Form */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Confirm Your Attendance</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-200">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Enter your full name"
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-200">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Enter your email"
                    maxLength={255}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-200">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Enter your phone number"
                    maxLength={20}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-200">
                    Company/Organization
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Enter your company"
                    maxLength={200}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-200">
                    Additional Notes
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Any dietary restrictions, questions, or special requests..."
                    maxLength={1000}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-semibold py-3"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm RSVP'}
                </Button>

                <p className="text-sm text-slate-400 text-center">
                  By RSVPing, you confirm your attendance and agree to our event guidelines.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rsvp;