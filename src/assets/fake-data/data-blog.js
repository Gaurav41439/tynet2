import img1 from '../images/post/Untitled(1).jpg';
import img2 from '../images/post/Untitled.jpg';
import img3 from '../images/post/Untitled(2).jpg';
import img4 from '../images/post/Untitled(3).jpg';
import img5 from '../images/post/Untitled(4).jpg';

const dataBlog = [
    {
        id: 1,
        img: img1,
        title: 'Solid Waste Management under Swachh Bharat Mission',
        domain: 'Sustainability and Environmental Technology',
        supportingMission: 'Swachh Bharat Mission (SBM), This mission is about more than cleanliness; it\'s about creating a healthier, sustainable environment for all. Your solutions in sanitation, waste management, or clean technologies can directly contribute to transforming communities and promoting sustainability.',
        problemStatement: 'Managing waste efficiently is critical for cleaner cities and villages. However, challenges like improper segregation, unorganized collection systems, and lack of public awareness hinder the goals of the Swachh Bharat Mission.',
        objective: [
            'Waste Segregation Tools: A mobile/web app for households to record and categorize waste types (biodegradable, recyclable, hazardous).',
            'Collection Optimization: A system to suggest efficient waste collection routes for municipalities or NGOs.',
            'Citizen Engagement: Features like reporting unclean areas or gamified initiatives for waste segregation awareness.'
        ],
        expectedImpact: [
            'Streamlined waste collection and segregation.',
            'Reduced landfill dependency.',
            'Improved community participation in cleanliness drives.'
        ]
    },
    {
        id: 2,
        img: img2,
        title: 'Traffic Management and Congestion Reduction',
        domain: 'Urban Infrastructure and Smart Cities',
        supportingMission: 'Smart Cities Mission, Launched by the Government of India, the Smart Cities Mission aims to enhance urban living standards by leveraging technology, sustainable infrastructure, and citizen-centric planning.',
        problemStatement: 'Traffic congestion in India\'s urban areas results in delays, increased pollution, and fuel wastage. Efficient traffic management systems are essential to address these challenges.',
        objective: [
            'Real-time Traffic Monitoring: Use IoT devices or mobile sensors to track traffic flow and identify bottlenecks.',
            'Dynamic Signal Management: Develop algorithms to adjust traffic signals based on real-time congestion data.',
            'Alternative Route Suggestions: Provide commuters with live traffic updates and suggest less congested routes via mobile apps.',
            'Public Transport Integration: Enhance access to public transport schedules and occupancy levels to encourage usage.'
        ],
        expectedImpact: [
            'Reduced travel time and fuel consumption.',
            'Improved air quality by minimizing idle traffic emissions.',
            'Enhanced commuter experience in urban areas.'
        ]
    },
    {
        id: 3,
        img: img3,
        title: 'Telemedicine for Rural Healthcare',
        domain: 'Healthcare and Digital Inclusion',
        supportingMission: 'Ayushman Bharat Mission, Access to quality healthcare remains a challenge, especially in rural areas. Through innovations in telemedicine or healthcare delivery, you can help bridge the healthcare gap and make quality medical services accessible to all.',
        problemStatement: 'Rural areas in India face a significant lack of healthcare facilities, leading to delays in treatment and reliance on unqualified practitioners. Telemedicine can bridge this gap, supporting the objectives of Ayushman Bharat Mission to provide affordable and accessible healthcare.',
        objective: [
            'Virtual consultations with general physicians and specialists.',
            'Prescription generation and medication tracking.',
            'Health awareness modules for rural populations (e.g., videos in regional languages).',
            'Offline support (e.g., storing medical records and consultations locally).'
        ],
        expectedImpact: [
            'Timely diagnosis and treatment of illnesses.',
            'Reduced travel costs and effort for rural patients.',
            'Increased awareness of health and hygiene.'
        ]
    },
    {
        id: 4,
        img: img4,
        title: 'Women Safety Application under Mission Shakti',
        domain: 'Women Safety and Empowerment',
        supportingMission: 'Mission Shakti, Ensuring women\'s safety and empowerment is a critical priority. By designing solutions like safety apps or platforms for economic empowerment, you can directly impact the lives of women and foster a more inclusive society.',
        problemStatement: 'Ensuring women\'s safety in public and private spaces is a key priority for India under Mission Shakti. Despite efforts, women still face threats like harassment, violence, and lack of support systems in emergencies.',
        objective: [
            'Real-time Location Tracking: Allow users to share their live location with trusted contacts during travel.',
            'Emergency SOS Alerts: One-tap alerts to notify family, friends, and local authorities with location details.',
            'Incident Reporting: Anonymous reporting of harassment or unsafe areas to build a public safety map.',
            'Safety Guides: Provide region-specific safety tips and emergency contact numbers.',
            'AI-enabled Alerts: Detect risky behavior and trigger automatic notifications.'
        ],
        expectedImpact: [
            'Enhanced safety and quicker response in emergencies.',
            'Increased confidence among women to travel and work freely.',
            'Data-driven identification of unsafe zones for targeted intervention.'
        ]
    },
    {
        id: 5,
        img: img5,
        title: 'Economic Empowerment Platform for Women',
        domain: 'Economic Development and Gender Equality',
        supportingMission: 'Beti Bachao Beti Padhao Mission (BBBP), Education and empowerment of the girl child is pivotal for societal growth.',
        problemStatement: 'Women in India face limited access to career resources, mentorship, and tools to manage entrepreneurial ventures. Supporting their economic independence aligns with the Beti Bachao Beti Padhao Mission.',
        objective: [
            'Career Guidance: Job portals with resources tailored to women\'s needs.',
            'Mentorship Programs: Connections with mentors in various industries.',
            'Entrepreneurial Support: Tools for business management.',
            'Skill Development: Modules for digital literacy, coding, or business skills in regional languages.'
        ],
        expectedImpact: [
            'Increased employment opportunities for women.',
            'Empowered women entrepreneurs with the tools to grow their businesses.',
            'Greater participation of women in India\'s workforce and economic growth.'
        ]
    }
];

export default dataBlog;