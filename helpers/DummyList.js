import OrderByDate from "./OrderByDate"

const dummy_description = `Job Description kk alsdolk, askldmasd asdioa. Auisdakj, asduaishd. 
Job Description kk alsdolk, askldmasd asdioa. Auisdakj, asduaishd.
Job Description kk alsdolk, askldmasd asdioa. Auisdakj, asduaishd.
Job Description kk alsdolk, askldmasd asdioa. Auisdakj, asduaishd.
Job Description kk alsdolk, askldmasd asdioa. Auisdakj, asduaishd.`

const DUMMY_LIST = [
  {
    id: 1,
    title: "Front End Developer",
    companyName: "Zippia",
    location: "New York",
    description: dummy_description,
    createdAt: new Date(1660900000000).toGMTString()
  },
  {
    id: 2,
    title: "Business Analyst",
    companyName: "Netflix",
    location: "Texas",
    description: dummy_description,
    createdAt: new Date(1660600000000).toGMTString()
  },
  {
    id: 3,
    title: "Senior Fullstack Engineer",
    companyName: "Google",
    location: "Alabama",
    description: dummy_description,
    createdAt: new Date(1660900000000).toGMTString()
  },
  {
    id: 4,
    title: "Mid-level Back End Engineer",
    companyName: "Facebook",
    location: "Michigan",
    description: dummy_description,
    createdAt: new Date(1660780000000).toGMTString()
  },
  {
    id: 5,
    title: "Tech Lead",
    companyName: "Netflix",
    location: "Michigan",
    description: dummy_description,
    createdAt: new Date(1661000554688).toGMTString()
  },{
    id: 6,
    title: "Front End Engineer",
    companyName: "Yahoo",
    location: "Texas",
    description: dummy_description,
    createdAt: new Date(1661410000000).toGMTString()
  },
  {
    id: 7,
    title: "Scrum Master",
    companyName: "Zippia",
    location: "New York",
    description: dummy_description,
    createdAt: new Date(1660580000000).toGMTString()
  },
  {
    id: 8,
    title: "Junior Fullstack Engineer",
    companyName: "Yahoo",
    location: "New Jersey",
    description: dummy_description,
    createdAt: new Date(1660800000000).toGMTString()
  },
  {
    id: 9,
    title: "Entry-level Back End Engineer",
    companyName: "Yahoo",
    location: "Atlanta",
    description: dummy_description,
    createdAt: new Date(1660650000000).toGMTString()
  },
  {
    id: 10,
    title: "Senior Tech Lead",
    companyName: "Google",
    location: "California",
    description: dummy_description,
    createdAt: new Date(1661100000000).toGMTString()
  },
  {
    id: 11,
    title: "Fullstack Developer",
    companyName: "Amazon",
    location: "Atlanta",
    description: dummy_description,
    createdAt: new Date(1661378654688).toGMTString()
  }, {
    id: 12,
    title: "Front End Developer",
    companyName: "Netflix",
    location: "California",
    description: dummy_description,
    createdAt: new Date(1661300000000).toGMTString()
  },
  {
    id: 13,
    title: "Business Analyst",
    companyName: "Amazon",
    location: "South Carolina",
    description: dummy_description,
    createdAt: new Date(1660300000000).toGMTString()
  },
  {
    id: 14,
    title: "Senior Fullstack Engineer",
    companyName: "Facebook",
    location: "Washigton",
    description: dummy_description,
    createdAt: new Date(1660500000000).toGMTString()
  },
  {
    id: 15,
    title: "Mid-level Back End Engineer",
    companyName: "Zippia",
    location: "New Jersey",
    description: dummy_description,
    createdAt: new Date(1660510000000).toGMTString()
  },
  {
    id: 16,
    title: "Tech Lead",
    companyName: "Google",
    location: "Chicago",
    description: dummy_description,
    createdAt: new Date(1661376554688).toGMTString()
  },{
    id: 17,
    title: "Front End Engineer",
    companyName: "Google",
    location: "California",
    description: dummy_description,
    createdAt: new Date(1660550000000).toGMTString()
  },
  {
    id: 18,
    title: "Scrum Master",
    companyName: "Zippia",
    location: "Michigan",
    description: dummy_description,
    createdAt: new Date(1660700000000).toGMTString()
  },
  {
    id: 19,
    title: "Junior Fullstack Engineer",
    companyName: "Zippia",
    location: "Chicago",
    description: dummy_description,
    createdAt: new Date(1660620000000).toGMTString()
  },
  {
    id: 20,
    title: "Entry-level Back End Engineer",
    companyName: "Netflix",
    location: "Atlanta",
    description: dummy_description,
    createdAt: new Date(1661200000000).toGMTString()
  },
  {
    id: 21,
    title: "Senior Tech Lead",
    companyName: "Zippia",
    location: "New York",
    description: dummy_description,
    createdAt: new Date(1660700000000).toGMTString()
  }
]
//Order By Date
export default OrderByDate(DUMMY_LIST)