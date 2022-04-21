import { ModalType } from './types';
import { isBrowser } from '../../common/utils';

const mobileCheck = function () {
    const ua = isBrowser() ? navigator.userAgent : ""
    return /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
};

export const getTransition = (type: ModalType | undefined) => {
    return mobileCheck() && type ==  ModalType.MOBILE_BOTTOM ? {
        initial: { y: 400 },
        animate: { y: 0 },
        transition: { ease: "easeInOut", duration: 0.3 },
    } : {
        initial: "hidden",
        animate: "visible",
        transition: { ease: "easeInOut", duration: 0.3 },
    }
}