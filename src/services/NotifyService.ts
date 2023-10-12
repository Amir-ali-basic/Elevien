import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class NotifyService {
  showSuccess(message: string) {
    console.log("hehe");
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  }

  showError(message: string) {
    console.log("hehe");

    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  }
}
