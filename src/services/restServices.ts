import axios from "axios";

class restServices {
  baseUrl = "http://3.128.29.232";

  get(url: string) {
    axios
      .get(this.baseUrl + url)
      .then((res) => res)
      .catch((err) => console.log(err));
  }
}

export default restServices;
