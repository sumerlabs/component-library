export enum LoginSteps {
  SELECT_LOGIN_METHOD = 'select_login_method',
  GET_CODE = 'get_code',
  VALIDATE_CODE = 'pending',
  UPDATE_USER_DATA = 'update_user_data',
  REGISTER_MESSAGE = 'register_message',
}

export type LoginProps = {
  initialStep: LoginSteps;
  apiKey: string;
  apiUrl: string;
  apiKeySp: string
  logEvent: (event: string) => void;
  country: any;
  success?: (customer: Customer, loginData?: ValidateCodeResponse) => void;
  redirectUrl?: string
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