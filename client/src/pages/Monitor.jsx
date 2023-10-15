import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";
import 'react-datepicker/dist/react-datepicker.css';

export default function Monitor({onFilterSubmit}) {
    const [log, setLog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // Datepicker
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleSubmit = () => {
      onFilterSubmit({ startDate, endDate });
    };

      const [isHRVisible, setHRIsVisible] = useState(false);
      const [isRRVisible, setRRIsVisible] = useState(false);
      const [isrrRMSVisible, setrrRMSIsVisible] = useState(false);

      const toggleVisibilityHR = () => {
        setHRIsVisible(!isHRVisible);
      };

      const toggleVisibilityRR = () => {
        setRRIsVisible(!isRRVisible);
      };
      
        const toggleVisibilityrrRMS = () => {
          setrrRMSIsVisible(!isrrRMSVisible);
        };

    useEffect(() => {
        const fetchLog = async () => {
          try {
            setLoading(true);
            const res = await fetch(`/api/user/test`);
            const data = await res.json();
            if (data.success === false) {
              setError(true);
              setLoading(false);
              return;
            }
            setLog(data)
            setLoading(false);
            setError(false);
          } catch (error) {
            setError(true);
            setLoading(false);
          }
        };
        fetchLog();
      });

      const rrRMS = {
        labels: log?.map(item => item.time_created), // X-axis labels
        datasets: [
          {
            label: 'rrRMS',
            data: log?.map(item => item.rrRMS), // Y-axis data points
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };
      const HR = {
        labels: log?.map(item => item.time_created), // X-axis labels
        datasets: [
          {
            label: 'HR',
            data: log?.map(item => item.HR), // Y-axis data points
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };
      const RR = {
        labels: log?.map(item => item.time_created), // X-axis labels
        datasets: [
          {
            label: 'RR',
            data: log?.map(item => item.RR), // Y-axis data points
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };

  return (
    <main>
       {/* <div>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        <button onClick={handleSubmit}>Apply Filter</button>
      </div> */}
      <div className="flex justify-between items-center max-w-2xl mx-auto p-2">
      <button onClick={toggleVisibilityHR}>
        {isHRVisible ? 'Hide HR' : 'Show HR'}
      </button>
      <button onClick={toggleVisibilityRR}>
        {isRRVisible ? 'Hide RR' : 'Show RR'}
      </button>
      <button onClick={toggleVisibilityrrRMS}>
        {isrrRMSVisible ? 'Hide rrRMS' : 'Show rrRMS'}
      </button>
      </div>
      
       <div className= 'flex justify-between items-center max-w-7xl mx-auto p-3'>
       {isrrRMSVisible && (
        <div style={{ height: '400px', width:'800px' }}>
            <Line data={rrRMS} />
        </div>
       )}
        {isHRVisible && (
        <div style={{ height: '400px', width:'800px'  }}>
            <Line data={HR} />
        </div>
        )}
      </div>
      <div className= 'flex justify-between items-center max-w-7xl mx-auto p-3'>
      {isRRVisible && (
        <div style={{ height: '400px', width:'1000px'  }}>
          <Line data={RR} />
        </div>
      )}
      </div>
    </main>
   
  )
}
