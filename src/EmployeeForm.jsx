import React, {  useContext, useState } from 'react';
import { DataContext } from './Context';
import bootstrap from 'bootstrap/dist/js/bootstrap';

const EmployeeForm = () => {

    const dataContext = useContext(DataContext);
    const employee = {
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        address: '',
    };

    const [values, setValues] = useState(employee);

    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState({});

    const validateForm = () => {
        const err = {}
        const val = {}

        if(values.firstName === '') {
            val.firstName = 'is-invalid';
            err.firstName = 'Please provide your first name!';
        } else {
            val.firstName = 'is-valid';
        }
        if(values.lastName === '') {
            val.lastName = 'is-invalid';
            err.lastName = 'Please provide your last name!';
        } else {
            val.lastName = 'is-valid';
        }
        if(values.email === '') {
            val.email = 'is-invalid';
            err.email = 'How do we contact you?';
        } else {
            val.email = 'is-valid';
        }
        if(values.gender === '') {
            val.gender = 'is-invalid';
            err.gender = 'How do we address you?';
        } else {
            val.gender = 'is-valid';
        }
        if(values.address === '' ) {
            val.address = 'is-invalid';
            err.address = "Tell us where you're from";
        } else {
            val.address = 'is-valid';
        }
        if(values.dob === '') {
            val.dob = 'is-invalid';
            err.dob = 'Tell us when you were born!';
        } else {
            val.dob = 'is-valid';
        }

        setErrors({...err});
        setValid({...val});

        console.table(errors);
        console.table(valid);

        if(Object.keys(err).length > 0){
            return false
        }

        return true;
    }

    const onBlurHandler = (e) => {
        setValues(() => ({
            ...values,
            [e.target.name]: e.target.value
        }))
        // console.table(values);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(validateForm() === true && values.firstName !== null) {
            dataContext.push(values);
            setValid({});
            setValues(employee);
            // setErrors({});
            document.getElementById('employeeForm').reset();
            console.table(dataContext);

            const toastTrigger = document.getElementById('submitButton')
            const toastLiveExample = document.getElementById('liveToast')

            if (toastTrigger) {
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                toastTrigger.addEventListener('click', () => {
                    toastBootstrap.show()
                })
            }
        }

    }


    return (
        <form id='employeeForm' onSubmit={onSubmitHandler} className='my-2 mx-4' style={{width: "720px"}}>
            <div className='form-group mb-2'>
                <label htmlFor="firstNameInput">First Name</label>
                <input type='text' name='firstName' className={'form-control ' + valid.firstName} id='firstNameInputId' placeholder='First Name' onBlur={onBlurHandler} aria-describedby='firstnameFeedback'  />
                <span id='firstnameFeedback' className='invalid-feedback'>{errors.firstName}</span>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor="lastNameInput">Last Name</label>
                <input type='text' name='lastName' className={'form-control ' + valid.lastName} id='lastNameInputId' placeholder='Last Name' onBlur={onBlurHandler} aria-describedby='lastNameFeedback'  />
                <span id="lastNameFeedback" className='invalid-feedback'>{errors.lastName}</span>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor="emailInput">Email</label>
                <input type='email' name='email' className={'form-control ' + valid.email} id='emailInputId' placeholder='username@mail.com' onBlur={onBlurHandler} aria-describedby='emailFeedback'  />
                <span id="emailFeedback" className='invalid-feedback'>{errors.email}</span>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor="dobInput">Date of Birth</label>
                <input type='date' name='dob' className={'form-control ' + valid.dob} id='dobInputId' placeholder='01/01/1970' onBlur={onBlurHandler} aria-describedby='dobFeedback'  />
                <span id="dobFeedback" className='invalid-feedback'>{errors.dob}</span>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor="genderInput">Gender</label>
                <select name='gender' className={'form-control ' + valid.gender} id='genderInputId' onBlur={onBlurHandler} aria-describedby='genderFeedback'  >
                    <option value="">Select an option...</option>
                    <option value="male">Mr. (Male)</option>
                    <option value="female">Ms./Mrs. (Female)</option>
                    <option value="others">Others</option>
                </select>
                <span id="genderFeedback" className='invalid-feedback'>{errors.gender}</span>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor="addressInput">Address</label>
                <input type='text' name='address' className={'form-control ' + valid.address} id='addressInputId' placeholder='Bengaluru,India' onBlur={onBlurHandler} aria-describedby='addressFeedback'   />
                <span id="addressFeedback" className='invalid-feedback'>{errors.address}</span>
            </div>


            <div className='form-group mb-2 d-grid'>
                <button type='submit' id='submitButton' className='btn btn-primary' onClick={(e) => {console.log(e)}}>Submit</button>
            </div>
            <div className="toast-container position-fixed top-0 end-0 p-3">
              <div id="liveToast" className="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="d-flex">
                    <div className="toast-body">
                      Employee Record Saved
                    </div>
                    <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                  </div>
              </div>
            </div>


        </form>
    );
}

export default EmployeeForm;
