import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'vo5e1zun',
    useCdn: true,
    apiVersion: '2021-10-21',
    dataset: 'production',
    token: process.env.NEXT_SANITY_API_KEY
});