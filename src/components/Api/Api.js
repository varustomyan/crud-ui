export default class Api {

    static async getAllUsers() {

        return fetch(`http://178.128.196.163:3000/api/records/`)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    }

    static async deleteUser(id) {

        return fetch(`http://178.128.196.163:3000/api/records/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .catch(error => console.log('error', error));
    }

    static async editUser(data, id) {

        return fetch(`http://178.128.196.163:3000/api/records/${id}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
            body: JSON.stringify({ data }),
        })
            .then(response => response.json())
            .catch(error => console.log('error', error));
    }
}


