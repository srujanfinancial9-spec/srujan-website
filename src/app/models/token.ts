export class tokenObj {
  accessToken;
  refreshToken;
  userId;
  deviceId;
  constructor(access_token: string,
    refresh_token: string,
    user_id: string,
    device_id: string) {
    this.accessToken = access_token;
    this.refreshToken = refresh_token;
    this.userId = user_id;
    this.deviceId = device_id;
  }
}
