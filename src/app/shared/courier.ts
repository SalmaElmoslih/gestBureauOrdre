export class Courier {
  constructor(
    public date: string, // Correction des types pour correspondre à TypeScript
    public numOrdre: number,
    public destinataire: string,
    public expediteur: string,
    public type: string
  ) {}
}
