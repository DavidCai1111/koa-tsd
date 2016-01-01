import { EventEmitter } from 'events';
import * as http from 'http';
import { IContext } from './context';
import { IRequest } from './request';
import { IResponse } from './response';
export declare class Koa extends EventEmitter {
    keys: Array<string>;
    subdomainOffset: number;
    proxy: Boolean;
    server: http.Server;
    env: string;
    context: IContext;
    request: IRequest;
    response: IResponse;
    silent: Boolean;
    private middlewares;
    constructor();
    use(middleware: (ctx: IContext, next: Function) => any): Koa;
    callback(): (req: http.IncomingMessage, res: http.ServerResponse) => void;
    listen(port: number, callback?: Function): http.Server;
    toJSON(): any;
    inspect(): any;
    onerror(err: any): void;
    private createContext(req, res);
}
