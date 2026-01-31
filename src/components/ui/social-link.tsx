import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Icon3D from './icon-3d';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  variant?: 'default' | 'button' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  label,
  variant = 'default',
  size = 'md',
  className
}) => {
  const baseClasses = "transition-all duration-300";
  
  const variantClasses = {
    default: "text-card-foreground/60 hover:text-primary",
    button: "rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1",
    'icon-only': "hover:text-primary"
  };

  const sizeClasses = {
    sm: variant === 'button' ? 'w-10 h-10' : 'w-5 h-5',
    md: variant === 'button' ? 'w-12 h-12 sm:w-16 sm:h-16' : 'w-6 h-6',
    lg: variant === 'button' ? 'w-16 h-16' : 'w-8 h-8'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      aria-label={label}
    >
      {variant === 'button' ? (
        <Icon3D 
          icon={icon} 
          size="sm" 
          variant="primary"
        />
      ) : (
        React.createElement(icon, { className: "w-full h-full" })
      )}
    </a>
  );
};

export default SocialLink;