import axios from "axios";
import { useState } from "react";

function ApiIntegration() {

    const [data, setData] = useState([]);
    const [showMyTable, setShowMyTable] = useState(false);

    const getCountryDetails = async () => {

        try {
            // const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((response) => {
                console.log('response', response)
                setData(response.data.data);
                setShowMyTable(true);
            }).catch((err) => {
                console.log('err', err);
            })


        } catch (err) {
            console.log('err', err);
        }
    }

    return (
        <>
            <button onClick={getCountryDetails}>Show Data</button>

            <table>
                <tr>
                    <th>Nation</th>
                    <th>Population</th>
                    <th>Year</th>
                </tr>
                {
                    showMyTable && data.map((data) => {
                        return (
                            <>
                                <tr>
                                    <td>{data.Nation}</td>
                                    <td>{data.Population}</td>
                                    <td>{data.Year}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default ApiIntegration;