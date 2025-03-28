'use client'

import ReachUsSection from "@/components/ReachUsSection"
import { useState, useEffect } from "react"

// Interface for sangathan data
interface Sangathan {
    id: string
    banner_url: string
    name: string
    title: string
    short_desc: string
    link: string
    slug:string
}

export default function SangathanPage({ sangathan }: { sangathan: Sangathan[] }) {
    const [lang, setLang] = useState('en')

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language")
        if (storedLanguage) {
            setLang(storedLanguage)
        }
    }, [])

    return (
        <>
            <div
                className="breadcrumb_section"
                style={{
                    background: "url(/assets/img/sangathan_bg.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="page_title">
                        <h1>Sangathan</h1>
                    </div>
                </div>
            </div>

            <div className="about_area_section">
                <div className="container">
                    <div className="society_economy_sec">
                        <h2 className="title_2">Party Sangathan</h2>
                        <p className="lrg_body">
                            For the last several years, the ruling parties in Gujarat have been
                            oppressing the people through false promises and unpredictable rule.
                            Power is being misused to suppress the voice of the people,
                            unemployment is increasing, atrocities on women are increasing, and a
                            huge web of corruption is being woven, while the people are constantly
                            troubled. The main objective of the Praja Shakti Democratic Party is
                            to establish a true democratic system in Gujarat, where the interests
                            of the people will be given first place. Our priority is that every
                            citizen gets freedom, security, justice, and employment.
                        </p>
                    </div>

                    <div className="sangathan_morcha">
                        {sangathan?.map((morcha, index) => (
                            <div key={morcha.id} className="sangathan_morcha_list">
                                <div className="row align-items-center">
                                    {index % 2 !== 0 && (
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="morcha_img">
                                                <img src={morcha.banner_url || "/placeholder.svg"} alt={morcha.title} />
                                            </div>
                                        </div>
                                    )}
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <div className="morcha_des">
                                            <h3 className="title_2">{morcha.title}</h3>
                                            <p className="lrg_body" dangerouslySetInnerHTML={{ __html: morcha.short_desc }} />
                                            <a href={`/${lang}/sangathan/${morcha.slug}`} className="theme_btn text-decoration-none">
                                                <span>Know more</span>
                                            </a>
                                        </div>
                                    </div>
                                    {index % 2 === 0 && (
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="morcha_img">
                                                <img src={morcha.banner_url || "/placeholder.svg"} alt={morcha.title} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ReachUsSection />
        </>
    )
}