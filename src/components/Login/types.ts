export enum LoginSteps {
  GET_CODE = 'get_code',
  VALIDATE_CODE = 'pending',
  UPDATE_USER_DATA = 'update_user_data',
  REGISTER_MESSAGE = 'register_message',
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