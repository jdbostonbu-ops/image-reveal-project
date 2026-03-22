import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// 1. IMAGE IMPORTS
import img39 from "./img39.jpg"; import img40 from "./img40.jpg"; import img41 from "./img41.jpg";
import img42 from "./img42.jpg"; import img43 from "./img43.jpg"; import img44 from "./img44.jpg";
import img45 from "./img45.jpg"; import img46 from "./img46.jpg"; import img47 from "./img47.jpg";
import img48 from "./img48.jpg"; import img49 from "./img49.jpg"; import img50 from "./img50.jpg";
import img51 from "./img51.jpg"; import img52 from "./img52.jpg"; import img53 from "./img53.jpg";
import img54 from "./img54.jpg"; import img55 from "./img55.jpg"; import img56 from "./img56.jpg";
import img57 from "./img57.jpg";

// 2. MATHEMATICAL PATH GENERATION (10x10 Grid with Overlap Fix)
const cols = 10;
const rows = 10;
const initialClipPaths = [];
const finalClipPaths = [];

for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        const x = c * (100 / cols);
        const y = r * (100 / rows);
        const w = 100 / cols;
        const h = 100 / rows;
        
        // ADDED OVERLAP: Increase width/height by 0.5% to hide black gaps
        const w_overlap = w + 0.5;
        const h_overlap = h + 0.5;
        
        initialClipPaths.push(`polygon(${x}% ${y}%, ${x}% ${y}%, ${x}% ${y}%, ${x}% ${y}%)`);
        finalClipPaths.push(`polygon(${x}% ${y}%, ${x + w_overlap}% ${y}%, ${x + w_overlap}% ${y + h_overlap}%, ${x}% ${y + h_overlap}%)`);
    }
}

    const projectData = [
        { img: img39, title: "Prada Galleria", items: ["Galleria Saffiano Bag", "Small Saffiano Tote"], prices: ["$4,100", "$3,500"] },
        { img: img40, title: "Re-Edition Series", items: ["Re-Edition 2005", "Re-Nylon Backpack"], prices: ["$1,950", "$2,350"] },
        { img: img41, title: "Brushed Leather Cleo", items: ["Cleo Shoulder Bag", "Mini Cleo Bag"], prices: ["$2,700", "$2,300"] },
        { img: img42, title: "The Symbole Collection", items: ["Symbole Jacquard Tote", "Symbole Shoulder Bag"], prices: ["$3,300", "$2,600"] },
        { img: img43, title: "Prada Paradoxe", items: ["Paradoxe EDP 90ml", "Paradoxe Intense"], prices: ["$165", "$175"] },
        { img: img44, title: "Monolith Footwear", items: ["Monolith Boots", "Monolith Loafers"], prices: ["$1,550", "$1,150"] },
        { img: img45, title: "Eternal Gold Jewelry", items: ["Eternal Gold Ring", "Eternal Gold Necklace"], prices: ["$2,800", "$12,400"] },
        { img: img46, title: "Prada Linea Rossa", items: ["Technical Fabric Jacket", "Nylon Sneakers"], prices: ["$2,450", "$975"] },
        { img: img47, title: "America's Cup Sneakers", items: ["Original Patent", "Matte Bike Sneaker"], prices: ["$850", "$850"] },
        { img: img48, title: "The Prada Spirit: Innovation meets Heritage.", items: [], prices: [] },
        { img: img49, title: "Cloudbust Thunder", items: ["Cloudbust High-Top", "Cloudbust Knit"], prices: ["$1,150", "$1,070"] },
        { img: img50, title: "Men's Saffiano Leather", items: ["Brique Shoulder Bag", "Saffiano Briefcase"], prices: ["$2,300", "$3,600"] },
        { img: img51, title: "Obsession with detail defines the aesthetic.", items: [], prices: [] },
        { img: img52, title: "Triangle Logo Series", items: ["Triangle Shoulder Bag", "Triangle Mini Bag"], prices: ["$2,500", "$1,700"] },
        { img: img53, title: "Prada Accessories", items: ["Saffiano Belt", "Logo Plaque Belt"], prices: ["$575", "$625"] },
        { img: img54, title: "Sophistication is the refusal of the ordinary.", items: [], prices: [] },
        { img: img55, title: "Prada Eyewear", items: ["Symbole Sunglasses", "Cinema Frames"], prices: ["$520", "$480"] },
        { img: img56, title: "Small Leather Goods", items: ["Card Holder", "Bifold Wallet"], prices: ["$450", "$675"] },
        { img: img57, title: "Tradition is only a beginning.", items: [], prices: [] },
    ];

const PradaApp = () => {
    // 1. STATE & REFS
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactPanelRef = useRef(null);

    // 2. LISTEN FOR EXTERNAL HTML TOGGLE ('toggleContact')
    useEffect(() => {
        const handleToggle = () => setIsContactOpen(true);
        window.addEventListener('toggleContact', handleToggle);
        return () => window.removeEventListener('toggleContact', handleToggle);
    }, []);

    // 3. PRADA REVEAL ANIMATION
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const rows = gsap.utils.toArray(".row-wrapper");

        rows.forEach((row, index) => {
            const masks = row.querySelectorAll(".mask");
            const sideList = row.querySelector(".side-list-container");

            masks.forEach((mask, i) => {
                gsap.set(mask, { 
                    clipPath: initialClipPaths[i],
                    webkitClipPath: initialClipPaths[i],
                    opacity: 0,
                    visibility: "visible"
                });
            });

            const tl = gsap.timeline({ 
                scrollTrigger: { 
                    trigger: row, 
                    start: index === 0 ? "top 95%" : "top 90%", 
                    toggleActions: "play none none reverse",
                    fastScrollEnd: true,
                    immediateRender: false 
                } 
            });

            tl.to(masks, {
                opacity: 1,
                duration: 0.3,
                ease: "none"
            })
            .to(masks, {
                clipPath: (i) => finalClipPaths[i],
                webkitClipPath: (i) => finalClipPaths[i],
                duration: 0.8,
                ease: "power2.inOut",
                stagger: { amount: 0.8, from: "random" },
                immediateRender: false 
            }, "-=0.1")
            .to(sideList, { 
                opacity: 1, y: 0, duration: 0.8, ease: "power2.out" 
            }, "-=0.4");
        });

        const timer = setTimeout(() => { ScrollTrigger.refresh(); }, 100);
        return () => clearTimeout(timer);
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
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            <div style={{ backgroundColor: '#000', minHeight: '100vh', overflowX: 'hidden' }}>
                
                {projectData.map((project, i) => (
                    <div key={i} className="row-wrapper" style={{ 
                        width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '400px', paddingTop: i === 0 ? '150px' : '0' 
                    }}>
                        <div style={{ width: '100%', maxWidth: '1100px', padding: '0 20px' }}>
                            
                            <div className="img-container" style={{ position: 'relative', width: '100%', height: '700px', overflow: 'hidden', marginBottom: '40px' }}>
                                {[...Array(100)].map((_, j) => (
                                    <div key={j} className={`mask m-${j}`} style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        backgroundImage: `url("${project.img}")`, 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center',
                                        backgroundAttachment: 'scroll' 
                                    }}></div>
                                ))}
                            </div>

                            <div className="side-list-container" style={{ width: '100%', color: '#fff', opacity: 0, transform: 'translateY(30px)' }}>
                                <h3 style={{ fontSize: '42px', marginBottom: '30px', borderBottom: '1px solid #333', paddingBottom: '15px', textTransform: 'uppercase' }}>
                                    {project.title}
                                </h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px' }}>
                                    <div style={{ flex: 2 }}>
                                        {project.items.map((item, idx) => (
                                            <p key={idx} style={{ margin: '12px 0', fontSize: '20px' }}>{item}</p>
                                        ))}
                                    </div>
                                    <div style={{ flex: 1, textAlign: 'right' }}>
                                        {project.prices.map((price, idx) => (
                                            <p key={idx} style={{ margin: '12px 0', fontSize: '20px', color: '#888' }}>{price}</p>
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
                            <h2 style={{ color: '#fff', fontSize: '24px', letterSpacing: '4px', marginBottom: '40px' }}>AURELIA ATELIER</h2>
                            <p style={{ color: '#666', fontSize: '10px' }}>ADDRESS</p>
                            <p style={{ color: '#fff', fontSize: '14px', marginBottom: '20px' }}>123 Via Montenapoleone, New York, NY, 07086</p>
                            <p style={{ color: '#666', fontSize: '10px' }}>PHONE</p>
                            <p style={{ color: '#fff', fontSize: '14px', marginBottom: '40px' }}>+1 860 234 5678</p>
                            
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
                            <h2 style={{ color: '#fff', letterSpacing: '4px' }}>GRAZIE</h2>
                            <p style={{ color: '#888' }}>Your inquiry has been received.</p>
                        </div>
                    )}
                </div>
            </div>
        </ReactLenis>
    );
};


// RENDER LOGIC
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <PradaApp />
        </React.StrictMode>
    );
}

export default PradaApp;
