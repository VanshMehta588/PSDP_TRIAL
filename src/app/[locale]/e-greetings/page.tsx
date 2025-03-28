"use client"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import ReachUsSection from "@/components/ReachUsSection"
import { usePathname } from "next/navigation"

interface IsotopeInstance {
    arrange(options: { filter?: string }): void
    destroy(): void
}

interface PhotoItem {
    id: number
    slug: string
    category: string
    image_url: string
    title: string
    date: string
}

export default function EgreetingsPage() {
    const gridRef = useRef<HTMLUListElement>(null)
    const [isotope, setIsotope] = useState<IsotopeInstance | null>(null)
    const [filterKey, setFilterKey] = useState("*")
    const [photoItems, setPhotoItems] = useState<PhotoItem[]>([]) // Initialize as an empty array
    const [isLoading, setIsLoading] = useState(true)
    const pathname = usePathname(); // Get current path
    const [Language, setLanguage] = useState("")
    const [LanguageRoute, setLanguageRoute] = useState("")

    useEffect(() => {
        const lang = localStorage.getItem("language");
        if (lang) {
            setLanguageRoute(`/${lang}/`);
        }
    }, [pathname])

    // Initialize Fancybox
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            // Fancybox options
        })

        return () => {
            Fancybox.destroy()
        }
    }, [photoItems])


    // Initialize Isotope after data is loaded
    useEffect(() => {
        let isoInstance: IsotopeInstance | null = null
        if (typeof window !== "undefined" && gridRef.current && photoItems.length > 0) {
            import("isotope-layout").then((IsotopeModule) => {
                const Isotope = IsotopeModule.default
                isoInstance = new Isotope(gridRef.current!, {
                    itemSelector: ".element-item",
                    layoutMode: "fitRows",
                }) as IsotopeInstance
                setIsotope(isoInstance)
            })
        }
        return () => {
            if (isoInstance) {
                isoInstance.destroy()
            }
        }
    }, [photoItems])

    // Apply filter when changed
    useEffect(() => {
        if (isotope) {
            const filterValue = filterKey === "*" ? "*" : `.${filterKey}`
            isotope.arrange({ filter: filterValue })
        }
    }, [filterKey, isotope])


    const LanguagePicker = () => {
        if (pathname.includes("/gu")) {
            setLanguage("guj")
        } else if (pathname.includes("/en")) {
            setLanguage("eng")
        } else {
            // Default to English if no language is specified
            setLanguage("eng")
        }
    }

    useEffect(() => {
        LanguagePicker()
    }, [pathname])

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            console.log('====================================');
            console.log(Language);
            console.log('====================================');
            setIsLoading(true)
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_REFERRED_MEMBERS_API_URL}HomeAll?lang=${Language}`)
                const data = await response.json()
                console.log(data)

                if (Array.isArray(data.photoGallery)) {
                    setPhotoItems(data.photoGallery) // Ensure data is an array before setting it
                } else {
                    console.error("Unexpected API response format:", data)
                    setPhotoItems([]) // Default to an empty array
                }
            } catch (error) {
                console.error("Error fetching data:", error)
                setPhotoItems([]) // Ensure state is always an array
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [Language])

    const handleFilterClick = (key: string) => {
        setFilterKey(key)
    }

    return (
        <>
            <div className="breadcrumb_section" style={{ background: "url(/assets/img/about_the_party/about-the-party-bg.png)" }}>
                <div className="container">
                    <div className="page_title">
                        <h1>E-greetings</h1>
                    </div>
                </div>
            </div>

            <div data-js="hero-demo">
                <div className="about_area_section">
                    <div className="container">
                        <div className="photo_gategory_bg">
                            <div className="ui-group">
                                <div className="e_greetings_filters button-group js-radio-button-group device-type">
                                    {["*", "Celebration", "Festival", "Press Conference", "Interview", "Podcast", "Inauguration"].map(
                                        (category) => (
                                            <button
                                                key={category}
                                                className={`button ${filterKey === category ? "is-checked" : ""}`}
                                                onClick={() => handleFilterClick(category)}
                                            >
                                                {category === "*" ? "All" : category}
                                            </button>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>

                        <ul className="grid" ref={gridRef}>
                            {isLoading ? (
                                <p>Loading greeting cards...</p>
                            ) : photoItems.length > 0 ? (
                                photoItems.map((item) => (
                                    <li className={`element-item ${item.category}`} key={item.id} data-category={item.category}>
                                        <div className="gallery_card hover_img">
                                            <div className="gallery_card_img">
                                                <a
                                                    href={item.image_url || "/placeholder.svg"}
                                                    data-fancybox="gallery"
                                                    data-caption={item.title}
                                                >
                                                    <img src={item.image_url || "/placeholder.svg"} alt={item.title} />
                                                </a>
                                            </div>
                                            <Link href={`${LanguageRoute}e-greetings/${item.slug}`}>
                                                <div className="gallery_cad_des">
                                                    <h4>{item.title}</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p>No photos available</p>
                            )}
                        </ul>
                    </div>

                    <div className="know_more_btn_wrap pt-2">
                        <a href="#" className="theme_btn text-decoration-none">
                            <span>Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <ReachUsSection />
        </>
    )
}

