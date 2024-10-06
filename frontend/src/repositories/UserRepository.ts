import type { User } from '../types/types';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';

export default class UserRepository {
  async signin(identifier: String, password: String): Promise<User|Error> {
    try {
      const res = await fetchDataFromAPI({
        url: `/auth/local`,
        method: 'POST',
        data: {identifier, password}
      });
      return res as User
    } catch (error) {
      return error as Error
    }
  }
}