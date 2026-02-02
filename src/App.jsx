import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';

import {
  CheckCircle2,
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles,
  Clock,
  Target,
  Star
} from 'lucide-react';

const Landing = () => {
  const [email, setEmail] = useState('');

  const handleGetStarted = (e) => {
    e.preventDefault();
    console.log('Sign up email:', email);
    alert(`Thanks for your interest! We'll reach out to ${email} soon.`);
    setEmail('');
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Automation",
      description: "Automate repetitive tasks and workflows in seconds. Save up to 15 hours per week with intelligent automation.",
      image: "./automation.jpg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Seamless Team Collaboration",
      description: "Real-time collaboration tools that keep your entire team in sync. No more scattered communication.",
      image: "./teamwork.jpg"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics Dashboard",
      description: "Get actionable insights with powerful analytics. Track productivity metrics and optimize team performance.",
      image: "./analytics.jpg"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Goal Tracking",
      description: "Set, track, and achieve goals with AI-powered recommendations. Stay focused on what matters most.",
      image: "./goal_tracking.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Ashok Kumar",
      role: "Product Manager",
      content: "FlowSync transformed how our team works. We've seen a 40% increase in productivity since switching.",
      rating: 5
    },
    {
      name: "Nikhil Joshi",
      role: "Chief Executive Officer",
      content: "The automation features alone saved us countless hours. Best investment we've made this year.",
      rating: 5
    },
    {
      name: "Kunal Khanna",
      role: "Operations Lead",
      content: "Finally, a productivity tool that's actually easy to use. Our entire team adopted it in just days.",
      rating: 5
    }
  ];

  const trustedCompanies = [
    "TechFlow",
    "StartupHub",
    "Innovate Co",
    "CloudSync",
    "DataVision",
    "NextGen"
  ];

  return (
    <div className="landing-page">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">FlowSync</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            <Button onClick={() => {
              document.getElementById("ctasection").scrollIntoView();
            }} variant="outline" size="sm" className="hover-lift cursor-pointer">Sign Up</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <h1 className="hero-title text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Work Smarter, Not Harder
              </h1>
              <p className="hero-subtitle text-xl text-gray-600 mb-8 leading-relaxed">
                FlowSync combines powerful automation, seamless collaboration, and intelligent insights to help teams achieve more in less time.
              </p>
              <form onSubmit={handleGetStarted} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 px-6 text-lg py-2.5"
                />
                <Button type="submit" size="lg" className="cta-button h-14 px-8 text-lg font-semibold">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            <div className="hero-image relative">
              <div className="image-wrapper rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="hero.jpg"
                  alt="Modern workspace"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="floating-badge absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15hrs</div>
                  <div className="text-sm text-gray-600">Saved per week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-wide">
            Trusted by leading teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="company-logo text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and boost team productivity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <CardContent className="p-0 flex flex-col justify-between">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`${feature.image}?w=600&q=80`}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by Teams Everywhere
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about FlowSync
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6" id='ctasection'>
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-box bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of teams already working smarter with FlowSync. Start your free trial today.
            </p>
            <form onSubmit={handleGetStarted} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 text-lg bg-white text-black"
              />
              <Button type="submit" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8 text-lg font-semibold">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
            <p className="text-sm mt-6 opacity-80">No credit card required • 14-day free trial</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">FlowSync</span>
              </div>
              <p className="text-sm text-gray-400">
                Empowering teams to work smarter with intelligent productivity tools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 FlowSync. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
