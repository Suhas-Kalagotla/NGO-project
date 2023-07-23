import react from 'react'; 
import Divs from '../divs/Divs'; 
import scholarship from "../../images/Scholarship.webp"; 
import infra from "../../images/school.jpeg"; 
import education from "../../images/education.jpeg"; 
import Footer from "../footer/Footer"; 
const Home =()=>{

  const Content=[
    {
      title:"We Provide",
      heading:"Scholarship",
      para:"Scholarships are a valuable form of financial assistance for students pursuing their academic goals. They provide a range of benefits, including financial support, academic recognition, and career opportunities.",
      src:scholarship,
      direction:"right",
    },
    {
      title:"We Help",
      heading:"Building School Infrastructure",
      para:"School infrastructure plays a critical role in creating a conducive learning environment for students.Classrooms are the most critical part of a school's infrastructure. They should be spacious, well ventilated, and adequately lit to create an environment that is conducive to learning. The classrooms should have comfortable seating arrangements and a clean environment that fosters concentration and learning.",
      src:infra,
      direction:"left",
    },
    {
      title:"Awareness program on",
      heading:"Importance of Education",
      para:"Education is essential for the growth and development of individuals and societies. However, in many villages, there is a lack of awareness about the importance of education, leading to low enrollment rates and high dropout rates. Awareness programs and camps can help address this issue by promoting the benefits of education and encouraging students to pursue their academic goals.",
      src:education,
      direction:"right",
    }
  ]
                  
  return (
    <>
    {
      Content.map((item,index)=>(
        <Divs 
        key={index}
        title={item.title}
        heading={item.heading}
        para={item.para}
        src={item.src}
        direction={item.direction}
        />
        ))
      }
      <Footer/>
    </>
    )
  
}

export default Home ; 