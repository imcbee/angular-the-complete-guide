import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerSolver implements Resolve<{id: number, name: string, status: string}> {

    constructor(private serverService: ServersService) {}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
            return this.serverService.getServer(+route.params['id']);
    }
}