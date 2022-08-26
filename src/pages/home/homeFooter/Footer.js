import React from 'react';
import s from "./footer.module.css"

const Footer = () => {
    return (
        <div>
            <div className={s.container}>
                <section className={s.infoChurch}>
                    <div className={s.infoCard}>
                        <h3>
                            ABOUT THE CHURCH
                        </h3>
                        <span>For the word of God is living and active.
                            Sharper than any double-edged sword, it penetrates even to dividing soul and spirit,
                            joints and marrow; it judges the thoughts and attitudes.
                        </span>
                    </div>
                    <div className={s.infoCard}>
                        <h3>
                            OUR ADDRESS
                        </h3>
                        <span>For the word of God is living and active.
                             the thoughts and attitudes.
                        </span>
                    </div>
                    <div className={s.infoCard}>
                        <h3>
                            CONNECT
                        </h3>
                        <span>For the word of God is living and active.
                            Sharper than any double-edged sword, it penetrates even to dividing soul and spirit,
                            joints and marrow; it judges the thoughts and attitudes.
                        </span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Footer;