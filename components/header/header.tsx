import Link from 'next/link';
import Image from 'next/image';
import s from './header.module.scss';
import { cva } from 'class-variance-authority';

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
        <Link href="/">
          <Image src="/next.svg" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className={s.menu}>
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
                        <Link className={s.navLink} href="/">
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
      </div>
    </header>
  );
}
