// App.tsx
import Avatar from "./components/Avatar";
import AboutMe from "./components/AboutMe";
import ShInfAboutMe from "./components/ShInfAboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/ProjectCards";

export default function App() {

  return (

    <section className="rpgui-container framed appFrame">
      <div className="layout">
        {/* Avatar + AboutMe oben */}
        <div className="avatarAbout">
          <div className="avatarWrap">
            <Avatar />
          </div>
          <div className="aboutWrap">
            <AboutMe />
          </div>
        </div>

        {/* Hauptreihe: links .below, rechts Skills */}
        <div className="mainRow">
          <div className="below">
            <ShInfAboutMe />
            <Education />
            
          </div>

          {/* RECHTS: EIN Container => Masonry */}
          <div className="skillsWrap">
            <div className="skillsMasonry">
              {/* === ALLE Skills MÜSSEN HIER REIN === */}
                <Skills
                  title="Programmiersprachen & Web"
                  items={[
                    { label: "C#", value: 9, color: "blue" },
                    { label: "Java", value: 8, color: "blue" },
                    { label: "JavaScript/TypeScript", value: 8, color: "blue" },
                    { label: "Python", value: 7, color: "blue" },
                    { label: "HTML & CSS", value: 7, color: "blue" },
                  ]}
                />

                <Skills
                  title="Frameworks & Tools"
                  items={[
                    { label: "React", value: 8, color: "red" },
                    { label: "Angular", value: 7, color: "red" },
                    { label: "Next.js", value: 6, color: "red" },
                    { label: "Git", value: 8, color: "red" },
                    { label: "Docker", value: 5, color: "red" },
                    { label: "Linux", value: 6, color: "red" },
                  ]}
                />

                <Skills
                  title="Datenbanken & Server"
                  items={[
                    { label: "MySQL", value: 8 },
                    { label: "PostgreSQL", value: 7 },
                    { label: "MongoDB", value: 6 },
                    { label: ".NET Core", value: 5, },
                  ]}
                />

                <Skills
                  title="Design & Multimedia"
                  items={[
                    { label: "Figma", value: 7, color: "blue" },
                    { label: "Adobe Photoshop", value: 4, color: "blue" },
                    
                  ]}
                />
                <Skills
                  title="Test"
                  items={[
                    { label: "Test", value: 8, color: "green" },
                    { label: "Test", value: 7, color: "green" },
                    { label: "Test", value: 6, color: "green" },
                  ]}
                />
                <Skills
                  title="Test"
                  items={[
                    { label: "Test", value: 8, color: "red" },
                    { label: "Test", value: 7, color: "red" },
                    { label: "Test", value: 6, color: "red" },
                    { label: "Test", value: 8, color: "red" },
                    { label: "Test", value: 7, color: "red" },
                    { label: "Test", value: 6, color: "red" },
                  ]}
                />
                <Skills
                  title="Test"
                  items={[
                    { label: "Test", value: 8, color: "blue" },
                    { label: "Test", value: 7, color: "blue" },
                    
                  ]}
                />

              
              {/* === ENDE: alle Skills === */}

              
            </div>
          
          </div>
          
        </div>

        <hr />
        {/* Projekte-Bereich */}
        <div className="projectsWrap">
          <div className="projectsMasonry">
            <Projects
              title="Beispielprojekt"
              description="In diesem Projekt wurde eine responsive Webseite programmiert, die sich automatisch an verschiedene Bildschirmgrößen (PC, Tablet, Smartphone) anpasst. Dabei wurden moderne Webtechnologien wie HTML, CSS und JavaScript eingesetzt, um eine benutzerfreundliche Oberfläche und eine klare Struktur zu gewährleisten..
                 
                "
              useTech="React, TypeScript, Node.js, Express, MongoDB "
              youPos="Entwickler & Designer"
              startDate={new Date(2022, 0, 15)}
              endDate={new Date(2022, 5, 30)}
              link="https://www.google.com/"
            />
             <Projects
              title="Beispielprojekt"
              description="In diesem Projekt wurde eine responsive Webseite programmiert, die sich automatisch an verschiedene Bildschirmgrößen (PC, Tablet, Smartphone) anpasst. Dabei wurden moderne Webtechnologien wie HTML, CSS und JavaScript eingesetzt, um eine benutzerfreundliche Oberfläche und eine klare Struktur zu gewährleisten."
              useTech="React, TypeScript, Node.js, Express, MongoDB"
              youPos="Entwickler & Designer"
              startDate={new Date(2022, 0, 15)}
              endDate={new Date(2022, 5, 30)}
            />
             <Projects
              title="Beispielprojekt"
              description="In diesem Projekt wurde eine responsive Webseite programmiert, die sich automatisch an verschiedene Bildschirmgrößen (PC, Tablet, Smartphone) anpasst. Dabei wurden moderne Webtechnologien wie HTML, CSS und JavaScript eingesetzt, um eine benutzerfreundliche Oberfläche und eine klare Struktur zu gewährleisten."
              useTech="React, TypeScript, Node.js, Express, MongoDB"
              youPos="Entwickler & Designer"
              startDate={new Date(2022, 0, 15)}
              endDate={new Date(2022, 5, 30)}
            />
             <Projects
              title="Beispielprojekt"
              description="In diesem Projekt wurde eine responsive Webseite programmiert, die sich automatisch an verschiedene Bildschirmgrößen (PC, Tablet, Smartphone) anpasst. Dabei wurden moderne Webtechnologien wie HTML, CSS und JavaScript eingesetzt, um eine benutzerfreundliche Oberfläche und eine klare Struktur zu gewährleisten."
              youPos="Entwickler & Designer"
              startDate={new Date(2022, 0, 15)}
              endDate={new Date(2022, 5, 30)}
            />
            {/* Hier können weitere Projekte eingefügt werden */}
          </div>
        </div>

      </div>
      
    

    </section>
  );
}
