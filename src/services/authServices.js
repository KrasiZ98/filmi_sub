import { USERS_API_BASE_URL } from "../api/api";

export async function register(user) {
    try {
        const response = await fetch(USERS_API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

    } catch (error) {
        console.error('Error from user regiister requsest:', error);
        return error;
    }
}

export async function udpate(userId, user) {
    try {
        const response = await fetch(`${USERS_API_BASE_URL}/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

    } catch (error) {
        console.error('Error from user regiister requsest:', error);
        return error;
    }
}

export async function remove(iserId) {
    try {
        const response = await fetch(`${USERS_API_BASE_URL}/${iserId}`, {
            method: "DELETE",
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

    } catch (error) {
        console.error('Error from user regiister requsest:', error);
        return error;
    }
}