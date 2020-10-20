import { MdGavel as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'practice',
  // Visible Title
  title: 'Areas of Practice',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'practice',
      title: 'Area of Practice',
      type: 'string',
      description: 'Name of the area of practice',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'practice',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
      description: 'Overview of Practice',
    },
    {
      name: 'categories',
      title: 'Sub Categories in Practice',
      type: 'array',
      description: 'Fields included in this Area',
    },
  ],
  preview: {
    select: {
      name: 'practice',
    },
    prepare: (fields) => ({
      title: `${fields.name}`,
    }),
  },
};
