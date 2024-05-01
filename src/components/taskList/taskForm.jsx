import React, { useState } from 'react';

export const TaskForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        nameTask: '',
        endDate: '',
        statusTask: '',
        author: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            nameTask: '',
            endDate: '',
            statusTask: '',
            author: '',
            description: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nameTask">Name Task</label>
                <input
                    type="text"
                    className="form-control"
                    id="nameTask"
                    name="nameTask"
                    value={formData.nameTask}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                    type="text"
                    className="form-control"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="statusTask">Status Task</label>
                <input
                    type="text"
                    className="form-control"
                    id="statusTask"
                    name="statusTask"
                    value={formData.statusTask}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};
