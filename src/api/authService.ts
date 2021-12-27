import axios from "axios";

// API_URL should be in ENV (not public) but for easier deploy and test I left in here
const API_URL = "https://60f94e4bee56ef0017975d22.mockapi.io/";

export const getAllEmployees = () => {
  return axios.get(API_URL + "employees");
};

export const addNewEmployee = (name: string) => {
  return axios.post(API_URL + `employees`, { name });
};

export const updateEmployeeState = (id: Number, stateName: string) => {
  return axios.put(API_URL + `employees/${id}`, { state: stateName });
};
