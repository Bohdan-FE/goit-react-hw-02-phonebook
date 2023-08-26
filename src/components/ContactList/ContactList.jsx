import { ContactListItem } from "components/ContactListItem/ContactListItem";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      <ContactListItem contacts={contacts} onDelete={onDelete}></ContactListItem>
    </ul>
  );
};
