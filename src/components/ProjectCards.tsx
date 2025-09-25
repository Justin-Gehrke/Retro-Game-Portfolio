// Skills.tsx (TypeScript)
import styles from "./ProjectCards.module.css";



type ProCards = {
  title: string;         
  link?: string;      
  description: string;         
  startDate?: Date;
  endDate?: Date;
  useTech?: string;
  youPos?: string;

  
};

export default function Projects({ title,link,description,startDate,endDate,useTech,youPos}: ProCards) {

  return (
   <div className={`rpgui-container framed-grey ${styles.ProCards}`}>
      <p className={styles.title}>
        {title}
      </p>
      <hr />
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <hr />

     <div className={styles.useTech}>
      <p>
        {useTech} 
      </p>
     </div>

     <div className={styles.githubIcon}>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className={`nes-icon github is-large`}></i>
        </a>
      )}
     </div>
     <div className={styles.subtitle}>
        <p className={styles.footerLeft}>
          {youPos && `Meine Position: ${youPos}`}
        </p>
        <p className={styles.footerRight}>
          {startDate && `Von: ${startDate.toLocaleDateString()} `}
          {endDate
            ? `Bis: ${endDate.toLocaleDateString()}`
            : "Läuft noch"}
        </p>
     </div>
   </div>
    

  );
}
