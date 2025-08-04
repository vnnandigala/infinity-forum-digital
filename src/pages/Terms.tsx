import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="pt-20">
        {/* Terms Content */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-slate-700 space-y-6 leading-relaxed">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Infinity Forum Membership: Terms and Conditions</h2>
                  <p className="mb-4 text-lg">Welcome to Infinity Forum!</p>
                  <p className="mb-6">By submitting your membership application, you agree to the following Terms and Conditions of Infinity Forum. These terms outline the rules and expectations for joining and participating in the Infinity Forum community.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">1. Membership Eligibility</h3>
                  <p className="mb-3">To be eligible for membership in Infinity Forum, you must meet the following criteria:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Be an individual with assets exceeding $2 million.</li>
                    <li>Demonstrate a commitment to personal growth, professional development, and social impact.</li>
                    <li>Be willing to engage with other members and participate in discussions and events.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. Membership Benefits</h3>
                  <p className="mb-3">As a member of Infinity Forum, you will have access to the following:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Curated Content:</strong> Exclusive resources, podcasts, and articles.</li>
                    <li><strong>Networking Opportunities:</strong> Connect with like-minded professionals, entrepreneurs, and investors.</li>
                    <li><strong>Mentorship and Guidance:</strong> Access to mentorship from industry leaders and peer-to-peer support.</li>
                    <li><strong>Events and Discussions:</strong> Invitations to exclusive in-person and virtual events focused on intellectual growth, wealth creation, and social impact.</li>
                    <li><strong>Investment Opportunities:</strong> Participate in vetted investment opportunities within the forum's community.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. Code of Conduct</h3>
                  <p className="mb-3">By joining Infinity Forum, you agree to uphold the following principles:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Respectful Engagement:</strong> Treat all members with respect and professionalism.</li>
                    <li><strong>Confidentiality:</strong> Maintain the confidentiality of any sensitive or proprietary information shared within the forum.</li>
                    <li><strong>Constructive Participation:</strong> Engage in discussions and activities in a manner that fosters learning, growth, and collaboration.</li>
                    <li><strong>Mentorship and Giving Back:</strong> Contribute to the community by offering mentorship or support to other members, especially underprivileged entrepreneurs.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">4. Gender Equality Initiative</h3>
                  <p>Infinity Forum is committed to promoting gender equality within our community. As part of this initiative, male members are encouraged to bring a female family member (wife, mother, daughter, etc.) to participate in events and discussions. This is a key step in empowering women and ensuring equal participation in the wealth-building and intellectual growth space.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">5. Membership Dues</h3>
                  <p className="mb-3"><strong>Annual Membership Fee:</strong> The annual membership fee for Infinity Forum is $250.</p>
                  <p>The membership fee grants access to all exclusive content, events, and mentorship opportunities within the community.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">6. Termination of Membership</h3>
                  <p className="mb-3">Infinity Forum reserves the right to suspend or terminate the membership of any individual who:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Fails to meet eligibility requirements.</li>
                    <li>Violates the Code of Conduct or acts in a manner that undermines the integrity of the forum.</li>
                    <li>Fails to pay membership dues in a timely manner.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">7. Intellectual Property</h3>
                  <p>All content shared within Infinity Forum, including but not limited to written material, podcasts, presentations, and resources, remains the intellectual property of Infinity Forum or the respective content creators. Members may use content for personal or educational purposes but may not redistribute or commercialize the material without explicit consent.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">8. Liability and Indemnity</h3>
                  <p>Infinity Forum is not responsible for any financial loss, damages, or personal injury incurred as a result of events, investments, or interactions within the community. Members agree to indemnify and hold harmless Infinity Forum from any liability arising from their participation in forum activities.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">9. Changes to Terms and Conditions</h3>
                  <p>Infinity Forum reserves the right to update or modify these Terms and Conditions at any time. Members will be notified of any significant changes, and continued participation in the forum will constitute acceptance of the updated terms.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">10. Governing Law</h3>
                  <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Michigan, United States.</p>
                </div>
              </div>
              
              {/* Back to Application Button */}
              <div className="mt-8 text-center">
                <Link to="/apply">
                  <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-semibold">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Application
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;