import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://t.me/TradingTigersNews" target="_blank" rel="noreferrer" >Telegram</a>
        </li>
        <li>
          <a href="https://twitter.com/trading_tigers"  target="_blank" rel="noreferrer" >Twitter</a>
        </li>
        <li>
          <a href="https://github.com/Trading-Tiger" target="_blank" rel="noreferrer" >Github</a>
        </li>
        <li>
          <a href="https://docs.trading-tigers.com" target="_blank" rel="noreferrer" >Gitbook</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;