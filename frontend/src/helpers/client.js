import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "mfjlknxv",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-24"
})

export default client

