import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// 1. IMAGE IMPORTS
import img20 from "./img33.jpg"; import img21 from "./img21.jpg"; import img22 from "./img22.jpg";
import img23 from "./img23.jpg"; import img24 from "./img24.jpg"; import img25 from "./img25.jpg";
import img26 from "./img26.jpg"; import img27 from "./img27.jpg"; import img28 from "./img28.jpg";
import img29 from "./img29.jpg"; import img30 from "./img30.jpg"; import img31 from "./img31.jpg";
import img32 from "./img32.jpg"; import img33 from "./img20.jpg"; import img34 from "./img34.jpg";
import img35 from "./img35.jpg"; import img36 from "./img36.jpg"; import img37 from "./img37.jpg";
import img38 from "./img38.jpg";


    const projectData = [
        { img: img20, title: "Monogram Heritage", items: ["Keepall Bandoulière 50", "Christopher Backpack", "Neverfull PM"], prices: ["$2,570", "$3,450", "$1,400"] },
        { img: img21, title: "The Art of Gifting", items: ["Pocket Organizer", "Slender Wallet", "Multiple Wallet"], prices: ["$460", "$555", "$525"] },
        { img: img22, title: "Women's Leather Goods", items: ["Neverfull MM", "Speedy Bandoulière 25", "Onthego GM"], prices: ["$2,030", "$1,820", "$3,100"] },
        { img: img23, title: "Capucines Collection", items: ["Capucines Mini", "Capucines BB", "Capucines MM"], prices: ["$6,100", "$6,750", "$7,300"] },
        { img: img24, title: "Fragrance Savoir-Faire", items: ["L'Immensité", "Matière Noire", "Rose des Vents"], prices: ["$320", "$320", "$320"] },
        { img: img28, title: "Men's Footwear", items: ["LV Trainer Sneaker", "LV Ollie Sneaker", "Luxembourg"], prices: ["$1,220", "$1,010", "$935"] },
        { img: img30, title: "Tambour Watches", items: ["Street Diver", "Horizon Light Up", "Tambour Slim"], prices: ["$5,750", "$3,600", "$3,150"] },
        { img: img27, title: "Monogram Multicolore", items: ["Takashi Murakami Alma", "Murakami Speedy 30", "Lodge PM"], prices: ["$2,230", "$7,620", "$1,640"] },
        { img: img25, title: "High Jewelry", items: ["Empreinte Ring", "Volt Multi Ring", "Idylle Blossom"], prices: ["$1,980", "$3,950", "$2,420"] },
        { img: img29, title: "The Spirit of Travel remains the heartbeat of the Maison.", items: [], prices: [] },
        { img: img26, title: "The Da Vinci Masters Collection", items: ["Masters Speedy 30", "Da Vinci Neverfull", "Montaigne MM"], prices: ["$2,890", "$3,299", "$3,420"] },
        { img: img31, title: "Iconic Heritage Bags", items: ["Horizon 55 Suitcase", "Keepall Monogram", "Onthego Reverse"], prices: ["$3,650", "$1,980", "$3,200"] },
        { img: img32, title: "Elegance is not about being noticed, it's about being remembered.", items: [], prices: [] },
        { img: img33, title: "Monogram Sneaker Collection", items: ["Time Out Sneaker", "LV Sneakerina", "Archlight Sneaker"], prices: ["$1,450", "$1,250", "$2,620"] },
        { img: img34, title: "Belts Collection", items: ["LV Initiales 40mm", "LV Pont 9 35mm", "LV Pyramide"], prices: ["$590", "$710", "$625"] },
        { img: img35, title: "Style is a way to say who you are without having to speak.", items: [], prices: [] },
        { img: img36, title: "Sunglasses Collection", items: ["1.1 Millionaires", "Cyclone Sunglasses", "LV Waimea L"], prices: ["$890", "$850", "$620"] },
        { img: img37, title: "Small Leather Goods", items: ["Zippy Wallet", "Victorine Wallet", "Sarah Wallet"], prices: ["$850", "$575", "$720"] },
        { img: img38, title: "Effortless Parisian elegance meets timeless heritage luxury.", items: [], prices: [] },
    ];

    // 3x3 Grid Logic
    const initialClipPaths = [
        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)", "polygon(33% 0%, 33% 0%, 33% 0%, 33% 0%)", "polygon(66% 0%, 66% 0%, 66% 0%, 66% 0%)",
        "polygon(0% 33%, 0% 33%, 0% 33%, 0% 33%)", "polygon(33% 33%, 33% 33%, 33% 33%, 33% 33%)", "polygon(66% 33%, 66% 33%, 66% 33%, 66% 33%)",
        "polygon(0% 66%, 0% 66%, 0% 66%, 0% 66%)", "polygon(33% 66%, 33% 66%, 33% 66%, 33% 66%)", "polygon(66% 66%, 66% 66%, 66% 66%, 66% 66%)",
    ];

    const finalClipPaths = [
        "polygon(0% 0%, 33.5% 0%, 33.5% 33.5%, 0% 33.5%)", "polygon(33% 0%, 66.5% 0%, 66.5% 33.5%, 33% 33.5%)", "polygon(66% 0%, 100% 0%, 100% 33.5%, 66% 33.5%)",
        "polygon(0% 33%, 33.5% 33%, 33.5% 66.5%, 0% 66.5%)", "polygon(33% 33%, 66.5% 33%, 66.5% 66.5%, 33% 66.5%)", "polygon(66% 33%, 100% 33%, 100% 66.5%, 66% 66.5%)",
        "polygon(0% 66%, 33.5% 66%, 33.5% 100%, 0% 100%)", "polygon(33% 66%, 66.5% 66%, 66.5% 100%, 33% 100%)", "polygon(66% 66%, 100% 66%, 100% 100%, 66% 100%)",
    ];

    const animationOrder = [[".m-0"], [".m-1", ".m-3"], [".m-2", ".m-4", ".m-6"], [".m-5", ".m-7"], [".m-8"]];

const LouisApp = () => {
    // 2. STATE & REFS
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactPanelRef = useRef(null);

    // 3. LISTEN FOR EXTERNAL HTML TOGGLE
    useEffect(() => {
        const handleToggle = () => setIsContactOpen(true);
        window.addEventListener('toggleContact', handleToggle);
        return () => window.removeEventListener('toggleContact', handleToggle);
    }, []);

    // 4. LOUIS VUITTON REVEAL ANIMATION
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".row-wrapper").forEach((row) => {
            const masks = row.querySelectorAll(".mask");
            const sideList = row.querySelector(".side-list-container");

            masks.forEach((mask, index) => gsap.set(mask, { clipPath: initialClipPaths[index], webkitClipPath: initialClipPaths[index] }));
            gsap.set(sideList, { opacity: 0, y: 30 });

            const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 85%" } });
            animationOrder.forEach((targets, index) => {
                const elements = targets.map((cls) => row.querySelector(cls));
                tl.to(elements, {
                    clipPath: (i, el) => finalClipPaths[Array.from(masks).indexOf(el)],
                    webkitClipPath: (i, el) => finalClipPaths[Array.from(masks).indexOf(el)],
                    duration: 0.7,
                    ease: "power3.out"
                }, index * 0.12);
            });
            tl.to(sideList, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.2");
        });
    }, []);

    // 5. CONTACT PANEL SLIDE-OUT
    useGSAP(() => {
        gsap.to(contactPanelRef.current, {
            x: isContactOpen ? 0 : "100%",
            autoAlpha: isContactOpen ? 1 : 0,
            duration: 0.8,
            ease: "expo.inOut"
        });
    }, [isContactOpen]);

    const inputStyle = { background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: '#fff', padding: '12px 0', width: '100%', outline: 'none', marginBottom: '20px', fontSize: '13px' };

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            <div style={{ backgroundColor: '#000000', minHeight: '100vh', paddingBottom: '300px', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
                
                {projectData.map((project, i) => (
                    <div key={i} className="row-wrapper" style={{ 
                        width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '400px', marginTop: i === 0 ? '150px' : '0' 
                    }}>
                        <div style={{ width: '100%', maxWidth: '1100px', padding: '0 20px' }}>
                            <div className="img-container" style={{ position: 'relative', width: '100%', height: '700px', overflow: 'hidden', marginBottom: '40px' }}>
                                {[...Array(9)].map((_, j) => (
                                    <div key={j} className={`mask m-${j}`} style={{
                                        position:'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        backgroundImage: `url("${project.img}")`, backgroundSize: 'cover', backgroundPosition: 'center'
                                    }}></div>
                                ))}
                            </div>
                            <div className="side-list-container" style={{ width: '100%' }}>
                                <h3 style={{ color: '#fff', fontSize: '42px', marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '15px', textTransform: 'uppercase' }}>
                                    {project.title}
                                </h3>
                                {project.items.length > 0 && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px', fontSize: '20px' }}>
                                        <div style={{ flex: 2, color: '#fff' }}>{project.items.map((item, idx) => <p key={idx} style={{ margin: '12px 0' }}>{item}</p>)}</div>
                                        <div style={{ flex: 1, textAlign: 'right', color: '#fff' }}>{project.prices.map((price, idx) => <p key={idx} style={{ margin: '12px 0' }}>{price}</p>)}</div>
                                    </div>
                                )}
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

// Render Logic
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<LouisApp />);
}

export default LouisApp;
