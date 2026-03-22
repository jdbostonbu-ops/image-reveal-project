
import React, { useState, useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import ReactDOM from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";




// 1. IMAGE IMPORTS
import img96 from "./img96.jpg"; import img97 from "./img97.jpg"; import img98 from "./img98.jpg";
import img99 from "./img99.jpg"; import img100 from "./img100.jpg"; import img101 from "./img101.jpg";
import img102 from "./img102.jpg"; import img103 from "./img103.jpg"; import img104 from "./img104.jpg";
import img105 from "./img105.jpg"; import img106 from "./img106.jpg"; import img107 from "./img107.jpg";
import img108 from "./img108.jpg"; import img109 from "./img109.jpg"; import img110 from "./img110.jpg";
import img111 from "./img111.jpg"; import img112 from "./img112.jpg"; import img113 from "./img113.jpg";
import img114 from "./img114.jpg";



    
const projectData = [
    { img: img96, title: "Andiamo Heritage", items: ["Large Andiamo with Handle", "Medium Andiamo"], prices: ["$8,000", "$5,100"] },
    { img: img97, title: "The Andiamo Signature", items: ["Small Andiamo", "Andiamo Clutch"], prices: ["$4,100", "$2,650"] },
    { img: img98, title: "Andiamo Long Collection & Bottega Clutches", items: ["Andiamo Long Shoulder Bag", "Small Andiamo Long", "Bottega Veneta Women's Intrecciato Lambskin Clutch", "Bottega Veneta The Pouch Clutch", "Bottega Veneta Women's Intrecciato Lambskin Clutch", "BOTTEGA VENETA Lauren 1980 Intrecciato Lambskin Clutch"], prices: ["$4,500", "$3,900", "$3,600", "$906.99", "$3,700", "$3,800"] },
    { img: img99, title: "Intrecciato Classics", items: ["Small Cabat", "Mini Wallace", "Bottega Veneta Sardine Mini Leather Shoulder Bag", "BOTTEGA VENETA Mini Hop Shoulder Bag"], prices: ["$4,900", "$2,200", "$3,600", "$3,400"] },
    { img: img100, title: "Bottega Fragrance", items: ["Parco Palladiano XV 100ml", "Illusione for Her 75ml", "Knot Eau de Parfum 75ml"], prices: ["$330", "$165", "$175"] },
    { img: img101, title: "Bottega Veneta pumps", items: ["Knot glossed-leather pumps", "Sofia intrecciato leather", "Canalazzo intrecciato leather pumps", "Canalazzo striped intrecciato leather pumps"], prices: ["$1,990", "$1,890", "$2,600", "$3,900"] },
    { img: img102, title: "Bottega Joaillerie", items: ["Drop Earrings (Small)", "Fin Ring in Silver"], prices: ["$820", "$650"] },
    { img: img103, title: "Ready-to-Wear Essentials", items: ["Leather Trench Coat", "Oversized Wool Sweater"], prices: ["$9,800", "$1,450"] },
    { img: img104, title: "Footwear Icons", items: ["Puddle Boots", "Atomic Pump", "Haddock Boat Shoe", "Lug Boot", "Bee Knee-High Boot"], prices: ["$650", "$1,100", "$950", "$1,450", "$1,650"] },
    { img: img105, title: "When your own initials are enough.", items: [], prices: [] },
    { img: img106, title: "Sandals & Mules", items: ["Jack Flat Sandal", "Stretch Mule", "Ginger Sandal", "Punta Mule"], prices: ["$850", "$1,050", "$950", "$1,150"] },
    { img: img107, title: "Travel & Messenger", items: ["Intrecciato Duffel Bag", "Large Hop Bag", "Cassette Messenger", "Small Intrecciato Backpack", "Jet Set Suitcase", "Belt Bag"], prices: ["$5,200", "$4,400", "$2,800", "$3,500", "$6,500", "$1,950"] },
    { img: img108, title: "Simplicity is the ultimate sophistication.", items: [], prices: [] },
    { img: img109, title: "The Knot & Kalimero", items: ["Knot Minaudiere", "Mini Kalimero Bucket", "Medium Kalimero", "Knot On Strap", "Candy Kalimero"], prices: ["$3,800", "$3,500", "$7,500", "$2,100", "$2,800"] },
    { img: img110, title: "Signature Belts", items: ["Intrecciato Wide Belt", "Horseshoe Slim Belt", "Double Knot Belt", "Triangle Buckle Belt", "Reversible Intrecciato"], prices: ["$950", "$550", "$680", "$590", "$720"] },
    { img: img111, title: "Craftsmanship is a journey, not a destination.", items: [], prices: [] },
    { img: img112, title: "Bottega Eyewear", items: ["Angle Rectangular Frames", "Cat-Eye Acetate", "Aviator Metal", "Square Oversized", "D-Frame Injection", "Men's Navigator", "Round Metal Opticals", "Classic Geometric"], prices: ["$440", "$480", "$520", "$490", "$410", "$550", "$420", "$450"] },
    { img: img113, title: "Small Leather Goods", items: ["Intrecciato Card Case", "Cassette Zipped Wallet", "Bi-fold Wallet", "Key Pouch", "Tri-fold Compact Wallet", "Long Flap Wallet"], prices: ["$390", "$750", "$580", "$450", "$650", "$920"] },
    { img: img114, title: "A new form of craft, rooted in the past but looking to the future.", items: [], prices: [] }
];



gsap.registerPlugin(ScrollTrigger);

const BottegaApp = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactPanelRef = useRef(null);

    // 1. LISTEN FOR YOUR HTML LINK EVENT
    useEffect(() => {
        const handleToggle = () => setIsContactOpen(true);
        window.addEventListener('toggleContact', handleToggle);
        return () => window.removeEventListener('toggleContact', handleToggle);
    }, []);

    // 2. LUXURY DISSOLVE
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".row-wrapper").forEach((row, index) => {
            const tiles = row.querySelectorAll(".grid-tile");
            gsap.set(tiles, { opacity: 1, scale: 1.01 });

            gsap.to(tiles, {
                opacity: 0, scale: 0.85, duration: 1.5, ease: "power2.inOut",
                stagger: { grid: [10, 10], from: "random", amount: 1.8 },
                scrollTrigger: {
                    trigger: row,
                    start: index === 0 ? "top 95%" : "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    }, []);

    // 3. FIXED SLIDE-OUT (Prevents peeking on load)
    useGSAP(() => {
        gsap.to(contactPanelRef.current, {
            transform: 'translateX(calc(100% + 50px))',
            autoAlpha: isContactOpen ? 1 : 0, // Handles visibility: hidden automatically
            duration: 0.8,
            ease: "expo.inOut"
        });
    }, [isContactOpen]);

    const inputStyle = { background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: '#fff', padding: '12px 0', width: '100%', outline: 'none', marginBottom: '20px', fontSize: '13px' };

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>
                
                {projectData.map((project, i) => (
                    <div key={i} className="row-wrapper" style={{ padding: '200px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '100%', maxWidth: '1100px' }}>
                            <div style={{ position: 'relative', height: '700px', display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gridTemplateRows: 'repeat(10, 1fr)', backgroundColor: '#050505' }}>
                                <img src={project.img} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                                {[...Array(100)].map((_, j) => (
                                    <div key={j} className="grid-tile" style={{ backgroundColor: '#000', zIndex: 2, position: 'relative' }} />
                                ))}
                            </div>
                            
                            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #1a1a1a', paddingTop: '25px' }}>
                                <div style={{ flex: 1 }}>
                                    <h2 style={{ fontSize: '32px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>{project.title}</h2>
                                    {project.items.map((item, idx) => <p key={idx} style={{ color: '#888', margin: '5px 0' }}>{item}</p>)}
                                </div>
                                <div style={{ textAlign: 'right', alignSelf: 'flex-end' }}>
                                    {project.prices.map((price, idx) => <p key={idx} style={{ color: '#fff', margin: '5px 0', fontWeight: 'bold' }}>{price}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* --- RIGHT SIDE SLIDE-OUT PANEL --- */}
                <div 
                    ref={contactPanelRef} 
                    style={{ 
                        position: 'fixed', top: 0, right: 0, width: '400px', height: '100vh', 
                        backgroundColor: '#0a0a0a', borderLeft: '1px solid #222', zIndex: 9999, 
                        transform: 'translateX(100%)', // Initial state: 100% off screen
                        visibility: 'hidden', // Fail-safe
                        padding: '80px 40px' 
                    }}
                >
                    {/* CLOSE TAB */}
                    <div 
                        onClick={() => setIsContactOpen(false)}
                        style={{ 
                            position: 'absolute', left: '-35px', top: '50%', transform: 'translateY(-50%)',
                            backgroundColor: '#111', color: '#fff', padding: '20px 8px', writingMode: 'vertical-rl',
                            cursor: 'pointer', border: '1px solid #222', borderRight: 'none', fontSize: '11px',
                            letterSpacing: '2px', textTransform: 'uppercase'
                        }}
                    >
                        CLOSE [✕]
                    </div>

                    {!isSubmitted ? (
                        <>
                            <h2 style={{ fontSize: '24px', letterSpacing: '4px', marginBottom: '40px' }}>Aurelia Atelier</h2>
                            <p style={{ color: '#666', fontSize: '10px' }}>ADDRESS</p>
                            <p style={{ fontSize: '14px', marginBottom: '20px' }}>123 Via Montenapoleone, New York, NY, 07086</p>
                            <p style={{ color: '#666', fontSize: '10px' }}>PHONE</p>
                            <p style={{ fontSize: '14px', marginBottom: '40px' }}>+1 860 234 5678</p>
                            
                            <hr style={{ borderColor: '#222', marginBottom: '40px' }} />
                            
                            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); setTimeout(() => { setIsSubmitted(false); setIsContactOpen(false); }, 3000); }}>
                                <input required placeholder="NAME" style={inputStyle} />
                                <input required type="email" placeholder="EMAIL" style={inputStyle} />
                                <textarea required placeholder="MESSAGE" rows="4" style={inputStyle} />
                                <button type="submit" style={{ background: '#fff', color: '#000', border: 'none', width: '100%', padding: '15px', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer', marginTop: '10px' }}>SEND</button>
                            </form>
                        </>
                    ) : (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                            <h2 style={{ letterSpacing: '4px' }}>GRAZIE</h2>
                            <p style={{ color: '#888', fontSize: '13px' }}>Your inquiry has been received.</p>
                        </div>
                    )}
                </div>

            </div>
        </ReactLenis>
    );
};


const inputStyle = { background: 'transparent', 
                     border: 'none', 
                     borderBottom: '1px solid #333', 
                     color: '#fff', 
                     padding: '10px 0', 
                     outline: 'none' };

export default BottegaApp;

// Render Logic (Ensure this only exists in ONE file)
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<BottegaApp />);
}


