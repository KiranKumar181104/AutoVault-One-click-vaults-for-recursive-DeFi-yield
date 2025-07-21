import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Zap,
  RefreshCw,
  ArrowUpRight,
  Target
} from "lucide-react";

export const StrategyOverview = () => {
  const performanceData = [
    { name: "Jan", value: 4.2 },
    { name: "Feb", value: 7.1 },
    { name: "Mar", value: 12.3 },
    { name: "Apr", value: 8.7 },
    { name: "May", value: 15.2 },
    { name: "Jun", value: 18.9 },
  ];

  const allocationData = [
    { name: "Aave USDC", value: 35, color: "#10B981" },
    { name: "Compound ETH", value: 25, color: "#3B82F6" },
    { name: "Yearn DAI", value: 20, color: "#F59E0B" },
    { name: "PancakeSwap LP", value: 20, color: "#8B5CF6" },
  ];

  const strategies = [
    {
      name: "Conservative Lending",
      protocols: ["Aave", "Compound"],
      apy: "8.2%",
      allocation: 45,
      risk: "Low",
      status: "Active"
    },
    {
      name: "Liquidity Farming",
      protocols: ["PancakeSwap", "Uniswap"],
      apy: "24.7%",
      allocation: 30,
      risk: "Medium",
      status: "Active"
    },
    {
      name: "Yield Aggregation",
      protocols: ["Yearn", "Convex"],
      apy: "16.3%",
      allocation: 25,
      risk: "Medium",
      status: "Optimizing"
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "text-success border-success/20 bg-success/10";
      case "Medium": return "text-warning border-warning/20 bg-warning/10";
      case "High": return "text-destructive border-destructive/20 bg-destructive/10";
      default: return "text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-success border-success/20 bg-success/10";
      case "Optimizing": return "text-warning border-warning/20 bg-warning/10";
      case "Paused": return "text-muted-foreground border-muted/20 bg-muted/10";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Performance Chart */}
      <Card className="glass-card lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <BarChart className="w-5 h-5 text-primary" />
              <span>Monthly Returns</span>
            </CardTitle>
            <Badge className="bg-success/20 text-success border-success/20">
              +18.9% This Month
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Portfolio Allocation */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-primary" />
            <span>Asset Allocation</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={allocationData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {allocationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.name}</span>
                </div>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Strategies */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Active Strategies</span>
            </CardTitle>
            <Button variant="ghost" size="icon">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {strategies.map((strategy, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/20 border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{strategy.name}</h4>
                <Badge className={getStatusColor(strategy.status)}>
                  {strategy.status}
                </Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">APY</span>
                  <span className="font-medium text-success">{strategy.apy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Risk</span>
                  <Badge className={getRiskColor(strategy.risk)}>
                    {strategy.risk}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Allocation</span>
                    <span className="font-medium">{strategy.allocation}%</span>
                  </div>
                  <Progress value={strategy.allocation} className="h-1" />
                </div>
                <div className="flex flex-wrap gap-1">
                  {strategy.protocols.map((protocol, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {protocol}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};