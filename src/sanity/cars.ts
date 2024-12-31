export default {
    name: 'car',
    type: 'document',
    title: 'Car',
    fields: [
        {
            name: 'car_image',
            type: 'image',
            title: 'Car Image'
        },
        {
            name: 'detail_image',
            type: 'image',
            title: 'detail_Image'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'feedback_image',
            type: 'image',
            title: 'Feedback Image'
        },
        {
            name: 'feedback_name',
            type: 'string',
            title: 'Feedback Name'
        },
        {
            name: 'date',
            type: 'date',
            title: 'Date'
        },
    ]
}
