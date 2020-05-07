import React, { Fragment } from 'react';
import Sidebar from '../Sidebar';
import './Profile.css';

const Notif = () => {
  return (
    <Fragment>
      <Sidebar />
      <div className="profile row">
        <div className="col s9 m9 l9 column">
          <div class="card hoverable card-profile darken-1">
            <h3 className="header">Notifications</h3>
            <div class="card-content">
              <div className="row">
                <p className="lead col s8 m8 l8">Send all alerts</p>
                <p class="input-field col s4 m4 l4">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                    </label>
                  </div>
                </p>
              </div>
              <br />
              <div className="row">
                <p className="lead col s8 m8 l8">Alerts only task success</p>
                <p class="input-field col s4 m4 l4">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                    </label>
                  </div>
                </p>
              </div>
              <br />
              <div className="row">
                <p className="lead col s8 m8 l8">
                  Alerts only for failed tasks
                </p>
                <p class="input-field col s4 m4 l4">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                    </label>
                  </div>
                </p>
              </div>
              <br />
              <div className="row">
                <p className="lead col s8 m8 l8">I do not want any alerts</p>
                <p class="input-field col s4 m4 l4">
                  <div class="switch">
                    <label>
                      <input type="checkbox" />
                      <span class="lever"></span>
                    </label>
                  </div>
                </p>
              </div>
              <br />
              <br />
              <div className="row buttons">
                <button className="btn btn-large waves-effect waves-light red">
                  Cancel
                </button>
                <button className="btn btn-large waves-effect waves-light green">
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

export default Notif;
