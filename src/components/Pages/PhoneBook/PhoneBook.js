import ContactList from "components/Pages/PhoneBook/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { InputForm } from "components/Pages/PhoneBook/InputForm/InputForm";
import { getLoading, getError } from "redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUrl } from "redux/contacts/operations";


export const PhoneBook = () => {
    const dispatch = useDispatch();
    useEffect(()=>{ dispatch(fetchUrl())
    },[dispatch])
     const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
    return (
        <div>
             <InputForm />
        <Filter />
        {isLoading && <b>Reqwest in process...</b>}
        {error && <b>Failed reqwest </b>}
        <ContactList/>
        </div>
       
    )
}
    
;