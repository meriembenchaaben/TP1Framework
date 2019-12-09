export class Person {

  id: number;
  nom: string;
  prenom: string;
  age: number;
  cin: number;
  job: string;
  path: string;
  embauche: boolean;


  // tslint:disable-next-line:max-line-length
  constructor(id: number = null, nom: string = '', path: string = null, prenom: string = '', age: number = null, cin: number = null, job: string = null, embauche: boolean = false) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
    this.embauche = embauche;
  }
}
