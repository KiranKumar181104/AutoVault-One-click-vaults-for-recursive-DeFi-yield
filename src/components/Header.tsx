import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, Shield, Menu, X, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWallet } from "@/hooks/useWallet";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isConnected, address, connectWallet, disconnectWallet } = useWallet();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold gradient-text">AutoVault</h1>
            <p className="text-xs text-muted-foreground">DeFi Yield Automation</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#vaults" className="text-foreground hover:text-primary transition-colors">
            Vaults
          </a>
          <a href="#analytics" className="text-foreground hover:text-primary transition-colors">
            Analytics
          </a>
          <Link to="/strategies" className="text-foreground hover:text-primary transition-colors">
            Strategies
          </Link>
          <Link to="/create-vault" className="text-foreground hover:text-primary transition-colors">
            Create Vault
          </Link>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-success" />
            <span className="text-sm text-muted-foreground">Audited</span>
          </div>
        </nav>

        {/* Wallet Connection */}
        <div className="flex items-center space-x-4">
          {!isConnected && (
            <Link to="/login">
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          )}
          
          {isConnected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="space-x-2">
                  <Wallet className="w-4 h-4" />
                  <span className="hidden sm:inline">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
                  <Badge variant="secondary" className="bg-success/20 text-success border-success/20">
                    Connected
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => {}}>
                  View Portfolio
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {}}>
                  Transaction History
                </DropdownMenuItem>
                <DropdownMenuItem onClick={disconnectWallet} className="text-destructive">
                  Disconnect
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={connectWallet} className="bg-primary hover:bg-primary-glow glow-primary">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#vaults" className="block text-foreground hover:text-primary transition-colors">
              Vaults
            </a>
            <a href="#analytics" className="block text-foreground hover:text-primary transition-colors">
              Analytics
            </a>
            <Link to="/strategies" className="block text-foreground hover:text-primary transition-colors">
              Strategies
            </Link>
            <Link to="/create-vault" className="block text-foreground hover:text-primary transition-colors">
              Create Vault
            </Link>
            {!isConnected && (
              <Link to="/login" className="block text-foreground hover:text-primary transition-colors">
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};