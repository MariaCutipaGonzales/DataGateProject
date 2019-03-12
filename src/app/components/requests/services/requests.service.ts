import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/app.router.enum';
import { RequestListBack } from '../models/request.service.model';

@Injectable()
export class RequestsService {
    private readonly api = `${enviroment.url}/requests`;

    constructor(
        private http: HttpClient,
    ){ }
    
    getList(): Observable<RequestListBack[]> {
        return this.http.get<RequestListBack[]>(this.api);
    }
}