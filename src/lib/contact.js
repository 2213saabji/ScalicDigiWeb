// Business contact details — replace the [placeholders] and every page updates.
export const contact = {
  email: "[hello@scalicdigital.com]",
  phone: "[+91 PHONE NUMBER]",
  whatsapp: "[WhatsApp number]",
  hours: "[Mon–Sat, 10 AM – 7 PM]",
  address: "[Office address, City, State, PIN]",
  responseTime: "[X hours]",
};

const digits = (value) => value.replace(/[^\d+]/g, "");

export const contactLinks = {
  email: `mailto:${contact.email}`,
  phone: `tel:${digits(contact.phone)}`,
  whatsapp: `https://wa.me/${digits(contact.whatsapp).replace("+", "")}`,
};
