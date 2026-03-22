
import React, { useState, useRef, useEffect } from 'react';
import { ReactLenis } from "lenis/react";
import ReactDOM from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import img228 from "./img228.jpg";
import img229 from "./img229.jpg";
import img230 from "./img230.jpg";
import img231 from "./img231.jpg";
import img232 from "./img232.jpg";
import img233 from "./img233.jpg";
import img234 from "./img234.jpg";
import img235 from "./img235.jpg";
import img236 from "./img236.jpg";

const projectData = [
  { 
    img: img228, 
    title: "Roman Modernity: The Art of Fendi Footwear.", 
    items: [], 
    prices: [] 
  },
  { 
    img: img229, 
    title: "Women's Fendi First & Signature Heels",
    items: ["Fendi First Leather Slingback", "Colibrì Lite Mesh Pump", "Baguette FF Mirror Heel", "Fendi Filo Leather Pump", "Fendi First Metallic Sandal", "Colibrì Medium Heel Bootie"],
    prices: ["$1,450", "$1,150", "$1,290", "$1,100", "$1,350", "$1,250"]
  },
  { 
    img: img232, 
    title: "Signature FF Slide Sandals",
    items: ["FF Motif Rubber Slide", "Fendi Feel Leather Slide", "Baguette FF Buckle Sandal", "FF Canvas Flat Mule", "Fendi First Shearling Slide", "FF Leather Slide Sandal"],
    prices: ["$450", "$850", "$950", "$790", "$1,150", "$1,050"]
  },
  { 
    img: img231, 
    title: "Excellence in every step, from Rome to the world.", 
    items: [], 
    prices: [] 
  },
  { 
    img: img230, 
    title: "High-Fashion Platform Sandals",
    items: ["Fendi First Platform Sandal", "Baguette Wedge Sandal", "Sunshine FF Platform Mule", "FF Leather Chunky Sandal", "Fendi Filo Platform Heel", "FF Motif Espadrille Wedge"],
    prices: ["$1,390", "$1,250", "$990", "$1,100", "$1,450", "$890"]
  },
  { 
    img: img233, 
    title: "Women's Luxury FF Boots",
    items: ["Biker II FF Leather Boot", "Fendi First Ankle Boot", "FF Canvas Over-the-Knee Boot", "Delfina FF Leather Bootie", "Fendi Filo Tall Boot", "Baggy FF Biker Boot"],
    prices: ["$1,350", "$1,750", "$2,100", "$1,490", "$2,450", "$1,550"]
  },
  { 
    img: img234, 
    title: "Seasonal Shearling & Rain Boots",
    items: ["FF Felt Moon Boot", "Fendigraphy Rain Boot", "FF Shearling Snow Boot", "Baguette Leather Chelsea Boot", "Fendi First Fur-Lined Bootie", "FF Lug Sole Combat Boot"],
    prices: ["$1,250", "$950", "$1,450", "$1,390", "$1,850", "$1,290"]
  },
  { 
    img: img235, 
    title: "Men's Fendi Flow & Match Sneakers",
    items: ["Fendi Flow Suede Sneaker", "Fendi Match Leather Low-Top", "FF Mesh Tech Sneaker", "Fendi Faster Knit Sneaker", "FF O'Lock Runner Sneaker", "Fendi Flow Mixed Media Sneaker"],
    prices: ["$950", "$930", "$890", "$1,100", "$1,050", "$990"]
  },
  { 
    img: img236, 
    title: "Crafting the future of style since 1925.", 
    items: [], 
    prices: [] 
  }
];

gsap.registerPlugin(ScrollTrigger);

const FendishoesApp = () => {
    // 1. STATE & REFS
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactPanelRef = useRef(null);
    const isFirstRun = useRef(true);

    const uiColor = "#F5F5F7"; 
    const fendiYellow = "#F9B100"; // ICONIC FENDI ROMA YELLOW

    // 2. LISTEN FOR EXTERNAL HTML TOGGLE ('toggleContact')
    useEffect(() => {
        const handleToggle = () => setIsContactOpen(true);
        window.addEventListener('toggleContact', handleToggle);
        return () => window.removeEventListener('toggleContact', handleToggle);
    }, []);

    // 3. FENDI SLAT & CONTENT ANIMATION
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const rows = gsap.utils.toArray(".row-wrapper");

        rows.forEach((row) => {
            const slats = row.querySelectorAll(".slat-cell");
            const title = row.querySelector("h3");
            const leftCol = row.querySelector(".items-col");
            const rightCol = row.querySelector(".prices-col");
            const mainImg = row.querySelector(".main-image");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });

            // Atmospheric Drift
            tl.fromTo(mainImg, 
                { scale: 1.15, filter: "brightness(0.6)" },
                { scale: 1, filter: "brightness(1)", duration: 1.8, ease: "power2.out" }, 
                0
            )
            
            // Structural Slat Unfold (Shrink horizontally)
            .to(slats, {
                scaleX: 0,
                opacity: 0,
                duration: 1.2,
                stagger: {
                    amount: 0.8,
                    from: "center", 
                },
                ease: "expo.inOut"
            }, 0)
            
            // Liquid Split Content
            .to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
            .to(leftCol.querySelectorAll("p"), { 
                opacity: 1, x: 0, stagger: 0.05, duration: 0.8, ease: "expo.out" 
            }, "-=0.5")
            .to(rightCol.querySelectorAll("p"), { 
                opacity: 1, x: 0, stagger: 0.05, duration: 0.8, ease: "expo.out" 
            }, "-=0.8");
        });

        setTimeout(() => ScrollTrigger.refresh(), 500);
    }, []);

    // 4. CONTACT PANEL SLIDE-OUT ANIMATION
    useGSAP(() => {
                              if (isFirstRun.current) {
                                  gsap.set(contactPanelRef.current, { x: "100%", autoAlpha: 0 });
                                  isFirstRun.current = false;
                                  return;
                              }
                              gsap.to(contactPanelRef.current, {
                                  x: isContactOpen ? 0 : "100%",
                                  autoAlpha: isContactOpen ? 1 : 0,
                                  duration: 0.8,
                                  ease: "expo.inOut"
                              });
                          }, [isContactOpen]);

    const inputStyle = { 
        background: 'transparent', border: 'none', borderBottom: '1px solid #333', 
        color: '#fff', padding: '12px 0', width: '100%', outline: 'none', 
        marginBottom: '20px', fontSize: '13px' 
    };

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <div style={{ backgroundColor: '#000', color: uiColor, minHeight: '100vh', overflowX: 'hidden' }}>
                
                {projectData.map((project, i) => (
                    <div key={i} className="row-wrapper" style={{ marginBottom: '400px', paddingTop: i === 0 ? '250px' : '0' }}>
                        <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                            
                            <div className="img-container" style={{ position: 'relative', height: '75vh', overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
                                <img src={project.img} className="main-image" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={project.title} />
                                
                                <div className="slat-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', zIndex: 2 }}>
                                    {[...Array(12)].map((_, j) => (
                                        <div key={j} className="slat-cell" style={{
                                            backgroundColor: fendiYellow,
                                            flex: 1, height: '100%',
                                            transformOrigin: "center",
                                            borderLeft: '0.5px solid rgba(0,0,0,0.05)',
                                            borderRight: '0.5px solid rgba(0,0,0,0.05)'
                                        }} />
                                    ))}
                                </div>
                            </div>

                            <div className="side-list-container" style={{ marginTop: '40px' }}>
                                <h3 style={{ fontSize: '42px', borderBottom: '1px solid #333', paddingBottom: '20px', textTransform: 'uppercase', opacity: 0, transform: 'translateY(20px)' }}>{project.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', overflow: 'hidden' }}>
                                    <div className="items-col" style={{ flex: 2 }}>
                                        {project.items.map((item, idx) => (
                                            <p key={idx} style={{ fontSize: '19px', margin: '12px 0', opacity: 0, transform: 'translateX(-60px)' }}>{item}</p>
                                        ))}
                                    </div>
                                    <div className="prices-col" style={{ textAlign: 'right', flex: 1 }}>
                                        {project.prices.map((price, idx) => (
                                            <p key={idx} style={{ fontSize: '19px', color: '#888', margin: '12px 0', opacity: 0, transform: 'translateX(60px)' }}>{price}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* --- RIGHT SIDE BOUTIQUE PANEL --- */}
                <div 
                    ref={contactPanelRef} 
                    style={{ 
                        position: 'fixed', top: 0, right: 0, width: '400px', height: '100vh', 
                        backgroundColor: '#0a0a0a', borderLeft: '1px solid #222', zIndex: 9999, 
                        transform: 'translateX(100%)', visibility: 'hidden', padding: '80px 40px' 
                    }}
                >
                    <div onClick={() => setIsContactOpen(false)} style={{ 
                        position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)',
                        backgroundColor: '#111', color: '#fff', padding: '20px 8px', writingMode: 'vertical-rl',
                        cursor: 'pointer', border: '1px solid #222', borderRight: 'none', fontSize: '11px',
                        letterSpacing: '2px', textTransform: 'uppercase'
                    }}>
                        CLOSE [✕]
                    </div>

                    {!isSubmitted ? (
                        <>
                            <h2 style={{ fontSize: '24px', letterSpacing: '4px', marginBottom: '40px' }}>AURELIA ATELIER</h2>
                            <p style={{ color: '#666', fontSize: '10px' }}>ADDRESS</p>
                            <p style={{ fontSize: '14px', marginBottom: '20px' }}>123 Via Montenapoleone, New York, NY, 07086</p>
                            <p style={{ color: '#666', fontSize: '10px' }}>PHONE</p>
                            <p style={{ fontSize: '14px', marginBottom: '40px' }}>+1 860 234 5678</p>
                            
                            <hr style={{ borderColor: '#222', marginBottom: '40px' }} />
                            
                            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); setTimeout(() => { setIsSubmitted(false); setIsContactOpen(false); }, 4000); }}>
                                <input required placeholder="NAME" style={inputStyle} />
                                <input required type="email" placeholder="EMAIL" style={inputStyle} />
                                <textarea required placeholder="MESSAGE" rows="4" style={inputStyle} />
                                <button type="submit" style={{ background: '#fff', color: '#000', border: 'none', width: '100%', padding: '15px', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer' }}>SEND INQUIRY</button>
                            </form>
                        </>
                    ) : (
                        <div style={{ 
                            flex: 1, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'center', 
                            textAlign: 'center',
                            paddingBottom: '80px'}}>
                            <h2 style={{ letterSpacing: '4px' }}>GRAZIE</h2>
                            <p style={{ color: '#888' }}>Your inquiry has been received.</p>
                        </div>
                    )}
                </div>

            </div>
        </ReactLenis>
    );
};

export default FendishoesApp;

// Render Logic (Ensure this only exists in ONE file)
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<FendishoesApp />);
}