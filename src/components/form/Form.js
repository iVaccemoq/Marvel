import { Formik, Form, Field, ErrorMessage } from 'formik';

import './form.scss'
import { useEffect } from 'react';

const CustomForm = () => {
    return (

        <div className="form__wrapper">
            <div className="form__title">Or find a character by name:</div>
            <Formik
                initialValues={{name: ''}}
                validate={values => {
                    const errors = {};

                    if (values.name.length < 3) {
                        errors.name = 'Миннимальная длина 3 символа';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);

                    

                  }}>
                {({isSubmitting}) => (
                    <Form style={{display: 'flex'}} className='form' action="">
                        <div>
                            <Field name='name' type="text" />
                            <ErrorMessage name='name' component='div'/>
                        </div>
                        <button type='submit' disabled={isSubmitting}>Find</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CustomForm;