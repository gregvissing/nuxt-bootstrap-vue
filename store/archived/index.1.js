/* eslint-disable */
import Vuex from "vuex";

export const state = () => ({
    message: "Hello World!",
    pageTitle: "Default Title"
});

export const mutations = {
    // Some Vuex mutations here
    SET_PAGE_TITLE(state, title) {
        state.pageTitle = title;
    }
};

// Cart page
export const amounts = [{
        text: "$50",
        value: "50",
    },
    {
        text: "$100",
        value: "100",
    },
    {
        text: "$250",
        value: "250",
    },
    {
        text: "$500",
        value: "500",
    },
    {
        text: "$1000",
        value: "1000",
    },
    // {
    //     text: "Other Amount",
    //     value: "other",
    // }
];

// Why Give page
export const whygive = [{
        title: "Stories",
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
        title: "Photos and Videos",
        text: "This card has supporting text below as a natural lead-in to additional content."
    },
    {
        title: "Share Your Story",
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
    }
];

// Home page
export const featuredfunds = [{
        title: "ALS Research",
        text: "To be used exclusively for neurological research with particular preference for research directed toward the discovery of a cure for Amyotrophic Lateral Sclerosis (ALS).",
        image: "https://foundation.uc.edu/file/projects/ucgni-search/images/UCGNI.jpg",
        donateLink: "https://foundation.uc.edu/donate?id=d1b14e18-0b9c-4c0e-8a19-5555cef86abc"
    },
    {
        title: "Movement Education Fund",
        text: "Supports movement education in the Department of Neurology and Rehabilitation Medicine.",
        image: "https://foundation.uc.edu/file/projects/ucgni-search/images/UCGNI.jpg",
        donateLink: "https://foundation.uc.edu/donate?id=42353ba8-2e2e-41e6-9065-86c039b3bfd4"
    },
    {
        title: "Scripps Fund for the Neuroscience Institute",
        text: "To be used as start up money for the first stage of establishing the Neuroscience Institute at the University of Cincinnati College of Medicine.",
        image: "https://foundation.uc.edu/file/projects/ucgni-search/images/UCGNI.jpg",
        donateLink: "https://foundation.uc.edu/donate?id=cc076e87-3f2f-4dc5-935d-0ba0bd5ea2c5"
    }
];

// Home page
export const areasToSupport = [{
        title: "Law",
        icon: "gavel",
        color: "orange"
    },
    {
        title: "Engineering",
        icon: "calculator",
        color: "blue"
    },
    {
        title: "Nursing",
        icon: "user-nurse",
        color: "red"
    },
    {
        title: "Science",
        icon: "vials",
        color: "green"
    },
    {
        title: "Medicine",
        icon: "briefcase-medical",
        color: "purple"
    },
    {
        title: "Criminal Justice",
        icon: "balance-scale",
        color: "black"
    },
    {
        title: "Pharmacy",
        icon: "prescription-bottle-alt",
        color: "tomato"
    }
];

// Home page
export const impactstories = [{
        name: "Chara Hood",
        title: "Inventing Tomorrow",
        text: "<p>Chara Hood is not easily discouraged. During a recent co-op with L'Oréal, the third year chemical engineering student was asked to resolve why a machine wasn't capping a shampoo bottle efficiently, a challenge she relished.</p><blockquote > \"I have a knack for looking at multiple perspectives of a problem and finding solutions,\"she says. \"That's why I am drawn to engineering.\"</blockquote><p> The same determination that allowed her to conquer the shampoo cap propelled Hood to seek out UC's Emerging Ethnic Engineers (E3), a program empowering underrepresented ethnic students in UC's College of Engineering and Applied Science.Through E3, Hood found her best friends, connected with faculty and received a much - needed scholarship from the Marathon Petroleum Scholars program. </p>",
        image: "https://foundation.uc.edu/image/annual-report/2018/impactstories/chara-hood.jpg"
    },
    {
        name: "the Crawfords",
        title: "Opening Doors",
        text: "<p>After 55 years of marriage, Dr. Alvin Crawford and Alva Jean Crawford still make each other laugh. Together, they've attended college, raised a family, built successful careers. All of this is rooted in the love and lessons bestowed by their families.</p><p>The Memphis natives learned that lifting others was part of daily life. Taking this to heart, Dr. Crawford became a pediatric orthopedic surgeon; he is Professor Emeritus in Pediatrics and Orthopedic Surgery at UC's College of Medicine and a UC Health physician. Mrs. Crawford is a retired high school educator.</p><blockquote>\"If someone helps you and you're on the receiving end, you really never ever forget that,\" Dr. Crawford says. \"If you're on the giving end, it just feels good.\"</blockquote>",
        image: "https://foundation.uc.edu/image/annual-report/2018/impactstories/crawford.jpg"
    },
    {
        name: "Heidi Jark",
        title: "Saving Lives",
        text: '<p>At 19, Heidi Jark endured 40 rounds of radiation for Hodgkin\'s lymphoma. She spent three months living alone in a hotel while receiving treatment in Rochester, Minnesota, 350 miles away from her parents\' farm where they were tending to planting season.</p><p>Thirty-four years later, as managing director and senior vice president of the Foundation Office at Fifth Third Bank, she played a role in the decision to give $10 million toward the Cincinnati Cancer Center\'s effort to achieve a National Cancer Institute (NCI) designation.</p><blockquote>"When you think of the impact any disease has and if we can do something to improve the quality of care for our own employees and citizens, why would we not do that?" she says. "Why would we not make the investment?"</blockquote>',
        image: "https://foundation.uc.edu/image/annual-report/2018/impactstories/heidi-jark.jpg"
    }
];

// Areas to Support
export const areas = [{
        id: 0,
        name: "Colleges and School",
        description: "Your support of individual colleges within the University of Cincinnati helps support scholarships, research and special programs throughout UC. Select a college below to learn more about that school's vision and read about funds that have been identified as priorities.",
        subareas: [{
                name: "College of Allied Health Sciences",
                description: "",
                about: "The College of Allied Health Sciences educates and prepares future health and other health science professionals to provide high-quality service in their respective fields. In conjunction with community-based partners, students achieve clinical skills and learn the values of critical thinking, good communication, teamwork, cultural competence and service learning. The college's faculty is committed to excellence in teaching, research, service and leadership.",
                vision: "The College of Allied Health Sciences aspires to be a preeminent leader in healthcare profession and education, to nurture its students so they meet their fullest potential and allow them to become outstanding professionals and individuals. Together, the college of allied health sciences and its alumni will transform our healthcare community through proper clinical treatment, prevention, skill and knowledge.",
                fundingOpportunities: [{
                        name: "College Scholarship & Program Funds For Ongoing Contributions",
                        funds: [{
                                fundName: "College of Allied Health Sciences Annual Fund ",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "College of Allied Health Sciences Dean's Endowed Diversity Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "CAHS Nutrition for Better Health Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            }
                        ]
                    },
                    {
                        name: "Clinical Health Information Sciences",
                        funds: [{
                                fundName: "College of Allied Health Sciences Annual Fund ",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "College of Allied Health Sciences Dean's Endowed Diversity Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "CAHS Nutrition for Better Health Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            }
                        ]
                    },
                    {
                        name: "Communication Sciences & Disorders Scholarships",
                        funds: [{
                                fundName: "College of Allied Health Sciences Annual Fund ",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "College of Allied Health Sciences Dean's Endowed Diversity Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "CAHS Nutrition for Better Health Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            }
                        ]
                    },
                    {
                        name: "Rehabilitation Exercise & Nutritional Sciences",
                        funds: [{
                                fundName: "College of Allied Health Sciences Annual Fund ",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "College of Allied Health Sciences Dean's Endowed Diversity Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "CAHS Nutrition for Better Health Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            }
                        ]
                    },
                    {
                        name: "School of Social Work Scholarships",
                        funds: [{
                                fundName: "College of Allied Health Sciences Annual Fund ",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "College of Allied Health Sciences Dean's Endowed Diversity Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            },
                            {
                                fundName: "CAHS Nutrition for Better Health Scholarship*",
                                description: "Unrestricted funds that are used to support faculty, students, and programs where the need is greatest."
                            }
                        ]
                    }
                ]
            },
            {
                name: "McMicken College of Arts & Sciences",
                description: "",
                about: "As the oldest and largest college at the University of Cincinnati, the McMicken College of Arts and Sciences is home to more than 8,000 students, 500 faculty, and 21 academic departments. Our dedicated teachers preserve our founder's mission to provide young people with a quality university education, and McMicken college researchers have contributed to breakthroughs both life-changing and light-hearted, from the development of the first antihistamine to the design of the Pringles potato chip.",
                vision: "We are inspired to preserve the liberal arts tradition, which is at the very core of what it means to be an educated citizen. We challenge our students to think critically and analytically, to challenge assumptions, and to discover creative solutions to the world's most complex issues. Our alumni serve as community and industry leaders, winning awards such as the Japan Prize and acheiving milestones like Ted Berry '28, the first African-American mayor of Cincinnati."
            },
            {
                name: "Carl H. Lindner College of Business",
                description: "",
                about: "Since 1906, we have placed students at the forefront of business by harnessing the power of Greater Cincinnati and its community. As part of a thriving top-25 research university in a city with eight Fortune 500 companies, the Lindner College of Business delivers academic excellence with an emphasis on experiential learning in a multi-disciplinary environment, adding real-world value to students and the communities they serve.",
                vision: "We will be a leading business college, a highly valued partner for business expertise and a catalyst for growth and development. Core values provide a compass to guide us to the future. Our values are:<ul><li>Collaboration - We value shared decision-making, teamwork and partnerships.</li><li>Respect - We value the contributions of each individual and our relationship with others.</li><li>Inquiry - We value intellectual curiosity, creativity and rigor that enable life-long learning.</li><li>Knowledge Creation - We value research and its translation for students, business and scholarly communities.</li></ul></li>"
            },
            {
                name: "UC Clermont College",
                description: "",
                about: "UC Clermont College is a regional campus located in the center of Clermont County in Batavia Township. Opened in 1972, Clermont College is an accredited, open-access college offering more than 50 associate degrees and certificate programs. The college began offering a technical bachelor’s degree in the fall of 2011 – the Bachelor's Degree in Applied Administration. UC Clermont College provides a great starting place where students will receive educational experiences to forge their futures.",
                vision: "UC Clermont College provides student-centered undergraduate education and life-long learning in an open-access, regional college environment. We foster diversity as well as intellectual, cultural, and social development in our community."
            },
            {
                name: "College-Conservatory of Music",
                description: "",
                about: "The University of Cincinnati College-Conservatory of Music (CCM)is recognized both nationally and internationally as one of the leading conservatories of the performing and media arts. CCM offers the benefit of a professional training conservatory within the setting of a comprehensive public university. Annually, CCM produces over 1,000 recitals and full scale productions and has the largest single source of performances in Ohio. Over 10,000 graduates have achieved notable success internationally.",
                vision: "CCM–UnCompromising Excellence<br/> CCM provides life-changing experiences within a highly creative and multidisciplinary artistic environment."
            },
            {
                name: "College of Design, Architecture, Art, and Planning",
                description: "",
                about: "The University of Cincinnati College of Design, Architecture, Art, and Planning (DAAP) is located on UC's main campus. DAAP is consistently rated as one of the most prestigious design schools in the United States and world. The college is distinguished for its mandatory co-operative education program, where students alternate between working as paid employees in design firms and attending classes, giving them experience that enables them to easily enter the workplace after graduation.",
                vision: "DAAP's main focus is on creating a better visual and design environment. Through excellence in educational programs, research, creative works, and services to the community, the faculty, the students and administrative officers of DAAP are dedicated to achieving this mission."
            },
            {
                name: "College of Education, Criminal Justice and Human Services",
                description: "",
                about: "CECH is committed to the pursuit of discovery and excellence in research, teaching and service that addresses real world challenges and opportunities to create positive social change. We prepare students to maximize their ability to have a positive impact and to be contributing members to society.",
                vision: "CECH is committed to the following values in achieving our mission:<ul><li>Innovation: exploring, discovering, and implementing new ideas, methods and applications;</li><li>Partnership: seeking out opportunities for partnership in our academic, research, and community pursuits;</li><li>Diversity: embracing and celebrating variation in styles, cultures, and disciplines;</li><li>Leadership: leading through research and by empowering individuals, communities, and organizations to evolve and facilitate change through best practices;</li><li>Support: providing an environment where faculty, staff and students thrive.</li></ul>"
            },
            {
                name: "College of Engineering and Applied Science",
                description: "",
                about: "",
                vision: ""
            },
            {
                name: "College of Law",
                description: "",
                about: "",
                vision: ""
            },
            {
                name: "College of Medicine",
                description: "",
                about: "",
                vision: ""
            },
            {
                name: "College of Nursing",
                description: "",
                about: "",
                vision: ""
            },
            {
                name: "James L. Winkle College of Pharmacy",
                description: "",
                about: "",
                vision: ""
            },
            {
                name: "UC Blue Ash College",
                description: "",
                about: "",
                vision: ""
            },
            {
                name: "The Graduate School",
                description: "",
                about: "",
                vision: ""
            }
        ]
    },
    {
        id: 1,
        name: "Scholarships",
        description: "Support scholarship programs to make an impact directly on the lives of students in need. Select a scholarship fund below to learn more about special scholarship initiatives and how you can support students today.",
        subareas: [{
                name: "UC Alumni Association",
                description: ""
            },
            {
                name: "Annual Giving",
                description: ""
            },
            {
                name: "UC Bearcats Pantry",
                description: ""
            },
            {
                name: "Diversity Initiatives",
                description: ""
            },
            {
                name: "Henry R. Winkler Center",
                description: ""
            },
            {
                name: "Gen-1 House",
                description: ""
            },
            {
                name: "Institute for Policy Research",
                description: ""
            },
            {
                name: "Osher Lifelong Learning Institute",
                description: ""
            },
            {
                name: "UC Parents Campaign",
                description: ""
            },
            {
                name: "Research",
                description: ""
            },
            {
                name: "A Salute to Service Program",
                description: ""
            },
            {
                name: "Science Programs",
                description: ""
            },
            {
                name: "Student Life",
                description: ""
            },
            {
                name: "UCATS - UC Athletics Team Support",
                description: ""
            },
            {
                name: "University Honors Program",
                description: ""
            },
            {
                name: "UC International",
                description: ""
            },
            {
                name: "UC Libraries",
                description: ""
            },
            {
                name: "Provost Programs",
                description: ""
            }
        ]
    },
    {
        id: 2,
        name: "UC Health",
        description: "Support programs within UC Health that promote patient care, treatment and cutting-edge research. Select an area below to learn more about funding priorities and how you can make a difference in the areas you value most.",
        subareas: [{
                name: "UC Cancer Institute",
                description: ""
            },
            {
                name: "UC Gardner Neuroscience Institute",
                description: ""
            },
            {
                name: "Heart, Lung & Vascular Institute",
                description: ""
            }
        ]
    },
    {
        id: 3,
        name: "University-wide Initiatives",
        description: "Learn more about programs that make an impact across all areas of UC and UC Health. Select an area below to learn more about funding priorities and how you can make a difference in the areas you value most.",
        subareas: [{
                name: "Cincinnatus Scholarship Program",
                description: ""
            },
            {
                name: "Darwin T. Turner Scholars Program",
                description: ""
            },
            {
                name: "Linda Bates Parker Scholarship",
                description: ""
            },
            {
                name: "UCAA Scholarships",
                description: ""
            },
            {
                name: "Athletic Scholarships",
                description: ""
            },
            {
                name: "Endowed Funds & Scholarships",
                description: ""
            },
            {
                name: "Lindner Honors-PLUS Scholarship Program",
                description: ""
            },
            {
                name: "Kolodzik Business Scholars Program",
                description: ""
            },
            {
                name: "Business Fellows Annual Scholarship Fund",
                description: ""
            }
        ]
    }
];

// Ways to Give
export const ways = [{
        // export const ways = () => ({
        name: "Matching Gifts",
        description: "<p>Matching gift programs are a tremendous opportunity to double, or even triple, the impact of your gift!</p><p>Many employers sponsor matching gift programs and will match any charitable contributions made by their employees to the University of Cincinnati. Some companies match gifts made by retirees and/or spouses, so don’t forget to check your spouse’s employer as well!</p><p><strong>Find out if your company has a matching gift program.</strong></p>"
    },
    {
        name: "Gift Planning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere suscipit odio dignissim porta. Sed pharetra ex ut lectus lobortis, quis pellentesque tortor scelerisque. Vestibulum ut pellentesque velit. Fusce a pulvinar dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas porta varius convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        name: "Faculty & Staff Campaign",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere suscipit odio dignissim porta. Sed pharetra ex ut lectus lobortis, quis pellentesque tortor scelerisque. Vestibulum ut pellentesque velit. Fusce a pulvinar dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas porta varius convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        name: "Annual Giving",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere suscipit odio dignissim porta. Sed pharetra ex ut lectus lobortis, quis pellentesque tortor scelerisque. Vestibulum ut pellentesque velit. Fusce a pulvinar dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas porta varius convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        name: "Corporate & Foundation Relations",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere suscipit odio dignissim porta. Sed pharetra ex ut lectus lobortis, quis pellentesque tortor scelerisque. Vestibulum ut pellentesque velit. Fusce a pulvinar dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas porta varius convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    }
];

const createStore = () => {
    return new Vuex.Store({
        state: {
            cartTotal: 0,
            cart: {},
            sale: false,
            products: [{
                    name: "Albert Barnes Voorheis",
                    description: "Income supports a professorship of neurology.",
                    hierachy: "https://foundation.uc.edu/donate?id=9795d396-2ab5-4001-a3c0-0e20ff745fde",
                    price: 149.99,
                    category: "women",
                    sale: false,
                    article: "shoe"
                },
                {
                    name: "ALS Research",
                    description: "To be used exclusively for neurological research with particular preference for research directed toward the discovery of a cure for Amyotrophic Lateral Sclerosis (ALS).",
                    hierachy: "https://foundation.uc.edu/donate?id=d1b14e18-0b9c-4c0e-8a19-5555cef86abc",
                    price: 139.99,
                    category: "women",
                    sale: false,
                    article: "shoe"
                },
                {
                    name: "Alzheimer Research Fund - Psychiatry",
                    description: "To support Alzheimer's research in the Department of Psychiatry.",
                    hierachy: "https://foundation.uc.edu/donate?id=0c68e179-ea30-46d4-8669-2a06875cafd6",
                    price: 149.99,
                    category: "women",
                    sale: false,
                    article: "shoe"
                },
                {
                    name: "College of Law Annual Fund",
                    description: "To be used exclusively for neurological research with particular preference for research directed toward the discovery of a cure for Amyotrophic Lateral Sclerosis (ALS).",
                    hierachy: "https://foundation.uc.edu/donate?id=d1b14e18-0b9c-4c0e-8a19-5555cef86abc",
                    price: 139.99,
                    category: "College of Law",
                    sale: false,
                    article: "shoe"
                },
                {
                    name: "C. Thomas and Fay Danner Dupuis Public Service Scholarship Endowment Fund",
                    description: "To be used exclusively for neurological research with particular preference for research directed toward the discovery of a cure for Amyotrophic Lateral Sclerosis (ALS).",
                    hierachy: "https://foundation.uc.edu/donate?id=d1b14e18-0b9c-4c0e-8a19-5555cef86abc",
                    price: 139.99,
                    category: "College of Law",
                    sale: false,
                    article: "shoe"
                },

                {
                    name: "College of Nursing Annual Fund",
                    description: "To be used exclusively for neurological research with particular preference for research directed toward the discovery of a cure for Amyotrophic Lateral Sclerosis (ALS).",
                    hierachy: "https://foundation.uc.edu/donate?id=d1b14e18-0b9c-4c0e-8a19-5555cef86abc",
                    price: 139.99,
                    category: "Nursing",
                    sale: false,
                    article: "shoe"
                },
                {
                    name: "Center for Aging with Dignity Fund",
                    description: "To be used exclusively for neurological research with particular preference for research directed toward the discovery of a cure for Amyotrophic Lateral Sclerosis (ALS).",
                    hierachy: "https://foundation.uc.edu/donate?id=d1b14e18-0b9c-4c0e-8a19-5555cef86abc",
                    price: 139.99,
                    category: "Nursing",
                    sale: false,
                    article: "shoe"
                },
            ]
        },
        getters: {
            women: state => filter(state.products, "category", "women"),
            men: state => filter(state.products, "category", "men"),
            sale: state => filter(state.products, "sale", true)
        },
        mutations: {
            switchSale: state => {
                state.sale = !state.sale;
            },
            clearCartCount: state => {
                state.cartTotal = 0;
            },
            clearCartContents: state => {
                state.cart = {};
            },
            addItem: (state, item) => {
                state.cartTotal++;
                if (item.name in state.cart) {
                    state.cart[item.name].count++;
                } else {
                    let stateItem = Object.assign({}, item);
                    stateItem.count = 1;
                    state.cart[item.name] = stateItem;
                }
            }
        },

        // actions: {
        //     fetchFund({
        //         commit
        //     }) {
        //         return new Promise((resolve, reject) => {
        //             Vue.http.get("https://jsonplaceholder.typicode.com/users")
        //                 .then((response) => {
        //                     commit("FETCH_FUNDS", response.body);
        //                     resolve();
        //                 })
        //                 .catch((error => {
        //                     console.log(error.statusText);
        //                 }));
        //         });
        //     }
        // }
    });
};

// Sarah Drasner Store example
// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       cartTotal: 0,
//       cart: {},
//       sale: false,
//       products: [{
//           name: 'Khaki Suede Polish Work Boots',
//           price: 149.99,
//           category: 'women',
//           sale: true,
//           article: 'shoe',
//           img: 'shoe1.png'
//         },
//         {
//           name: 'Camo Fang Backpack Jungle',
//           price: 39.99,
//           category: 'women',
//           sale: false,
//           article: 'jacket',
//           img: 'jacket1.png'
//         },
//         {
//           name: 'Parka and Quilted Liner Jacket',
//           price: 49.99,
//           category: 'men',
//           sale: true,
//           article: 'jacket',
//           img: 'jacket2.png'
//         },
//         {
//           name: 'Cotton Black Cap',
//           price: 12.99,
//           category: 'men',
//           sale: true,
//           article: 'hats',
//           img: 'hat1.png'
//         },
//         {
//           name: 'Knit Sweater with Zips',
//           price: 29.99,
//           category: 'women',
//           sale: false,
//           article: 'sweater',
//           img: 'sweater1.png'
//         },
//         {
//           name: 'Long Linen-blend Shirt',
//           price: 18.99,
//           category: 'men',
//           sale: false,
//           article: 'shirt',
//           img: 'shirt1.png'
//         },
//         {
//           name: 'Knit Orange Sweater',
//           price: 28.99,
//           category: 'men',
//           sale: false,
//           article: 'sweater',
//           img: 'sweater2.png'
//         },
//         {
//           name: 'Cotton Band-collar Blouse',
//           price: 49.99,
//           category: 'men',
//           sale: false,
//           article: 'shirt',
//           img: 'shirt2.png'
//         },
//         {
//           name: 'Camo Fang Backpack Jungle',
//           price: 59.99,
//           category: 'women',
//           sale: true,
//           article: 'jacket',
//           img: 'jacket3.png'
//         },
//         {
//           name: 'Golden Pilot Jacket',
//           price: 129.99,
//           category: 'women',
//           sale: false,
//           article: 'jacket',
//           img: 'jacket4.png'
//         },
//         {
//           name: 'Spotted Patterned Sweater',
//           price: 80.99,
//           category: 'women',
//           sale: false,
//           article: 'jacket',
//           img: 'sweater4.png'
//         },
//         {
//           name: 'Double Knit Sweater',
//           price: 59.99,
//           category: 'men',
//           sale: true,
//           article: 'jacket',
//           img: 'sweater5.png'
//         }
//       ]
//     },
//     getters: {
//       women: state => filter(state.products, 'category', 'women'),
//       men: state => filter(state.products, 'category', 'men'),
//       sale: state => filter(state.products, 'sale', true)
//     },
//     mutations: {
//       switchSale: state => {
//         state.sale = !state.sale;
//       },
//       clearCartCount: state => {
//         state.cartTotal = 0;
//       },
//       clearCartContents: state => {
//         state.cart = {};
//       },
//       addItem: (state, item) => {
//         state.cartTotal++;
//         if (item.name in state.cart) {
//           state.cart[item.name].count++;
//         } else {
//           let stateItem = Object.assign({}, item);
//           stateItem.count = 1;
//           state.cart[item.name] = stateItem;
//         }
//       }
//     }
//   });
// };

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);

// fetchFund({
//     commit
// }) {
//     return new Promise((resolve, reject) => {
//         const url =
//             "https://foundation.uc.edu/WebApi/Query/d968555d-dea8-4c1a-9b5c-4e3be2d750be";
//         axios
//             .get(url, {
//                 responseType: "xml"
//             })
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(error => console.log(error.message, " @@@"));
//         $.get('https://foundation.uc.edu/WebApi/Query/d968555d-dea8-4c1a-9b5c-4e3be2d750be/', function (xml) {
//                 console.log(xml);
//             })
//             // Vue.http.get("hhttps://foundation.uc.edu/WebApi/Query/d968555d-dea8-4c1a-9b5c-4e3be2d750be/")
//             .then((response) => {
//                 commit("FETCH_FUNDS", response.body);
//                 resolve();
//             })
//             .catch((error => {
//                 console.log(error.statusText);
//             }));
//     });
// }

// mounted() {
//         this.fetchItems();
//     },

//     methods: {
//         fetchItems() {
//             var vm = this;
//             axios
//                 .get(
//                     "https://foundation.uc.edu/WebApi/Query/d968555d-dea8-4c1a-9b5c-4e3be2d750be"
//                 )
//                 .then(response => {
//                     this.rows = [...Object.values(response.data.Rows)];
//                     // console.log(this.rows);
//                     // var topLevelAll = [];
//                     // var fundMaster = [];
//                     var areaMaster = [];
//                     $.each(this.rows, function () {
//                         // define values
//                         var values = this.Values;

//                         var area = values[8];
//                         areaMaster.push(area);
//                     });

//                     function onlyUnique(value, index, self) {
//                         return self.indexOf(value) === index;
//                     }
//                     var topLevelUnique = areaMaster.filter(onlyUnique);
//                     console.log(topLevelUnique);
//                     vm.areaList = topLevelUnique;

//                     // function multiDimensionalUnique(arr) {
//                     //     var uniques = [];
//                     //     var itemsFound = {};
//                     //     for (var i = 0, l = arr.length; i < l; i++) {
//                     //         var stringified = JSON.stringify(arr[i]);
//                     //         if (itemsFound[stringified]) {
//                     //             continue;
//                     //         }
//                     //         if (arr[i][0].length != 0) {
//                     //             uniques.push(arr[i]);
//                     //         }
//                     //         itemsFound[stringified] = true;
//                     //     }
//                     //     return uniques;
//                     // }
//                     // var uniqueFunds = multiDimensionalUnique(fundMaster);

//                     // var fundArr = [];
//                     // $.each(uniqueFunds, function(x, subFund) {
//                     //     var fundRowData = {
//                     //         title: subFund[0],
//                     //         desc: subFund[1],
//                     //         titledesc: subFund[0] + " " + subFund[1]
//                     //     };
//                     //     fundArr.push(fundRowData);
//                     // });
//                     // // console.log(fundArr);
//                     // this.items = fundArr;
//                 });
//         }
//     }
