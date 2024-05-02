import React, { useState } from 'react';
import MyBusiness from '../Services/MyBusiness';

const StartNow = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedListing, setSelectedListing] = useState('');

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleListingChange = (e) => {
        setSelectedListing(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
    };
  return (
    <>
        <section className="login-reg">
            <div className="container">
                <div className="row">
                    <div className="login-main add-list">
                        <div className="log-bor">&nbsp;</div>
                        <span className="steps">Start promotions</span>
                        <div className="log">
                            <div className="login">
                                <h4>Start promotions</h4>
                                <form onSubmit={handleSubmit}>
                                    <input type="hidden" value="" name="ad_total_days" className="validate" />
                                    <input type="hidden" value="" name="ad_cost_per_day" className="validate" />
                                    <input type="hidden" value="" name="ad_total_cost" className="validate" />
                                    <input type="hidden" value="1" name="adposi" className="validate" />
                                    <input type="hidden" value="promote-business.html" name="url" className="validate" />
                                    <input type="hidden" value="1" name="type_value" className="validate" />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <select name="type_id" required="required" className="form-control" onChange={handleListingChange}>
                                                    <option value="">Choose Listing</option>
                                                    <option value="395">test</option>
                                                    {/* Add other options here */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Start date</label>
                                                <input name="ad_start_date" required="required" type="date" className="form-control" value={startDate} onChange={handleStartDateChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>End date</label>
                                                <input name="ad_end_date" type="date" required="required" className="form-control" value={endDate} onChange={handleEndDateChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div style={{ display: 'block' }} className="ad-pri-cal">
                                                <ul>
                                                    <li>
                                                        <div><span>Total days</span><h5 className="ad-tdays">0</h5></div>
                                                    </li>
                                                    <li>
                                                        <div><span>Cost Per Day</span><h5><b className="ad-pocost">1</b></h5></div>
                                                    </li>
                                                    <li>
                                                        <div><span>Total Points</span><h5><b className="ad-tcost">0</b></h5></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" name="create_promote_submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <MyBusiness />
    </>
  )
}

export default StartNow
