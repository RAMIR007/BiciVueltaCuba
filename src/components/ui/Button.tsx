import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex min-h-11 items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-[#125740]",
        secondary: "bg-secondary text-white hover:bg-[#23887c]",
        outline: "border border-primary/30 text-primary bg-white hover:bg-primary/5",
        ghost: "text-foreground hover:bg-black/5"
    };

    const sizes = {
        sm: "min-h-10 px-4 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-7 py-3 text-base"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
