import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Icon3DHeroProps {
  icon: LucideIcon;
  className?: string;
  size?: 'lg' | 'xl' | '2xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'navy';
  animated?: boolean;
}

const Icon3DHero: React.FC<Icon3DHeroProps> = ({ 
  icon: IconComponent, 
  className, 
  size = 'xl',
  variant = 'primary',
  animated = true
}) => {
  const sizeClasses = {
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24'
  };

  const variantClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    navy: 'text-navy'
  };

  return (
    <div className={cn(
      "icon-3d-hero-container relative",
      animated && "icon-3d-float"
    )}>
      <div className={cn(
        "icon-3d-hero-wrapper relative transition-all duration-500 ease-out",
        "hover:scale-125 hover:-translate-y-2",
        "transform-gpu perspective-1000 cursor-pointer"
      )}>
        {/* Multiple shadow layers for depth */}
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-30 blur-lg",
          "bg-gradient-to-br from-current via-current to-transparent",
          "transform translate-y-4 scale-90",
          variantClasses[variant]
        )} />
        
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-20 blur-md",
          "bg-gradient-to-br from-current to-transparent",
          "transform translate-y-2 scale-95",
          variantClasses[variant]
        )} />
        
        {/* Main icon container with enhanced 3D effect */}
        <div className={cn(
          "relative z-10 rounded-2xl p-4",
          "bg-gradient-to-br from-white/30 via-white/20 to-white/10",
          "backdrop-blur-md border border-white/20",
          "shadow-2xl hover:shadow-3xl",
          "transition-all duration-500 ease-out",
          "hover:bg-gradient-to-br hover:from-white/40 hover:via-white/30 hover:to-white/20",
          "before:absolute before:inset-0 before:rounded-2xl",
          "before:bg-gradient-to-br before:from-white/40 before:to-transparent",
          "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
        )}>
          <IconComponent 
            className={cn(
              sizeClasses[size],
              variantClasses[variant],
              "drop-shadow-lg relative z-10",
              "transition-all duration-300",
              "hover:drop-shadow-2xl",
              className
            )} 
          />
        </div>
        
        {/* Animated highlight ring */}
        <div className={cn(
          "absolute inset-0 rounded-2xl border-2 opacity-0",
          "hover:opacity-100 transition-all duration-300",
          "animate-pulse",
          variant === 'primary' && "border-primary/50",
          variant === 'secondary' && "border-secondary/50",
          variant === 'accent' && "border-accent/50",
          variant === 'navy' && "border-navy/50"
        )} />
      </div>
    </div>
  );
};

export default Icon3DHero;