import * as http from 'http';
import { IRequest } from './request';
import { IResponse } from './response';
import { Koa } from './application';
export interface IContext extends IRequest, IResponse {
    body?: any;
    request?: IRequest;
    response?: IResponse;
    originalUrl?: string;
    state?: any;
    name?: string;
    cookies?: any;
    writable?: Boolean;
    respond?: Boolean;
    app?: Koa;
    req?: http.IncomingMessage;
    res?: http.ServerResponse;
    onerror(err: any): void;
    toJSON(): any;
    inspect(): any;
    throw(): void;
    assert(): void;
}
export declare const koaContext: IContext;
