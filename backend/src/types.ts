import type { Role } from '@prisma/client';

export type JwtUser = {
  id: string;
  role: Role;
  email: string;
};

declare global {
  // eslint-disable-next-line no-var
  namespace Express {
    interface Request {
      user?: JwtUser;
    }
  }
}

