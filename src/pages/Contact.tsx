
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Users, CheckCircle, Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    netWorth: '',
    experience: '',
    interests: '',
    motivation: '',
    agreeToTerms: false
  });

  const [activeTab, setActiveTab] = useState('contact');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle contact form submission
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    // Handle application submission
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleApplicationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <Infinity className="w-5 h-5 text-slate-900" strokeWidth={3} />
            </div>
            <span className="text-xl font-bold text-white">The Infinity Forum</span>
          </div>
        </div>
      </div>

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

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'contact'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('application')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'application'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Apply to Join
            </button>
          </div>
        </div>

        {activeTab === 'contact' ? (
          /* Contact Section */
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
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        ) : (
          /* Application Section */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Apply for Membership</h2>
                <p className="text-slate-600">
                  Join an exclusive community of visionary leaders, wealth creators, and deep thinkers.
                </p>
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={applicationForm.fullName}
                      onChange={handleApplicationChange}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={applicationForm.email}
                      onChange={handleApplicationChange}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={applicationForm.phone}
                      onChange={handleApplicationChange}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company/Organization *</Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={applicationForm.company}
                      onChange={handleApplicationChange}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="position">Position/Title *</Label>
                    <Input
                      type="text"
                      id="position"
                      name="position"
                      value={applicationForm.position}
                      onChange={handleApplicationChange}
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="netWorth">Net Worth Range *</Label>
                    <select
                      id="netWorth"
                      name="netWorth"
                      value={applicationForm.netWorth}
                      onChange={handleApplicationChange}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Select range</option>
                      <option value="1M-5M">$1M - $5M</option>
                      <option value="5M-10M">$5M - $10M</option>
                      <option value="10M-25M">$10M - $25M</option>
                      <option value="25M-50M">$25M - $50M</option>
                      <option value="50M+">$50M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Professional Experience & Achievements *</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={applicationForm.experience}
                    onChange={handleApplicationChange}
                    rows={4}
                    className="mt-2"
                    placeholder="Describe your professional background, key achievements, and areas of expertise..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="interests">W.I.S.D.O.M. Areas of Interest *</Label>
                  <Textarea
                    id="interests"
                    name="interests"
                    value={applicationForm.interests}
                    onChange={handleApplicationChange}
                    rows={3}
                    className="mt-2"
                    placeholder="Which areas of our W.I.S.D.O.M. framework interest you most? (Wealth & Estate, Investments, Spirituality/Health/Wellness, Disruptions & Innovations, Ownership & Legacy, Mentorship & Giving Back)"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="motivation">Why do you want to join The Infinity Forum? *</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={applicationForm.motivation}
                    onChange={handleApplicationChange}
                    rows={4}
                    className="mt-2"
                    placeholder="What motivates you to join our community? What value do you hope to gain and contribute?"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={applicationForm.agreeToTerms}
                    onCheckedChange={(checked) => 
                      setApplicationForm({ ...applicationForm, agreeToTerms: checked as boolean })
                    }
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the terms and conditions and understand that membership is subject to review and approval *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold py-4"
                  disabled={!applicationForm.agreeToTerms}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
