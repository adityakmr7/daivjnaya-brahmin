import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";
class metalPriceServices {
  access_key = "j4sd9wo4brzcqq6z96p5topf1qr7ouww7794r45mk2sdmv6yd12s87f9wn9q";
  base = "INR";
  symbols = "XAU,XAG";
  date = moment().format("YY-MM-DD");
  url = `https://metals-api.com/api/${this.date}
    ?access_key=${this.access_key}&base=${this.base}&symbols=${this.symbols}`;

  getPrice = () => {
    return axios.get(this.url);
  };
}

export default metalPriceServices;
