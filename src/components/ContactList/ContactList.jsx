import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../../redux/actions";
import { useState, useEffect } from "react";

function ContactList() {
  const dispatch = useDispatch();
  const personList = useSelector((state) => state.contacts.items);
  const name = useSelector((state) => state.filters.name);
  const [personListFilter, setpersonListFilter] = useState(personList);

  useEffect(() => {
    setpersonListFilter(personList);
  }, [personList]);

  useEffect(() => {
    setpersonListFilter(
      personList.filter((person) => person.name.toLowerCase().includes(name))
    );
  }, [name]);

  const listItems = personListFilter.map((person) => (
    <Contact
      key={person.id}
      id={person.id}
      name={person.name}
      number={person.number}
      onDeleteItem={() => dispatch(deleteContact(person.id))}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default ContactList;
