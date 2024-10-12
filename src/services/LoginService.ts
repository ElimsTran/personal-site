import { API__AUTH__LOGIN, API__MAIL_NOTIFY__SEND_TO_ADMIN } from "@/constants";
import { ApiResponse } from "@/models/api/ApiModels";
import axios from "axios";

export interface LoginData {
  userName: string;
  password: string;
}
export interface TokenResponse {
  accessToken: string;
  refeshToken: string;
}

export default class LoginService {
  private apiUrl: string = API__AUTH__LOGIN || "";

  async PostLogin(data: LoginData): Promise<ApiResponse<TokenResponse>> {
    try {
      const dto = {
        UserName: data.userName,
        Password: data.password,
      };
      const response = await axios.post(this.apiUrl, dto);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
        throw new Error(
          `Error: ${error.response?.data?.message || error.message}`
        );
      } else {
        // Handle other errors
        console.error("Unexpected error:", error);
        throw new Error(`Unexpected error: ${error}`);
      }
    }
  }
}
