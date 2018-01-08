class _GlobalService {

    getResponseContent(response) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        }

        return response;
    }

    async getAsync(url) {
        const response = await window.fetch(url, {credentials: 'same-origin'});
        return this.getResponseContent(response);
    }

    async postAsync(url, data) {
        const response = await window.fetch(url,
            {
                credentials: 'same-origin',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
        return this.getResponseContent(response);
    }

    async deleteAsync(url) {
        const response = await window.fetch(url, {
            credentials: 'same-origin',
            method: 'DELETE'
        });
        return this.getResponseContent(response);
    }

}

const GlobalService = new _GlobalService();

export default GlobalService;