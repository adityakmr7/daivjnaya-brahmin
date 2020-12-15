class UserService {
  // https://oauth.example.com/token?
  // grant_type=password&username=USERNAME&password=PASSWORD&client_id=CLIENT_ID
  url = "http://3.6.104.144/oauth/token";
  client_id = "a2FydGhpaw==";
  auth0 = "";
  config = {
    clientId: this.client_id,
    domain: this.url,
  };
  getOauth2 = () => {};
}

export default UserService;
