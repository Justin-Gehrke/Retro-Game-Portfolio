import NavMenu from "./components/NavMenu";
import { Outlet } from "react-router-dom";
import Avatar from "./components/Avatar";
import ShInfAboutMe from "./components/ShInfAboutMe";
import Background from "./components/Background";
import "./Layout.css";

export function Layout() {
    return (
        
           <>
                <Background />
                <section className={`appFrame rpgui-container framed`}>
                    <div className="layout">
                        <div className="panel">
                            <div className={`rpgui-container framed-grey ${"panelInner"}`}>
                                <div className="avatarAbout">
                                    <div className="avatarWrap">
                                        <Avatar />
                                        
                                    </div>
                                    
                                    <div className="aboutWrap">
                                        <ShInfAboutMe />
                                      
                                    </div>
                                    
                                </div>
                                <div className={`rpgui-container framed ${"navMenu"}`}>
                                        <NavMenu />
                                </div>
                            </div>
                        </div>
                        <div className="mainRow">
                            <main>
                                <Outlet />
                            </main>
                        </div>
                    </div>
                </section>
        </>
    )
}