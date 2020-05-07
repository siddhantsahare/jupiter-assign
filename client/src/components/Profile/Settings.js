import React, { Fragment, useEffect, useState } from 'react';
import './Profile.css';
import M from 'materialize-css';
import Sidebar from '../Sidebar';

const Settings = () => {
  useEffect(() => {
    let datepicker = document.querySelector('datepicker');
    M.Datepicker.init(datepicker, {});
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    dob: new Date(),
    profession: '',
    designation: '',
  });

  const { username, dob, profession, designation } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <Sidebar />
      <div className="profile row">
        <div className="col s9 m9 l9 column">
          <div class="card hoverable card-profile darken-1">
            <h4 className="header">Profile Information</h4>
            <div class="card-content">
              <form>
                <div className="row">
                  <p className="lead col s4 m4 l4">Name</p>
                  <p class="input-field col s8 m8 l8">
                    <i class="material-icons prefix">person</i>
                    <input
                      id="name"
                      type="text"
                      name="username"
                      class="validate"
                      value={username}
                      maxLength="30"
                      onChange={(e) => onChange(e)}
                    />
                  </p>
                </div>

                <div className="row">
                  <p className="lead col s4 m4 l4">D.O.B</p>
                  <p class="input-field col s8 m8 l8">
                    <i class="material-icons prefix">today</i>
                    <input
                      id="calender"
                      name="dob"
                      type="text"
                      class="datepicker"
                      onChange={(e) => onChange(e)}
                    />
                  </p>
                </div>

                <div className="row">
                  <p className="lead col s4 m4 l4">Profession</p>
                  <p class="input-field col s8 m8 l8">
                    <i class="material-icons prefix">laptop</i>
                    <input
                      id="prof"
                      type="text"
                      name="profession"
                      class="validate"
                      value={profession}
                      maxLength="30"
                      onChange={(e) => onChange(e)}
                    />
                  </p>
                </div>

                <div className="row">
                  <p className="lead col s4 m4 l4">Designation</p>
                  <p class="input-field col s8 m8 l8">
                    <i class="material-icons prefix">language</i>
                    <input
                      id="desgn"
                      type="text"
                      name="designation"
                      class="validate"
                      value={designation}
                      maxLength="30"
                      onChange={(e) => onChange(e)}
                    />
                  </p>
                </div>
              </form>
              <div className="row buttons">
                <button className="btn btn-large waves-effect waves-light red">
                  Cancel
                </button>
                <button
                  className="btn btn-large waves-effect waves-light green"
                  onClick={(e) => {
                    alert('success submission');
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
