export type SliderProps = {
    children: React.ReactNode;
    hideArrows?: boolean;
    hideDots?: boolean;
    dotsStyle: DotsStyle
    dragMode?: boolean;
    iconBackArrow?: JSX.Element;
    iconNextArrow?: JSX.Element;
}

export type DotsStyle = {
    type?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
}