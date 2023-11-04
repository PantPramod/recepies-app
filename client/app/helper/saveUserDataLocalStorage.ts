type inputType = {
    name: string,
    email: string,
    _id: string
}

export const saveUserDataLocalStorage = (data: inputType) => {
    localStorage.setItem('name', data?.name);
    localStorage.setItem('email', data?.email);
    localStorage.setItem('_id', data?._id)
}