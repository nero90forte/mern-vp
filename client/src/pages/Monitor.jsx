import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import "chart.js/auto";
import 'react-datepicker/dist/react-datepicker.css';
import Side from "../components/Side";

export default function Monitor() {
  const { currentUser } = useSelector((state) => state.user);
    const [log, setLog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // Datepicker
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // const handleSubmit = () => {
    //   onFilterSubmit({ startDate, endDate });
    // };

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
    <div>
    <main>
      <section class="bg-white flex">
      <Side />
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">Monitoring </h1>
                <div class="inline-flex items-center rounded-md shadow-sm">
                  <button class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center" onClick={toggleVisibilityRR}>
                  {isRRVisible ? 'Hide RR' : 'Show RR'}
                  </button>
                  <button class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center" onClick={toggleVisibilityHR}>
                  {isHRVisible ? 'Hide HR' : 'Show HR'}
                  </button>
                  <button class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center" onClick={toggleVisibilityrrRMS}>
                  {isrrRMSVisible ? 'Hide rrRMS' : 'Show rrRMS'}
                  </button>
                </div>
                <div class="mt-2 lg:-mx-6 lg:flex lg:items-center">
                  <div className="object-cover w-full lg:mx-6 lg:w-1/3 rounded-xl h-72 lg:h-96">
                  {isrrRMSVisible && (
                    <Line data={rrRMS} />
                  )}
                  </div>
                    <div class="mt-2 lg:w-2/3 lg:mt-0 lg:mx-6 ">
                        <div class="flex flex-wrap items-center">
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                            {isHRVisible && (
                              <Line data={HR} />
                            )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* AA */}
                <div class="mt-3 lg:-mx-6 max-w-full lg:flex lg:items-center">
                    <div class="mt-6 lg:w-2/3 lg:mt-0 lg:mx-6 ">
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        {isRRVisible && (
                        <Line data={RR} />
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}
