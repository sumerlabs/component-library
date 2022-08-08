import React, { FC, useState } from "react";
import { Wrapper } from "./ui-landing-header.styled";
import { UiLandingHeaderProps } from "./types";
import { WEB_ASSETS } from "~/constants";
import { goToApp } from "~/utils";
 
const UiLandingHeader: FC<UiLandingHeaderProps> = ({
  className,
  onLoginClick,
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openTab, setOpenTab] = useState<number | null>(null);

  const communityItems = [
    {
      name: "Preguntar a otros negocios",
      description:
        "Encuentra apoyo en otros comerciantes y conoce sus experiencias",
      link: "https://comunidad.sumerlabs.com/popular",
    },
    {
      name: "Consultar al equipo experto",
      description:
        "Consulta con los mejores todo lo que quieres saber sobre Sumer",
      link: "https://calendly.com/sumerayuda/soportepersonalizado",
    },
    {
      name: "Preguntas frecuentes",
      description: "Resuelve tus dudas a un clic",
      link: "https://comunidad.sumerlabs.com/",
    },
  ];
  
  const aboutItems = [
    {
      name: "Sobre nosotros",
      description: "Conoce nuestro propósito y el equipo que lo hace realidad.",
      link: "/about-us",
    },
    {
      name: "Trabaja con nosotros",
      description: "¡Únete a nuestro equipo! Talento LATAM",
      link: "/sumer-jobs",
    },
  ];

  const menuItems = [
    {
      icon: 'bubble-chat',
      title: 'Comunidad',
      description: 'FAQ y experiencias',
      subItems: communityItems,
    },
    {
      icon: 'question-support',
      title: 'Sobre el equipo',
      description: 'Conoce nuestro equipo y su propósito',
      subItems: aboutItems,
    },
    {
      icon: 'pencil',
      title: "Blog",
      description: "Aprende de la mano de nuestro equipo",
      link: "https://blog.sumerlabs.com/",
    },
    {
      icon: 'book-open',
      title: "Ver tutoriales",
      description: "Te enseñamos cómo usar Sumer",
      link: "/tutoriales-sumer",
    },
    {
      icon: 'trophy',
      title: "Retos",
      description: "Obtén recompensas para tu negocio",
      link: "/retos",
    },
  ];

  return (
    <Wrapper className={className}>
      <div className="menu-icon" onClick={() => setShowMobileMenu(a => !a)}>
        {!showMobileMenu ? 
          <span className="icon icon-burger-menu" /> :
          <span className="icon icon-close" />
        }
      </div>
      <div className="logo">
        <img src={`${WEB_ASSETS}/images/sumer-logo-black.png`} alt="Main logo" className="img" />
      </div>
      <div className="spacer" />
      <div className="points" onClick={() => setShowMobileMenu(a => !a)}>
        <div className="icon icon-four-points" />
        <div className="icon icon-arrow" />
      </div>
      <div className="about">
        <div className="text">Sobre sumer</div>
        <div className="icon icon-arrow" />
      </div>
      <div className="community">
        <div className="text">Comunidad</div>
        <div className="icon icon-arrow" />
      </div>
      <div className="expert">
        <div className="text">Experto</div>
      </div>
      <div className="right-side">
        <div className="login">Ingresar</div>
        <div className="download-button" onClick={() => goToApp(true)}>
          <span className="icon icon-android" />
          <span className="icon icon-apple" />
          <div className="text">Descargar la app</div>
        </div>
      </div>
      <div className={`mobile-menu ${showMobileMenu && 'show'}`}>
        {menuItems.map((menuItem, index) => (
          <div key={`mobile-menu-item-${menuItem.title}`} className={`item ${openTab === index && 'open'}`}>
            <div className="actionable" onClick={() => setOpenTab(t => t === index ? null : index)}>
              <div className={`icon icon-${menuItem.icon}`} />
              <div className="texts">
                <div className="title">{menuItem.title}</div>
                <div className="description">{menuItem.description}</div>
              </div>
              {!!menuItem.subItems?.length && (
                <div className="arrow">
                  <div className="icon-arrow" />
                </div>
              )}
            </div>
            {!!menuItem.subItems?.length && (
              <div className="sub-items">
                {menuItem.subItems.map(item => (
                  <a 
                    className="sub-item"
                    key={`mobile-menu-sub-item-${item.name}`} 
                    href={item.link} 
                    target={'_blank'}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="login-button" onClick={onLoginClick}>Ingresar</div>
      </div>
    </Wrapper>
  );
}
 
export default UiLandingHeader;