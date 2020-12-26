import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  cards  = [
    {id: 1, name: 'Дмитрий', status: Math.round(Math.random()) > 0 ? true : false},
    {id: 2, name: 'Иван', status: Math.round(Math.random()) > 0 ? true : false},
    {id: 3, name: 'Георгий', status: Math.round(Math.random()) > 0 ? true : false},
    {id: 4, name: 'Василий', status: Math.round(Math.random()) > 0 ? true : false},
    {id: 5, name: 'Алексей', status: Math.round(Math.random()) > 0 ? true : false},
    {id: 6, name: 'Владислав', status: Math.round(Math.random()) > 0 ? true : false},
    {id: 7, name: 'Изумруд', status: Math.round(Math.random()) > 0 ? true : false},
    {id: 8, name: 'Пётр', status: Math.round(Math.random()) > 0 ? true : false},
    {id: 9, name: 'Тимофей', status: Math.round(Math.random()) > 0 ? true : false},
    {id: 10, name: 'Александр', status: Math.round(Math.random()) > 0 ? true : false},
  ];
  cardLast = this.cards.length;
  inputValue = '';
  deleteCard (card: any) {
    for (let i = 0; i<this.cards.length; i++) {
      if (this.cards[i]['id'] === card.id) {
        this.cards.splice(i, 1);
      }
    }
  }
  addCard (inputValue: string) {
    let item = {
      id: ++this.cardLast,
      name: inputValue,
      status: Math.round(Math.random()) > 0 ? true : false
    }
    this.inputValue = '';
    this.cards.push(item);
  }
}
