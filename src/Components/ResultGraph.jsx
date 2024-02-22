import { Doughnut } from 'react-chartjs-2';
import React, { useState } from "react"
import "../Components/css/graph.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineController
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    LineElement,
    Title,
    Tooltip,
    LineController,
    Legend
);
function DoughnutChart() {
    const [incorrect, setIncorrect] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [notAnswered, setNotanswered] = useState(0)

    React.useEffect(() => {
        if (typeof window != undefined) {
            const result = JSON.parse(localStorage.getItem("result"))
            if (result) {
                let crr = 0
                let incrr = 0
                let notAns = 0
                for (let ele of result) {
                    if (ele.givenAns && ele.givenAns != null) {
                        if (ele.givenAns === ele.actualAns) {
                            crr = crr + 1
                            setCorrect(crr)
                        } else {
                            incrr = incrr + 1
                            setIncorrect(incrr)
                        }
                    } else {
                        notAns = notAns + 1
                        setNotanswered(notAns)
                    }

                }
            }
        }
    }, [])


    const data = {
        labels: ['Correct Ans', 'Incorrect Ans', 'Not Answered'],
        datasets: [
            {
                label: 'Quiz Result Analysis',
                data: [correct, incorrect, notAnswered],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['#5FD068',
                    '#FF4949',
                    '#FBB454',
                ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }

        ]
    }

    const options = {
        cutout:40,
        
        plugins: {
            
            
            legend:{
                position:"right",
                labels:{
                    fontColor:"black",
                    usePointStyle:true,
                    boxWidth:10
                },
             
                
            },
            responsive: true,
            animation: {
                animateScale: true,
            },
            
            
        },
        maintainAspectRatio:false

    }



    return (
        <div className='grapg'>
            <div className='innergrapg'>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}

export default DoughnutChart