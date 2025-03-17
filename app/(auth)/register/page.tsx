import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto px-4 py-16 max-w-md">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to home</span>
        </Link>
        
        <div className="bg-background border border-foreground/10 rounded-xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Create your account</h1>
            <p className="text-foreground/60">Start your goal-setting journey today</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-purple-600/50"
                  placeholder="John"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-purple-600/50"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-purple-600/50"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-purple-600/50"
                placeholder="••••••••"
                required
              />
              <p className="text-xs text-foreground/60 mt-1">
                Must be at least 8 characters with a number and a special character
              </p>
            </div>
            
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 mt-1 rounded border-foreground/20 text-purple-600 focus:ring-purple-600/50"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-foreground/60">
                I agree to the{" "}
                <Link href="/terms" className="text-purple-600 hover:text-purple-500">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-purple-600 hover:text-purple-500">
                  Privacy Policy
                </Link>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-4 py-3 hover:opacity-90 transition-opacity"
            >
              <span className="font-semibold">Create account</span>
              <ArrowRight size={16} />
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-foreground/60">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-600 hover:text-purple-500 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}