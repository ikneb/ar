import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
	private users: User[] = [];

	getUsers(): Observable<User[]> {
		return Observable.from([this.users]);
	}
}



