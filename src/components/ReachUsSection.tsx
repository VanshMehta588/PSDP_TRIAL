"use client"
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';

export default function ReachUsSection() {
    const [activeTab, setActiveTab] = useState("karyalay");
    const pathname = usePathname(); // Get current path
    const [LanguageRoute, setLanguageRoute] = useState("")

    useEffect(() => {
        const lang = localStorage.getItem("language");
        if (lang) {
            setLanguageRoute(`/${lang}/`);
        }
    }, [pathname])

    const joinIframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = joinIframeRef.current;

        const handleIframeLoad = () => {
            try {
                // Cross-browser iframe content access
                const iframeDoc = iframe?.contentDocument ||
                    iframe?.contentWindow?.document;

                if (iframeDoc) {
                    // Remove header
                    const header = iframeDoc.querySelector('header, .header');
                    if (header) header.remove();

                    // Remove footer
                    const footer = iframeDoc.querySelector('footer, .footer');
                    if (footer) footer.remove();

                    // Optional: Additional custom element removal
                    const navigationElements = iframeDoc.querySelectorAll('nav, .navigation');
                    navigationElements.forEach(el => el.remove());

                    // Inject custom CSS to ensure clean view
                    const styleTag = iframeDoc.createElement('style');
                    styleTag.textContent = `
                        body { 
                            margin: 0 !important; 
                            padding: 0 !important; 
                        }
                        header, footer, nav { 
                            display: none !important; 
                        }
                            .container{
                            padding:0 !important;
                            }
                    `;
                    iframeDoc.head.appendChild(styleTag);
                }
            } catch (error) {
                console.warn('Cannot modify iframe content:', error);
            }
        };

        // Add load event listener
        iframe?.addEventListener('load', handleIframeLoad);

        // Cleanup listener
        return () => {
            iframe?.removeEventListener('load', handleIframeLoad);
        };
    }, [activeTab]);

    return (
        <section className="reach_us_section">
            <div className="container">
                <div className="title_info">
                    <div className="title">
                        <h2 className="text-white">Reach us to karyalay</h2>
                    </div>
                </div>
                <div className="reach_us_bg mt-65">
                    {/* Tabs */}
                    <ul className="toggle-tabs">
                        <li
                            className={activeTab === "karyalay" ? "active-tab" : ""}
                            onClick={() => setActiveTab("karyalay")}
                        >
                            Our Karyalays
                        </li>
                        <li
                            className={activeTab === "join" ? "active-tab" : ""}
                            onClick={() => setActiveTab("join")}
                        >
                            Join Party
                        </li>
                    </ul>

                    {/* Tabbed Content */}
                    <div className="tabbed-content-wrap">
                        {/* Karyalay Content */}
                        {activeTab === "karyalay" && (
                            <div className="content-box active-content-box">
                                <div className="pr_party_detail">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="pr_party_map">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.9727319663252!2d72.57614459999999!3d23.1711953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c29fb6cec308f%3A0xb29c955f5a3b437!2sPRAJA%20SHAKTI%20BHAVAN!5e0!3m2!1sen!2sin!4v1742984546701!5m2!1sen!2sin"
                                                    width="400"
                                                    height="300"
                                                    style={{ border: 0 }}
                                                    allowFullScreen={true}
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="pr_karyalay_info">
                                                <div className="pr_karyalay_thumb">
                                                    <img src="../assets/img/karyalay_logo.png" alt="" />
                                                </div>
                                                <div className="pr_karyalay_ditail">
                                                    <ul>
                                                        <li> Praja Shakti Democratic Party</li>
                                                        <li>
                                                            <strong>Location: </strong> Adalaj Bridge, Sarkhej -
                                                            Gandhinagar Hwy, Adalaj, Gujarat 382421
                                                        </li>
                                                        <li>
                                                            <strong>Phone:</strong> +91 12345 67890
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="joint_whatups_wrap">
                                                <div className="whatsup_info">
                                                    <h4 className="title-4">Join Our WhatsApp Group</h4>
                                                    <p>Praja Shakti Democratic Party(Gandhinagar)</p>
                                                </div>
                                                <div className="whatus_account">
                                                    <div className="scanner_box">
                                                        <div className="scanner_title">
                                                            <h4>
                                                                <strong> QR Code</strong>
                                                                to Join Group
                                                            </h4>
                                                        </div>
                                                        <div className="scanner_img">
                                                            <img src="../assets/img/scanner.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="option_text">OR</div>
                                                    <div className="jont_link">
                                                        <div className="wht_icon">
                                                            <img src="../assets/img/whatsapp-icon.svg" alt="" />
                                                        </div>
                                                        <div className="joint_link_info">
                                                            <p>Click to Link for Join Group</p>
                                                            <a href="#">https://wats/gjthba</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Join Party Content */}
                        {activeTab === "join" && (
                            <div className="content-box active-content-box">
                                <iframe
                                    ref={joinIframeRef}
                                    src={`${LanguageRoute}join`}
                                    width="100%"
                                    height="500px"
                                    frameBorder="0"
                                    allowFullScreen
                                    style={{
                                        border: 'none',
                                        overflow: 'hidden'
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}