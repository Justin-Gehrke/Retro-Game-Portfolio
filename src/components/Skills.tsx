// Skills.tsx (TypeScript)
import styles from "./Skills.module.css";

type SkillItem = {
  label: string;          // z.B. "C#"
  value: number;          // 0..10 (Anzahl Schritte gefüllt)
  color?: string;        // optional: z.B. "green" für grün
};

type SkillsProps = {
  title: string;          // "Programmiersprachen"
  iconSrc?: string;       // "/picon.png"
  steps?: number;         // Defaults auf 10
  items: SkillItem[];     // die einzelnen Balken
};

export default function Skills({ title, iconSrc, steps = 10, items }: SkillsProps) {
  // Helper: value (0..steps) -> Prozent (0..100)
  const toPercent = (v: number) => {
    const clamped = Math.max(0, Math.min(v, steps));
    return (clamped / steps) * 100;
  };

  return (

    
    <div className={`rpgui-container framed-grey ${styles.skillCon}`}>
      {/* Kopf */}
      <label className={styles.label}>
        {iconSrc && <img src={iconSrc} alt="" className={styles.image} />}
        {title}
      </label>


      

      
      {/* Optional: dekorative Slider-Leiste wie in deinem Beispiel */}
      <div className={styles.skillbar}>
        <div className="rpgui-slider-track golden"></div>
        <div className="rpgui-slider-left-edge golden"></div>
        <div className="rpgui-slider-right-edge golden"></div>
      </div>

      
      {/* Einträge */}
      {items.map((it, i) => (
        
        <div className={styles.skillcontent}>
        <label className={styles.entryLabel}>{it.label}</label>
        
        <div key={i} className={styles.itemRow}>
          <p className={styles.Test}>{it.value}</p>

          {/* RPGUI Progress (10 Schritte) */}
            <div className="rpgui-progress-track">
              {/* gefüllter Anteil als Prozent */}
              
              <div
                className={`rpgui-progress-fill ${it.color ? it.color : ``}`}
                style={{ width: `${toPercent(it.value)}%` }}
                
                
              />
      
            </div>
            
           <div className="rpgui-progress-left-edge">
            <p>0</p>
          </div>
          <div className="rpgui-progress-right-edge">
            <p>{steps}</p>
          </div>
        </div>
        </div>
      ))}
      </div>
    

  );
}
