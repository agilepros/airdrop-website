import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <a href="https://trading-tigers.com"> 
          <Image
            src='https://trading-tigers.com/static/media/Logo.5fb5819b.png'
            alt="Logo"
            width={275}
             />
        </a>
      </h1>
    </div>
  )
}

export default Logo;