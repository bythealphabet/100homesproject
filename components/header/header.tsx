import Link from 'next/link';
import s from './header.module.scss';
import { cva } from 'class-variance-authority';
import Hamburger from '@/components/hamburger/hamburger';
const header = cva([s.header, 'base-grid']);
const dropdownMenu = cva([s.navLink, s.dropdownMenu]);

type NavigationLink = {
  label: string;
  href?: string;
  dropdown?: boolean;
  dropdownLinks?: string[];
};

const navigationLinks: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', dropdown: true, dropdownLinks: ['Services 1', 'Services 2', 'Services 3'] },
  {
    label: 'Developments',
    dropdown: true,
    dropdownLinks: ['Developments 1', 'Developments 2', 'Developments 3', 'Developments 4'],
  },
  { label: 'Packages', dropdown: true, dropdownLinks: ['Packages 1', 'Packages 2'] },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className={header()}>
      <div className={s.logo}>
        <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 12.1H13.5C15 12.1 16.2 13.3 16.2 14.8C16.2 16.3 15 17.5 13.5 17.5H0C0.5 24.3 6.2 29.6 13.1 29.6H13.6C15.1 29.6 16.3 30.8 16.3 32.3C16.3 33.8 15.1 35 13.6 35H13.1C6.2 35 0.5 40.3 0 47.1H35.9C42.8 47.1 48.5 41.8 49 35H35.5C34 35 32.8 33.8 32.8 32.3C32.8 30.8 34 29.6 35.5 29.6H49C48.5 22.8 42.8 17.5 35.9 17.5H35.4C33.9 17.5 32.7 16.3 32.7 14.8C32.7 13.3 33.9 12.1 35.4 12.1H35.9C42.8 12.1 48.5 6.8 49 0H13.1C6.2 0 0.5 5.3 0 12.1Z"
            fill="white"
          />
        </svg>
      </div>
      <Hamburger />
      <div className={s.menu}>
        <nav>
          <ul role="list" className={s.navLinks}>
            {navigationLinks.map((link) =>
              link.dropdown || link.href === undefined ? (
                <li className={s.navLinkItem} key={link.label}>
                  <div className={dropdownMenu()}>
                    <div className={s.dropdownTrigger}>
                      <button className={s.dropdownTriggerButton}>{link.label}</button>
                      <svg className={s.dropdownIcon} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.989502 1.70193L6.99991 7.71234L13.0103 1.70193L11.5961 0.28772L6.99991 4.88391L2.40372 0.28772L0.989502 1.70193Z" />
                      </svg>
                    </div>
                    <span className={s.underline}></span>
                    <ul className={s.navSubMenu} role="list">
                      {link.dropdownLinks?.map((sublink) => (
                        <li key={sublink}>
                          <Link className={s.navSubLink} href="/">
                            {sublink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li className={s.navLinkItem} key={link.href}>
                  <Link className={s.navLink} href={link.href}>
                    {link.label}
                  </Link>
                  <span className={s.underline}></span>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
