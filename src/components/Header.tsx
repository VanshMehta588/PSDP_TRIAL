"use client"
import { ChangeEvent, useEffect, useState } from "react"
import Link from "next/link"
import $ from "jquery"
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
    const [language, setLanguage] = useState("en") // State for language
    const [isSticky, setIsSticky] = useState(false)
    const [activeTab, setActiveTab] = useState("home") // State for active tab
    const router = useRouter(); // Initialize router
    const pathname = usePathname(); // Get current path


    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
        // jQuery for toggle sub-menus
        $(".menu-item-has-children").click(function () {
            // Close all other open submenus first
            $(".sub-menu").not($(this).next(".sub-menu")).slideUp()
            $(".dropdown").not($(this).find(".dropdown")).removeClass("rotate")

            // Toggle the clicked submenu
            $(this).next(".sub-menu").slideToggle()
            $(this).find(".dropdown").toggleClass("rotate")
        })

        // Close submenu when clicking on a submenu item
        $(".sub-menu a").click(function () {
            $(this).closest(".sub-menu").slideUp()
            $(this).closest("li").prev(".menu-item-has-children").find(".dropdown").removeClass("rotate")
        })

        // jQuery for expand and collapse the sidebar
        $(".menu-btn").click(() => {
            $(".side-bar").addClass("active")
            $(".menu-btn").css("visibility", "hidden")
        })

        $(".close-btn").click(() => {
            $(".side-bar").removeClass("active")
            $(".menu-btn").css("visibility", "visible")
        })

        // Scroll event to toggle sticky navbar
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [language])


    // useEffect(() => {
    //     // Check for any existing language preference in localStorage
    //     const savedLanguage = localStorage.getItem('language');
    //     if (savedLanguage) {
    //         setLanguage(savedLanguage);
    //     }

    //     // jQuery for toggle sub-menus (this part remains the same)
    //     //... [existing jQuery code]

    //     const handleScroll = () => {
    //         setIsSticky(window.scrollY > 0);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [language]);

    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        localStorage.setItem('language', newLang);
        document.cookie = `language=${newLang}; path=/; max-age=3600`;

        // Store language in local storage
        // const savedLanguage = localStorage.getItem('language');
        setLanguage(newLang);

        if (newLang === "en") {
            // If switching to English, ensure /en/ is used
            if (pathname.includes("/gu")) {
                router.push(pathname.replace("/gu", "/en"));
            } else if (!pathname.includes("/en")) {
                router.push(`/en${pathname}`);
            }
        } else if (newLang === "gu") {
            // If switching to Gujarati, ensure /gu/ is used
            if (pathname.includes("/en")) {
                router.push(pathname.replace("/en", "/gu"));
            } else if (!pathname.includes("/gu")) {
                router.push(`/gu${pathname}`);
            }
        }
    };



    const LanguagePicker = () => {
        let detectedLanguage = "en"; // Default to English

        if (pathname.includes("/gu")) {
            detectedLanguage = "gu";
        } else if (pathname.includes("/en")) {
            detectedLanguage = "en";
        }

        // Update localStorage with the detected language
        localStorage.setItem('language', detectedLanguage);
        document.cookie = `language=${detectedLanguage}; path=/; max-age=3600`;

        // Set the language state
        setLanguage(detectedLanguage);
    }


    useEffect(() => {
        LanguagePicker()
    }, [pathname])





    return (
        <header>
            <div className="pr_top_header">
                <div className="container">
                    <div className="pr_top_menu_bar">
                        <div className="pr_top_menu_bar_left mt-3">
                            <ul>
                                <li>
                                    <Link className="text-decoration-none" href={`/${language}/events`}>
                                        Event
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none" href={`/${language}/shop`}>
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-decoration-none" href={`/${language}/e-greetings`}>
                                        E-greetings
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/${language}/donation`} className="top_btn donate_btn text-decoration-none">
                                        Donation
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/join`} className="top_btn jont_party_btn text-decoration-none">
                                        Join Party
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="lang-menu">
                            <select className="selected-lang" onChange={handleLanguageChange} value={language}>
                                <option value="en">English</option>
                                <option value="gu">Gujarati</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`pr_bottom_header ${isSticky ? "sticky" : ""}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="logo mt-lg-3">
                                <Link href={`/${language}`}>
                                    <img src="/assets/img/logo.svg" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {/* Sidebar & Mobile Navigation */}
                            <ul className="navigation_menu mt-3 d-none d-lg-flex">
                                <li>
                                    <Link className="text-decoration-none" href={`/${language}`}>
                                        Praja Shakti
                                    </Link>
                                </li>
                                <li>
                                    <a className="text-decoration-none menu-item-has-children" href="#">
                                        {" "}
                                        About Party <i className="dropdown"></i>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link href={`/${language}/about/about-the-party`} className="text-decoration-none">
                                                About the Party
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/${language}/about/party-ideology`} className="text-decoration-none">
                                                Party Ideology
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/${language}/about/party-constitution`} className="text-decoration-none">
                                                Party Constitution
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href={`/${language}/sangathan`} className="text-decoration-none menu-item-has-children">
                                        Sangathan<i className="dropdown"></i>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Nari Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Yuva Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Kisan Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Shram Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                SC Seva Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                ST Seva Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Samajik ane Shaikshanik Jati Seva Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Vidya Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Nyay Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Vaanijya Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Par-Prantiya Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Laghumati Samaj Shakti Sangathan
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-decoration-none">
                                                Swasthya Seva Shakti Sangathan
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href={`/${language}/gallery`} className="text-decoration-none menu-item-has-children">
                                        Gallery
                                    </Link>
                                    {/* <ul className="sub-menu">
                                        <li><a href="#" className='text-decoration-none'>Image Gallery</a></li>
                                        <li><a href="#" className='text-decoration-none'>Video Gallery</a></li>
                                    </ul> */}
                                </li>
                                <li>
                                    <a href="#" className="text-decoration-none menu-item-has-children">
                                        Media <i className="dropdown"></i>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link href={`/${language}/media/video-gallery`} className="text-decoration-none">
                                                Video Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/${language}/media/press-releases`} className="text-decoration-none">
                                                Press Releases
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href={`/${language}/contestelection`} className="text-decoration-none">
                                        Contest Election
                                    </Link>
                                </li>
                            </ul>
                            <div className="main_menu">
                                <div className="menu-btn float-end">
                                    <i className="fa fa-bars" />
                                </div>
                                <div className="side-bar">
                                    <div className="close-btn">
                                        <i className="fa fa-close"></i>
                                    </div>
                                    <div className="navigation_btn">
                                        <ul className="mb-0">
                                            <li>
                                                <a href={`/${language}/donation`} className="top_btn donate_btn text-decoration-none">
                                                    Donation
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`/join`} className="top_btn jont_party_btn text-decoration-none">
                                                    Join Party
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile-nav">
                                        {/* Tabs */}
                                        <ul className="mobile-nav-tabs">
                                            <li className={activeTab === "home" ? "active" : ""} onClick={() => setActiveTab("home")}>
                                                Main Menu
                                            </li>
                                            <li className={activeTab === "about" ? "active" : ""} onClick={() => setActiveTab("about")}>
                                                Top Menu
                                            </li>
                                        </ul>

                                        {/* Tab Content */}
                                        <div className={`mobile-home-menu mobile-menu-tab ${activeTab === "home" ? "active" : ""}`}>
                                            <ul className="navigation_menu">
                                                <li>
                                                    <Link className="text-decoration-none" href={`/${language}`}>
                                                        Praja Shakti
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a className="text-decoration-none menu-item-has-children" href="#">
                                                        {" "}
                                                        About Party <i className="dropdown"></i>
                                                    </a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <Link href={`/${language}/about/about-the-party`} className="text-decoration-none">
                                                                About the Party
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`/${language}/about/party-ideology`} className="text-decoration-none">
                                                                Party Ideology
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`/${language}/about/party-constitution`} className="text-decoration-none">
                                                                Party Constitution
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href={`/${language}/sangathan`} className="text-decoration-none menu-item-has-children">
                                                        Sangathan<i className="dropdown"></i>
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Nari Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Yuva Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Kisan Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Shram Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                SC Seva Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                ST Seva Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Samajik ane Shaikshanik Jati Seva Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Vidya Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Nyay Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Vaanijya Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Par-Prantiya Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Laghumati Samaj Shakti Sangathan
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="text-decoration-none">
                                                                Swasthya Seva Shakti Sangathan
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href={`/${language}/gallery`} className="text-decoration-none menu-item-has-children">
                                                        Gallery
                                                    </Link>
                                                    {/* <ul className="sub-menu">
                                                        <li><a href="#" className='text-decoration-none'>Image Gallery</a></li>
                                                        <li><a href="#" className='text-decoration-none'>Video Gallery</a></li>
                                                    </ul> */}
                                                </li>
                                                <li>
                                                    <a href="#" className="text-decoration-none menu-item-has-children">
                                                        Media <i className="dropdown"></i>
                                                    </a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <Link href={`/${language}//media/video-gallery`} className="text-decoration-none">
                                                                Video Gallery
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`/${language}//media/press-releases`} className="text-decoration-none">
                                                                Press Releases
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href={`/${language}/contestelection`} className="text-decoration-none">
                                                        Contest Election
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={`mobile-about-menu mobile-menu-tab ${activeTab === "about" ? "active" : ""}`}>
                                            <ul className="navigation_menu">
                                                <li>
                                                    <Link href={`/${language}/events`} className="text-decoration-none">
                                                        Event
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={`/${language}/shop`} className="text-decoration-none">
                                                        Shop
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={`/${language}/e-greetings`} className="text-decoration-none">
                                                        E-greetings
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Sidebar */}
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

