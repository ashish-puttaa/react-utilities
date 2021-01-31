import * as React from 'react';

const Strip = React.forwardRef((props, ref) => {
   const { className, tag, children, ...otherProps } = props;

   return (
      <div ref={ref} className={`notification is-flex ${className}`} {...otherProps}>
         {children}
      </div>
   );
});

const StripText = ({ children, className }) => {
   return <p className={`is-size-5 ${className}`}>{children}</p>;
};

const StripTag = ({ text, className }) => {
   if (!text) return null;

   return (
      <span className={`tag is-light ${className}`} style={{ marginLeft: 'auto' }}>
         {text}
      </span>
   );
};

Strip.Text = StripText;
Strip.Tag = StripTag;

export default Strip;
