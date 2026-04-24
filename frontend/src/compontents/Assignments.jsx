import { useEffect, useState } from "react"
import client from '../helpers/client'
export default function Assignments() {

    const [alleAssignments, setAlleAssignments] = useState(null)

useEffect(() => {
    async function fetchAssignments() {
        const alleAssignments = await client.fetch("*[_type == 'assignment']")
        setAlleAssignments(alleAssignments)
    }
    fetchAssignments()
}, [])

console.log(alleAssignments)
}
