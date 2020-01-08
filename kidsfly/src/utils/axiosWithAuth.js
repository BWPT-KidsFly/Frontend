// import axios from 'axios'

// export const axiosWithAuth = () => {
//     const token = localStorage.getItem('token')

//     return axios.create({
//         baseURL: "https://bw-kids-fly.herokuapp.com/api",
//         headers: {
//             'Authorization': token,
//             'Content-Type': 'application/json',
//         },
//     })
// }

import axios from "axios"
export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: token,
        }
    })
}

                                     