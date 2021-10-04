// --------------------------------------------------------------------------------------------------
import process from "../../.env";
import { Options } from "./interfaces";
import HEADERS from "../payment/headers";
// --------------------------------------------------------------------------------------------------
export default class FetchApp {
    // ----------------------------------------------------------------------------------------------
    static request(method, options: Options) {
        const headers = options?.headers ?? HEADERS;
        return { method, headers };
    };
    // ----------------------------------------------------------------------------------------------
    static get(url: string, options: Options = { verbose: false }) {
        const method = 'get';
        const params = this.request(method, options);

        this.verbose(options, { url });

        const response = UrlFetchApp.fetch(url, { ...params, muteHttpExceptions: options.verbose });
        const data: any = JSON.parse(response.getContentText());

        this.verbose(options, { data });

        return { ...data };
    }
    // ----------------------------------------------------------------------------------------------
    static post(url: string, payload: any, options: Options = { verbose: false }) {
        const request = this.request('post', options);
        const params = { ...request, payload: JSON.stringify(payload) };

        this.verbose(options, { url, payload });

        const response = UrlFetchApp.fetch(url, { ...params, muteHttpExceptions: options.verbose });
        const data: any = JSON.parse(response.getContentText());

        this.verbose(options, { data });

        return { ...data };
    }
    // ----------------------------------------------------------------------------------------------
    static remove(url: string, options: Options = { verbose: false }) {
        const params = this.request('delete', options);

        const response = UrlFetchApp.fetch(url, params);
        const data: any = JSON.parse(response.getContentText());

        this.verbose(options, { data });

        return { ...data };
    }
    // ----------------------------------------------------------------------------------------------
    private static verbose(options: Options = { verbose: false }, { url = null, payload = null, data = null }) {
        if (options.verbose) {
            if (url) console.log(url);
            if (payload) console.log(JSON.stringify((payload), null, process.env.LOG_LEVEL));
            if (data) console.log(JSON.stringify((data), null, process.env.LOG_LEVEL));
        }
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------