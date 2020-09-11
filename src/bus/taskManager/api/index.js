export const api = {
    tasks: {
        getAll: async () => {
            return (await fetch('http://localhost:3000/tasks'));
        },
        switchStatus: async (id, isComplete) => {
            return fetch(
                `http://localhost:3000/tasks/update/${id}`,
                {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'isComplete': isComplete}),
                }
            );
        },
        create: async (title) => {
            return (await fetch(
                `http://localhost:3000/tasks/create`,
                {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'title': title}),
                }
            )).json();
        },
        delete: async (id) => {
            return (await fetch(
                `http://localhost:3000/tasks/delete/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {'Content-Type': 'application/json'},
                }
            )).json();
        }
    }
}