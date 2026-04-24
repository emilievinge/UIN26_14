import { useEffect, useState } from "react"
import client from '../helpers/client'

export default function Assignments() {

    const [allAssignments, setAllAssignments] = useState(null)

    useEffect(() => {
        async function fetchAssignments() {
            const allAssignments = await client.fetch("*[_type == 'assignment'] | order(assignmentname asc)")
            setAllAssignments(allAssignments)
        }
        fetchAssignments()
    }, [])

    console.log(allAssignments)

    return (
    <section className="assignment-section">
        {allAssignments?.map( a => <article key={a._id}>
            <h2>{a.assignmentname}</h2>
            <p>{a.description}</p>
        </article>)}
    </section>
    )
}
