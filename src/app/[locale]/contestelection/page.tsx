import React from 'react';
import "@/styles/styles.css"

const ContestElectionForm = () => {
    return (
        <div className="min-vh-100 d-flex align-items-center" style={{
            background: "url('/assets/img/constestelection.png') no-repeat center center",
            backgroundSize: "cover",
        }}>
            <div className="container-fluid" style={{ margin: "80px 0px" }}>
                <div className="row justify-content-center gap-5">
                    <div className="col-12 col-md-9 col-lg-8">
                        <div className="card shadow-lg border-0 px-5">
                            <div className="card-header bg-white border-0 text-center py-4 mb-2">
                                <h4 className=" font1 h1 mb-3 mt-4" style={{ color: "#5D5D5D", fontWeight: 500 }}>Contest Election</h4>
                                <small className='fw-bold h5' style={{ color: "#CB392C" }}>JOIN NOW PAJA SHAKTI DEMOCRATIC PARTY</small>
                            </div>
                            <div className="card-body p-4">
                                <form>
                                    <div className="row mb-2">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">First Name *</label>
                                            <input type="text" className="form-control border border-secondary" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Last Name *</label>
                                            <input type="text" className="form-control border border-secondary" required />
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Date of Birth *</label>
                                            <input type="date" className="form-control border border-secondary" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Gender *</label>
                                            <select className="form-select border border-secondary" required>
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Marital Status *</label>
                                            <select className="form-select border border-secondary" required>
                                                <option value="">Select Status</option>
                                                <option value="single">Single</option>
                                                <option value="married">Married</option>
                                                <option value="divorced">Divorced</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Religion *</label>
                                            <select className="form-select border border-secondary" required>
                                                <option value="">Select Religion</option>
                                                <option value="hinduism">Hinduism</option>
                                                <option value="islam">Islam</option>
                                                <option value="christianity">Christianity</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Social Category *</label>
                                            <select className="form-select border border-secondary" required>
                                                <option value="">Select Category</option>
                                                <option value="general">General</option>
                                                <option value="sc">SC</option>
                                                <option value="st">ST</option>
                                                <option value="obc">OBC</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Town / City *</label>
                                            <input type="text" className="form-control border border-secondary" required />
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Address *</label>
                                            <input type="text" className="form-control border border-secondary" required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Caste *</label>
                                            <input type="text" className="form-control border border-secondary" required />
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Educational Qualification *</label>
                                            <select className="form-select border border-secondary" required>
                                                <option value="">Select Qualification</option>
                                                <option value="highschool">High School</option>
                                                <option value="graduate">Graduate</option>
                                                <option value="postgraduate">Post Graduate</option>
                                                <option value="professional">Professional Degree</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Mobile No. *</label>
                                            <input type="tel" className="form-control border border-secondary" required />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">WhatsApp No. *</label>
                                        <input type="tel" className="form-control border border-secondary" required />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Please upload your up-to-date CV *</label>
                                        <input type="file" className="form-control border border-secondary" required />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Please list your affiliations with the area you hope to represent *</label>
                                        <textarea className="form-control border border-secondary" rows={3} required></textarea>
                                    </div>

                                    <div className="mb-4 form-check">
                                        <input type="checkbox" className="form-check-input border border-secondary" id="termsCheck" required />
                                        <label className="form-check-label" htmlFor="termsCheck">
                                            I have read and agree to the terms and conditions of membership
                                        </label>
                                    </div>

                                    <div className="text-center my-4 mb-2">
                                        <button type="submit" className="px-5 btn contest_btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContestElectionForm;