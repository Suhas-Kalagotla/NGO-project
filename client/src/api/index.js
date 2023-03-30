import axios from 'axios'

const url = 'http://localhost:5000/requests';

export const fetchRequests =()=> axios.get(url); 

