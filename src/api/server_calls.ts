// TODO: Dynamic token research

const token = '72e50e3509df16e45a1bb749f2388abb472644f811b6f181'

export const server_calls = {
    get: async () => {
        const response = await fetch('https://ninth-mature-sarahsaurus.glitch.me/api/services',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://ninth-mature-sarahsaurus.glitch.me',
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server.')
        }

        return await response.json()
    },

    create: async (data: any = {} ) => {
        const response = await fetch(`https://ninth-mature-sarahsaurus.glitch.me/api/services`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://ninth-mature-sarahsaurus.glitch.me',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server.')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://ninth-mature-sarahsaurus.glitch.me/api/services/${id}`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://ninth-mature-sarahsaurus.glitch.me'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error(`Failed to update ${id} data on server.`)
        }

        return await response.json()
    },
    
    delete: async (id:string) => {
        const response = await fetch(`https://ninth-mature-sarahsaurus.glitch.me/api/services/${id}`,
        {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': 'https://ninth-mature-sarahsaurus.glitch.me',
            }
        })

        if (!response.ok){
            throw new Error(`Failed to delete data on server.`),
            console.log(`${id}`)
        }

        return;
    },
}