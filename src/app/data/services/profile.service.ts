import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProfile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http:HttpClient=inject(HttpClient) //запрашиваем у Angular сущность HttpClient, чтобы запросить данные с сервера
  baseApiUrl:string='https:/icherniakov.ru/yt-course/account';
  constructor() {}

  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}/test_accounts`);
  }
}
