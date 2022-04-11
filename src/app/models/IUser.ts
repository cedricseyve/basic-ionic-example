export interface IUser {
  idPersonne: number;
  nomPersonne: string;
  prenomPersonne: string;
  idApplication: number;
  libelleApplication: string;
  urlApplication: string;
  codeProfil: string;
  idPersonneDelegue: number | null;
  nomPersonneDelegue: string | null;
  prenomPersonneDelegue: string | null;
}
