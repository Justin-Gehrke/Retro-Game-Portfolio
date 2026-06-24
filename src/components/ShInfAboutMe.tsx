
import  React from "react";
import styles from "./ShInfAboutMe.module.css";
import { useEffect, useState } from "react";






interface ShinfItem {
  age: string;
  class: string;
  email: string;
  location: string;
  job_: string;
  employer: string;
}

function calculateAge(dateString: string): number {
  const birth = new Date(dateString);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}



const FIELDS: { label: string; key: keyof ShinfItem; format?: (v: any) => string }[] = [
  { label: "Level",    key: "age", format: (v) => String(calculateAge(v)) },
  { label: "Klasse",    key: "class" },
  { label: "Base Camp", key: "location" },
  { label: "Job",      key: "job_" },
  { label: "Direct Ping",   key: "email",      format: (e) => String(e) },
  {label: "Faction", key: "employer"},
  
];




const Shinf: React.FC = () => {
  const [info, setInfo] = useState<ShinfItem | null>(null);

  useEffect(() => {
    fetch("JInfo/shinfaboutme.json")
      .then((res) => res.json())
      .then((data: ShinfItem[] | ShinfItem) => {
        const obj = Array.isArray(data) ? data[0] : data;
        setInfo(obj);
      })
      .catch((err) => console.error("Fehler beim Laden der shinfaboutme.json:", err));
  }, []);

  if (!info) return null;

 return (
 <div className={styles.infoGrid}>
  {FIELDS.map((f) => {
    const raw = info[f.key];
    const value = f.format ? f.format(raw) : String(raw ?? "");

    const isEmail = f.key === "email";
    const isAge = f.key === "age";

    return (
      <div key={f.key} className={styles.item}>
        
        <div className={styles.label}><p>{f.label}</p></div>
        <div className={`rpgui-button down ${styles.valueBox}`}>
          
         {isAge ? (
              <>
                <div className={styles.ageNumber}><p>{value}</p></div>
              </>
            ) : isEmail ? (
              <a href={`mailto:${value}`}><p>{value}</p></a>
            ) : (
             <p> {value} </p>
            )}


        </div>

      </div>
    );
  })}
</div>


);

};

export default Shinf;
