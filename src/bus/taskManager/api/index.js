export const api = {
    tasks: {
        getAll: async () => {
            return (await fetch('http://localhost:3000/tasks')).json();
        },
        switchStatus: async (id, isComplete) => {
            return (await fetch(
                `http://localhost:3000/tasks/${id}`,
                {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'isComplete': isComplete}),
                }
            )).json();
        }
    }
}