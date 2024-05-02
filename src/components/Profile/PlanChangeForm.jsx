import React from 'react';
import { Link } from 'react-router-dom';

const PlanChangeForm = () => {
    return (
        <section className="login-reg">
            <div className="container">
                <div className="row">
                    <div className="login-main add-list posr">
                        <div className="log-bor">&nbsp;</div>
                        <div className="log log-1">
                            <div className="login login-new">
                                <h4>Change My Plan</h4>
                                <p>Hi Rn53,<br />Your Current Plan <b>Premium Plus</b><br />Expiration date 07, Apr 2034</p>
                                <form>
                                    <div className="form-group">
                                        <select   className="form-control chosen-select" required >
                                            <option value="" selected>Choose your plan</option>
                                            <option value="4">Premium Plus - $20/year</option>
                                        </select>
                                        <Link to="/mybuiness" className="frmtip">Plan details</Link>
                                    </div>
                                <Link to="/payment">  <button name="plan_type_submit" className="btn btn-primary">Change</button></Link>
                                </form>
                                <div className="col-md-12">
                                    <Link to="/dashboard" className="skip">Go to user dashboard &gt;&gt;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanChangeForm;
