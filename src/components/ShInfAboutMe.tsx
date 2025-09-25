
import  React from "react";
import styles from "./ShInfAboutMe.module.css";
import { useEffect, useState } from "react";

interface ShinfItem {
  name: string;
  age: number;
  profession: string;
  email: string;
  location: string;
}

const FIELDS: { label: string; key: keyof ShinfItem; format?: (v: any) => string }[] = [
  { label: "Name",     key: "name" },
  { label: "Alter",    key: "age",        format: (n) => `${n} Jahre` },
  { label: "Beruf",    key: "profession" },
  { label: "E-Mail",   key: "email",      format: (e) => String(e) },
  { label: "Standort", key: "location" },
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
    <div className={`rpgui-container framed-grey ${styles.siam}`}>
      {FIELDS.map((f, i) => {
        const raw = info[f.key];
        const value = f.format ? f.format(raw) : String(raw ?? "");
        return (
          <React.Fragment key={f.key}>
            <div className={styles.infoBlock}>
              <h2 className={styles.title}>{f.label}</h2>
              <p className={styles.infcontent}>
                {f.key === "email"
                  ? <a href={`mailto:${value}`}>{value}</a>
                  : value}
              </p>
            </div>
            {i < FIELDS.length - 1 && <hr />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Shinf;
