import React from 'react';
import * as Lucide from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
  key?: any;
}

export default function LucideIcon({ 
  name, 
  className = '', 
  size = 24, 
  strokeWidth = 2 
}: LucideIconProps) {
  // Safe mapping of icon names to lucide components
  const IconComponent = (Lucide as Record<string, React.ComponentType<any>>)[name];
  
  if (!IconComponent) {
    // Return a fallback fallback block if name is not found
    return <Lucide.HelpCircle className={className} size={size} strokeWidth={strokeWidth} />;
  }
  
  return <IconComponent className={className} size={size} strokeWidth={strokeWidth} />;
}
