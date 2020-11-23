import restServices from "../services/restServices";

export async function sendPushNotificationsAsync(token: string) {
  const _rest = new restServices();
  _rest
    .post(`/notification?token=${token}`, {})
    .then((res) => {
      console.log("notification_token_submit", res);
    })
    .catch((err) => {
      console.log("notification_token_error", err);
    });
}
