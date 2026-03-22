import React, { useState, useRef, useEffect } from 'react';
import { ReactLenis } from "lenis/react";
import ReactDOM from "react-dom/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


import img263 from "./img263.jpg"; import img264 from "./img264.jpg"; import img265 from "./img265.jpg";
import img266 from "./img266.jpg"; import img267 from "./img267.jpg"; import img268 from "./img268.jpg";
import img269 from "./img269.jpg"; import img270 from "./img270.jpg"; import img271 from "./img271.jpg";
import img272 from "./img272.jpg"; import img273 from "./img273.jpg"; import img274 from "./img274.jpg";
import img275 from "./img275.jpg"; import img276 from "./img276.jpg"; import img277 from "./img277.jpg";
import img278 from "./img278.jpg"; 



gsap.registerPlugin(ScrollTrigger);

const RevealImage = ({ src, className }) => (
    <div className={`img-wrapper ${className}`} style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
        <img src={src} className="main-image" style={{ 
            width: '100%', height: '100%', objectFit: 'cover', 
            opacity: 0, filter: 'blur(20px)', transform: 'scale(1.1)' 
        }} alt="Fashion" />
    </div>
);

const HomeApp = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const contactPanelRef = useRef(null);
    const isFirstRun = useRef(true);

    // 1. EVENT LISTENERS
    useEffect(() => {
        const handleToggle = () => { setIsSubmitted(false); setIsContactOpen(true); };
        window.addEventListener('toggleContact', handleToggle);
        return () => window.removeEventListener('toggleContact', handleToggle);
    }, []);

    // 2. LUXURIOUS REVEAL ANIMATIONS
    useGSAP(() => {
        // Hero Title Dissolve
        gsap.fromTo(".hero-title", 
            { opacity: 0, filter: 'blur(15px)', y: 20 },
            { opacity: 1, filter: 'blur(0px)', y: 0, duration: 2.5, ease: "power2.out", delay: 0.5 }
        );

        // Images Dissolve
        const images = gsap.utils.toArray(".main-image");
        images.forEach((img) => {
            gsap.to(img, {
                scrollTrigger: { trigger: img, start: "top 85%", toggleActions: "play none none reverse" },
                opacity: 1, filter: 'blur(0px)', scale: 1, duration: 2.5, ease: "power2.inOut"
            });
        });
    }, []);

    // 3. CONTACT PANEL ANIMATION
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

    const inputStyle = { background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: '#fff', padding: '12px 0', width: '100%', outline: 'none', marginBottom: '20px' };

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
                
                {/* HERO */}
                <section className="hero">
                    <h1 className="hero-title" style={{ marginTop: '3em', textAlign: 'center', textTransform: 'uppercase', fontSize: '9.75vw', fontWeight: 'bold', fontFamily: 'RobotoBold' }}>Aurelia Atelier</h1>
                </section>

                {/* CENTERED INFO PARAGRAPHS */}
                <section className="info" style={{ padding: '60px 0', width: '100%' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p style={{ fontSize: '25px', fontFamily: 'RobotoThin', textAlign: 'left', margin: 0, lineHeight: '1.6' }}>
                            Welcome to Aurelia Atelier, where the world’s most prestigious heritage meets a curated vision of the future. We believe that true luxury is not just a label, but an enduring investment in the artistry of self-expression. By bringing together the definitive icons of Fendi, Chanel, and Burberry under one roof, we offer a sanctuary for the discerning individual who demands nothing less than the absolute pinnacle of global craftsmanship.
                        </p><br></br>
                        <p style={{ fontSize: '25px', fontFamily: 'RobotoThin', textAlign: 'left', margin: 0, lineHeight: '1.6' }}>
                            Stepping into this collection provides an instant psychological shift, granting the poise to command any room with effortless ease. At Aurelia Atelier, the focus is not merely on garments, but on curating a gallery of personal expression that transforms daily life into a series of extraordinary moments. Every piece is hand-selected for its ability to bridge the gap between the present self and the legacy one intends to leave behind. Every piece is hand-selected for its ability to bridge the gap between the present self and the legacy one intends to leave behind. <span style={{ fontStyle: 'italic' }}>To preserve this intimacy, the collection is available exclusively through private in-person discovery at our Atelier.</span>
                        </p>
                    </div>
                </section>

                {/* IMAGE LAYOUTS */}
                <div className="hero-imgs" style={{ marginTop: '10em' }}>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '2em', padding: '0 80px' }}>
                        <div className="img" style={{ flex: 1, maxWidth: '600px', aspectRatio: '4/5' }}><RevealImage src={img263} /></div>
                        <div className="img" style={{ flex: 1, maxWidth: '600px', aspectRatio: '4/5' }}><RevealImage src={img264} /></div>
                    </div>
                </div>

                <section className="clients" style={{ display: 'flex', padding: '100px 80px', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', maxWidth: '1200px', width: '100%' }}>
                        <div style={{ flex: '0.4' }}><p style={{ fontSize: '35px', fontFamily: 'RobotoMedium' }}>Selected Brands</p>
                        <p style={{ fontSize: '18px', fontFamily: 'RobotoThin', textAlign: 'left', lineHeight: '1.6' }}>
                            Every piece is hand-selected for its ability to bridge the gap between the present self and the legacy one intends to leave behind.
                        </p>
                        <p style={{ 
                            fontSize: '17px', 
                            letterSpacing: '4px', 
                            textTransform: 'uppercase', 
                            marginTop: '20px', 
                            color: '#888',
                            fontFamily: 'RobotoMedium' 
                        }}>
                            Exclusively available for in-person acquisition
                        </p></div>
                        <div style={{ flex: 1, display: 'flex', gap: '80px' }}>
                            <div className="client-list" style={{ fontSize: '22px', fontFamily: 'RobotoRegular', lineHeight: '2',  marginLeft: '110px' }}><p>Bottega Veneta Andiamo</p><p>Burberry</p><p>Cartier</p><p>Chanel</p></div>
                            <div className="client-list" style={{ fontSize: '22px', fontFamily: 'RobotoRegular', lineHeight: '2', marginLeft: '30px' }}><p>Coach</p><p>Dior</p><p>Fendi</p><p>Gucci</p></div>
                            <div className="client-list" style={{ fontSize: '22px', fontFamily: 'RobotoRegular', lineHeight: '2', marginLeft: '30px' }}><p>Kate Spade</p><p>Louis Vuitton</p><p>Prada</p></div>
                        </div>
                    </div>
                </section>

                <section className="centered-single" style={{ display: 'flex', justifyContent: 'center', padding: '0 80px', marginBottom: '10em' }}>
                    <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '4/5' }}><RevealImage src={img274} /></div>
                </section>

                {/* PRODUCT ROWS */}
                <section className="products" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4em', padding: '0 80px' }}>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '2em', width: '100%', maxWidth: '1200px' }}>
                        <div className="img" style={{ flex: 1, aspectRatio: '4/5' }}><RevealImage src={img266} /></div>
                        <div className="img" style={{ flex: 1, aspectRatio: '4/5' }}><RevealImage src={img267} /></div>
                    </div>

                    <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '2em', width: '100%', maxWidth: '1200px' }}>
                        <div className="img" style={{ flex: 1 }}><RevealImage src={img268} className="img-6" /></div>
                        <div className="img" style={{ flex: 1 }}><RevealImage src={img269} className="img-7" /></div>
                        <div className="img" style={{ flex: 1 }}><RevealImage src={img271} className="img-9" /></div>
                    </div>

                    <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '2em', width: '100%', maxWidth: '1200px' }}>
                        <div className="img" style={{ flex: 1, aspectRatio: '4/5' }}><RevealImage src={img273} /></div>
                    </div>
            
                    <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '2em', width: '100%', maxWidth: '1200px' }}>
                        <div className="img" style={{ flex: 1, aspectRatio: '4/5' }}><RevealImage src={img272} /></div>
                        <div className="img" style={{ flex: 1, aspectRatio: '4/5' }}><RevealImage src={img270} /></div>
                        <div className="img" style={{ flex: 1, aspectRatio: '4/5' }}><RevealImage src={img275} /></div>
                    </div>

                    <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '2em', width: '100%', maxWidth: '1200px' }}>
                        <div className="img" style={{ flex: 1, aspectRatio: '4/5' }}><RevealImage src={img276} /></div>
                        <div className="img" style={{ width: 'calc(50% - 1em)', aspectRatio: '4/5' }}><RevealImage src={img278} /></div>
                        <div className="img" style={{ flex: 1, aspectRatio: '4/5' }}><RevealImage src={img277} /></div>
                    </div>
                   
                </section>

                <footer style={{ padding: '150px 0', textAlign: 'center' }}>
                    <p style={{ fontSize: '60px', fontFamily: 'RobotoMedium' }}>Where heritage meets the future of style.</p>
                </footer>

                {/* CONTACT PANEL */}
                <div ref={contactPanelRef} style={{ 
                    position: 'fixed', 
                    top: 0, 
                    right: 0, 
                    width: '400px', 
                    height: '100vh', 
                    backgroundColor: '#0a0a0a', 
                    zIndex: 10000, 
                    padding: '80px 40px', 
                    borderLeft: '1px solid #222', 
                    transform: 'translateX(100%)', 
                    visibility: 'hidden' }}>

                    <div onClick={() => setIsContactOpen(false)} style={{ 
                        position: 'absolute', 
                        right: '100%', 
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        backgroundColor: '#0a0a0a', 
                        border: '1px solid #222', 
                        borderRight: 'none', 
                        padding: '20px 8px', 
                        cursor: 'pointer', 
                        writingMode: 'vertical-rl', 
                        fontSize: '12px', 
                        letterSpacing: '3px', 
                        color: '#fff', 
                        textTransform: 'uppercase' }}>CLOSE [✕]</div>

                    <div style={{ marginBottom: '60px' }}>
                        <h2 style={{ 
                            fontSize: '24px', 
                            letterSpacing: '4px', 
                            marginBottom: '40px', 
                            fontFamily: 'RobotoBold' }}>AURELIA ATELIER</h2>

                        <p style={{ 
                            color: '#666', 
                            fontSize: '11px', 
                            marginBottom: '5px' }}>ADDRESS</p>

                        <p style={{ 
                            fontSize: '14px', 
                            marginBottom: '25px', 
                            fontFamily: 'RobotoThin' }}>123 Via Montenapoleone, New York, NY, 07086</p>

                        <p style={{ 
                            color: '#666', 
                            fontSize: '11px', 
                            marginBottom: '5px' }}>PHONE</p>

                        <p style={{ 
                            fontSize: '14px', 
                            marginBottom: '40px', 
                            fontFamily: 'RobotoThin' }}>+1 860 234 5678</p>

                        <hr style={{ 
                            borderColor: '#222', 
                            borderTop: 'none' }} />
                    </div>
                    {!isSubmitted ? (
                        <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                            <input placeholder="NAME" required style={inputStyle} />
                            <input placeholder="EMAIL" type="email" required style={inputStyle} />
                            <textarea placeholder="MESSAGE" required style={{ ...inputStyle, height: '100px' }} />
                            <button type="submit" style={{ background: '#fff', color: '#000', border: 'none', padding: '15px', width: '100%', fontWeight: 'bold', cursor: 'pointer' }}>SEND</button>
                        </form>

                     ) : (
                        <div style={{ 
                            flex: 1, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'center', 
                            textAlign: 'center',
                            paddingBottom: '80px' }}>
                            <h2 style={{ letterSpacing: '4px' }}>GRAZIE</h2>
                            <p style={{ color: '#888' }}>Your inquiry has been received.</p>
                        </div>
                     )}
                </div>
            </div>
        </ReactLenis>
    );
};

export default HomeApp;

// Render Logic (Ensure this only exists in ONE file)
const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<HomeApp />);
}

