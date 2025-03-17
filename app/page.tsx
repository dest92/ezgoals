import { Target, Calendar, Gift, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 font-mono to-pink-600 text-transparent bg-clip-text">
            Ezgoals
          </span>
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

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-6">
            Achieve Your Goals <br />
            With Clarity & Purpose
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            The simple, powerful way to transform your aspirations into
            achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-8 py-4 hover:opacity-90 transition-opacity"
            >
              <span className="font-semibold">Get Started Free</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="how-it-works"
              className="flex items-center justify-center gap-2 border border-foreground/10 rounded-lg px-8 py-4 hover:bg-foreground/5 transition-colors"
            >
              <span className="font-semibold">See How It Works</span>
            </Link>
          </div>
        </div>

        {/* 3-Column Feature Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-background border border-foreground/10 rounded-xl p-8 hover:border-purple-600/30 transition-all group">
            <div className="w-14 h-14 rounded-full bg-purple-600/10 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-all">
              <Target className="text-purple-600" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Set Clear Objectives
            </h3>
            <p className="text-foreground/60 mb-4">
              Define meaningful goals with specific outcomes. Break down big
              dreams into achievable milestones.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-purple-600" />
                <span>Specific & measurable targets</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-purple-600" />
                <span>Categorize by life areas</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-purple-600" />
                <span>Prioritize what matters most</span>
              </li>
            </ul>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8 hover:border-purple-600/30 transition-all group">
            <div className="w-14 h-14 rounded-full bg-purple-600/10 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-all">
              <Calendar className="text-purple-600" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Strategic Planning</h3>
            <p className="text-foreground/60 mb-4">
              Create actionable plans with step-by-step guidance. Track progress
              and build momentum with daily streaks.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-purple-600" />
                <span>Step-by-step action plans</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-purple-600" />
                <span>Daily/weekly check-ins</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-purple-600" />
                <span>Streak tracking for consistency</span>
              </li>
            </ul>
          </div>

          <div className="bg-background border border-foreground/10 rounded-xl p-8 hover:border-purple-600/30 transition-all group">
            <div className="w-14 h-14 rounded-full bg-purple-600/10 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-all">
              <Gift className="text-purple-600" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Meaningful Rewards</h3>
            <p className="text-foreground/60 mb-4">
              Stay motivated with personalized rewards. Celebrate achievements
              and reinforce positive habits.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-purple-600" />
                <span>Custom reward system</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-purple-600" />
                <span>Achievement milestones</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <CheckCircle size={16} className="text-purple-600" />
                <span>Celebration reminders</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Ezgoals Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Define Your Goal</h3>
              <p className="text-foreground/60">
                Set a clear, specific goal with a deadline and define why it
                matters to you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Plan</h3>
              <p className="text-foreground/60">
                Break down your goal into actionable steps and set up regular
                check-ins.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Reward</h3>
              <p className="text-foreground/60">
                Select meaningful rewards that motivate you to stay consistent
                and celebrate wins.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="bg-background border border-foreground/10 rounded-xl p-6 text-center">
            <h4 className="text-4xl font-bold text-purple-600 mb-2">10k+</h4>
            <p className="text-foreground/60">Goals Achieved</p>
          </div>
          <div className="bg-background border border-foreground/10 rounded-xl p-6 text-center">
            <h4 className="text-4xl font-bold text-purple-600 mb-2">87%</h4>
            <p className="text-foreground/60">Completion Rate</p>
          </div>
          <div className="bg-background border border-foreground/10 rounded-xl p-6 text-center">
            <h4 className="text-4xl font-bold text-purple-600 mb-2">30+</h4>
            <p className="text-foreground/60">Avg. Streak Days</p>
          </div>
          <div className="bg-background border border-foreground/10 rounded-xl p-6 text-center">
            <h4 className="text-4xl font-bold text-purple-600 mb-2">5k+</h4>
            <p className="text-foreground/60">Happy Users</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-10 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to achieve your goals?
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Join thousands of goal-setters who are turning their dreams into
            reality with Ezgoals.
          </p>
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-8 py-4 mx-auto w-fit hover:opacity-90 transition-opacity"
          >
            <span className="font-semibold">Start Your Journey</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>

      <footer className="border-t border-foreground/10 py-10">
        <div className="container mx-auto px-4 text-center text-foreground/60">
          <p>© 2025 Ezgoals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
