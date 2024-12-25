'use client';

import s from './hamburger.module.scss';
import { useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';

const buns = cva(s['b-default'], {
  variants: {
    variant: {
      top: s.top,
      meat: s.meat,
      bottom: s.bottom,
    },
  },
});

export default function Hamburger() {
  const [active, setActive] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return;
    }

    document.documentElement.style.setProperty('--open-menu-width', active ? '0' : '100%');
  }, [active]);

  return (
    <button aria-label="Open main menu" className={s.hamburger} onClick={() => setActive(!active)}>
      <label className={active ? s.open : s.closed} htmlFor="navi-toggle" hidden>
        <span className={buns({ variant: 'top' })}>&nbsp;</span>
        <span className={buns({ variant: 'meat' })}>&nbsp;</span>
        <span className={buns({ variant: 'bottom' })}>&nbsp;</span>
      </label>
    </button>
  );
}
