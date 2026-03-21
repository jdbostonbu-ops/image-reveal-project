import React, { useState, useRef, useEffect } from 'react';
import { ReactLenis } from "lenis/react";
import ReactDOM from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";




// 1. IMAGE IMPORTS
import img58 from "./img58.jpg"; import img59 from "./img59.jpg"; import img60 from "./img60.jpg";
import img61 from "./img61.jpg"; import img62 from "./img62.jpg"; import img63 from "./img63.jpg";
import img64 from "./img64.jpg"; import img65 from "./img65.jpg"; import img66 from "./img66.jpg";
import img67 from "./img67.jpg"; import img68 from "./img68.jpg"; import img69 from "./img69.jpg";
import img70 from "./img70.jpg"; import img71 from "./img71.jpg"; import img72 from "./img72.jpg";
import img73 from "./img73.jpg"; import img74 from "./img74.jpg"; import img75 from "./img75.jpg";
import img76 from "./img76.jpg";



    const projectData = [
        { img: img58, title: "Lady Dior Heritage", items: ["Lady Dior My ABCDior Bag", "Lady D-Joy Bag"], prices: ["$6,000", "$5,100"] },
        { img: img59, title: "The Saddle Icon", items: ["Saddle Bag with Strap", "Saddle Pouch"], prices: ["$4,400", "$2,450"] },
        { img: img60, title: "Dior Book Tote", items: ["Medium Dior Book Tote", "Small Dior Book Tote"], prices: ["$3,350", "$3,100"] },
        { img: img61, title: "30 Montaigne Series", items: ["30 Montaigne Avenue Bag", "30 Montaigne Box Bag"], prices: ["$3,700", "$3,500"] },
        { img: img62, title: "Dior Fragrance", items: ["Miss Dior Eau de Parfum 100ml", "Sauvage Elixir 60ml", "Dior Poison Girl Eau de Parfum 100ml"], prices: ["$175", "$180", "$180"] },
        { img: img63, title: "B23 Sneaker Line", items: ["B23 High-Top Sneaker", "B23 Low-Top Sneaker"], prices: ["$1,200", "$1,100"] },
        { img: img64, title: "Dior Joaillerie", items: ["Bois de Rose Ring", "Rose des Vents Necklace"], prices: ["$2,350", "$10,500"] },
        { img: img65, title: "Dior 8 Collection", items: ["Dior 8 Cargo Pants", "Dior 8 Hooded Cardigan"], prices: ["$2,100", "$2,550"] },
        { img: img66, title: "B27 Sneakers", items: ["B27 Low-Top Sneaker", "B27 High-Top Sneaker", "B20 Line High Performance Tech Sneaker", "B33 Line with Dior Gravity Leather", "B57 Line classic basketball silhouette"], prices: ["$1,100", "$1,250", "$1,250", "$1,185", "$1,200"] },
        { img: img67, title: "In the world of fashion, the name Dior is a myth.", items: [], prices: [] },
        { img: img68, title: "D-Connect Series", items: ["D-Connect Sneaker", "D-Connect Sandal", "Dior Women's Dioract Lambskin Sandal", "Dior Women's Dioract Platform Lambskin Sandal"], prices: ["$1,050", "$975", "$1,200", "$1,350"] },
        { img: img69, title: "Women & Men's Saddle Collection", items: ["Dior Lingot 22 Bag", "Saddle Messenger Bag", "Dior Men's CD Icon Zipped Messenger Bag", "Dior Men's Saddle Messenger Bag", "Dior Men's Safari Bag in Dior Oblique Jacquard", "Dior Men's Rider 2.0 Zipped Messenger Bag"], prices: ["$2,350", "$2,900", "$2,900", "$2,900", "$2,600", "$2,600"] },
        { img: img70, title: "Elegance must be the right combination of distinction and naturalness.", items: [], prices: [] },
        { img: img71, title: "CD Signature & Hobo Collection", items: ["CD Signature Hobo Bag", "CD Signature Oval Bag", "Dior Women's CD Signature Hobo Mini Bag in Dior Oblique Jacquard", "Dior Women's Diorstar Hobo Bag in Dior Oblique Jacquard", "Dior Miss Caro Hobo Mini Bag in Lambskin"], prices: ["$3,300", "$2,100", "$1,895","$2,500", "$2,750" ] },
        { img: img72, title: "Dior's Saddle and 30 Montaigne Belts", items: ["Dior Women's Reversible Saddle Calfskin Belt", "Dior Women's Saddle Belt in Dior Oblique Jacquard", "Dior Women's Saddle Calfskin Belt","30 Montaigne Belt", "Saddle Belt"], prices: ["$740", "$680","$680", "$710", "$650"] },
        { img: img73, title: "A woman's perfume tells more about her than her handwriting.", items: [], prices: [] },
        { img: img74, title: "Dior Eyewear", items: ["DiorMidnight S1I", "DiorClub M1U", "Dior 30MONTAIGNE S10F Square Ladies Sunglasses", "Dior Women's DiorSignature B1U Butterfly Sunglasses", "Christian Dior Women's B2I Butterfly Sunglasses", "Dior Clover S2U Gradient Square Sunglasses", "Dior DiorB23 S1I DM40052I Sunglasses Men", "DIOR - Diorblacksuit Ri Black Pantos Sunglasses Men"], prices: ["$450", "$710", "$580", "$590", "$500", "630", "$480", "$490"] },
        { img: img75, title: "Small Leather Goods", items: ["Lady Dior 5-Gusset Card Holder", "Saddle Lotus Wallet", "Women Dior Dior Freesia Card Holder", "Dior Women's Saddle Lotus Grained Calfskin Wallet", "Dior Lady Dior Bloom Card Holder in Cannage Lambskin", "Dior Women's Caro Dahlia Cannage Calfskin Wallet"], prices: ["$550", "$650", "$430", "$680", "$530", "$680"] },
        { img: img76, title: "Everything I know, see, or hear, every part of my life is transformed into dresses.", items: [], prices: [] },
    ];


  gsap.registerPlugin(ScrollTrigger);

const DiorApp = () => {
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

    // 3. DIOR IRIS REVEAL & CONTENT ANIMATION
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const rows = gsap.utils.toArray(".row-wrapper");

        rows.forEach((row) => {
            const mask = row.querySelector(".iris-mask");
            const content = row.querySelector(".side-list-container");

            if (mask) {
                gsap.fromTo(mask, 
                    { autoAlpha: 1, clipPath: "circle(0.1% at 50% 50%)", webkitClipPath: "circle(0.1% at 50% 50%)" },
                    {
                        clipPath: "circle(75% at 50% 50%)",
                        webkitClipPath: "circle(75% at 50% 50%)",
                        scrollTrigger: {
                            trigger: row,
                            start: "top 80%",
                            end: "bottom 20%",
                            scrub: 1
                        }
                    }
                );
            }

            if (content) {
                gsap.to(content, {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });
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
            <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'Roboto, sans-serif', overflowX: 'hidden' }}>
                
                {projectData.map((project, i) => (
                    <div key={i} className="row-wrapper" style={{ 
                        width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '300px', paddingTop: i === 0 ? '250px' : '0' 
                    }}>
                        <div style={{ width: '100%', maxWidth: '1100px', padding: '0 20px' }}>
                            <div className="img-container" style={{ position: 'relative', width: '100%', height: 'clamp(350px, 65vh, 750px)', overflow: 'hidden', marginBottom: '40px' }}>
                                <div className="iris-mask" style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    backgroundImage: `url("${project.img}")`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center',
                                    clipPath: 'circle(0% at 50% 50%)', 
                                    webkitClipPath: 'circle(0% at 50% 50%)'
                                }}></div>
                            </div>

                            <div className="side-list-container" style={{ opacity: 0, transform: 'translateY(30px)' }}>
                                <h3 style={{ fontSize: 'clamp(28px, 5vw, 42px)', borderBottom: '1px solid #333', paddingBottom: '15px', textTransform: 'uppercase' }}>
                                    {project.title}
                                </h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                                    <div>
                                        {project.items.map((item, idx) => (
                                            <p key={idx} style={{ fontSize: '18px', color: '#ccc' }}>{item}</p>
                                        ))}
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        {project.prices.map((price, idx) => (
                                            <p key={idx} style={{ fontSize: '18px', color: '#888' }}>{price}</p>
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

export default DiorApp;

// Render Logic (Ensure this only exists in ONE file)
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<DiorApp />);
}