import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.css']
})
export class CompteClientComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  public user : User = new User("","","",0,"","","","","","","","")
  constructor(private formBuilder: FormBuilder,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.user = this.userService.user;
  }

    initForm(){
        this.userForm = this.formBuilder.group({
        NOM: ['',Validators.required],
        PRENOM: ['',Validators.required],
        ADRESSE: ['',Validators.required],
        CP: ['',Validators.required],
        VILLE: ['',Validators.required],
        TEL: ['',Validators.required],
        EMAIL: ['',[Validators.required,Validators.email]],
        CIVILITE: ['',Validators.required],
        PASSWORD: ['',Validators.required],
        PASSWORDCONFIRM: ['',Validators.required],
        LOGIN: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
        PAYS: ['',Validators.required]

      });
      
    }

  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['NOM'],
      formValue['PRENOM'],
      formValue['ADRESSE'],
      formValue['CP'],
      formValue['VILLE'],
      formValue['TEL'],
      formValue['EMAIL'],
      formValue['CIVILITE'],
      formValue['PASSWORD'],
      formValue['PASSWORDCONFIRM'],
      formValue['LOGIN'],
      formValue['PAYS']
    );
    if(newUser.PASSWORD == newUser.PASSWORDCONFIRM){
      this.userService.inSignin(newUser);
      this.router.navigate(['/compte-client']);  
  }
}
}
