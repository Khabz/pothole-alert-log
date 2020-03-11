import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createLogEntry } from './API';

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      await createLogEntry(data);
      onClose();
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      { error ? <h3 className="error">{error}</h3> : null}
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input className="form-control" name="image" ref={register} />
      </div>
      <div className="form-group">
        <label htmlFor="fullnames">Full Names</label>
        <input className="form-control" name="fullnames" required ref={register} />
      </div>
      <div className="form-group">
        <label htmlFor="comments">Brief Explanation</label>
        <textarea className="form-control" name="decription" rows={3} ref={register}></textarea>
      </div>
      <button className="btn btn-sm btn-primary" disabled={loading}>{loading ? 'Loading...' : 'Report'}</button>
    </form>
  );
};

export default LogEntryForm;