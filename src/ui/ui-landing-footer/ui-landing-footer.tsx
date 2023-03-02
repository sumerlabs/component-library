import React, { FC } from "react";
import { Wrapper } from "./ui-landing-footer.styled";
import { UiLandingFooterProps } from "./types";
import { WEB_ASSETS } from "~/constants";
import * as styles from './ui-landing-footer.module.scss';
 
const UiLandingFooter: FC<UiLandingFooterProps> = ({
  className,
}) => {

  const socials = [
    {
      icon: 'facebook',
      link: 'https://www.facebook.com/sumer.labs',
    },
    {
      icon: 'instagram',
      link: 'https://www.instagram.com/sumer.latam/',
    },
    {
      icon: 'youtube',
      link: 'https://www.youtube.com/channel/UC5w8VzETzelhwZn8RXWrFEw',
    },
    {
      icon: 'tiktok',
      link: 'https://www.tiktok.com/@sumer.latam',
    },
    {
      icon: 'linked-in',
      link: 'https://www.linkedin.com/company/sumerlatam/',
    },
  ];

  return (
    <div className={`${styles.uiLandingFooter} ${className}`}>
      <a className={styles.logo} href="/">
        <img src={`${WEB_ASSETS}/images/sumer-logo-white.png`} alt="Main logo" className={styles.img} />
      </a>
      <div className={styles.links}>
        <a href="/" className={styles.link}>Inicio</a>
        <a href="https://comunidad.sumerlabs.com/" className={styles.link}>Comunidad</a>
        <a href="/politica-de-privacidad-de-datos-personales" className={styles.link}>Política de datos y privacidad</a>
      </div>
      <div className={styles.socials}>
        <div className={styles.description}>Sé parte de nuestra comunidad</div>
        <div className={styles.icons}>
          {socials.map(s => 
            <a 
              key={`landing-footer-social-${s.icon}`}
              className={`${styles.icon} icon-${s.icon}`}
              href={`${s.link}`}
              target={'_blank'}
            />
          )}
        </div>
        <div className={styles.address}>Bogotá, Colombia</div>
      </div>
      <div className={styles.languageBadge}>
        <div className={styles.language}>
          Idioma: Español 
          <span className="icon-arrow" />
        </div>
        <div className={styles.mark}>SumerLabs © {new Date().getFullYear()}</div>
      </div>
    </div>
  );
}
 
export default UiLandingFooter;