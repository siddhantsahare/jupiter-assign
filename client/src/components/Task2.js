import React from 'react';
import Sidebar from './Sidebar';
import './Task.css';

const Task2 = () => {
  return (
    <div>
      <Sidebar />
      <div className="profile row">
        <div className="col s9 m9 l9 column">
          <div class="card hoverable card-profile darken-1">
            <h3 className="header">Task 2</h3>
            <div class="card-content">
              <div className="row">
                <p className="lead col s4 m4 l4">Source Name</p>
                <p class="input-field col s8 m8 l8">
                  <div
                    class="dropdown-trigger btn blue"
                    data-target="dropdown1"
                  >
                    Dropdown
                  </div>
                  <ul id="dropdown1" class="dropdown-content">
                    <li>
                      <div className="dropdown-inner">content</div>
                    </li>
                  </ul>
                </p>
              </div>
              <br />
              <div className="row">
                <p className="lead col s4 m4 l4">Enable Logging</p>
                <p class="input-field col s8 m8 l8">
                  <label>
                    <input
                      type="checkbox"
                      class="filled-in"
                      checked="checked"
                    />
                    <span></span>
                  </label>
                </p>
              </div>
              <br />
              <div className="row">
                <p className="lead col s4 m4 l4">Provide SQL</p>
                <p class="input-field col s8 m8 l8">
                  <textarea
                    class="scroller"
                    value="
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis labore nesciunt molestias laboriosam enim
                    repellendus deleniti, maiores quos, blanditiis quibusdam
                    corporis soluta inventore sint omnis iure odit fugit
                    praesentium. Sint velit quibusdam culpa perferendis
                    reprehenderit! Labore accusamus ipsum quibusdam nobis sed
                    nostrum reiciendis inventore iste quidem, sint quos earum
                    nam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis labore nesciunt molestias laboriosam enim
                    repellendus deleniti, maiores quos, blanditiis quibusdam
                    corporis soluta inventore sint omnis iure odit fugit
                    praesentium. Sint velit quibusdam culpa perferendis
                    reprehenderit! Labore accusamus ipsum quibusdam nobis sed
                    nostrum reiciendis inventore iste quidem, sint quos earum
                    nam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis labore nesciunt molestias laboriosam enim
                    repellendus deleniti, maiores quos, blanditiis quibusdam
                    corporis soluta inventore sint omnis iure odit fugit
                    praesentium. Sint velit quibusdam culpa perferendis
                    reprehenderit! Labore accusamus ipsum quibusdam nobis sed
                    nostrum reiciendis inventore iste quidem, sint quos earum
                    nam?"
                  ></textarea>
                </p>
              </div>
              <br />
              <div className="row">
                <p className="lead col s4 m4 l4">Target Result</p>
                <p class="input-field col s8 m8 l8">
                  <div
                    class="dropdown-trigger btn blue button"
                    data-target="dropdown2"
                  >
                    <span>Dropdown</span>
                    <i class="material-icons icons">arrow_drop_down</i>
                  </div>
                  <ul id="dropdown2" class="dropdown-content">
                    <li>
                      <div className="dropdown-inner">content</div>
                    </li>
                    <li>
                      <div className="dropdown-inner">content</div>
                    </li>
                    <li>
                      <div className="dropdown-inner">content</div>
                    </li>
                    <li>
                      <div className="dropdown-inner">content</div>
                    </li>
                    <li>
                      <div className="dropdown-inner">content</div>
                    </li>
                    <li>
                      <div className="dropdown-inner">content</div>
                    </li>
                  </ul>
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
                <button className="btn btn-large waves-effect waves-light blue">
                  Validate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
