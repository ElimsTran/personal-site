import { API__MAIL_NOTIFY__SEND_TO_ADMIN } from "@/constants";
import { ApiResponse } from "@/models/api/ApiModels";
import axios from "axios";

export interface MailNotifyData {
  name: string;
  mail: string;
  subject: string;
  body: string;
}

export default class ContactService {
  private apiUrl: string = API__MAIL_NOTIFY__SEND_TO_ADMIN || "";

  async PostMailNotify(
    mailNotifyData: MailNotifyData
  ): Promise<ApiResponse<any>> {
    try {
      const mailNotifyDTO = {
        Name: mailNotifyData.name,
        Email: mailNotifyData.mail,
        Subject: mailNotifyData.subject,
        Body: mailNotifyData.body,
      };
      const response = await axios.post(this.apiUrl, mailNotifyDTO);
      return response.data; // Return the response data from the API
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
