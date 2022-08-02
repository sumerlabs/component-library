import React, { FC } from "react";
import { Wrapper } from "./ui-landing-footer.styled";
import { UiLandingFooterProps } from "./types";
 
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
    <Wrapper className={className}>
      <a className="logo" href="/">
        {/* <SumerLogo /> */}
      </a>
      <div className="links">
        <a href="/" className="link">Inicio</a>
        <a href="https://comunidad.sumerlabs.com/" className="link">Comunidad</a>
        <a href="/politica-de-privacidad-de-datos-personales" className="link">Política de datos y privacidad</a>
      </div>
      <div className="socials">
        <div className="description">Sé parte de nuestra comunidad</div>
        <div className="icons">
          {socials.map(s => 
            <a 
              key={`landing-footer-social-${s.icon}`}
              className={`icon icon-${s.icon}`}
              href={`${s.link}`}
              target={'_blank'}
            />
          )}
        </div>
        <div className="address">Bogotá, Colombia</div>
      </div>
      <div className="language-badge">
        <div className="language">
          Idioma: Español 
          <span className="icon-arrow" />
        </div>
        <div className="mark">SumerLabs © {new Date().getFullYear()}</div>
      </div>
    </Wrapper>
  );
}
 
export default UiLandingFooter;