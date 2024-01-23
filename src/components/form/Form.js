import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Link } from 'react-router-dom';

import './form.scss'

import useMarvelService from '../../services/MarvelService';
import { useState } from 'react';

const CustomForm = () => {

    const [chars, setChars] = useState([1]);
    
    const {getAllCharacters} = useMarvelService();  

    console.log(chars)

    return (


        <div className="form__wrapper">
            <div className="form__title">Or find a character by name:</div>
            <Formik
                initialValues={{name: ''}}
                validate={values => {
                    const errors = {};

                    if (values.name.length < 5) {
                        errors.name = 'Миннимальная длина 5 символов';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values.name)
                    let inputValue = new RegExp(values.name);

                    getAllCharacters(100)
                        .then(res => {
                            console.log('request!')
                            setSubmitting(false)
                            setChars(res.filter((char) => char.name.match(inputValue)))
                        })
                        .catch(res => {
                            console.log('error')
                            setSubmitting(false)
                        })
                        

                }}>

                {({isSubmitting}) => (
                    <>
                    <Form style={{display: 'flex'}} className='form' action="">
                        <div>
                            <Field name='name' type="text" />
                            <ErrorMessage name='name' component='div' style={{color: '#9F0013', marginTop: '10px'}} />
                        </div>

                        <button type='submit' style={{backgroundColor: isSubmitting ? '#58020c' : '#9F0013'}} disabled={isSubmitting}>
                            FIND
                        </button>  
                    </Form>
                    {typeof(chars[0]) === 'undefined' ? <div style={{color: '#9F0013', marginTop: '25px'}}>The character was not found. Check the name and try again</div> : null}
                    {typeof(chars[0]) === 'object' ? <div className='form__toChar' style={{color:'#03710E', marginTop: '25px'}}>
                            <div>There is! Visit {chars[0].name} page?</div>
                            <Link to={`/heroes/${chars[0].id}`} className="form__link">TO PAGE</Link>
                        </div> : null}
                    </>
                    
                )}
            </Formik>
        </div>
    )
}

export default CustomForm;