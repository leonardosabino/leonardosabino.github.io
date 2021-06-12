import { Injectable } from '@angular/core';
import { GridsterConfig } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: true
    }
  };

  public posts: Post[] = [];

  public defaultPosts: Post[] = [{
    id: '123',
    title: 'About me',
    html: '<h1> Hello, World! </h1>',
    createdDate: new Date(),
    lastModifiedDate: new Date(),
    layout: {
      cols: 2,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 11,
    }
  },
  {
    id: '123',
    title: 'About me',
    html: '<h1> Hello, World! </h1>',
    createdDate: new Date(),
    lastModifiedDate: new Date(),
    layout: {
      cols: 2,
      id: UUID.UUID(),
      rows: 11,
      x: 0,
      y: 0,
    }
  },
  {
    id: '123',
    title: 'About me',
    html: '<h1> Hello, World! </h1>',
    createdDate: new Date(),
    lastModifiedDate: new Date(),
    layout: {
      cols: 2,
      id: UUID.UUID(),
      rows: 16,
      x: 7,
      y: 0,
    }
  },
  {
    id: '123',
    title: 'About me',
    html: '<h1> Hello, World! </h1>',
    createdDate: new Date(),
    lastModifiedDate: new Date(),
    layout: {
      cols: 5,
      id: UUID.UUID(),
      rows: 16,
      x: 2,
      y: 0,
    }
  }
  ]

  addItem(): void {
    this.posts.push({
      id: '123',
      title: 'About me',
      html: '<h1> Hello, World! </h1>',
      createdDate: new Date(),
      lastModifiedDate: new Date(),
      layout: {
        cols: 5,
        id: UUID.UUID(),
        rows: 5,
        x: 0,
        y: 0
      }
    });
  }

  deleteItem(id: String): void {
    const item: any = this.posts.find(d => d.layout.id === id);
    this.posts.splice(this.posts.indexOf(item), 1);
  }

  resetItens() {
    this.posts = this.defaultPosts;
  }

  consolePost() {
    console.log(this.posts);
  }

  clear() {
    this.posts = [];
  }

  constructor() {
    this.posts = this.defaultPosts;
  }

}
