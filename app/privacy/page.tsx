import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";

export default function Privacy() {
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
          Privacy Policy
        </h1>
        
        <p className="text-foreground/70 text-lg mb-12">
          At Ezgoals, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
        </p>

        <div className="space-y-12 mb-16">
          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Shield className="text-purple-600" size={24} />
              Information We Collect
            </h2>
            <p className="text-foreground/70 mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="space-y-2 text-foreground/70 list-disc pl-6">
              <li>Create an account</li>
              <li>Set up your profile</li>
              <li>Create and manage goals</li>
              <li>Interact with our services</li>
              <li>Contact our support team</li>
              <li>Respond to surveys or communications</li>
            </ul>
            <p className="text-foreground/70 mt-4">
              This may include your name, email address, profile information, and any goals or plans you create using our service.
            </p>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Lock className="text-purple-600" size={24} />
              How We Use Your Information
            </h2>
            <p className="text-foreground/70 mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-foreground/70 list-disc pl-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Eye className="text-purple-600" size={24} />
              Information Sharing and Disclosure
            </h2>
            <p className="text-foreground/70 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
            </p>
            <ul className="space-y-2 text-foreground/70 list-disc pl-6">
              <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Ezgoals or others</li>
              <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
              <li>With your consent or at your direction</li>
            </ul>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <FileText className="text-purple-600" size={24} />
              Your Rights and Choices
            </h2>
            <p className="text-foreground/70 mb-4">
              You have several rights regarding your personal data:
            </p>
            <ul className="space-y-2 text-foreground/70 list-disc pl-6">
              <li><strong>Access:</strong> You can request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> You can ask us to correct inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> You can ask us to delete your personal information in certain circumstances</li>
              <li><strong>Restriction:</strong> You can ask us to restrict the processing of your information</li>
              <li><strong>Data portability:</strong> You can ask for a copy of your data in a machine-readable format</li>
              <li><strong>Objection:</strong> You can object to our processing of your information</li>
            </ul>
            <p className="text-foreground/70 mt-4">
              To exercise these rights, please contact us at privacy@ezgoals.com.
            </p>
          </div>
        </div>

        <div className="bg-background border border-foreground/10 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-foreground/70 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="text-foreground/70">
            <p>Ezgoals, Inc.</p>
            <p>123 Goal Street</p>
            <p>Achievement City, AC 12345</p>
            <p>privacy@ezgoals.com</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Your privacy matters to us</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            We're committed to protecting your data while helping you achieve your goals.
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