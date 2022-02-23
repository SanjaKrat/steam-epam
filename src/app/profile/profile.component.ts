import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user';
import { UsersService } from '../services/users/users.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User = {id: '', username: ''};
  email: string = '';
  

  profileForm: FormGroup = new FormGroup({});

  constructor( 
    private userService: UsersService,
    private db: AngularFirestore) { 
      this.profileForm = new FormGroup({
        username: new FormControl(''),
        email: new FormControl(''),
        age: new FormControl(''),
      })
      
  }

  ngOnInit(): void {
    this.email = this.userService.getEmail();
    // this.userService.getUsers()
    //   .subscribe(users => {
    //     users.filter(user => {
    //       if(user.email === this.email) {
    //         this.currentUser = user;
            
    //         this.profileForm.patchValue({
    //           username: user.username,
    //           email: user.email,
    //           age: user.age
    //         })
    //       }
    //     })
    //   });
  }

  onSubmit(): void {
    console.log('update user profile');
    this.currentUser.username = this.profileForm.value.username;
    this.currentUser.email = this.profileForm.value.email;
    this.currentUser.age = this.profileForm.value.age;

      
      this.db.collection('users')
        .doc(this.currentUser.id)
        .set(this.currentUser, {merge: true})
  }
}
