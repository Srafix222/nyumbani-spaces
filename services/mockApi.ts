import { Property, Agent, BlogPost, Review } from '../types';

const properties: Property[] = [
  { 
    id: 'p5', 
    title: 'Magnificent 6-Bed Villa in Runda', 
    price: 150000000, 
    currency: 'KES', 
    location: 'Runda, Nairobi', 
    county: 'Nairobi', 
    bedrooms: 6, 
    bathrooms: 7, 
    lat: -1.223,
    lng: 36.808,
    main_image:  'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/95d38055-185f-4bdb-affe-f1d3bf09665f/segments/1:4:1/Lucid_Origin_Create_a_stunning_exterior_view_of_a_magnificent__0.jpg',
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUH/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQIDAAQRBQYSIRMxMkFRYXH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAMBAQAAAAAAAAAAAAAAAAABEQIh/9oADAMBAAIREAPwDOtO1S+0+XvaZcSwORglGxuHY+DVu87k65eQmKa+YIwwRGqoT+SBmopnMcisvUEZH2plzJJO7OxyxOSaW0RrcP//Z',
    images: [
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/025b0397-fe1b-489a-8518-564f8e559fd6/segments/2:4:1/Lucid_Origin_Design_an_inviting_interior_view_of_the_villas_sp_1.jpg',
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/7172c58d-7a2c-4891-8a2c-4ab628f1e0b3/segments/4:4:1/Lucid_Origin_Illustrate_the_stateoftheart_kitchen_of_the_villa_3.jpg',
      'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/7bd368cf-c636-4d9f-abef-826d83bdd20b/segments/4:4:1/Lucid_Origin_Visualize_the_home_cinema_of_the_villa_designed_f_3.jpg',
      'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/8d3903cc-b1ea-493c-b54e-120d8d1b505e/segments/4:4:1/Lucid_Origin_Create_an_interior_view_of_a_luxurious_master_bed_3.jpg',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Ff4b39652-f055-431c-b947-ebb996dd8824.png'
    ],
    type: 'Villa', 
    status: 'available', 
    listed_date: '2023-11-10',
    description: 'A palatial mansion in the exclusive Runda estate, this property is the epitome of luxury. Featuring expansive living spaces, a home cinema, a state-of-the-art kitchen, and a stunning outdoor pool area, it\'s designed for grand-scale entertaining and comfortable family living.',
    agent_id: 'a4'
  },
  { 
    id: 'p6', 
    title: 'Stunning 4-Bed Beachfront Villa in Diani', 
    price: 95000000, 
    currency: 'KES', 
    location: 'Diani Beach, Ukunda', 
    county: 'Kwale', 
    bedrooms: 4, 
    bathrooms: 4, 
    lat: -4.321,
    lng: 39.576,
    main_image:  'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/95d38055-185f-4bdb-affe-f1d3bf09665f/segments/4:4:1/Lucid_Origin_Create_a_stunning_exterior_view_of_a_magnificent__3.jpg',
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUH/8QAIRAAAQMEAgMBAAAAAAAAAAAAAQIDBAAFBhESIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAMBAQAAAAAAAAAAAAAAAAABEQIh/9oADAMBAAIR_EAPwCVBxXGkRGn5Drrbi0gqQlsK2Po1U5LjcSO4+8SEIBUcDZOq3H23pUdt5l9QbWAQAkH9qcr1h3W8W5yK9cQhCyk7U0CeD90qY1F4M//Z',
    images: [
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/025b0397-fe1b-489a-8518-564f8e559fd6/segments/3:4:1/Lucid_Origin_Design_an_inviting_interior_view_of_the_villas_sp_2.jpg',
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/7172c58d-7a2c-4891-8a2c-4ab628f1e0b3/segments/3:4:1/Lucid_Origin_Illustrate_the_stateoftheart_kitchen_of_the_villa_2.jpg',
      'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/7bd368cf-c636-4d9f-abef-826d83bdd20b/segments/2:4:1/Lucid_Origin_Visualize_the_home_cinema_of_the_villa_designed_f_1.jpg',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Ff3ff4426-93ac-4107-bd5c-fc613b91a758.png',
      'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/8d3903cc-b1ea-493c-b54e-120d8d1b505e/segments/1:4:1/Lucid_Origin_Create_an_interior_view_of_a_luxurious_master_bed_0.jpg'
    ],
    type: 'Villa', 
    status: 'available', 
    listed_date: '2023-11-08',
    description: 'Wake up to the sound of the Indian Ocean in this breathtaking beachfront villa. With direct access to the white sandy beaches of Diani, an infinity pool, and open-plan living areas that seamlessly blend indoor and outdoor spaces, this is coastal living at its most luxurious.',
    agent_id: 'a2'
  },
  { 
    id: 'p7', 
    title: 'Exclusive 3-Bed Penthouse in Kileleshwa', 
    price: 48000000, 
    currency: 'KES', 
    location: 'Kileleshwa, Nairobi', 
    county: 'Nairobi', 
    bedrooms: 3, 
    bathrooms: 4, 
    lat: -1.277,
    lng: 36.789,
    main_image:  'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F5077bfbf-cd30-4e50-8a76-e428b1cd3375.png',
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACEQAAIBAwQDAQAAAAAAAAAAAAECAwQFEQAhEgYxQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADETFR/9oADAMBAAIREAPwCt33fVtt8jQyRTPKO4WNAMH5ycH7pWLe1hqqdZkikVW6AdQc/mlFfWW+S4VLy0EMrGQ5Z4wxJ+zplHbbDRVFNE0VNEiEDgqgBHemC3sAORm1PY//9k=',
    images: [
       'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F09443070-8a9d-4fd0-8b15-3209946885bf.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F583f15c4-ab39-4ada-afc9-c16f47f4a9e0.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F446f0a3c-8d90-408f-9fd2-41dddf0a3a48.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F506219f7-7ac5-4be6-8f8e-607e9febccdc.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F84def800-30f0-40af-a066-c6287f9805f0.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F34f190af-57de-4650-9ecf-b2fbbeeda258.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F6aa853c6-b54b-4750-a444-772981778f39.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fea1ba30c-0698-404b-8a95-f447151f8129.png',
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/0f329fce-60cd-4ab9-8ded-77878e716eef/segments/2:4:1/Lucid_Origin_Kitchen_Image_Design_a_modern_gourmet_kitchen_wit_1.jpg',
    ],
    type: 'Apartment', 
    status: 'available', 
    listed_date: '2023-11-05',
    description: 'Sophisticated urban living at its finest. This duplex penthouse in Kileleshwa offers panoramic city views, a private rooftop terrace, and impeccably designed interiors. The building features a residents\' lounge, gym, and heated pool.',
    agent_id: 'a3'
  },
  { 
    id: 'p8', 
    title: 'Serene 5-Bed Lakeview Villa in Naivasha', 
    price: 78000000, 
    currency: 'KES', 
    location: 'Naivasha, Nakuru', 
    county: 'Nakuru', 
    bedrooms: 5, 
    bathrooms: 5, 
    lat: -0.716,
    lng: 36.431,
    main_image:  'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/95d38055-185f-4bdb-affe-f1d3bf09665f/segments/3:4:1/Lucid_Origin_Create_a_stunning_exterior_view_of_a_magnificent__2.jpg',
    images: [
        'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/025b0397-fe1b-489a-8518-564f8e559fd6/segments/4:4:1/Lucid_Origin_Design_an_inviting_interior_view_of_the_villas_sp_3.jpg',
        'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/7172c58d-7a2c-4891-8a2c-4ab628f1e0b3/segments/2:4:1/Lucid_Origin_Illustrate_the_stateoftheart_kitchen_of_the_villa_1.jpg',
        'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/c9a3ab89-aa43-422c-8ef4-f3c873b08399/segments/2:4:1/Lucid_Origin_Visualize_the_home_cinema_of_the_villa_designed_f_1.jpg',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F4e4b7327-beda-4e4c-8de1-e0584bb5cf23.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fbf26aaf2-d1ac-472f-baed-2018ecb066b2.png'
    ],
    type: 'Villa', 
    status: 'available', 
    listed_date: '2023-11-02',
    description: 'An idyllic getaway home with breathtaking views of Lake Naivasha. Set on a sprawling, manicured lawn, this property features a rustic-chic design, a large veranda for outdoor dining, and a cozy fireplace for cool evenings. Perfect for those seeking tranquility and natural beauty.',
    agent_id: 'a8'
  },
  { 
    id: 'p9', 
    title: 'Chic 2-Bed Apartment with Ocean Views in Nyali', 
    price: 18500000, 
    currency: 'KES', 
    location: 'Nyali, Mombasa', 
    county: 'Mombasa', 
    bedrooms: 2, 
    bathrooms: 2, 
    lat: -4.035,
    lng: 39.699,
    main_image:  'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F2b09fe87-873f-4f97-82d6-93abbb6e1c2a.png',
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACEQAAEEAgICAwAAAAAAAAAAAAECAwQRAAUGEiExQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADETFB/9oADAMBAAIREAPwDNtJ03T62GuY7HekqAUpb4CqJ9ABwB80jP0zTn47iGoEZpxSSCptIBH3Sl5e73NhtssS3G20gAJQrYAPtimVXu9zXMr8p9S1KHCirj6pA3sAORm1PY//9k=',
    images: [
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fa56ccc27-b11e-4fbd-9a2f-c55c39e723a9.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F4837ae4f-f4e5-45ab-9d84-6866f6713857.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F306081e3-07ad-4f37-8d16-bc824cb077c6.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fe721ca2b-928b-4ecc-b1f5-285e4f7aa3ec.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F5be468c0-5528-4556-99e2-ad404f6a25a9.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F34f190af-57de-4650-9ecf-b2fbbeeda258.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F6aa853c6-b54b-4750-a444-772981778f39.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fea1ba30c-0698-404b-8a95-f447151f8129.png',
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/0f329fce-60cd-4ab9-8ded-77878e716eef/segments/2:4:1/Lucid_Origin_Kitchen_Image_Design_a_modern_gourmet_kitchen_wit_1.jpg',
    ],
    type: 'Apartment', 
    status: 'sold', 
    listed_date: '2023-10-20',
    description: 'Experience coastal living in this modern apartment complex in Nyali. This unit features a spacious balcony with stunning sea views, contemporary finishes, and access to a communal pool and gym. Close to shopping malls and fine dining.',
    agent_id: 'a7'
  },
  { 
    id: 'p10', 
    title: 'Luxury 2-Bed Executive Apartment in Westlands', 
    price: 25000000, 
    currency: 'KES', 
    location: 'Westlands, Nairobi', 
    county: 'Nairobi', 
    bedrooms: 2, 
    bathrooms: 3, 
    lat: -1.265,
    lng: 36.805,
    main_image:  'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F38fbe89b-24ca-494a-9ebd-6d5a73c726c1.png',
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQH/8QAJBAAAgEDAgYDAAAAAAAAAAAAAQIDAAQRBSEGEhMxUXEiQWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AzJ7bT7m4aKeCILIMq6gAg+COv2s1e0DSZUYxPNEx6EMAw+QR/VZW3uZYHEkMjo46FTg0+m1zU42DC8n4/yYkH5BoC//Z',
    images: [
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F7f71f57b-409a-4c3c-8477-205ba61baaf1.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fbb6491a5-47bb-4b41-9892-3786085fbcc7.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F7e626735-deec-48fe-bbd7-2f16875c8040.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fdcc62642-0b72-4f74-accb-dcfc0791ac73.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fda3511be-e896-4541-8fcc-6f5ca3c24d59.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F34f190af-57de-4650-9ecf-b2fbbeeda258.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F6aa853c6-b54b-4750-a444-772981778f39.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fea1ba30c-0698-404b-8a95-f447151f8129.png',
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/0f329fce-60cd-4ab9-8ded-77878e716eef/segments/2:4:1/Lucid_Origin_Kitchen_Image_Design_a_modern_gourmet_kitchen_wit_1.jpg',
    ],
    type: 'Apartment', 
    status: 'available', 
    listed_date: '2023-10-18',
    description: 'Located in the bustling heart of Westlands, this executive apartment is perfect for the modern professional. It offers sleek design, premium amenities including a rooftop infinity pool, sauna, and a residents\' business lounge, all within walking distance of Nairobi\'s top restaurants and entertainment spots.',
    agent_id: 'a6'
  },
  { 
    id: 'p11', 
    title: 'Elegant 4-Bed Maisonette in Karen', 
    price: 58000000, 
    currency: 'KES', 
    location: 'Karen, Nairobi', 
    county: 'Nairobi', 
    bedrooms: 4, 
    bathrooms: 4, 
    lat: -1.321,
    lng: 36.706,
    main_image:  'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/8d8f1426-ec23-49fd-90b3-b8f2c5c00a20/segments/2:4:1/Lucid_Origin_An_elegant_4bed_maisonette_in_a_serene_gated_comm_1.jpg',
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACQQAAEDAgYCAwAAAAAAAAAAAAECAwQAEQUGEiETFDFBUXGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADETFB/9oADAMBAAIREAPwDN4di+L4k2y7EhR3A6gKSpbYWR9E1GzDBsUw+O49GhRkNoBPC2AOPQJrT4BFRFhNOPutoDaRhSjgdlE4o83iUJ5qO4hxYBHCKgnmq7V7DkC1j2P/2Q==',
    images: [
        'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/c856f41a-bbac-46fc-ba36-2b96b6fd3fc4/segments/3:4:1/Lucid_Origin_A_modern_kitchen_in_a_luxurious_maisonette_featur_2.jpg',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F59dc6fbe-8f28-43e5-95ac-186c8d25c380.png',
        'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F2a93285d-07e1-4b33-9ef3-5f2ee576b9c8.png',
        'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/fe8d0671-c2de-4738-93d0-2a11e954b161/segments/4:4:1/Lucid_Origin_A_spacious_and_luxurious_bedroom_in_an_elegant_ma_3.jpg',
        'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/fe8d0671-c2de-4738-93d0-2a11e954b161/segments/3:4:1/Lucid_Origin_A_spacious_and_luxurious_bedroom_in_an_elegant_ma_2.jpg'
    ],
    type: 'Maisonette', 
    status: 'available', 
    listed_date: '2023-10-15',
    description: 'A beautiful family home in a secure and serene gated community in Karen. This maisonette boasts a private garden, a spacious family room, modern kitchen, and staff quarters. Ideal for families looking for comfort, security, and a prestigious address.',
    agent_id: 'a5'
  },
  { 
    id: 'p12', 
    title: 'Exquisite 3-Bed Villa with Private Pool in Watamu', 
    price: 42000000, 
    currency: 'KES', 
    location: 'Watamu, Kilifi', 
    county: 'Kilifi', 
    bedrooms: 3, 
    bathrooms: 3, 
    lat: -3.352,
    lng: 40.015,
    main_image: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Ffe013418-8c79-4f24-a716-6555fa7a8cc5.png',
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACQQAAEDAgYCAwAAAAAAAAAAAAECAwQAEQUGEiETFDFBUXGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADETFB/9oADAMBAAIREAPwDN4di+L4k2y7EhR3A6gKSpbYWR9E1GzDBsUw+O49GhRkNoBPC2AOPQJrT4BFRFhNOPutoDaRhSjgdlE4o83iUJ5qO4hxYBHCKgnmq7V7DkC1j2P/2Q==',
    images: [
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fb65b059d-412d-476c-bf32-550204d59278.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F8abfd7c2-5672-44d6-b746-a4678c654b14.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F22eb7e25-6fbd-4779-ba6e-1fa764f7ba90.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F4d50fe59-bcbc-4ea0-ac7c-62880f2a4644.png',
      'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/8d3903cc-b1ea-493c-b54e-120d8d1b505e/segments/1:4:1/Lucid_Origin_Create_an_interior_view_of_a_luxurious_master_bed_0.jpg'
    ],
    type: 'Villa', 
    status: 'available', 
    listed_date: '2023-10-12',
    description: 'Discover paradise in this luxury villa located in the coastal town of Watamu. Featuring Swahili-inspired architecture, a private pool set in a lush tropical garden, and easy access to the Watamu Marine National Park, this property is a perfect holiday home or investment.',
    agent_id: 'a10'
  },
  { 
    id: 'p1', 
    title: 'Luxury 4-Bed Villa in Muthaiga', 
    price: 85000000, 
    currency: 'KES', 
    location: 'Muthaiga, Nairobi', 
    county: 'Nairobi', 
    bedrooms: 4, 
    bathrooms: 5, 
    lat: -1.254,
    lng: 36.832,
    main_image:  'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/6aebaccc-c47a-4d64-8ce1-c1c04beccbb9/segments/3:4:1/Lucid_Origin_Front_of_Villa_Image_Capture_the_grand_entrance_o_2.jpg',
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUH/8QAIRAAAQMEAgMBAAAAAAAAAAAAAQIDBAAFBhESIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAMBAQAAAAAAAAAAAAAAAAABEQIh/9oADAMBAAIR_EAPwCVBxXGkRGn5Drrbi0gqQlsK2Po1U5LjcSO4+8SEIBUcDZOq3H23pUdt5l9QbWAQAkH9qcr1h3W8W5yK9cQhCyk7U0CeD90qY1F4M//Z',
    images: [
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F118ea405-4d65-4bc4-ae39-fdb230cf0153.png',
      'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/c9a3ab89-aa43-422c-8ef4-f3c873b08399/segments/2:4:1/Lucid_Origin_Visualize_the_home_cinema_of_the_villa_designed_f_1.jpg',
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/025b0397-fe1b-489a-8518-564f8e559fd6/segments/1:4:1/Lucid_Origin_Design_an_inviting_interior_view_of_the_villas_sp_0.jpg',
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/f4761228-81bc-42a0-a681-e1020366a424/segments/2:4:1/Lucid_Origin_Bedroom_Image_Illustrate_a_spacious_and_elegant_m_1.jpg',
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/7172c58d-7a2c-4891-8a2c-4ab628f1e0b3/segments/3:4:1/Lucid_Origin_Illustrate_the_stateoftheart_kitchen_of_the_villa_2.jpg',
    ],
    type: 'Villa', 
    status: 'available', 
    listed_date: '2023-10-28',
    description: 'An exquisite villa nestled in the heart of Muthaiga, offering unparalleled luxury and privacy. This stunning home features a grand entrance, spacious living areas with high ceilings, a modern gourmet kitchen, and a beautifully landscaped garden with a private pool. Perfect for families seeking a serene and prestigious neighborhood.',
    agent_id: 'a1'
  },
  { 
    id: 'p2', 
    title: 'Modern 3-Bed Apartment in Kilimani', 
    price: 22000000, 
    currency: 'KES', 
    location: 'Kilimani, Nairobi', 
    county: 'Nairobi', 
    bedrooms: 3, 
    bathrooms: 3, 
    lat: -1.294,
    lng: 36.786,
    main_image: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F1269f7e6-3203-4b41-86bc-5f0a71285927.png', 
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACQQAAEDAgYCAwAAAAAAAAAAAAECAwQAEQUGEiETFDFBUXGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADETFB/9oADAMBAAIREAPwDN4di+L4k2y7EhR3A6gKSpbYWR9E1GzDBsUw+O49GhRkNoBPC2AOPQJrT4BFRFhNOPutoDaRhSjgdlE4o83iUJ5qO4hxYBHCKgnmq7V7DkC1j2P/2Q==',
    images: [
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Ff6407876-01e3-4bec-b326-2fe2c428c0b3.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F08cc6f4d-7a36-44e7-9ab8-729fdf5ef40e.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fc9b9de20-6369-484e-ac25-e217f3b788d8.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F2ad089cb-2953-4a33-805a-02b4c4ac76d6.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F34f190af-57de-4650-9ecf-b2fbbeeda258.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F6aa853c6-b54b-4750-a444-772981778f39.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fea1ba30c-0698-404b-8a95-f447151f8129.png',
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/0f329fce-60cd-4ab9-8ded-77878e716eef/segments/2:4:1/Lucid_Origin_Kitchen_Image_Design_a_modern_gourmet_kitchen_wit_1.jpg',
    ],
    type: 'Apartment', 
    status: 'available', 
    listed_date: '2023-10-25',
    description: 'This chic and modern apartment in the vibrant Kilimani area boasts stunning city views, an open-plan living space, and high-end finishes. Residents enjoy access to a rooftop pool, a fully-equipped gym, and secure parking. Ideal for young professionals and investors.',
    agent_id: 'a3'
  },
  { 
    id: 'p3', 
    title: 'Cozy 2-Bed Bungalow in Karen', 
    price: 45000000, 
    currency: 'KES', 
    location: 'Karen, Nairobi', 
    county: 'Nairobi', 
    bedrooms: 2, 
    bathrooms: 2, 
    lat: -1.315,
    lng: 36.721,
    main_image: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F2dc578db-0ca1-4737-bb24-dd5220bc6be5.png', 
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwQH/8AIxAAAQQCAQMFAAAAAAAAAAAAAQIDBAUAERIGBxMhIjFBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECERIxQf/aAAwDAQACEQMRAD8AQ18vDYY9QWjKkR40ZKk7A+rYknk8AbOzvjGfXz3Dr7Lrc25ZddZbShtT55KQB0B9/GMtTJJWylKjwpOhrJ6h+4pTq0T400f/2Q==',
    images: [
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F3224dcfd-8a5d-4679-b981-7591756c65f3.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F7686a74e-a8b2-4af7-a587-4e9cd233ea8b.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F8c0fa307-be2c-4405-b6e7-8c4866ac7b35.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Feea58147-4db1-4bfc-be85-d9a22b8ac850.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fcb0cbb70-af8b-4843-8b6e-2ab039215d11.png'
    ],
    type: 'Bungalow', 
    status: 'sold', 
    listed_date: '2023-09-10',
    description: 'A charming bungalow set on a half-acre of lush, mature gardens in the leafy suburb of Karen. This home offers a tranquil retreat from the city, featuring a cozy fireplace, a spacious veranda, and classic wooden flooring throughout. A perfect blend of comfort and elegance.',
    agent_id: 'a1'
  },
  { 
    id: 'p4', 
    title: 'Spacious Maisonette in Lavington', 
    price: 65000000, 
    currency: 'KES', 
    location: 'Lavington, Nairobi', 
    county: 'Nairobi', 
    bedrooms: 5, 
    bathrooms: 5, 
    lat: -1.283,
    lng: 36.767,
    main_image: 'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/8d8f1426-ec23-49fd-90b3-b8f2c5c00a20/segments/1:4:1/Lucid_Origin_An_elegant_4bed_maisonette_in_a_serene_gated_comm_0.jpg',
    lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACUQAAIBAwQABwEAAAAAAAAAAAECAwQFEQAhBhIxQRMUIlFhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAQEBAQAAAAAAAAAAAAAAAREAAiH/2gAMAwEAAhEDEQA/AM3oKSk4S0FHDLTzSBjIqjDgnYkEeu9Z9X0lJTV06RQLGgkJVFGAo70fbd+oLdSNJVSlYELAFSeezjGiVepq6m4TxJPIqK5AUHgDRpQ53//2Q==',
    images: [
      'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/ad52e3fd-b834-4437-90f2-861665178e5a/segments/1:4:1/Lucid_Origin_A_spacious_modern_kitchen_in_a_highend_maisonette_0.jpg',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F6b73402e-cf6e-4791-8f3e-2e403ee1e32a.png',
      'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F53b214ac-7077-4268-8d86-108b0a6cf52b.png',
      'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/fe8d0671-c2de-4738-93d0-2a11e954b161/segments/2:4:1/Lucid_Origin_A_spacious_and_luxurious_bedroom_in_an_elegant_ma_1.jpg',
      'https://cdn.leonardo.ai/users/80f603df-4ae4-462c-8628-693ff5c5023c/generations/fe8d0671-c2de-4738-93d0-2a11e954b161/segments/1:4:1/Lucid_Origin_A_spacious_and_luxurious_bedroom_in_an_elegant_ma_0.jpg'
    ],
    type: 'Maisonette', 
    status: 'available', 
    listed_date: '2023-08-15',
    description: 'A grand family home in Lavington, offering ample space for living and entertaining. This maisonette features large ensuite bedrooms, a family room, a dedicated study, and a private garden. Located in a secure gated community close to top schools and shopping centers.',
    agent_id: 'a2'
  }
];

const agents: Agent[] = [
  { id: 'a1', name: 'Asha Wanjiku', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Feaefe252-6b13-48ca-9624-0185ae2d836a.png', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBv/EACEQAAIBAwQDAQAAAAAAAAAAAAECAwQFEQAhEgYxQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADETFR/9oADAMBAAIREAPwCt33fVtt8jQyRTPKO4WNAMH5ycH7pWLe1hqqdZkikVW6AdQc/mlFfWW+S4VLy0EMrGQ5Z4wxJ+zplHbbDRVFNE0VNEiEDgqgBHemC3sAORm1PY//9k=', phone: '+254 712 345 678', email: 'asha.w@prestigeHomes.com', organization: 'Prestige Homes' },
  { id: 'a2', name: 'David Odhiambo', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F82f3c59e-81ee-4ada-a607-ec684635116a.png', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUH/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQIDAAQRBQYSIRMxMkFRYXH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAMBAQAAAAAAAAAAAAAAAAABEQIh/9oADAMBAAIREAPwDOtO1S+0+XvaZcSwORglGxuHY+DVu87k65eQmKa+YIwwRGqoT+SBmopnMcisvUEZH2plzJJO7OxyxOSaW0RrcP//Z', phone: '+254 722 987 654', email: 'david.o@CoastalProperties.com', organization: 'Coastal Properties' },
  { id: 'a3', name: 'Fatima Njoroge', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fcad3357b-86ac-4971-84ab-cf0f3275da24.png', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACQQAAIBAgUEAwAAAAAAAAAAAAECAwQRAAUGEiExQRNRImFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADETFB/9oADAMBAAIREAPwDNdJ5vmmXwJDDXNJAnpSRVDAfByDgdKQz/ADvM8xjaKvry8TdeFFVAfgADig1Iu4sCO/dM6eFmIJJ4Hr3oA3sAORm1PY//9k=', phone: '+254 733 111 222', email: 'fatima.n@CityLivingRealty.com', organization: 'City Living Realty' },
  { id: 'a4', name: 'Brian Kipchoge', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fef913432-3ecb-4aa5-b505-98b5e5435e99.png', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACEQAAIBAwQDAQAAAAAAAAAAAAECAwQFEQAhEgYxQVGB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQEAAgMBAAAAAAAAAAAAAAABAAIDETFR/9oADAMBAAIR_EAPwCt3PcFBbZTFNHNI46hIwMfOTg/ulI962mop1lSKZVboHUHP90or7hb5LlUPJQwyMXOWkjDE/s6YdtioainiaKmiRCCQqoAI70wV7AByM2p7H//2Q==', phone: '+254 744 333 444', email: 'brian.k@UpcountryEstates.com', organization: 'Upcountry Estates' },
  { id: 'a5', name: 'Maryanne Akinyi', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fb5fbb920-4351-4d22-be22-1977eefe08b1.png', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACQQAAIBAgUEAwAAAAAAAAAAAAECAwQRAAUGEiExQRNRImFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADETFB/9oADAMBAAIREAPwDNdJ5vmmXwJDDXNJAnpSRVDAfByDgdKQz/ADvM8xjaKvry8TdeFFVAfgADig1Iu4sCO/dM6eFmIJJ4Hr3oA3sAORm1PY//9k=', phone: '+254 755 555 666', email: 'maryanne.a@PrestigeHomes.com', organization: 'Prestige Homes' },
  { id: 'a6', name: 'Samuel Kimani', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F6b3a2432-9112-4f53-9dcd-d3f64957025f.png', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUH/8QAIRAAAQMEAgMBAAAAAAAAAAAAAQIDBAAFBhESIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAMBAQAAAAAAAAAAAAAAAAABEQIh/9oADAMBAAIR_EAPwCVBxXGkRGn5Drrbi0gqQlsK2Po1U5LjcSO4+8SEIBUcDZOq3H23pUdt5l9QbWAQAkH9qcr1h3W8W5yK9cQhCyk7U0CeD90qY1F4M//Z', phone: '+254 766 777 888', email: 'samuel.k@CityLivingRealty.com', organization: 'City Living Realty' },
  { id: 'a7', name: 'Linda Cherono', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F8a79cac5-9fa0-41ae-80e6-60538911d737.png', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQIDAAQRBQYhEhMxQVFhcaH/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Ak6ZeaVdW6yXEccMhA3I6YIPyO4+qC8l0KOFjC8EkgHChYsE/knFZk93cXMm+4meVsYyxzj2plLKisFYgHqAabYt8hUr2P/9k=', phone: '+254 777 999 000', email: 'linda.c@CoastalProperties.com', organization: 'Coastal Properties' },
  { id: 'a8', name: 'Peter Musyoka', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Ffbed5c48-3a8c-4898-8d9f-15cd4e5ad36c.png', phone: '+254 788 111 222', email: 'peter.m@UpcountryEstates.com', organization: 'Upcountry Estates' },
  { id: 'a9', name: 'Johnson Otieno', photo: 'https://cdn.leonardo.ai/users/8419bccc-bbc0-412c-8906-6504c6cabd1b/generations/1ae982bb-73ca-4e10-b640-3304e5c860db/segments/1:4:1/Lucid_Origin_Create_a_professional_and_welcoming_profile_pictu_0.jpg', phone: '+254 799 333 444', email: 'johnson.o@example.com', organization: 'Prestige Homes' },
  { id: 'a10', name: 'John Omondi', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F1fdb1ac8-e70a-48b7-86d0-e3cce1d2980d.png', phone: '+254 711 555 666', email: 'john.o@CoastalProperties.com', organization: 'Coastal Properties' },
  { id: 'a11', name: 'Christine Nafula', photo: 'https://cdn.leonardo.ai/users/8419bccc-bbc0-412c-8906-6504c6cabd1b/generations/1ae982bb-73ca-4e10-b640-3304e5c860db/segments/4:4:1/Lucid_Origin_Create_a_professional_and_welcoming_profile_pictu_3.jpg', phone: '+254 722 777 888', email: 'christine.n@eCityLivingRealty.com', organization: 'City Living Realty' },
  { id: 'a12', name: 'Kevin Maina', photo: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fc87662d5-0753-460d-896d-7aa4645e39bc.png', phone: '+254 733 999 000', email: 'kevin.m@UpcountryEstates.com', organization: 'Upcountry Estates' },
];

const blogPosts: BlogPost[] = [
    { id: 'b1', title: 'The Art of Kenyan Modern: 5 Interior Design Trends Defining Luxury in 2024', excerpt: 'Explore the fusion of global sophistication and local heritage that is redefining high-end Kenyan interiors, from Afro-minimalism to sustainable luxury.', imageUrl: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F4286c622-d35b-44aa-8246-7bab3554836f.png', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAYH/8QAJBAAAgEDAgYDAAAAAAAAAAAAAQIDAAQRBSEGEhMxUXEiQWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AzJ7bT7m4aKeCILIMq6gAg+COv2s1e0DSZUYxPNEx6EMAw+QR/VZW3uZYHEkMjo46FTg0+m1zU42DC8n4/yYkH5BoC//Z', author: 'Asha Kimani', date: 'Oct 15, 2023', content: `In 2024, the landscape of Kenyan interior design is undergoing a sophisticated transformation. The contemporary Kenyan home is a testament to a unique design language—one that gracefully marries global minimalism with the rich tapestry of local culture and artistry. This year is about crafting spaces that are not just visually stunning but are also deeply personal, sustainable, and comfortable. Here are the five pivotal trends shaping the future of luxury Kenyan interiors.

**Afro-Minimalism: A Refined Aesthetic**

This is where simplicity meets soul. Afro-minimalism champions serene, uncluttered environments that serve as a canvas for distinct African narratives. Imagine interiors defined by clean architectural lines, a palette of warm neutrals, and an abundance of natural light. These spaces are then punctuated by meticulously curated elements: a striking piece of contemporary art from a Nairobi gallery, bespoke furniture crafted from indigenous woods like Mvule or Cypress, or a singular, bold Kitenge-print cushion that adds a burst of identity. The philosophy is one of quality over quantity, where each object is chosen for its story and significance.

**The Embrace of Sustainable Luxury**

Eco-consciousness has transcended trend status to become a cornerstone of luxury design. The discerning homeowner now seeks materials that honor the planet and introduce a tangible connection to nature. We are witnessing a surge in the use of bamboo, rattan, and reclaimed timber, often sourced from local artisans who employ traditional techniques. Handwoven sisal rugs (kiondo) from heritage markets and intricate wall hangings add layers of texture and warmth, celebrating both natural beauty and the circular economy.

**A Palette Inspired by the Landscape**

The color story for 2024 is drawn directly from the Kenyan earth. It’s a sophisticated spectrum of warm, organic tones: the rich terracotta of the Great Rift Valley, the deep ochre used in Maasai tradition, safari-beige that evokes the vast savannah, and the lush greens of Kericho's tea fields. These grounding hues are masterfully paired with bold, strategic accents. A feature wall in a vibrant Maasai red, a touch of sapphire blue in textiles, or the intricate beadwork of a traditional bowl can electrify a room, creating a dynamic and layered interior.

**Seamless Indoor-Outdoor Living**

Kenya's idyllic climate is a designer's dream, making the dissolution of boundaries between inside and out a defining feature of modern architecture. Homes are conceived with expansive glass sliding doors that open onto verandas, balconies are furnished as elegant outdoor lounges, and interiors are populated with lush botanicals like the fiddle-leaf fig. The objective is to create an uninterrupted flow, where the garden and living space become one. This design ethos not only expands the home's footprint but also fosters a profound sense of well-being.

**Intelligent Home Integration**

Technology is now an invisible, indispensable layer in the luxury home. The integration of smart systems is influencing design from the ground up. The modern homeowner desires intuitive control over lighting, climate, and security, all without compromising aesthetics. The focus is on discreet, integrated solutions—from automated blinds that sync with the sunrise to sound systems that are heard but not seen—that enhance comfort and provide peace of mind in our increasingly connected world.` },
    { id: 'b2', title: 'Your Nairobi Home Buying Blueprint: A Step-by-Step Guide for the Discerning Buyer', excerpt: 'A comprehensive guide to navigating Nairobi\'s dynamic property market with confidence, from securing financing with premier institutions to mastering the legal intricacies.', imageUrl: 'https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2F6aa853c6-b54b-4750-a444-772981778f39.png', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAUH/8QAJBAAAgEDAwMFAAAAAAAAAAAAAQIDAAQRBQYhEhMxQVFhcaH/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8Ak6ZeaVdW6yXEccMhA3I6YIPyO4+qC8l0KOFjC8EkgHChYsE/knFZk93cXMm+4meVsYyxzj2plLKisFYgHqAabYt8hUr2P/9k=', author: 'Brian Omondi', date: 'Sep 28, 2023', content: `Acquiring your first home in Nairobi is a landmark achievement, a testament to ambition and success. However, the path to ownership in this vibrant metropolis can be intricate. This definitive guide demystifies the process, equipping you with the knowledge to navigate the market with precision and secure your ideal 'nyumbani'.

**Phase 1: Strategic Financial Preparation**

The foundation of a successful property acquisition is meticulous financial planning.

**Defining Your Investment Capacity**

Begin with a comprehensive assessment of your financial position. The prudent rule of thumb suggests that your monthly mortgage repayment should not surpass one-third of your net income. Engage with a financial advisor and utilize mortgage calculators to establish a clear, comfortable budget. Look beyond standard mortgage costs; factor in ancillary expenses such as service charges, insurance, and land rates.

**Securing Your Deposit**

Premier financial institutions in Kenya typically require a deposit ranging from 10% to 20% of the property’s value. A disciplined savings strategy is paramount. Broaden your options beyond commercial banks to include reputable SACCOs, which frequently offer more advantageous interest rates and flexible terms to their members.

**Obtaining Mortgage Pre-Approval**

A mortgage pre-approval is your key to being recognized as a serious, credible buyer. This documentation from a financial institution provides a definitive statement of your borrowing power. We recommend approaching multiple lenders to meticulously compare interest rates, loan tenures, and associated fees before making a commitment.

**Phase 2: Identifying the Perfect Asset**

With your finances secured, the exhilarating search for your property begins.

**Selecting Your Enclave**

Nairobi is a mosaic of distinct neighborhoods, each offering a unique lifestyle. Your choice should be a strategic alignment of your professional and personal life.
**For the dynamic professional:** Districts like Kilimani, Kileleshwa, and Westlands offer sophisticated apartments, world-class amenities, and a thriving social scene.
**For establishing families:** The leafy suburbs of Karen, Lavington, and Runda, or the burgeoning satellite towns of Ruiru and Kitengela, provide expansive homes, prestigious schools, and a tranquil environment.
Immerse yourself in your shortlisted neighborhoods at various times to truly understand their rhythm and character.

**Leveraging Professional Expertise**

An elite real estate agent is an indispensable partner. Their profound market intelligence, exclusive access to off-market listings, and masterful negotiation skills are invaluable. Collaborating with a distinguished agency like Nyumbani Spaces ensures you are guided by an expert committed to protecting your interests and securing the best possible terms.

**Phase 3: The Legal Conveyancing Process**

Upon identifying your chosen property, the formal legal process commences. The engagement of a seasoned property lawyer (conveyancer) is non-negotiable.

**The Letter of Offer and Initial Commitment**

Your agent will assist in structuring a formal Letter of Offer. This document specifies your proposed purchase price and any conditions precedent to the sale. Upon execution by the seller, it forms a preliminary agreement, at which point a nominal, refundable deposit is typically paid.

**Essential Due Diligence**

This is the most critical stage of legal protection. Your lawyer must execute a comprehensive search at the Ministry of Lands. This verifies the authenticity of the title deed, confirms the legal owner, and reveals any encumbrances (caveats) or outstanding land rates. This step is your primary defense against property fraud.

**The Sale Agreement and Statutory Payments**

The Sale Agreement is the definitive, legally binding contract. It meticulously details all terms, payment milestones, and the completion date. Upon signing, the balance of the deposit (typically bringing the total to 10%) is paid. Your lawyer will then facilitate the payment of Stamp Duty—a government tax, usually 4% of the property's value in urban locales—which is a prerequisite for the title transfer.

**Phase 4: Completion and Ownership**

The final stage involves the disbursement of the remaining balance from your lender to the seller's advocate. Your lawyer will then finalize the transfer of the title deed and all other legal documents into your name. Upon the successful registration and payment of all legal fees, you will receive the keys to your new residence. Welcome home.` },
    { id: 'b3', title: 'Maximizing Value: Strategic Enhancements to Elevate Your Property for Sale', excerpt: 'Discover high-ROI renovations and sophisticated staging techniques that will captivate buyers and significantly increase your property\'s market value.', imageUrl: 'https://cdn.leonardo.ai/users/10f5f86d-c9b1-4979-8e78-fb964526dd5a/generations/0f329fce-60cd-4ab9-8ded-77878e716eef/segments/2:4:1/Lucid_Origin_Kitchen_Image_Design_a_modern_gourmet_kitchen_wit_1.jpg', lqip: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAA0JCgsKCA0LCgsODg0PEy AVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5AWEFDocTJ/wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEB//EACEQAAEEAgICAwAAAAAAAAAAAAECAwQRAAUGEiExQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADETFB/9oADAMBAAIREAPwDNtJ03T62GuY7HekqAUpb4CqJ9ABwB80jP0zTn47iGoEZpxSSCptIBH3Sl5e73NhtssS3G20gAJQrYAPtimVXu9zXMr8p9S1KHCirj6pA3sAORm1PY//9k=', author: 'Fatima Yusuf', date: 'Sep 05, 2023', content: `When preparing to sell your property, the ultimate objective is to achieve its maximum market potential. Fortunately, elevating your home's value does not always necessitate a large-scale renovation. A series of strategic, cost-effective enhancements can profoundly increase its desirability and command a premium price. This guide outlines how to secure the best return on investment in the competitive Kenyan property market.

**High-ROI, Low-Overhead Upgrades**

These are the tactical improvements that create a powerful and immediate first impression.

**The Power of a Professional Paint Finish**

This remains the single most impactful, low-cost investment. Engage professionals to apply a fresh coat of paint in a sophisticated, neutral palette. Tones like soft grey, warm off-white, or subtle beige, from premium local brands like Crown or Duracoat, create an atmosphere of spaciousness and light. This allows prospective buyers to more easily envision the home as their own. A crisp, white ceiling is non-negotiable for a pristine finish.

**Modernize Hardware and Fixtures**

Dated fixtures can instantly age a property. A modest investment in contemporary cabinet handles, designer door knobs, modern light fittings, and sleek new taps can yield significant returns. A minimalist mixer tap in the kitchen or an elegant pendant light in the living area can single-handedly elevate the perceived value and modernity of the space.

**Enhance Curb Appeal and Security**

The property's exterior sets the tone for the entire viewing. Ensure it is immaculate. Repaint the front door in a striking, contemporary color. Manicure the lawns, professionally trim hedges, and introduce elegant, low-maintenance local flora like bougainvillea or succulents in designer planters. In Kenya, a well-maintained, secure, and aesthetically pleasing gate is a critical component of curb appeal.

**Focus on Key Value Zones**

Buyers invariably scrutinize kitchens and bathrooms. Targeted investments in these areas deliver the highest ROI.

**The Kitchen: The Heart of the Home's Value**

A full kitchen overhaul is often unnecessary. Consider professionally refinishing or repainting kitchen cabinets. Installing a new, elegant countertop—local granite or engineered quartz offer both durability and luxury—or adding a contemporary tile backsplash can completely transform the kitchen's appeal. Ensure all appliances are immaculate and in perfect working order.

**The Bathroom: A Sanctuary for Buyers**

Cultivate a spa-like ambiance without extensive remodeling. Replace dated shower curtains with sleek glass screens, install modern, water-efficient showerheads, and update the vanity with a new countertop or basin. Re-grouting tiles is an exceptionally cost-effective method for refreshing the entire bathroom and signaling meticulous maintenance.

**The Art of Professional Staging**

Staging is the art of selling a lifestyle, not just a property. It enables buyers to form an emotional connection.

**Curate the Space: Declutter and Depersonalize**

Remove all personal effects, including family photographs and memorabilia. Edit furniture to enhance flow and create a sense of spaciousness. A professionally curated space appears larger, more luxurious, and allows buyers the mental space to project their own lives onto it.

**The Importance of a Flawless Clean**

A professional, deep cleaning is an absolute necessity. This must include all windows, floors, and often-neglected details like skirting boards, sockets, and light switches. An impeccably clean home is a powerful indicator of a well-maintained property.

**Master the Lighting**

Maximize both natural and artificial light to create a warm, inviting atmosphere. Have all windows professionally cleaned. Open all curtains and blinds fully before a viewing. Replace any dim or cool-toned bulbs with bright, warm-white LEDs to ensure every room feels bright and welcoming.` },
];

let reviews: Review[] = [
    { id: 'r1', propertyId: 'p1', author: 'John D.', rating: 5, comment: 'Absolutely stunning property. The agent was very helpful.', date: '2023-11-01' },
    { id: 'r2', propertyId: 'p1', author: 'Jane S.', rating: 4, comment: 'Beautiful home, though the garden needs a bit of work.', date: '2023-10-30' },
    { id: 'r3', propertyId: 'p2', author: 'Mike W.', rating: 5, comment: 'Perfect location and amazing amenities. Highly recommend!', date: '2023-11-05' },
    { id: 'r4', propertyId: 'p5', author: 'Chris K.', rating: 5, comment: 'The definition of luxury. Worth every shilling.', date: '2023-11-12' },
    { id: 'r5', propertyId: 'p6', author: 'Anika P.', rating: 5, comment: 'Waking up to the ocean view was a dream. The villa is perfect.', date: '2023-11-11' },
    { id: 'r6', propertyId: 'p3', author: 'Susan M.', rating: 5, comment: 'The garden is just lovely, and the house feels so peaceful. A true Karen gem.', date: '2023-09-15' },
    { id: 'r7', propertyId: 'p4', author: 'The Ochieng Family', rating: 5, comment: 'Finally, a house that fits our large family comfortably! The location is perfect, close to schools.', date: '2023-09-01' },
    { id: 'r8', propertyId: 'p4', author: 'David K.', rating: 4, comment: 'Great space and secure community. A few minor touch-ups were needed but overall very happy.', date: '2023-08-25' },
    { id: 'r9', propertyId: 'p7', author: 'Fatima A.', rating: 5, comment: 'The panoramic city views from this penthouse are breathtaking. Living here feels like being on top of the world.', date: '2023-11-06' },
    { id: 'r10', propertyId: 'p8', author: 'Peter G.', rating: 5, comment: 'Incredibly serene and beautiful. The perfect escape from city life. The lake views are worth every penny.', date: '2023-11-04' },
    { id: 'r11', propertyId: 'p9', author: 'Linda C.', rating: 4, comment: 'A very chic apartment with lovely views. The building management is also very responsive.', date: '2023-10-22' },
    { id: 'r12', propertyId: 'p10', author: 'Kevin M.', rating: 5, comment: 'The rooftop pool is a game-changer. Perfect apartment for a professional working in Westlands.', date: '2023-10-20' },
    { id: 'r13', propertyId: 'p10', author: 'Grace N.', rating: 4, comment: 'Great location and amenities. The apartment is a bit smaller than expected but very well designed.', date: '2023-10-19' },
    { id: 'r14', propertyId: 'p11', author: 'The Kims', rating: 5, comment: 'Our family feels so safe here. The private garden is a huge plus for the kids. Highly recommended.', date: '2023-10-18' },
    { id: 'r15', propertyId: 'p12', author: 'James O.', rating: 5, comment: 'A perfect holiday villa. The Swahili architecture is beautiful and the private pool is fantastic.', date: '2023-10-14' },
];

// Add average rating and review count to properties
properties.forEach(p => {
    const propReviews = reviews.filter(r => r.propertyId === p.id);
    p.reviewCount = propReviews.length;
    if (p.reviewCount > 0) {
        const totalRating = propReviews.reduce((acc, review) => acc + review.rating, 0);
        p.averageRating = totalRating / p.reviewCount;
    } else {
        p.averageRating = 0;
    }
});


// MOCK API FUNCTIONS
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const getProperties = async (filters: any, limit: number): Promise<{ data: Property[], hasMore: boolean }> => {
  await delay(500);
  
  let filtered = [...properties].sort((a, b) => new Date(b.listed_date).getTime() - new Date(a.listed_date).getTime());

  if (filters.status && filters.status !== 'all') {
    filtered = filtered.filter(p => p.status === filters.status);
  }

  if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
          p.title.toLowerCase().includes(searchTerm) ||
          p.location.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm)
      );
  }

  if (filters.agentId) {
      filtered = filtered.filter(p => p.agent_id === filters.agentId);
  } else {
      if (filters.county && filters.county !== 'all') {
          filtered = filtered.filter(p => p.county === filters.county);
      }
      if (filters.type && filters.type !== 'all') {
          filtered = filtered.filter(p => p.type === filters.type);
      }
      if (filters.maxPrice) {
          filtered = filtered.filter(p => p.price <= filters.maxPrice);
      }
  }

  if (filters.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (filters.sortBy === 'date-asc') {
    filtered.sort((a, b) => new Date(a.listed_date).getTime() - new Date(b.listed_date).getTime());
  }

  const page = filters.page || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedData = filtered.slice(startIndex, endIndex);

  return { data: paginatedData, hasMore: endIndex < filtered.length };
};

export const getPropertyById = async (id: string): Promise<Property | null> => {
  await delay(300);
  return properties.find(p => p.id === id) || null;
};

export const getPropertiesByIds = async (ids: string[]): Promise<Property[]> => {
    await delay(300);
    return properties.filter(p => ids.includes(p.id));
}

export const getFeaturedProperties = async (): Promise<Property[]> => {
    await delay(300);
    // Return the newest, most expensive properties as featured
    return [...properties]
        .filter(p => p.status === 'available')
        .sort((a, b) => b.price - a.price)
        .slice(0, 3);
}

export const getAgents = async (page: number): Promise<{ data: Agent[], hasMore: boolean }> => {
    await delay(500);
    const limit = 4; // Paginate agents, 4 per page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedData = agents.slice(startIndex, endIndex);
    const hasMore = endIndex < agents.length;
    return { data: paginatedData, hasMore };
}

export const getAllAgents = async (): Promise<Agent[]> => {
    await delay(200);
    return agents;
}

export const getAvailableCounties = async (): Promise<string[]> => {
    await delay(100);
    const counties = new Set(properties.map(p => p.county));
    return Array.from(counties).sort();
};

export const getAgentById = async (id: string): Promise<Agent | null> => {
    await delay(200);
    return agents.find(a => a.id === id) || null;
}

export const getFeaturedAgents = async (): Promise<Agent[]> => {
    await delay(300);
    return agents.slice(0, 3);
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    await delay(400);
    return blogPosts;
}

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
    await delay(300);
    return blogPosts.find(b => b.id === id) || null;
}

export const getReviewsByPropertyId = async (propertyId: string): Promise<Review[]> => {
    await delay(200);
    return reviews.filter(r => r.propertyId === propertyId).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const addReview = async (reviewData: Omit<Review, 'id' | 'date'>): Promise<Review> => {
    await delay(600);
    const newReview: Review = {
        ...reviewData,
        id: `r${reviews.length + 1}`,
        date: new Date().toISOString(),
    };
    reviews.push(newReview);

    // After adding review, recalculate property's average rating
    const propertyIndex = properties.findIndex(p => p.id === reviewData.propertyId);
    if (propertyIndex > -1) {
        const propReviews = reviews.filter(r => r.propertyId === reviewData.propertyId);
        const reviewCount = propReviews.length;
        const totalRating = propReviews.reduce((acc, review) => acc + review.rating, 0);
        properties[propertyIndex].averageRating = totalRating / reviewCount;
        properties[propertyIndex].reviewCount = reviewCount;
    }

    return newReview;
}