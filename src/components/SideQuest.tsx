import styles from "./SideQuest.module.css";

export function SideQuest() {
  return (
    <div className={`rpgui-container framed-grey ${styles.questFrame}`}>
  <div className={styles.questList}>

    <div className={`rpgui-container framed-golden-2 ${styles.questItem}`}>
      <span className={styles.questIcon}>🎮</span>
      <div>
        <strong>Digitale Welten erkunden</strong>
        <p>Erkundet fremde Reiche und analysiert Spielmechaniken.</p>
      </div>
    </div>

    <div className={`rpgui-container framed-golden-2 ${styles.questItem}`}>
      <span className={styles.questIcon}>🛠️</span>
      <div>
        <strong>Neue Technologien erforschen</strong>
        <p>Experimentiert mit Tools, Frameworks und neuen Ideen.</p>
      </div>
    </div>

    <div className={`rpgui-container framed-golden-2 ${styles.questItem}`}>
      <span className={styles.questIcon}>🎨</span>
      <div>
        <strong>Kreative Projekte</strong>
        <p>Gestaltung von Interfaces und digitalen Designs.</p>
      </div>
    </div>

    <div className={`rpgui-container framed-golden-2 ${styles.questItem}`}>
      <span className={styles.questIcon}>🌍</span>
      <div>
        <strong>Inspiration sammeln</strong>
        <p>Neue Eindrücke, Ideen und Perspektiven entdecken.</p>
      </div>
    </div>

  </div>
</div>
  );
}