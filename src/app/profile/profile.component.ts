import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UsersService } from '../services/users/users.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User = {id: '', username: ''};
  email: string = '';
  updated: boolean;
  message: string = '';
  profileForm: FormGroup = new FormGroup({});

  constructor(private userService: UsersService) { 
    this.profileForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(''),
    })
    this.updated = false;
  }

  ngOnInit(): void {
    this.email = this.userService.getEmail();
    this.userService.getUserList().subscribe(res => {
      let users = res.map(u => {
        return u.payload.doc.data() as User;
      })
    this.currentUser = users.filter((user: User) => user.email === this.email)[0];
    
    this.profileForm = new FormGroup({
      username: new FormControl(this.currentUser.username, Validators.compose([
        Validators.required
      ])),
      email: new FormControl(this.currentUser.email, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      age: new FormControl(this.currentUser.age, Validators.compose([
        Validators.required
      ])),
    });
  })
  }

  onSubmit(): void {
    console.log('update user profile');
    
    if (this.profileForm.valid){
      this.currentUser.username = this.profileForm.value.username;
      this.currentUser.email = this.profileForm.value.email;
      this.currentUser.age = this.profileForm.value.age;
      this.userService.updateUser(this.currentUser, this.currentUser.id);
      this.updated = true;
      this.message = 'Profile updated';
    } else {
      this.updated = false;
      this.message = 'Failed to update profile. Check that the data is correct.'
    }
  }
}
