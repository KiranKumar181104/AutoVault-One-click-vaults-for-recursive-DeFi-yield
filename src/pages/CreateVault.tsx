import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/Header';
import { useToast } from '@/hooks/use-toast';
import { 
  TrendingUp, 
  Shield, 
  DollarSign, 
  Clock, 
  Zap,
  Target,
  AlertTriangle,
  Info
} from 'lucide-react';

export default function CreateVault() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    protocol: '',
    strategy: '',
    riskLevel: 'medium',
    minDeposit: '',
    maxDeposit: '',
    lockPeriod: '',
    autoCompound: true,
    managementFee: 2,
    performanceFee: 10,
  });
  const [isCreating, setIsCreating] = useState(false);

  const protocols = [
    'Aave',
    'Compound',
    'Yearn Finance',
    'PancakeSwap',
    'Uniswap V3',
    'Curve Finance',
    'Convex Finance',
    'Balancer',
  ];

  const strategies = [
    'Liquidity Mining',
    'Yield Farming',
    'Lending & Borrowing',
    'Recursive Strategy',
    'Delta Neutral',
    'Leveraged Farming',
    'Cross-Chain Arbitrage',
    'Stablecoin Farming',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);

    // Simulate vault creation
    setTimeout(() => {
      setIsCreating(false);
      toast({
        title: "Vault created successfully!",
        description: `${formData.name} has been deployed and is ready for deposits.`,
      });
      // Redirect to vaults page
      window.location.href = '/#vaults';
    }, 3000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-success border-success/20 bg-success/10';
      case 'medium': return 'text-warning border-warning/20 bg-warning/10';
      case 'high': return 'text-destructive border-destructive/20 bg-destructive/10';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Create New <span className="gradient-text">Vault</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deploy your own automated DeFi yield strategy and start earning passive income.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Basic Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Vault Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g., USDC High Yield Vault"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="protocol">Primary Protocol</Label>
                    <Select value={formData.protocol} onValueChange={(value) => setFormData({...formData, protocol: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select protocol" />
                      </SelectTrigger>
                      <SelectContent>
                        {protocols.map((protocol) => (
                          <SelectItem key={protocol} value={protocol.toLowerCase()}>
                            {protocol}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your vault strategy and objectives..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Strategy Configuration */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Strategy Configuration</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="strategy">Strategy Type</Label>
                    <Select value={formData.strategy} onValueChange={(value) => setFormData({...formData, strategy: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select strategy" />
                      </SelectTrigger>
                      <SelectContent>
                        {strategies.map((strategy) => (
                          <SelectItem key={strategy} value={strategy.toLowerCase()}>
                            {strategy}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Risk Level</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {['low', 'medium', 'high'].map((risk) => (
                        <Button
                          key={risk}
                          type="button"
                          variant={formData.riskLevel === risk ? 'default' : 'outline'}
                          onClick={() => setFormData({...formData, riskLevel: risk})}
                          className={formData.riskLevel === risk ? getRiskColor(risk) : ''}
                        >
                          <Shield className="w-4 h-4 mr-1" />
                          {risk.charAt(0).toUpperCase() + risk.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Auto-Compounding</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically reinvest yields to maximize returns
                    </p>
                  </div>
                  <Switch
                    checked={formData.autoCompound}
                    onCheckedChange={(checked) => setFormData({...formData, autoCompound: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Deposit Limits */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span>Deposit Limits</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="minDeposit">Minimum Deposit (USD)</Label>
                    <Input
                      id="minDeposit"
                      type="number"
                      placeholder="100"
                      value={formData.minDeposit}
                      onChange={(e) => setFormData({...formData, minDeposit: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxDeposit">Maximum Deposit (USD)</Label>
                    <Input
                      id="maxDeposit"
                      type="number"
                      placeholder="1000000"
                      value={formData.maxDeposit}
                      onChange={(e) => setFormData({...formData, maxDeposit: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lockPeriod">Lock Period (days)</Label>
                    <Input
                      id="lockPeriod"
                      type="number"
                      placeholder="0"
                      value={formData.lockPeriod}
                      onChange={(e) => setFormData({...formData, lockPeriod: e.target.value})}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fee Structure */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Fee Structure</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Management Fee: {formData.managementFee}%</Label>
                    <Slider
                      value={[formData.managementFee]}
                      onValueChange={(value) => setFormData({...formData, managementFee: value[0]})}
                      max={5}
                      step={0.1}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground">
                      Annual fee charged on total assets under management
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Performance Fee: {formData.performanceFee}%</Label>
                    <Slider
                      value={[formData.performanceFee]}
                      onValueChange={(value) => setFormData({...formData, performanceFee: value[0]})}
                      max={30}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground">
                      Fee charged on profits generated above high water mark
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warning and Submit */}
            <Card className="glass-card border-warning/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-6">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-warning">Important Notice</h3>
                    <p className="text-sm text-muted-foreground">
                      Creating a vault involves smart contract deployment and requires careful consideration of strategy parameters. 
                      Ensure you understand the risks involved and have tested your strategy thoroughly.
                    </p>
                  </div>
                </div>

                <Separator className="mb-6" />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Estimated Gas Cost</p>
                    <p className="text-sm text-muted-foreground">~0.05 ETH ($85)</p>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isCreating || !formData.name || !formData.protocol}
                    className="bg-primary hover:bg-primary-glow glow-primary px-8"
                    size="lg"
                  >
                    {isCreating ? (
                      <>
                        <Zap className="w-5 h-5 mr-2 animate-spin" />
                        Deploying Vault...
                      </>
                    ) : (
                      <>
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Deploy Vault
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </main>
    </div>
  );
}