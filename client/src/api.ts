import axios from "axios";
import type { Link } from "./types";

const api = axios.create({baseURL:"http://localhost:8000"});

export const fetchLinks = (params? : {search?:String,tag?:String})=> api.get<Link[]>("/links",{params});

export const addLink = (data:Omit<Link,"_id" | "createdAt">)=> api.post<Link>("/links",data);

export const updateLink = (id:String, data:Partial<Link>) => api.patch<Link>(`/links/${id}`,data);

export const deleteLink = (id:String) => api.delete<{message:String}>(`/links/${id}`);

