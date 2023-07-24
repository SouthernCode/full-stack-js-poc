export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  capital: string[];
  flag: string;
  continents: string[];
  population: number;
}
