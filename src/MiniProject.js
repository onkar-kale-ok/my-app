import { useEffect, useState } from "react"
import axios from "axios"
import ReactApexChart from 'react-apexcharts';

function MiniProject(params) {
    const [pageDetails, setPageDetails] = useState([])
    const [dashboardDataFromLocal, setDashboardDataFromLocal] = useState();

    const options = {
        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT"]
        }
    };

    const series = [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    },{
        name: 'series-2',
        data: [10, 23, 34, 52, 42, 66, 45, 91, 100]
    },
    {
        name: 'series-2',
        data: [23, 13, 56, 20, 52, 20, 88, 30, 90]
    }];

    useEffect(async () => {
        try {
            let response = await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
            console.log('response', response);
            console.log('response.accountsPage', response.data.accountsPage)
            localStorage.setItem('response', response.data);
            localStorage.setItem('accountsPage', JSON.stringify(response.data.accountsPage));
            localStorage.setItem('dasbhoardPage', JSON.stringify(response.data.dasbhoardPage));
            localStorage.setItem('productsPage', JSON.stringify(response.data.productsPage));
            setPageDetails(response.data);

        } catch (error) {

        }
    }, [])

    const getDataFromLocalStorage = async () => {
        const dashboardData = await JSON.parse(localStorage.getItem('dasbhoardPage'));
        const nameFromLocal = localStorage.getItem('name');
        console.log('dashboardData', dashboardData);
        setDashboardDataFromLocal(dashboardData);

    }



    return (
        <>
            <h1>Mini Project</h1>

            <button onClick={getDataFromLocalStorage}>Get data </button>
            <table>
                <tr>
                    <th>Order Number</th>
                    <th>Status</th>
                    <th>Operation</th>
                    <th>Location</th>
                </tr>
                {dashboardDataFromLocal && dashboardDataFromLocal.orders.map((data) => {
                    return (
                        <>
                            <tr>
                                <td>{data.orderNo}</td>
                                <td>{data.status}</td>
                                <td>{data.operators}</td>
                                <td>{data.location}</td>

                            </tr>
                        </>
                    )
                })

                }
            </table>

            <ReactApexChart options={options} series={series} type="line" width={800} height={320} />


        </>
    )
}

export default MiniProject