import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  DollarSign, 
  Users, 
  Zap,
  ArrowUpRight,
  Lock
} from "lucide-react";

interface VaultCardProps {
  vault: {
    id: string;
    name: string;
    protocol: string;
    apy: number;
    tvl: number;
    strategy: string;
    risk: "Low" | "Medium" | "High";
    autoCompound: boolean;
    lockPeriod?: string;
    depositors: number;
    logo: string;
  };
}

export const VaultCard = ({ vault }: VaultCardProps) => {
  const [isDepositing, setIsDepositing] = useState(false);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "text-success border-success/20 bg-success/10";
      case "Medium": return "text-warning border-warning/20 bg-warning/10";
      case "High": return "text-destructive border-destructive/20 bg-destructive/10";
      default: return "text-muted-foreground";
    }
  };

  const formatTVL = (tvl: number) => {
    if (tvl >= 1000000) return `$${(tvl / 1000000).toFixed(1)}M`;
    if (tvl >= 1000) return `$${(tvl / 1000).toFixed(1)}K`;
    return `$${tvl}`;
  };

  const handleDeposit = () => {
    setIsDepositing(true);
    // Simulate deposit process
    setTimeout(() => setIsDepositing(false), 2000);
  };

  return (
    <Card className="glass-card vault-card group hover:border-primary/50 overflow-hidden">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <img 
                src={vault.logo} 
                alt={vault.protocol}
                className="w-8 h-8 rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <TrendingUp className="w-6 h-6 text-primary hidden" />
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {vault.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{vault.protocol}</p>
            </div>
          </div>
          <Badge className={getRiskColor(vault.risk)}>
            {vault.risk} Risk
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">APY</p>
            <p className="text-2xl font-bold text-success">
              {vault.apy}%
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">TVL</p>
            <p className="text-xl font-semibold">{formatTVL(vault.tvl)}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Strategy</span>
            <span className="font-medium">{vault.strategy}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Depositors
            </span>
            <span className="font-medium">{vault.depositors.toLocaleString()}</span>
          </div>

          {vault.lockPeriod && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center">
                <Lock className="w-4 h-4 mr-1" />
                Lock Period
              </span>
              <span className="font-medium">{vault.lockPeriod}</span>
            </div>
          )}

          {vault.autoCompound && (
            <div className="flex items-center space-x-2 text-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Auto-Compounding</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Capacity</span>
            <span className="text-muted-foreground">85%</span>
          </div>
          <Progress value={85} className="h-2" />
        </div>

        <div className="flex space-x-2">
          <Button 
            onClick={handleDeposit}
            disabled={isDepositing}
            className="flex-1 bg-primary hover:bg-primary-glow glow-primary"
          >
            <DollarSign className="w-4 h-4 mr-2" />
            {isDepositing ? "Depositing..." : "Deposit"}
          </Button>
          <Button variant="outline" size="icon">
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};