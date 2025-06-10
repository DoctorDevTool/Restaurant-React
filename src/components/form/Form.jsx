import './form.css'
const Form = () => {
    return (
        <div className='page-body'>
            <header className='page__header'>
                <h1 className='page__title'>
                    <span className='page__hero'>"DaVinci"</span>
                    <br />
                    Reservation Form
                </h1>
                <p>Please, check all the fields below</p>
            </header>
            <main className='page__main'>
                <form action='#!' className='form'>
                    {/* First fieldset */}
                    <fieldset className='form__contacts'>
                        <legend>Contact details</legend>
                        {/* name */}
                        <div className='groups'>
                            <label className='align-text' htmlFor='name'>
                                Your name:
                                <input
                                    className='contact-inputs'
                                    name='name'
                                    id='name'
                                    type='text'
                                    placeholder='John Doe'
                                    required
                                />
                            </label>
                        </div>
                        {/* email */}
                        <div className='groups'>
                            <label className='align-text' htmlFor='email'>
                                Your email:
                                <input
                                    className='contact-inputs'
                                    name='email'
                                    id='email'
                                    type='email'
                                    placeholder='example@mail.com'
                                    required
                                />
                            </label>
                        </div>
                        {/* guests */}
                        <div className='groups'>
                            <label className='align-text' htmlFor='number'>
                                Number of guests:
                                <input
                                    className='contact-inputs'
                                    name='number'
                                    id='number'
                                    type='number'
                                    min='2'
                                    max='15'
                                    placeholder='up to 15 people (min2)'
                                    required
                                />
                            </label>
                        </div>
                    </fieldset>
                    {/* Second fieldset */}
                    <fieldset className='form__res-details'>
                        <legend>Reservation details</legend>
                        {/* area */}
                        <div className='groups'>
                            <label>
                                Which area would you like to be seated?
                                <select className='contact-inputs' defaultValue='select one' id='select' required>
                                    <option disabled value='select one'>
                                        Select one
                                    </option>
                                    <option value='restaurant'>
                                        Restaurant
                                    </option>
                                    <option value='patio'>Patio</option>
                                    <option value='launge'>Launge</option>
                                </select>
                            </label>
                        </div>
                        {/* kids area */}
                        <div className='groups'>
                            <p>Would you like to reserve a kids area also?</p>
                            <div className='selection-wrapper'>
                                <label className='selection-label'>
                                    Yes
                                    <input
                                        className='inline'
                                        type='radio'
                                        value='1'
                                        name='kids-area'
                                    />
                                </label>
                                <label className='selection-label'>
                                    No
                                    <input
                                        className='inline'
                                        type='radio'
                                        value='2'
                                        name='kids-area'
                                        defaultChecked
                                    />
                                </label>
                            </div>
                        </div>
                        {/* alergies */}
                        <div className='groups'>
                            <p>If there are any alergies, please, select:</p>
                            <div className='selection-wrapper'>
                                <label className='selection-label'>
                                    <input
                                        className='inline'
                                        name='alergies'
                                        value='eggs'
                                        type='checkbox'
                                    />
                                    Eggs
                                </label>
                                <label className='selection-label'>
                                    <input
                                        className='inline'
                                        name='alergies'
                                        value='nuts'
                                        type='checkbox'
                                    />
                                    Nuts
                                </label>
                                <label className='selection-label'>
                                    <input
                                        className='inline'
                                        name='alergies'
                                        value='fish'
                                        type='checkbox'
                                    />
                                    Fish
                                </label>
                                <label className='selection-label'>
                                    <input
                                        className='inline'
                                        name='alergies'
                                        value='gluten'
                                        type='checkbox'
                                    />
                                    Gluten
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    {/* Third fieldset */}
                    <fieldset className='form__textarea'>
                        <legend>Anything you would like to add?</legend>
                        <div className='groups'>
                            <label>
                                <textarea
                                    className='contact-inputs'
                                    name='comments'
                                    rows='4'
                                    cols='30'
                                    placeholder='Start typing here...'></textarea>
                            </label>
                        </div>
                    </fieldset>
                    {/* Footer */}
                    <div className='form__footer'>
                        {/* terms */}
                        <div className='groups'>
                            <div className='selection-wrapper'>
                                <label className='selection-label'>
                                    <input
                                        className='inline'
                                        name='terms'
                                        type='checkbox'
                                        value='check'
                                        required
                                    />
                                    I accept<br/>
                                    <a href='#!'> the terms and conditions</a>
                                </label>
                            </div>
                        </div>
                        {/* submit */}
                        <div className='groups'>
                            <label className='submit-label'>
                                <input
                                    name='name'
                                    id='submit'
                                    type='submit'
                                    value='Submit'
                                />
                            </label>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Form;
