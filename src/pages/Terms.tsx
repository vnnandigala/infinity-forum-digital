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
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">INFINITY FORUM — MEMBERSHIP TERMS & CONDITIONS</h2>
                  <p className="mb-2"><strong>Effective Date:</strong> [●]</p>
                  <p className="mb-2"><strong>Contracting Entity:</strong> Infinity Forum, LLC (or applicable entity) ("Infinity Forum," "we," "us," "our")</p>
                  <p className="mb-6"><strong>Member:</strong> the applicant who accepts these Terms ("Member," "you").</p>
                  <p className="mb-6">By submitting an application, paying dues, or attending any Infinity Forum event (in-person or virtual), you agree to these Terms & Conditions ("Terms").</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">1. Eligibility & Admissions</h3>
                  <p className="mb-2"><strong>1.1 Asset Threshold.</strong> Membership is designed for individuals/households with assets exceeding USD $2,000,000 (including illiquid assets; excluding primary residence).</p>
                  <p className="mb-2"><strong>1.2 Age.</strong> You must be 18+.</p>
                  <p className="mb-2"><strong>1.3 Right to Refuse/Withdraw.</strong> We may accept, decline, suspend, or terminate membership in our sole discretion, including to protect safety, confidentiality, or community standards.</p>
                  <p className="mb-2"><strong>1.4 Verification.</strong> You authorize us to request reasonable documentation or third-party verification to confirm eligibility.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. Dues, Term, Renewals & Refunds</h3>
                  <p className="mb-2"><strong>2.1 Annual Dues.</strong> USD $250 per membership year (plus any applicable taxes).</p>
                  <p className="mb-2"><strong>2.2 Renewals.</strong> Dues renew annually unless cancelled prior to the renewal date.</p>
                  <p className="mb-2"><strong>2.3 Refunds.</strong> All dues are non-refundable, except where required by law or expressly agreed by us in writing.</p>
                  <p className="mb-2"><strong>2.4 Failure to Pay.</strong> Non-payment may result in suspension or termination.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. Benefits (Non-Guaranteed)</h3>
                  <p>Members may access: (a) curated content (including recorded sessions/podcasts), (b) events and roundtables, (c) peer networking and mentorship, and (d) introductions and discovery of board-curated investment opportunities. Benefits are subject to change and not guaranteed.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">4. Code of Conduct</h3>
                  <p className="mb-2"><strong>4.1 Respect & Professionalism.</strong> Maintain a respectful, harassment-free environment. No discriminatory, defamatory, abusive, or disruptive conduct.</p>
                  <p className="mb-2"><strong>4.2 Confidentiality.</strong> Treat non-public information shared within the Forum as confidential; do not disclose without express permission.</p>
                  <p className="mb-2"><strong>4.3 No Recording/Distribution.</strong> Do not record, scrape, livestream, or distribute Forum content or member communications without written consent.</p>
                  <p className="mb-2"><strong>4.4 Women's Participation.</strong> We encourage male members to bring a female family member (e.g., spouse/partner, mother, daughter) to selected events to promote awareness and participation.</p>
                  <p className="mb-2"><strong>4.5 No Misrepresentation.</strong> Do not misrepresent identity, credentials, or affiliations.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">5. Non-Solicitation & No Marketing</h3>
                  <p className="mb-2"><strong>5.1 No Pitching/Promotion.</strong> You agree not to solicit customers or investors and not to promote goods/services via posts, comments, chats, or direct messages without our prior written consent.</p>
                  <p className="mb-2"><strong>5.2 Introductions.</strong> Any introductions or "vetted pipeline" are informational only and not endorsements.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">6. Investment Disclaimers (Critical)</h3>
                  <p className="mb-2"><strong>6.1 No Investment Advice/Brokerage.</strong> Infinity Forum is not a broker-dealer, investment adviser, or crowdfunding portal and does not provide investment, legal, tax, or accounting advice. Nothing provided constitutes a recommendation or an offer/solicitation to buy/sell securities.</p>
                  <p className="mb-2"><strong>6.2 Independent Due Diligence.</strong> You are solely responsible for your own due diligence, decisions, contracts, and compliance (including securities/tax laws).</p>
                  <p className="mb-2"><strong>6.3 No Fiduciary Duty.</strong> We owe no fiduciary duty to you; your participation is at your own risk.</p>
                  <p className="mb-2"><strong>6.4 Syndicates/Forum Funds.</strong> Any pooled vehicle (e.g., a syndicate or "Forum fund") will be governed only by its own offering documents (e.g., PPM, operating agreement). Membership confers no rights in any vehicle absent separate written agreements.</p>
                  <p className="mb-2"><strong>6.5 Conflicts.</strong> Presenters or board members may have positions in companies/opportunities discussed. You should assume potential conflicts exist and act accordingly.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">7. Content, IP & Recording Consent</h3>
                  <p className="mb-2"><strong>7.1 Forum Content.</strong> All Forum content (including recordings, slides, posts, materials) is owned by Infinity Forum or its licensors. We grant you a limited, personal, non-transferable license to access for internal, non-commercial use.</p>
                  <p className="mb-2"><strong>7.2 Member Contributions.</strong> You grant Infinity Forum a non-exclusive, worldwide, royalty-free license to use, reproduce, display, and distribute your contributions within the community (and for internal programming/archival). We will not publish externally without your permission, unless anonymized/aggregated.</p>
                  <p className="mb-2"><strong>7.3 Recording Consent.</strong> Events may be audio/video recorded. By attending, you consent to recording and internal use by paid members, unless you opt out in writing before the event.</p>
                  <p className="mb-2"><strong>7.4 Trademarks.</strong> "Infinity Forum" and associated marks may not be used without written permission.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">8. In-Person Events — Assumption of Risk & Property Waiver</h3>
                  <p className="mb-2"><strong>8.1 Assumption of Risk.</strong> You understand and voluntarily assume all risks of attendance, including travel, illness (including communicable diseases), injury, theft, or property damage.</p>
                  <p className="mb-2"><strong>8.2 No Property Liability.</strong> Infinity Forum and host venues/property owners will not be liable for any accident, injury, loss, or damage to person or property at in-person events.</p>
                  <p className="mb-2"><strong>8.3 Insurance.</strong> You are responsible for your own insurance coverage.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">9. Privacy & Communications</h3>
                  <p className="mb-2"><strong>9.1 Data.</strong> We process personal data consistent with our Privacy Policy ([link]).</p>
                  <p className="mb-2"><strong>9.2 Communications Consent.</strong> You consent to receive service, event, and membership communications via email/SMS. You may opt out of marketing; operational messages may still be required.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">10. Use Restrictions & Security</h3>
                  <p className="mb-2"><strong>10.1 No Scraping/Reverse Engineering.</strong> Do not scrape, harvest, or reverse engineer any platform or member directory.</p>
                  <p className="mb-2"><strong>10.2 Account Security.</strong> You are responsible for safeguarding login credentials and all activity under your account.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">11. Compliance</h3>
                  <p className="mb-2"><strong>11.1 Laws & Sanctions.</strong> You will comply with all applicable laws, including securities, anti-bribery, sanctions/export controls, and data-privacy laws.</p>
                  <p className="mb-2"><strong>11.2 Taxes.</strong> You are responsible for any tax consequences of your activities or investments.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">12. Disclaimers; No Warranties</h3>
                  <p>The Forum, content, events, and introductions are provided "AS IS" and "AS AVAILABLE." We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee results, outcomes, or availability.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">13. Limitation of Liability</h3>
                  <p>To the fullest extent permitted by law: (a) No consequential/special/punitive damages; and (b) Our aggregate liability for any claim is limited to the dues you paid to Infinity Forum in the 12 months preceding the event giving rise to the claim.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">14. Indemnification</h3>
                  <p>You agree to defend, indemnify, and hold harmless Infinity Forum, its officers, directors, employees, advisors, and hosts from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of (i) your breach of these Terms, (ii) your conduct at events, or (iii) your business/investment decisions.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">15. Termination; Survival</h3>
                  <p>We may terminate or suspend access at any time for breach or risk to the community. Sections 4–15, 17–20 survive termination.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">16. Changes to Terms</h3>
                  <p>We may update these Terms from time to time. Material changes will be notified (e.g., email or platform notice). Continued use after the effective date constitutes acceptance.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">17. Governing Law; Venue</h3>
                  <p>These Terms are governed by the laws of the State of Michigan, without regard to conflict-of-laws rules. Subject to Section 18, exclusive venue for non-arbitrable relief is the state or federal courts located in Michigan, and you consent to personal jurisdiction there.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">18. Dispute Resolution; Arbitration; Class-Action Waiver</h3>
                  <p className="mb-2"><strong>18.1 Good-Faith Resolution.</strong> Parties will first attempt good-faith resolution.</p>
                  <p className="mb-2"><strong>18.2 Binding Arbitration.</strong> Any dispute arising out of or relating to these Terms or your membership shall be resolved by binding arbitration administered by the AAA under its Commercial Rules. Seat: Oakland County, Michigan. Language: English.</p>
                  <p className="mb-2"><strong>18.3 Class-Action Waiver.</strong> You and Infinity Forum waive any right to litigate or arbitrate on a class or representative basis.</p>
                  <p className="mb-2"><strong>18.4 Injunctive Relief.</strong> Either party may seek temporary injunctive relief in court to protect IP or confidentiality pending arbitration.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">19. Force Majeure</h3>
                  <p>We are not liable for delays/failures due to events beyond our reasonable control (e.g., acts of God, pandemics, strikes, power or internet failures, governmental actions).</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">20. Miscellaneous</h3>
                  <p className="mb-2"><strong>20.1 Entire Agreement.</strong> These Terms constitute the entire agreement regarding membership.</p>
                  <p className="mb-2"><strong>20.2 Severability.</strong> If any provision is unenforceable, the remainder remains in effect.</p>
                  <p className="mb-2"><strong>20.3 No Waiver.</strong> Failure to enforce is not a waiver.</p>
                  <p className="mb-2"><strong>20.4 Assignment.</strong> You may not assign without our consent; we may assign to an affiliate/successor.</p>
                  <p className="mb-2"><strong>20.5 Notices.</strong> Send legal notices to: [legal@infinityforum.club] (or address).</p>
                  <p className="mb-2"><strong>20.6 Headings.</strong> For convenience only; no legal effect.</p>
                  <p className="mb-2"><strong>20.7 Electronic Acceptance.</strong> You consent to electronic signatures and records.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Member Attestations</h3>
                  <p className="mb-4 text-sm italic">(to be acknowledged at signup)</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <span className="block w-4 h-4 border border-slate-400 rounded mt-0.5 flex-shrink-0"></span>
                      <span><strong>Eligibility Confirmation</strong> — I confirm my own or my household's assets exceed $2,000,000 USD (including illiquid assets; excluding primary residence).</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="block w-4 h-4 border border-slate-400 rounded mt-0.5 flex-shrink-0"></span>
                      <span><strong>Non-Solicitation Agreement</strong> — I will not solicit customers/investors or promote goods/services within the community without written permission.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="block w-4 h-4 border border-slate-400 rounded mt-0.5 flex-shrink-0 bg-slate-400"></span>
                      <span><strong>No Guarantees</strong> — I acknowledge Infinity Forum does not guarantee business outcomes, investments, introductions, or results.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="block w-4 h-4 border border-slate-400 rounded mt-0.5 flex-shrink-0 bg-slate-400"></span>
                      <span><strong>Due Diligence</strong> — I will conduct my own due diligence before any investment, partnership, or business activity.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="block w-4 h-4 border border-slate-400 rounded mt-0.5 flex-shrink-0"></span>
                      <span><strong>Compliance & Conduct</strong> — I will comply with applicable laws and Infinity Forum policies, including confidentiality, respectful engagement, and anti-harassment.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="block w-4 h-4 border border-slate-400 rounded mt-0.5 flex-shrink-0"></span>
                      <span><strong>Recording Consent</strong> — I consent to internal audio/video recording for member access, unless I opt out in writing before an event.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="block w-4 h-4 border border-slate-400 rounded mt-0.5 flex-shrink-0"></span>
                      <span><strong>In-Person Risk & Property Waiver</strong> — I assume risks of attendance and release Infinity Forum/hosts from liability for accidents, injuries, losses, or property damage.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="block w-4 h-4 border border-slate-400 rounded mt-0.5 flex-shrink-0"></span>
                      <span><strong>Community Ethos</strong> — I will contribute generously—sharing insights, access, and support—valuing trust, discretion, and substance over promotion.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Optional Program Statements</h4>
                  <p className="text-sm text-slate-600 mb-2 italic">(for your site copy, not contractual)</p>
                  <p className="mb-3"><strong>Limitless Learning (LIVING W.I.S.D.O.M.):</strong> Wealth, Investments, Spirituality, Disruptions, Ownership, Mentorship—peer-to-peer, actionable, impactful.</p>
                  <p><strong>Limitless Impact (Living YODA):</strong> Yoga & meditation sponsorships; angel investing + mentorship for underprivileged founders via board-vetted pre-seed pipeline; impact VC syndicate investing.</p>
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