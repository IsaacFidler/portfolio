import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './ascii-primitives.module.css';

type BorderVariant = 'dotted' | 'solid';

export function Panel({
  children,
  border = 'dotted',
  padding = '16px',
  header,
}: {
  children: ReactNode;
  border?: BorderVariant;
  padding?: string;
  header?: ReactNode;
}) {
  const borderStyle = border === 'solid' ? '1px solid var(--ascii-border)' : '1px dotted var(--ascii-border)';

  return (
    <section
      data-ascii-panel
      className={styles.panel}
      style={{ ['--ascii-border-style' as string]: borderStyle, ['--panel-padding' as string]: padding }}
    >
      {header ? (
        <header data-ascii-panel-header className={styles.panelHeader}>
          {header}
        </header>
      ) : null}
      {children}
    </section>
  );
}

export function Divider() {
  return <hr data-ascii-divider className={styles.divider} />;
}

export function AsciiList({
  items,
}: {
  items: Array<{ prefix?: '[ ]' | '[x]' | '[*]' | '→'; content: ReactNode }>;
}) {
  return (
    <ul data-ascii-list className={styles.asciiList}>
      {items.map((item, index) => (
        <li key={index} data-ascii-item className={styles.asciiItem}>
          <span data-ascii-prefix className={styles.asciiPrefix}>
            {item.prefix ?? '[ ]'}
          </span>
          <span>{item.content}</span>
        </li>
      ))}
    </ul>
  );
}

export function AsciiCheckbox({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label htmlFor={id} className={styles.checkboxLabel}>
      <input
        id={id}
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span data-ascii-checkbox-token className={styles.checkboxToken}>
        {checked ? '[x]' : '[ ]'}
      </span>
      <span>{label}</span>
    </label>
  );
}

export function Button({
  children,
  type = 'button',
  asChild = false,
}: {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-ascii-button
      type={asChild ? undefined : type}
      className={styles.button}
    >
      {children}
    </Comp>
  );
}

export function TextLink({ children }: { children: ReactNode }) {
  return (
    <span data-ascii-link className={styles.link}>
      {children}
    </span>
  );
}

export function GridShell({
  backdrop,
  sidebar,
  mobileHeader,
  mobileMenu,
  main,
  tertiary,
}: {
  backdrop?: ReactNode;
  sidebar: ReactNode;
  mobileHeader: ReactNode;
  mobileMenu?: ReactNode;
  main: ReactNode;
  tertiary?: ReactNode;
}) {
  return (
    <div data-ascii-root className={styles.asciiRoot}>
      {backdrop}
      <div
        data-ascii-shell
        data-ascii-three={tertiary ? 'true' : undefined}
        className={`${styles.gridShell} ${tertiary ? styles.gridThree : ''}`}
      >
        <div data-ascii-mobile-header className={styles.mobileHeader}>
          {mobileHeader}
        </div>
        {mobileMenu ? (
          <div data-ascii-mobile-menu className={styles.mobileMenu}>
            {mobileMenu}
          </div>
        ) : null}
        <aside data-ascii-sidebar className={styles.sidebar}>
          {sidebar}
        </aside>
        <main data-ascii-main className={styles.main}>
          {main}
        </main>
        {tertiary ? (
          <aside data-ascii-tertiary className={styles.tertiary}>
            {tertiary}
          </aside>
        ) : null}
      </div>
    </div>
  );
}
