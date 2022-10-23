import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(): object {
    return { msg: 'Creating user account' };
  }
}
