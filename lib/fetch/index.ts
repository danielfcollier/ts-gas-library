// --------------------------------------------------------------------------------------------------
import process from "../../.env";
import { Options } from "./interfaces";
import HEADERS from "./config";
// --------------------------------------------------------------------------------------------------
export default class FetchApp {
    // ----------------------------------------------------------------------------------------------
    static request(method, options: Options) {
        const headers = options?.headers ?? HEADERS;
        return { method, headers };
    };
    // ----------------------------------------------------------------------------------------------
    static verbose(options: Options, output: any) {
        if (options.verbose) {
            console.log(JSON.stringify((output), null, process.env.LOG_LEVEL));
        }
    }
    // ----------------------------------------------------------------------------------------------
    static get(url: string, options: Options = { verbose: false }) {
        const method = 'get';
        const params = this.request(method, options);

        const response = UrlFetchApp.fetch(url, { ...params, muteHttpExceptions: options.verbose });
        const data: any = JSON.parse(response.getContentText());

        this.verbose(options, response);

        return data;
    }
    // ----------------------------------------------------------------------------------------------
    static post(url: string, payload: any, options: Options = { verbose: false }) {
        const request = this.request('post', options);
        const params = { ...request, payload: JSON.stringify(payload) };

        this.verbose(options, payload);

        const response = UrlFetchApp.fetch(url, { ...params, muteHttpExceptions: options.verbose });
        const data: any = JSON.parse(response.getContentText());

        this.verbose(options, data);

        return data;
    }
    // ----------------------------------------------------------------------------------------------
    static remove(url: string, options: Options = { verbose: false }) {
        const params = this.request('delete', options);

        const response = UrlFetchApp.fetch(url, params);
        const data: any = JSON.parse(response.getContentText());

        this.verbose(options, data);

        return data;
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------