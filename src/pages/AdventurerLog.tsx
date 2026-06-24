import React from "react";
import styles from "./AdventurerLog.module.css";
import { AdventureBox } from "../components/AdventureBox.tsx";
import Education from "../components/Education.tsx";
import { SideQuest } from "../components/SideQuest.tsx";

export function AdventurerLog() {
  {/*
  // hier bestimmst du initial offen/zu:
  const [openMap, setOpenMap] = React.useState<Record<string, boolean>>({
    hobbys: true,
    erfahrungen: false,
    ziele: true,
  });
  */}
  return (
    <>
      <h1>Adventurer Log</h1>
      <hr />

      {/*<div className={styles.adventurerCon}>
        <AdventureBox
          title="Hobbys"
          open={openMap.hobbys}
          onOpenChange={(isOpen) => setOpenMap((m) => ({ ...m, hobbys: isOpen }))}
        >
          <p>Ich spiele gerne Games und programmiere kleine Projekte.</p>
        </AdventureBox>

        <AdventureBox
          title="Erfahrungen"
          open={openMap.erfahrungen}
          onOpenChange={(isOpen) => setOpenMap((m) => ({ ...m, erfahrungen: isOpen }))}
        >
          <p>Ich habe bereits mit React, CSS und HTML gearbeitet.</p>
        </AdventureBox>

        <AdventureBox
          title="Ziele"
          open={openMap.ziele}
          onOpenChange={(isOpen) => setOpenMap((m) => ({ ...m, ziele: isOpen }))}
        >
          <p>Mein Ziel ist es, ein guter Frontend-Developer zu werden.</p>
        </AdventureBox>
      </div>
      */}
    
    <div className={styles.container}>
      
      <div className={`rpgui-container framed ${styles.div1,styles.adventurerframe}`}>
        
        <div className={styles.adventurerTitle}>
          Hintergrund Geschichte
        </div>
        <div className={`rpgui-container framed-grey ${styles.adventurerCon}`}>
         <p>Aus den pulsierenden Straßen Berlins stammt ein angehender Gelehrter der digitalen Künste, der sich zwischen Code und Kreativität seinen eigenen Weg bahnt.</p>

          <p>Getrieben von Neugier begann er, die verborgenen Strukturen moderner Technologien zu erforschen und sich Schritt für Schritt in der Welt der Informatik zurechtzufinden.</p>

          <p>Dabei sammelt er Erfahrungen im Umgang mit verschiedenen Programmiersprachen, Werkzeugen und Konzepten, die es ihm ermöglichen, Ideen in funktionierende Anwendungen zu verwandeln.</p>

          <p>In gemeinsamen Projekten lernte er, Wissen zu teilen, Lösungen zu entwickeln und Herausforderungen mit Struktur und Geduld zu begegnen.</p>

          <p>Jede neue Technologie stellt für ihn kein Hindernis dar, sondern eine Gelegenheit, dazuzulernen und seine Fähigkeiten weiter auszubauen.</p>

          <p>Sein Weg hat gerade erst begonnen – doch mit jedem Schritt wächst sein Verständnis für die Welt hinter dem Code.</p>
        </div>
      </div>
      <div className={`rpgui-container framed ${styles.div2,styles.adventurerframe}`}>
        <div className={styles.adventurerTitle}>Werdegang</div>
        <Education />
        <div className={styles.adventurerTitle}>nebenquest</div>
        <SideQuest />
      </div>
     
    </div>   
    </>
    
  );
}