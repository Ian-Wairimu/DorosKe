import React from 'react'
import "./styles/footer.css";

const LegalFooter = () => {
    return(
        <>
            <section className="ft-legal">
                <ul className="ft-legal-list">
                    <li><a href="#" className="legal">Terms &amp; Conditions</a></li>
                    <li><a href="#" className="legal">Privacy Policy</a></li>
                    <li>&copy; 2021 Copyright DorosKe.</li>
                </ul>
            </section>
        </>
    );
}
export default LegalFooter;