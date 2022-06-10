import axios from 'axios';


export const fetchUsers = () => axios.get('http://localhost:5000/users');


export const fetchUserAccountsByUsername = (username) => axios.get(`http://localhost:5000/accounts?username=${username}`)
.then(response => {
    return response.data
})
.catch((error) => {
    console.log(error);
});

export const fetchUserProductsByUsername = (username) => axios.get(`http://localhost:5000/products?username=${username}`)
.then(response => {
    return response.data
})
.catch((error) => {
    console.log(error);
});

export const fetchUserPetsByUsername = (username) => axios.get(`http://localhost:5000/pets?username=${username}`)
.then(response => {
    return response.data
})
.catch((error) => {
    console.log(error);
});

export const fetchBookings = () => axios.get('http://localhost:5000/booking');

export const fetchBookingsByUsername = (username) => axios.get(`http://localhost:5000/booking?username=${username}`)
.then(response => {
    return response.data
})
.catch((error) => {
    console.log(error);
});

export const fetchTimesByDate = (date) => axios.get(`http://localhost:5000/days?date=${date}`)
.then(response => {
    return response.data
})
.catch((error) => {
    console.log(error);
});

export const fetchUserPets = () => axios.get(`http://localhost:5000/pets`);

export const fetchUserProducts = () => axios.get(`http://localhost:5000/products`);

export const fetchAccountMovements = (username) => axios.get(`http://localhost:5000/movements?username=${username}`)
.then(response => {
    return response.data
})
.catch((error) => {
    console.log(error);
});

export const fetchProductStockMovements = (username) => axios.get(`http://localhost:5000/stockmovements?username=${username}`)
.then(response => {
    return response.data
})
.catch((error) => {
    console.log(error);
});



