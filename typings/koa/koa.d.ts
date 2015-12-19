// Type definitions for Koa 1.x
// Project: http://koajs.com
// Definitions by: DavidCai1993 <https://github.com/DavidCai1993/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================

    import * as Koa from "Koa";
    const app = Koa();

 =============================================== */

/// <reference path="../node/node.d.ts" />

declare module 'Koa' {
  import * as http from 'http'
  import * as net from 'net'

  interface IContext {
    onerror: Function
    inspect(): Object
    toJSON(): Object
    assert(): void

    throw(code: number, message: string)
    throw(code: number, error: Error)
    throw(message: string, code: number)
    throw(error: Error, code: number)
    throw(code: number)
    throw(message: string)
    throw(error: Error)
  }

  interface IRequest {
    header(): Object
    headers(): Object
    method(): string
    method(method: string): void
    length(): any // undefined
    url(): string
    url(url: string): void
    originalUrl(): string
    href(): string
    path(): string
    path(url: string): void
    querystring(): string
    querystring(querystring: string): void
    search(): string
    search(search: string): void
    host(): string
    hostname(): string
    type(): string
    charset(): any // undefined
    query(): Object
    query(query: Object): void
    fresh(): Boolean
    stale(): Boolean
    protocol(): string
    secure(): Boolean
    ip(): string
    ips(): Array<string>
    subdomains(): Array<string>
    is(): any // undefined
    accepts(type: string): Boolean // muti
    accepts(types: Array<string>): any // muti
    acceptsEncodings(encodings: Array<string>): any // muti
    acceptsEncodings(...encodings: Array<string>): any // muti
    acceptsCharsets(encodings: Array<string>): any // muti
    acceptsCharsets(...encodings: Array<string>): any // muti
    acceptsLanguages(encodings: Array<string>): any // muti
    acceptsLanguages(...encodings: Array<string>): any // muti
    idempotent(): Boolean
    socket(): net.Socket
    get(): any // undefined
  }

  interface IResponse {
    header(): Object
    headers(): Object
    status(): number
    status(statusCode: number): void
    message(): string
    message(message: string): void
    length(): any // undefined
    length(length: number): void
    body(): any // TODO mixed {String|Buffer|Object|Stream}
    body(body: any): void // TODO mixed {String|Buffer|Object|Stream}
    get(): any // undefined
    set(field: any, val: string): void // TODO mixed  {String|Object|Array} field
    set(fields: Object): void
    removeHeader(field: string): void
    type(): string
    type(type: string): void
    is(types: any): any // TODO mixed {String|Array} types... @return {String|false}
    redirect(url: string, alt: string): void
    attachment(filename?: string): void
    headerSent(): Boolean
    lastModified(): any // undefined
    lastModified(date: any): void // TODO mixed {String|Date} type
    etag(etag: string): void
    vary(field): void
  }

  module koa {
    // TODO complete
    export function use(middleware: Function)
    export function listen(port: number, callback?: Function)
  }
}
