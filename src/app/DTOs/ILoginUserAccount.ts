export interface ILoginUserAccount {
  status: string;
  data: {
    token: string;
    expireTime: number;
    FirstName: string;
    LastName: string;
    UserId: number;
    message: string;
  };
}
