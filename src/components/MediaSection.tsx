"use client";
import { Facebook } from "next/dist/lib/metadata/types/extra-types";
import React, { useState, useEffect } from "react";

// Fix TypeScript error: Declare `FB` in `window`
declare global {
    interface Window {
        FB: Facebook;
    }
}

export default function MediaSection() {
    const [activeTab, setActiveTab] = useState("social");

    // Load Facebook SDK
    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        } else {
            const script = document.createElement("script");
            script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0";
            script.async = true;
            script.defer = true;
            script.crossOrigin = "anonymous";
            script.onload = () => {
                if (window.FB) {
                    window.FB.XFBML.parse();
                }
            };
            document.body.appendChild(script);
        }
    }, [activeTab]);

    // Load Twitter Widgets
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }, [activeTab]);

    // Common frame styles
    const iframeStyle = { width: "100%", height: "500px", border: "none" };

    return (
        <section className="social_media_video_section">
            <div className="container">
                <div className="title_info">
                    <div className="title">
                        <h2>Social Media and Videos</h2>
                    </div>
                </div>

                {/* Tab Buttons */}
                <div className="social_media_btn_grid">
                    <ul className="social_media_toggle">
                        <li
                            className={activeTab === "social" ? "social_active-tab" : ""}
                            onClick={() => setActiveTab("social")}
                        >
                            SOCIAL
                        </li>
                        <li
                            className={activeTab === "videos" ? "social_active-tab" : ""}
                            onClick={() => setActiveTab("videos")}
                        >
                            VIDEOS
                        </li>
                    </ul>

                    {/* Tab Content */}
                    <div className="social_tabbed-content-wrap container">
                        {/* Social Media Content */}
                        {activeTab === "social" && (
                            <div className="social_content-box social_active-content-box">
                                <div className="row">
                                    {/* Facebook Embed */}
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className="pr_social_widget">
                                            <div className="pr_social_icon">
                                                <i className="bi bi-facebook" />
                                            </div>
                                            <div className="pr_social_iframe">
                                                <div
                                                    className="fb-page"
                                                    data-href="https://www.facebook.com/PSDPGujarat/"
                                                    data-tabs="timeline"
                                                    data-width="380"
                                                    data-height="447"
                                                    data-small-header="false"
                                                    data-adapt-container-width="true"
                                                    data-hide-cover="false"
                                                    data-show-facepile="true"
                                                >
                                                    <blockquote
                                                        cite="https://www.facebook.com/PSDPGujarat/"
                                                        className="fb-xfbml-parse-ignore"
                                                    >
                                                        <a href="https://www.facebook.com/PSDPGujarat/">
                                                            Praja Shakti Democratic Party
                                                        </a>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="follow_btn">
                                            <a href="#" className="theme_btn text-decoration-none">
                                                <span>Follow</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Instagram Embed */}
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className="pr_social_widget">
                                            <div className="pr_social_icon">
                                                <i className="bi bi-instagram" />
                                            </div>
                                            <div className="pr_social_iframe">
                                                <iframe
                                                    style={iframeStyle}
                                                    src="https://www.instagram.com/psdpgujarat/embed/"
                                                    title="Instagram"
                                                />
                                            </div>
                                        </div>
                                        <div className="follow_btn">
                                            <a href="#" className="theme_btn text-decoration-none">
                                                <span>Follow</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Twitter (X) Embed */}
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className="pr_social_widget">
                                            <div className="pr_social_icon">
                                                <img src="assets/img/x-social.svg" alt="X" />
                                            </div>
                                            <div className="pr_social_iframe">
                                                <a
                                                    className="twitter-timeline"
                                                    href="https://twitter.com/PSDPGujarat?ref_src=twsrc%5Etfw"
                                                    data-width="380"
                                                    data-height="447"
                                                >
                                                    Tweets by PSDPGujarat
                                                </a>
                                            </div>
                                        </div>
                                        <div className="follow_btn">
                                            <a href="#" className="theme_btn text-decoration-none">
                                                <span>Follow</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Videos Content */}
                        {activeTab === "videos" && (
                            <div className="social_content-box social_active-content-box">
                                <div className="social_videos_grid">
                                    {["banner_1.jpg", "banner_2.jpg", "banner_3.jpg", "banner_4.jpg"].map((img, index) => (
                                        <div className="social_video_items" key={index}>
                                            <a
                                                className="popup-youtube hover_effect"
                                                href="https://www.youtube.com/embed/0O2aH4XLbto?si=65RHrq01PUC8YP69"
                                            >
                                                <img src={`assets/img/${img}`} alt={`Video ${index + 1}`} />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
