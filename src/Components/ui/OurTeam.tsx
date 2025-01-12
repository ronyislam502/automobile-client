import { Card } from "antd";
import SectionTitle from "../shared/SectionTitle";
const { Meta } = Card;

const OurTeam = () => {
  return (
    <div>
      <SectionTitle heading="Our Team" />
      <div className="max-w-6xl mx-auto px-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://i.postimg.cc/zfBPwyj1/member-4.jpg"
            />
          }
        >
          <Meta title="Card title" description="This is the description" />
        </Card>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://i.postimg.cc/qMsYpVRW/member-3.jpg"
            />
          }
        >
          <Meta title="Card title" description="This is the description" />
        </Card>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://i.postimg.cc/K8QHgPtN/member-2.jpg"
            />
          }
        >
          <Meta title="Card title" description="This is the description" />
        </Card>
      </div>
    </div>
  );
};

export default OurTeam;
