import Marquee from "react-fast-marquee";

import "./Marqee.scss";

import { ReactComponent as IconCircularPattern } from "../../assets/svg/circularpattern.svg";

const Marqee = () => {
  const marqeeList = [
    "Freeship giao thường cho đơn hàng từ 0đ ",
    "BST TRỞ VỀ ĐOÀN VIÊN - VẸN NGUYÊN NẾP TẾT",
    "Quà tặng lên đến 150k cho đơn 1 triệu (Only online)",
    "BST TRỞ VỀ ĐOÀN VIÊN - VẸN NGUYÊN NẾP TẾT",
    "BST Sơ mi Hà Nội - Di sản thanh lịch vượt thời gian",
    "Quà tặng lên đến 150k cho đơn 1 triệu (Only online)",
    "Freeship giao thường cho đơn hàng từ 0đ ",
    "BST TRỞ VỀ ĐOÀN VIÊN - VẸN NGUYÊN NẾP TẾT",
    "Quà tặng lên đến 150k cho đơn 1 triệu (Only online)",
    "BST TRỞ VỀ ĐOÀN VIÊN - VẸN NGUYÊN NẾP TẾT",
    "BST Sơ mi Hà Nội - Di sản thanh lịch vượt thời gian",
    "Quà tặng lên đến 150k cho đơn 1 triệu (Only online)",
  ];

  return (
    <>
      <section className="section marqee">
        <Marquee speed={50} gradient={false} className="list-marqee">
          {marqeeList.map((item, index) => {
            return (
              <div key={index} className="item">
                <div className="box">
                  <IconCircularPattern />
                  <span>{item}</span>
                </div>
              </div>
            );
          })}
        </Marquee>
      </section>
    </>
  );
};

export default Marqee;
