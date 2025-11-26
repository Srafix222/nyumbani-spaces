
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'primary-light';
type ButtonSize = 'sm' | 'md' | 'lg';

// Base props shared by both button and link variants
type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

// Props for a standard <button> element
type ButtonElementProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
  to?: undefined;
};

// Props for a <Link> element styled as a button
type LinkElementProps = BaseProps & LinkProps & {
  as: 'link';
  disabled?: boolean;
};

// Props for an <a> element styled as a button
type AnchorElementProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  to?: undefined; // Prevent conflict with LinkProps
};

type ButtonProps = ButtonElementProps | LinkElementProps | AnchorElementProps;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  // Refined base styles for consistency
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-px transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none';

  // Consistent variant styles with refined hover effects
  const variantStyles = {
    primary: 'bg-brand-green text-white hover:bg-brand-green/90 focus:ring-brand-green disabled:bg-gray-400',
    'primary-light': 'bg-brand-green-light text-white hover:bg-brand-green-light/90 focus:ring-brand-green-light disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-brand-green disabled:bg-gray-100 disabled:text-gray-400',
  };

  // Consistent padding and text sizes
  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-2.5 px-6 text-base', // Increased padding for better feel
    lg: 'py-3 px-8 text-lg',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (props.as === 'link') {
    const { to, disabled, ...rest } = props as LinkElementProps;
    
    // Add disabled styles to Link, which doesn't have a native disabled attribute
    const disabledLinkClasses = disabled ? 'pointer-events-none bg-gray-400' : '';

    return (
      <Link to={to} className={`${combinedClasses} ${disabledLinkClasses}`} {...rest}>
        {children}
      </Link>
    );
  }

  if (props.as === 'a') {
    const { as, ...rest } = props;
    return (
      <a className={combinedClasses} {...rest}>
        {children}
      </a>
    );
  }
  
  // Cast props to the correct type for a button element
  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;