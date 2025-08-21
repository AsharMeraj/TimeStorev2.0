
export const makePaymentRequest = async (endpoint: string, payload: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`HTTP error! status: ${res.status}, message: ${errorData.error}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error in makePaymentRequest:", error);
        throw error;
    }
};
