import { useState } from "react";
import { VaultCard } from "./VaultCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Plus, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const VaultGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("apy");
  const [filterRisk, setFilterRisk] = useState("all");

  // Mock vault data - in real app this would come from Supabase
  const vaults = [
    {
      id: "1",
      name: "USDC Yield Maximizer",
      protocol: "Aave + Compound",
      apy: 18.7,
      tvl: 2400000,
      strategy: "Lending + Farming",
      risk: "Low" as const,
      autoCompound: true,
      depositors: 1247,
      logo: "/placeholder.svg"
    },
    {
      id: "2", 
      name: "ETH Liquid Staking",
      protocol: "Lido + Rocket Pool",
      apy: 15.2,
      tvl: 8900000,
      strategy: "Liquid Staking",
      risk: "Low" as const,
      autoCompound: true,
      depositors: 3456,
      logo: "/placeholder.svg"
    },
    {
      id: "3",
      name: "BTC-ETH LP Optimizer",
      protocol: "Uniswap V3",
      apy: 24.3,
      tvl: 1800000,
      strategy: "LP Farming",
      risk: "Medium" as const,
      autoCompound: true,
      lockPeriod: "7 days",
      depositors: 892,
      logo: "/placeholder.svg"
    },
    {
      id: "4",
      name: "MATIC Validator",
      protocol: "Polygon Staking",
      apy: 12.8,
      tvl: 5600000,
      strategy: "Validator Staking",
      risk: "Low" as const,
      autoCompound: false,
      lockPeriod: "21 days",
      depositors: 2134,
      logo: "/placeholder.svg"
    },
    {
      id: "5",
      name: "DeFi Index Fund",
      protocol: "Multi-Protocol",
      apy: 19.6,
      tvl: 3200000,
      strategy: "Diversified Yield",
      risk: "Medium" as const,
      autoCompound: true,
      depositors: 1876,
      logo: "/placeholder.svg"
    },
    {
      id: "6",
      name: "Stable Coin Trinity",
      protocol: "Curve + Convex",
      apy: 16.4,
      tvl: 7800000,
      strategy: "Stable Farming",
      risk: "Low" as const,
      autoCompound: true,
      depositors: 4523,
      logo: "/placeholder.svg"
    }
  ];

  // Filter and sort vaults
  const filteredVaults = vaults
    .filter(vault => {
      const matchesSearch = vault.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vault.protocol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRisk = filterRisk === "all" || vault.risk.toLowerCase() === filterRisk;
      return matchesSearch && matchesRisk;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "apy":
          return b.apy - a.apy;
        case "tvl":
          return b.tvl - a.tvl;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <section className="py-20 px-4" id="vaults">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Available <span className="gradient-text">Vaults</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated selection of automated yield strategies. 
            Each vault is optimized for maximum returns with minimal risk.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search vaults by name or protocol..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <TrendingUp className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apy">Highest APY</SelectItem>
              <SelectItem value="tvl">Largest TVL</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterRisk} onValueChange={setFilterRisk}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risk Levels</SelectItem>
              <SelectItem value="low">Low Risk</SelectItem>
              <SelectItem value="medium">Medium Risk</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
            </SelectContent>
          </Select>

          <Link to="/create-vault">
            <Button className="bg-primary hover:bg-primary-glow">
              <Plus className="w-4 h-4 mr-2" />
              Create Vault
            </Button>
          </Link>
        </div>

        {/* Filter Summary */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="outline" className="bg-background/50">
            {filteredVaults.length} vaults found
          </Badge>
          {searchTerm && (
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Search: "{searchTerm}"
            </Badge>
          )}
          {filterRisk !== "all" && (
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
              {filterRisk.charAt(0).toUpperCase() + filterRisk.slice(1)} Risk
            </Badge>
          )}
        </div>

        {/* Vault Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVaults.map((vault) => (
            <VaultCard key={vault.id} vault={vault} />
          ))}
        </div>

        {filteredVaults.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No vaults found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find more vaults.
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredVaults.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                alert('More vaults would be loaded here! This requires backend integration.');
              }}
            >
              Load More Vaults
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};