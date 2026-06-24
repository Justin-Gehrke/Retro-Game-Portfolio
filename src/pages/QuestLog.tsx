import ProjectsCards from "../components/ProjectCards";
import styles from "./QuestLog.module.css";
export function QuestLog() {

  return (
    <>
    <div>
      <h1>Quest Log</h1>
      <hr />
    </div>

     {/* Projekte-Bereich */}
        <div className={styles.projectsWrap}>
          <div className={styles.projectsMasonry}>
            <ProjectsCards
              title="Beispielprojekt"
              description="In diesem Projekt wurde eine responsive Webseite programmiert, die sich automatisch an verschiedene Bildschirmgrößen (PC, Tablet, Smartphone) anpasst. Dabei wurden moderne Webtechnologien wie HTML, CSS und JavaScript eingesetzt, um eine benutzerfreundliche Oberfläche und eine klare Struktur zu gewährleisten..
                 
                "
              useTech="React, TypeScript, Node.js, Express, MongoDB "
              youPos="Entwickler & Designer"
              startDate={new Date(2022, 0, 15)}
              endDate={new Date(2022, 5, 30)}
              link="https://www.google.com/"
            />
             <ProjectsCards
              title="Beispielprojekt"
              description="In diesem Projekt wurde eine responsive Webseite programmiert, die sich automatisch an verschiedene Bildschirmgrößen (PC, Tablet, Smartphone) anpasst. Dabei wurden moderne Webtechnologien wie HTML, CSS und JavaScript eingesetzt, um eine benutzerfreundliche Oberfläche und eine klare Struktur zu gewährleisten."
              useTech="React, TypeScript, Node.js, Express, MongoDB"
              youPos="Entwickler & Designer"
              startDate={new Date(2022, 0, 15)}
              endDate={new Date(2022, 5, 30)}
            />
             <ProjectsCards
              title="Beispielprojekt"
              description="In diesem Projekt wurde eine responsive Webseite programmiert, die sich automatisch an verschiedene Bildschirmgrößen (PC, Tablet, Smartphone) anpasst. Dabei wurden moderne Webtechnologien wie HTML, CSS und JavaScript eingesetzt, um eine benutzerfreundliche Oberfläche und eine klare Struktur zu gewährleisten."
              useTech="React, TypeScript, Node.js, Express, MongoDB"
              youPos="Entwickler & Designer"
              startDate={new Date(2022, 0, 15)}
              endDate={new Date(2022, 5, 30)}
            />
             <ProjectsCards
              title="Beispielprojekt"
              description="In diesem Projekt wurde eine responsive Webseite programmiert, die sich automatisch an verschiedene Bildschirmgrößen (PC, Tablet, Smartphone) anpasst. Dabei wurden moderne Webtechnologien wie HTML, CSS und JavaScript eingesetzt, um eine benutzerfreundliche Oberfläche und eine klare Struktur zu gewährleisten."
              youPos="Entwickler & Designer"
              startDate={new Date(2022, 0, 15)}
              endDate={new Date(2022, 5, 30)}
            />
            {/* Hier können weitere Projekte eingefügt werden */}
          </div>
        </div>
    </>
  );
}