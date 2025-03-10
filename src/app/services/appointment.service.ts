import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  //private apiUrl = 'https://7ad5-177-228-34-46.ngrok-free.app/Appointment';

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  //headers = new HttpHeaders({'ngrok-skip-browser-warning':'true','Access-Control-Allow-Origin':'*'});
  headers = new HttpHeaders({'ngrok-skip-browser-warning':'true'});
  //headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  //'ngrok-skip-browser-warning':  '69420'
  //headers.set('Content-Type', 'application/json; charset=utf-8');
// ,{headers: this.headers}
  constructor(private http: HttpClient) { }

    getAppointment(id: number): Observable<any> {
      return this.http.get(`${this.apiUrl}`).pipe(catchError(this.handleError));
    } 

   /*  getAppointment(id: number): Observable<any> {
      return this.http.get(`${this.apiUrl}/${id}`,{headers:this.headers}).pipe(catchError(this.handleError));
      return this.http.get(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
    }  */

    private handleError(error: HttpErrorResponse) {
      if (error.status === 200 && error.error instanceof SyntaxError) {
        // Handle unexpected HTML response
        console.error('Unexpected response format:', error.error);
      } else {
        console.error('An error occurred:', error);
      }
      return throwError('Something bad happened; please try again later.');
    }
}
