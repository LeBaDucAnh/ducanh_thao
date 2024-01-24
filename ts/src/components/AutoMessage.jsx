import React, { useEffect } from 'react';
import { message } from 'antd';

const YourComponent = () => {
  useEffect(() => {
    // Đặt timeout để tự động hiển thị thông báo sau 10 giây
    const greetingTimeout = setTimeout(() => {
      message.success('Xin chào!'); // Hiển thị thông báo xin chào
    }, 10000); // 10 giây

    // Xóa timeout khi component unmount
    return () => clearTimeout(greetingTimeout);
  }, []);

  return (
    <div>
      {/* Nội dung component */}
    </div>
  );
};

export default YourComponent;
