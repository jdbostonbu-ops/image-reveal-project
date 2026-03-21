import React, { useState, useRef, useEffect } from 'react';
import { ReactLenis } from "lenis/react";
import ReactDOM from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import img191 from "./img191.jpg";
import img192 from "./img192.jpg";
import img193 from "./img193.jpg";
import img194 from "./img194.jpg";
import img195 from "./img195.jpg";
import img196 from "./img196.jpg";
import img197 from "./img197.jpg";
import img198 from "./img198.jpg";
import img199 from "./img199.jpg";
import img200 from "./img200.jpg";
import img201 from "./img201.jpg";
import img202 from "./img202.jpg";
import img203 from "./img203.jpg";
import img204 from "./img204.jpg";
import img205 from "./img205.jpg";
import img206 from "./img206.jpg";
import img207 from "./img207.jpg";
import img208 from "./img208.jpg";
import img209 from "./img209.jpg";



const projectData = [
    { img: img191, title: "Iconic Baguette Series", 
      items: ["Baguette Large in FF Canvas", "Baguette Chain Midi", "Baguette Pouch with Handle", "Baguette Embroidery", "Baguette Mini with Fringe", "Sequined Baguette 1997"], 
      prices: ["$3,750", "$3,290", "$2,150", "$4,300", "$2,850", "$4,900"] 
    },
    { img: img192, title: "The Peekaboo Collection", 
      items: ["Peekaboo ISeeU Medium", "Peekaboo ISeeU Small", "Peekaboo Cut in Python", "Peekaboo X-Lite", "Peekaboo Petite with Crystals", "Peekaboo Soft Leather Tote"], 
      prices: ["$5,400", "$4,600", "$6,800", "$4,200", "$5,900", "$5,200"] 
    },
    { img: img193, title: "Fendi First & Shoppers", 
      items: ["Fendi First Medium Clutch", "Fendi First Small in Nappa", "Fendi Sunshine Medium Tote", "Fendi Sunshine Shopper Mini", "Fendi First Sight Bag", "FF Monogram Canvas Tote"], 
      prices: ["$3,950", "$3,100", "$3,100", "$1,750", "$2,850", "$2,450"] 
    },
    { img: img194, title: "Mon Tresor & Origami", 
      items: ["Mon Tresor Bucket Bag Small", "Fendi Origami Medium", "Mon Tresor FF Jacquard Mini", "Fendi Origami Mini", "Mon Tresor with Fur Trim"], 
      prices: ["$1,950", "$2,950", "$1,850", "$2,100", "$2,600"] 
    },
    { img: img195, title: "Fendi Signature Footwear", 
      items: ["Fendi First Leather Slingbacks", "Colibrì Lite Mesh Pumps", "Fendi Match Sneakers", "Baguette Heel Sandals", "Fendi Domino Low-Tops", "Zucca Print Biker Boots"], 
      prices: ["$1,350", "$1,150", "$930", "$1,250", "$795", "$1,450"] 
    },
    { img: img196, title: "Fendi Fragrance & Beauty", 
      items: ["Fendi Furiosa Eau de Parfum", "Fan di Fendi 100ml", "Fendi L'Acquarossa Parfum", "Fendi Theorema", "Fendi Palazzo"], 
      prices: ["$145", "$130", "$155", "$180", "$140"] 
    },
    { img: img197, title: "Ready-To-Wear Icons", 
      items: ["FF Monogram Cashmere Sweater", "Silk FF Karligraphy Shirt", "Shearling FF Jacket", "Reversible Mink Fur Coat", "Nappa Leather Pencil Skirt"], 
      prices: ["$1,850", "$1,450", "$6,500", "$18,000", "$3,200"] 
    },
    { img: img198, title: "Fendi is my Italian version of creativity.", items: [], prices: [] },
    { img: img199, title: "Scarves & Silk Accents", 
      items: ["FF Cashmere Scarf", "Silk Karligraphy Wrap", "Fox Fur Stole", "Baguette Silk Twilly", "Logo Print Poncho", "Personalized Wool Wrap"], 
      prices: ["$850", "$450", "$2,800", "$220", "$1,350", "$950"] 
    },
    { img: img200, title: "Travel & Lifestyle", 
      items: ["FF Cabin Suitcase", "Zucca Canvas Duffel Bag", "Fendi Passport Cover", "FF Nylon Backpack", "Logo Luggage Tag", "Fendi Travel Set in Silk"], 
      prices: ["$3,800", "$2,450", "$420", "$2,100", "$250", "$850"] 
    },
    { img: img201, title: "The Fendi logo is more than just a symbol; it's a family history.", items: [], prices: [] },
    { img: img202, title: "Small Leather Goods", 
      items: ["Baguette Continental Wallet", "FF Micro Tri-fold Wallet", "Peekaboo Card Case", "Fendi First Coin Purse", "Baguette Key Ring", "O’Lock Zip Wallet"], 
      prices: ["$850", "$590", "$450", "$650", "$420", "$790"] 
    },
    { img: img203, title: "Fendi Eyewear", 
      items: ["Fendi First Square Sunglasses", "Baguette Metal Aviators", "FF Monogram Cat-Eye", "O'Lock Oval Frames", "Fendi Sky Opticals"], 
      prices: ["$520", "$480", "$450", "$410", "$390"] 
    },
    { img: img204, title: "Elegance is the only beauty that never fades.", items: [], prices: [] },
    { img: img205, title: "Fendi Casa & Pet Essentials", 
      items: ["FF Logo Dog Leash", "Zucca Canvas Pet Carrier", "Fendi Casa Silk Pillow", "FF Motif Dog Collar", "Cashmere Pet Blanket", "Fendi Casa Velvet Throw"], 
      prices: ["$450", "$2,600", "$550", "$380", "$1,150", "$1,450"] 
    },
    { img: img206, title: "O’Lock & Fashion Jewelry", 
      items: ["O’Lock Bracelet in Gold Finish", "F Is Fendi Stud Earrings", "FF Monogram Ring", "Baguette Chain Necklace", "O'Lock Hair Clip"], 
      prices: ["$590", "$350", "$320", "$750", "$420"] 
    },
    { img: img207, title: "Kids & Baby Monster", 
      items: ["Monster Eyes Leather Booties", "Zucca Print Changing Bag", "Kids FF Down Jacket", "Monster Eyes Cotton Tee", "Baby FF Gift Set"], 
      prices: ["$380", "$1,550", "$1,100", "$220", "$450"] 
    },
    { img: img208, title: "Belts & Hardware Accents", 
      items: ["FF Baguette Reversible Belt", "F Is Fendi Slim Belt", "O’Lock Buckle Belt", "Zucca Fabric Belt", "Baguette Chain Belt"], 
      prices: ["$620", "$490", "$550", "$450", "$850"] 
    },
    { img: img209, title: "Creativity is the engine of the Roman soul.", items: [], prices: [] }
];



gsap.registerPlugin(ScrollTrigger);

const FendiApp = () => {
    // 1. STATE & REFS
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactPanelRef = useRef(null);

    const uiColor = "#F5F5F7"; 
    const fendiYellow = "#F9B100"; // ICONIC FENDI ROMA YELLOW

    // 2. LISTEN FOR EXTERNAL HTML TOGGLE ('toggleContact')
    useEffect(() => {
        const handleToggle = () => setIsContactOpen(true);
        window.addEventListener('toggleContact', handleToggle);
        return () => window.removeEventListener('toggleContact', handleToggle);
    }, []);

    // 3. FENDI RIPPLE & CONTENT ANIMATION
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const rows = gsap.utils.toArray(".row-wrapper");

        rows.forEach((row) => {
            const cells = row.querySelectorAll(".grid-cell");
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

            // Image Zoom
            tl.fromTo(mainImg, 
                { scale: 1.2, filter: "brightness(0.5)" },
                { scale: 1, filter: "brightness(1)", duration: 1.6, ease: "power2.out" }, 
                0
            )
            // Ripple Reveal from Center
            .to(cells, {
                opacity: 0,
                scale: 0,
                duration: 0.8,
                stagger: {
                    amount: 1.2,
                    grid: [10, 10],
                    from: "center",
                    ease: "power2.in"
                },
                ease: "expo.inOut"
            }, 0)
            
            // Liquid Split Content
            .to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.6")
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
                    <div key={i} className="row-wrapper" style={{ marginBottom: '400px', paddingTop: i === 0 ? '150px' : '0' }}>
                        <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                            
                            <div className="img-container" style={{ position: 'relative', height: '75vh', overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
                                <img src={project.img} className="main-image" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={project.title} />
                                
                                <div className="grid-overlay" style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gridTemplateRows: 'repeat(10, 1fr)',
                                    zIndex: 2
                                }}>
                                    {[...Array(100)].map((_, j) => (
                                        <div key={j} className="grid-cell" style={{
                                            backgroundColor: fendiYellow,
                                            width: '101%', height: '101%',
                                            border: '0.5px solid rgba(0,0,0,0.1)'
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

export default FendiApp;

// Render Logic (Ensure this only exists in ONE file)
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<FendiApp />);
}