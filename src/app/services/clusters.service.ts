import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from '@firebase/util';
import { Cluster } from '../interfaces/clusters';

@Injectable()
export class ClustersService {

  constructor(
    private firebaseStore: AngularFirestore,
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) { }

  getClusters() {
    const userId = this.afAuth.auth.currentUser.uid;
    return this.firebaseStore.collection(`clusters`, ref => ref.where('userId', '==', userId)).valueChanges();
  }

  addCluster(cluster: Cluster) {
    return this.firebaseStore.collection(`clusters`).add({
      userId: this.afAuth.auth.currentUser.uid,
      url: cluster.url,
      token: cluster.token,
      name: cluster.name
    })
    .then(function(ref) {
      ref.update({ uid: ref.id });
    });
  }

  getCluster(uid: string) {
    const userId = this.afAuth.auth.currentUser.uid;
    return this.firebaseStore.collection(`clusters`, ref => ref.where('uid', '==', uid)).valueChanges();
  }

  removeCluster(uid: string) {
    return this.firebaseStore.collection(`clusters`).doc(uid).delete();
  }
}
