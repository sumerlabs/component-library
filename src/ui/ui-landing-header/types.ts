export declare type UiLandingHeaderProps = {
  showLogin?: boolean;
  className?: string;
  onLoginClick?: () => void;
};

export declare type UiLandingHeaderMenuSubItem = {
  name: string;
  description: string;
  link: string;
  icon?: string;
};

export declare type UiLandingHeaderMenuItem = {
  icon: string;
  title: string;
  description: string;
  link?: string;
  subItems?: UiLandingHeaderMenuSubItem[];
};
