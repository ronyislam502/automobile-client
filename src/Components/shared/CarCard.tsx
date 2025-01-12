import { Card } from "antd";
const { Meta } = Card;

const CarCard = () => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img alt="example" src="https://i.postimg.cc/zfBPwyj1/member-4.jpg" />
      }
    >
      <Meta title="Card title" description="This is the description" />
    </Card>
  );
};

export default CarCard;
