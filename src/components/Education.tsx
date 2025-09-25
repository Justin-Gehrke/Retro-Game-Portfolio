import React, { useEffect, useState } from 'react';
import styles from "./Education.module.css";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  description?: string;
}

const Education: React.FC = () => {
  const [educationData, setEducationData] = useState<EducationItem[]>([]);

  useEffect(() => {
    fetch('JInfo/education.json')
      .then(res => res.json())
      .then((data: EducationItem[]) => setEducationData(data))
      .catch((err) => {
        console.error("Fehler beim Laden der education.json:", err);
      });
  }, []);

  return (
    <div className={`rpgui-container framed-grey ${styles.edu}`}>
        {educationData.map((edu, idx) => (
            <div key={idx} className={styles.infoBlock}>
                <h2 className={styles.title}>{edu.institution} ({edu.startYear} - {edu.endYear})</h2>
                <p className={styles.infcontent}>
                  {edu.field && edu.field.trim() ? `${edu.field}, ${edu.degree}` : edu.degree}
                </p>
                <p className={styles.description}>
                    {edu.description}
                </p>
                <hr />
            </div>
        ))}
    </div>
  );
};

export default Education;
