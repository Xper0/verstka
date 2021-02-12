
import * as React from 'react';
import "./footer.css";
import "../font-awesome-4.7.0/css/font-awesome.min.css";


export default function Footer() {
    return (
        <div className="footer-conteiner">
            <div className="footer-conteiner-content">
                <h3 className="footer-conteiner-h3">© Copyright 2016 Bla Bla Studio  |  One Page Flat Template</h3>
            </div>
            <div className="footer-conteiner-content">
                <button className="footer-conteiner-btn">
                    <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </button>
            </div>


        </div>
    );
};