export interface StateT {
  cards: Array<CardT>;
}

export interface CardT {
  id: string;
  content: string;
}
