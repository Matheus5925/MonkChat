import { createHash, timingSafeEqual } from 'crypto';


export function hashPassword(password: string): string {
    const hash = createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}


export function comparePasswords(password: string, hashedPassword: string): boolean {
  const hashToCompare = hashPassword(password);

  return timingSafeEqual(Buffer.from(hashToCompare, 'hex'), Buffer.from(hashedPassword, 'hex'));
}