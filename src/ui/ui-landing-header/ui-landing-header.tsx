import React, { FC, useState } from "react";
import {DownloadContent, UiLandingHeaderStyled} from "./ui-landing-header.styled";
import { UiLandingHeaderMenuItem, UiLandingHeaderMenuSubItem, UiLandingHeaderProps } from "./types";
import { WEB_ASSETS } from "~/constants";
import { goToApp } from "~/utils";
import { UiButton } from "../ui-button";
import Modal from "~/components/Modal";
import { ModalType } from "~/components/Modal/types";
 
const UiLandingHeader: FC<UiLandingHeaderProps> = ({
  showLogin = true,
  className,
  onLoginClick,
  appearance,
}) => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openMobileTab, setOpenMobileTab] = useState<number | null>(null);
  const [openExpandibleTab, setOpenExpandibleTab] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);


  const defaultMenuItems: UiLandingHeaderMenuItem[] = [
    {
      icon: 'pencil',
      title: "Blog",
      description: "Aprende de la mano de nuestro equipo",
      link: "https://blog.sumerlabs.com/",
    },
    {
      icon: 'question-support',
      title: "Ver tutoriales",
      description: "Te enseñamos cómo usar Sumer",
      link: "/tutoriales-sumer",
    },
    {
      icon: 'eye',
      title: "Publicidad en 3 clics",
      description: "Publicidad efectiva en 3 pasos",
      link: "/publicidad",
    },
    {
      icon: 'book-open',
      title: "Sumer directorio",
      description: "Compra a un clic los mejores productos",
      link: "https://www.sumerlabs.com/directorio/colombia",
    },
  ];

  const communityItems: UiLandingHeaderMenuSubItem[] = [
    {
      icon: 'book-open',
      name: "Preguntar a otros negocios",
      description:
        "Encuentra apoyo en otros comerciantes y conoce sus experiencias",
      link: "https://comunidad.sumerlabs.com/popular",
    },
    {
      icon: 'book-open',
      name: "Consultar al equipo experto",
      description:
        "Consulta con los mejores todo lo que quieres saber sobre Sumer",
      link: "https://calendly.com/sumerayuda/soportepersonalizado",
    },
    {
      icon: 'book-open',
      name: "Preguntas frecuentes",
      description: "Resuelve tus dudas a un clic",
      link: "https://comunidad.sumerlabs.com/",
    },
  ];
  
  const aboutItems: UiLandingHeaderMenuSubItem[] = [
    {
      icon: 'book-open',
      name: "Sobre nosotros",
      description: "Conoce nuestro propósito y el equipo que lo hace realidad.",
      link: "/about-us",
    },
  ];

  const mobileMenuItems: UiLandingHeaderMenuItem[] = [
    {
      icon: 'question-support',
      title: 'Sobre el equipo',
      description: 'Conoce nuestro equipo y su propósito',
      subItems: aboutItems,
    },
    ...defaultMenuItems
  ];

  const handleExpertButtonClick = () => {
    const link = document.createElement("a");
    link.href = '/premium'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const toggleOpenModal = ():void => {
      setShowModal( (show) => !show)
  }

  return (
    <UiLandingHeaderStyled appearance={appearance} className={className}>
      <div className="menu-icon" onClick={() => setShowMobileMenu(a => !a)}>
        {!showMobileMenu ? 
          <span className="icon icon-burger-menu" /> :
          <span className="icon icon-close" />
        }
      </div>
      <a className="logo" href="/">
        <img src={ appearance === 'dark' ? `${WEB_ASSETS}/images/sumer-logo-white.png` : `${WEB_ASSETS}/images/sumer-logo-black.png` } alt="Main logo" className="img" />
      </a>
      <div className="spacer" />
      <div className="points">
        <div className="icons" onClick={() => setOpenExpandibleTab(t => t === 0 ? null : 0)}>
          <div className="icon icon-four-points" />
          <div className="icon icon-arrow" />
        </div>
        <div className={`submenu ${openExpandibleTab === 0 ? 'open' : 'close'}`}>
          {defaultMenuItems.map(i => (
            <a key={`points-actionable-${i.title}`} className="actionable" href={i.link}>
              <div className={`icon icon-${i.icon}`} />
              <div className="texts">
                <div className="title">{i.title}</div>
                <div className="description">{i.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="about">
        <div className="clicker" onClick={() => setOpenExpandibleTab(t => t === 1 ? null : 1)}>
          <div className="text">Sobre sumer</div>
          <div className="icon icon-arrow" />
          <div className={`submenu ${openExpandibleTab === 1 ? 'open' : 'close'}`}>
            {aboutItems.map(i => (
              <a key={`about-actionable-${i.name}`} className="actionable" href={i.link}>
                <div className={`icon icon-${i.icon}`} />
                <div className="texts">
                  <div className="title">{i.name}</div>
                  <div className="description">{i.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="expert-link">
        <a className="text" href="/premium">Quiero ser Experto</a>
        <div className="icon icon-crown" />
      </div>
      <div className="right-side">
        {showLogin && <div className="login" onClick={onLoginClick}>Ingresar a Sumer WEB</div>}
        <div className="download-button" onClick={() => toggleOpenModal()}>
          <span className="icon icon-android" />
          <span className="icon icon-apple" />
          <div className="text">Descargar la app</div>
        </div>
      </div>
      <Modal
        title={"Registrate en Sumer"}
        show={showModal}
        onClose={toggleOpenModal}
        styles={{
          content: {
            borderRadius: {
              bottomLeft: "10px",
              bottomRight: "10px",
              topLeft: "10px",
              topRight: "10px",
            },
            width: "499px",
            height: "auto",
            type: ModalType.TOP,
          },
        }}
      >
        <DownloadContent>
          <img
            className="sumer-img"
            src="/prod/catalogue/sumer-img.png"
          />
          <p className="text-acount">Aún no tienes una cuenta en Sumer.</p>
          <p className="text-download">Descarga la app y crea tu cuenta</p>
          <div className="download-app-button" onClick={() => goToApp(true)}>
            <span className="icon icon-apple" />
            <span className="icon icon-android" />
            <div className="text">Descargar la app</div>
          </div>
        </DownloadContent>
      </Modal>
      <div className={`mobile-menu ${showMobileMenu && 'show'}`}>
        {mobileMenuItems.map((menuItem, index) => (
          <div key={`mobile-menu-item-${menuItem.title}`} className={`item ${openMobileTab === index && 'open'}`}>
            <a href={menuItem.link} className="actionable" onClick={() => setOpenMobileTab(t => t === index ? null : index)}>
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
            </a>
            {!!menuItem.subItems?.length && (
              <div className="sub-items">
                {menuItem.subItems.map(item => (
                  <a 
                    className="sub-item"
                    key={`mobile-menu-sub-item-${item.name}`} 
                    href={item.link} 
                    target={'_blank'}
                  >{item.name}</a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className={'mobile-menu__expert'}>
          <UiButton
              className="expert-button"
              appereance="expert"
              onClick={handleExpertButtonClick}
              icon={<span className="icon-crown" />}
          >
            Quiero ser Experto
          </UiButton>
        </div>
        {showLogin && <div className="login-button" onClick={onLoginClick}>Ingresar a Sumer WEB</div>}
      </div>
    </UiLandingHeaderStyled>
  );
}
 
export default UiLandingHeader;