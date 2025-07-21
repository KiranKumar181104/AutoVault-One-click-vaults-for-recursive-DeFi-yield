import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DashboardStats } from "@/components/DashboardStats";
import { VaultGrid } from "@/components/VaultGrid";
import { StrategyOverview } from "@/components/StrategyOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <HeroSection />
        
        {/* Dashboard Section */}
        <section className="py-16 px-4" id="analytics">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Your <span className="gradient-text">Portfolio</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track your DeFi investments and automated strategies in real-time.
              </p>
            </div>
            <DashboardStats />
          </div>
        </section>

        <VaultGrid />

        {/* Strategy Section */}
        <section className="py-16 px-4 bg-muted/20" id="strategies">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Strategy <span className="gradient-text">Analytics</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Monitor performance and optimize your automated yield strategies.
              </p>
            </div>
            <StrategyOverview />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
