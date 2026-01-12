import { RequestHandler } from "../utlis/api-client";
import { request } from '@playwright/test'
import { config } from "../api-config";


export async function generateToken(){
    const context = await request.newContext()
    const api = new RequestHandler(context, config.apiURL);
    const tokenResponse = await api
      .path("/users/login")
      .body({
        user: { email: config.apiUser, password: config.apiPassword },
      })
      .postRequest(200);
    const token = "Token " + tokenResponse.user.token;
   return token
};