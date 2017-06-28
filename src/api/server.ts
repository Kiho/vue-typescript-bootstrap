declare var process;
const index_html = '/index.html';
// USE this when serve API with webpackDevServer on port 8087
// export const SERVER_URL = process.env.NODE == 'development' ? 'http://localhost:8087' : '.';
export const SERVER_URL = '.';
export const BASE_URL = SERVER_URL || 'http://localhost:8087';
export const API_URL = BASE_URL + '/api/';

console.log('BASE_URL: ', BASE_URL);

function getBaseURL() {
    const href = document.location.href.toLowerCase();
    const p = href.indexOf(index_html);
    const url = href.substring(0, p);
    return url;
}

const headers: any = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    // 'OPTIONS': '' // Does not work with CORS
};

function getTimestamp() {
    return 't=' + new Date().getTime();
}

export function postLogin(path, data) {
    return fetch(BASE_URL + path, {
        method: 'post',
        body: data
    })
    .then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
}

export function post(path, data) {
    const url = API_URL + path + '/' + (data.id > 0 ? data.id : '');
    const method = (data.id > 0) ? 'put' : 'post';
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify({data: data})
    }).then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server\n' + response.status + ' - ' + response.statusText);
            }
            return response.json();
        });
}

export function remove(path, id) {
    const url = API_URL + path + '/' + id;
    return fetch(url, {
        method: 'delete',
        headers: headers,
    }).then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
}

export function getList(path, p?) {
    let url = API_URL + path + "/?" + getTimestamp();
    if (p) url += "&page=" + p.page + "&size=" + p.size + "&sortby=" + p.colName + "&direction=" + p.direction;
    return fetch(url, {
        method: 'get',
        headers: headers,
    }).then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
}

export function runQuery(path, name, parameters) {   
    const url = API_URL + path + "/query/?name=" + name;
    const data = parameters ? JSON.stringify(parameters) : null;
    return fetch(url, {
        method: 'post',
        headers: headers,
        body: data,
    }).then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
}

export function getById(path, id) {
    const url = API_URL + path + '/' + id + "/?" + getTimestamp();
    return fetch(url, {
        method: 'get',
        headers: headers,
    }).then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
}

export function getNextNum(path, field) {
    const url = API_URL + path + "/nextnum?" + getTimestamp() + "&field=" + field;
    return fetch(url, {
        method: 'get',
        headers: headers,
    }).then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
}

export const doFetch = (url: string): Promise<any> => {
    return fetch(url, {
        method: 'get',
        headers: headers,
    }).then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        });
};
