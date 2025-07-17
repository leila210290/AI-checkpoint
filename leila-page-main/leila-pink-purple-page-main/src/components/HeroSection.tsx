
import { Button } from "@/components/ui/button";
import { Sparkles, Code, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-light-pink-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-light-purple-200 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-light-pink-300 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-light-purple-300 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Decorative icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-light-pink-400 to-light-purple-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-6 shadow-xl">
                <Sparkles className="w-12 h-12 text-light-purple-500" />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">OUERTANI</span>{" "}
            <span className="gradient-text">Leila</span>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Code className="w-6 h-6 text-light-pink-500" />
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              Web Developer
            </h2>
            <Palette className="w-6 h-6 text-light-purple-500" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful and functional web experiences with modern technologies. 
            Let's bring your digital vision to life.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-light-pink-500 to-light-purple-500 hover:from-light-pink-600 hover:to-light-purple-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
            >
              View My Projects
            </Button>
          </div>

          {/* Decorative elements below button */}
          <div className="flex justify-center gap-8 mt-12 opacity-60">
            <div className="w-2 h-2 bg-light-pink-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-light-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-light-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
