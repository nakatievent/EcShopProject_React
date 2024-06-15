// import axios from "axios";
import { api } from "lib/appClient";
import { User, ResponseJson } from "types/User";

const getCsrfToken = async () => {
  await api.get('/sanctum/csrf-cookie')
}

const getUser = async () => {
  const { data } = await api.get<User>('api/user')
  return data
}

const login = async ({ email, password }: { email: string, password: string }) => {
  const { data } = await api.post<ResponseJson>('/api/login', { email, password })
  return data
}

const logout = async () => {
  const { data } = await api.get<User>('api/logout')
  return data
}

export {
  getCsrfToken,
  getUser,
  login,
  logout
}
