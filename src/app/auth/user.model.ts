export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public password: string,
    public email: string,
    public userId?: string,
    public plateId?: string,
    public phone?: string,
    public groupIds?: string,
    public allowTexts?: boolean,
    public allowEmail?: boolean) {
  }
}
