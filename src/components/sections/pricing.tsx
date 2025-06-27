"use client";

import * as React from "react";
import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  Zap, 
  Crown, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Rocket,
  Brain,
  Users,
  Globe,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

// Button component
const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 rounded-md px-3",
          size === "lg" && "h-11 rounded-md px-8",
          size === "icon" && "h-10 w-10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Switch component
const Switch = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
  }
>(({ className, checked, onCheckedChange, ...props }, ref) => (
  <button
    role="switch"
    aria-checked={checked}
    onClick={() => onCheckedChange?.(!checked)}
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      checked ? "bg-primary" : "bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <div
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
        checked ? "translate-x-5" : "translate-x-0"
      )}
    />
  </button>
));
Switch.displayName = "Switch";

// Badge component
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

// Card component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// Types
interface PricingTier {
  name: string;
  subtitle: string;
  price: { monthly: number; yearly: number };
  description: string;
  icon: typeof Zap;
  gradient: string;
  borderGradient: string;
  features: string[];
  highlight: boolean;
  badge: string | null;
  ariaLabel?: string;
}

interface AdditionalFeature {
  icon: typeof Brain;
  title: string;
  description: string;
}

interface PremiumPricingProps {
  customTiers?: PricingTier[];
  customFeatures?: AdditionalFeature[];
  onPlanSelect?: (planName: string, isYearly: boolean) => void;
  ctaText?: string;
  showAdditionalFeatures?: boolean;
  showCTASection?: boolean;
  yearlyDiscountPercent?: number;
}

// Default data
const pricingPlans: PricingTier[] = [
  {
    name: "Starter",
    subtitle: "Perfect for individuals",
    price: { monthly: 29, yearly: 290 },
    description: "Get started with AI-powered productivity tools",
    icon: Zap,
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-400 to-cyan-400",
    features: [
      "5 AI projects per month",
      "Basic AI models access",
      "Email support",
      "Standard templates",
      "1GB cloud storage",
      "Basic analytics"
    ],
    highlight: false,
    badge: null
  },
  {
    name: "Professional",
    subtitle: "Most popular choice",
    price: { monthly: 99, yearly: 990 },
    description: "Advanced AI capabilities for growing teams",
    icon: Crown,
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderGradient: "from-indigo-400 to-purple-400",
    features: [
      "Unlimited AI projects",
      "Premium AI models",
      "Priority support",
      "Custom templates",
      "100GB cloud storage",
      "Advanced analytics",
      "Team collaboration",
      "API access"
    ],
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    subtitle: "For large organizations",
    price: { monthly: 299, yearly: 2990 },
    description: "Enterprise-grade AI solutions with full control",
    icon: Rocket,
    gradient: "from-rose-500/20 to-pink-500/20",
    borderGradient: "from-rose-400 to-pink-400",
    features: [
      "Everything in Professional",
      "Custom AI model training",
      "24/7 dedicated support",
      "Unlimited cloud storage",
      "Advanced security",
      "Custom integrations",
      "SLA guarantee",
      "White-label options"
    ],
    highlight: false,
    badge: "Enterprise"
  }
];

const additionalFeatures: AdditionalFeature[] = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Access to GPT-4, Claude, and custom models"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption"
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "99.9% uptime with worldwide data centers"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration with unlimited teammates"
  }
];

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="flex flex-col items-center justify-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
    <AlertCircle className="h-8 w-8 text-red-500 mb-4" />
    <h3 className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2">
      Something went wrong
    </h3>
    <p className="text-red-600 dark:text-red-400 text-center mb-4">
      {error.message}
    </p>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
    >
      Try again
    </button>
  </div>
);

// Validation helpers
const validatePricingTier = (tier: PricingTier): boolean => {
  return (
    typeof tier.name === 'string' &&
    typeof tier.subtitle === 'string' &&
    typeof tier.price === 'object' &&
    typeof tier.price.monthly === 'number' &&
    typeof tier.price.yearly === 'number' &&
    tier.price.monthly > 0 &&
    tier.price.yearly > 0 &&
    typeof tier.description === 'string' &&
    Array.isArray(tier.features) &&
    tier.features.length > 0
  );
};

const validateAdditionalFeature = (feature: AdditionalFeature): boolean => {
  return (
    typeof feature.title === 'string' &&
    typeof feature.description === 'string' &&
    typeof feature.icon === 'function'
  );
};

// Main component
export function PremiumPricing({
  customTiers,
  customFeatures,
  onPlanSelect,
  ctaText = "Get Started",
  showAdditionalFeatures = true,
  showCTASection = true,
  yearlyDiscountPercent = 20
}: PremiumPricingProps = {}) {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const validationResult = useMemo(() => {
    let tiers = pricingPlans;
    let features = additionalFeatures;
    let hasError = false;
    let errorMessage = '';

    try {
      if (customTiers) {
        const invalidTiers = customTiers.filter(tier => !validatePricingTier(tier));
        if (invalidTiers.length > 0) {
          hasError = true;
          errorMessage = 'Invalid pricing tiers provided. Please check the tier configuration.';
        } else {
          tiers = customTiers;
        }
      }

      if (customFeatures && !hasError) {
        const invalidFeatures = customFeatures.filter(feature => !validateAdditionalFeature(feature));
        if (invalidFeatures.length > 0) {
          hasError = true;
          errorMessage = 'Invalid additional features provided. Please check the feature configuration.';
        } else {
          features = customFeatures;
        }
      }

      if (yearlyDiscountPercent < 0 || yearlyDiscountPercent > 100) {
        hasError = true;
        errorMessage = `Yearly discount percent must be between 0 and 100. Received: ${yearlyDiscountPercent}`;
      }
    } catch (err) {
      hasError = true;
      errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    }

    return { tiers, features, hasError, errorMessage };
  }, [customTiers, customFeatures, yearlyDiscountPercent]);

  const { tiers, features, hasError, errorMessage } = validationResult;

  const handlePlanSelect = (planName: string) => {
    try {
      onPlanSelect?.(planName, isYearly);
    } catch (err) {
      console.error('Error in plan selection callback:', err);
    }
  };

  const calculateYearlySavings = (monthlyPrice: number, yearlyPrice: number) => {
    if (typeof monthlyPrice !== 'number' || typeof yearlyPrice !== 'number') {
      return 0;
    }
    return Math.max(0, (monthlyPrice * 12) - yearlyPrice);
  };

  if (hasError) {
    return <ErrorFallback error={new Error(errorMessage)} resetErrorBoundary={() => window.location.reload()} />;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 0.86, 0.39, 0.96] 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-black via-indigo-950/20 to-black text-white overflow-hidden">
      {/* ...omitted for brevity, see previous message for full code... */}
    </section>
  );
}

function PricingDemo() {
  const handlePlanSelect = (planName: string, isYearly: boolean) => {
    console.log(`Selected ${planName} plan with ${isYearly ? 'yearly' : 'monthly'} billing`);
  };

  return (
    <div className="min-h-screen bg-background">
      <PremiumPricing 
        onPlanSelect={handlePlanSelect}
        ctaText="Get Started"
        showAdditionalFeatures={true}
        showCTASection={true}
        yearlyDiscountPercent={20}
      />
    </div>
  );
}

export default PricingDemo; 