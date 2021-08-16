import { AuthCreds, ResetPasswordData, UserData, AuthResponse } from "../../common/Models/Auth";
import { LOGINUSER, REGISTER, LOGOUTUSER } from "../types/auth";
import * as DB from "../../common/DB/Db";

let res: AuthResponse = { status: false };

export const login = (creds: AuthCreds, callback: any) => async dispatch => {
  const { username, password } = creds;

  const userExists = await DB.getUserByLoginId(username);
  if (userExists.status && userExists.data.password === password) {
    res = { status: true, message: 'Login success' };
    dispatch({
      type: LOGINUSER,
      payload: { creds },
    });
  }else res.message = 'Invalid username/password';
  callback(res);
}

export const register = (creds: UserData, callback: any) => async dispatch => {
  const { username, password, email, telephone } = creds;
  const register = await DB.registerAuth(username, email, telephone, password);
  if (register.status) {
    dispatch({
      type: REGISTER,
      payload: { creds },
    });
    res = { status: true, message: 'Registration success' }
  }
  else callback(res);

}
export const forgotPassword = (creds: ResetPasswordData, callback: any) => async dispatch => {
  const { email, telephone } = creds;
  const userExists = await DB.getUserByTelephoneEmail(telephone, email);
  if (userExists.status) res = { status: true, message: 'User account retrieve success', data: userExists.data };
  else res.message = 'Account not found. Please creat account!';
  callback(res);
}
export const resetPassword = (creds: { username: string; password: string }, callback: any) => async dispatch => {
  const { username, password } = creds;
  const update = await DB.updateUserPassword(username, password);
  if (update.status) res = { status: true, message: 'Password update success', data: {} };
  callback(res);
}

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUTUSER,
    payload: {},
  });
}