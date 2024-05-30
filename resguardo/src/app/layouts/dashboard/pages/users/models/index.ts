export type UserRole = 'ADMIN' | 'USER' | 'PROFESOR' | 'ESTUDIANTE' | 'ABOGADO' ;

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  sanciones: number;
  role: UserRole;
  createdAt: Date;
}

export interface CreateUserPayload {

  firstName: string | null;
  lastName: string | null;
  email: string | null;
  sanciones: number | null;
  role: UserRole | null;
  createdAt: Date | null;
}