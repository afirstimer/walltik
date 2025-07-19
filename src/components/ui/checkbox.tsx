import * as React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                type="checkbox"
                ref={ref}
                className={`w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500 ${className}`}
                {...props}
            />
        );
    }
);

Checkbox.displayName = 'Checkbox';
