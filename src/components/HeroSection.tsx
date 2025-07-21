import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Target,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export const HeroSection = () => {
  const features = [
    "One-click vault deployment",
    "Automated yield compounding", 
    "Cross-protocol optimization",
    "Gas-efficient strategies"
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors">
            <Shield className="w-4 h-4 mr-2" />
            Audited & Secure
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">AutoVault</span>
              <br />
              <span className="text-foreground">DeFi Yield</span>
              <br />
              <span className="text-foreground">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Maximize your DeFi returns with one-click vaults that automatically compound yields 
              across multiple protocols. No manual intervention required.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$127M+</div>
              <div className="text-sm text-muted-foreground">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">24.7%</div>
              <div className="text-sm text-muted-foreground">Average APY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">15K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">47</div>
              <div className="text-sm text-muted-foreground">Supported Protocols</div>
            </div>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-left">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow glow-primary text-lg px-8 py-6"
              onClick={() => document.getElementById('vaults')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Start Earning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/strategies">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary/30 hover:border-primary/50"
              >
                <Target className="w-5 h-5 mr-2" />
                View Strategies
              </Button>
            </Link>
          </div>

          {/* Risk Disclaimer */}
          <p className="text-xs text-muted-foreground max-w-xl mx-auto pt-8">
            <Shield className="w-4 h-4 inline mr-1" />
            Smart contracts audited by leading security firms. DeFi investing involves risk. 
            Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
};