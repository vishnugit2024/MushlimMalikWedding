import React, { useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "./Feedback.css";
import testImage1 from "../../Assets/Testimonail.png";
import testImage2 from "../../Assets/Testimonial1.jpg";
import testImage3 from "../../Assets/Testimonial2.png";
import testImage4 from "../../Assets/Testimonial3.png";
import testImage5 from "../../Assets/Testimonial4.png";
import testImage6 from "../../Assets/Testimonial5.png";

const testimonialList = [
  [
    {
      img: [testImage1],
      name: "Danish",
      designation: "Delhi",
      comment:
        "I never imagined finding my life partner would be so seamless. Thanks to this platform, I met someone who truly understands me and shares my values. Highly recommend it to anyone searching for their soulmate!",
    },
    {
      img: [testImage2],
      name: "Kamal Malik",
      designation: "Haryana",
      comment:
        "This website made the daunting task of finding a compatible partner so much easier. The filters and profiles are very detailed, easy to find someone with similar interests. I’m happily married now.",
    },
    {
      img: [testImage3],
      name: "Sameer Ahmed",
      designation: "Uttar Pradesh",
      comment:
        "The team’s support and the easy-to-use interface are truly commendable. I found my husband here, and we couldn't be happier. Thank you for connecting hearts and making dreams come true!",
    },
  ],
  [
    {
      img: [testImage4],
      name: "Imran Malik",
      designation: "Chenni",
      comment:
        "I was skeptical at first, but after meeting my wife through this platform, all my doubts vanished. The process was secure and transparent. Thank you for helping me find my better half , all thanks to this platform!",
    },
    {
      img: [testImage5],
      name: "Nargis Begum",
      designation: "Mumbai",
      comment:
        "What sets this website apart is its commitment to user satisfaction and genuine profiles. Within months, I found someone who aligns perfectly with my beliefs and aspirations. Grateful beyond words!",
    },
    {
      img: [testImage6],
      name: "Adil Ansari",
      designation: "Punjab",
      comment:
        "I owe my happiness to this matrimonial site. The platform was trustworthy, and the matches were genuinely compatible. It’s a blessing to have found my life partner here, all thanks to this platform!",
    },
  ],
];

const TestimonialItem = ({ testimonial }) => {
  return (
    <Row>
      {testimonial.map((item, i) => {
        const { img, name, designation, comment } = item;
        return (
          <Col xs={12} lg={4} key={i}>
            <Card className="ezy__testimonial24-item border-0">
              <Card.Body>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">
                    <img
                      src={img}
                      alt=""
                      className="img-fluid rounded-circle border"
                      width="85"
                    />
                  </div>
                  <div>
                    <h4 className="mb-1 fs-4">{name}</h4>
                    <p className="mb-0">{designation}</p>
                  </div>
                </div>
                <p className="opacity-75">{comment}</p>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

const Feedback = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section className="ezy__testimonial24 light">
      <Container>
        <Row className="align-items-center justify-content-between mb-4 mb-md-5">
          <Col xs={12} className="text-center">
            <hr className="ezy__testimonial24-divider mb-3" />
            <h2 className="ezy__testimonial24-heading mb-0">What They Say</h2>
          </Col>
        </Row>
        <Carousel
          interval={2000} // Auto-slide every 3 seconds
        >
          {testimonialList.map((testimonial, i) => (
            <Carousel.Item key={i}>
              <TestimonialItem testimonial={testimonial} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Feedback;
