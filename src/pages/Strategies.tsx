import { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  DollarSign, 
  Target,
  Zap,
  BarChart3,
  Search,
  Filter,
  BookOpen,
  Play,
  Star
} from 'lucide-react';

export default function Strategies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [riskFilter, setRiskFilter] = useState('all');

  const strategies = [
    {
      id: '1',
      name: 'USDC Stability Strategy',
      category: 'Stablecoin',
      risk: 'Low',
      apy: '8.5%',
      tvl: '$45.2M',
      protocols: ['Aave', 'Compound'],
      description: 'Conservative stablecoin farming with automated rebalancing across multiple lending protocols.',
      complexity: 'Beginner',
      minDeposit: '$100',
      featured: true,
    },
    {
      id: '2',
      name: 'ETH Recursive Leverage',
      category: 'Leveraged',
      risk: 'High',
      apy: '24.7%',
      tvl: '$12.8M',
      protocols: ['Aave', 'Curve'],
      description: 'Recursive ETH strategy using borrowing and re-staking for amplified returns.',
      complexity: 'Advanced',
      minDeposit: '$1,000',
      featured: false,
    },
    {
      id: '3',
      name: 'BTC Delta Neutral',
      category: 'Arbitrage',
      risk: 'Medium',
      apy: '15.2%',
      tvl: '$28.7M',
      protocols: ['Uniswap', 'PancakeSwap'],
      description: 'Market-neutral strategy capturing funding rates and LP fees.',
      complexity: 'Intermediate',
      minDeposit: '$500',
      featured: true,
    },
    {
      id: '4',
      name: 'Multi-Asset Yield',
      category: 'Diversified',
      risk: 'Medium',
      apy: '18.9%',
      tvl: '$67.4M',
      protocols: ['Yearn', 'Convex', 'Balancer'],
      description: 'Diversified strategy across multiple assets and protocols for stable yields.',
      complexity: 'Intermediate',
      minDeposit: '$250',
      featured: false,
    },
    {
      id: '5',
      name: 'Cross-Chain Arbitrage',
      category: 'Arbitrage',
      risk: 'High',
      apy: '31.4%',
      tvl: '$8.9M',
      protocols: ['Bridge', 'Stargate'],
      description: 'Automated arbitrage opportunities across different blockchain networks.',
      complexity: 'Expert',
      minDeposit: '$2,000',
      featured: false,
    },
    {
      id: '6',
      name: 'Stablecoin Trinity',
      category: 'Stablecoin',
      risk: 'Low',
      apy: '12.1%',
      tvl: '$89.3M',
      protocols: ['Curve', 'Convex'],
      description: 'Optimized farming across USDC, USDT, and DAI pools.',
      complexity: 'Beginner',
      minDeposit: '$50',
      featured: true,
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-success border-success/20 bg-success/10';
      case 'Medium': return 'text-warning border-warning/20 bg-warning/10';
      case 'High': return 'text-destructive border-destructive/20 bg-destructive/10';
      default: return 'text-muted-foreground';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'text-success';
      case 'Intermediate': return 'text-warning';
      case 'Advanced': return 'text-info';
      case 'Expert': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const filteredStrategies = strategies.filter(strategy => {
    const matchesSearch = strategy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         strategy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || strategy.category.toLowerCase() === categoryFilter;
    const matchesRisk = riskFilter === 'all' || strategy.risk.toLowerCase() === riskFilter;
    
    return matchesSearch && matchesCategory && matchesRisk;
  });

  const featuredStrategies = strategies.filter(s => s.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            DeFi <span className="gradient-text">Strategies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover and learn about automated yield strategies. From beginner-friendly stablecoin farming 
            to advanced leveraged strategies.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">47</div>
              <div className="text-sm text-muted-foreground">Active Strategies</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-success">$2.1B</div>
              <div className="text-sm text-muted-foreground">Total TVL</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-warning">18.4%</div>
              <div className="text-sm text-muted-foreground">Avg APY</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-accent">94.7%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Strategies */}
        <section className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Star className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Featured Strategies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStrategies.map((strategy) => (
              <Card key={strategy.id} className="glass-card group hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Featured
                    </Badge>
                    <Badge className={getRiskColor(strategy.risk)}>
                      {strategy.risk} Risk
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {strategy.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {strategy.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">APY</p>
                      <p className="text-xl font-bold text-success">{strategy.apy}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">TVL</p>
                      <p className="text-lg font-semibold">{strategy.tvl}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-glow">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search strategies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="stablecoin">Stablecoin</SelectItem>
              <SelectItem value="leveraged">Leveraged</SelectItem>
              <SelectItem value="arbitrage">Arbitrage</SelectItem>
              <SelectItem value="diversified">Diversified</SelectItem>
            </SelectContent>
          </Select>
          <Select value={riskFilter} onValueChange={setRiskFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risk Levels</SelectItem>
              <SelectItem value="low">Low Risk</SelectItem>
              <SelectItem value="medium">Medium Risk</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* All Strategies */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredStrategies.map((strategy) => (
            <Card key={strategy.id} className="glass-card group hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">
                    {strategy.category}
                  </Badge>
                  <Badge className={getRiskColor(strategy.risk)}>
                    {strategy.risk} Risk
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {strategy.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {strategy.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">APY</p>
                    <p className="text-xl font-bold text-success">{strategy.apy}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">TVL</p>
                    <p className="text-lg font-semibold">{strategy.tvl}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Complexity</span>
                    <span className={`font-medium ${getComplexityColor(strategy.complexity)}`}>
                      {strategy.complexity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Min Deposit</span>
                    <span className="font-medium">{strategy.minDeposit}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {strategy.protocols.map((protocol) => (
                    <Badge key={protocol} variant="secondary" className="text-xs">
                      {protocol}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Learn
                  </Button>
                  <Button className="flex-1 bg-primary hover:bg-primary-glow">
                    <Play className="w-4 h-4 mr-2" />
                    Deploy
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStrategies.length === 0 && (
          <div className="text-center py-12">
            <Target className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No strategies found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}