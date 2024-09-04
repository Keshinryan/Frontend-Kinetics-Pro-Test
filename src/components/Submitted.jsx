import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Submitted = ({ apiUrl }) => {
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubmittedData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/get-submitted-data`); 
        if (response.ok) {
          const data = await response.json();
          setSubmittedData(data);
        } else {
          console.error('Failed to fetch submitted data');
          navigate('/'); 
        }
      } catch (error) {
        console.error('Error:', error);
        navigate('/');
      }
    };

    fetchSubmittedData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  if (!submittedData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Submitted Data</h1>
      <div className="form-group">
        <label>Name:</label>
        <p>{submittedData.name}</p>
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <p>{submittedData.phoneNumber}</p>
      </div>
      <div className="form-group">
        <label>Email:</label>
        <p>{submittedData.email}</p>
      </div>
      <div className="form-group">
        <label>Address:</label>
        <p>{submittedData.address}</p>
      </div>
      <div className="form-group">
        <label>University:</label>
        <p>{submittedData.university}</p>
      </div>
      <div className="form-group">
        <label>Message:</label>
        <p>{submittedData.message}</p>
      </div>
    </div>
  );
};

export default Submitted;
