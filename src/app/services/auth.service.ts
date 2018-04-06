import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firebaseStore: AngularFirestore,
    private router: Router
  ) {
    this.user = this.firebaseAuth.authState
    .switchMap(user => {
      if (user) {
        return this.firebaseStore.doc<firebase.User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((credential) => {
      this.updateUserData(credential.user);
      this.router.navigate(['/dashboard']);
    });
  }

  logout() {
    this.firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.firebaseStore.doc(`users/${user.uid}`);
    return userRef.set({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    });
  }

}
