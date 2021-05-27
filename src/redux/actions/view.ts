export const error = (hasError: boolean, errorMessege: string) => {
    return {
        type: 'ERROR',
        payload: { hasError, errorMessege }
    };
};

export const succes = (hasSucces: boolean, successMessege: string) => {
    return {
        type: 'SUCCESS',
        payload: { hasSucces, successMessege }
    };
};