import { useEffect, useRef } from "react";
import styles from "./NavMenu.module.css";
import { Link } from "react-router-dom";


export default function NavMenu() {

    

  return (
   
    <nav className={`${styles.nav}`}>
        <ul>
            <li>
                <Link to="/">
                    <button className={`rpgui-button styles.button ${styles.button}`}>
                        <p>Adventurer Log</p>
                    </button>
                </Link>
            
                <Link to="/Skilltree">
                    <button className={`rpgui-button styles.button ${styles.button}`}>
                        <p>Skill Tree</p>
                    </button>
                </Link>
               
                <Link to="/quest-log">
                    <button className={`rpgui-button styles.button ${styles.button}`}>
                        <p>Quest Log</p>
                    </button>
                </Link>
            
                <Link to="/game">
                    <button className={`rpgui-button styles.button ${styles.button}`}>
                        <p>Info</p>
                    </button>
                </Link>
            </li>
        </ul>
    </nav>
  );
}