
import React, { useState, useRef, useEffect } from 'react';
import { ReactLenis } from "lenis/react";
import ReactDOM from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import img246 from "./img246.jpg";
import img247 from "./img247.jpg";
import img248 from "./img248.jpg";
import img249 from "./img249.jpg";
import img250 from "./img250.jpg";
import img251 from "./img251.jpg";
import img252 from "./img252.jpg";
import img253 from "./img253.jpg";
import img254 from "./img254.jpg";

const projectData = [
  { 
    img: img246, 
    title: "The Roman Soul: Fendi's Heritage of Rare Craftsmanship.", 
    items: [], 
    prices: [] 
  },
  { 
    img: img247, 
    title: "Fendi Fur & Shearling Collection",
    items: [
        "Mini Baguette White Shearling with FF Embroidery", 
        "Peekaboo ISeeU Small Pink Shearling", 
        "Fendi First Small Nut-Colored Mink Fur", 
        "Baguette Fox Fur with FF Metallic Buckle", 
        "Peekaboo ISeeU Medium Brown Shearling", 
        "Nano Fendigraphy Shearling Micro Bag"
    ],
    prices: ["$3,290", "$5,800", "$7,200", "$4,500", "$6,400", "$1,450"]
  },
  { 
    img: img248, 
    title: "Colorful & Multichrome Accents",
    items: [
        "Baguette Multi-Colored FF Fabric Embroidery", 
        "Peekaboo ISeeU Petite Gradient Sunset Leather", 
        "Fendi First Small Acid Green Python", 
        "Mini Baguette Sequined Kaleidoscope Pattern", 
        "C'mon Mini Bright Fuchsia Leather", 
        "Fendigraphy Small Turquoise Calfskin"
    ],
    prices: ["$3,750", "$4,300", "$5,200", "$4,300", "$2,450", "$2,550"]
  },
  { 
    img: img249, 
    title: "Creativity is the engine of the Roman soul.", 
    items: [], 
    prices: [] 
  },
  { 
    img: img250, 
    title: "The Iconic Baguette Series",
    items: [
        "Baguette Medium Black Soft Nappa Leather", 
        "Baguette Large Brown FF Fabric Jacquard", 
        "Mini Baguette Chain Dove Gray Leather", 
        "Baguette Re-Edition 1997 Purple Sequins", 
        "Baguette Pouch with Strap Sand Leather", 
        "Baguette Phone Pouch FF Canvas"
    ],
    prices: ["$3,750", "$3,300", "$2,850", "$4,100", "$1,950", "$1,350"]
  },
  { 
    img: img251, 
    title: "Men's Peekaboo ISeeU Collection",
    items: [
        "Peekaboo ISeeU Medium Black Selleria Leather", 
        "Peekaboo ISeeU Small Cuoio Romano Gray", 
        "Peekaboo ISeeU Forty8 FF Fabric Pattern", 
        "Peekaboo ISeeU Mini Blue Grainy Leather", 
        "Peekaboo ISeeU Light Moss Green Calfskin", 
        "Peekaboo ISeeU Messenger Bag Black Grain"
    ],
    prices: ["$5,400", "$4,800", "$4,100", "$3,950", "$5,200", "$3,650"]
  },
  { 
    img: img252, 
    title: "Fine Leather Purses: The First & Origami",
    items: [
        "Fendi First Medium Caramel Nappa Leather", 
        "Fendi First Small Black Leather with Gold Hardware", 
        "Fendi Origami Medium Black Grainy Leather", 
        "Fendi Origami Mini Dove Gray Calfskin", 
        "Fendi First Small Silver Laminated Leather", 
        "Fendi Origami Small Light Blue Leather"
    ],
    prices: ["$3,950", "$3,450", "$2,750", "$1,950", "$3,750", "$2,450"]
  },
  { 
    img: img253, 
    title: "Contemporary Silhouettes: C'mon & Fendigraphy",
    items: [
        "C'mon Medium Black Polished Leather", 
        "C'mon Small Dove Gray Leather Shoulder Bag", 
        "Fendigraphy Small Black Leather Hobo", 
        "Fendigraphy Medium FF Fabric Hobo Bag", 
        "C'mon Nano Black Leather with FF Charm", 
        "Fendigraphy Small Metallic Silver Leather"
    ],
    prices: ["$2,950", "$2,650", "$2,550", "$2,950", "$1,250", "$2,750"]
  },
  { 
    img: img254, 
    title: "Every piece tells a story of Roman elegance.", 
    items: [], 
    prices: [] 
  }
];


gsap.registerPlugin(ScrollTrigger);

const FendipursesApp = () => {
    // 1. STATE & REFS
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactPanelRef = useRef(null);
    const isFirstRun = useRef(true);

    const uiColor = "#F5F5F7"; 
    const fendiYellow = "#F9B100"; 

    // 2. LISTEN FOR EXTERNAL HTML TOGGLE ('toggleContact')
    useEffect(() => {
        const handleToggle = () => setIsContactOpen(true);
        window.addEventListener('toggleContact', handleToggle);
        return () => window.removeEventListener('toggleContact', handleToggle);
    }, []);

    // 3. FENDI STRIPE & CONTENT ANIMATION
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const rows = gsap.utils.toArray(".row-wrapper");

        rows.forEach((row) => {
            const stripes = row.querySelectorAll(".stripe-band");
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

            // Image Zoom/Brighten
            tl.fromTo(mainImg, 
                { scale: 1.15, filter: "brightness(0.6)" },
                { scale: 1, filter: "brightness(1)", duration: 1.8, ease: "power2.out" }, 
                0
            )
            // Yellow Stripe Reveal (Alternating slide out)
            .to(stripes, {
                xPercent: (i) => (i % 2 === 0 ? -110 : 110), 
                duration: 1.4,
                stagger: { amount: 0.8, from: "top" },
                ease: "expo.inOut"
            }, 0.1)
            // Liquid Split Content
            .to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
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
                                <img src={project.img} className="main-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={project.title} />
                                
                                <div className="stripe-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', zIndex: 2 }}>
                                    {[...Array(14)].map((_, j) => (
                                        <div key={j} className="stripe-band" style={{
                                            backgroundColor: fendiYellow,
                                            flex: 1, width: '100%',
                                            borderBottom: '0.5px solid rgba(0,0,0,0.15)' 
                                        }} />
                                    ))}
                                </div>
                            </div>

                            <div className="side-list-container" style={{ marginTop: '40px' }}>
                                <h3 style={{ fontSize: '42px', borderBottom: '1px solid #333', paddingBottom: '20px', textTransform: 'uppercase', opacity: 0, transform: 'translateY(20px)' }}>{project.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', overflow: 'hidden' }}>
                                    <div className="items-col" style={{ flex: 2 }}>
                                        {project.items.map((item, idx) => <p key={idx} style={{ fontSize: '19px', margin: '12px 0', opacity: 0, transform: 'translateX(-60px)' }}>{item}</p>)}
                                    </div>
                                    <div className="prices-col" style={{ textAlign: 'right', flex: 1 }}>
                                        {project.prices.map((price, idx) => <p key={idx} style={{ fontSize: '19px', color: '#888', margin: '12px 0', opacity: 0, transform: 'translateX(60px)' }}>{price}</p>)}
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
                    {/* CLOSE TAB */}
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

export default FendipursesApp;

// Render Logic (Ensure this only exists in ONE file)
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<FendipursesApp />);
}