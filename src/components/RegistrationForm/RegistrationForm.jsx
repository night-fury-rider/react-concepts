import './registration-form.css';


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';

import TextError from './TextError';

const initialValues = {
  name: '',
  age: '',
  email: '',
  password: '',
  address: '',
  phoneNos: [1, 2],
  agreeCheck: ''
};

const savedValues = {

};

const onSubmit = (formData, submitProps) => {
  console.log('Form Data: ', formData);
  console.log('submitProps: ', submitProps);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is a required field bro'),
  age: Yup.number().required('Age is a required field man')
    .min(18, "Age must be more than 18")
    .max(60, "Age must be less than 60")
});

const RegistrationForm = () => {
  const [formData, setFormData] = useState('');

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount>

        {formik => {
          console.log('Formik Props: ', formik);
          return (

            < form className="g-3 registration-form-container" >
              <div className="row uv-centered-container">
                <div className="col-md-4">
                  <Field type="text" id="name" name="name" className="form-control" />
                  <ErrorMessage name="name" component={TextError} />
                  <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div className="col-md-4">
                  <Field type="number" id="age" name="age" className="form-control" step="0.5" />
                  <ErrorMessage name="age" component={TextError} />
                  <label htmlFor="age" className="form-label">Age</label>
                </div>
              </div>

              <div className="row uv-centered-container">
                <div className="col-md-4">

                  <input type="email" className="form-control" id="email" name="email" />
                  <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="col-md-4">

                  <input type="password" className="form-control" id="userPassword" name="userPassword" />
                  <label htmlFor="userPassword" className="form-label">Password</label>
                </div>
              </div>

              <div className="row uv-centered-container">
                <div className="col-md-4">

                  <textarea className="form-control" placeholder="Address" id="address" name="address"></textarea>
                  <label htmlFor="address">Address</label>
                </div>
                <div className="col-md-4">
                  {initialValues.phoneNos.map((obj, index) => (
                    <div key={index} className='phone-number-container'>
                      <Field type="number"
                        id={"phoneNos" + index}
                        name={"phoneNos" + index}
                        className="form-control phone-number" />
                      <ErrorMessage name={"name" + index} component={TextError} />
                      <FontAwesomeIcon icon={faTimesCircle} className="error row-delete" />
                      {index === initialValues.phoneNos.length - 1 &&
                        <FontAwesomeIcon icon={faPlusCircle} className='success row-add' />
                      }
                    </div>
                  ))
                  }
                  <label htmlFor={"phoneNos" + (initialValues.phoneNos.length - 1)}>Phone Numbers</label>
                </div>
              </div>

              <div className="row uv-centered-container">
                <div className="col-md-8">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="agreeCheck" name="agreeCheck" />
                    <label className="form-check-label" htmlFor="agreeCheck">
                      I agree
                    </label>
                  </div>
                </div>
              </div>

              <div className="row uv-centered-container">
                <div className="col-8 uv-centered-container">
                  <button type="submit" className="btn btn-primary"
                    disabled={!(formik.dirty && formik.isValid)}>Sign Up</button>
                </div>
              </div>
            </form>


          )
        }
        }
      </Formik>
    </>
  )
};

export default RegistrationForm;
