import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
	private products: Product[] = [];

	getProducts(): Observable<Product[]> {
		return Observable.from([this.products]);
	}
}



