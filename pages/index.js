import OpenSpource from "../public/img/opensource.png";
import Extensible from "../public/img/extensible.png";
import Robust from "../public/img/robust.png";
import OpenAPI from "../public/img/openapi.png";
import SwaggerUI from "../public/img/swaggerui.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import BrowserWindow from "../components/Window";
import ThemeSwitch from "../components/ThemeSwitch";

export default () => {
    const {locale} = useRouter();
    const [showNav, setShowNav] = useState(false);
    const [scrollState, setScrollState] = useState(0);
    const [top, setTop] = useState(20);

    useEffect(() => {
        function controlNavbar() {
            if (typeof window !== 'undefined') {
              if (window.scrollY > (window.innerHeight - 100)) {
                setShowNav(true); 
                setTop(0);
              } else {
                setShowNav(false);
                setTop(-100);
              }
              setScrollState(window.scrollY);
            }
        }

        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
          return () => { // cleanup function
            window.removeEventListener('scroll', controlNavbar);
          };
        }
    }, [scrollState]);

    return (
        <div className="index-body select-none">
            {/* NAV BAR */}
            <div className="nextra-nav-container z-20 sticky bg-transparent w-full" style={{top: top, transition: "top 0.3s"}}>
                <div className={`${showNav ? 'show-nav bg-white dark:bg-dark' : 'bg-transparent'} nextra-nav-container-blur absolute w-full h-full pointer-events-none`} style={{zIndex:-1}}></div>
                <nav className="index-padding flex gap-2 max-w-[90rem] mx-auto items-center left-0 right-0 py-4">
                    <Logo size={75}/>
                    <div className='flex-1'></div>
                    <a className="px-4 nextra-nav-link no-underline whitespace-nowrap p-2 -ml-2 hidden md:inline-block active text-xl text-current color-black dark:color-white" aria-selected="true" href="/docs/getting-started/overview" style={{fontWeight: "bold"}}>DOCUMENTATION</a>
                    <a className="px-4 nextra-nav-link no-underline whitespace-nowrap p-2 -ml-2 hidden md:inline-block active text-xl text-current color-black dark:color-white" aria-selected="true" href="https://github.com/orgs/oas-tools/discussions" style={{fontWeight: "bold"}}>FORUMS</a>
                    <a className="px-4 nextra-nav-link no-underline whitespace-nowrap p-2 -ml-2 hidden md:inline-block active text-xl text-current color-black dark:color-white" aria-selected="true" href="/blog" style={{fontWeight: "bold"}}>BLOG</a>
                    <a className="px-4 text-current p-2" href="https://github.com/oas-tools" target="_blank" rel="noreferrer">
                        <svg height="24" viewBox="2 2 20 20" fill="none" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z" fill="currentColor"></path>
                        </svg>
                        <span className="sr-only">GitHub</span>
                    </a>
                    <ThemeSwitch/>
                </nav>
            </div>

            {/* BANNER */}
            <div className="index-banner">
                <div className="index-padding banner-content">
                    <h1 className="py-4" style={{fontSize: 60, fontWeight: "bold"}}>OAS Tools</h1>
                    <h4 style={{fontSize: 24, fontWeight: "lighter"}}>A Node.js server-side framework<br/>bringing full support to OpenAPI v3</h4>
                    <div className="button-wrapper flex" style={{marginTop: 40}}>
                        <a className="text-current no-underline banner-button" href="/docs/getting-started/overview">Documentation</a>
                        <a className="source-button text-current no-underline banner-button" href="https://github.com/oas-tools" target="_blank" rel="noreferrer">
                            <svg height="24" viewBox="2 2 20 20" fill="none" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-2">Source Code</span>
                        </a>
                    </div>
                </div>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            {/* FEATURES */}
            <div className="index-padding bg-gray-100 dark:bg-neutral-900">
                <div className="index-features">
                    <div className="feature-card">
                        <Image className="feature-image" width={100} height={100} src={OpenAPI}/>
                        <span>OPENAPI 3.1</span>
                        <p>Full support for every feature included in the OpenAPI specification v3.0 and v3.1</p>
                    </div> 
                    <div className="feature-card">
                        <Image className="feature-image" width={100} height={100} src={Extensible}/>
                        <span>EXTENSIBLE</span>
                        <p>Completely modular, giving the possibility to include and integrate external packages</p>
                    </div>                    
                    <div className="feature-card">
                        <Image className="feature-image" width={120} height={100} src={OpenSpource}/>
                        <span>OPEN SOURCE</span>
                        <p>All the source code is public and can be accessed from the organization page on GitHub</p>
                    </div>
                    <div className="feature-card">
                        <Image className="feature-image" width={100} height={100} src={Robust}/>
                        <span>ROBUST</span>
                        <p>Built using the latest features from Node.js, with Express.js orchestrating middleware in its core</p>
                    </div>
                </div>
            </div>

            {/* FUNCTIONALITIES */}
            <div className="relative index-functionalities index-padding">
                <h1>MAIN FEATURES</h1>
                <div>
                    <span>
                        <h2>Integrated SwaggerUI</h2>
                        <p>Being built around the OpenAPI specification, OAS Tools features the integration of the Swagger interface, fully customizable thanks to the modular and configurable architecture of the system.</p>
                    </span>
                    <BrowserWindow><Image src={SwaggerUI} layout="responsive"/></BrowserWindow>
                </div>
                <div>
                    <span>
                        <h2>CLI Tool</h2>
                        <p>The command line tool offers an interactive interface through which it is possible to create a new REST service from an OpenAPI document, a new module, a development environment or even an OpenAPI 3.X declaration from a JSON or YAML resource.</p>
                    </span>
                    <BrowserWindow><span style={{height: "100%", width: "100%", fontSize: 120, textAlign: "center", paddingLeft: 20}}>&gt;_</span></BrowserWindow>
                </div>
            </div>

            {/* PREVIEW */}
            <div className="relative index-preview index-padding" style={{paddingTop: 100, paddingBottom: 100}}>
                <h1 className="bg-white dark:bg-dark">LIVE PREVIEW</h1>
                <h3>From the declaration to reality, in one command</h3>
                <iframe
                    src="https://stackblitz.com/edit/oas-tools-starter?embed=1&view=both&file=starter-project/api/oas-file.yaml"
                    style={{width: "100%", height: 600, border: 0, borderRadius: 4, overflow: "hidden", filter: "drop-shadow(5px 4px 6px rgb(17 17 17/0.8))"}}
                    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                ></iframe>   
            </div>

            {/* FOOTER */}
            <footer className="bg-gray-100 dark:bg-neutral-900 pb-[env(safe-area-inset-bottom)]">
                <div className="max-w-[90rem] mx-auto pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] py-12">
                    <div className="flex justify-between flex-col-reverse md:flex-row items-center md:items-end">
                        <span className="text-gray-600 dark:text-gray-400">
                            <Footer locale={locale}/>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}