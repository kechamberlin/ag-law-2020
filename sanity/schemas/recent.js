import { GrBriefcase as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'recent',
  // Visible Title
  title: 'Recent Cases',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'recent',
      title: 'Recent Case',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'recent',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description about the case',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
