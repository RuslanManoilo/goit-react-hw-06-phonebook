import { useDispatch } from "react-redux";
import { addContact } from "redux/slice";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorNotification, FormBtn, FormInput, FormLabel, FormWrapper } from "components/ContactForm/ContactForm.styled"; 


export const NewContactForm = () => {

    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}

            validationSchema={formSchema}

            onSubmit={(values, actions) => {
                dispatch(addContact(values));
                actions.resetForm();
            }}
        >
            <FormWrapper>
                <FormLabel htmlFor="contactFormikInput">Name</FormLabel>
                <FormInput
                    name="name"
                    id="contactFormikInput"
                    type="text"
                    
                />
                <ErrorNotification name="name" component="div" />

                <FormLabel htmlFor="contactFormikNumber">Number</FormLabel>
                <FormInput
                    name="number"
                    id="contactFormikNumber"
                    type="tel"
                    />
                <ErrorNotification name="number" component="div" />

                <FormBtn type="submit">Add contact</FormBtn>
            </FormWrapper>
        </Formik>
    );
};

const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .required('This field is required!'),
    number: Yup.string()
        .min(4, 'Too Short!')
        .required('This field is required!'),
});