export class RegisterUserDTO {
  constructor(
    public UserName: string,
    public Email: string,
    public Password: string,
    public RePassword: string,
    public FirstName: string,
    public LastName: string
  ) {}
}
