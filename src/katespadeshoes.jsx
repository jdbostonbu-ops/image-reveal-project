import React, { useState, useRef, useEffect } from 'react';
import { ReactLenis } from "lenis/react";
import ReactDOM from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


import img210 from "./img210.jpg";
import img211 from "./img211.jpg";
import img212 from "./img212.jpg";
import img213 from "./img213.jpg";
import img214 from "./img214.jpg";
import img215 from "./img215.jpg";
import img216 from "./img216.jpg";
import img217 from "./img217.jpg";
import img218 from "./img218.jpg";

const projectData = [
  { 
    img: img210, 
    title: "Timeless Sophistication: The Kate Spade Pump Collection.", 
    items: [], 
    prices: [] 
  },
  { 
    img: img211, 
    title: "Signature Bow Pumps",
    items: ["Bunnie Suede Pump", "Deco Bow Ballet Pump", "Bowdie Cap Toe Pump", "Bowdie Slingback Pump", "Bunnie Crinkle Patent Pump", "Renata Bow Pump"],
    prices: ["$278", "$248", "$228", "$268", "$278", "$257"]
  },
  { 
    img: img212, 
    title: "Slingback & Kitten Heels",
    items: ["Lover Slingback Kitten Heel", "Rue Slingback Mid Heel", "Deco Bow Slingback Pump", "Happily Slingback Pump", "Marseille Dress Pump", "Carolina Kitten Heel"],
    prices: ["$238", "$248", "$238", "$248", "$198", "$198"]
  },
  { 
    img: img213, 
    title: "From polished pointed toes to playful heart details.", 
    items: [], 
    prices: [] 
  },
  { 
    img: img214, 
    title: "Classic Pointed Toe & High Heels",
    items: ["Maren Pointed Toe Pump", "Bunnie Pointed Toe Pump", "Halo Mary Jane High Heel", "Maren Ankle Strap Pump", "Veronica Pointed Toe Pump", "Bianca High Heel Pump"],
    prices: ["$228", "$278", "$228", "$228", "$124", "$268"]
  },
  { 
    img: img215, 
    title: "Mary Jane & Block Heel Pumps",
    items: ["Halo Mary Jane Pump", "Renata Metallic Mary Jane", "Deco Bow Loafer Pump", "Bowdie Block Heel Pump", "Renata Sling High Heel", "Amelia Block Heel Pump"],
    prices: ["$228", "$328", "$248", "$268", "$298", "$198"]
  },
  { 
    img: img216, 
    title: "Bridal & Evening Pumps",
    items: ["Bridal Satin Evening Pump", "Happily Ivory Bridal Pump", "Bridal Sparkle Heels", "Marseille Bow Pump", "Valerie Embroidered Pump", "Bridal Satin Bow Slingback"],
    prices: ["$198", "$248", "$198", "$198", "$248", "$257"]
  },
  { 
    img: img217, 
    title: "Novelty & Embellished Heels",
    items: ["Lover Heart-Detail Pump", "60mm Lover Heart Heel", "Treasure Embellished Pump", "Perfect Pair Heart Heel", "Renata Crystal Buckle Pump", "Pearl Accent Pump"],
    prices: ["$238", "$360", "$328", "$298", "$328", "$228"]
  },
  { 
    img: img218, 
    title: "Every step is an opportunity to sparkle.", 
    items: [], 
    prices: [] 
  }
];


gsap.registerPlugin(ScrollTrigger);

const KatespadeshoesApp = () => {
    // 1. STATE & REFS
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactPanelRef = useRef(null);

    const uiColor = "#F5F5F7"; 
    const spadePink = "#e31b6d"; // ICONIC KATE SPADE PINK

    // 2. LISTEN FOR EXTERNAL HTML TOGGLE ('toggleContact')
    useEffect(() => {
        const handleToggle = () => setIsContactOpen(true);
        window.addEventListener('toggleContact', handleToggle);
        return () => window.removeEventListener('toggleContact', handleToggle);
    }, []);

    // 3. MOSAIC RIPPLE & CONTENT ANIMATION
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const rows = gsap.utils.toArray(".row-wrapper");

        rows.forEach((row) => {
            const circles = row.querySelectorAll(".reveal-circle");
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

            // Subtle drift zoom
            tl.fromTo(mainImg, 
                { scale: 1.2 },
                { scale: 1, duration: 2, ease: "power2.out" }, 
                0
            )
            
            // Circular Spade Reveal (Ripple from center)
            .to(circles, {
                scale: 0,
                duration: 1,
                stagger: {
                    amount: 0.8,
                    grid: [6, 8], 
                    from: "center", 
                },
                ease: "back.in(1.5)" 
            }, 0)
            
            // Content Entrance
            .to(title, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
            .to(leftCol.querySelectorAll("p"), { 
                opacity: 1, x: 0, stagger: 0.05, duration: 0.8, ease: "expo.out" 
            }, "-=0.4")
            .to(rightCol.querySelectorAll("p"), { 
                opacity: 1, x: 0, stagger: 0.05, duration: 0.8, ease: "expo.out" 
            }, "-=0.7");
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
            <div style={{ backgroundColor: '#000', color: uiColor, minHeight: '100vh', overflowX: 'hidden' }}>
                
                {projectData.map((project, i) => (
                    <div key={i} className="row-wrapper" style={{ marginBottom: '400px', paddingTop: i === 0 ? '250px' : '0' }}>
                        <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                            
                            <div className="img-container" style={{ position: 'relative', height: '70vh', overflow: 'hidden', backgroundColor: '#111' }}>
                                <img src={project.img} className="main-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={project.title} />
                                
                                <div className="mosaic-overlay" style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(6, 1fr)',
                                    zIndex: 2
                                }}>
                                    {[...Array(48)].map((_, j) => (
                                        <div key={j} className="reveal-circle" style={{
                                            backgroundColor: spadePink,
                                            borderRadius: '50%',
                                            width: '120%', 
                                            height: '120%',
                                            margin: '-10%' 
                                        }} />
                                    ))}
                                </div>
                            </div>

                            <div className="side-list-container" style={{ marginTop: '40px' }}>
                                <h3 style={{ fontSize: '42px', borderBottom: '1px solid #333', paddingBottom: '20px', textTransform: 'uppercase', opacity: 0, transform: 'translateY(20px)' }}>
                                    {project.title}
                                </h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                                    <div className="items-col" style={{ flex: 2 }}>
                                        {project.items.map((item, idx) => <p key={idx} style={{ fontSize: '18px', margin: '10px 0', opacity: 0, transform: 'translateX(-40px)' }}>{item}</p>)}
                                    </div>
                                    <div className="prices-col" style={{ textAlign: 'right', flex: 1 }}>
                                        {project.prices.map((price, idx) => <p key={idx} style={{ fontSize: '18px', color: '#888', margin: '10px 0', opacity: 0, transform: 'translateX(40px)' }}>{price}</p>)}
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

export default KatespadeshoesApp;

// Render Logic (Ensure this only exists in ONE file)
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<KatespadeshoesApp />);
}