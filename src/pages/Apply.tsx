import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Apply = () => {
  const { toast } = useToast();
  
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
    adjectives: '',
    qualities: '',
    gender: '',
    bringFemale: '',
    assetsConfirmation: '',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting application form:', applicationForm);
      
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: applicationForm.fullName,
          email: applicationForm.email,
          phone: applicationForm.phone,
          company: applicationForm.company,
          position: applicationForm.position,
          net_worth: applicationForm.netWorth,
          experience: applicationForm.experience,
          interests: applicationForm.interests,
          motivation: applicationForm.motivation,
          message: `Application for membership - Motivation: ${applicationForm.motivation}`,
          form_type: 'application'
        });

      if (error) {
        console.error('Error submitting application:', error);
        toast({
          title: "Error",
          description: "There was a problem submitting your application. Please try again.",
          variant: "destructive",
        });
        return;
      }

      console.log('Application submitted successfully');
      
      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your application. We'll review it and contact you soon.",
      });

      setApplicationForm({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        netWorth: '',
        experience: '',
        interests: '',
        motivation: '',
        adjectives: '',
        qualities: '',
        gender: '',
        bringFemale: '',
        assetsConfirmation: '',
        agreeToTerms: false
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplicationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationForm({
      ...applicationForm,
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
            Apply to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Join</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join an exclusive community of visionary leaders, wealth creators, and deep thinkers.
          </p>
        </div>

        {/* Application Form */}
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
                    <option value="Below-2M">Below $2M</option>
                    <option value="2M-5M">$2M - $5M</option>
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

              <div>
                <Label htmlFor="adjectives">Please list three adjectives you would use to describe yourself *</Label>
                <Textarea
                  id="adjectives"
                  name="adjectives"
                  value={applicationForm.adjectives}
                  onChange={handleApplicationChange}
                  rows={3}
                  className="mt-2"
                  placeholder="List three adjectives that best describe you..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="qualities">What qualities do you possess that you believe may often go unnoticed by others? *</Label>
                <Textarea
                  id="qualities"
                  name="qualities"
                  value={applicationForm.qualities}
                  onChange={handleApplicationChange}
                  rows={3}
                  className="mt-2"
                  placeholder="Describe qualities that may not be immediately apparent to others..."
                  required
                />
              </div>

              <div>
                <Label>Gender *</Label>
                <RadioGroup
                  value={applicationForm.gender}
                  onValueChange={(value) => setApplicationForm({...applicationForm, gender: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>

              {applicationForm.gender === 'male' && (
                <div>
                  <Label>If you identify as male, would you be willing to bring a female family member to participate, as we are actively promoting female awareness and participation? *</Label>
                  <RadioGroup
                    value={applicationForm.bringFemale}
                    onValueChange={(value) => setApplicationForm({...applicationForm, bringFemale: value})}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="bring-yes" />
                      <Label htmlFor="bring-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="bring-no" />
                      <Label htmlFor="bring-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <div>
                <Label>Please note, the Infinity Forum is designed for individuals with assets over $2 million. Does this align with your profile? *</Label>
                <RadioGroup
                  value={applicationForm.assetsConfirmation}
                  onValueChange={(value) => setApplicationForm({...applicationForm, assetsConfirmation: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="assets-yes" />
                    <Label htmlFor="assets-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="assets-no" />
                    <Label htmlFor="assets-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="text-center mb-4">
                <Link to="/terms">
                  <Button variant="outline">
                    Read Terms & Conditions
                  </Button>
                </Link>
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
                disabled={isSubmitting || !applicationForm.agreeToTerms}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apply;