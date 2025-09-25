import styles from "./Avatar.module.css";



export default function Avatar() {
 
  const images = import.meta.glob("/public/avatar/*.png", { eager: true });

 
  const firstImage = Object.keys(images)[0].replace("/public", "");

  return (
    <div className={`rpgui-container framed-golden ${styles.avatar}`}>
      <img className={styles.media} src={firstImage} alt="Profil" />
    </div>
  );
}
