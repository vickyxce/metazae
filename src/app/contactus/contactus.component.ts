import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss', '../../assets/styles/style.css']
})
export class ContactusComponent implements OnInit {
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
