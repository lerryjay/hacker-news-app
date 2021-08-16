export interface AuthCreds  {
  username:string;
  password:string;
}

export interface UserData{
  username:string;
  email:string;
  telephone:string;
  password?:string;
}
export interface ResetPasswordData{
  email:string;
  telephone:string;
}

export interface AuthResponse{
  status: boolean;
  message?:string;
  data?:any;
}
export interface DBResponse{
  status: boolean;
  message?:string;
  data?:any;
}