import Link from "next/link";
import { ArrowLeft, FileText, AlertCircle, CheckSquare, HelpCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-purple-600 font-mono to-pink-600 text-transparent bg-clip-text">
            Ezgoals
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors">
            Login
          </Link>
          <Link href="/register" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity">
            Sign Up
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to home</span>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-8">
          Terms of Service
        </h1>
        
        <p className="text-foreground/70 text-lg mb-4">
          Last updated: June 1, 2025
        </p>
        
        <p className="text-foreground/70 mb-12">
          Please read these Terms of Service carefully before using Ezgoals. By accessing or using our service, you agree to be bound by these terms.
        </p>

        <div className="space-y-12 mb-16">
          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <FileText className="text-purple-600" size={24} />
              1. Acceptance of Terms
            </h2>
            <p className="text-foreground/70">
              By accessing or using our service, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of the terms, you may not access the service.
            </p>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <CheckSquare className="text-purple-600" size={24} />
              2. User Accounts
            </h2>
            <p className="text-foreground/70 mb-4">
              When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-foreground/70 mb-4">
              You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
            </p>
            <p className="text-foreground/70">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <AlertCircle className="text-purple-600" size={24} />
              3. Prohibited Uses
            </h2>
            <p className="text-foreground/70 mb-4">
              You agree not to use the service:
            </p>
            <ul className="space-y-2 text-foreground/70 list-disc pl-6">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation</li>
              <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the service, or which may harm the Company or users of the service</li>
            </ul>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <HelpCircle className="text-purple-600" size={24} />
              4. Intellectual Property
            </h2>
            <p className="text-foreground/70 mb-4">
              The service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Ezgoals and its licensors.
            </p>
            <p className="text-foreground/70">
              Our service may contain links to third-party websites or services that are not owned or controlled by Ezgoals. Ezgoals has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
            <p className="text-foreground/70 mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-foreground/70">
              Upon termination, your right to use the service will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or contact us to request account deletion.
            </p>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-foreground/70 mb-4">
              In no event shall Ezgoals, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="space-y-2 text-foreground/70 list-disc pl-6">
              <li>Your access to or use of or inability to access or use the service</li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>Unauthorized access, use or alteration of your transmissions or content</li>
            </ul>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimer</h2>
            <p className="text-foreground/70 mb-4">
              Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied.
            </p>
            <p className="text-foreground/70">
              Ezgoals does not warrant that the service will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected. The results that may be obtained from the use of the service are at your discretion and risk.
            </p>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-foreground/70">
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="text-foreground/70">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-foreground/70 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="text-foreground/70">
              <p>Ezgoals, Inc.</p>
              <p>123 Goal Street</p>
              <p>Achievement City, AC 12345</p>
              <p>legal@ezgoals.com</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to achieve your goals?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Join thousands of goal-setters who are turning their dreams into reality with Ezgoals.
          </p>
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-8 py-4 mx-auto w-fit hover:opacity-90 transition-opacity"
          >
            <span className="font-semibold">Get Started</span>
          </Link>
        </div>
      </main>

      <footer className="border-t border-foreground/10 py-10 mt-16">
        <div className="container mx-auto px-4 text-center text-foreground/60">
          <p>© 2025 Ezgoals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}