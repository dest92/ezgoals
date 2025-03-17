import Link from "next/link";
import { ArrowLeft, Target, Calendar, Gift, CheckCircle } from "lucide-react";

export default function HowItWorks() {
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
          How Ezgoals Works
        </h1>
        
        <p className="text-foreground/70 text-lg mb-12">
          Ezgoals is designed to help you transform your aspirations into achievements through a simple, effective process.
        </p>

        <div className="space-y-16 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 rounded-full bg-purple-600/10 flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-purple-600">1</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">Define Your Goal</h2>
              <p className="text-foreground/70 mb-4">
                Start by setting a clear, specific goal with a deadline. The more specific your goal, the easier it will be to create an actionable plan.
              </p>
              <div className="bg-background border border-foreground/10 rounded-xl p-6">
                <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <Target className="text-purple-600" size={20} />
                  <span>What makes a good goal?</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Specific and measurable</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Challenging but achievable</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Meaningful to you personally</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Has a clear deadline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 rounded-full bg-purple-600/10 flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-purple-600">2</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">Create Your Plan</h2>
              <p className="text-foreground/70 mb-4">
                Break down your goal into actionable steps and set up regular check-ins to track your progress. A good plan makes complex goals manageable.
              </p>
              <div className="bg-background border border-foreground/10 rounded-xl p-6">
                <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <Calendar className="text-purple-600" size={20} />
                  <span>Planning best practices</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Break goals into smaller milestones</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Set daily or weekly actions</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Schedule regular progress reviews</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Adjust your plan as needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 rounded-full bg-purple-600/10 flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-purple-600">3</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">Choose Your Reward</h2>
              <p className="text-foreground/70 mb-4">
                Select meaningful rewards that motivate you to stay consistent and celebrate your achievements. Rewards reinforce positive habits.
              </p>
              <div className="bg-background border border-foreground/10 rounded-xl p-6">
                <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <Gift className="text-purple-600" size={20} />
                  <span>Effective rewards</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Choose rewards that are meaningful to you</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Scale rewards to match milestone importance</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Include both small and large rewards</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle size={16} className="text-purple-600" />
                    <span>Actually take your rewards when earned</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Join thousands of goal-setters who are turning their dreams into reality with Ezgoals.
          </p>
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-8 py-4 mx-auto w-fit hover:opacity-90 transition-opacity"
          >
            <span className="font-semibold">Create Your Account</span>
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