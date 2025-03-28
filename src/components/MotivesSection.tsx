"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import Fancybox from "@/components/Fancybox";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Motive {
  id: string;
  image_url: string;
  file_url: string;
}

export default function MotivesSection({ motives }: { motives: Motive[] }) {
  useEffect(() => {
    const prajamotive = new Swiper(".praja_motives_slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".praja-pagination",
        clickable: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      prajamotive.destroy(); // Cleanup
    };
  }, []);

  return (
    <Fancybox>
      <section className="pr_shakti_motives_section">
        <div className="container">
          <div className="title_info">
            <h2 className="title">Praja Shakti Motives</h2>
            <p className="lrg_body mt-43" id="aboutText">
              The main objective of Praja Shakti Democratic Party is to establish a true democratic
              system in Gujarat, where the interests of the people will be given first place. Our priority is that every
              citizen gets freedom, security, justice and employment.
            </p>
          </div>

          <div className="swiper praja_motives_slider mt_65 services_carousel_active">
            <div className="swiper-wrapper">
              {motives.map((motive) => (
                <div key={motive.id} className="swiper-slide">
                  <a data-fancybox="motives-gallery" href={motive.file_url} className="popup-youtube hover_effect">
                    <img src={motive.image_url} alt={`Praja Motives ${motive.id}`} />
                  </a>
                </div>
              ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>

          <div className="our_volunteers_btn">
            <a href="#" className="theme_btn text-decoration-none">
              <span><span>Know more </span></span>
            </a>
          </div>
        </div>
      </section>
    </Fancybox>
  );
}
