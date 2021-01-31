import * as React from 'react';

import './strip.styles.scss';

const Strip = React.forwardRef((props, ref) => {
   const { className, tag, children, ...otherProps } = props;

   return (
      <div ref={ref} className={`notification is-flex strip-wrapper ${className}`} {...otherProps}>
         {children}
      </div>
   );
});

const StripText = ({ children, className }) => {
   return <div className={`is-size-5 strip-text ${className}`}>{children}</div>;
};

const StripTag = ({ text, className }) => {
   if (!text) return null;

   return <span className={`tag is-light strip-tag ${className}`}>{text}</span>;
};

Strip.Text = StripText;
Strip.Tag = StripTag;

export default Strip;
