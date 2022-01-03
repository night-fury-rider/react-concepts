import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

import './registration-form.css';
import rData from './registration-form.json';
import UVToastWrapper from '../Core/UVToast/UVToastWrapper';

const initialValues = {
  name: '',
  age: '',
  email: '',
  password: '',
  address: '',
  phoneNos: [1, 2],
  agreeCheck: ''
};

const onSubmit = (formData, submitProps) => {
  console.log('Form Data: ', formData);
  console.log('submitProps: ', submitProps);
};

const validationSchema = Yup.object({
  name: Yup.string().required(rData.name.required)
    .matches('^[a-zA-Z]+$', rData.name.alphabet),
  age: Yup.number().required(rData.age.required)
    .min(rData.age.minValue, rData.age.minValueError + rData.age.minValue)
    .max(rData.age.maxValue, rData.age.maxValueError + rData.age.maxValue)
    .integer(rData.age.integer)
});

const RegistrationForm = () => {

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={true}
        validateOnMount>

        {formik => {
          return (

            < form className="g-3 registration-form-container" >

              <article >
                <header className='uv-header uv-centered-container'>
                  <h1>{rData.title}</h1>
                </header>
              </article>

              <article className="row uv-centered-container">
                <UVToastWrapper
                  title={rData.errorsTitle}
                  width={"65%"}
                  errors={formik.errors}
                  touched={formik.touched}
                />
              </article>
              <div className="row uv-centered-container">
                <div className="col-md-4">
                  <Field type="text" id="name" name="name" className="form-control" />

                  <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div className="col-md-4">
                  <Field type="number"
                    id="age"
                    name="age"
                    className="form-control"
                    step="1" />
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
