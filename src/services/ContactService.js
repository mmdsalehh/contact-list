import http from "./httpService";

const ContactService = {
  getContacts: () => http.get("/contacts"),
  getContact: (id) => http.get(`/contacts/${id}`),
  addContact: (data) => http.post(`/contacts`, data),
  deleteContact: (id) => http.delete(`/contacts/${id}`),
  editContact: (id, data) => http.put(`/contacts/${id}`, data),
};

export default ContactService;
