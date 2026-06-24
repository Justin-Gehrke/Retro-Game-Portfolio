import Skills from "../components/Skills";
import styles from "./Skilltree.module.css";



export function Skilltree() {
  return (
  <>
    <h1>Skill Tree</h1>
    <hr />
    <div className={styles.skillsWrap}>
      <div className={styles.skillsMasonry}>
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
            { label: ".NET Core", value: 5 },
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
      </div>
    </div>
  </>
  );
}