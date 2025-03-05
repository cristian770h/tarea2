import { genericRequest } from "@/utils/genericRequest";

const Url='http://localhost:3000';




export const getItems = async () => {
  return await genericRequest(Url + '/items', 'GET')
}

export const getItem = async (id: number) => {
  return await genericRequest(Url + '/items/'+id, 'GET')
}


export const createItems = async (name:string, description:string) => {
  return await genericRequest(Url + '/items', 'POST', {name, description})
}


export const updateItems = async (id: number, newItem: string) => {
  return await genericRequest(Url + '/items/'+id, 'PUT', newItem)
}

export const deleteItemById = async (id: number) => {
  return await genericRequest(Url + '/items/'+id, 'DELETE')
}

export const deleteAllItems = async () => {
  return await genericRequest(Url + '/items', 'DELETE')
}

