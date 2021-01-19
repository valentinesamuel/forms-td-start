import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    userName: "",
    mail: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  }
  submittedForm = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue(
    //   {
    //     userData: {
    //       username: suggestedName,
    //       email: ''
    //     },
    //     secret: 'teacher',
    //     questionAnswer: '',
    //     gender: 'male'
    //   }
    // );
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit() {
    this.submittedForm = true;
    // console.log(this.submittedForm);

    this.user = {
      userName: this.signupForm.value.userData.username,
      mail: this.signupForm.value.userData.username,
      secretQuestion: this.signupForm.value.secret,
      answer: this.signupForm.value.questionAnswer,
      gender: this.signupForm.value.gender,
    }
  }

}
