import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { User } from '../_models/index';
 
@Injectable()
export class UserService {
    constructor(private http: Http) { }
 
    getAll() {
        return this.http.get('/api/user').map((response: Response) => response.json());
    }
 
    getById(id: number) {
        return this.http.get('/api/user/' + id).map((response: Response) => response.json());
    }
 
    create(user: User) {
        return this.http.post('/api/user/', user);
    }
 
    update(user: User) {
        return this.http.put('/api/user/' + user.id, user);
    }
 
    delete(id: number) {
        return this.http.delete('/api/user/' + id);
    }
}
