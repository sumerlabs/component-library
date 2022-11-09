export enum LoginSteps {
  SELECT_LOGIN_METHOD = 'select_login_method',
  GET_CODE = 'get_code',
  EMAIL = 'email',
  VALIDATE_CODE = 'pending',
  UPDATE_USER_DATA = 'update_user_data',
  REGISTER_MESSAGE = 'register_message',
}

export enum LoginType {
  BUYER = 'buyer',
  SELLER = 'seller',
}

export enum SelectMethod {
  EMAIL_METHOD = 'email',
}

export declare type LoginProps = {
  initialStep: LoginSteps;
  apiKey: string;
  apiUrl: string;
  apiKeySp: string
  logEvent: (event: string) => void;
  country: any;
  success?: (loginData?: ValidateCodeResponse) => void;
  loginType: LoginType,
}

export type ValidateCodeResponse = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export type Customer = {
  firstName: string,
  lastName: string,
  userId: string,
  prefixPhone?: string,
  phone?: string
}