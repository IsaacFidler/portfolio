import { ReactNode } from 'react';
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
    <section className={styles.panel} style={{ ['--ascii-border-style' as string]: borderStyle, ['--panel-padding' as string]: padding }}>
      {header ? <header className={styles.panelHeader}>{header}</header> : null}
      {children}
    </section>
  );
}

export function Divider() {
  return <hr className={styles.divider} />;
}

export function AsciiList({
  items,
}: {
  items: Array<{ prefix?: '[ ]' | '[x]' | '[*]' | '→'; content: ReactNode }>;
}) {
  return (
    <ul className={styles.asciiList}>
      {items.map((item, index) => (
        <li key={index} className={styles.asciiItem}>
          <span className={styles.asciiPrefix}>{item.prefix ?? '[ ]'}</span>
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
      <span className={styles.checkboxToken}>{checked ? '[x]' : '[ ]'}</span>
      <span>{label}</span>
    </label>
  );
}

export function Button({
  children,
  type = 'button',
}: {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}

export function TextLink({ children }: { children: ReactNode }) {
  return <span className={styles.link}>{children}</span>;
}

export function GridShell({
  sidebar,
  mobileHeader,
  mobileMenu,
  main,
  tertiary,
}: {
  sidebar: ReactNode;
  mobileHeader: ReactNode;
  mobileMenu?: ReactNode;
  main: ReactNode;
  tertiary?: ReactNode;
}) {
  return (
    <div className={`${styles.gridShell} ${tertiary ? styles.gridThree : ''}`}>
      <div className={styles.mobileHeader}>{mobileHeader}</div>
      {mobileMenu ? <div className={styles.mobileMenu}>{mobileMenu}</div> : null}
      <aside className={styles.sidebar}>{sidebar}</aside>
      <main className={styles.main}>{main}</main>
      {tertiary ? <aside className={styles.tertiary}>{tertiary}</aside> : null}
    </div>
  );
}
