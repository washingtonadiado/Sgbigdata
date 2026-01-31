import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'interactive';
  size?: 'sm' | 'md' | 'lg';
  withHeader?: boolean;
  headerContent?: React.ReactNode;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  withHeader = false,
  headerContent
}) => {
  const variantClasses = {
    default: 'border-0 shadow-lg card-texture',
    hover: 'border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-texture',
    interactive: 'border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-texture cursor-pointer'
  };

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <Card className={cn(variantClasses[variant], className)}>
      {withHeader && headerContent && (
        <CardHeader>
          {headerContent}
        </CardHeader>
      )}
      <CardContent className={cn(sizeClasses[size])}>
        {children}
      </CardContent>
    </Card>
  );
};

export default EnhancedCard;