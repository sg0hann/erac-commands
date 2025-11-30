export enum Category {
  HUD = 'HUD & UI',
  MISC = 'Misc Commands',
  POTATO = 'Potato Graphics'
}

export interface CommandItem {
  id: string;
  title: string;
  description: string;
  command: string;
  category: Category;
}

export interface PotatoPack {
  id: string;
  title: string;
  description: string;
  commandBlock: string; // The raw command string separated by pipes or newlines
  category: Category;
}

export type SearchResult = CommandItem | PotatoPack;