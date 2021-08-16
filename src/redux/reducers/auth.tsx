import { LOGINUSER, REGISTER, LOGOUTUSER } from "../types/auth";
const initialState = {
  loggedIn : false
}

export default  (state = initialState,  data:{ type:string; payload:any }) => {
  const { type, payload }  = data;

  switch (type) {
  case LOGINUSER:
    return { loggedIn: true, ...payload.creds }
  case REGISTER:
    return { loggedIn: true,  ...payload.creds }
  case LOGOUTUSER:
    return { loggedIn: false }
  default:
    return state
  }
}
