import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export function createJWT(data) {
  return new Promise((resolve, reject) => {
    jwt.sign(data, 'huakun', (err, token) => {
      if (err) {
        return reject(err);
      }

      return resolve(token as string);
    });
  });
}

export function comparePassword(plainText: string, hash: string) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainText, hash, (err, result) => {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    });
  });
}

export function hashPassword(plainTextPassword: string) {
  return bcrypt.genSalt(5).then((salt) => bcrypt.hash(plainTextPassword, salt));
}
