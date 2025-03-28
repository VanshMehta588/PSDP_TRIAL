"use client"
import React, { useEffect, useRef } from "react";

export default function EGreetingDetailPage() {
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
                    const navigationElements = iframeDoc.querySelectorAll('nav, .navbar');
                    navigationElements.forEach(el => el.remove());

                    // Inject custom CSS to ensure clean view
                    const styleTag = iframeDoc.createElement('style');
                    styleTag.textContent = `
                        body { 
                            margin: 0 !important; 
                            padding: 0 !important; 
                        }
                        header, footer, nav,.navbar { 
                            display: none !important; 
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
    });

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <iframe
                src="https://event.prajashakti.org/PrajaShaktiSurat?hideHeader=true"
                className="w-100 h-100 border-0"
                style={{ overflow: "hidden" }}
                ref={joinIframeRef}
            />
        </div>
    );
}
