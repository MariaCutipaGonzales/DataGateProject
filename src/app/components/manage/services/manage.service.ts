import {Injectable} from '@angular/core';
import { enviroment } from 'src/app/app.router.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManageListBackend, IManage} from '../models/manage.model';

@Injectable()
export class ManageService {
    private readonly api = `${enviroment.url}/manage`;
    
    constructor(
        private http: HttpClient,
    ){ }
    
    getList(): Observable<ManageListBackend[]> {
        return this.http.get<ManageListBackend[]>(this.api);
    }

    getItemById(id: number): Observable<ManageListBackend> {
        return this.http.get<ManageListBackend>(`${this.api}/${id}`);
    }

    updatekey(data: ManageListBackend): Observable<ManageListBackend> {
        const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        const body = this.dataFormatBody(data);
        return this.http.put<ManageListBackend>(`${this.api}/${data.id}`, body, options);
    }

    private dataFormatBody(data: ManageListBackend) {

        const newDataObj = JSON.stringify(data);

        return newDataObj;
    }
}