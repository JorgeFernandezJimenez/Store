import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
import { Category } from "./views/games/categories/category";
import { Game } from "./views/games/game";
import { User } from './layouts/aside/User';

@Injectable()
export class DataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 0,
        email: "carlos.garcia@atmira.com",
        password: "carlos1",
        firstname: "Carlos",
        surname: "García Torres",
        birthdate: "1996-12-01"
      },
      {
        id: 0,
        email: "antonio.ramos@atmira.com",
        password: "ramos2",
        firstname: "Antonio Jesús",
        surname: "Ramos Madueño",
        birthdate: "1999-10-18"
      }
    ];

    const games: Game[] = [
      {
        id: 0,
        name: "God of War",
        price: 70,
        stock: 20,
        category: 0,
        img: "assets/img/GoW.jpg"
      },
      {
        id: 1,
        name: "Assassin's Creed: Odyssey",
        price: 69.95,
        stock: 10,
        category: 0,
        img: "assets/img/ACO.jpg"
      },
      {
        id: 2,
        name: "Caesar 3",
        price: 20,
        stock: 10,
        category: 1,
        img: "assets/img/CIII.jpg"
      },
      {
        id: 3,
        name: "Crash Bandicoot 3",
        price: 5,
        stock: 5,
        category: 2,
        img: "assets/img/CB3.jpg"
      }
    ];

    const categories: Category[] = [
      { id: 0, name: "Acción" },
      { id: 1, name: "Estrategia" },
      { id: 2, name: "Plataformas" }
    ];

    return { users, categories, games };
  }
}
