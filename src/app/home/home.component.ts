import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, of, } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';
import { FireserviceService } from '../fireservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../assets/styles/style.css', '../../assets/styles/font-awesome.min.css',]
})
export class HomeComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  message: string;
  alertText: string;
  statuscode: number = -1;
  constructor( public fireservice: FireserviceService) {
    this.name = "";
    this.email = "";
    this.subject = "";
    this.message = "";
    this.alertText = "";
  }

  ngOnInit(): void {
  }

  scroll(id: any): void {
    console.log(`scrolling to ${id}`);
    let el: any = '';
    el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  }


  contact_submit() {
    //let email: string = "1";
    //let name: string = "2";
    //let subject: string = "3";
    //let message: string = "4";
    console.log({
      "email": this.email,
      "name": this.name,
      "subject": this.subject,
      "message": this.message,
      "app": "W"
    });

    if (this.name == "" || this.email == "" || this.message == "" || this.subject == "") {
      this.setmessage(2, "");

      return;

    }
    if (this.email == "" || this.email.length < 3 || !(this.isValid(this.email))) {
      this.setmessage(3, "Please enter valid e-mail");
      return
    }
    this.fireservice.uploadmessage({
      "email" : this.email,
      "name"  : this.name,
      "subject": this.subject,
      "message": this.message,
      "app": "W"
    }).then(res=>{
      if (res.id != null){
        this.setmessage(1, "");
      }
    });
  }

  setmessage(status: number, message: string) {
    if (status == 2) {
      this.statuscode = 2;
      this.alertText = "Please fill complete details";
    }
    if (status == 1) {
      this.statuscode = 1;
      this.alertText = "Your message sent";
    }
    if (status == 3) {
      this.statuscode = 2;
      this.alertText = message;
    }
  }
  isValid(email:string) {
    var re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  }
}


/*
this.fireservice.uploadmessage({
  "email" : email,
  "name"  : name,
  "subject": subject,
  "message": message,
  "app": "W"
}).then(res=>console.log(res.id));
*/
/*

  sendPostRequest(data: any): Observable<any> {
let options = {
  //headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('access-control-allow-origin',"https://script.google.com/macros/s/AKfycbzgB7Z8SDTkeHZ72FIQOnexwoMAZAJ12CBcdGZopshPke4BnbfhZ2iIhLkJdJMz3SSM/exec")
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin':'*'})
};
return this.httpClient.post<any>('https://script.google.com/macros/s/AKfycbzgB7Z8SDTkeHZ72FIQOnexwoMAZAJ12CBcdGZopshPke4BnbfhZ2iIhLkJdJMz3SSM/exec', data, options);
}

const data$ = fromFetch('https://script.google.com/macros/s/AKfycbzgB7Z8SDTkeHZ72FIQOnexwoMAZAJ12CBcdGZopshPke4BnbfhZ2iIhLkJdJMz3SSM/exec',
{
  body: formdata,
  headers: {
    'Content-Type': 'undefined',
  },
  method: 'POST',
  mode: 'no-cors'
}).pipe(
switchMap(response => {
  if (response.ok) {
    console.log('ok');
    return response.json();
  } else {
    // Server is returning a status requiring the client to try something else.
    return of({ error: true, message: `Error ${response.status}` });
  }
}),
catchError(err => {
  // Network or other error, handle appropriately
  console.error(err);
  return of({ error: true, message: err.message })
})
);
*/
/*
 const result = from( // wrap the fetch in a from if you need an rxjs Observable
 fetch(
   'https://script.google.com/macros/s/AKfycbwuiQwSqCO3QM3b7J-oBCscOFCNOMos3-Gh_lxDB3bwS8pQFGktQNmbrp--Qs6aDrBP/exec',
   {
     body: formdata,
     headers: {
       'Content-Type': 'undefined',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
     },
     method: 'POST',
     //mode: 'no-cors'
   }
  )
 ).pipe();
 result.subscribe(response=>console.log(response)) ;
 */
/*
this.sendPostRequest(formdata).subscribe(
  res => {
    console.log(res);
  });
*/
