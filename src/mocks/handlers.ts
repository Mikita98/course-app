import {http, HttpResponse} from 'msw'

const savedCourses = new Set<string>();


export const handlers = [
  http.get('/api/courses/:courseId/schedule', () => {
    return HttpResponse.json(
      [
        {
          "id": 4776,
          "dates": [
            [
              1711378800,
              1711391400
            ],
            [
              1711465200,
              1711477800
            ]
          ],
          "instructors": [
            {
              "first_name": "Tim",
              "last_name": "Neusesser",
              "portrait_image": "https://media.nngroup.com/media/people/photos/Tim-portrait-2022.jpg.200x200_q75_autocrop_crop-smart_upscale.jpg"
            }
          ],
          "location": {
            "timezone": "America/New_York"
          },
          "pricing": {
            "amount": 1044,
            "currency": "USD",
            "valid_until": 1709182800
          }
        },
        {
          "id": 4837,
          "dates": [
            [
              1713538800,
              1713564000
            ]
          ],
          "instructors": [
            {
              "first_name": "Maddie",
              "last_name": "Brown",
              "portrait_image": "https://media.nngroup.com/media/people/photos/_DSC4827-Edit-Edit.jpg.200x200_q75_autocrop_crop-smart_upscale.jpg"
            }
          ],
          "location": {
            "timezone": "America/New_York"
          },
          "pricing": {
            "amount": 1049,
            "currency": "USD",
            "valid_until": 1710907200
          }
        }
      ]
    )
  }),

  http.post('/api/profile/saved/courses/:courseId', ({ params }) => {
    const { courseId } = params;

    if (!courseId) {
      return new HttpResponse(
        JSON.stringify({ error: 'Course ID is required' }),
        { status: 400 }
      );
    }

    savedCourses.add(courseId.toString());

    return new HttpResponse(
      JSON.stringify({ message: 'Course saved successfully' }),
      { status: 200 }
    );
  }),

  // Unsave course
  http.delete('/api/profile/saved/courses/:courseId', ({ params }) => {
    const { courseId } = params;

    if (!courseId) {
      return new HttpResponse(
        JSON.stringify({ error: 'Course ID is required' }),
        { status: 400 }
      );
    }

    savedCourses.delete(courseId.toString());

    return new HttpResponse(
      JSON.stringify({ message: 'Course removed from saved successfully' }),
      { status: 200 }
    );
  }),

  http.get('/api/profile/saved/courses', () => {
    return HttpResponse.json(
      Array.from(savedCourses)
    );
  })

]