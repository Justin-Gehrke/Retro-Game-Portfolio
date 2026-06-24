import { useEffect, useState } from "react";
import styles from "./Avatar.module.css";
import React from "react";



export default function Avatar() {
 const [name, setName] = useState<string>("");

  useEffect(() => {
    fetch("JInfo/shinfaboutme.json")
      .then(res => res.json())
      .then(data => {
        const obj = Array.isArray(data) ? data[0] : data;
        setName(obj.name);
      });
  }, []);

  const images = import.meta.glob("/public/avatar/*.png", { eager: true });

 
  const firstImage = Object.keys(images)[0].replace("/public", "");

  return (
    <React.Fragment>
    <div className={`rpgui-container framed-golden ${styles.avatar}`}>
      <img className={styles.media} src={firstImage} alt="Profil" />
    </div>
    <p className={styles.name}>{name}</p>
    </React.Fragment>
  );
}
