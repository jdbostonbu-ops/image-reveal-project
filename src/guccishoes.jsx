import React, { useState, useRef, useEffect } from 'react';
import { ReactLenis } from "lenis/react";
import ReactDOM from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import img219 from "./img219.jpg";
import img220 from "./img220.jpg";
import img221 from "./img221.jpg";
import img222 from "./img222.jpg";
import img223 from "./img223.jpg";
import img224 from "./img224.jpg";
import img225 from "./img225.jpg";
import img226 from "./img226.jpg";
import img227 from "./img227.jpg";

const projectData = [
  { 
    img: img219, 
    title: "Gucci Heritage: A Legacy of Italian Craftsmanship.", items: [], prices: []},
  { 
    img: img220, 
    title: "Women's Designer Sandals",
    items: [
        "Women's Interlocking G Slide Sandal", 
        "Women's Horsebit Leather Sandal", 
        "Women's Thong Sandal with Double G", 
        "Women's Slide Sandal with Horsebit", 
        "Women's Platform Sandal with Double G", 
        "Women's Crystal Bombshell Slide"
    ],
    prices: ["$550", "$990", "$880", "$770", "$1,390", "$1,650"]
  },
  { 
    img: img221, 
    title: "Iconic Women's Loafers",
    items: [
        "Women's Jordaan Horsebit Loafer", 
        "Women's Brixton Leather Loafer", 
        "Women's Ragazzo GG Canvas Loafer", 
        "Women's Horsebit 1953 Loafer", 
        "Women's Lug-Sole Horsebit Loafer", 
        "Women's GG Crystal Jordaan Loafer"
    ],
    prices: ["$1,090", "$1,090", "$1,090", "$1,090", "$1,270", "$1,590"]
  },
  { 
    img: img222, 
    title: "Elegance defined through every silhouette.", items: [], prices: []},
  { 
    img: img223, 
    title: "Women's Luxury Boots",
    items: [
        "Women's Signora Leather Bootie", 
        "Women's GG Monogram Combat Boots", 
        "Women's Bombshell GG Canvas Boot", 
        "Women's Horsebit Suede Ankle Boot", 
        "Women's Vittoria Leather Bootie", 
        "Women's Pointed-Toe Knee-High Boot"
    ],
    prices: ["$1,650", "$1,550", "$2,500", "$1,550", "$1,700", "$1,724"]
  },
  { 
    img: img224, 
    title: "Men's Signature Sneakers & Ace Collection",
    items: [
        "Men's Ace Leather Sneaker with Web", 
        "Men's Stretch Leather Low-Top Sneaker", 
        "Men's Re-Web Mixed Media Sneaker", 
        "Men's Screener GG Canvas Sneaker", 
        "Men's Rhyton Logo Leather Sneaker", 
        "Men's Interlocking G Mesh Sneaker"
    ],
    prices: ["$830", "$980", "$1,190", "$1,060", "$1,166", "$920"]
  },
  { 
    img: img225, 
    title: "Men's Formal Loafers & Formal Styles",
    items: [
        "Men's Horsebit 1953 Leather Loafer", 
        "Men's Jordaan Horsebit Loafer", 
        "Men's Terenze Horsebit Loafer", 
        "Men's GG Supreme Leather Loafer", 
        "Men's William Penny Loafer", 
        "Men's Next Studded Horsebit Loafer"
    ],
    prices: ["$1,090", "$1,050", "$1,150", "$1,100", "$1,190", "$1,690"]
  },
  { 
    img: img226, 
    title: "Sophisticated Women's Heels",
    items: [
        "Women's Horsebit Mid-Heel Pump", 
        "Women's Blondie Interlocking G Sandal", 
        "Women's Loafer Pump with Horsebit", 
        "Women's GG-Patterned Heeled Loafer", 
        "Women's 75mm Leather Pump", 
        "Women's Crystal Embellished Mesh Heel"
    ],
    prices: ["$990", "$960", "$1,120", "$990", "$1,490", "$1,250"]
  },
  { 
    img: img227, title: "Walk with confidence in timeless Italian style.", items: [], prices: []}
];

  
gsap.registerPlugin(ScrollTrigger);

const GuccishoesApp = () => {
    // 1. STATE & REFS
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactPanelRef = useRef(null);
    const uiColor = "#F5F5F7"; // Bone White

    // 2. LISTEN FOR EXTERNAL HTML TOGGLE ('toggleContact')
    useEffect(() => {
        const handleToggle = () => setIsContactOpen(true);
        window.addEventListener('toggleContact', handleToggle);
        return () => window.removeEventListener('toggleContact', handleToggle);
    }, []);

    // 3. GUCCI PRISM REVEAL & CONTENT ANIMATION
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const rows = gsap.utils.toArray(".row-wrapper");

        rows.forEach((row) => {
            const redChannel = row.querySelector(".rgb-red");
            const greenChannel = row.querySelector(".rgb-green");
            const finalImg = row.querySelector(".main-image-final");
            const content = row.querySelector(".side-list-container");
            const priceTags = row.querySelectorAll(".price-tag");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 85%",
                    end: "top 15%",
                    scrub: 1.5,
                }
            });

            // The Prism Reveal (RGB Separation)
            tl.fromTo(redChannel, { x: -40, y: -20, opacity: 0 }, { x: 0, y: 0, opacity: 0.6, duration: 2 }, 0)
              .fromTo(greenChannel, { x: 40, y: 20, opacity: 0 }, { x: 0, y: 0, opacity: 0.6, duration: 2 }, 0)
              .fromTo(finalImg, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.5 }, 0.8);

            // Content & Price Shimmer
            const contentTl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });

            contentTl.to(content, { opacity: 1, y: 0, duration: 1 })
                     .fromTo(priceTags, 
                        { backgroundPosition: "-200% 0", opacity: 0, x: 20 }, 
                        { backgroundPosition: "200% 0", opacity: 1, x: 0, duration: 1.2, stagger: 0.15, ease: "power2.out" }, 
                        "-=0.5"
                     );
        });

        setTimeout(() => ScrollTrigger.refresh(), 500);
    }, []);

    // 4. CONTACT PANEL SLIDE-OUT ANIMATION
    useGSAP(() => {
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
            <div style={{ backgroundColor: '#000', minHeight: '100vh', color: uiColor, fontFamily: 'Roboto, sans-serif', overflowX: 'hidden' }}>
                
                {projectData.map((project, i) => (
                    <div key={i} className="row-wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '400px', paddingTop: i === 0 ? '250px' : '0' }}>
                        <div style={{ width: '100%', maxWidth: '1100px', padding: '0 20px' }}>
                            
                            {/* IMAGE CONTAINER */}
                            <div className="img-container" style={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden', backgroundColor: '#050505' }}>
                                <div className="rgb-red" style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url("${project.img}")`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'screen', filter: 'sepia(1) hue-rotate(-50deg) brightness(1.2)', zIndex: 1 }}></div>
                                <div className="rgb-green" style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url("${project.img}")`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'screen', filter: 'sepia(1) hue-rotate(80deg) brightness(1.2)', zIndex: 1 }}></div>
                                <div className="main-image-final" style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url("${project.img}")`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 2, opacity: 0 }}></div>
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="side-list-container" style={{ opacity: 0, transform: 'translateY(40px)', marginTop: '40px' }}>
                                <h3 style={{ fontSize: '42px', borderBottom: '1px solid #333', paddingBottom: '15px', textTransform: 'uppercase', letterSpacing: '3px' }}>{project.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
                                    <div className="items-col" style={{ flex: 2 }}>
                                        {project.items.map((item, idx) => <p key={idx} style={{ fontSize: '18px', color: '#fff', margin: '12px 0', lineHeight: '1.4' }}>{item}</p>)}
                                    </div>
                                    
                                    <div className="prices-col" style={{ textAlign: 'right', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                        {project.prices.map((price, idx) => (
                                            <div key={idx} className="price-tag" style={{ 
                                                fontSize: '18px', lineHeight: '1.4', margin: '12px 0', fontWeight: '500', display: 'block', width: 'fit-content',
                                                color: '#fff'
                                            }}>
                                                {price}
                                            </div>
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
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                            <h2 style={{ letterSpacing: '4px' }}>GRAZIE</h2>
                            <p style={{ color: '#888' }}>Your inquiry has been received.</p>
                        </div>
                    )}
                </div>

            </div>
        </ReactLenis>
    );
};

export default GuccishoesApp;

// Render Logic (Ensure this only exists in ONE file)
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<GuccishoesApp />);
}