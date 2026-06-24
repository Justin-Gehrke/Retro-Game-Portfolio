import React from "react";
import styles from "./AdventureBox.module.css";

type AdventureBoxProps = {
  title: string;
  children: React.ReactNode;

  open: boolean; // Parent bestimmt offen/zu
  onOpenChange?: (open: boolean) => void; // optional: Parent updaten, wenn User klickt
  
};

export function AdventureBox({ title, children, open, onOpenChange }: AdventureBoxProps) {
  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  // DOM-Zustand mit React-State synchron halten
  React.useEffect(() => {
    if (!detailsRef.current) return;
    detailsRef.current.open = open;
  }, [open]);

  return (
    <details
      ref={detailsRef}
      className={`rpgui-container framed-golden ${styles.adventurerframe}`}
      onToggle={(e) => {
        const isOpen = (e.currentTarget as HTMLDetailsElement).open;
        onOpenChange?.(isOpen);
      }}
    >
      <summary className="rpgui-content rpgui-cursor-point">
        <p>{title}</p>
      </summary>

      <div className={styles.content}>{children}</div>
    </details>
  );
}