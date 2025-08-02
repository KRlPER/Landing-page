import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Clock, Code, Zap, Target } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
                alt="Code-a-thon Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                Code-a-thon
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">About</a>
              <a href="#schedule" className="text-gray-300 hover:text-gold-400 transition-colors">Schedule</a>
              <a href="#prizes" className="text-gray-300 hover:text-gold-400 transition-colors">Prizes</a>
              <a href="#sponsors" className="text-gray-300 hover:text-gold-400 transition-colors">Sponsors</a>
              <Button className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black font-semibold shadow-lg shadow-gold-400/30">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gold-600/15 rounded-full blur-3xl"></div>
          {/* Background Logo Watermarks */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
            alt=""
            className="absolute top-16 right-8 w-20 h-20 opacity-10 animate-float animate-coin-flip"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
            alt=""
            className="absolute bottom-20 left-8 w-16 h-16 opacity-5 animate-float"
            style={{animationDelay: '1s'}}
          />
          {/* Golden Glitters */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-gold-300 rounded-full animate-glitter"></div>
          <div className="absolute top-48 right-1/3 w-1 h-1 bg-gold-400 rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-64 left-2/3 w-1.5 h-1.5 bg-gold-200 rounded-full animate-glitter" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-80 left-1/2 w-1 h-1 bg-gold-500 rounded-full animate-sparkle" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-96 right-1/4 w-2 h-2 bg-gold-300 rounded-full animate-glitter" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-gold-900 to-gold-800 text-gold-300 border-gold-600">
              March 15-17, 2026
            </Badge>
            {/* Hero Logo */}
            <div className="mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
                alt="Code-a-thon 2026"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 animate-float animate-coin-flip"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent relative">
                Code-a-thon
                {/* Title Glitters */}
                <div className="absolute -top-2 left-8 w-1 h-1 bg-gold-200 rounded-full animate-sparkle"></div>
                <div className="absolute top-4 right-12 w-1.5 h-1.5 bg-gold-300 rounded-full animate-glitter" style={{animationDelay: '0.7s'}}></div>
              </span>
              <br />
              <span className="text-white">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A 2-stage coding competition for college students. From presentation rounds to 24-hour
              offline coding finals - showcase your skills and win amazing prizes!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black font-semibold text-lg px-8 py-6 shadow-xl shadow-gold-400/40 relative overflow-hidden">
                <span className="relative z-10">Register Now - Free</span>
                <div className="absolute top-1 right-2 w-1 h-1 bg-gold-200 rounded-full animate-sparkle"></div>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black">
                View Last Year's Projects
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <Calendar className="w-5 h-5 text-gold-400" />
                <span>March 15-17, 2026</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span>Computer Science Department</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <Users className="w-5 h-5 text-gold-400" />
                <span>All Year Students Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-aos="fade-up" className="py-24 bg-gray-900 relative">
        {/* Section Logo Watermark */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
          alt=""
          className="absolute top-8 right-8 w-12 h-12 opacity-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Code-a-thon 2026?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive 2-stage competition designed for computer science students. Progress through
              presentation rounds and offline finals to win exciting prizes based on your year!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-right"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-900 to-gold-800 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                  <Zap className="w-8 h-8 text-gold-400" />
                  <div className="absolute top-1 right-1 w-1 h-1 bg-gold-300 rounded-full animate-sparkle"></div>
                </div>
                <CardTitle className="text-xl">Innovation First</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Experience a unique 2-stage competition format: PPT presentations followed by
                  a 24-hour offline coding marathon in the finals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-900 to-gold-800 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                  <Users className="w-8 h-8 text-gold-400" />
                  <div className="absolute top-1 right-1 w-1 h-1 bg-gold-300 rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
                </div>
                <CardTitle className="text-xl">Network & Learn</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Network with fellow students, faculty mentors, and industry experts. Learn new
                  technologies and build lasting connections within your department.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-900 to-gold-800 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                  <Trophy className="w-8 h-8 text-gold-400" />
                  <div className="absolute top-1 right-1 w-1 h-1 bg-gold-300 rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
                </div>
                <CardTitle className="text-xl">Win Big</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Win cash prizes, certificates, and recognition based on your academic year.
                  Different prize pools for 1st, 2nd, and 3rd year students!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" data-aos="fade-up" className="py-24 bg-gradient-to-br from-black to-gray-800 relative">
        {/* Section Logo Watermark */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
          alt=""
          className="absolute bottom-8 left-8 w-16 h-16 opacity-5"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
                alt="Competition Stages"
                className="w-16 h-16 mx-auto mb-4 opacity-80"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Competition Stages
            </h2>
            <p className="text-xl text-gray-300">
              Two exciting stages to test your skills and creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg" data-aos="fade-in" data-aos-out="fade-out">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-gold-400" />
                  <Badge variant="outline">Stage 1</Badge>
                </div>
                <CardTitle>PPT Presentation Round</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Duration</span>
                  <span>2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Format</span>
                  <span>Team presentations</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Topic</span>
                  <span>Project proposal & approach</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Selection</span>
                  <span>Top teams advance to Finals</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg" data-aos="fade-in" data-aos-out="fade-out" data-aos-delay="150">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Trophy className="w-5 h-5 text-gold-400" />
                  <Badge variant="outline">Stage 2</Badge>
                </div>
                <CardTitle>Offline Finals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Duration</span>
                  <span>24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location</span>
                  <span>CS Department Lab</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Format</span>
                  <span>In-person coding + mentoring</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Finale</span>
                  <span>Live demos & judging</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" data-aos="fade-up" className="py-24 bg-gray-900 relative">
        {/* Section Logo Watermarks */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
          alt=""
          className="absolute top-8 left-8 w-14 h-14 opacity-10 animate-float"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
          alt=""
          className="absolute bottom-8 right-8 w-12 h-12 opacity-5 animate-float"
          style={{animationDelay: '0.8s'}}
        />
        {/* Prizes section background image */}
        <img
          src="/coinpackfinal.png"
          alt="Prizes Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <img
                src="/coinpackfinal.png"
                alt="Prize Pool"
                className="w-40 h-40 mx-auto mb-4 opacity-90"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Year-wise Prize Pool
            </h2>
            <p className="text-xl text-gray-300">
              Exciting prizes for every academic year - fair competition guaranteed!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <Card
              className="border-2 border-gold-600 shadow-lg relative overflow-hidden bg-gray-800"
              data-aos="fade-right"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600"></div>
              <div className="absolute top-4 right-4 w-1 h-1 bg-gold-300 rounded-full animate-glitter"></div>
              <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-gold-200 rounded-full animate-sparkle" style={{animationDelay: '0.8s'}}></div>
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gold-300">1st Year Students</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-2">₹15,000</div>
                <p className="text-gray-300 mb-4">Winner Prize Pool</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 1st: ₹8,000 + Certificate</li>
                  <li>• 2nd: ₹5,000 + Certificate</li>
                  <li>• 3rd: ₹2,000 + Certificate</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="border-2 border-gold-500 shadow-lg relative overflow-hidden bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-600"></div>
              <div className="absolute top-4 right-4 w-1 h-1 bg-gold-300 rounded-full animate-glitter" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-gold-200 rounded-full animate-sparkle" style={{animationDelay: '1.1s'}}></div>
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gold-300">2nd Year Students</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-2">₹25,000</div>
                <p className="text-gray-300 mb-4">Winner Prize Pool</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 1st: ₹12,000 + Certificate</li>
                  <li>• 2nd: ₹8,000 + Certificate</li>
                  <li>• 3rd: ₹5,000 + Certificate</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="border-2 border-gold-400 shadow-lg relative overflow-hidden bg-gray-800"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 to-gold-500"></div>
              <div className="absolute top-4 right-4 w-1 h-1 bg-gold-300 rounded-full animate-glitter" style={{animationDelay: '0.6s'}}></div>
              <div className="absolute bottom-6 left-4 w-1.5 h-1.5 bg-gold-200 rounded-full animate-sparkle" style={{animationDelay: '1.4s'}}></div>
              <CardHeader className="text-center">
                <Trophy className="w-12 h-12 text-gold-300 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gold-200">3rd Year Students</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-2">₹35,000</div>
                <p className="text-gray-300 mb-4">Winner Prize Pool</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 1st: ₹20,000 + Certificate</li>
                  <li>• 2nd: ₹10,000 + Certificate</li>
                  <li>• 3rd: ₹5,000 + Certificate</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Plus special category prizes: Best Innovation, Best UI/UX, Most Practical Solution,
              and Faculty Choice Award for outstanding projects!
            </p>
            <Button size="lg" className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black font-semibold shadow-xl shadow-gold-400/40 relative">
              Register by Academic Year
              <div className="absolute top-1 right-3 w-1 h-1 bg-gold-200 rounded-full animate-sparkle"></div>
            </Button>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-24 bg-gradient-to-r from-gold-500 to-gold-400 relative overflow-hidden">
        {/* CTA Section Logo and Glitters */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
          alt=""
          className="absolute top-8 left-8 w-16 h-16 animate-float"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
          alt=""
          className="absolute bottom-8 right-8 w-14 h-14 animate-float"
          style={{animationDelay: '1.5s'}}
        />
        <div className="absolute top-8 left-1/4 w-2 h-2 bg-gold-200 rounded-full animate-float"></div>
        <div className="absolute top-16 right-1/3 w-1 h-1 bg-gold-100 rounded-full animate-glitter" style={{animationDelay: '0.4s'}}></div>
        <div className="absolute bottom-12 left-1/2 w-1.5 h-1.5 bg-gold-200 rounded-full animate-sparkle" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-gold-100 rounded-full animate-glitter" style={{animationDelay: '1.2s'}}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Showcase Your Skills?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Join fellow CS students in this exciting 2-stage competition. Test your presentation skills,
            coding abilities, and teamwork. Registration is free for all department students!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-black text-gold-400 hover:bg-gray-900 border-black relative">
              Register for Free
              <div className="absolute top-1 right-2 w-1 h-1 bg-gold-300 rounded-full animate-sparkle"></div>
            </Button>
          </div>
          <p className="text-gray-700 mt-6 text-sm">
            Open to all CS Department students • Register with your academic year • Closes February 28, 2026
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fee0d610f9ecb4b1f9c780c37d4baaff4%2Ffc4136c6064c4bcdaf1b0cc0cf3f2d64?format=webp&width=800"
                  alt="Code-a-thon Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold">Code-a-thon 2026</span>
              </div>
              <p className="text-gray-400">
                Building the future, one hack at a time.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Event</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#prizes" className="hover:text-white transition-colors">Prizes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rules</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Starter Kits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mentors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Code-a-thon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

