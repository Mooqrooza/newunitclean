import React from 'react';

interface IRefComponent { children?: any, className?: string }
export const RefDivComponent: any = React.forwardRef( ({ className, children }: IRefComponent, ref?: React.Ref<HTMLDivElement>) => (
    <div className={className || ''} ref={ref}>{children}</div>
));
export const RefInputComponent: any = React.forwardRef( ({ className, children }: IRefComponent, ref?: React.Ref<HTMLInputElement>) => (
    <input className={className || ''} ref={ref}>{children}</input>
));