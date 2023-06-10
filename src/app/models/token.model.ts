export class TokenObject {
  access_token: string;
  refresh_token: string;
  device_id: string;
  user_id: string;

  constructor(
    access_token: string,
    refresh_token: string,
    device_id: string,
    user_id: string
  ) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.device_id = device_id;
    this.user_id = user_id;
  }
}
