import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '0d0h9ap0',
  dataset: 'production',
  apiVersion: '2022-12-07',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client)

export const urlFor=(source)=>builder.inage(source)