import React, { useState } from 'react';

const EmployeeForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');

    // TODO Have separate useEffect for each items to render error message only for that
    // TODO Validate whole form onSubmit
    // TODO Append the form data to a global context after its validated

    return (
        <form className='container'>
            <div className='form-group mb-2'>
                <label for="firstNameInput">First Name</label>
                <input type='text' className='form-control' id='firstNameInputId' placeholder='First Name' />
            </div>
            <div className='form-group mb-2'>
                <label for="lastNameInput">Last Name</label>
                <input type='text' className='form-control' id='lastNameInputId' placeholder='Last Name' />
            </div>
            <div className='form-group mb-2'>
                <label for="emailInput">Email</label>
                <input type='email' className='form-control' id='emailInputId' placeholder='username@mail.com' />
            </div>
            <div className='form-group mb-2'>
                <label for="dobInput">Date of Birth</label>
                <input type='date' className='form-control' id='dobInputId' placeholder='01/01/1970' />
            </div>
            <div className='form-group mb-2'>
                <label for="genderInput">Gender</label>
                <select className='form-control' id='genderInputId'>
                    <option>Prefer not to say</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                </select>
            </div>
            <div className='form-group mb-2'>
                <label for="addressInput">Address</label>
                <input type='text' className='form-control' id='addressInputId' placeholder='' />
            </div>


            <div className='form-group mb-2'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>

        </form>
    );
}

export default EmployeeForm;
