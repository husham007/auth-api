export interface UserInterface {
  userName: string;
  email: string;
  password: string;
}

export interface CustomRequest extends Request {
  user?: any;
}
