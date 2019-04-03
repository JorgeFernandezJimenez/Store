import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class DataService implements InMemoryDbService {

  createDb() {
    let users = [
      {id: 0, email: 'carlos.garcia@atmira.com', password: 'GArCia903', firstname: 'Carlos', surname: 'García Torres', birthdate: '1996-12-01'},
      {id: 0, email: 'antonio.ramos@atmira.com', password: 'RamOs351', firstname: 'Antonio Jesús', surname: 'Ramos Madueño', birthdate: '1999-10-18'}
    ];

    let products = [
      {id: 0, name: 'God of War', price: 70, stock: 20, category: 0},
      {id: 1, name: "Assassin's Creed: Odyssey", price: 69.95, stock: 10, category: 0},
      {id: 2, name: 'Trópico 5', price: 20, stock: 10, category: 1},
      {id: 3, name: 'Crash Bandicoot 3', price: 5, stock: 5, category: 2}
    ];

    let category: [
      {id: 0, name: 'Acción'},
      {id: 1, name: 'Estrategia'},
      {id: 2, name: 'Plataformas'}
    ];

    return {users, category, products};
  }
}
