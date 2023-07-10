import axios from "axios";

export class SrvDnsClient {
    constructor(timeout = 5000) {
        const headers = { "Accept": "application/dns-json" };
        const baseURL = "https://cloudflare-dns.com";

        this.client = axios.create({ baseURL, timeout, headers });
    }

    async query(name) {
        const type = 33;
        const params = { name, type };
        return this.client.get("dns-query", { params }).then((resp) => resp.data);
    }
}
