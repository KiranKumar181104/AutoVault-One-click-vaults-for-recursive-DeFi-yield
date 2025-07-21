import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  TrendingUp, 
  Wallet, 
  Clock, 
  Users,
  Zap,
  Target,
  Shield
} from "lucide-react";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Total Portfolio Value",
      value: "$24,567.89",
      change: "+12.34%",
      changeType: "positive" as const,
      icon: DollarSign,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Active Vaults",
      value: "7",
      change: "+2 this week",
      changeType: "neutral" as const,
      icon: Wallet,
      gradient: "from-accent to-blue-400"
    },
    {
      title: "Average APY",
      value: "18.7%",
      change: "+2.1%",
      changeType: "positive" as const,
      icon: TrendingUp,
      gradient: "from-success to-green-400"
    },
    {
      title: "Auto-Compounds Today",
      value: "23",
      change: "Saved $127 gas",
      changeType: "neutral" as const,
      icon: Zap,
      gradient: "from-warning to-yellow-400"
    },
  ];

  const getChangeColor = (type: string) => {
    switch (type) {
      case "positive": return "text-success";
      case "negative": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="glass-card hover:border-primary/30 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${getChangeColor(stat.changeType)}`}>
                {stat.change}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};