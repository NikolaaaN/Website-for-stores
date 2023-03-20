import { Bills } from './bills';

export class Customer {
  username: string;
  password: string;
  name: string;
  phone: string;
  idCard: string;
  bills: Array<Bills>;
}
