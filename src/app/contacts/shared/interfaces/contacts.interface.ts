export interface Contact extends ContactForm {
  id: string;
}

export interface ContactForm {
  fullName: string;
  email: string;
  phoneNumber: string;
  description?: string;
}
