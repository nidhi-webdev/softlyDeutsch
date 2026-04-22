'use client';

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 border border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function CardHeader({ title, description, children }: CardHeaderProps) {
  return (
    <div className="mb-4">
      {title && <h2 className="text-2xl font-bold text-gray-900">{title}</h2>}
      {description && <p className="text-gray-600 mt-1">{description}</p>}
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`text-gray-700 ${className}`}>{children}</div>;
}
