"use client"
import React from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

export default function AboutParty() {
    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     // Fade-in animation for the breadcrumb section
    //     gsap.from(".breadcrumb_section", {
    //         opacity: 0,
    //         y: -50,
    //         duration: 1,
    //         ease: "power2.out",
    //     });

    //     // Fade-in effect for about section
    //     gsap.from(".society_economy_sec", {
    //         opacity: 0,
    //         y: 50,
    //         duration: 1.2,
    //         ease: "power2.out",
    //         scrollTrigger: {
    //             trigger: ".society_economy_sec",
    //             start: "top 80%",
    //             toggleActions: "play none none none",
    //         },
    //     });

    //     // Scroll-triggered animation for the president message section
    //     gsap.from(".president_msg", {
    //         opacity: 0,
    //         x: -100,
    //         duration: 1.2,
    //         ease: "power2.out",
    //         scrollTrigger: {
    //             trigger: ".president_msg",
    //             start: "top 85%",
    //             toggleActions: "play none none none",
    //         },
    //     });

    //     // Button animation
    //     gsap.from(".our_volunteers_btn", {
    //         opacity: 0,
    //         scale: 0.8,
    //         duration: 1,
    //         ease: "back.out(1.7)",
    //         scrollTrigger: {
    //             trigger: ".our_volunteers_btn",
    //             start: "top 90%",
    //             toggleActions: "play none none none",
    //         },
    //     });

    // }, []);

    return (
        <>
            {/* Breadcrumb Section */}
            <div
                className="breadcrumb_section"
                style={{
                    backgroundImage: "url('/assets/img/about_the_party/about-the-party-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="page_title">
                        <h1>About the Party</h1>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about_area_section">
                <div className="container">
                    <div className="society_economy_sec">
                        <h2 className="title_2">
                            We believe in a society and economy driven by values, not just profit.
                        </h2>
                        <p className="lrg_body">
                            Praja Shakti Democratic Party is a strong and pro-people political
                            party working for the rights and interests of the citizens of Gujarat.
                            Under the leadership of Shri Shankarsinh Vaghela “Bapu”, this party is
                            committed to bringing good, transparent, and fair governance for the
                            people of Gujarat through true democratic governance and pro-people
                            policies.
                        </p>
                        <p className="lrg_body">
                            In Gujarat, abuse of governance, corruption, exploitation of the poor,
                            and political support for bootleggers are prevalent. The voice of the
                            people is suppressed, youth unemployment is high, farmers struggle for
                            fair prices, women face insecurity, and small industries are
                            overshadowed by big corporations.
                        </p>
                    </div>

                    {/* President Message Section */}
                    <div className="president_msg">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="president_des">
                                    <h3 className="title_2">President Message</h3>
                                    <p className="lrg_body">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. It has been the industrys standard dummy
                                        text ever since the 1500s.
                                    </p>
                                    <p className="lrg_body mt-3">
                                        It originated when an unknown printer took a galley of type
                                        and scrambled it to create a type specimen book. Over the
                                        years, it has remained a fundamental part of the industry.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="president_img">
                                    <img
                                        src="/assets/img/about_the_party/Shri_S._Vaghela.png"
                                        alt="President's Image"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Know More Button */}
                    <div className="our_volunteers_btn">
                        <a href="#" className="theme_btn text-decoration-none">
                            <span>Know more </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
