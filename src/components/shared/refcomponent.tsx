import React from 'react';

interface IRefComponent { children?: any, className?: string }
const RefDivComponent: any = React.forwardRef( ({ className, children }: IRefComponent, ref?: React.Ref<HTMLDivElement>) => (
    <div className={className || ''} ref={ref}>{children}</div>
));

export default RefDivComponent;