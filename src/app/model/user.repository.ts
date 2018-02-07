import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class UserRepository {
    private Users: User[] = [];
    private categories: string[] = [];
    constructor(private dataSource: StaticDataSource) {
        dataSource.getUsers().subscribe(data => {
            this.Users = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }
    getUsers(category: string = null): User[] {
        return this.Users
            .filter(p => category == null || category == p.category);
    }
    getUser(id: number): User {
        return this.Users.find(p => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}
