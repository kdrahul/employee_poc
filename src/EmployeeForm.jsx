import React from 'react';

const EmployeeForm = () => {

    return (
        <form>
            <div className='form-group'>
                <label for="firstNameInput">First Name</label>
                <input type='text' className='form-control' id='firstNameInputId' placeholder='Enter your First Name' />
            </div>
            <div className='form-group'>
                <label for="firstNameInput">Last Name</label>
                <input type='text' className='form-control' id='lastNameInputId' placeholder='Last Name' />
            </div>
            <div className='form-group'>
                <label for="firstNameInput">Email</label>
                <input type='text' className='form-control' id='emailInputId' placeholder='username@mail.com' />
            </div>
            <div className='form-group'>
                <label for="firstNameInput">Date of Birth</label>
                <input type='text' className='form-control' id='dobInputId' placeholder='01/01/1970' />
            </div>
            <div className='form-group'>
                <label for="firstNameInput">Address</label>
                <input type='text' className='form-control' id='addressInputId' placeholder='' />
            </div>
        </form>
    );
}

export default EmployeeForm;
