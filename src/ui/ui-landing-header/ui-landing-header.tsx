import React, { FC, useState } from "react";

import {
  UiLandingHeaderMenuItem,
  UiLandingHeaderMenuSubItem,
  UiLandingHeaderProps,
} from "./types";
import { WEB_ASSETS } from "~/constants";
import { goToApp } from "~/utils";
import { UiButton } from "../ui-button";
import { Modal } from "~/components/Modal";
import { ModalType } from "~/components/Modal/types";
import styles from "./ui-landing-header.module.scss";

const UiLandingHeader: FC<UiLandingHeaderProps> = ({
  showLogin = true,
  className,
  onLoginClick,
  appearance,
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openMobileTab, setOpenMobileTab] = useState<number | null>(null);
  const [openExpandibleTab, setOpenExpandibleTab] =
    useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const defaultMenuItems: UiLandingHeaderMenuItem[] = [
    {
      icon: "pencil",
      title: "Blog",
      description: "Aprende de la mano de nuestro equipo",
      link: "https://blog.sumerlabs.com/",
    },
    {
      icon: "question-support",
      title: "Ver tutoriales",
      description: "Te enseñamos cómo usar Sumer",
      link: "/tutoriales-sumer",
    },
    {
      icon: "eye",
      title: "Publicidad en 3 clics",
      description: "Publicidad efectiva en 3 pasos",
      link: "/publicidad",
    },
    {
      icon: "book-open",
      title: "Sumer directorio",
      description: "Compra a un clic los mejores productos",
      link: "https://www.sumerlabs.com/directorio/colombia",
    },
  ];

  const communityItems: UiLandingHeaderMenuSubItem[] = [
    {
      icon: "book-open",
      name: "Preguntar a otros negocios",
      description:
        "Encuentra apoyo en otros comerciantes y conoce sus experiencias",
      link: "https://comunidad.sumerlabs.com/popular",
    },
    {
      icon: "book-open",
      name: "Consultar al equipo experto",
      description:
        "Consulta con los mejores todo lo que quieres saber sobre Sumer",
      link: "https://calendly.com/sumerayuda/soportepersonalizado",
    },
    {
      icon: "book-open",
      name: "Preguntas frecuentes",
      description: "Resuelve tus dudas a un clic",
      link: "https://comunidad.sumerlabs.com/",
    },
  ];

  const aboutItems: UiLandingHeaderMenuSubItem[] = [
    {
      icon: "book-open",
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
      link: '#',
      subItems: aboutItems,
    },
    ...defaultMenuItems,
  ];

  const handleExpertButtonClick = () => {
    const link = document.createElement("a");
    link.href = "/premium";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleOpenModal = (): void => {
    setShowModal((show) => !show);
  };


  return (
    <div
      className={`${styles.uiLandingHeaderContainer} ${className} ${ appearance === "dark" ? `${styles.dark}` : `${styles.light}` }`}
    >
      <div className={styles.menuIconHeader}
        onClick={() => setShowMobileMenu((a) => !a)}
      >
        {!showMobileMenu ? (
          <span className="icon-burger-menu" />
        ) : (
          <span className="icon-close" />
        )}
      </div>
      <a className={styles.logo} href="/">
        <img
          src={
            appearance === "dark"
              ? `${WEB_ASSETS}/images/sumer-logo-white.png`
              : `${WEB_ASSETS}/images/sumer-logo-black.png`
          }
          alt="Main logo"
          className={styles.img}
        />
      </a>
      <div className={styles.spacer} />
      <div className={styles.points}>
        <div
          className={styles.icons}
          onClick={() => setOpenExpandibleTab((t) => (t === 0 ? null : 0))}
        >
          <span className="icon-four-points" />
          <div className={styles.iArrow}>
            <span className="icon-arrow" />
          </div>  
        </div>
        <div
          className={`${styles.subMenu} ${
            openExpandibleTab === 0 ? `${styles.open}` : `${styles.close}`
          }`}
        >
          {defaultMenuItems.map((i) => (
            <a
              key={`points-actionable-${i.title}`}
              className={styles.actionable}
              href={i.link}
            >
              <div className={`icon-${i.icon}`} />
              <div className={styles.texts}>
                <div className={styles.title}>{i.title}</div>
                <div className={styles.description}>{i.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.about}>
        <div
          className={styles.clicker}
          onClick={() => setOpenExpandibleTab((t) => (t === 1 ? null : 1))}
        >
          <div className={styles.text}>Sobre sumer</div>
          <span className={"icon icon-arrow"}></span>
          <div
            className={`${styles.subMenu} ${
              openExpandibleTab === 1 ? `${styles.open}` : `${styles.close}`
            }`}
          >
            {aboutItems.map((i) => (
              <a
                key={`about-actionable-${i.name}`}
                className={styles.actionable}
                href={i.link}
              >
                <span className={`icon icon-${i.icon}`}></span>
                <div className={styles.texts}>
                  <div className={styles.title}>{i.name}</div>
                  <div className={styles.description}>{i.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.expertLinkHeader}>
        <a className={styles.text} href="/premium">
          Quiero ser Experto
        </a>
        <span className="icon icon-crown"></span>
      </div>
      <div className={styles.rightSide}>
        {showLogin && (
          <div className={styles.login} onClick={onLoginClick}>
            Iniciar sesión
          </div>
        )}
        <div
          className={styles.downloadButtonHeader}
          onClick={() => toggleOpenModal()}
        >
          <span className="icon icon-android"></span>
          <span className="icon icon-apple"></span>
          <div className={styles.text}>Descargar la app</div>
        </div>
      </div>
      <Modal
        title={"Registrate en Sumer"}
        show={showModal}
        onClose={toggleOpenModal}
        type={ModalType.TOP}
        content={{
          styles: {
            borderRadius: '10px',
            width: "499px",
            height: "auto",
          }
        }}
      >
        <div className={styles.downloadContent}>
          <img
            className={styles.sumerImg}
            src="/prod/catalogue/sumer-img.png"
          />
          <p className={styles.textAcount}>
            Aún no tienes una cuenta en Sumer.
          </p>
          <p className={styles.textDownload}>
            Descarga la app y crea tu cuenta
          </p>
          <div
            className={styles.downloadAppButton}
            onClick={() => goToApp(true)}
          >
            <span className="icon icon-apple" />
            <span className="icon icon-android" />
            <div className={styles.text}>Descargar la app</div>
          </div>
        </div>
      </Modal>
      <div className={`${styles.mobileMenu} ${showMobileMenu && `${styles.show}`}`}>
        {mobileMenuItems.map((menuItem, index) => (
          <div
            key={`mobile-menu-item-${menuItem.title}`}
            className={`${styles.item} ${openMobileTab === index && `${styles.open}`}`}
          >
            <a
              href={menuItem.link}
              className={styles.actionable}
              onClick={() =>
                setOpenMobileTab((t) => (t === index ? null : index))
              }
            >
              <div className={`icon icon-${menuItem.icon}`} />
              <div className={styles.texts}>
                <div className={styles.title}>{menuItem.title}</div>
                <div className={styles.description}>{menuItem.description}</div>
              </div>
              {!!menuItem.subItems?.length && (
                <div className={styles.arrow}>
                  <span className="icon-arrow"></span>
                </div>
              )}
            </a>
            {!!menuItem.subItems?.length && (
              <div className={styles.items}>
                {menuItem.subItems.map((item) => (
                  <a
                    className={styles.subItem}
                    key={`mobile-menu-sub-item-${item.name}`}
                    href={item.link}
                    target={"_blank"}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className={styles.mobileMenuExpertMobile}>
          <UiButton
            className={styles.expertButton}
            appereance="expert"
            onClick={handleExpertButtonClick}
            icon={<span className="icon-crown" />}
          >
            Quiero ser Experto
          </UiButton>
        </div>
        {showLogin && (
          <div className={styles.loginButton} onClick={onLoginClick}>
            Iniciar sesión
          </div>
        )}
      </div>
    </div>
  );
};

export default UiLandingHeader;
