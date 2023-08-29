import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostService {
    error = new Subject<string>();

    constructor(
        private http: HttpClient
    ) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = {
            title: title,
            content: content
        };

        this.http
            .post<{ name: string }>(
                'https://ng-complete-guide-c2870-default-rtdb.firebaseio.com/posts.json', 
                postData,
                {
                    observe: 'response' //you can also use body
                }
            )
            .subscribe((responseData) => {
                console.log(responseData);
            }, 
            error => {
                this.error.next(error.message);
            });
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key'); // not real params
        
        return this.http
            .get<{ [key: string]: Post }>(
                'https://ng-complete-guide-c2870-default-rtdb.firebaseio.com/posts.json',
                {
                    headers: new HttpHeaders({'Custom-Header': "Hello"}),
                    params: searchParams, 
                    responseType: 'json'
                }
            )
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];

                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({...responseData[key], id: key})
                        }
                    }
                    
                    return postsArray;
                }),
                catchError(errorRes => {
                    //send to analytics server... not useful here
                    return throwError(errorRes);
                })
            )
    }

    deletePosts() {
        return this.http.delete(
            'https://ng-complete-guide-c2870-default-rtdb.firebaseio.com/posts.json',
            {
                observe: 'events',
                responseType: 'text' // you can do json
            }
        ).pipe(
            tap(event => {
                console.log(event);
                if (event.type === HttpEventType.Sent) {
                    //... you can separate what parts of the event type you want to show
                }
                if (event.type === HttpEventType.Response) {
                    console.log(event.body);
                }
            })
        );
    }
}